import React, { useEffect, useRef } from 'react';

export default function Team() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const trackWrapperRef = useRef(null);

  const team = [
    { id: 1, name: 'Karthik Nampally', role: 'Chief Executive Officer', image: 'team/karthik.png' },
    { id: 2, name: 'Suvenjit Kar', role: 'Chief Operating Officer', image: 'team/suvenjit.png' },
    { id: 3, name: 'Mahima Pandey', role: 'UX/UI Designer', image: 'team/mahima.png' },
    { id: 4, name: 'Rajinikanth Banala', role: 'Graphic Designer', image: 'team/rajinikanth.png' },
    { id: 5, name: 'Ganesh Pardhu', role: 'AI Artist & Visual Communication Specialist', image: 'team/ganesh.png' },
    { id: 6, name: 'Rasool Khan', role: 'Video Editor & Marketing Creative', image: 'team/rasool.png' },
    { id: 7, name: 'Sravika Porandla', role: 'Video Editor', image: 'team/sravika.jpg' },
    { id: 8, name: 'Abhiram A K', role: 'Web Developer', image: 'team/abhiram.jpg' },
  ];

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Small delay to ensure DOM is fully painted before measuring widths
    const timer = setTimeout(() => {
      const section = sectionRef.current;
      const track = scrollContainerRef.current;
      const trackWrapper = trackWrapperRef.current;
      if (!section || !track || !trackWrapper) return;

      // The distance the track needs to slide left
      const slideDistance = Math.max(0, track.scrollWidth - trackWrapper.offsetWidth);
      const totalScrollDistance = slideDistance + window.innerHeight;

      // Custom Character Split Animation for Heading
      gsap.to(section.querySelectorAll('.team-char'), {
        opacity: 1,
        y: '0%',
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: `+=${totalScrollDistance}`,
          toggleActions: 'play reverse play reverse',
        },
      });

      // Cards fade in staggered
      gsap.fromTo(
        section.querySelectorAll('.team-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: `+=${totalScrollDistance}`,
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      if (slideDistance <= 0) return; // All cards already visible, no need to scroll

      // Horizontal scroll tied to vertical scroll — section pins, cards slide
      gsap.to(track, {
        x: -slideDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,           // freeze the section in viewport
          pinSpacing: true,    // push down content below so flow is correct
          start: 'top top',    // pin fires the moment section top hits viewport top
          end: `+=${slideDistance}`, // scroll distance = pixel movement of track
          scrub: 1,            // smooth scrubbing tied to scrollbar
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    // NO overflow:hidden here — GSAP pin adds a spacer div outside this element
    // overflow:hidden on section would hide the spacer and duplicate the section visually
    <section className="section team-section" ref={sectionRef}>
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
      `}</style>
      <div className="w-layout-blockcontainer container w-container">
        <div
          className="section-header"
          style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '2rem' }}
        >
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h2 className="custom-section-heading team-heading">
              {"Expertise Teams".split('').map((char, index) => (
                <span
                  key={index}
                  className="team-char"
                  style={{
                    display: 'inline-block',
                    opacity: 0,
                    transform: 'translateY(100%)',
                    whiteSpace: char === ' ' ? 'pre' : 'normal',
                  }}
                >
                  {char}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* overflow:hidden on this inner wrapper clips the sliding track safely */}
        <div ref={trackWrapperRef} style={{ overflow: 'hidden', width: '100%' }}>
          <div
            ref={scrollContainerRef}
            className="team-scroll-track"
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'nowrap',
              willChange: 'transform',
            }}
          >
            {team.map((member) => (
              <div
                key={member.id}
                className="team-card"
                style={{
                  opacity: 0,
                  width: '320px',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                }}
              >
                <div className="team-img-wrap">
                  <img
                    src={`/images/${member.image}`}
                    loading="lazy"
                    alt={member.name}
                    className="team-image"
                    style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                  />
                </div>
                <div className="team-info-wrap" style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <div className="font-2-small">{member.name}</div>
                  <div className="font-1-extra-small nobel">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
