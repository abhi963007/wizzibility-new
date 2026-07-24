import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './shared/Navbar';

export default function Hero() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    let attempts = 0;
    
    // ── Robust coordinated entrance animations with fallback safety ──
    const initAnimation = () => {
      const gsap = window.gsap;
      
      if (!gsap) {
        attempts++;
        if (attempts > 15) {
          const elements = document.querySelectorAll('.hero-subtitle-wrapper, .hero-heading-mockup, .hero-right-col, .hero-buttons-row');
          elements.forEach(el => {
            if (el) {
              el.style.opacity = '1';
              el.style.transform = 'none';
            }
          });
          return;
        }
        setTimeout(initAnimation, 100);
        return;
      }
      
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });
      
      timeline
        .fromTo('.hero-subtitle-wrapper',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 }
        )
        .fromTo('.hero-heading-mockup',
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo('.hero-right-col',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo('.hero-buttons-row',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        );
    };
    
    setTimeout(initAnimation, 100);
  }, []);

  return (
    <div className="hero-home-area">
      <Navbar />
      <div className="space-3-small hide-tab"></div>
      <section className="section hero">
        <div className="space-6-normal"></div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-wrapper" style={{ display: 'block' }}>
            
            {/* Tagline / Subtitle */}
            <div className="hero-subtitle-wrapper">
              <div className="hero-subtitle">CREATIVE MEETS TECHNOLOGY</div>
              <div className="hero-subtitle-line"></div>
            </div>

            {/* Split Content: Main Headline & Right Paragraph with Divider */}
            <div className="hero-content-split">
              {/* Left Headline */}
              <h1 className="hero-heading-mockup" style={{ fontFamily: '"Michroma", sans-serif', fontSize: 'clamp(2.5rem, 4.5vw, 5.5rem)', fontWeight: 400, letterSpacing: '0.02em', lineHeight: 1.15 }}>
                WE ARE <br />
                <span style={{ color: '#ffd84d', WebkitTextFillColor: '#ffd84d', fontFamily: '"Michroma", sans-serif' }}>CREATIVE</span> <br />
                <span style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff', fontFamily: '"Michroma", sans-serif' }}>TECH STUDIO</span>
              </h1>

              {/* Right Column with Vertical Line Divider & Text */}
              <div className="hero-right-col">
                <div className="hero-vertical-divider"></div>
                <p className="hero-p-mockup">
                  A creative tech studio crafting digital products, brands and experiences that connect and inspire.
                </p>
              </div>
            </div>

            {/* CTA Action Buttons Row */}
            <div className="hero-buttons-row">
              <Link to="/project" className="btn-explore">
                EXPLORE OUR WORK
                <span className="arrow-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <a 
                href="#showreel" 
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('showreel') || document.querySelector('.cinematic-section');
                  if (target) {
                    if (window.lenis) {
                      window.lenis.scrollTo(target, { offset: -50 });
                    } else {
                      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }
                }} 
                className="btn-showreel"
              >
                WATCH SHOWREEL
                <span className="play-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 10 12" fill="none" style={{ marginLeft: '1px' }}>
                    <path d="M1.5 1.5L8.5 6L1.5 10.5V1.5Z" fill="currentColor"/>
                  </svg>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>
      
      {/* Vertical Pagination Dots - Right Screen Margin */}
      <div className="hero-side-dots-wrapper">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`side-dot ${activeDot === index ? 'active' : ''}`}
            onClick={() => setActiveDot(index)}
          />
        ))}
      </div>

      {/* Pagination - Bottom Right */}
      <div className="hero-pagination-wrapper">
        <span className="page-num active">01</span>
        <div className="page-line">
          <div className="page-line-fill"></div>
        </div>
        <span className="page-num">04</span>
      </div>

      {/* Background Media & Overlays */}
      <video className="hero-home-image" autoPlay loop muted playsInline>
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="blend-color"></div>
      <div className="home-hero-overlay home"></div>
    </div>
  );
}
