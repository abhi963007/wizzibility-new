import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Process() {
  const baseSteps = [
    {
      id: 1,
      title: 'DISCOVERY & AUDIT',
      step: 'STEP 01',
      description: 'In-depth brand audits, market research, and audience mapping to identify core digital growth opportunities.',
      src: '/images/home/work1.jpeg',
    },
    {
      id: 2,
      title: 'STRATEGY & ROADMAP',
      step: 'STEP 02',
      description: 'Formulate technology integration roadmaps, funnels, and positioning strategies tailored for scale.',
      src: '/images/home/work2.jpeg',
    },
    {
      id: 3,
      title: 'UI/UX ARCHITECTURE',
      step: 'STEP 03',
      description: 'Craft high-fidelity wireframes, interactive prototypes, and human-centric visual design systems.',
      src: '/images/home/work3.jpeg',
    },
    {
      id: 4,
      title: 'CREATIVE PRODUCTION',
      step: 'STEP 04',
      description: 'Produce cinematic 3D visual assets, motion graphics, and high-impact brand collateral.',
      src: '/images/home/work4.jpeg',
    },
    {
      id: 5,
      title: 'FULL-STACK ENGINEERING',
      step: 'STEP 05',
      description: 'Engineered with modern web frameworks, clean architecture, high performance, and seamless API integrations.',
      src: '/images/home/work5.jpeg',
    },
    {
      id: 6,
      title: 'DEPLOYMENT & TESTING',
      step: 'STEP 06',
      description: 'Rigorous quality assurance, cross-platform testing, automated security checks, and multi-region deployment.',
      src: '/images/home/Service 1.jpeg',
    },
    {
      id: 7,
      title: 'OPTIMIZE & SCALE',
      step: 'STEP 07',
      description: 'Continuous conversion rate optimization, data analytics, automated workflows, and scaling revenue growth.',
      src: '/images/home/Service 2.jpeg',
    },
  ];

  // Duplicate steps array to guarantee seamless infinite coverflow streaming with zero gaps on right or left
  const steps = [
    ...baseSteps,
    ...baseSteps.map((s) => ({ ...s, id: s.id + 100 })),
    ...baseSteps.map((s) => ({ ...s, id: s.id + 200 })),
  ];

  const cssStyles = `
    .process-coverflow-swiper {
      width: 100%;
      max-width: 100%;
      padding-top: 25px;
      padding-bottom: 55px !important;
    }
    
    .process-coverflow-swiper .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 360px;
      height: 520px;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 24px 50px rgba(0, 0, 0, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.14);
      transition: border-color 0.35s ease, transform 0.35s ease;
    }

    .process-coverflow-swiper .swiper-slide-active {
      border-color: rgba(255, 255, 255, 0.45);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), 0 0 24px rgba(255, 255, 255, 0.12);
    }

    .process-coverflow-swiper .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.35) !important;
      width: 8px;
      height: 8px;
      opacity: 0.6;
      transition: all 0.3s ease;
    }

    .process-coverflow-swiper .swiper-pagination-bullet-active {
      background-color: #ffffff !important;
      width: 26px;
      border-radius: 6px;
      opacity: 1;
    }

    .process-nav-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease, border-color 0.3s ease;
      z-index: 10;
    }

    .process-nav-btn:hover {
      background: rgba(255, 255, 255, 0.22);
      border-color: rgba(255, 255, 255, 0.35);
      transform: scale(1.08);
    }

    @media (max-width: 640px) {
      .process-coverflow-swiper .swiper-slide {
        width: 290px;
        height: 420px;
      }
    }
  `;

  return (
    <section className="section bg process-section" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <style>{cssStyles}</style>

      <div className="space-6-normal"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="process-title-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-header">
            <div className="section-heading-wrap choose text-center">
              <h2 className="section-heading night">Working Process</h2>
            </div>
          </div>
          <div className="max-width-28" style={{ marginTop: '1rem', maxWidth: '38rem' }}>
            <p className="section-p" style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'center' }}>
              Working with Wizzibility means you get a next-gen creative tech partner. We guide you seamlessly from discovery through engineering, testing, and infinite scaling.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width container spanning edge to edge across the screen */}
      <div className="process-fullwidth-wrap" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full"
          style={{ width: '100%' }}
        >
          <Swiper
            spaceBetween={0}
            speed={750}
            autoplay={{
              delay: 2400,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="coverflow"
            grabCursor={true}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            watchSlidesProgress={true}
            coverflowEffect={{
              rotate: 18,
              stretch: 0,
              depth: 90,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.process-swiper-next',
              prevEl: '.process-swiper-prev',
            }}
            className="process-coverflow-swiper"
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          >
            {steps.map((step) => (
              <SwiperSlide key={step.id}>
                <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                  {/* Background Image */}
                  <img
                    src={step.src}
                    alt={step.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />

                  {/* Dark Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.94) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1.75rem',
                    }}
                  >


                    {/* Content Box */}
                    <div style={{ marginTop: 'auto' }}>
                      <h3
                        style={{
                          color: '#ffffff',
                          fontSize: '1.3rem',
                          fontWeight: '700',
                          letterSpacing: '-0.01em',
                          marginBottom: '0.45rem',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          color: 'rgba(255, 255, 255, 0.82)',
                          fontSize: '0.88rem',
                          lineHeight: '1.48',
                          margin: 0,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '1.5rem' }}>
              <div className="process-swiper-prev process-nav-btn">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
              <div className="process-swiper-next process-nav-btn">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </Swiper>
        </motion.div>
      </div>

      <div className="space-6-normal"></div>
    </section>
  );
}
