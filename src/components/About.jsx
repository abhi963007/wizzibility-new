import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
  const sectionRef = useRef(null);
  const trailPathRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Light Trail / Creative Energy Trail animation
    const path = trailPathRef.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        }
      });
    }

    // 2. Cinematic Headline character mask reveal
    gsap.to(".text-masked-line", {
      y: "0%",
      scaleY: 1,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-intro-viewport",
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    // 3. Viewport statement scale & fade out on scroll
    gsap.to(".about-intro-viewport", {
      opacity: 0.05,
      scale: 0.94,
      y: -60,
      scrollTrigger: {
        trigger: ".about-intro-viewport",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      }
    });

    // 4. Parallax scroll effect for independent canvas components
    gsap.to(".ecosystem-svg", {
      y: -40,
      rotate: 3,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: ".about-philosophy-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // 5. Editorial elements entrance reveal
    gsap.fromTo(".about-editorial-headline", 
      { opacity: 0, y: 50, scaleY: 1.1 },
      {
        opacity: 1,
        y: 0,
        scaleY: 1.35,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-editorial-container",
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(".about-editorial-right",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-editorial-container",
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <section className="about-philosophy-section" id="about" ref={sectionRef}>
      {/* Invisible linear gradients defs */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="purple-light-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2FF7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating background grids and ecosystem lines */}
      <div className="ecosystem-canvas">
        <svg className="ecosystem-svg" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle Grid Lines */}
          <line x1="0" y1="180" x2="1200" y2="180" className="ecosystem-grid-line" />
          <line x1="0" y1="520" x2="1200" y2="520" className="ecosystem-grid-line" />
          <line x1="320" y1="0" x2="320" y2="900" className="ecosystem-grid-line" />
          <line x1="880" y1="0" x2="880" y2="900" className="ecosystem-grid-line" />

          {/* Morphing Workflow Connections */}
          <path d="M 180,140 Q 320,100 480,220 T 400,480 Q 720,420 680,680 T 980,740" className="ecosystem-line active-trail" />
          
          {/* Node 1: Concept */}
          <circle cx="180" cy="140" r="5" className="ecosystem-node" />
          <text x="200" y="142" className="floating-metadata">IDEA / CONTEXT</text>
          <text x="200" y="156" className="coord-label">[METRIC: 0.124]</text>

          {/* Node 2: Sketches */}
          <circle cx="480" cy="220" r="5" className="ecosystem-node" />
          <text x="500" y="222" className="floating-metadata">SKETCH / MOTION</text>
          <text x="500" y="236" className="coord-label">[FLOW: 12.04FPS]</text>

          {/* Node 3: Design Details */}
          <circle cx="400" cy="480" r="6" className="ecosystem-node yellow-indicator" />
          <text x="420" y="482" className="floating-metadata" style={{ fill: '#ffd84d', opacity: 0.9 }}>BRAND / IDENTITY</text>
          <text x="420" y="496" className="coord-label" style={{ fill: '#ffd84d', opacity: 0.7 }}>[ACTIVE TARGET]</text>

          {/* Node 4: Interface Component */}
          <circle cx="680" cy="680" r="5" className="ecosystem-node" />
          <text x="700" y="682" className="floating-metadata">UX / PROTOTYPE</text>
          <text x="700" y="696" className="coord-label">[COMPILED: 99.8%]</text>

          {/* Node 5: Launched Experience */}
          <circle cx="980" cy="740" r="5" className="ecosystem-node" />
          <text x="1000" y="742" className="floating-metadata">CODE / DIGITAL LAUNCH</text>
          <text x="1000" y="756" className="coord-label">[STATUS: DEPLOYED]</text>
        </svg>
      </div>

      {/* Floating active light trail connecting Hero outstretched hand */}
      <div className="about-energy-trail-wrap">
        <svg className="energy-svg" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={trailPathRef} className="energy-path" d="M 680,0 C 680,180 500,240 500,420 C 500,600 780,680 780,820" />
        </svg>
      </div>

      {/* Viewport Intro Statement */}
      <div className="about-intro-viewport">
        <div className="about-editorial-label">THE PHILOSOPHY</div>
        <h2 className="about-intro-title">
          <span className="text-mask-wrapper">
            <span className="text-masked-line">TECHNOLOGY MEANS NOTHING</span>
          </span>
          <br />
          <span className="text-mask-wrapper">
            <span className="text-masked-line">WITHOUT EMOTION</span>
          </span>
        </h2>
      </div>

      {/* Editorial Content Columns */}
      <div className="about-editorial-container">
        <div className="about-editorial-columns">
          
          {/* Left Column: Headline */}
          <div className="about-editorial-left">
            <h3 className="about-editorial-headline">
              WE CREATE <br />
              DIGITAL <br />
              EXPERIENCES.
            </h3>
          </div>

          {/* Right Column: Paragraph */}
          <div className="about-editorial-right">
            <p className="about-editorial-paragraph">
              We believe in building digital experiences that linger in memory. By blending the fluid boundaries of <span className="about-highlight-word">artistry</span> with the raw precision of <span className="about-highlight-word">engineering</span>, we craft interfaces that feel alive, intentional, and unmistakably distinct. This is not about building templates; it is about writing the visual stories of tomorrow.
            </p>
          </div>

        </div>
      </div>

      {/* Visual buffer spacing to dissolve into services */}
      <div className="space-10-small"></div>
    </section>
  );
}
