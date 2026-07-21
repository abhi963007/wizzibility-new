import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

import useMeta from '../hooks/useMeta';

const projectsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://wizzibility.com/project#collectionpage",
    "name": "Projects & Case Stories | Wizzibility",
    "url": "https://wizzibility.com/project",
    "description": "Explore our portfolio of high-impact designs, creative tech solutions, and branding campaigns that drive sustainable business growth.",
    "publisher": {
      "@type": "Organization",
      "name": "Wizzibility",
      "url": "https://wizzibility.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://wizzibility.com/project/social-media-campaigns"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://wizzibility.com/project/brand-identity-systems"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://wizzibility.com/project/performance-marketing"
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wizzibility.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://wizzibility.com/project"
      }
    ]
  }
];

export default function ProjectsPage() {
  const ctaRef = React.useRef(null);
  const [ctaScale, setCtaScale] = React.useState(0);

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
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useMeta({
    title: 'Projects & Case Stories | Wizzibility',
    description: 'Explore our portfolio of high-impact designs, creative tech solutions, and branding campaigns that drive sustainable business growth.',
    canonical: 'https://wizzibility.com/project',
    keywords: 'projects, portfolio, case studies, branding portfolio, website portfolio, creative campaigns',
    schema: projectsSchema,
    og: {
      type: 'website',
      url: 'https://wizzibility.com/project'
    }
  });
  const [activeTab, setActiveTab] = useState('Tab 1');

  // GSAP sticky-stack animation: each card shrinks/fades as the next one slides over it
  useEffect(() => {
    let killTriggers = [];

    const applyStackAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;

      const cards = document.querySelectorAll('.project-card');
      if (!cards.length) return;

      // Kill any existing triggers first
      killTriggers.forEach(t => t.kill());
      killTriggers = [];

      cards.forEach((card, i) => {
        // Each card sticks at top with a small increasing offset so titles peek
        const stickyTop = 80 + i * 20;
        card.style.position = 'sticky';
        card.style.top = `${stickyTop}px`;
        card.style.zIndex = i + 1;

        // All cards except the last one: scale down + fade as the NEXT card covers them
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          const st = ScrollTrigger.create({
            trigger: nextCard,
            start: 'top 90%',
            end: 'top 10%',
            scrub: true,
            onUpdate: (self) => {
              const p = self.progress;
              // Scale from 1 → 0.92, opacity from 1 → 0.4
              gsap.set(card, {
                scale: 1 - 0.08 * p,
                opacity: 1 - 0.6 * p,
                transformOrigin: 'center top',
              });
            },
          });
          killTriggers.push(st);
        }
      });

      ScrollTrigger.refresh();
    };

    // Wait for GSAP + ScrollTrigger to be available (loaded by Webflow scripts)
    const wait = setInterval(() => {
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(wait);
        setTimeout(applyStackAnimations, 200);
      }
    }, 100);

    return () => {
      clearInterval(wait);
      killTriggers.forEach(t => t.kill());
      // Reset inline styles on cards
      document.querySelectorAll('.project-card').forEach((card) => {
        card.style.position = '';
        card.style.top = '';
        card.style.zIndex = '';
        if (window.gsap) window.gsap.set(card, { scale: 1, opacity: 1, clearProps: 'all' });
      });
    };
  }, [activeTab]);

  const projects = [
    { 
      id: 1, 
      title: 'Social Media Campaigns', 
      slug: 'social-media-campaigns', 
      category: 'Tab 2', 
      image: 'Social Media.jpeg', 
    },
    { 
      id: 2, 
      title: 'Brand Identity Systems', 
      slug: 'brand-identity-systems', 
      category: 'Tab 2', 
      image: 'Brand Identity Systems.jpeg', 
    },
    { 
      id: 3, 
      title: 'Performance Marketing', 
      slug: 'performance-marketing', 
      category: 'Tab 3', 
      image: 'Performance Marketing.jpeg', 
    },
    { 
      id: 4, 
      title: 'Product Design & UI/UX', 
      slug: 'product-design-ui-ux', 
      category: 'Tab 3', 
      image: 'Product Design.jpeg', 
    },
    { 
      id: 5, 
      title: 'Corporate Strategy & Audits', 
      slug: 'corporate-strategy-audits', 
      category: 'Tab 4', 
      image: '1.jpeg', 
    },
    { 
      id: 6, 
      title: 'Multimedia Content Creation', 
      slug: 'multimedia-content-creation', 
      category: 'Tab 4', 
      image: '2.jpeg', 
    }
  ];

  // Helper function to render a list of filtered projects
  const renderProjectGrid = (filteredProjects) => {
    return (
      <div className="w-dyn-list">
        <div role="list" className="project-stack-list w-dyn-items">
          {filteredProjects.map((project) => (
            <div key={project.id} role="listitem" className="w-dyn-item project-stack-item">
              <Link to={`/project/${project.slug}`} className="project-card w-inline-block">
                <img 
                  src={`/images/home/${project.image}`} 
                  loading="lazy" 
                  alt={project.title} 
                  className="project-card-img" 
                />
                <div className="project-arrow-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 23" fill="none" className="project-icon-2">
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.2134 9.46264C24.1672 9.46264 20.4796 5.74946 20.4796 1.67184L20.4796 -8.94821e-07L17.1604 -7.49793e-07L17.1604 1.67184C17.1604 4.63769 18.4515 7.41963 20.4779 9.46264L4.13796e-07 9.46264L5.60013e-07 12.8063L20.4779 12.8063C18.4515 14.8493 17.1604 17.6313 17.1604 20.5971L17.1604 22.2689L20.4796 22.2689L20.4796 20.5971C20.4796 16.5195 24.1672 12.8063 28.2134 12.8063L29.873 12.8063L29.873 9.46264L28.2134 9.46264Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="proejct-card-overlay"></div>
                <div className="project-info-wrap">
                  <div className="project-title-wrap">
                    <div className="project-card-title">{project.title}</div>
                  </div>
                </div>
                <div className="demo">#</div>
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Projects Page Hero Banner */}
      <div className="hero-home-area">
        <Navbar />
        <div className="space-3-small hide-tab"></div>
        <section className="section hero">
          <div className="space-10-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="hero-wrapper">
              <div className="project-header-top">
                <div className="hero-left">
                  <p className="project-hero-p">
                    Empowering brands with creativity, technology, and strategy. We blend design, marketing, and tech to build extraordinary digital experiences that stand out.
                  </p>
                </div>
              </div>
              <div className="hero-title-wrapper">
                <h1 className="hero-heading">Our <span className="heading-hightlight">Projects</span></h1>
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
          <source src="/video/Animate_blue_background_streaks_202607141221.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="blend-color"></div>
        <div className="home-hero-overlay"></div>
      </div>

      <main className="main" id="main-content" role="main">
        {/* Projects Filtering Tab Section */}
        <section className="section">
          <div className="space-10-small"></div>
          <div className="w-layout-blockcontainer container w-container">


            <div className="proect-tab w-tabs">
              {/* Tab Selector Menu */}
              <div className="project-tab-menu w-tab-menu">
                <button 
                  onClick={() => setActiveTab('Tab 1')} 
                  className={`project-tab-link w-inline-block w-tab-link ${activeTab === 'Tab 1' ? 'w--current' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div>All Projects</div>
                </button>
                <button 
                  onClick={() => setActiveTab('Tab 2')} 
                  className={`project-tab-link w-inline-block w-tab-link ${activeTab === 'Tab 2' ? 'w--current' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div>Marketing & Branding</div>
                </button>
                <button 
                  onClick={() => setActiveTab('Tab 3')} 
                  className={`project-tab-link w-inline-block w-tab-link ${activeTab === 'Tab 3' ? 'w--current' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div>Tech & Development</div>
                </button>
                <button 
                  onClick={() => setActiveTab('Tab 4')} 
                  className={`project-tab-link w-inline-block w-tab-link ${activeTab === 'Tab 4' ? 'w--current' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div>Multimedia & Design</div>
                </button>
              </div>

              {/* Tab Panels */}
              <div className="project-tab-content w-tab-content">
                {/* Tab 1: All Projects */}
                <div className={`w-tab-pane ${activeTab === 'Tab 1' ? 'w--tab-active' : ''}`}>
                  {activeTab === 'Tab 1' && renderProjectGrid(projects)}
                </div>

                {/* Tab 2: Weddings */}
                <div className={`w-tab-pane ${activeTab === 'Tab 2' ? 'w--tab-active' : ''}`}>
                  {activeTab === 'Tab 2' && renderProjectGrid(projects.filter(p => p.category === 'Tab 2'))}
                </div>

                {/* Tab 3: Events */}
                <div className={`w-tab-pane ${activeTab === 'Tab 3' ? 'w--tab-active' : ''}`}>
                  {activeTab === 'Tab 3' && renderProjectGrid(projects.filter(p => p.category === 'Tab 3'))}
                </div>

                {/* Tab 4: Product Photography */}
                <div className={`w-tab-pane ${activeTab === 'Tab 4' ? 'w--tab-active' : ''}`}>
                  {activeTab === 'Tab 4' && renderProjectGrid(projects.filter(p => p.category === 'Tab 4'))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        {(() => {
          const faqs = [
            { id: '01', q: 'What is Wizzibility and what services do you offer?', a: 'An enterprise-ready, startup-friendly marketing and technology agency offering branding, performance marketing, web development, AI integrations, CRM solutions, content, and creative design — all under one roof.' },
            { id: '02', q: 'How does Wizzibility use AI to enhance marketing performance?', a: 'AI tools automate campaigns, generate intelligent insights, personalize user experiences, and boost efficiency.' },
            { id: '03', q: 'Is Wizzibility suitable for startups as well as large businesses?', a: 'Yes — cost-effective for startups and robust for enterprise needs.' },
            { id: '04', q: 'Can Wizzibility build my brand from scratch?', a: 'Yes — from naming and logo design to narrative, visual identity, and launch campaigns.' },
          ];

          const FaqSection = () => {
            const [openId, setOpenId] = useState(null);

            return (
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
                    {faqs.map((faq) => {
                      const isOpen = openId === faq.id;
                      return (
                        <div
                          key={faq.id}
                          className="faq-card"
                          onMouseEnter={() => setOpenId(faq.id)}
                          onMouseLeave={() => setOpenId(null)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="faq-top">
                            <div className="faq-top-left">
                              <div className="font-1-extra-small white">{faq.id}</div>
                              <div className="font-1-medium">{faq.q}</div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="faq-arrow"
                              style={{ flexShrink: 0, transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                            >
                              <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="currentColor" />
                            </svg>
                          </div>
                          <div
                            style={{
                              maxHeight: isOpen ? '200px' : '0px',
                              overflow: 'hidden',
                              transition: 'max-height 0.4s ease',
                            }}
                          >
                            <p className="faq-p">{faq.a}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="space-10-small"></div>
              </section>
            );
          };

          return <FaqSection />;
        })()}

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
                  <img loading="lazy" src="/images/home/cards1.jpeg" alt="Creative preview 1" className="cta-card-img" />
                  <div className="cta-card-text">SocialMedia</div>
                </div>
                <div className="cta-card _02">
                  <img loading="lazy" src="/images/home/cards2.jpeg" alt="Creative preview 2" className="cta-card-img" />
                  <div className="cta-card-text">Branding</div>
                </div>
                <div className="cta-card _03">
                  <img loading="lazy" src="/images/home/cards3.jpeg" alt="Creative preview 3" className="cta-card-img" />
                  <div className="cta-card-text">Marketing</div>
                </div>
                <div className="cta-card _04">
                  <img loading="lazy" src="/images/home/cards4.jpeg" alt="Creative preview 4" className="cta-card-img" />
                  <div className="cta-card-text">UI_UX</div>
                </div>
                <div className="cta-card _05">
                  <img loading="lazy" src="/images/home/cards5.jpeg" alt="Creative preview 5" className="cta-card-img" />
                  <div className="cta-card-text">Strategy</div>
                </div>
                <div className="cta-card _06">
                  <img loading="lazy" src="/images/home/cards6.jpeg" alt="Creative preview 6" className="cta-card-img" />
                  <div className="cta-card-text">Multimedia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
