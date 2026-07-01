import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const colors = [
  { id: 'clear', name: 'Clear', value: '#f0f0f0' },
  { id: 'black', name: 'Black', value: '#222222' },
  { id: 'blue', name: 'Ocean Blue', value: '#0077ff' },
  { id: 'green', name: 'Eco Green', value: '#00cc44' },
  { id: 'red', name: 'Crimson Red', value: '#ff2222' },
];

interface ProductItem {
  id: string;
  name: string;
  description: string;
  images: {
    clear: string;
    black: string;
    blue: string;
    green: string;
    red: string;
  };
  specs: {
    volume: string;
    dimensions: string;
    cartonQty: string;
    material: string;
    tempRange: string;
  };
  features: string[];
  longDesc: string;
}

const products: ProductItem[] = [
  {
    id: '500ml-round',
    name: '500 ml Round',
    description: 'Perfect for soups, sauces, and small meals.',
    images: {
      clear: '/images/products/container_500ml_round.webp',
      black: '/images/products/container_500ml_round_black.webp',
      blue: '/images/products/container_500ml_round_blue.webp',
      green: '/images/products/container_500ml_round_green.webp',
      red: '/images/products/container_500ml_round_red.webp',
    },
    specs: {
      volume: '500 ml',
      dimensions: 'Ø 118 mm x 68 mm',
      cartonQty: '500 Pcs / Carton',
      material: 'Food-Grade Polypropylene (PP)',
      tempRange: '-20°C to +120°C',
    },
    features: ['Microwave Safe', 'Freezer Safe', 'Airtight Gasket Seal', '100% Recyclable'],
    longDesc: "AXAL's 500 ml Round containers are engineered for maximum clarity and structural integrity. Ideal for takeaway soups, hot curries, and meal portions. The robust snap-lock lid prevents spillages during transport.",
  },
  {
    id: '100ml-round',
    name: '100 ml Round',
    description: 'Ideal for dips, dressings, and small portions.',
    images: {
      clear: '/images/products/container_100ml_round.webp',
      black: '/images/products/container_100ml_round_black.webp',
      blue: '/images/products/container_100ml_round_blue.webp',
      green: '/images/products/container_100ml_round_green.webp',
      red: '/images/products/container_100ml_round_red.webp',
    },
    specs: {
      volume: '100 ml',
      dimensions: 'Ø 74 mm x 42 mm',
      cartonQty: '1000 Pcs / Carton',
      material: 'Food-Grade Polypropylene (PP)',
      tempRange: '-20°C to +120°C',
    },
    features: ['Airtight Gasket Seal', 'Portion Control', 'Freezer Safe', 'Stackable Nesting'],
    longDesc: 'Perfect for side sauces, salad dressings, and condiment packaging. Features high lateral rigidity and an easy-open pull-tab design for user convenience.',
  },
  {
    id: '250ml-round',
    name: '250 ml Round',
    description: 'Versatile size for side dishes and desserts.',
    images: {
      clear: '/images/products/container_250ml_round.webp',
      black: '/images/products/container_250ml_round_black.webp',
      blue: '/images/products/container_250ml_round_blue.webp',
      green: '/images/products/container_250ml_round_green.webp',
      red: '/images/products/container_250ml_round_red.webp',
    },
    specs: {
      volume: '250 ml',
      dimensions: 'Ø 98 mm x 52 mm',
      cartonQty: '500 Pcs / Carton',
      material: 'Food-Grade Polypropylene (PP)',
      tempRange: '-20°C to +120°C',
    },
    features: ['Crystal Clear PP', 'Tamper Evident Ribs', 'Microwave Safe', 'Rigid Base'],
    longDesc: 'A versatile container for desserts, side salads, cut fruits, and spreads. The stackable locking system ensures safe multi-tier shelf display.',
  },
  {
    id: '750ml-rectangular',
    name: '750 ml Rectangular',
    description: 'Optimized for meal prep and stackability.',
    images: {
      clear: '/images/products/container_750ml_rectangular_nolid.webp',
      black: '/images/products/container_750ml_rectangular_nolid_black.webp',
      blue: '/images/products/container_750ml_rectangular_nolid_blue.webp',
      green: '/images/products/container_750ml_rectangular_nolid_green.webp',
      red: '/images/products/container_750ml_rectangular_nolid_red.webp',
    },
    specs: {
      volume: '750 ml',
      dimensions: '172 mm x 118 mm x 50 mm',
      cartonQty: '250 Pcs / Carton',
      material: 'Food-Grade Polypropylene (PP)',
      tempRange: '-20°C to +120°C',
    },
    features: ['Space-saving Footprint', 'Microwave Reheatable', 'Interlocking Stacks', 'Leak-resistant'],
    longDesc: 'Engineered specifically for bento-style meal preps, catering deliveries, and supermarkets. The rectangular footprint maximizes shelf and shipping crate space utilization.',
  },
];

