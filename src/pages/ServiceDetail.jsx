import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { servicesData } from '../data/servicesData';
import useMeta from '../hooks/useMeta';

gsap.registerPlugin(ScrollTrigger);

// ── All services list ──────────────────────────────────────
const allServicesList = [
  { slug: 'visual-communication', title: 'Visual Communication', image: '6a3514ef9e312a69a772c2c0_8971c848c2638f539d50757c3cbdcfa62708d35c.webp' },
  { slug: 'digital-marketing', title: 'Digital Marketing', image: '6a3514e18cb733c985d735eb_054f97113db54086c0f159ca559fbaea76ca59c9.webp' },
  { slug: 'branding', title: 'Branding', image: '6a3514d344d27a821e163d62_c39acb39f24eaae1617e34596fcd880c93c2af1a.webp' },
  { slug: 'multimedia-production', title: 'Multimedia Production', image: '6a3514be30f3515af988ac02_ff0be023f7b2ee24272fccf4bf1cd342a495c37a.webp' },
  { slug: 'website-development', title: 'Website Development', image: '6a35149d36fe5f1750672b3a_82d7964840e34c402f065d2c6276cb5141f0a984.webp' },
  { slug: 'app-development', title: 'App Development', image: '6a3514888691881407d3c368_1ab4a0190b641c4b8019632a8f5eac8f25cf5100.webp' }
];

const relatedServicesMap = {
  'visual-communication': ['branding', 'multimedia-production'],
  'digital-marketing':    ['branding', 'website-development'],
  'branding':             ['visual-communication', 'digital-marketing'],
  'multimedia-production':['visual-communication', 'website-development'],
  'website-development':  ['app-development', 'digital-marketing'],
  'app-development':      ['website-development', 'digital-marketing'],
};

const serviceVideos = {
  'visual-communication': '/video/visual.mp4',
  'digital-marketing': '/video/digital.mp4',
  'branding': '/video/brand.mp4',
  'multimedia-production': '/video/multimedia.mp4',
  'website-development': '/video/web.mp4',
  'app-development': '/video/app.mp4',
};

