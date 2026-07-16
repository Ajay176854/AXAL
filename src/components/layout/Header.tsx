'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use solid style when scrolled OR on non-home pages
  const isSolid = scrolled || !isHomePage;

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <filter id="extract-white">
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1 0 0 0 0" />
        </filter>
      </svg>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center h-16">
            <img 
              src="/logo-v2.png" 
              alt="AXAL Logo" 
              className="h-full w-auto object-contain transition-all duration-300" 
              style={isSolid ? { mixBlendMode: 'multiply' } : {}} 
            />
          </Link>

          {/* Navigation */}
          <nav className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-300 ${
            isSolid ? 'text-neutral-600' : 'text-white/80'
          }`}>
            <Link href="/products" className={`transition-colors ${
              isSolid ? 'hover:text-neutral-900' : 'hover:text-white'
            }`}>
              Products
            </Link>
            <Link href="/capabilities" className={`transition-colors ${
              isSolid ? 'hover:text-neutral-900' : 'hover:text-white'
            }`}>
              Capabilities
            </Link>
            <Link href="/about" className={`transition-colors ${
              isSolid ? 'hover:text-neutral-900' : 'hover:text-white'
            }`}>
              About Us
            </Link>
            <a href="https://wa.me/918300149040" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
              isSolid ? 'hover:text-neutral-900' : 'hover:text-white'
            }`}>
              Contact
            </a>
          </nav>

          {/* CTA */}
          <Link 
            href="/products"
            className="header-cta group"
            data-solid={isSolid ? 'true' : 'false'}
          >
            <span className="header-cta__glow" />
            <span className="header-cta__content">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <span className="header-cta__text">Explore Products</span>
              <svg className="header-cta__arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 7h12M8 2l5 5-5 5"/>
              </svg>
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}
