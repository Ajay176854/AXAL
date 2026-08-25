import { useEffect, useRef } from 'react';
import type { ScrollSubscriber } from '../../hooks/useScrollProgress';

interface ProgressBarProps {
  subscribeToPage: (cb: ScrollSubscriber) => () => void;
}

export default function ProgressBar({ subscribeToPage }: ProgressBarProps) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return subscribeToPage((progress) => {
      if (fillRef.current) {
        fillRef.current.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
      }
    });
  }, [subscribeToPage]);

  return (
    <div className="progress-bar" aria-hidden="true">
      <div ref={fillRef} className="progress-bar__fill" />
    </div>
  );
}
