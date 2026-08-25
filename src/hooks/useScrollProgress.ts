import { useEffect, useRef, useState, useCallback } from 'react';

export type ScrollSubscriber = (progress: number) => void;
export type SectionSubscriber = (progress: number) => void;

interface ScrollDimensions {
  offsetTop: number;
  offsetHeight: number;
}

export function useScrollProgress(sectionCount: number) {
  const sectionsRef = useRef<(HTMLElement | null)[]>(
    Array.from({ length: sectionCount }, () => null),
  );

  const [activeSection, setActiveSection] = useState(-1);
  const activeSectionRef = useRef(-1);

  const pageSubscribers = useRef<Set<ScrollSubscriber>>(new Set());
  const sectionSubscribers = useRef<Map<number, Set<SectionSubscriber>>>(new Map());

  const targetRef = useRef({
    pageProgress: 0,
    sectionProgress: Array.from({ length: sectionCount }, () => 0),
  });

  const currentRef = useRef({
    pageProgress: 0,
    sectionProgress: Array.from({ length: sectionCount }, () => 0),
  });

  const sectionDimensionsRef = useRef<(ScrollDimensions | null)[]>(
    Array.from({ length: sectionCount }, () => null),
  );

  const registerSection = useCallback(
    (index: number, el: HTMLElement | null) => {
      sectionsRef.current[index] = el;
      sectionDimensionsRef.current[index] = null;
    },
    [],
  );

  const subscribeToPage = useCallback((cb: ScrollSubscriber) => {
    pageSubscribers.current.add(cb);
    return () => pageSubscribers.current.delete(cb);
  }, []);

  const subscribeToSection = useCallback((index: number, cb: SectionSubscriber) => {
    if (!sectionSubscribers.current.has(index)) {
      sectionSubscribers.current.set(index, new Set());
    }
    sectionSubscribers.current.get(index)!.add(cb);
    return () => sectionSubscribers.current.get(index)!.delete(cb);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;
    let isRunning = true;

    const measureSections = () => {
      const scrollY = window.scrollY;
      sectionsRef.current.forEach((el, i) => {
        if (!el) {
          sectionDimensionsRef.current[i] = null;
          return;
        }
        const rect = el.getBoundingClientRect();
        sectionDimensionsRef.current[i] = {
          offsetTop: rect.top + scrollY,
          offsetHeight: el.offsetHeight,
        };
      });
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pageProgress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;

      let needsMeasure = false;
      for (let i = 0; i < sectionsRef.current.length; i++) {
        if (sectionsRef.current[i] && !sectionDimensionsRef.current[i]) {
          needsMeasure = true;
          break;
        }
      }
      if (needsMeasure) {
        measureSections();
      }

      let newActiveSection = -1;
      const sectionProgress: number[] = [];
      const viewportHeight = window.innerHeight;

      for (let i = 0; i < sectionsRef.current.length; i++) {
        const dim = sectionDimensionsRef.current[i];
        if (!dim) {
          sectionProgress.push(0);
          continue;
        }

        const sectionHeight = dim.offsetHeight - viewportHeight;
        if (sectionHeight <= 0) {
          sectionProgress.push(0);
          continue;
        }

        const scrolledPast = scrollY - dim.offsetTop;
        const progress = Math.min(1, Math.max(0, scrolledPast / sectionHeight));
        sectionProgress.push(progress);

        const rectTop = dim.offsetTop - scrollY;
        const rectBottom = rectTop + dim.offsetHeight;
        if (rectTop <= viewportHeight * 0.5 && rectBottom >= viewportHeight * 0.5) {
          newActiveSection = i;
        }
      }

      targetRef.current = { pageProgress, sectionProgress };

      if (newActiveSection !== activeSectionRef.current) {
        activeSectionRef.current = newActiveSection;
        setActiveSection(newActiveSection);
      }
    };

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const loop = () => {
      if (!isRunning) return;

      const target = targetRef.current;
      const current = currentRef.current;
      
      const factor = 0.08; 
      const threshold = 0.0001;

      let newPageProgress = lerp(current.pageProgress, target.pageProgress, factor);
      if (Math.abs(newPageProgress - target.pageProgress) < threshold) {
        newPageProgress = target.pageProgress;
      }
      if (newPageProgress !== current.pageProgress) {
        current.pageProgress = newPageProgress;
        pageSubscribers.current.forEach((cb) => cb(newPageProgress));
      }

      for (let i = 0; i < current.sectionProgress.length; i++) {
        let np = lerp(current.sectionProgress[i], target.sectionProgress[i] || 0, factor);
        if (Math.abs(np - (target.sectionProgress[i] || 0)) < threshold) {
          np = target.sectionProgress[i] || 0;
        }
        if (np !== current.sectionProgress[i]) {
          current.sectionProgress[i] = np;
          const subs = sectionSubscribers.current.get(i);
          if (subs) {
            subs.forEach((cb) => cb(np));
          }
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measureSections, { passive: true });
    
    onScroll();
    
    currentRef.current = {
      pageProgress: targetRef.current.pageProgress,
      sectionProgress: [...targetRef.current.sectionProgress],
    };
    pageSubscribers.current.forEach((cb) => cb(currentRef.current.pageProgress));
    for (let i = 0; i < currentRef.current.sectionProgress.length; i++) {
      const subs = sectionSubscribers.current.get(i);
      if (subs) {
        subs.forEach((cb) => cb(currentRef.current.sectionProgress[i]));
      }
    }

    rafId = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measureSections);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [sectionCount]);

  return { activeSection, registerSection, subscribeToPage, subscribeToSection };
}
