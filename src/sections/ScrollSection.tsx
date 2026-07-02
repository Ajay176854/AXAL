'use client';

import { useCallback, useEffect, useRef, memo } from 'react';
import { cn } from '../lib/utils';
import { useFrameAnimation } from '../hooks/useFrameAnimation';
import Tag from '../components/ui/Tag';
import type { Chapter } from '../data/chapters';

interface ScrollSectionProps {
  chapter: Chapter;
  progress: number;
  index: number;
  registerSection: (index: number, el: HTMLElement | null) => void;
}

function ScrollSection({
  chapter,
  progress,
  index,
  registerSection,
}: ScrollSectionProps) {
  const isDark = chapter.headerTheme === 'dark';
  const { currentImage } = useFrameAnimation(
    chapter.framePrefix,
    chapter.frameCount,
    chapter.frameExt,
    progress,
  );

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !currentImage) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (canvas.width !== currentImage.naturalWidth || canvas.height !== currentImage.naturalHeight) {
      canvas.width = currentImage.naturalWidth;
      canvas.height = currentImage.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImage, 0, 0);
  }, [currentImage]);

  // Determine which panel is active (0–3) based on progress (0–1)
  const activePanelIndex = Math.min(
    chapter.panels.length - 1,
    Math.max(0, Math.floor(progress * chapter.panels.length)),
  );

  const sectionRef = useCallback(
    (el: HTMLElement | null) => {
      registerSection(index, el);
    },
    [registerSection, index],
  );

  return (
    <section
      id={`section-${chapter.id}`}
      ref={sectionRef}
      className={cn('scroll-section', isDark && 'scroll-section--dark')}
    >
      <div className="scroll-section__sticky">
        <div
          className={cn(
            'scroll-section__grid',
            chapter.sectionReverse && 'scroll-section__grid--reverse',
          )}
        >
          {/* Canvas side — frame animation */}
          <div
            className="scroll-section__canvas"
            style={{ backgroundColor: chapter.canvasBg }}
          >
            <div className="scroll-section__frame-wrap">
              {/* Placeholder product icon when no frames exist */}
              <div className="scroll-section__placeholder">
                <div className="scroll-section__placeholder-icon">
                  {chapter.id === 'juice' && (
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" y="10" width="40" height="60" rx="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M24 20h32" stroke="currentColor" strokeWidth="2" />
                      <circle cx="40" cy="45" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                    </svg>
                  )}
                  {chapter.id === 'round' && (
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="40" cy="55" rx="24" ry="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 55V30c0-12 10.7-20 24-20s24 8 24 20v25" stroke="currentColor" strokeWidth="2" />
                      <ellipse cx="40" cy="30" rx="24" ry="8" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {chapter.id === 'rect' && (
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="20" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M10 32h60" stroke="currentColor" strokeWidth="2" />
                      <rect x="18" y="40" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                      <rect x="44" y="40" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                    </svg>
                  )}
                </div>
                <span className="scroll-section__placeholder-label">
                  {chapter.label}
                </span>
              </div>

              <canvas
                ref={canvasRef}
                className="scroll-section__frame-canvas"
                role="img"
                aria-label={`Interactive 3D frame animation showing AXAL ${chapter.label} food container durability, stackability, and seal compatibility.`}
                style={{
                  display: currentImage ? 'block' : 'none',
                }}
              >
                Interactive 3D frame animation of {chapter.label} food container.
              </canvas>
            </div>
          </div>

          {/* Text side — stacked panels */}
          <div className="scroll-section__text">
            {chapter.panels.map((panel, i) => (
              <div
                key={i}
                className={cn(
                  'scroll-panel',
                  i === activePanelIndex && 'scroll-panel--active',
                  isDark && 'scroll-panel--dark',
                )}
              >
                <span className="scroll-panel__num">{panel.num}</span>
                <h3 className="scroll-panel__title">{panel.title}</h3>
                <p className="scroll-panel__body">{panel.body}</p>
                <div className="scroll-panel__tags">
                  {panel.tags.map((tag) => (
                    <Tag label={tag.label} color={tag.color} key={tag.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ScrollSection);
