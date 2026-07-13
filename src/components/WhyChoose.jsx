import React from 'react';

export default function WhyChoose() {
  const features = [
    { id: 1, title: 'Creative-Tech Integration' },
    { id: 2, title: 'Enterprise-Ready Solutions' },
    { id: 3, title: 'Startup-Friendly Approach' },
    { id: 4, title: 'Cross-Platform Excellence' },
    { id: 5, title: 'AI-Driven Web & App Design' },
    { id: 6, title: 'Cinematic Media Production' },
  ];

  return (
    <section className="section onyx">
      <div className="space-6-normal"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="choose-wrapper">
          <div className="section-header left">
            <div className="section-heading-wrap choose">
              <h2 className="section-heading">
                Why Team Up <br />
                With Us?
              </h2>
            </div>
          </div>
          <div className="space-3-large"></div>
          <div className="w-layout-grid choose-grid">
            <div className="choose-image-wrapper">
              <img src="/images/home/Why Team Up.jpeg" loading="lazy" alt="Creative team collaboration and vision" className="choose-image" />
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
                {features.map((feature) => (
                  <div key={feature.id} className="chose-list">
                    <div className="choose-number">({String(feature.id).padStart(2, '0')})</div>
                    <div className="font-1-medium _500">{feature.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-6-normal"></div>
    </section>
  );
}
