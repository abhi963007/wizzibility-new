import { useEffect } from 'react';

export default function useWebflow(scriptSrcs, pageId) {
  // ── Load page-specific Webflow scripts & initialise IX2 ──
  useEffect(() => {
    if (!scriptSrcs || !pageId) return;

    const scripts = Array.isArray(scriptSrcs) ? scriptSrcs : [scriptSrcs];

    // Tell Webflow which page we're on
    document.documentElement.setAttribute('data-wf-page', pageId);

    let cancelled = false;
    let timer;
    const loadedScripts = [];

    // ── Initialise Webflow (called ONCE after scripts load) ──
    const initWebflow = () => {
      if (cancelled) return;

      if (!window.Webflow) {
        // Webflow runtime not available yet — wait, but use idle callback
        // so we don't block scroll / paint.
        timer = setTimeout(initWebflow, 500);
        return;
      }

      try {
        window.Webflow.ready();

        const ix2 = window.Webflow.require('ix2');
        if (ix2) {
          ix2.init();
        }
      } catch (err) {
        console.warn('[Webflow] init failed:', err);
      }

      // One deferred ScrollTrigger refresh after IX2 settles
      setTimeout(() => {
        if (!cancelled && window.ScrollTrigger) {
          try { window.ScrollTrigger.refresh(); } catch (_) { /* ignore */ }
        }
      }, 600);
    };

    // ── Sequential script loader ──
    const loadScriptsSequentially = (index) => {
      if (cancelled) return;

      if (index >= scripts.length) {
        // All page scripts loaded → init on next idle frame
        if (typeof requestIdleCallback === 'function') {
          requestIdleCallback(() => initWebflow(), { timeout: 1000 });
        } else {
          setTimeout(initWebflow, 100);
        }
        return;
      }

      const src = scripts[index];
      let el = document.querySelector(`script[src="${src}"]`);
      let isNew = false;

      if (!el) {
        el = document.createElement('script');
        el.src = src;
        el.async = false;
        el.type = 'text/javascript';
        el.setAttribute('data-webflow-page-script', 'true');
        document.body.appendChild(el);
        isNew = true;
      }

      const onLoad = () => loadScriptsSequentially(index + 1);

      if (isNew) {
        el.addEventListener('load', onLoad);
        loadedScripts.push({ element: el, listener: onLoad });
      } else {
        onLoad();
      }
    };

    loadScriptsSequentially(0);

    // ── Cleanup ──
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);

      loadedScripts.forEach(({ element, listener }) => {
        element.removeEventListener('load', listener);
        if (element.getAttribute('data-webflow-page-script') === 'true') {
          try { document.body.removeChild(element); } catch (_) { /* ok */ }
        }
      });
    };
  }, [scriptSrcs, pageId]);

  // ── Debounced ScrollTrigger refresh after images load ──
  useEffect(() => {
    let refreshTimer;

    const scheduleRefresh = () => {
      // Debounce: no matter how many images fire 'load',
      // we only call ScrollTrigger.refresh() once, 300 ms after the last one.
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => {
        if (window.ScrollTrigger) {
          try { window.ScrollTrigger.refresh(); } catch (_) { /* ignore */ }
        }
      }, 300);
    };

    window.addEventListener('load', scheduleRefresh);
    // capture=true so we catch individual <img> load events
    document.addEventListener('load', scheduleRefresh, true);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('load', scheduleRefresh);
      document.removeEventListener('load', scheduleRefresh, true);
    };
  }, []);
}

