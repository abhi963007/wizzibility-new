import { useEffect } from 'react';

export default function useMeta(config = {}) {
  const {
    title,
    description,
    canonical,
    keywords,
    robots = 'index, follow',
    author = 'Haripreeth',
    publisher = 'Wizzibility',
    og = {},
    twitter = {},
    schema,
  } = config;

  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to set/update meta tag
    const setMeta = (attr, name, value) => {
      if (value === undefined || value === null) return;
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', robots);
    setMeta('name', 'author', author);
    setMeta('name', 'publisher', publisher);
    setMeta('name', 'copyright', 'Wizzibility');
    
    // Geo Location Meta Tags
    setMeta('name', 'geo.region', 'IN-TG'); // Telangana
    setMeta('name', 'geo.placename', 'Hyderabad');
    setMeta('name', 'geo.position', '17.4556572;78.3650841');
    setMeta('name', 'ICBM', '17.4556572, 78.3650841');

    // 3. Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', canonical);
    }

    // 4. Open Graph Meta Tags
    setMeta('property', 'og:title', og.title || title);
    setMeta('property', 'og:description', og.description || description);
    setMeta('property', 'og:type', og.type || 'website');
    setMeta('property', 'og:url', og.url || canonical);
    setMeta('property', 'og:image', og.image || '/images/6a356f5456ef1a53f0f6f826_7782b6bf6ea462330fdb471ee69d6f709461c3f2.webp');
    setMeta('property', 'og:site_name', og.siteName || 'Wizzibility');
    setMeta('property', 'og:locale', og.locale || 'en_US');

    // 5. Twitter Meta Tags
    setMeta('name', 'twitter:card', twitter.card || 'summary_large_image');
    setMeta('name', 'twitter:title', twitter.title || og.title || title);
    setMeta('name', 'twitter:description', twitter.description || og.description || description);
    setMeta('name', 'twitter:image', twitter.image || og.image);
    setMeta('name', 'twitter:creator', twitter.creator || '@wizzibility');

    // 6. JSON-LD Dynamic Schema Script
    let schemaEl = document.querySelector('script[type="application/ld+json"]#dynamic-schema');
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement('script');
        schemaEl.setAttribute('type', 'application/ld+json');
        schemaEl.setAttribute('id', 'dynamic-schema');
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schema);
    }

    // Cleanup function to remove tags when navigating away
    return () => {
      // We don't remove standard meta tags to prevent flashing, but we clean up the dynamic JSON-LD schema
      if (schemaEl && document.head.contains(schemaEl)) {
        try { document.head.removeChild(schemaEl); } catch (_) {}
      }
    };
  }, [title, description, canonical, keywords, robots, author, publisher, og, twitter, schema]);
}
