
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Manufacturing Base in Kanniyakumari | AXAL Packing',
  description: "Learn about AXAL Packing's mission, our state-of-the-art injection molding facilities in Karankadu, Kanniyakumari, Tamil Nadu, and our commitment to producing 100% food-grade plastic containers.",
  keywords: 'axalpack, axal packing, food packaging manufacturer Kanniyakumari, AXAL founder, injection molding facility Karankadu, about AXAL packing, food safe packaging solutions Kanyakumari',
  alternates: {
    canonical: 'https://axalpack.in/about',
  },
  openGraph: {
    title: 'About Our Manufacturing Base in Kanniyakumari | AXAL Packing',
    description: "Learn about AXAL Packing's mission, our state-of-the-art injection molding facilities in Karankadu, Kanniyakumari, Tamil Nadu, and our commitment to producing 100% food-grade plastic containers.",
    url: 'https://axalpack.in/about',
    type: 'website',
    images: [
      {
        url: 'https://axalpack.in/logo-v2.png',
        alt: 'AXAL Packing Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Our Manufacturing Base in Kanniyakumari | AXAL Packing',
    description: "Learn about AXAL Packing's mission, our state-of-the-art injection molding facilities in Karankadu, Kanniyakumari, Tamil Nadu, and our commitment to producing 100% food-grade plastic containers.",
    images: ['https://axalpack.in/logo-v2.png'],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About AXAL Packing",
  "description": "Learn about AXAL's story, our manufacturing values, state-of-the-art facility in Karankadu, Kanniyakumari, and our founder's vision for premier food container manufacturing in Tamil Nadu."
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About AXAL</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Pioneering precision packaging solutions for the food &amp; beverage industry in Karankadu, Kanniyakumari, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
                From a Simple Family Need to Kanyakumari's Trusted Partner
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                AXAL didn't start in a sterile corporate boardroom. It began around our own family dinner table. Like many of you, we loved ordering food from our favorite local spots in Kanyakumari, but we grew tired of the constant frustrations: containers that cracked on the way, lids that leaked oil, and food that arrived lukewarm and soggy.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We saw local restaurant owners pouring their heart, soul, and hard work into crafting delicious recipes, only for the entire dining experience to be ruined on the delivery ride. We realized that packaging is the silent bridge between a chef's kitchen and a customer's home—and that bridge was broken.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                So, we decided to build that bridge ourselves. Right here in Karankadu, we set up a manufacturing base dedicated to producing premium, thin-wall food containers. We combine state-of-the-art precision injection molding with 100% food-safe virgin materials. We wanted to build something we would proudly use at home—leak-proof, microwave-safe, freezer-friendly packaging that local food businesses can rely on blindly.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-neutral-50 rounded-2xl p-6 text-center border border-neutral-100">
                <div className="text-3xl font-bold text-emerald-700 mb-2">10+</div>
                <p className="text-sm text-neutral-500 font-medium">Happy Clients</p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-6 text-center border border-neutral-100">
                <div className="text-3xl font-bold text-emerald-700 mb-2">1K+</div>
                <p className="text-sm text-neutral-500 font-medium">Containers Delivered</p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-6 text-center border border-neutral-100">
                <div className="text-3xl font-bold text-emerald-700 mb-2">5+</div>
                <p className="text-sm text-neutral-500 font-medium">Product Lines</p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-6 text-center border border-neutral-100">
                <div className="text-3xl font-bold text-emerald-700 mb-2">100%</div>
                <p className="text-sm text-neutral-500 font-medium">Food-Safe Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-neutral-200">
                  <img 
                    src="/images/founder.webp" 
                    alt="Founder & CEO of AXAL Packing in Karankadu, Kanyakumari" 
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-72 h-80 md:w-80 md:h-96 rounded-2xl border-2 border-emerald-700/20 -z-10" />
              </div>
            </div>

            {/* Founder Info */}
            <div>
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Meet Our Founder</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
                Protecting Every Meal We Deliver
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                "When I look at a local cloud kitchen or a family-run restaurant, I see dreams and hard work. As a business owner myself, I know the immense pride that goes into sending a product out. But I also know the anxiety of wondering if it will arrive in perfect condition.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                I founded AXAL to take that anxiety away. I wanted to build containers that act as a secure vault for your food, preserving the temperature, taste, and presentation. By setting up our plant in Karankadu, we're not just creating products; we're supporting the local food community and ensuring food safety is never compromised."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-emerald-700" />
                <span className="text-sm font-semibold text-neutral-800">Founder &amp; CEO, AXAL Packing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Director Info (Left for alternate layout) */}
            <div className="order-2 lg:order-1">
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Meet Our Director</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
                Where Engineering Meets Food Safety
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                "Having a vision is just the first step; bringing it to life on the factory floor is where my heart lies. At AXAL, we don't just run production lines. We curate a meticulous culture of safety and precision.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We know that families rely on our containers to heat food for their kids. That is why every batch of virgin PP polymer we use is thoroughly vetted. We fine-tune our state-of-the-art injection molding machines to achieve millimeter-perfect seals, lightweight durability, and flawless finishes. When a container leaves our Karankadu plant, I know it is ready to perform under pressure."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-emerald-700" />
                <span className="text-sm font-semibold text-neutral-800">Director, AXAL Packing</span>
              </div>
            </div>

            {/* Director Image (Right for alternate layout) */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white bg-neutral-200">
                  <img 
                    src="/images/director_axal.jpeg" 
                    alt="Director of AXAL Packing container manufacturing plant in Karankadu, Kanyakumari" 
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                {/* Decorative accent ring */}
                <div className="absolute -bottom-3 -left-3 w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-emerald-700/20 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Quality First</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Every container is manufactured to exacting standards. We never compromise on material grade, 
                wall thickness, or seal integrity.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Innovation Driven</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                We invest continuously in the latest thin-wall molding technology to deliver containers 
                that are lighter, stronger, and more efficient.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Customer Value</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                We deliver premium quality at competitive prices, ensuring our clients get the best 
                value without sacrificing performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
