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
          font-family: "Montserrat", "Inter Tight", sans-serif !important;
          font-size: calc(1.5rem + 0.5vw);
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: normal;
          text-transform: none;
          color: rgba(255, 255, 255, 0.9);
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
            <span className="scroll-word">Our </span>
            <span className="scroll-word">mission </span>
            <span className="scroll-word">is </span>
            <span className="scroll-word">to </span>
            <span className="scroll-word">create </span>
            <span className="scroll-word">an </span>
            <span className="scroll-word" style={{ color: '#ffd84d', fontWeight: 600 }}>AI-forward </span>
            <span className="scroll-word">platform </span>
            <span className="scroll-word">that </span>
            <span className="scroll-word">empowers </span>
            <span className="scroll-word">every </span>
            <span className="scroll-word">brand </span>
            <span className="scroll-word">big </span>
            <span className="scroll-word">or </span>
            <span className="scroll-word">small </span>
            <span className="scroll-word">to </span>
            <span className="scroll-word">access </span>
            <span className="scroll-word">intelligent, </span>
            <span className="scroll-word">creative, </span>
            <span className="scroll-word">and </span>
            <span className="scroll-word" style={{ color: '#ffd84d', fontWeight: 600 }}>scalable </span>
            <span className="scroll-word">branding </span>
            <span className="scroll-word">solutions </span>
            <span className="scroll-word">that </span>
            <span className="scroll-word">are </span>
            <span className="scroll-word">effective </span>
            <span className="scroll-word">and </span>
            <span className="scroll-word">affordable.</span>
          </div>
        </div>

        {/* VISION PARAGRAPH BLOCK */}
        <div>
          <div ref={visionTextRef} className="scroll-text-block">
            <span className="scroll-word">Our </span>
            <span className="scroll-word">vision </span>
            <span className="scroll-word">is </span>
            <span className="scroll-word">to </span>
            <span className="scroll-word">provide </span>
            <span className="scroll-word">modular, </span>
            <span className="scroll-word" style={{ color: '#ffd84d', fontWeight: 600 }}>customizable </span>
            <span className="scroll-word">brand </span>
            <span className="scroll-word">kits </span>
            <span className="scroll-word">that </span>
            <span className="scroll-word">adapt </span>
            <span className="scroll-word">to </span>
            <span className="scroll-word">each </span>
            <span className="scroll-word">brand's </span>
            <span className="scroll-word">unique </span>
            <span className="scroll-word">voice, </span>
            <span className="scroll-word">tone, </span>
            <span className="scroll-word">and </span>
            <span className="scroll-word">visual </span>
            <span className="scroll-word">identity </span>
            <span className="scroll-word">making </span>
            <span className="scroll-word">professional </span>
            <span className="scroll-word">branding </span>
            <span className="scroll-word" style={{ color: '#ffd84d', fontWeight: 600 }}>flexible, </span>
            <span className="scroll-word">fast, </span>
            <span className="scroll-word">and </span>
            <span className="scroll-word">accessible.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
