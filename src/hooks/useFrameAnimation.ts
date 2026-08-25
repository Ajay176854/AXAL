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

      // Load nearby frames in a chunk
      for (let i = 1; i <= 3; i++) {
        loadPriority(currentIndex + i);
        loadPriority(currentIndex - i);
      }

      // Schedule remaining frames idly
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          for (let i = 0; i < frameCount; i++) {
            if (i < currentIndex - 3 || i > currentIndex + 3) {
              loadPriority(i);
            }
          }
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          for (let i = 0; i < frameCount; i++) {
            if (i < currentIndex - 3 || i > currentIndex + 3) {
              loadPriority(i);
            }
          }
        }, 50);
      }
    },
    [frameCount, frameUrls],
  );

  return { imagesRef, loadFramesForProgress };
}
