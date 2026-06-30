import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollState {
  /** Overall page scroll progress 0–1 */
  pageProgress: number;
  /** Index of the currently active section (-1 = none) */
  activeSection: number;
  /** Per-section progress values (0–1 each) */
  sectionProgress: number[];
}

/**
 * Tracks scroll progress for the page and for each element whose ref
 * is registered via `registerSection`.
 *
 * Uses a lerp (linear interpolation) loop via requestAnimationFrame
 * to make the scroll output values perfectly smooth.
 */
export function useScrollProgress(sectionCount: number): ScrollState & {
  registerSection: (index: number, el: HTMLElement | null) => void;
} {
  const sectionsRef = useRef<(HTMLElement | null)[]>(
    Array.from({ length: sectionCount }, () => null),
  );

  const [state, setState] = useState<ScrollState>({
    pageProgress: 0,
    activeSection: -1,
    sectionProgress: Array.from({ length: sectionCount }, () => 0),
  });

  const targetRef = useRef<ScrollState>({
    pageProgress: 0,
    activeSection: -1,
    sectionProgress: Array.from({ length: sectionCount }, () => 0),
  });

  const currentRef = useRef<ScrollState>({
    pageProgress: 0,
    activeSection: -1,
    sectionProgress: Array.from({ length: sectionCount }, () => 0),
  });

  const registerSection = useCallback(
    (index: number, el: HTMLElement | null) => {
      sectionsRef.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    let rafId: number | null = null;
    let isRunning = true;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pageProgress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;

      let activeSection = -1;
      const sectionProgress: number[] = [];

      for (let i = 0; i < sectionsRef.current.length; i++) {
        const el = sectionsRef.current[i];
        if (!el) {
          sectionProgress.push(0);
          continue;
        }

        const rect = el.getBoundingClientRect();
        const sectionHeight = el.offsetHeight - window.innerHeight;

        if (sectionHeight <= 0) {
          sectionProgress.push(0);
          continue;
        }

        // How far the top of the section has scrolled past the top of the viewport
        const scrolledPast = -rect.top;
        const progress = Math.min(1, Math.max(0, scrolledPast / sectionHeight));

        sectionProgress.push(progress);

        // Section is active when it occupies the viewport
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          activeSection = i;
        }
      }

      targetRef.current = { pageProgress, activeSection, sectionProgress };
    };

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const loop = () => {
      if (!isRunning) return;

      const target = targetRef.current;
      const current = currentRef.current;
      
      // Damping factor: lower is smoother/slower, higher is snappier
      const factor = 0.08; 
      const threshold = 0.0001;
      let needsUpdate = false;

      let newPageProgress = lerp(current.pageProgress, target.pageProgress, factor);
      if (Math.abs(newPageProgress - target.pageProgress) < threshold) {
        newPageProgress = target.pageProgress;
      }
      if (newPageProgress !== current.pageProgress) needsUpdate = true;

      const newSectionProgress = current.sectionProgress.map((cp, i) => {
        let np = lerp(cp, target.sectionProgress[i] || 0, factor);
        if (Math.abs(np - (target.sectionProgress[i] || 0)) < threshold) {
          np = target.sectionProgress[i] || 0;
        }
        if (np !== cp) needsUpdate = true;
        return np;
      });

      const newActiveSection = target.activeSection;
      if (newActiveSection !== current.activeSection) needsUpdate = true;

      if (needsUpdate) {
        currentRef.current = {
          pageProgress: newPageProgress,
          activeSection: newActiveSection,
          sectionProgress: newSectionProgress,
        };
        setState(currentRef.current);
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial calculation
    onScroll();
    // Start current state directly at target so we don't animate from 0 on page reload
    currentRef.current = { ...targetRef.current };
    setState(currentRef.current);

    rafId = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [sectionCount]);

  return { ...state, registerSection };
}
