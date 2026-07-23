import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import FaqItem from '../components/shared/FaqItem';

import useMeta from '../hooks/useMeta';

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Visual Communication",
    "description": "Impactful design, enhancing brand identity through engaging visual storytelling, presentations, infographics, and motion graphics.",
    "provider": {
      "@type": "Organization",
      "name": "Wizzibility",
      "url": "https://wizzibility.com"
    },
    "areaServed": ["IN", "US", "GB"],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing",
    "description": "Boosts online presence, drives engagement, increases conversions through strategic SEO, performance marketing, SMM, and GEO.",
    "provider": {
      "@type": "Organization",
      "name": "Wizzibility",
      "url": "https://wizzibility.com"
    },
    "areaServed": ["IN", "US", "GB"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Branding",
    "description": "Crafts unique brand identities, building recognition, trust, and loyalty through logos, narrative guidelines, and design templates.",
    "provider": {
      "@type": "Organization",
      "name": "Wizzibility",
      "url": "https://wizzibility.com"
    },
    "areaServed": ["IN", "US", "GB"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development",
    "description": "Responsive, fast, and secure custom website development utilizing React, Next.js, and Vite, fully optimized for search and AI discovery.",
    "provider": {
      "@type": "Organization",
      "name": "Wizzibility",
      "url": "https://wizzibility.com"
    },
    "areaServed": ["IN", "US", "GB"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App Development",
    "description": "Intuitive mobile and web application development combining user-centric design with robust coding and CRM system integrations.",
    "provider": {
      "@type": "Organization",
      "name": "Wizzibility",
      "url": "https://wizzibility.com"
    },
    "areaServed": ["IN", "US", "GB"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Multimedia Production",
    "description": "Dynamic content production combining videography, photography, TV commercials, drone shoots, and post-production editing.",
    "provider": {
      "@type": "Organization",
      "name": "Wizzibility",
      "url": "https://wizzibility.com"
    },
    "areaServed": ["IN", "US", "GB"]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What visual communication deliverables does Wizzibility provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pitch decks, presentations, infographics, brochures, packaging designs, motion graphics, and digital ads."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stack is used for website development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build fast, interactive websites using React, Next.js, Vite, and GSAP, integrated with robust backend services and CRM systems."
        }
      }
    ]
  }
];

