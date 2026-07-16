import React from 'react';

export default function Gallery() {
  const galleryImages = [
    'home-posters/1X1 New1.png',
    'home-posters/Artboard 1.png',
    'home-posters/ChatGPT Image Jul 16, 2026, 05_29_50 PM.png',
    'home-posters/ChatGPT Image Jul 16, 2026, 05_33_26 PM.png',
    'home-posters/ChatGPT Image Jul 16, 2026, 05_34_33 PM.png',
    'home-posters/ChatGPT Image Jul 16, 2026, 05_40_17 PM.png',
    'home-posters/ChatGPT Image Jul 16, 2026, 05_41_33 PM.png',
    'home-posters/ChatGPT Image Jul 16, 2026, 05_44_19 PM.png',
    'home-posters/ChatGPT Image Jul 16, 2026, 05_50_16 PM.png',
    'home-posters/ChatGPT Image Jul 16, 2026, 05_52_32 PM.png',
    'home-posters/The Drizzle Post 1.png',
    'home-posters/The legacey post 10.png',
    'home-posters/The legacey1.png',
    'home-posters/Zuper Poster-1.png',
    'home-posters/Zuper Poster-2.png',
    'home-posters/the cascades neopolis 5.png',
  ];

  return (
    <section className="section gallery-section-purple" id="gallery">
      <div className="w-layout-blockcontainer container w-container">
        <div className="gallary-wrapper">
          <div className="section-header">
            <div className="section-heading-wrap gallary">
              <h2 className="section-heading">Our Creative Gallery</h2>
            </div>
          </div>
          <div className="space-3-large"></div>
          <div className="gallray-image-wrapper">
            <div className="gallery-marque">
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallery-marque">
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(3, 6).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 4}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(3, 6).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 4}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallery-marque">
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(6, 10).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 7}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(6, 10).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 7}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallery-marque hide-mobile-l">
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(10, 13).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 11}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(10, 13).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 11}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallery-marque hide-mobile">
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(13, 16).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 14}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(13, 16).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 14}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallary-overlay"></div>
          </div>
        </div>
      </div>
      <div className="space-10-small"></div>
    </section>
  );
}
