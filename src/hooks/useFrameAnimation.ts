import { useEffect, useRef, useMemo } from 'react';

/**
 * Preloads a sequence of frame images and returns the URL for the
 * current frame based on scroll progress (0–1).
 *
 * Falls back gracefully: if frames haven't loaded yet or the path
 * doesn't resolve, the canvas simply stays empty.
 */
export function useFrameAnimation(
  framePrefix: string,
  frameCount: number,
  frameExt: string,
  progress: number,
): string {
  const loadedRef = useRef<Set<string>>(new Set());

  // Generate all frame URLs
  const frameUrls = useMemo(() => {
    return Array.from({ length: frameCount }, (_, i) => {
      const num = String(i + 1).padStart(3, '0');
      return `${framePrefix}${num}.${frameExt}`;
    });
  }, [framePrefix, frameCount, frameExt]);

  // Preload frames lazily to optimize page load speed
  useEffect(() => {
    // If progress is 0, we only preload the first frame to keep initial loading fast
    if (progress === 0) {
      const firstFrameUrl = frameUrls[0];
      if (firstFrameUrl && !loadedRef.current.has(firstFrameUrl)) {
        const img = new Image();
        img.src = firstFrameUrl;
        img.onload = () => loadedRef.current.add(firstFrameUrl);
      }
      return;
    }

    // When user scrolls and progress > 0, preload the rest of the sequence
    frameUrls.forEach((url) => {
      if (loadedRef.current.has(url)) return;
      const img = new Image();
      img.src = url;
      img.onload = () => loadedRef.current.add(url);
    });
  }, [frameUrls, progress > 0]);

  // Map progress to frame index
  const frameIndex = Math.min(
    frameCount - 1,
    Math.max(0, Math.floor(progress * (frameCount - 1))),
  );

  return frameUrls[frameIndex] || '';
}
