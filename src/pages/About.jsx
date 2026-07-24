import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Team from '../components/Team';
import MissionVision from '../components/MissionVision';
import AboutWizzibility from '../components/AboutWizzibility';
import Testimonials from '../components/Testimonials';
import WhyChoose from '../components/WhyChoose';
// import Process from '../components/Process';
import useMeta from '../hooks/useMeta';

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Wizzibility",
    "description": "Wizzibility is a next-gen creative tech studio blending design, marketing, and technology to build extraordinary digital experiences.",
    "url": "https://wizzibility.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "Wizzibility",
      "logo": "https://wizzibility.com/fav-icon.png"
    }
  }
];

export default function About() {
  useMeta({
    title: 'About Us | Wizzibility - Creative Tech Studio',
    description: 'Learn about Wizzibility: our mission, agency philosophy, creative technology capabilities, and how we build memorable digital experiences for visionaries.',
    canonical: 'https://wizzibility.com/about',
    keywords: 'about wizzibility, creative tech studio, agency philosophy, AI web design agency, branding experts',
    schema: aboutSchema,
    og: {
      type: 'website',
      url: 'https://wizzibility.com/about'
    }
  });

  React.useEffect(() => {
    let attempts = 0;
    const initAnimation = () => {
      const gsap = window.gsap;
      if (!gsap) {
        attempts++;
        if (attempts > 15) {
          document.querySelectorAll('.hero-title-wrapper, .hero-left').forEach(el => {
            if (el) {
              el.style.opacity = '1';
              el.style.transform = 'none';
            }
          });
          return;
        }
        setTimeout(initAnimation, 100);
        return;
      }

      gsap.killTweensOf('.hero-title-wrapper, .hero-left');

      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline
        .fromTo('.hero-title-wrapper',
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 }
        )
        .fromTo('.hero-left',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '>+0.1'
        );
    };

    initAnimation();
  }, []);

  const handleLinkClick = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {/* About Page Hero Banner */}
      <div className="hero-home-area">
        <Navbar />
        <div className="space-3-small"></div>
        <section className="section hero">
          <div className="space-10-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="hero-wrapper">
              <div className="hero-title-wrapper">
                <h1 className="hero-heading">
                  About <span className="heading-hightlight">Wi<span style={{ color: '#ffd84d', opacity: 1, display: 'inline-block' }}>zz</span>ibility</span>
                </h1>
              </div>
              <div className="hero-left" style={{ opacity: 0 }}>
                <p className="project-hero-p">
                  We are a next-generation creative tech studio. By blending fluid artistry with engineering precision, we craft digital experiences that linger in memory.
                </p>
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
        {/* About Wizzibility Details Section */}
        <AboutWizzibility />

        {/* Mission and Vision Section */}
        <MissionVision />

        {/* Team Component */}
        <Team />

        {/* Why Choose Component */}
        {/* <WhyChoose /> */}

        {/* Testimonials Component */}
        <Testimonials />

        {/* Call To Action Section */}
        {/* <section className="section bg" style={{ padding: '4rem 0 2rem 0', textDecoration: 'none' }}>
          <div className="w-layout-blockcontainer container w-container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'calc(2rem + 2vw)', color: '#fff', textTransform: 'uppercase', fontFamily: 'Phudu, sans-serif', marginBottom: '1.5rem' }}>
                Ready to Build Something <span style={{ color: '#040200' }}>Extraordinary?</span>
              </h2>
              <p style={{ color: '#fff', fontSize: '1.15rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: 1.6 }}>
                Partner with Wizzibility to transform your digital strategy, visual identity, and web presence.
              </p>
              <Link 
                to="/contact" 
                onClick={handleLinkClick}
                className="button w-button"
                style={{ background: '#040200', color: '#fff', padding: '1rem 2.5rem', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 600, display: 'inline-block' }}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section> */}

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
