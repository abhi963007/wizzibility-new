import React from 'react';

export default function WhyChoose() {
  const features = [
    { id: 1, title: 'Cinematic visual style' },
    { id: 2, title: 'Professional editing and retouching' },
    { id: 3, title: 'Friendly creative direction' },
    { id: 4, title: 'Clear communication' },
    { id: 5, title: 'Organized project delivery' },
    { id: 6, title: 'Visuals ready for web, social' },
  ];

  return (
    <section className="section onyx">
      <div className="space-6-normal"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="choose-wrapper">
          <div className="section-header left">
            <div className="section-heading-wrap choose">
              <h2 className="section-heading">Why Choose Fravemo</h2>
              <div className="section-counter choose">
                <div className="section-counter-text">(06)</div>
              </div>
            </div>
          </div>
          <div className="space-3-large"></div>
          <div className="w-layout-grid choose-grid">
            <div className="choose-image-wrapper">
              <img src="/images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29.webp" loading="lazy" sizes="100vw" srcSet="/images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-500.webp 500w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-800.webp 800w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-1080.webp 1080w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-1600.webp 1600w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-2000.webp 2000w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29.webp 2528w" alt="Woman looking through a telescope with red light illuminating her face and hair against a blue sky." className="choose-image" />
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
