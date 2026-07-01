import { useEffect, useRef, useState, useMemo } from 'react';

export interface FrameAnimationResult {
  currentImage: HTMLImageElement | null;
  isLoaded: boolean;
}

/**
 * Preloads a sequence of frame images and returns the HTMLImageElement
 * for the current frame based on scroll progress (0–1).
 *
 * Uses img.decode() to decode images off the main thread for high performance.
 */
export function useFrameAnimation(
  framePrefix: string,
  frameCount: number,
  frameExt: string,
  progress: number,
): FrameAnimationResult {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const lastPrefixRef = useRef<string>('');

  // Generate all frame URLs
  const frameUrls = useMemo(() => {
    return Array.from({ length: frameCount }, (_, i) => {
      const num = String(i + 1).padStart(3, '0');
      return `${framePrefix}${num}.${frameExt}`;
    });
  }, [framePrefix, frameCount, frameExt]);

  // Reset and initialize imagesRef when framePrefix or frameCount changes
  useEffect(() => {
    if (lastPrefixRef.current !== framePrefix || imagesRef.current.length !== frameCount) {
      imagesRef.current = Array.from({ length: frameCount }, () => new Image());
      lastPrefixRef.current = framePrefix;
      setLoadedCount(0);
    }
  }, [framePrefix, frameCount]);

  // Preload frames lazily to optimize page load speed
  useEffect(() => {
    let active = true;

    if (imagesRef.current.length === 0) return;

    // Always preload the first frame immediately
    const firstImg = imagesRef.current[0];
    if (firstImg && !firstImg.src) {
      firstImg.src = frameUrls[0];
      firstImg.onload = () => {
        if (!active) return;
        setLoadedCount((prev) => prev + 1);
      };
    }

    // If progress is 0, we only preload the first frame to keep initial loading fast
    if (progress === 0) return;

    // When user scrolls and progress > 0, preload the rest of the sequence
    frameUrls.forEach((url, i) => {
      if (i === 0) return; // Already handled
      const img = imagesRef.current[i];
      if (img && !img.src) {
        img.src = url;
        if (typeof img.decode === 'function') {
          img.decode()
            .then(() => {
              if (!active) return;
              setLoadedCount((prev) => prev + 1);
            })
            .catch(() => {
              img.onload = () => {
                if (!active) return;
                setLoadedCount((prev) => prev + 1);
              };
            });
        } else {
          img.onload = () => {
            if (!active) return;
            setLoadedCount((prev) => prev + 1);
          };
        }
      }
    });

    return () => {
      active = false;
    };
  }, [frameUrls, progress > 0]);

  // Map progress to frame index
  const frameIndex = Math.min(
    frameCount - 1,
    Math.max(0, Math.floor(progress * (frameCount - 1))),
  );

  const currentImage = imagesRef.current[frameIndex] || null;
  const isLoaded = !!(currentImage && currentImage.src && currentImage.complete);

  return {
    currentImage: isLoaded ? currentImage : null,
    isLoaded,
  };
}
