import React from 'react';

export default function Gallery() {
  const rawGalleryImages = [
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
    '6.jpeg',
    '7.jpeg',
    '8.jpeg',
    '9.jpeg',
  ];
  const galleryImages = rawGalleryImages.map(img => `home/${img}`);

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
            <div className="gallery-marque hide-mobile-l">
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallery-marque hide-mobile">
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(6, 9).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 7}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(6, 9).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" alt={`Gallery ${i + 7}`} className="gallary-image" />
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
