import React, { useEffect, useRef } from 'react';

export default function Team() {
  const sectionRef = useRef(null);

  const team = [
    { id: 1, name: 'Brooklyn Simmons', role: 'Lead Developer', image: 'home/Lead Developer.jpeg' },
    { id: 2, name: 'Darlene Robertson', role: 'Chief Technology Officer', image: 'home/Chief Technology.jpeg' },
    { id: 3, name: 'Emma Markson', role: 'Creative Director', image: 'home/Creative Director.jpeg' },
  ];

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    // Heading fade-up animation
    gsap.fromTo(
      section.querySelector('.team-heading'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Staggered card entrance animation
    gsap.fromTo(
      section.querySelectorAll('.team-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section.querySelector('.team-grid'),
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="section team-section" ref={sectionRef}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-header" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h2
              className="section-heading team-heading"
              style={{ textAlign: 'center', whiteSpace: 'nowrap', opacity: 0 }}
            >
              Expertise Teams
            </h2>
          </div>
        </div>
        <div className="w-layout-grid team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card" style={{ opacity: 0 }}>
              <div className="team-img-wrap">
                <img src={`/images/${member.image}`} loading="lazy" alt={member.name} className="team-image" />
              </div>
              <div className="team-info-wrap">
                <div className="font-2-small">{member.name}</div>
                <div className="font-1-extra-small nobel">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
