import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { servicesData } from '../data/servicesData';
import useMeta from '../hooks/useMeta';

// Complete services mapping list to find matching items for "Related Services"
const allServicesList = [
  { slug: 'fashion-photography', title: 'Visual Communication', image: '6a3514ef9e312a69a772c2c0_8971c848c2638f539d50757c3cbdcfa62708d35c.webp' },
  { slug: 'voice-videography', title: 'Digital Marketing', image: '6a3514e18cb733c985d735eb_054f97113db54086c0f159ca559fbaea76ca59c9.webp' },
  { slug: 'video-editing-photograhy', title: 'Branding', image: '6a3514d344d27a821e163d62_c39acb39f24eaae1617e34596fcd880c93c2af1a.webp' },
  { slug: 'photo-editing-shoots', title: 'Multimedia Production', image: '6a3514be30f3515af988ac02_ff0be023f7b2ee24272fccf4bf1cd342a495c37a.webp' },
  { slug: 'brand-product-shoots', title: 'Website Development', image: '6a35149d36fe5f1750672b3a_82d7964840e34c402f065d2c6276cb5141f0a984.webp' },
  { slug: 'event-wedding-coverage', title: 'App Development', image: '6a3514888691881407d3c368_1ab4a0190b641c4b8019632a8f5eac8f25cf5100.webp' }
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // If the service doesn't exist, redirect to the main services list page
  if (!service) {
    return <Navigate to="/service" replace />;
  }

  // Schema markup for SEO
  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.overviewText1,
      "image": `https://wizzibility.com/images/${service.heroImage}`,
      "provider": {
        "@type": "Organization",
        "name": "Wizzibility",
        "url": "https://wizzibility.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "BreadcrumbList",
          "position": 1,
          "name": "Home",
          "item": "https://wizzibility.com"
        },
        {
          "@type": "BreadcrumbList",
          "position": 2,
          "name": "Services",
          "item": "https://wizzibility.com/service"
        },
        {
          "@type": "BreadcrumbList",
          "position": 3,
          "name": service.title,
          "item": `https://wizzibility.com/service/${slug}`
        }
      ]
    }
  ];

  useMeta({
    title: `${service.title} | Services | Wizzibility`,
    description: service.overviewText1,
    canonical: `https://wizzibility.com/service/${slug}`,
    keywords: `service, ${service.title.toLowerCase()}, creative tech agency, hyderabad marketing, wizzibility`,
    schema: serviceSchema,
    og: {
      type: 'website',
      url: `https://wizzibility.com/service/${slug}`,
      image: `/images/${service.heroImage}`
    }
  });

  // Scroll to top when slug changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email.");
      return;
    }
    // Simulate API request
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Get related services (excluding current service)
  const relatedServices = allServicesList
    .filter(s => s.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <div className="hero-home-area">
        <Navbar />
        <div className="space-3-small hide-tab"></div>
        <section className="section hero">
          <div className="space-10-small"></div>
          <div className="space-6-normal hide-mobile"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="hero-wrapper">
              <div className="hero-left">
                <p className="hero-p">{service.overviewText1}</p>
              </div>
              <div className="hero-title-wrapper">
                <h1 className="single-innner-heading">{service.title}</h1>
              </div>
            </div>
          </div>
        </section>
        <img
          src={`/images/${service.heroImage}`}
          loading="lazy"
          alt={service.title}
          sizes="100vw"
          className="services-img"
        />
        <div className="blend-color"></div>
        <div className="home-hero-overlay"></div>
      </div>

      <div className="main">
        <section className="section">
          <div className="space-10-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-layout-grid service-single-grid">
              
              {/* Left Column: Details */}
              <div className="services-single-left">
                <div className="details-content w-richtext">
                  <h2>{service.overviewTitle}</h2>
                  <p>{service.overviewText2}</p>
                  <p>{service.experienceText}</p>
                </div>
                
                {/* Image Grid */}
                <div className="service-img-grid">
                  {service.galleryImages?.slice(0, 2).map((img, index) => (
                    <div key={index} className="service-multi-img-wrap">
                      <img
                        src={`/images/${img}`}
                        loading="lazy"
                        alt={`${service.title} Showcase ${index + 1}`}
                        className="services-multi-img"
                      />
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
                  ))}
                </div>

                {/* Service Inclusions */}
                <div className="details-content w-richtext">
                  <h2>{service.inclusionsTitle}</h2>
                  <p>{service.inclusionsDesc}</p>
                  <ul role="list">
                    {service.inclusionsList?.map((inclusion, index) => (
                      <li key={index}>{inclusion}</li>
                    ))}
                  </ul>
                </div>

                {/* Third Image */}
                {service.galleryImages?.[2] && (
                  <div className="service-img-wrap">
                    <img
                      src={`/images/${service.galleryImages[2]}`}
                      loading="lazy"
                      alt={`${service.title} Showcase Highlight`}
                      className="service-multi-img-three"
                    />
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
                )}

                {/* Client Testimonial */}
                <div className="details-content w-richtext">
                  <h2>Client Feedback</h2>
                  <blockquote>
                    "{service.quote}"
                    <br />
                    <strong>- {service.clientName}, {service.clientCompany}</strong>
                  </blockquote>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="services-right">
                <div className="service-form-wrap">
                  <div className="font-1-medium phudu">Let's start a new project</div>
                  
                  {submitted ? (
                    <div className="w-form-done" style={{ display: 'block', padding: '20px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', marginTop: '20px' }}>
                      <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Submission Received!</div>
                      <p style={{ color: '#ccc', margin: 0 }}>Thank you for reaching out. We will get back to you shortly!</p>
                    </div>
                  ) : (
                    <div className="service-form-main w-form">
                      <form onSubmit={handleSubmit} className="service-form">
                        <div className="group">
                          <label htmlFor="name" className="field-label">Name</label>
                          <input
                            className="service-text-field w-input"
                            maxLength="256"
                            name="name"
                            placeholder="Enter full name"
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="email" className="field-label">Email</label>
                          <input
                            className="service-text-field w-input"
                            maxLength="256"
                            name="email"
                            placeholder="Enter email address"
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="subject" className="field-label">Subject</label>
                          <input
                            className="service-text-field w-input"
                            maxLength="256"
                            name="subject"
                            placeholder="Project domain or service required"
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="message" className="field-label">Message</label>
                          <textarea
                            className="service-text-field message-area w-input"
                            maxLength="5000"
                            name="message"
                            placeholder="Tell us about your project requirements..."
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <button type="submit" className="submit-button services w-button">
                          Submit Now
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
          <div className="space-10-small"></div>
        </section>

        {/* Related Services */}
        <section className="section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-header">
              <div className="releted-service-header">
                <div className="releted-service-heading-wrap left">
                  <h2 className="section-heading">Related</h2>
                </div>
                <div className="releted-service-heading-wrap right">
                  <h2 className="section-heading">services</h2>
                </div>
                <div className="header-counter-wrap faq">
                  <div className="section-top-text">(02)</div>
                </div>
              </div>
            </div>
            <div className="space-3-large"></div>
            
            <div className="w-layout-grid services-grid">
              {/* Related Service Card 1 */}
              <div className="services-left">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {relatedServices[0] && (
                      <div role="listitem" className="w-dyn-item">
                        <Link to={`/service/${relatedServices[0].slug}`} className="services-card bg-onyx w-inline-block">
                          <div className="max-width-17">
                            <div className="font-2-medium center white">{relatedServices[0].title}</div>
                          </div>
                          <div className="service-image-wrapper">
                            <img
                              src={`/images/${relatedServices[0].image}`}
                              loading="lazy"
                              alt={relatedServices[0].title}
                              className="service-image"
                            />
                            <div className="project-arrow-wrap">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 30 23"
                                fill="none"
                                className="project-icon-2"
                              >
                                <path
                                  fillRule="evenodd"
                                  clip-rule="evenodd"
                                  d="M28.2134 9.46264C24.1672 9.46264 20.4796 5.74946 20.4796 1.67184L20.4796 -8.94821e-07L17.1604 -7.49793e-07L17.1604 1.67184C17.1604 4.63769 18.4515 7.41963 20.4779 9.46264L4.13796e-07 9.46264L5.60013e-07 12.8063L20.4779 12.8063C18.4515 14.8493 17.1604 17.6313 17.1604 20.5971L17.1604 22.2689L20.4796 22.2689L20.4796 20.5971C20.4796 16.5195 24.1672 12.8063 28.2134 12.8063L29.873 12.8063L29.873 9.46264L28.2134 9.46264Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="demo">#</div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Related Service Card 2 */}
              <div className="service-right">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {relatedServices[1] && (
                      <div role="listitem" className="w-dyn-item">
                        <Link to={`/service/${relatedServices[1].slug}`} className="services-card bg-onyx w-inline-block">
                          <div className="max-width-17">
                            <div className="font-2-medium center white">{relatedServices[1].title}</div>
                          </div>
                          <div className="service-image-wrapper">
                            <img
                              src={`/images/${relatedServices[1].image}`}
                              loading="lazy"
                              alt={relatedServices[1].title}
                              className="service-image"
                            />
                            <div className="project-arrow-wrap">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 30 23"
                                fill="none"
                                className="project-icon-2"
                              >
                                <path
                                  fillRule="evenodd"
                                  clip-rule="evenodd"
                                  d="M28.2134 9.46264C24.1672 9.46264 20.4796 5.74946 20.4796 1.67184L20.4796 -8.94821e-07L17.1604 -7.49793e-07L17.1604 1.67184C17.1604 4.63769 18.4515 7.41963 20.4779 9.46264L4.13796e-07 9.46264L5.60013e-07 12.8063L20.4779 12.8063C18.4515 14.8493 17.1604 17.6313 17.1604 20.5971L17.1604 22.2689L20.4796 22.2689L20.4796 20.5971C20.4796 16.5195 24.1672 12.8063 28.2134 12.8063L29.873 12.8063L29.873 9.46264L28.2134 9.46264Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="demo">#</div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-10-small"></div>
        </section>
      </div>
      <Footer />
    </>
  );
}
