import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

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
      slug: 'fashion-photography', 
      image: 'Service 1.jpeg', 
      maxWidthClass: 'max-width-17' 
    },
    { 
      id: 2, 
      title: 'Digital Marketing', 
      slug: 'voice-videography', 
      image: 'Service 2.jpeg', 
      maxWidthClass: 'max-width-17' 
    },
    { 
      id: 3, 
      title: 'Branding', 
      slug: 'video-editing-photograhy', 
      image: 'Service 3.jpeg', 
      maxWidthClass: 'max-width-17' 
    },
    { 
      id: 4, 
      title: 'Multimedia Production', 
      slug: 'photo-editing-shoots', 
      image: 'Service 4.jpeg', 
      maxWidthClass: 'max-width-17' 
    },
    { 
      id: 5, 
      title: 'Website Development', 
      slug: 'brand-product-shoots', 
      image: 'Service 5.jpeg', 
      maxWidthClass: 'max-width-24' 
    },
    { 
      id: 6, 
      title: 'App Development', 
      slug: 'event-wedding-coverage', 
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
                <div className="services-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 22" fill="none" className="heading-icon">
                    <path d="M0 21.9589V0H7.82716C9.52841 0 10.9402 0.293072 12.0624 0.879215C13.1918 1.46536 14.0353 2.27667 14.5928 3.31314C15.1504 4.34247 15.4292 5.53262 15.4292 6.88361C15.4292 8.22746 15.1468 9.41047 14.5821 10.4326C14.0246 11.4477 13.1811 12.2375 12.0517 12.8022C10.9294 13.3669 9.51769 13.6493 7.81644 13.6493H1.8871V10.7972H7.51622C8.58844 10.7972 9.4605 10.6435 10.1324 10.3361C10.8115 10.0288 11.3083 9.58202 11.6228 8.99588C11.9373 8.40973 12.0946 7.70565 12.0946 6.88361C12.0946 6.05443 11.9337 5.33605 11.6121 4.72846C11.2976 4.12088 10.8008 3.65625 10.1217 3.33459C9.44978 3.00577 8.56699 2.84137 7.47333 2.84137H3.31314V21.9589H0ZM10.8401 12.0517L16.2655 21.9589H12.4913L7.17311 12.0517H10.8401Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <img 
          src="/images/services/6a351d924340b50bc73bcd7b_69342287855f89e7feb91320036ed549e5f65522.webp" 
          loading="lazy" 
          sizes="(max-width: 928px) 100vw, 928px" 
          srcSet="/images/services/6a351d924340b50bc73bcd7b_69342287855f89e7feb91320036ed549e5f65522-p-500.webp 500w, /images/services/6a351d924340b50bc73bcd7b_69342287855f89e7feb91320036ed549e5f65522-p-800.webp 800w, /images/services/6a351d924340b50bc73bcd7b_69342287855f89e7feb91320036ed549e5f65522.webp 928w" 
          alt="Person reaching out with hand, head blurred in long exposure effect, dark background." 
          className="service-hero-img" 
        />
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
            <div className="section-header">
              <div className="goal-heading-wrap">
                <h2 className="section-heading">Built Around Your Goal, Not Just the Code</h2>
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
              <Link data-wf--primary-button--variant="base" data-wf-component-id="65aca0e1-f951-823d-959b-848e3a7ce565" data-wf-variant-state="base" to="/contact" className="button w-inline-block">
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
            <div className="section-header">
              <div className="faq-header">
                <div className="faq-heading-wrap left">
                  <h2 className="section-heading">Common</h2>
                </div>
                <div className="faq-heading-wrap right">
                  <h2 className="section-heading">questions</h2>
                </div>
              </div>
            </div>
            <div className="space-3-large"></div>
            <div className="faq-main">
              <div className="faq-card">
                <div className="faq-top">
                  <div className="faq-top-left">
                    <div className="font-1-extra-small white">01</div>
                    <div className="font-1-medium">What is Wizzibility and what services do you offer?</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="faq-arrow">
                    <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="faq-p-wrap">
                  <p className="faq-p">
                    An enterprise-ready, startup-friendly marketing and technology agency offering branding, performance marketing, web development, AI integrations, CRM solutions, content, and creative design — all under one roof.
                  </p>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-top">
                  <div className="faq-top-left">
                    <div className="font-1-extra-small white">02</div>
                    <div className="font-1-medium">How does Wizzibility use AI to enhance marketing performance?</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="faq-arrow">
                    <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="faq-p-wrap">
                  <p className="faq-p">
                    AI tools automate campaigns, generate intelligent insights, personalize user experiences, and boost efficiency.
                  </p>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-top">
                  <div className="faq-top-left">
                    <div className="font-1-extra-small white">03</div>
                    <div className="font-1-medium">Is Wizzibility suitable for startups as well as large businesses?</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="faq-arrow">
                    <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="faq-p-wrap">
                  <p className="faq-p">
                    Yes — cost-effective for startups and robust for enterprise needs.
                  </p>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-top">
                  <div className="faq-top-left">
                    <div className="font-1-extra-small white">04</div>
                    <div className="font-1-medium">Can Wizzibility build my brand from scratch?</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="faq-arrow">
                    <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="faq-p-wrap">
                  <p className="faq-p">
                    Yes — from naming and logo design to narrative, visual identity, and launch campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-10-small"></div>
        </section>

        {/* Sticky CTA Section */}
        <section data-wf-component-id="d0f53c86-b418-a526-4d6f-71e162cb1bb7" data-wf-variant-state="base" className="section bg">
          <div className="cta-sticky-wrap">
            <div className="cta-sticky">
              <div className="cta-content-wrap">
                <div className="cta-heading-wrap">
                  <h2 className="cta-heading">Let’s Create Something</h2>
                </div>
                <Link data-wf--primary-button--variant="bg-white" data-wf-component-id="65aca0e1-f951-823d-959b-848e3a7ce565" data-wf-variant-state="06be3d8b-21d0-779c-6896-d9322336667f" to="/contact" className="button w-inline-block">
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
              <div className="cta-circle-large">
                <div className="cta-circle-small"></div>
                <div className="cta-card _01">
                  <img loading="lazy" src="/images/home/cards1.jpeg" alt="Creative portfolio preview 1" className="cta-card-img" />
                  <div className="cta-card-text">@SocialMedia</div>
                </div>
                <div className="cta-card _02">
                  <img loading="lazy" src="/images/home/cards2.jpeg" alt="Creative portfolio preview 2" className="cta-card-img" />
                  <div className="cta-card-text">@Branding</div>
                </div>
                <div className="cta-card _03">
                  <img loading="lazy" src="/images/home/cards3.jpeg" alt="Creative portfolio preview 3" className="cta-card-img" />
                  <div className="cta-card-text">@Marketing</div>
                </div>
                <div className="cta-card _04">
                  <img loading="lazy" src="/images/home/cards4.jpeg" alt="Creative portfolio preview 4" className="cta-card-img" />
                  <div className="cta-card-text">@UI_UX</div>
                </div>
                <div className="cta-card _05">
                  <img loading="lazy" src="/images/home/cards5.jpeg" alt="Creative portfolio preview 5" className="cta-card-img" />
                  <div className="cta-card-text">@Strategy</div>
                </div>
                <div className="cta-card _06">
                  <img loading="lazy" src="/images/home/cards6.jpeg" alt="Creative portfolio preview 6" className="cta-card-img" />
                  <div className="cta-card-text">@Multimedia</div>
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
