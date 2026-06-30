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

  // Preload frames on mount
  useEffect(() => {
    frameUrls.forEach((url) => {
      if (loadedRef.current.has(url)) return;
      const img = new Image();
      img.src = url;
      img.onload = () => loadedRef.current.add(url);
    });
  }, [frameUrls]);

  // Map progress to frame index
  const frameIndex = Math.min(
    frameCount - 1,
    Math.max(0, Math.floor(progress * (frameCount - 1))),
  );

  return frameUrls[frameIndex] || '';
}
