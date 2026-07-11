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
              <h2 className="section-heading">Why Team Up With Us?</h2>
            </div>
          </div>
          <div className="space-3-large"></div>
          <div className="w-layout-grid choose-grid">
            <div className="choose-image-wrapper">
              <img src="/images/home/6a2fdb77859e335168fa06d4_image%2057387%20%281%29.webp" loading="lazy" sizes="100vw" srcSet="/images/home/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-500.webp 500w, /images/home/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-800.webp 800w, /images/home/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-1080.webp 1080w, /images/home/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-1600.webp 1600w, /images/home/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-2000.webp 2000w, /images/home/6a2fdb77859e335168fa06d4_image%2057387%20%281%29.webp 2528w" alt="Woman looking through a telescope with red light illuminating her face and hair against a blue sky." className="choose-image" />
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
