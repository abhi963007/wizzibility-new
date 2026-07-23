import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CARDS = [
  { id: 1, image: '/images/home/Visuals2.jpeg', alt: 'Visual design 1' },
  { id: 2, image: '/images/home/Visuals1.jpeg', alt: 'Visual design 2' },
  { id: 3, image: '/images/home/cards1.jpeg', alt: 'Visual design 3' },
  { id: 4, image: '/images/home/cards2.jpeg', alt: 'Visual design 4' },
  { id: 5, image: '/images/home/cards3.jpeg', alt: 'Visual design 5' },
];

function StickyCard002({ cards = DEFAULT_CARDS }) {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imageElements = imageRefs.current.filter(Boolean);
      const totalCards = imageElements.length;

      if (!imageElements[0] || totalCards === 0) return;

      // Set initial card states
      gsap.set(imageElements[0], { y: '0%', scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (imageElements[i]) {
          gsap.set(imageElements[i], { y: '100%', scale: 1, rotation: 0 });
        }
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 120px',
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        const position = i;
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.7,
            rotation: 5,
            duration: 1,
            ease: 'none',
          },
          position
        );

        scrollTimeline.to(
          nextImage,
          {
            y: '0%',
            duration: 1,
            ease: 'none',
          },
          position
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [cards]);

  return (
    <div
      ref={containerRef}
      className="sticky-cards"
      style={{
        position: 'relative',
        width: '100%',
        height: '520px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        {cards.map((card, i) => (
          <img
            key={card.id}
            src={card.image}
            alt={card.alt || ''}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
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
        <div className="overlay-grid">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default function Photography() {
  return (
    <section className="section photography-section-purple">
      <div className="w-layout-blockcontainer container w-container">
        <div className="photography-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Top: Section Header */}
          <div className="section-header" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '40px' }}>
            <div className="section-heading-wrap photography" style={{ width: '100%', textAlign: 'center' }}>
              <h2 className="section-heading" style={{ textAlign: 'center', width: '100%' }}>
                Visuals That Tell Your Brand's Story
              </h2>
            </div>
          </div>

          {/* Middle: Sticky Stacked Cards Showcase */}
          <div style={{ width: '100%', maxWidth: '880px', margin: '0 auto 48px auto' }}>
            <StickyCard002 />
          </div>

          {/* Bottom: Description Paragraph & Work With Us Button */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            <p className="section-p" style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
              We design assets, digital illustrations, marketing graphics, and brand assets with clean layouts and premium aesthetics. Every visual is created to feel premium, sharp, balanced, and ready to elevate your business's presence.
            </p>
            <div className="section-button-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/contact" className="button w-inline-block">
                <div className="button-text-wrapper">
                  <div className="button-text">Work with us</div>
                </div>
                <div className="button-icon-wrapper">
                  <div className="project-arrow-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon">
                      <path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H12V19H14V17Z" fill="currentColor"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon">
                      <path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H12V19H14V17Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <div className="space-10-small"></div>
    </section>
  );
}
