import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { servicesData } from '../data/servicesData';
import useMeta from '../hooks/useMeta';

gsap.registerPlugin(ScrollTrigger);

// ── All services list ──────────────────────────────────────
const allServicesList = [
  { slug: 'digital-marketing', title: 'Digital Marketing', image: '6a3514e18cb733c985d735eb_054f97113db54086c0f159ca559fbaea76ca59c9.webp' },
  { slug: 'visual-communication', title: 'Visual Communication', image: '6a3514ef9e312a69a772c2c0_8971c848c2638f539d50757c3cbdcfa62708d35c.webp' },
  { slug: 'print-media', title: 'Print Media', image: '6a3514888691881407d3c368_1ab4a0190b641c4b8019632a8f5eac8f25cf5100.webp' },
  { slug: 'branding', title: 'Branding', image: '6a3514d344d27a821e163d62_c39acb39f24eaae1617e34596fcd880c93c2af1a.webp' },
  { slug: 'tech-development', title: 'Tech Development', image: '6a35149d36fe5f1750672b3a_82d7964840e34c402f065d2c6276cb5141f0a984.webp' },
  { slug: 'multimedia-production', title: 'Multimedia Production', image: '6a3514be30f3515af988ac02_ff0be023f7b2ee24272fccf4bf1cd342a495c37a.webp' },
  { slug: 'strategy-planning', title: 'Strategy Planning', image: '6a3514e18cb733c985d735eb_054f97113db54086c0f159ca559fbaea76ca59c9.webp' },
];

const relatedServicesMap = {
  'digital-marketing':    ['branding', 'strategy-planning'],
  'visual-communication': ['branding', 'multimedia-production'],
  'print-media':          ['visual-communication', 'branding'],
  'branding':             ['visual-communication', 'digital-marketing'],
  'tech-development':     ['digital-marketing', 'visual-communication'],
  'multimedia-production':['visual-communication', 'tech-development'],
  'strategy-planning':    ['digital-marketing', 'branding'],
  'website-development':  ['tech-development', 'digital-marketing'],
  'app-development':      ['tech-development', 'digital-marketing'],
};

