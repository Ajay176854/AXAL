import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  schema?: Record<string, any>;
}

export default function SEO({ title, description, keywords, path = '', schema }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | AXAL Packing`;
    const fullUrl = `https://axalpacking.com${path.startsWith('/') ? path : '/' + path}`;

    // Update document title
    document.title = fullTitle;

    // Helper function to update or create a meta tag
    const updateMetaTag = (name: string, value: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Update standard meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Canonical URL
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', fullUrl);

    // Update Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);

    // Update Twitter tags
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:url', fullUrl);

    // Dynamic JSON-LD Schema injection
    let schemaScript: HTMLScriptElement | null = null;
    if (schema) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = 'dynamic-seo-schema';
      schemaScript.innerHTML = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup on unmount
    return () => {
      if (schemaScript && schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, [title, description, keywords, path, schema]);

  return null; // This component doesn't render any visible UI elements
}
