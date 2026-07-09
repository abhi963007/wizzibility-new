import React from 'react';

export default function Gallery() {
  const galleryImages = [
    '6a2fd69280be1041c486ea15_image%2057373%20%283%29.webp',
    '6a2fd69177fc7a358ffe83b0_image%2057369%20%281%29.webp',
    '6a2fd692d5a0f9b716ac6d45_image%2057377.webp',
    '6a2fd69290263b0be396f5c5_image%2057371%20%281%29.webp',
    '6a2fd6923e5daf11466f37d8_image%2057372.webp',
    '6a2fd693f5522ea31fb56b52_image%2057374.webp',
    '6a2fd69175bdfa92ffab8888_image%2057375%20%281%29.webp',
    '6a2fd692e6d38fcb2570642c_image%2057376.webp',
    '6a2fd693ef8e25bcc8cb25ef_image%2057370%20%281%29.webp',
  ];

  return (
    <section className="section">
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
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallery-marque">
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(3, 6).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 4}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(3, 6).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 4}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallery-marque">
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallery-marque hide-mobile-l">
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block top-to-bottom">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 1}`} className="gallary-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="gallery-marque hide-mobile">
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(6, 9).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 7}`} className="gallary-image" />
                  </div>
                ))}
              </div>
              <div className="gallary-image-block bottom-to-top">
                {galleryImages.slice(6, 9).map((img, i) => (
                  <div key={i} className="gallary-image-wrapper">
                    <img src={`/images/${img}`} loading="lazy" sizes="100vw" srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`} alt={`Gallery ${i + 7}`} className="gallary-image" />
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
