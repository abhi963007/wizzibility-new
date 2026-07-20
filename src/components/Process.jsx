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
  const steps = [
    {
      id: 1,
      title: 'DISCOVER',
      step: 'STEP 01',
      description: 'Discovery session to analyze brand, goals, customer journey, and gaps through research and audits.',
      src: '/images/home/work1.jpeg',
    },
    {
      id: 2,
      title: 'STRATEGY',
      step: 'STEP 02',
      description: 'Formulate technology integration roadmaps and digital marketing funnels tailored for growth.',
      src: '/images/home/work2.jpeg',
    },
    {
      id: 3,
      title: 'DESIGN & DEVELOP',
      step: 'STEP 03',
      description: 'Expert team designs a tailored marketing ecosystem using design, storytelling, data, and AI tools.',
      src: '/images/home/work3.jpeg',
    },
    {
      id: 4,
      title: 'DEPLOY & SCALE',
      step: 'STEP 04',
      description: 'Launch campaigns and assets, then monitor, optimize, and scale for continuous growth and returns.',
      src: '/images/home/work4.jpeg',
    },
    {
      id: 5,
      title: 'OPTIMIZE',
      step: 'STEP 05',
      description: 'Refine user experiences, automate workflows, and scale for continuous revenue growth.',
      src: '/images/home/work5.jpeg',
    },
  ];

  const cssStyles = `
    .process-coverflow-swiper {
      width: 100%;
      padding-top: 20px;
      padding-bottom: 60px !important;
    }
    
    .process-coverflow-swiper .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 340px;
      height: 460px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.12);
      transition: border-color 0.3s ease, transform 0.3s ease;
    }

    .process-coverflow-swiper .swiper-slide-active {
      border-color: rgba(255, 255, 255, 0.4);
    }

    .process-coverflow-swiper .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.4) !important;
      width: 10px;
      height: 10px;
      opacity: 0.6;
    }

    .process-coverflow-swiper .swiper-pagination-bullet-active {
      background-color: #ffffff !important;
      width: 28px;
      border-radius: 6px;
      opacity: 1;
    }

    .process-nav-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease;
      z-index: 10;
    }

    .process-nav-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.08);
    }

    @media (max-width: 640px) {
      .process-coverflow-swiper .swiper-slide {
        width: 280px;
        height: 400px;
      }
    }
  `;

  return (
    <section className="section bg process-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{cssStyles}</style>

      <div className="space-6-normal"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="process-title-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-header">
            <div className="section-heading-wrap choose text-center">
              <h2 className="section-heading night">Working Process</h2>
            </div>
          </div>
          <div className="max-width-28" style={{ marginTop: '1rem', maxWidth: '36rem' }}>
            <p className="section-p" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Working with Wizzibility means you get a next-gen creative tech partner. We guide you seamlessly from discovery through engineering and scaling.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full px-2"
        >
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            grabCursor={true}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 140,
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
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.92) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1.5rem',
                    }}
                  >
                    {/* Step Pill */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <span
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#fff',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '20px',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div style={{ marginTop: 'auto' }}>
                      <h3
                        style={{
                          color: '#ffffff',
                          fontSize: '1.35rem',
                          fontWeight: '700',
                          letterSpacing: '-0.01em',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
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
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
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
