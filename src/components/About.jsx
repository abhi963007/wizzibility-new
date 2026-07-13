import React, { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Cinematic Headline character mask reveal (smooth slide-up and fade-in matching Recent Projects)
    gsap.fromTo(".text-masked-line",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-layout-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // 2. Right column text entrance reveal
    gsap.fromTo(".about-col-right",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-layout-container",
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <section className="about-philosophy-section" id="about" ref={sectionRef}>
      {/* Main Two-Column Layout */}
      <div className="about-layout-container">
        <div className="about-columns-grid">
          {/* Left Column: Heading */}
          <div className="about-col-left">
            <h2 className="about-main-headline">
              <span className="text-mask-wrapper">
                <span className="text-masked-line">TECHNOLOGY</span>
              </span>
              <span className="text-mask-wrapper">
                <span className="text-masked-line text-grayed">MEANS NOTHING</span>
              </span>
              <span className="text-mask-wrapper">
                <span className="text-masked-line">WITHOUT EMOTION</span>
              </span>
            </h2>
          </div>

          {/* Vertical Divider */}
          <div className="about-vertical-divider"></div>

          {/* Right Column: Paragraphs */}
          <div className="about-col-right">
            <p className="about-paragraph-text">
              We believe in building digital experiences that linger in memory. By blending the fluid boundaries of artistry with the raw precision of engineering, we craft interfaces that feel alive, intentional, and unmistakably distinct.
            </p>
            <p className="about-paragraph-text">
              This is not about building templates; it is about writing the visual stories of tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Visual buffer spacing to dissolve into services */}
      <div className="space-10-small"></div>
    </section>
  );
}
