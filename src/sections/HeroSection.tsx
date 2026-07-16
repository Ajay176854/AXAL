'use client';

import Button from '../components/ui/Button';

export default function HeroSection() {
  const handleScroll = () => {
    const target = document.querySelector('.chapter-header');
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 1000;
    let startTime: number | null = null;

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeOutExpo(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <section className="bg-neutral-950 text-white pt-32 pb-40 relative overflow-hidden flex items-center min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-neutral-950/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/40 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">


          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[1.05]">
            Precision <br />
            <span className="text-white/50">Packaging.</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-xl leading-relaxed font-light">
            Engineered for absolute clarity and industrial durability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="primary" showArrow onClick={handleScroll}>
              See It In Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
