import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Team from '../components/Team';
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
              <div className="hero-left">
                <p className="project-hero-p">
                  We are a next-generation creative tech studio. By blending fluid artistry with engineering precision, we craft digital experiences that linger in memory.
                </p>
              </div>
              <div className="hero-title-wrapper">
                <h1 className="hero-heading">About <span className="heading-hightlight">Wizzibility</span></h1>
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
        {/* Core Philosophy Section */}
        <section className="section onyx" style={{ padding: '6rem 0' }}>
          <div className="w-layout-blockcontainer container w-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', color: '#e02d0d', fontSize: '0.9rem', fontWeight: 600 }}>OUR PHILOSOPHY</span>
                <h2 style={{ fontSize: 'calc(1.8rem + 1.5vw)', margin: '1rem 0', fontFamily: 'Phudu, sans-serif', textTransform: 'uppercase', lineHeight: 1.1 }}>
                  Technology Means Nothing <span style={{ color: '#e02d0d' }}>Without Emotion</span>
                </h2>
              </div>
              <div>
                <p style={{ color: '#b2b2b2', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  We believe in building digital experiences that linger in memory. By blending the fluid boundaries of artistry with the raw precision of engineering, we craft interfaces that feel alive, intentional, and unmistakably distinct.
                </p>
                <p style={{ color: '#b2b2b2', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  This is not about building standard templates; it is about writing the visual and technological stories of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities / Pillars Grid */}
        <section className="section" style={{ padding: '6rem 0' }}>
          <div className="w-layout-blockcontainer container w-container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-heading" style={{ textTransform: 'uppercase', textAlign: 'center' }}>
                Why We Are <span className="heading-hightlight">Different</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 2rem', borderRadius: '1rem', transition: 'transform 0.3s ease' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#e02d0d' }}>⚡</div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem', fontFamily: 'Phudu, sans-serif' }}>Creative Engineering</h3>
                <p style={{ color: '#b2b2b2', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Fusing artistic direction with cutting-edge web infrastructure, performance optimization, and ultra-smooth motion dynamics.
                </p>
              </div>

              <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 2rem', borderRadius: '1rem', transition: 'transform 0.3s ease' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#e02d0d' }}>🤖</div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem', fontFamily: 'Phudu, sans-serif' }}>AI Integration</h3>
                <p style={{ color: '#b2b2b2', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Empowering brands with intelligent workflows, automated marketing insights, and customized generative AI solutions.
                </p>
              </div>

              <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 2rem', borderRadius: '1rem', transition: 'transform 0.3s ease' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#e02d0d' }}>🎨</div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem', fontFamily: 'Phudu, sans-serif' }}>Brand Systems</h3>
                <p style={{ color: '#b2b2b2', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Crafting memorable identities, visual narratives, typography systems, and digital assets that command industry authority.
                </p>
              </div>

              <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 2rem', borderRadius: '1rem', transition: 'transform 0.3s ease' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#e02d0d' }}>📈</div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem', fontFamily: 'Phudu, sans-serif' }}>Growth Marketing</h3>
                <p style={{ color: '#b2b2b2', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Data-backed acquisition funnels, campaign architecture, performance analytics, and conversion-focused design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Component */}
        <Team />

        {/* Why Choose Component */}
        <WhyChoose />

        {/* Testimonials Component */}
        <Testimonials />

        {/* Call To Action Section */}
        <section className="section bg" style={{ padding: '4rem 0 2rem 0', textDecoration: 'none' }}>
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
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
