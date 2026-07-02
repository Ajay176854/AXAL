import type { Metadata } from 'next';
import HomePage from '../components/pages/HomePage';

export const metadata: Metadata = {
  title: 'Premium Food Containers Manufacturer in Kanniyakumari | AXAL Packing',
  description: 'AXAL Packing is the leading premium thin-wall food containers manufacturer in Karankadu, Kanniyakumari, Tamil Nadu. Food-safe, microwave-safe, and freezer-compatible packaging solutions.',
  keywords: 'axalpack, axal packing, food containers Kanniyakumari, plastic packaging Kanyakumari, thin-wall food containers manufacturer Kanniyakumari, food packaging Karankadu',
  alternates: {
    canonical: 'https://axalpack.in/',
  },
  openGraph: {
    title: 'Premium Food Containers Manufacturer in Kanniyakumari | AXAL Packing',
    description: 'AXAL Packing is the leading premium thin-wall food containers manufacturer in Karankadu, Kanniyakumari, Tamil Nadu. Food-safe, microwave-safe, and freezer-compatible packaging solutions.',
    url: 'https://axalpack.in/',
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
    title: 'Premium Food Containers Manufacturer in Kanniyakumari | AXAL Packing',
    description: 'AXAL Packing is the leading premium thin-wall food containers manufacturer in Karankadu, Kanniyakumari, Tamil Nadu. Food-safe, microwave-safe, and freezer-compatible packaging solutions.',
    images: ['https://axalpack.in/logo-v2.png'],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AXAL Packing",
  "url": "https://axalpack.in/",
  "logo": "https://axalpack.in/logo-v2.png",
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomePage />
    </>
  );
}
