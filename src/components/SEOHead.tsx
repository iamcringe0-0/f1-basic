import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://f1-basic.vercel.app/og-image.png',
  schema,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create a meta tag
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update canonical link
    const setCanonical = (url: string) => {
      let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', url);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow');
    setCanonical(canonicalUrl);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'F1 Explained');
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');

    // 4. Twitter / X Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Page-Specific JSON-LD Structured Data
    if (schema) {
      let script = document.getElementById('page-json-ld') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'page-json-ld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
      const existingScript = document.getElementById('page-json-ld');
      if (existingScript) {
        existingScript.remove();
      }
    }
  }, [title, description, canonicalUrl, ogType, ogImage, schema]);

  return null;
};
