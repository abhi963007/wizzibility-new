import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { id: 1, title: 'Visual Communication', slug: 'fashion-photography', image: '6a3514ef9e312a69a772c2c0_8971c848c2638f539d50757c3cbdcfa62708d35c.webp' },
    { id: 2, title: 'Digital Marketing', slug: 'voice-videography', image: '6a3514e18cb733c985d735eb_054f97113db54086c0f159ca559fbaea76ca59c9.webp' },
    { id: 3, title: 'Branding', slug: 'video-editing-photograhy', image: '6a3514d344d27a821e163d62_c39acb39f24eaae1617e34596fcd880c93c2af1a.webp' },
  ];

  return (
    <section className="section">
      <div className="space-10-small"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="service-wrapper">
          <div className="services-header">
            <div className="service-header-left">
              <h2 className="section-heading">Creative </h2>
              <div className="header-counter-wrap">
                <div className="section-counter-text">(03)</div>
              </div>
            </div>
            <div className="service-header-right">
              <h2 className="section-heading">Services</h2>
            </div>
          </div>
          <div className="service-line-space"></div>
          <div className="service-list">
            {services.map((service) => (
              <div key={service.id} className="service-collection-wrap">
                <div className="service-collection-list w-dyn-list">
                  <div role="list" className="collection-list w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <Link to={`/service/${service.slug}`} className="services-card w-inline-block">
                        <div className="max-width-17">
                          <div className="font-2-medium center">{service.title}</div>
                        </div>
                        <div className="service-image-wrapper">
                          <img src={`/images/${service.image}`} loading="lazy" alt="" sizes="100vw" srcSet={`/images/${service.image.replace('.webp', '-p-500.webp')} 500w, /images/${service.image} 640w`} className="service-image" />
                          <div className="project-arrow-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 23" fill="none" className="project-icon-2">
                              <path fillRule="evenodd" clipRule="evenodd" d="M28.2134 9.46264C24.1672 9.46264 20.4796 5.74946 20.4796 1.67184L20.4796 -8.94821e-07L17.1604 -7.49793e-07L17.1604 1.67184C17.1604 4.63769 18.4515 7.41963 20.4779 9.46264L4.13796e-07 9.46264L5.60013e-07 12.8063L20.4779 12.8063C18.4515 14.8493 17.1604 17.6313 17.1604 20.5971L17.1604 22.2689L20.4796 22.2689L20.4796 20.5971C20.4796 16.5195 24.1672 12.8063 28.2134 12.8063L29.873 12.8063L29.873 9.46264L28.2134 9.46264Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="demo">#</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-5-small"></div>
          <Link to="/service" className="button w-inline-block">
            <div className="button-text-wrapper">
              <div className="button-text">View all services</div>
            </div>
            <div className="button-icon-wrapper">
              <div className="project-arrow-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon">
                  <path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H16V15H14V17ZM14 17H12V19H14V17Z" fill="currentColor"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon">
                  <path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H16V15H14V17ZM14 17H12V19H14V17Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="space-10-small"></div>
    </section>
  );
}
