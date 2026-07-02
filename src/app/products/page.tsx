import type { Metadata } from 'next';
import ProductsSection from '../../sections/ProductsSection';

export const metadata: Metadata = {
  title: 'Premium Food Containers Catalog | AXAL Packing',
  description: 'Explore our range of round containers, rectangular containers, and juice container glasses in Karankadu, Kanniyakumari, Tamil Nadu. 100% food-safe and leak-proof.',
  keywords: 'plastic food containers Kanniyakumari, round containers Kanyakumari, wholesale plastic containers Tamil Nadu, juice glasses Karankadu',
  alternates: {
    canonical: 'https://axalpacking.com/products',
  },
  openGraph: {
    title: 'Premium Food Containers Catalog | AXAL Packing',
    description: 'Explore our range of round containers, rectangular containers, and juice container glasses in Karankadu, Kanniyakumari, Tamil Nadu. 100% food-safe and leak-proof.',
    url: 'https://axalpacking.com/products',
    type: 'website',
    images: [
      {
        url: 'https://axalpacking.com/logo-v2.png',
        alt: 'AXAL Packing Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Food Containers Catalog | AXAL Packing',
    description: 'Explore our range of round containers, rectangular containers, and juice container glasses in Karankadu, Kanniyakumari, Tamil Nadu. 100% food-safe and leak-proof.',
    images: ['https://axalpacking.com/logo-v2.png'],
  },
};

const productsCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AXAL Packing Premium Food Containers Catalog",
  "description": "Browse our selection of premium, food-safe, microwave-safe, and freezer-compatible plastic food containers manufactured in Karankadu, Kanniyakumari, Tamil Nadu.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "AXAL Round Plastic Food Containers (100ml, 250ml, 500ml)",
        "description": "Premium food-safe round plastic containers. Microwave and freezer safe, leak-proof snap-fit lid design.",
        "brand": {
          "@type": "Brand",
          "name": "AXAL"
        },
        "material": "Virgin Polypropylene (PP)",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "0.00",
          "offerCount": "3",
          "priceValue": "Request Quote via WhatsApp",
          "seller": {
            "@type": "Organization",
            "name": "AXAL Packing"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "AXAL Rectangular Food Containers (750ml)",
        "description": "High-speed thin-wall rectangular food containers engineered for bento meal preps and cloud kitchens.",
        "brand": {
          "@type": "Brand",
          "name": "AXAL"
        },
        "material": "Virgin Polypropylene (PP)",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "0.00",
          "priceValue": "Request Quote via WhatsApp",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "AXAL Packing"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "AXAL Juice Container Glasses",
        "description": "Highly transparent juice glasses with leak-proof seals for secure beverage delivery.",
        "brand": {
          "@type": "Brand",
          "name": "AXAL"
        },
        "material": "Virgin Polypropylene (PP)",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "0.00",
          "priceValue": "Request Quote via WhatsApp",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "AXAL Packing"
          }
        }
      }
    }
  ]
};

export default function Page() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsCatalogSchema) }}
      />
      <ProductsSection />
    </div>
  );
}
