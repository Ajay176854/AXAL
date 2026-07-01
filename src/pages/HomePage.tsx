import HeroSection from '../sections/HeroSection';
import ChapterHeader from '../sections/ChapterHeader';
import ScrollSection from '../sections/ScrollSection';
import OutroSection from '../sections/OutroSection';
import ProgressBar from '../components/ui/ProgressBar';
import NavDots from '../components/ui/NavDots';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { chapters } from '../data/chapters';
import SEO from '../components/layout/SEO';

const navSections = chapters.map((c) => ({ id: c.id, label: c.label }));

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AXAL Packing",
  "url": "https://axalpacking.com/",
  "logo": "https://axalpacking.com/logo-v2.png",
  "description": "AXAL Packing is the leading premium thin-wall food containers manufacturer in Karankadu, Kanniyakumari, Tamil Nadu. Delivering food-safe, microwave-safe, and freezer-compatible packaging solutions.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Karankadu, Karankadu (P.O)",
    "addressLocality": "Kanniyakumari",
    "addressRegion": "Tamil Nadu",
    "postalCode": "629809",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-83001-49040",
    "contactType": "sales",
    "areaServed": "IN"
  }
};

export default function HomePage() {
  const { pageProgress, activeSection, sectionProgress, registerSection } =
    useScrollProgress(chapters.length);

  return (
    <>
      <SEO 
        title="Premium Food Containers Manufacturer in Kanniyakumari"
        description="AXAL Packing is the leading premium thin-wall food containers manufacturer in Karankadu, Kanniyakumari, Tamil Nadu. Food-safe, microwave-safe, and freezer-compatible packaging solutions."
        keywords="food containers Kanniyakumari, plastic packaging Kanyakumari, thin-wall food containers manufacturer Kanniyakumari, food packaging Karankadu, AXAL packing"
        path="/"
        schema={organizationSchema}
      />
      <HeroSection />
      
      <ProgressBar progress={pageProgress} />
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
            progress={sectionProgress[i] ?? 0}
            index={i}
            registerSection={registerSection}
          />
        </div>
      ))}

      <OutroSection />
    </>
  );
}
