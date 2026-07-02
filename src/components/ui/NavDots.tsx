'use client';

import { cn } from '../../lib/utils';

interface NavDotsProps {
  sections: { id: string; label: string }[];
  activeIndex: number;
}

export default function NavDots({ sections, activeIndex }: NavDotsProps) {
  const handleClick = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-dots" aria-label="Section navigation">
      {sections.map((section, i) => (
        <button
          key={section.id}
          className={cn('nav-dots__dot', i === activeIndex && 'nav-dots__dot--active')}
          onClick={() => handleClick(section.id)}
          aria-label={`Go to ${section.label}`}
          title={section.label}
        >
          <span className="nav-dots__label">{section.label}</span>
        </button>
      ))}
    </nav>
  );
}
