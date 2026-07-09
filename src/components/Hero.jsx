import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './shared/Navbar';

export default function Hero() {
  useEffect(() => {
    let attempts = 0;
    
    // ── Robust coordinated entrance animations with fallback safety ──
    const initAnimation = () => {
      const gsap = window.gsap;
      const SplitText = window.SplitText;
      
      // If GSAP is not loaded, retry up to 15 times (1.5s), then force fallback visibility
      if (!gsap) {
        attempts++;
        if (attempts > 15) {
          const elements = document.querySelectorAll('.hero-subtitle, .hero-heading-new, .hero-p-new, .hero-buttons-row');
          elements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
          });
          return;
        }
        setTimeout(initAnimation, 100);
        return;
      }
      
      let headingSplit = null;
      try {
        if (SplitText) {
          headingSplit = new SplitText('.hero-heading-new', { 
            type: 'chars',
            charsClass: 'anim-char'
          });
        }
      } catch (err) {
        console.warn('SplitText initialization error:', err);
      }
      
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });
      
      // 1. Subtitle: Top to Bottom entrance
      timeline.fromTo('.hero-subtitle',
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      );
      
      // 2. Main Heading: Bottom to Top character stagger
      if (headingSplit && headingSplit.chars && headingSplit.chars.length > 0) {
        timeline.fromTo(headingSplit.chars,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.02,
            onComplete: () => {
              try {
                headingSplit.revert();
              } catch (e) {}
            }
          },
          '-=0.4'
        );
      } else {
        timeline.fromTo('.hero-heading-new',
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          '-=0.4'
        );
      }
      
      // 3. Sub-content Paragraph & Buttons: Bottom to Top sequence
      timeline
        .fromTo('.hero-p-new',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.4'
        )
        .fromTo('.hero-buttons-row',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.4'
        );
    };
    
    setTimeout(initAnimation, 100);
  }, []);

  return (
    <div className="hero-home-area">
      <Navbar />
      <div className="space-3-small hide-tab"></div>
      <section className="section hero">
        <div className="space-10-small"></div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-wrapper">
            <div className="hero-subtitle">CREATIVE MEETS TECHNOLOGY</div>
            <h1 className="hero-heading-new">
              WE CREATE <br />
              DIGITAL EXPERIENCES
            </h1>
            <p className="hero-p-new">
              A creative tech studio crafting digital products, brands and experiences that drive real impact.
            </p>
            <div className="hero-buttons-row">
              <Link to="/project" className="btn-explore">
                EXPLORE OUR WORK
                <span className="arrow-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <a href="#gallery" onClick={(e) => {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }} className="btn-showreel">
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
      

      {/* Pagination - Bottom Right */}
      <div className="hero-pagination-wrapper">
        <span className="page-num active">01</span>
        <div className="page-line">
          <div className="page-line-fill"></div>
        </div>
        <span className="page-num">04</span>
      </div>

      {/* Background Media & Overlays */}
      <img src="/images/hero.png" loading="lazy" sizes="100vw" alt="Creative Tech Studio background" className="hero-home-image" />
      <div className="blend-color"></div>
      <div className="home-hero-overlay home"></div>
    </div>
  );
}
