'use client';

import HeroSection from '../../sections/HeroSection';
import ChapterHeader from '../../sections/ChapterHeader';
import ScrollSection from '../../sections/ScrollSection';
import OutroSection from '../../sections/OutroSection';
import ProgressBar from '../ui/ProgressBar';
import NavDots from '../ui/NavDots';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { chapters } from '../../data/chapters';

const navSections = chapters.map((c) => ({ id: c.id, label: c.label }));

export default function HomePage() {
  const { activeSection, registerSection, subscribeToPage, subscribeToSection } =
    useScrollProgress(chapters.length);

  return (
    <>
      <HeroSection />
      
      <ProgressBar subscribeToPage={subscribeToPage} />
      <NavDots sections={navSections} activeIndex={activeSection} />

      {chapters.map((chapter, i) => (
        <div key={chapter.id}>
          <ChapterHeader
            number={chapter.number}
            label={chapter.label}
            title={chapter.headerTitle}
            description={chapter.headerDesc}
            theme={chapter.headerTheme}
          />
          <ScrollSection
            chapter={chapter}
            index={i}
            registerSection={registerSection}
            subscribeToSection={subscribeToSection}
          />
        </div>
      ))}

      <OutroSection />
    </>
  );
}
