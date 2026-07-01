import ProductsSection from '../sections/ProductsSection';
import SEO from '../components/layout/SEO';

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

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <SEO 
        title="Premium Food Containers Catalog"
        description="Explore our range of round containers, rectangular containers, and juice container glasses in Karankadu, Kanniyakumari, Tamil Nadu. 100% food-safe and leak-proof."
        keywords="plastic food containers Kanniyakumari, round containers Kanyakumari, wholesale plastic containers Tamil Nadu, juice glasses Karankadu"
        path="/products"
        schema={productsCatalogSchema}
      />
      <ProductsSection />
    </div>
  );
}

