import React from 'react';

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Divya Reddy', company: 'Vayu Clothing', quote: "We've seen incredible growth thanks to their digital marketing. Insightful strategy and excellent communication made a huge difference.", count: '3k+', subject: 'SOCIAL MEDIA MARKETING', image: 'home/6a2fd6923e5daf11466f37d8_image%2057372.webp' },
    { id: 2, name: 'Payal Kar Dutta', company: 'Veva Realty', quote: 'Exceptional service! Their design work transformed our brand—professional, creative, and always on time.', count: '20k+', subject: 'END-END MARKETING', image: 'home/6a32f96f6e5d3efb008fbb33_1c77cef06aaf126d1d6c25d3ebe80b7cb39fe0c5.webp' },
    { id: 3, name: 'Vikas', company: 'Extrica Spaces', quote: 'Their branding expertise gave our business a fresh, memorable identity. Clients frequently compliment our professional look.', count: '10k+', subject: 'BRANDING', image: 'home/6a32f68243bd61f703504b7e_662eab522ab6ce8bf8e08b76e6992bb21e5365a4.webp' },
    { id: 4, name: 'Vinod Kumar', company: 'Ananda Homes', quote: 'From web development to print materials, everything was flawless. They truly understand what a growing brand needs and executed it seamlessly.', count: '50k+', subject: 'END-END MARKETING', image: 'home/6a32f97242ecfd2a31f27c73_e1d9a0b1de7bd9df1def9c845c2a857def6c8c26.webp' },
  ];

  const testimonialImages = [
    'home/6a2fd6923e5daf11466f37d8_image%2057372.webp',
    'home/6a32f96f6e5d3efb008fbb33_1c77cef06aaf126d1d6c25d3ebe80b7cb39fe0c5.webp',
    'home/6a32f68243bd61f703504b7e_662eab522ab6ce8bf8e08b76e6992bb21e5365a4.webp',
    'home/6a32f97242ecfd2a31f27c73_e1d9a0b1de7bd9df1def9c845c2a857def6c8c26.webp',
  ];

  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-header">
          <div className="section-heading-wrap pricing">
            <h2 className="section-heading center-mobile">Stories From Our Clients</h2>
          </div>
        </div>
        <div className="space-3-large"></div>
        <div className="testimonial-sticky-wrap">
          <div className="testimonial-sticky">
            <div className="testimonial-item-wrap">
              {/* Desktop view left side circles */}
              <div className="testiminial-left">
                {testimonialImages.map((img, i) => (
                  <div key={i} className={`testimonial-color-circle _0${i + 1}`}>
                    <div className="testimonial-img-wrap">
                      <img
                        src={`/images/${img}`}
                        loading="lazy"
                        sizes="100vw"
                        srcSet={`/images/${img.replace('.webp', '-p-500.webp')} 500w, /images/${img.replace('.webp', '-p-800.webp')} 800w, /images/${img}`}
                        alt=""
                        className="testimonial-img"
                      />
                    </div>
                    <div className={`color-circle _0${i + 1}`}></div>
                  </div>
                ))}
              </div>

              {/* Desktop view right side cards & side text */}
              <div className="review-right-main">
                <div className="info-card-wrap">
                  <div className="testimonial-info-wrap">
                    {testimonials.map((t, i) => (
                      <div key={t.id} className={`testimonial-info-card _0${i + 1}`}>
                        <div className="review-info-top">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 167 30" fill="none" className="reviewer-logo">
                            <g clipPath="url(#clip0_34_135)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10.4651V21.6279H3.49372C3.86075 21.6279 4.2242 21.7001 4.56333 21.8403C4.90239 21.9806 5.21056 22.1861 5.47003 22.4453C5.72959 22.7044 5.93549 23.0121 6.07598 23.3507C6.21637 23.6893 6.2887 24.0521 6.2887 24.4186V27.907H14.6736L25.1548 17.4419V6.27907H21.6611C21.294 6.27907 20.9306 6.20689 20.5914 6.06665C20.2524 5.9264 19.9443 5.72083 19.6848 5.4617C19.4252 5.20256 19.2193 4.8949 19.0788 4.55632C18.9384 4.21775 18.8661 3.85486 18.8661 3.48837V0H10.4812L0 10.4651ZM11.8787 20.9302H6.98745V13.2558L13.2762 6.97674H18.1674V14.6512L11.8787 20.9302Z"
                                fill="currentColor"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_34_135">
                                <rect width="167" height="30" fill="currentColor"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <div className="info-top">
                            <p className="review-p">“{t.quote}”</p>
                            <div className="reviewer-info">
                              <div className="reviewer-name">{t.name}</div>
                              <div className="font-1-extra-small nobel">{t.company}</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-1-large"></div>
                        <div className="review-line"></div>
                        <div className="review-bottom">
                          <div className="counter-text">{t.count}</div>
                          <div className="subject">{t.subject}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="review-right">
                    <div className="review-right-text-wrap">
                      {testimonials.map((t, i) => (
                        <div key={t.id} className={`review-right-text _0${i + 1}`}>
                          Wizzibility
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Tab view */}
            <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" className="testimonial-item-wrap-copy w-tabs">
              <div className="testiminial-left w-tab-menu">
                {testimonials.map((t, i) => (
                  <a
                    key={t.id}
                    data-w-tab={`Tab ${i + 1}`}
                    className={`testimonial-tablink w-inline-block w-tab-link ${i === 0 ? 'w--current' : ''}`}
                  >
                    <div className="testimonial-color-circle">
                      <div className="testimonial-img-wrap">
                        <img
                          src={`/images/${t.image}`}
                          loading="lazy"
                          sizes="100vw"
                          srcSet={`/images/${t.image.replace('.webp', '-p-500.webp')} 500w, /images/${t.image}`}
                          alt=""
                          className="testimonial-img"
                        />
                      </div>
                      <div className="color-circle"></div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="tabs-content w-tab-content">
                {testimonials.map((t, i) => (
                  <div
                    key={t.id}
                    data-w-tab={`Tab ${i + 1}`}
                    className={`tab-pane w-tab-pane ${i === 0 ? 'w--tab-active' : ''}`}
                  >
                    <div className="review-right-main">
                      <div className="info-card-wrap">
                        <div className="testimonial-info-card">
                          <div className="review-info-top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 167 30" fill="none" className="reviewer-logo">
                              <g clipPath="url(#clip0_34_135)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0 10.4651V21.6279H3.49372C3.86075 21.6279 4.2242 21.7001 4.56333 21.8403C4.90239 21.9806 5.21056 22.1861 5.47003 22.4453C5.72959 22.7044 5.93549 23.0121 6.07598 23.3507C6.21637 23.6893 6.2887 24.0521 6.2887 24.4186V27.907H14.6736L25.1548 17.4419V6.27907H21.6611C21.294 6.27907 20.9306 6.20689 20.5914 6.06665C20.2524 5.9264 19.9443 5.72083 19.6848 5.4617C19.4252 5.20256 19.2193 4.8949 19.0788 4.55632C18.9384 4.21775 18.8661 3.85486 18.8661 3.48837V0H10.4812L0 10.4651ZM11.8787 20.9302H6.98745V13.2558L13.2762 6.97674H18.1674V14.6512L11.8787 20.9302Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                            <div className="info-top">
                              <p className="review-p">“{t.quote}”</p>
                              <div className="reviewer-info">
                                <div className="reviewer-name">{t.name}</div>
                                <div className="font-1-extra-small nobel">{t.company}</div>
                              </div>
                            </div>
                          </div>
                          <div className="space-1-large"></div>
                          <div className="review-line"></div>
                          <div className="review-bottom">
                            <div className="counter-text">{t.count}</div>
                            <div className="subject">{t.subject}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-right">
                      <div className="review-right-text">Wizzibility</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-10-small"></div>
    </section>
  );
}
