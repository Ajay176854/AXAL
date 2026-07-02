import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing & Design Capabilities in Tamil Nadu | AXAL Packing',
  description: 'Discover our technical capabilities based in Kanniyakumari, Tamil Nadu: thin-wall injection molding down to 0.4mm, food safety (FSSAI), and custom options.',
  keywords: 'axalpack, axal packing, thin-wall injection molding Kanniyakumari, food-grade plastic standards Kanyakumari, microwave safe containers Tamil Nadu, packaging factory Kanniyakumari',
  alternates: {
    canonical: 'https://axalpack.in/capabilities',
  },
  openGraph: {
    title: 'Manufacturing & Design Capabilities in Tamil Nadu | AXAL Packing',
    description: 'Discover our technical capabilities based in Kanniyakumari, Tamil Nadu: thin-wall injection molding down to 0.4mm, food safety (FSSAI), and custom options.',
    url: 'https://axalpack.in/capabilities',
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
    title: 'Manufacturing & Design Capabilities in Tamil Nadu | AXAL Packing',
    description: 'Discover our technical capabilities based in Kanniyakumari, Tamil Nadu: thin-wall injection molding down to 0.4mm, food safety (FSSAI), and custom options.',
    images: ['https://axalpack.in/logo-v2.png'],
  },
};

const capabilitiesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AXAL Packing Manufacturing Capabilities in Kanniyakumari",
  "description": "Discover AXAL's production capabilities in Kanniyakumari, Tamil Nadu, including thin-wall injection molding, precision tooling, microwave/freezer safety, and food-grade compliance."
};

export default function CapabilitiesPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(capabilitiesPageSchema) }}
      />
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Capabilities</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Advanced thin-wall container manufacturing powered by precision engineering and rigorous quality standards.
          </p>
        </div>
      </section>

      {/* Thin Wall Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Core Technology</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
                Thin-Wall Injection Molding
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                At AXAL, we specialize in <strong>thin-wall injection molding</strong> — an advanced manufacturing 
                process that produces containers with wall thicknesses as low as 0.4mm while maintaining exceptional 
                structural integrity. This technology allows us to create containers that are significantly lighter 
                than conventional packaging, reducing material usage and shipping costs without compromising strength.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Our high-speed injection molding machines operate at cycle times under 5 seconds, enabling rapid 
                production of millions of containers per month. The precision of our tooling ensures every container 
                has uniform wall thickness, consistent dimensions, and perfect seal compatibility.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                The result? Containers that stack perfectly, seal securely, and withstand the demands of hot food, 
                freezer storage, and microwave reheating — all while being up to 40% lighter than traditional packaging.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <img 
                src="/images/capability_thinwall.webp" 
                alt="Thin-wall injection molding production line at AXAL Packing factory in Karankadu, Kanniyakumari, Tamil Nadu" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">What We Deliver</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Container Quality Standards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Food Safe */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">100% Food-Safe</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                All containers are made from virgin food-grade PP (Polypropylene) material. Certified safe for 
                direct food contact with no BPA, toxins, or harmful chemicals. Compliant with FSSAI standards.
              </p>
            </div>

            {/* Microwave Safe */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-200 transition-colors">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Microwave Safe</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Our containers withstand microwave temperatures up to 120°C without warping, melting, or releasing 
                harmful substances. Perfect for reheating meals directly in the container.
              </p>
            </div>

            {/* Freezer Compatible */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Freezer Compatible</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Engineered to perform from -20°C to 120°C. Our containers maintain structural integrity in 
                freezer storage, making them ideal for meal prep and frozen food packaging.
              </p>
            </div>

            {/* Leak Proof */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-200 transition-colors">
                <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Leak-Proof Seal</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Precision-engineered rim and lid design ensures a secure, leak-proof seal. Whether it's 
                soups, curries, or sauces — our containers keep contents safely contained during transport.
              </p>
            </div>

            {/* Stackable */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Perfectly Stackable</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Designed for efficient storage and transport. Our containers nest when empty and stack 
                securely when filled, optimizing warehouse space and reducing logistics costs.
              </p>
            </div>

            {/* Multi Color */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-pink-200 transition-colors">
                <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Multiple Color Options</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Available in Clear, Black, Ocean Blue, Eco Green, and Crimson Red. Customize your packaging 
                to match your brand identity and stand out in the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Technical Details</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Product Specifications</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold rounded-tl-xl">Specification</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Details</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold rounded-tr-xl">Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Material</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">Virgin Polypropylene (PP)</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">Food Grade / FSSAI Compliant</td>
                </tr>
                <tr className="border-b border-neutral-100 bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Wall Thickness</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">0.4mm – 0.7mm</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">Thin-Wall Standard</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Temperature Range</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">-20°C to +120°C</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">Freezer to Microwave Safe</td>
                </tr>
                <tr className="border-b border-neutral-100 bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Sizes Available</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">100ml, 250ml, 500ml, 750ml</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">Round &amp; Rectangular</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Colors</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">Clear, Black, Blue, Green, Red</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">Custom Colors Available</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900 rounded-bl-xl">Lid Type</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">Snap-fit Transparent Lid</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 rounded-br-xl">Leak-Proof Seal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Packaging Solutions?</h2>
          <p className="text-emerald-200 text-lg mb-8">
            Get in touch with us to discuss your requirements. We offer bulk pricing, custom sizes, and branded packaging options.
          </p>
          <a
            href="https://wa.me/918300149040?text=Hi%2C%20I%27d%20like%20to%20discuss%20custom%20packaging%20requirements."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-800 px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
