import { memo } from 'react';
import { cn } from '../lib/utils';

interface ChapterHeaderProps {
  number: string;
  label: string;
  title: string;
  description: string;
  theme: 'light' | 'dark';
}

function ChapterHeader({
  number,
  label,
  title,
  description,
  theme,
}: ChapterHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <section
      className={cn(
        'chapter-header',
        isDark ? 'chapter-header--dark' : 'chapter-header--light',
      )}
    >
      <div className="chapter-header__inner">
        <span className="chapter-header__label">
          {number} — {label}
        </span>
        <h2 className="chapter-header__title">{title}</h2>
        <p className="chapter-header__desc">{description}</p>
      </div>
    </section>
  );
}

export default memo(ChapterHeader);
