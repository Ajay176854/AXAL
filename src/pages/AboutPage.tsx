export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About AXAL</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Pioneering precision packaging solutions for the food &amp; beverage industry across India.
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
                Building India's Trusted Packaging Brand
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                AXAL was founded with a singular vision — to deliver world-class, food-safe packaging solutions 
                that meet the highest standards of quality, durability, and design. Based in India, we specialize 
                in manufacturing premium thin-wall containers that serve restaurants, cloud kitchens, catering 
                businesses, and food delivery platforms across the country.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Our state-of-the-art manufacturing facility employs advanced injection molding technology to produce 
                containers that are lightweight yet incredibly strong. Every product undergoes rigorous quality 
                checks to ensure food-grade compliance and consistent performance.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                At AXAL, we believe that great packaging isn't just about containment — it's about preserving 
                freshness, enhancing presentation, and building trust between food businesses and their customers. 
                That's why we engineer every container to be leak-proof, microwave-safe, and freezer-compatible.
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
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="/images/founder.webp" 
                    alt="Founder of AXAL" 
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
                A Vision for Excellence
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                AXAL was born from the belief that Indian food businesses deserve packaging that matches the quality 
                of their food. Our founder recognized a gap in the market — while the food industry was evolving 
                rapidly with cloud kitchens and delivery platforms, the packaging hadn't kept pace.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Driven by a passion for precision engineering and a commitment to sustainability, he built AXAL 
                from the ground up — investing in cutting-edge thin-wall injection molding technology and 
                assembling a team of quality-obsessed professionals.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Today, AXAL serves hundreds of clients across India, from local restaurants to large-scale 
                catering operations, delivering containers that are trusted for their durability, clarity, 
                and food-safe integrity.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-neutral-200" />
                <span className="text-sm text-neutral-400 italic">Founder &amp; CEO, AXAL Packing</span>
                <div className="h-px flex-1 bg-neutral-200" />
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