// ── StickyCard002 Component (GSAP Scroll-Driven Stacking) ──
function ServiceStickyGallery({ service }) {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  const cards = (service.galleryImages || []).map((img, i) => ({
    id: i,
    src: `/images/services/details/${img}`,
    alt: `${service.title} showcase ${i + 1}`,
  }));

  useEffect(() => {
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      const imageElements = imageRefs.current.filter(Boolean);
      const totalCards = imageElements.length;
      if (!imageElements[0] || totalCards === 0) return;

      // Initial states
      gsap.set(imageElements[0], { y: '0%', scale: 1, rotation: 0 });
      for (let i = 1; i < totalCards; i++) {
        if (imageElements[i]) gsap.set(imageElements[i], { y: '100%', scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center center',
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const current = imageElements[i];
        const next = imageElements[i + 1];
        if (!current || !next) continue;

        scrollTimeline.to(current, { scale: 0.7, rotation: 5, duration: 1, ease: 'none' }, i);
        scrollTimeline.to(next, { y: '0%', duration: 1, ease: 'none' }, i);
      }

      const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
      if (containerRef.current) resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [service]);

  if (!cards.length) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Sticky inner: centered framed container */}
      <div
        className="sticky-cards"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        {/* Card frame */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1100px',
            height: '660px',
            maxHeight: '82vh',
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: '0 32px 60px -12px rgba(0,0,0,0.65)',
          }}
        >
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.src}
              alt={card.alt}
              ref={(el) => { imageRefs.current[i] = el; }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '24px',
                willChange: 'transform',
              }}
            />
          ))}

          {/* Overlay grid */}
          <div className="overlay-grid">
            {[...Array(8)].map((_, i) => <div key={i} className="col" />)}
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Main ServiceDetail Page ────────────────────────────────
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug];
  const [submitted, setSubmitted] = useState(false);

  if (!service) return <Navigate to="/service" replace />;

  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.overviewText1,
      "image": `https://wizzibility.com/images/services/details/${service.heroImage}`,
      "provider": { "@type": "Organization", "name": "Wizzibility", "url": "https://wizzibility.com" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "BreadcrumbList", "position": 1, "name": "Home", "item": "https://wizzibility.com" },
        { "@type": "BreadcrumbList", "position": 2, "name": "Services", "item": "https://wizzibility.com/service" },
        { "@type": "BreadcrumbList", "position": 3, "name": service.title, "item": `https://wizzibility.com/service/${slug}` }
      ]
    }
  ];

  useMeta({
    title: `${service.title} | Services | Wizzibility`,
    description: service.overviewText1,
    canonical: `https://wizzibility.com/service/${slug}`,
    keywords: `service, ${service.title.toLowerCase()}, creative tech agency, hyderabad marketing, wizzibility`,
    schema: serviceSchema,
    og: { type: 'website', url: `https://wizzibility.com/service/${slug}`, image: `/images/services/details/${service.heroImage}` }
  });

  React.useEffect(() => {
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [slug]);

  // Hero text entrance animation
  React.useEffect(() => {
    let attempts = 0, headingSplit = null, paragraphSplit = null;
    const initAnimation = () => {
      const gsapInst = window.gsap;
      const SplitText = window.SplitText;
      if (!gsapInst) {
        attempts++;
        if (attempts > 15) {
          document.querySelectorAll('.single-innner-heading-span, .hero-p').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
          return;
        }
        setTimeout(initAnimation, 100); return;
      }
      gsapInst.killTweensOf('.single-innner-heading-span, .hero-p, .anim-char, .anim-line');
      try {
        if (SplitText) {
          gsapInst.set('.single-innner-heading-span', { clearProps: 'all', opacity: 1 });
          gsapInst.set('.hero-p', { clearProps: 'all', opacity: 1 });
          headingSplit = new SplitText('.single-innner-heading-span', { type: 'chars', charsClass: 'anim-char' });
          paragraphSplit = new SplitText('.hero-p', { type: 'lines', linesClass: 'anim-line' });
        }
      } catch (err) { console.warn('SplitText error:', err); }
      const tl = gsapInst.timeline({ defaults: { ease: 'power3.out' } });
      if (paragraphSplit?.lines?.length) {
        tl.fromTo(paragraphSplit.lines, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, stagger: { amount: 0.2 }, ease: 'power2.out' }, 0);
      } else {
        tl.fromTo('.hero-p', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0);
      }
      if (headingSplit?.chars?.length) {
        tl.fromTo(headingSplit.chars, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, stagger: { amount: 0.7 } }, 0.46);
      } else {
        tl.fromTo('.single-innner-heading-span', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.46);
      }
    };
    const timer = setTimeout(initAnimation, 100);
    return () => {
      clearTimeout(timer);
      try { headingSplit?.revert(); } catch (e) {}
      try { paragraphSplit?.revert(); } catch (e) {}
    };
  }, [slug]);

  // Section headings scroll animation (matching Related Services)
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.ov-heading-row.left, .slide-heading-left').forEach((el) => {
        gsap.fromTo(
          el,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      document.querySelectorAll('.ov-heading-row.right, .slide-heading-right').forEach((el) => {
        gsap.fromTo(
          el,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [slug]);

  const relatedSlugs = relatedServicesMap[slug] || allServicesList.filter(s => s.slug !== slug).slice(0, 2).map(s => s.slug);
  const relatedServices = relatedSlugs.map(s => allServicesList.find(item => item.slug === s)).filter(Boolean);

  return (
    <>
      {/* ── HERO ── */}
      <div className="hero-home-area">
        <Navbar />
        <div className="space-3-small hide-tab"></div>
        <section className="section hero">
          <div className="space-10-small"></div>
          <div className="space-6-normal hide-mobile"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="hero-wrapper">
              <div className="hero-left">
                <p className="hero-p" style={{ opacity: 0 }}>{service.overviewText1}</p>
              </div>
              <div className="hero-title-wrapper">
                <h1 className="single-innner-heading">
                  <span className="single-innner-heading-span" style={{ display: 'inline-block', opacity: 0 }}>
                    {service.title}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {serviceVideos[slug] ? (
          <video autoPlay loop muted playsInline className="services-img" style={{ transform: 'none' }}>
            <source src={serviceVideos[slug]} type="video/mp4" />
          </video>
        ) : (
          <img src={`/images/services/details/${service.heroImage}`} loading="lazy" alt={service.title} sizes="100vw" className="services-img" />
        )}
        <div className="blend-color"></div>
        <div className="home-hero-overlay"></div>
      </div>

      <main className="main" id="main-content" role="main">

        {/* ── StickyCard002 Scroll-Driven Stacking Gallery ── */}
        <ServiceStickyGallery service={service} />

        {/* ── Content Section ── */}
        <section className="section" style={{ padding: '7rem 0', position: 'relative' }}>
          <div className="w-layout-blockcontainer container w-container">

            {/* 01 / OVERVIEW */}
            <div style={{ marginBottom: '5rem' }}>
              <div className="section-header" style={{ marginBottom: '3.5rem' }}>
                <div className="releted-service-header" style={{ maxWidth: 'none', width: '100%' }}>
                  <div className="releted-service-heading-wrap ov-heading-row left" style={{ justifyContent: 'center', display: 'flex' }}>
                    <h2 className="section-heading" style={{ textTransform: 'uppercase', fontSize: 'clamp(2.2rem, 5vw, 6rem)', lineHeight: '1.05', letterSpacing: '-1px', textAlign: 'center' }}>
                      {service.overviewTitle.includes(' That ') ? service.overviewTitle.split(' That ')[0] : service.overviewTitle}
                    </h2>
                  </div>
                  {service.overviewTitle.includes(' That ') && (
                    <div className="releted-service-heading-wrap ov-heading-row right" style={{ justifyContent: 'center', display: 'flex' }}>
                      <h2 className="section-heading" style={{ textTransform: 'uppercase', fontSize: 'clamp(2.2rem, 5vw, 6rem)', lineHeight: '1.05', letterSpacing: '-1px', textAlign: 'center' }}>
                        THAT {service.overviewTitle.split(' That ')[1]}
                      </h2>
                    </div>
                  )}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {/* Card 1 */}
                <div style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '2.5rem', transition: 'border-color 0.3s, transform 0.3s' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(168,85,247,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-family--phudu)', fontSize: '1.35rem', color: '#fff', marginBottom: '1rem' }}>Brand Impact & Value</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: '1.75' }}>{service.overviewText2}</p>
                </div>
                {/* Card 2 */}
                <div style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '2.5rem', transition: 'border-color 0.3s, transform 0.3s' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(168,85,247,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-family--phudu)', fontSize: '1.35rem', color: '#fff', marginBottom: '1rem' }}>Strategic Approach</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: '1.75' }}>{service.experienceText}</p>
                </div>
              </div>
            </div>

            {/* 02 / DELIVERABLES */}
            <div style={{ marginBottom: '6rem' }}>
              <div className="section-header" style={{ marginBottom: '2rem' }}>
                <div className="releted-service-header" style={{ maxWidth: 'none', width: '100%' }}>
                  <div className="releted-service-heading-wrap slide-heading-left" style={{ justifyContent: 'center', display: 'flex', width: '100%' }}>
                    <h2 className="section-heading" style={{ textTransform: 'uppercase', fontSize: 'clamp(1.4rem, 3.4vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.5px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                      {service.inclusionsTitle}
                    </h2>
                  </div>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '720px', textAlign: 'center', margin: '0 auto 3rem auto' }}>
                {service.inclusionsDesc}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {service.inclusionsList?.map((inclusion, index) => (
                  <div key={index} style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '1.8rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem', transition: 'transform 0.3s, border-color 0.3s' }}>
                    <div style={{ minWidth: '36px', height: '36px', borderRadius: '12px', background: 'linear-gradient(135deg, #a855f7, #7e22ce)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(168,85,247,0.3)', flexShrink: 0 }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-family--phudu)', color: '#a855f7', letterSpacing: '1px' }}>0{index + 1}</span>
                      <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '500', marginTop: '4px', lineHeight: '1.4' }}>{inclusion}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>



            {/* CTA */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '28px', padding: '3.5rem 2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#fff', fontFamily: 'var(--font-family--phudu)', marginBottom: '1rem' }}>
                Ready to elevate your brand with <span style={{ color: '#a855f7' }}>{service.title}</span>?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2rem' }}>
                Partner with Wizzibility to turn your strategy into high-performing creative digital assets.
              </p>
              <Link to="/contact" className="button quote-btn-purple w-inline-block">
                <div className="button-text-wrapper"><div className="button-text">Start Your Project</div></div>
                <div className="button-icon-wrapper">
                  <div className="project-arrow-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon"><path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H16V15H14V17ZM14 17H12V19H14V17Z" fill="currentColor"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon"><path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H12V19H14V17Z" fill="currentColor"></path></svg>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </section>

        {/* ── Related Services ── */}
        <section className="section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-header">
              <div className="releted-service-header">
                <div className="releted-service-heading-wrap left"><h2 className="section-heading">Related</h2></div>
                <div className="releted-service-heading-wrap right"><h2 className="section-heading">services</h2></div>
              </div>
            </div>
            <div className="space-3-large"></div>
            <div className="w-layout-grid services-grid">
              <div className="services-left">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {relatedServices[0] && (
                      <div role="listitem" className="w-dyn-item">
                        <Link to={`/service/${relatedServices[0].slug}`} className="services-card bg-onyx w-inline-block">
                          <div className="max-width-17" style={{ maxWidth: 'none' }}>
                            <div className="font-2-medium center white" style={{ whiteSpace: 'nowrap' }}>{relatedServices[0].title}</div>
                          </div>
                          <div className="service-image-wrapper">
                            <img src={`/images/services/details/${relatedServices[0].image}`} loading="lazy" alt={relatedServices[0].title} className="service-image" />
                            <div className="project-arrow-wrap">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 23" fill="none" className="project-icon-2">
                                <path fillRule="evenodd" clipRule="evenodd" d="M28.2134 9.46264C24.1672 9.46264 20.4796 5.74946 20.4796 1.67184L20.4796 -8.94821e-07L17.1604 -7.49793e-07L17.1604 1.67184C17.1604 4.63769 18.4515 7.41963 20.4779 9.46264L4.13796e-07 9.46264L5.60013e-07 12.8063L20.4779 12.8063C18.4515 14.8493 17.1604 17.6313 17.1604 20.5971L17.1604 22.2689L20.4796 22.2689L20.4796 20.5971C20.4796 16.5195 24.1672 12.8063 28.2134 12.8063L29.873 12.8063L29.873 9.46264L28.2134 9.46264Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="demo">#</div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="service-right">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {relatedServices[1] && (
                      <div role="listitem" className="w-dyn-item">
                        <Link to={`/service/${relatedServices[1].slug}`} className="services-card bg-onyx w-inline-block">
                          <div className="max-width-17" style={{ maxWidth: 'none' }}>
                            <div className="font-2-medium center white" style={{ whiteSpace: 'nowrap' }}>{relatedServices[1].title}</div>
                          </div>
                          <div className="service-image-wrapper">
                            <img src={`/images/services/details/${relatedServices[1].image}`} loading="lazy" alt={relatedServices[1].title} className="service-image" />
                            <div className="project-arrow-wrap">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 23" fill="none" className="project-icon-2">
                                <path fillRule="evenodd" clipRule="evenodd" d="M28.2134 9.46264C24.1672 9.46264 20.4796 5.74946 20.4796 1.67184L20.4796 -8.94821e-07L17.1604 -7.49793e-07L17.1604 1.67184C17.1604 4.63769 18.4515 7.41963 20.4779 9.46264L4.13796e-07 9.46264L5.60013e-07 12.8063L20.4779 12.8063C18.4515 14.8493 17.1604 17.6313 17.1604 20.5971L17.1604 22.2689L20.4796 22.2689L20.4796 20.5971C20.4796 16.5195 24.1672 12.8063 28.2134 12.8063L29.873 12.8063L29.873 9.46264L28.2134 9.46264Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="demo">#</div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-10-small"></div>
        </section>

        <Footer />
      </main>
    </>
  );
}