const serviceVideos = {
  'digital-marketing': '/video/digital.mp4',
  'visual-communication': '/video/visual.mp4',
  'print-media': '/video/services.mp4',
  'branding': '/video/brand.mp4',
  'tech-development': '/video/web.mp4',
  'multimedia-production': '/video/multimedia.mp4',
  'strategy-planning': '/video/services.mp4',
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
      if (headingSplit?.chars?.length) {
        tl.fromTo(headingSplit.chars, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, stagger: { amount: 0.7 } }, 0);
      } else {
        tl.fromTo('.single-innner-heading-span', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0);
      }
      if (paragraphSplit?.lines?.length) {
        tl.fromTo(paragraphSplit.lines, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, stagger: { amount: 0.2 }, ease: 'power2.out' }, 0.46);
      } else {
        tl.fromTo('.hero-p', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.46);
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
      <div className="hero-home-area" style={{ borderBottom: '1px solid var(--_color---blastic-sea)' }}>
        <Navbar />
        <div className="space-3-small hide-tab"></div>
        <section className="section hero">
          <div className="space-10-small"></div>
          <div className="space-6-normal hide-mobile"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="hero-wrapper">
              <div className="hero-title-wrapper">
                <h1 className="single-innner-heading">
                  <span className="single-innner-heading-span" style={{ display: 'inline-block', opacity: 0 }}>
                    {service.title.split(' ').map((word, index, arr) => (
                      <React.Fragment key={index}>
                        {index === 1 ? (
                          <span className="heading-hightlight" style={{ color: '#ffd84d', opacity: 1, display: 'inline-block' }}>{word}</span>
                        ) : (
                          word
                        )}
                        {index < arr.length - 1 && ' '}
                      </React.Fragment>
                    ))}
                  </span>
                </h1>
              </div>
              <div className="hero-left">
                <p className="hero-p" style={{ opacity: 0 }}>{service.overviewText1}</p>
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
        {/* <ServiceStickyGallery service={service} /> */}

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
              <div 
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  justifyContent: 'center', 
                  gap: '2rem', 
                  width: '100%' 
                }}
              >
                {(service.serviceCards || [
                  { title: 'Brand Impact & Value', desc: service.overviewText2 },
                  { title: 'Strategic Approach', desc: service.experienceText }
                ]).map((card, idx) => (
                  <div 
                    key={idx} 
                    className="services-card bg-onyx" 
                    style={{ 
                      flex: '1 1 340px', 
                      maxWidth: '380px', 
                      padding: '0', 
                      borderRadius: '24px', 
                      overflow: 'hidden', 
                      border: '1px solid rgba(255,255,255,0.08)', 
                      display: 'flex', 
                      flexDirection: 'column' 
                    }}
                  >
                    <div style={{ background: '#1c1c1c', padding: '1.25rem 2rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', width: '100%' }}>
                      <h3 style={{ fontFamily: 'var(--font-family--phudu)', fontSize: '1.25rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                        {card.title}
                      </h3>
                    </div>
                    <div style={{ padding: '1.8rem 2rem 2.2rem 2rem', background: '#121212', flex: 1 }}>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.02rem', lineHeight: '1.7', margin: 0 }}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
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
              <div className="flex w-full items-center justify-center overflow-hidden">
                <style>{`
                  .Carousal_001 {
                    padding-bottom: 60px !important;
                    width: 100%;
                    overflow: visible;
                  }
                  .Carousal_001 .swiper-slide {
                    background: transparent;
                    transition: opacity 0.3s;
                  }
                  .Carousal_001 .swiper-slide:not(.swiper-slide-active) {
                    opacity: 0.5;
                  }
                  .swiper-button-next::after,
                  .swiper-button-prev::after {
                    display: none;
                  }
                  .swiper-button-next,
                  .swiper-button-prev {
                    background: rgba(168,85,247,0.15);
                    border: 1px solid rgba(168,85,247,0.3);
                    border-radius: 50%;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s, transform 0.3s;
                    top: auto;
                    bottom: 0px;
                  }
                  .swiper-button-next {
                    right: calc(50% - 30px - 48px);
                  }
                  .swiper-button-prev {
                    left: calc(50% - 30px - 48px);
                  }
                  .swiper-button-next:hover,
                  .swiper-button-prev:hover {
                    background: rgba(168,85,247,0.4);
                    transform: scale(1.05);
                  }
                  .swiper-pagination-bullet {
                    background: rgba(255,255,255,0.3);
                  }
                  .swiper-pagination-bullet-active {
                    background: #a855f7;
                  }
                  .swiper-pagination {
                    bottom: 12px !important;
                  }
                `}</style>
                <motion.div
                  initial={{ opacity: 0, translateY: 30 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                  className="w-full relative"
                  style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}
                >
                  <Swiper
                    spaceBetween={30}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={1.1}
                    breakpoints={{
                      640: { slidesPerView: 1.5 },
                      1024: { slidesPerView: 2.2 },
                    }}
                    coverflowEffect={{
                      rotate: 0,
                      slideShadows: false,
                      stretch: 0,
                      depth: 100,
                      modifier: 2.5,
                    }}
                    pagination={{ clickable: true }}
                    className="Carousal_001"
                    modules={[EffectCoverflow, Autoplay, Pagination]}
                  >
                    {((service.galleryImages && service.galleryImages.length > 0)
                      ? [...service.galleryImages, ...service.galleryImages, ...service.galleryImages].slice(0, 6).map(img => `/images/services/details/${decodeURIComponent(img)}`)
                      : [
                          '/images/services/details/6a2fd6923e5daf11466f37d8_image 57372.webp',
                          '/images/services/details/6a32f96f6e5d3efb008fbb33_1c77cef06aaf126d1d6c25d3ebe80b7cb39fe0c5.webp',
                          '/images/services/details/6a32f68243bd61f703504b7e_662eab522ab6ce8bf8e08b76e6992bb21e5365a4.webp',
                          '/images/services/details/6a2fd69280be1041c486ea15_image 57373 (3).webp',
                          '/images/services/details/6a2fd692d5a0f9b716ac6d45_image 57377.webp',
                          '/images/services/details/6a2fd69290263b0be396f5c5_image 57371 (1).webp'
                        ]
                    ).map((src, index) => (
                      <SwiperSlide key={index} style={{ height: '320px', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <img
                          className="h-full w-full object-cover"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          src={src}
                          alt={`${service.title} showcase ${index + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              </div>
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
        </section>

        <Footer />
      </main>
    </>
  );
}
