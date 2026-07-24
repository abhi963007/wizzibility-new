import React, { useEffect, useRef } from 'react';

export default function MissionVision() {
  const sectionRef = useRef(null);
  const missionTextRef = useRef(null);
  const visionTextRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Mission Text Scroll Highlight
      if (missionTextRef.current) {
        const missionSpans = missionTextRef.current.querySelectorAll('.scroll-word');
        gsap.fromTo(
          missionSpans,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: missionTextRef.current,
              start: 'top 80%',
              end: 'bottom 55%',
              scrub: 0.8,
            },
          }
        );
      }

      // Vision Text Scroll Highlight
      if (visionTextRef.current) {
        const visionSpans = visionTextRef.current.querySelectorAll('.scroll-word');
        gsap.fromTo(
          visionSpans,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: visionTextRef.current,
              start: 'top 80%',
              end: 'bottom 55%',
              scrub: 0.8,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section mission-vision-section" ref={sectionRef} style={{ padding: '7rem 0', backgroundColor: '#040200' }}>
      <style>{`
        .custom-section-heading {
          font-family: "Bebas Neue", sans-serif !important;
          font-weight: 400 !important;
          text-transform: uppercase !important;
          transform: scaleY(1.3) !important;
          transform-origin: center center !important;
          line-height: 1.15 !important;
          letter-spacing: -0.01em !important;
          -webkit-font-smoothing: antialiased;
          color: var(--_color---nobel);
          font-size: var(--_typography---heading--heading-style-h2);
          text-align: center;
          margin: 0;
          position: relative;
        }

        .scroll-text-block {
          font-family: "Bebas Neue", sans-serif !important;
          font-size: clamp(2.2rem, 4.2vw, 3.8rem);
          line-height: 1.1;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <div className="w-layout-blockcontainer container w-container" style={{ maxWidth: '85rem' }}>
        
        {/* COMBINED HEADING MATCHING EXPERTISE TEAMS */}
        <div className="section-header" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '4rem' }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h2 className="custom-section-heading">
              OUR MISSION & VISION
            </h2>
          </div>
        </div>

        {/* MISSION PARAGRAPH BLOCK */}
        <div style={{ marginBottom: '5rem' }}>
          <div ref={missionTextRef} className="scroll-text-block">
            <span className="scroll-word">OUR </span>
            <span className="scroll-word">MISSION </span>
            <span className="scroll-word">IS </span>
            <span className="scroll-word">TO </span>
            <span className="scroll-word">CREATE </span>
            <span className="scroll-word">AN </span>
            <span className="scroll-word" style={{ color: '#ffd84d' }}>AI-FORWARD </span>
            <span className="scroll-word">PLATFORM </span>
            <span className="scroll-word">THAT </span>
            <span className="scroll-word">EMPOWERS </span>
            <span className="scroll-word">EVERY </span>
            <span className="scroll-word">BRAND </span>
            <span className="scroll-word" style={{ opacity: 0.4 }}>— </span>
            <span className="scroll-word">BIG </span>
            <span className="scroll-word">OR </span>
            <span className="scroll-word">SMALL </span>
            <span className="scroll-word" style={{ opacity: 0.4 }}>— </span>
            <span className="scroll-word">TO </span>
            <span className="scroll-word">ACCESS </span>
            <span className="scroll-word">INTELLIGENT, </span>
            <span className="scroll-word">CREATIVE, </span>
            <span className="scroll-word">AND </span>
            <span className="scroll-word" style={{ color: '#ffd84d' }}>SCALABLE </span>
            <span className="scroll-word">BRANDING </span>
            <span className="scroll-word">SOLUTIONS </span>
            <span className="scroll-word">THAT </span>
            <span className="scroll-word">ARE </span>
            <span className="scroll-word">EFFECTIVE </span>
            <span className="scroll-word">AND </span>
            <span className="scroll-word">AFFORDABLE.</span>
          </div>
        </div>

        {/* VISION PARAGRAPH BLOCK */}
        <div>
          <div ref={visionTextRef} className="scroll-text-block">
            <span className="scroll-word">OUR </span>
            <span className="scroll-word">VISION </span>
            <span className="scroll-word">IS </span>
            <span className="scroll-word">TO </span>
            <span className="scroll-word">PROVIDE </span>
            <span className="scroll-word">MODULAR, </span>
            <span className="scroll-word" style={{ color: '#ffd84d' }}>CUSTOMIZABLE </span>
            <span className="scroll-word">BRAND </span>
            <span className="scroll-word">KITS </span>
            <span className="scroll-word">THAT </span>
            <span className="scroll-word">ADAPT </span>
            <span className="scroll-word">TO </span>
            <span className="scroll-word">EACH </span>
            <span className="scroll-word">BRAND'S </span>
            <span className="scroll-word">UNIQUE </span>
            <span className="scroll-word">VOICE, </span>
            <span className="scroll-word">TONE, </span>
            <span className="scroll-word">AND </span>
            <span className="scroll-word">VISUAL </span>
            <span className="scroll-word">IDENTITY </span>
            <span className="scroll-word" style={{ opacity: 0.4 }}>— </span>
            <span className="scroll-word">MAKING </span>
            <span className="scroll-word">PROFESSIONAL </span>
            <span className="scroll-word">BRANDING </span>
            <span className="scroll-word" style={{ color: '#ffd84d' }}>FLEXIBLE, </span>
            <span className="scroll-word">FAST, </span>
            <span className="scroll-word">AND </span>
            <span className="scroll-word">ACCESSIBLE.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
