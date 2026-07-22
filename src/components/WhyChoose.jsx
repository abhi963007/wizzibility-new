import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhyChoose() {
  const [activeImage, setActiveImage] = useState(0);

  const features = [
    {
      id: 1,
      title: 'Creative-Tech Integration',
      description: 'Merging high-end aesthetics with cutting-edge engineering to build immersive, high-performance digital experiences.',
      image: '/images/home/Why Team Up.jpeg',
    },
    {
      id: 2,
      title: 'Enterprise-Ready Solutions',
      description: 'Scalable, secure, and robust architectures engineered to drive long-term business growth and operational efficiency.',
      image: '/images/home/Service 2.jpeg',
    },
    {
      id: 3,
      title: 'Startup-Friendly Approach',
      description: 'Agile, rapid-iteration development tailored to turn innovative ideas into market-ready products fast.',
      image: '/images/home/Service 3.jpeg',
    },
    {
      id: 4,
      title: 'Cross-Platform Excellence',
      description: 'Seamless user experiences designed and optimized natively across web, desktop, and mobile devices.',
      image: '/images/home/Service 4.jpeg',
    },
    {
      id: 5,
      title: 'AI-Driven Web & App Design',
      description: 'Next-gen intelligent interfaces and data-backed UX tailored to elevate user engagement and conversion.',
      image: '/images/home/Service 5.jpeg',
    },
    {
      id: 6,
      title: 'Cinematic Media Production',
      description: 'State-of-the-art motion graphics, 3D visual assets, and high-impact media for powerful brand storytelling.',
      image: '/images/home/Service 6.jpeg',
    },
  ];

  const cssStyles = `
    .skiper-expand-wrapper {
      display: flex;
      width: 100%;
      max-width: 94rem;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 0.75rem 0;
    }

    .skiper-card {
      position: relative;
      cursor: pointer;
      overflow: hidden;
      border-radius: 2.25rem;
      height: 33rem;
    }

    .skiper-card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 991px) {
      .skiper-expand-wrapper {
        flex-direction: column;
        height: auto;
        gap: 0.75rem;
      }
      .skiper-card {
        width: 100% !important;
        height: 5.5rem !important;
        border-radius: 1.5rem;
      }
      .skiper-card.active {
        height: 22rem !important;
      }
    }
  `;

  return (
    <section className="section onyx" style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{cssStyles}</style>
      <div className="space-6-normal"></div>
      <div className="w-layout-blockcontainer container w-container" style={{ maxWidth: '96rem', width: '95%' }}>
        <div className="choose-wrapper">
          <div className="section-header">
            <div className="section-heading-wrap choose text-center">
              <h2 className="section-heading text-center">Why Team Up With Us?</h2>
            </div>
          </div>
          <div className="space-3-small"></div>

          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full"
          >
            <div className="skiper-expand-wrapper">
              {features.map((feature, index) => {
                const isActive = activeImage === index;
                return (
                  <motion.div
                    key={feature.id}
                    className={`skiper-card ${isActive ? 'active' : ''}`}
                    initial={{ width: '7rem', height: '33rem' }}
                    animate={{
                      width: isActive ? '34rem' : '7rem',
                      height: '33rem',
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setActiveImage(index)}
                    onHoverStart={() => setActiveImage(index)}
                  >
                    {/* Gradient Overlay when Active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.92) 100%)',
                            zIndex: 1,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Dark Tint when Inactive */}
                    {!isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(0, 0, 0, 0.25)',
                          transition: 'background 0.3s ease',
                          zIndex: 1,
                        }}
                      />
                    )}

                    {/* Animated Text Content Overlay when Active */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`content-${feature.id}`}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            padding: '2.25rem 2rem',
                            zIndex: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <div>
                            <motion.h3
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              transition={{ duration: 0.3, delay: 0.15 }}
                              style={{
                                color: '#ffffff',
                                fontSize: '1.45rem',
                                fontWeight: '700',
                                letterSpacing: '-0.01em',
                                marginBottom: '0.5rem',
                                lineHeight: '1.3',
                              }}
                            >
                              {feature.title}
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                              style={{
                                color: 'rgba(255, 255, 255, 0.85)',
                                fontSize: '0.95rem',
                                lineHeight: '1.5',
                                margin: 0,
                              }}
                            >
                              {feature.description}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Image */}
                    <img
                      src={feature.image}
                      className="skiper-card-img"
                      alt={feature.title}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="space-6-normal"></div>
    </section>
  );
}
