import React, { useState } from 'react';

export default function WhyChoose() {
  const [activeId, setActiveId] = useState(1);

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

  return (
    <section className="section onyx">
      <div className="space-6-normal"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="choose-wrapper">
          <div className="section-header">
            <div className="section-heading-wrap choose text-center">
              <h2 className="section-heading text-center">Why Team Up With Us?</h2>
            </div>
          </div>
          <div className="space-3-small"></div>
          <div className="w-layout-grid choose-grid">
            <div className="choose-image-wrapper">
              {features.map((feature) => (
                <img
                  key={feature.id}
                  src={feature.image}
                  loading="lazy"
                  alt={feature.title}
                  className={`choose-image ${feature.id === activeId ? 'active' : ''}`}
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
            <div className="choose-right">
              <div className="choose-content-wrapper">
                {features.map((feature) => {
                  const isActive = feature.id === activeId;
                  return (
                    <div
                      key={feature.id}
                      className={`chose-list ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setActiveId(feature.id)}
                      onClick={() => setActiveId(feature.id)}
                    >
                      <div className="choose-item-header">
                        <div className="font-1-medium _500 choose-item-title">{feature.title}</div>
                        <div className={`choose-accordion-icon ${isActive ? 'open' : ''}`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                      </div>
                      <div className={`choose-item-content ${isActive ? 'expanded' : ''}`}>
                        <p className="choose-description">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-6-normal"></div>
    </section>
  );
}