export default function ServicesPage() {
  const ctaRef = React.useRef(null);
  const [ctaScale, setCtaScale] = React.useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ctaRef.current) return;
      const rect = ctaRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const startPoint = viewportHeight;
        const endPoint = viewportHeight * 0.25; 
        
        let progress = (startPoint - rect.top) / (startPoint - endPoint);
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        
        setCtaScale(progress);
      } else if (rect.top >= viewportHeight) {
        setCtaScale(0);
      } else if (rect.bottom <= 0) {
        setCtaScale(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    // Initial check with a tiny delay to let elements render and layout
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useMeta({
    title: 'Our Services | Wizzibility',
    description: "Ignite bold creativity with smart tech. Explore Wizzibility's core and integrated services, including visual communication, digital marketing, website and app development, and branding.",
    canonical: 'https://wizzibility.com/service',
    keywords: 'services, digital marketing hyderabad, branding agency, react web development, app development, motion graphics',
    schema: servicesSchema,
    og: {
      type: 'website',
      url: 'https://wizzibility.com/service'
    }
  });
  const services = [
    { 
      id: 1, 
      title: 'Visual Communication', 
      slug: 'visual-communication', 
      image: 'Service 1.jpeg', 
      maxWidthClass: 'max-width-17' 
    },
    { 
      id: 2, 
      title: 'Digital Marketing', 
      slug: 'digital-marketing', 
      image: 'Service 2.jpeg', 
      maxWidthClass: 'max-width-17' 
    },
    { 
      id: 3, 
      title: 'Branding', 
      slug: 'branding', 
      image: 'Service 3.jpeg', 
      maxWidthClass: 'max-width-17' 
    },
    { 
      id: 4, 
      title: 'Multimedia Production', 
      slug: 'multimedia-production', 
      image: 'Service 4.jpeg', 
      maxWidthClass: 'max-width-17' 
    },
    { 
      id: 5, 
      title: 'Website Development', 
      slug: 'website-development', 
      image: 'Service 5.jpeg', 
      maxWidthClass: 'max-width-24' 
    },
    { 
      id: 6, 
      title: 'App Development', 
      slug: 'app-development', 
      image: 'Service 6.jpeg', 
      maxWidthClass: 'max-width-24' 
    }
  ];

  return (
    <>
      {/* Services Page Hero Banner */}
      <div className="hero-home-area">
        <Navbar />
        <div className="space-3-small"></div>
        <section className="section hero">
          <div className="space-10-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="hero-wrapper">
              <div className="hero-left">
                <p className="project-hero-p">
                  Ignite bold creativity with smart tech. We offer tailored solutions blending innovation and artistry for every industry.
                </p>
              </div>
              <div className="hero-title-wrapper">
                <h1 className="hero-heading">Our <span className="heading-hightlight">Services</span></h1>
              </div>
            </div>
          </div>
        </section>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="service-hero-img"
          style={{ transform: 'none' }}
        >
          <source src="/video/services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="blend-color"></div>
        <div className="home-hero-overlay"></div>
      </div>

      <main className="main" id="main-content" role="main">
        {/* Services Grid Section */}
        <section className="section">
          <div className="space-6-normal"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-layout-grid services-grid">
              {services.map((service, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={service.id} className={isLeft ? "services-left" : "service-right"}>
                    <div className="w-dyn-list">
                      <div role="list" className="w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <Link to={`/service/${service.slug}`} className="services-card bg-onyx w-inline-block">
                            <div className={service.maxWidthClass}>
                              <div className="font-2-medium center white">{service.title}</div>
                            </div>
                            <div className="service-image-wrapper">
                              <img 
                                src={`/images/home/${service.image}`} 
                                loading="lazy" 
                                alt={service.title} 
                                className="service-image" 
                              />
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Goal Section */}
        <section className="section">
          <div className="space-10-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-header" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className="goal-heading-wrap" style={{ maxWidth: 'none', width: '100%', position: 'relative', textAlign: 'center', display: 'block' }}>
                <h2 className="section-heading" style={{ textAlign: 'center' }}>
                  Built Around Your Goal<br />
                  Not Just the Code
                </h2>
              </div>
            </div>
            <div className="space-3-large"></div>
            <div className="goal-img-wrap">
              <img 
                src="/images/home/Goals Section.jpeg" 
                loading="lazy" 
                alt="Strategic goal alignment vision" 
                className="goal-img" 
              />
              <div className="blend-color"></div>
              <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
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
            <div className="space-3-small"></div>
            <div className="goal-p-wrap">
              <p className="goal-p">
                We take time to understand your business goals, target audience, and technology needs. That helps us design and build a tailored marketing and tech ecosystem that drives real returns.
              </p>
            </div>
          </div>
        </section>

        {/* Not Sure Which Service Section */}
        <section className="section">
          <div className="space-10-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-header left">
              <div className="service-heading-wrap">
                <h2 className="section-heading">Not Sure Which Service You Need?</h2>
              </div>
            </div>
            <div className="space-3-large"></div>
            <div className="w-layout-grid service-grid-main">
              <div className="service-card-main">
                <div className="img-wrap">
                  <img 
                    src="/images/home/Help Selection.jpeg" 
                    loading="lazy" 
                    alt="Creative planning consultation" 
                    className="service-img" 
                  />
                  <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
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
                <div className="p-wrap">
                  <p className="hero-p nobel">
                    Whether it is branding, web development, multimedia, or digital marketing, Wizzibility can guide you from concept to code.
                  </p>
                </div>
              </div>
              <div className="service-card-main">
                <div className="img-wrap">
                  <img 
                    src="/images/home/help section 2.jpeg" 
                    loading="lazy" 
                    alt="Strategic project direction" 
                    className="service-img" 
                  />
                  <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
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
                <div className="p-wrap max-width-26">
                  <p className="hero-p nobel">
                    Tell us about your project, and we’ll help you choose the right direction
                  </p>
                </div>
              </div>
            </div>
            <div className="space-3-small"></div>
            <div className="button-wrapper">
              <Link data-wf--primary-button--variant="base" data-wf-component-id="65aca0e1-f951-823d-959b-848e3a7ce565" data-wf-variant-state="base" to="/contact" className="button quote-btn-purple w-inline-block">
                <div className="button-text-wrapper">
                  <div className="button-text">Request a quote</div>
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
        </section>

        {/* FAQ Section */}
        <section data-wf-component-id="8200a477-3767-8364-6113-c88aa46f9614" data-wf-variant-state="base" className="section">
          <div className="space-10-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-header" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <h2 className="section-heading" style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>Common Questions</h2>
              </div>
            </div>
            <div className="space-3-large"></div>
            <div className="faq-main">
              {[
                { number: '01', question: 'What is Wizzibility and what services do you offer?', answer: 'An enterprise-ready, startup-friendly marketing and technology agency offering branding, performance marketing, web development, AI integrations, CRM solutions, content, and creative design — all under one roof.' },
                { number: '02', question: 'How does Wizzibility use AI to enhance marketing performance?', answer: 'AI tools automate campaigns, generate intelligent insights, personalize user experiences, and boost efficiency.' },
                { number: '03', question: 'Is Wizzibility suitable for startups as well as large businesses?', answer: 'Yes — cost-effective for startups and robust for enterprise needs.' },
                { number: '04', question: 'Can Wizzibility build my brand from scratch?', answer: 'Yes — from naming and logo design to narrative, visual identity, and launch campaigns.' },
              ].map((faq, idx) => (
                <FaqItem
                  key={idx}
                  number={faq.number}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === idx}
                  onMouseEnter={() => setOpenFaq(idx)}
                  onMouseLeave={() => setOpenFaq(null)}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
          <div className="space-10-small"></div>
        </section>

        {/* Sticky CTA Section */}
        <section ref={ctaRef} data-wf-component-id="d0f53c86-b418-a526-4d6f-71e162cb1bb7" data-wf-variant-state="base" className="section bg">
          <div className="cta-sticky-wrap">
            <div className="cta-sticky">
              <div className="cta-content-wrap">
                <div className="cta-heading-wrap" style={{ display: 'none' }}>
                  <h2 className="cta-heading">Let’s Create Something</h2>
                </div>
                <Link 
                  data-wf--primary-button--variant="bg-white" 
                  data-wf-component-id="65aca0e1-f951-823d-959b-848e3a7ce565" 
                  data-wf-variant-state="06be3d8b-21d0-779c-6896-d9322336667f" 
                  to="/contact" 
                  className="button w-inline-block" 
                  style={{ display: 'none' }}
                >
                  <div className="button-text-wrapper w-variant-06be3d8b-21d0-779c-6896-d9322336667f">
                    <div className="button-text">Work with us</div>
                  </div>
                  <div className="button-icon-wrapper w-variant-06be3d8b-21d0-779c-6896-d9322336667f">
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
              {/* GIF overlay - absolutely centered over the circles, outside rotating wrapper */}
              <div className="cta-gif-overlay" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${ctaScale})`,
                transition: 'transform 0.15s ease-out',
                zIndex: 10,
                borderRadius: '50%',
                overflow: 'hidden',
                width: '240px',
                height: '240px',
                transformOrigin: 'center center',
              }}>
                <img 
                  src="/images/wizzibilityeye.gif" 
                  alt="Wizzibility Eye Animation" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    display: 'block',
                  }} 
                />
              </div>
              <div className="cta-circle-large">
                <div className="cta-circle-small"></div>
                <div className="cta-card _01">
                  <img loading="lazy" src="/images/home/cards1.jpeg" alt="Creative portfolio preview 1" className="cta-card-img" />
                  <div className="cta-card-text">SocialMedia</div>
                </div>
                <div className="cta-card _02">
                  <img loading="lazy" src="/images/home/cards2.jpeg" alt="Creative portfolio preview 2" className="cta-card-img" />
                  <div className="cta-card-text">Branding</div>
                </div>
                <div className="cta-card _03">
                  <img loading="lazy" src="/images/home/cards3.jpeg" alt="Creative portfolio preview 3" className="cta-card-img" />
                  <div className="cta-card-text">Marketing</div>
                </div>
                <div className="cta-card _04">
                  <img loading="lazy" src="/images/home/cards4.jpeg" alt="Creative portfolio preview 4" className="cta-card-img" />
                  <div className="cta-card-text">UI_UX</div>
                </div>
                <div className="cta-card _05">
                  <img loading="lazy" src="/images/home/cards5.jpeg" alt="Creative portfolio preview 5" className="cta-card-img" />
                  <div className="cta-card-text">Strategy</div>
                </div>
                <div className="cta-card _06">
                  <img loading="lazy" src="/images/home/cards6.jpeg" alt="Creative portfolio preview 6" className="cta-card-img" />
                  <div className="cta-card-text">Multimedia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer wrapper */}
        <Footer />
      </main>
    </>
  );
}
