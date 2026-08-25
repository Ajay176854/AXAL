import { useEffect, useRef, useMemo, useCallback } from 'react';

export interface FrameAnimationResult {
  imagesRef: React.MutableRefObject<HTMLImageElement[]>;
  loadFramesForProgress: (progress: number) => void;
}

/**
 * Preloads a sequence of frame images imperatively.
 * Does not trigger React state updates.
 */
export function useFrameAnimation(
  framePrefix: string,
  frameCount: number,
  frameExt: string,
): FrameAnimationResult {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastPrefixRef = useRef<string>('');

  const frameUrls = useMemo(() => {
    return Array.from({ length: frameCount }, (_, i) => {
      const num = String(i + 1).padStart(3, '0');
      return `${framePrefix}${num}.${frameExt}`;
    });
  }, [framePrefix, frameCount, frameExt]);

  useEffect(() => {
    if (lastPrefixRef.current !== framePrefix || imagesRef.current.length !== frameCount) {
      imagesRef.current = Array.from({ length: frameCount }, () => new Image());
      lastPrefixRef.current = framePrefix;
    }
  }, [framePrefix, frameCount]);

  const loadFramesForProgress = useCallback(
    (progress: number) => {
      if (imagesRef.current.length === 0) return;

      const currentIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(progress * (frameCount - 1))),
      );

      const loadPriority = (index: number) => {
        if (index < 0 || index >= frameCount) return;
        const img = imagesRef.current[index];
        if (img && !img.src) {
          img.src = frameUrls[index];
          if (typeof img.decode === 'function') {
            img.decode().catch(() => {});
          }
        }
      };

      // Load current frame immediately
      loadPriority(currentIndex);

      // Lookahead window: load the next 15 frames ahead, and 5 frames behind
      // This prevents dumping 60 image requests into the network queue at once.
      for (let i = 1; i <= 15; i++) {
        loadPriority(currentIndex + i);
      }
      for (let i = 1; i <= 5; i++) {
        loadPriority(currentIndex - i);
      }
    },
    [frameCount, frameUrls],
  );

  // Preload the first few frames on mount to ensure smooth start
  useEffect(() => {
    if (imagesRef.current.length === 0) return;
    
    // Load first 10 frames aggressively on mount
    for (let i = 0; i < 10 && i < frameCount; i++) {
      const img = imagesRef.current[i];
      if (img && !img.src) {
        img.src = frameUrls[i];
        if (typeof img.decode === 'function') {
          img.decode().catch(() => {});
        }
      }
    }
  }, [frameCount, frameUrls]);

  return { imagesRef, loadFramesForProgress };
}