export default function ProductsSection() {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedModalColor, setSelectedModalColor] = useState(colors[0]);
  const [inquired, setInquired] = useState(false);

  // Close modal on escape keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = (product: ProductItem) => {
    setSelectedProduct(product);
    setSelectedModalColor(activeColor);
    setInquired(false);
  };

  const handleInquire = () => {
    if (!selectedProduct) return;
    
    setInquired(true);
    
    const message = `Hi! I would like to inquire about the following product:
- Product: ${selectedProduct.name}
- Variant: ${selectedModalColor.name}
- Volume: ${selectedProduct.specs.volume}
- Dimensions: ${selectedProduct.specs.dimensions}
- Carton Qty: ${selectedProduct.specs.cartonQty}

Please provide pricing and availability. Thank you!`;

    const whatsappUrl = `https://wa.me/918300149040?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-neutral-50 py-16 relative overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-neutral-900">
            Premium Food Containers Manufacturer in Kanniyakumari
          </h1>
          <p className="text-xl text-neutral-600 font-light leading-relaxed">
            Engineered for durability and clarity at our facility in Karankadu, Kanniyakumari. Choose from our standard range, available in multiple colors to match your brand identity.
          </p>
        </div>

        {/* Color Picker */}
        <div className="flex flex-col items-center justify-center mb-10">
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
            Select Material Color
          </span>
          <div className="flex gap-4 p-2 bg-white rounded-full shadow-sm border border-neutral-200">
            {colors.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveColor(c)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  activeColor.id === c.id 
                    ? 'border-neutral-900 scale-110 shadow-md' 
                    : 'border-transparent hover:scale-105'
                }`}
                style={{ backgroundColor: c.value }}
                title={c.name}
              />
            ))}
          </div>
          <p className="mt-4 text-neutral-700 font-medium">{activeColor.name}</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-6 bg-white flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${product.id}-${activeColor.id}`}
                    src={product.images[activeColor.id as keyof typeof product.images]}
                    alt={`${product.name} - ${activeColor.name} Premium Food Container manufactured in Karankadu, Kanniyakumari by AXAL Packing`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                <p className="text-sm text-neutral-500 mb-6">{product.description}</p>
                
                <button 
                  onClick={() => openModal(product)}
                  className="w-full py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-neutral-950/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto border border-neutral-100 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 rounded-full transition-all hover:rotate-90 z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Image Preview & Color Picker */}
              <div className="w-full md:w-1/2 bg-neutral-50 p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-neutral-100 min-h-[320px] md:min-h-[480px]">
                <div className="relative aspect-square w-full max-w-[300px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${selectedProduct.id}-${selectedModalColor.id}`}
                      src={selectedProduct.images[selectedModalColor.id as keyof typeof selectedProduct.images]}
                      alt={`${selectedProduct.name} - ${selectedModalColor.name}`}
                      className="object-contain max-h-full max-w-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Modal Color Picker */}
                <div className="mt-8 flex flex-col items-center">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">
                    Preview Color Variant
                  </span>
                  <div className="flex gap-3 p-1.5 bg-white rounded-full border border-neutral-200 shadow-sm">
                    {colors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedModalColor(c)}
                        className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                          selectedModalColor.id === c.id
                            ? 'border-neutral-900 scale-110 shadow-sm'
                            : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.value }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Specifications & Content */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold text-neutral-950 leading-tight pr-8">
                    {selectedProduct.name}
                  </h3>
                  
                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {selectedProduct.features.map((feat) => (
                      <span
                        key={feat}
                        className="px-2.5 py-1 text-[10px] bg-neutral-100 text-neutral-700 font-bold uppercase tracking-wider rounded-md"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-neutral-500 leading-relaxed mt-5">
                    {selectedProduct.longDesc}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 my-6 py-5 border-y border-neutral-100">
                    <div>
                      <span className="block text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider mb-1">
                        Volume Capacity
                      </span>
                      <span className="text-sm font-semibold text-neutral-800">
                        {selectedProduct.specs.volume}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider mb-1">
                        Dimensions
                      </span>
                      <span className="text-sm font-semibold text-neutral-800">
                        {selectedProduct.specs.dimensions}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider mb-1">
                        Carton Quantity
                      </span>
                      <span className="text-sm font-semibold text-neutral-800">
                        {selectedProduct.specs.cartonQty}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider mb-1">
                        Temperature Limits
                      </span>
                      <span className="text-sm font-semibold text-neutral-800">
                        {selectedProduct.specs.tempRange}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Inquiry Action Panel */}
                <div className="mt-4">
                  <AnimatePresence mode="wait">
                    {!inquired ? (
                      <motion.button
                        key="inquire-btn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleInquire}
                        className="w-full py-4 bg-neutral-950 text-white hover:bg-neutral-800 text-sm font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                      >
                        Inquire Now
                      </motion.button>
                    ) : (
                      <motion.div
                        key="inquire-success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full py-4 bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center gap-2 rounded-xl"
                      >
                        <Check className="w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-wider">
                          Inquiry Sent successfully!
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <p className="text-[10px] text-neutral-400 text-center mt-3">
                    Material: {selectedProduct.specs.material} | Recyclable | FDA Approved
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
