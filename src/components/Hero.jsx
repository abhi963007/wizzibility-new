import React from 'react';
import Navbar from './shared/Navbar';

export default function Hero() {
  return (
    <div className="hero-home-area">
      <Navbar />
      <div className="space-3-small hide-tab"></div>
      <section className="section hero">
        <div className="space-10-small"></div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-wrapper">
            <div className="hero-title-wrapper">
              <h1 className="hero-heading">Creative <br /><span className="heading-hightlight">Tech Studio</span></h1>
            </div>
            <div className="w-layout-grid hero-grid">
              <div className="hero-left">
                <p className="hero-p">We are a next-gen creative tech agency blending design, marketing, and technology to build extraordinary digital experiences. From Concept to Code, We've Got You!</p>
              </div>
              <div className="hero-right"></div>
            </div>
          </div>
        </div>
      </section>
      <img src="/images/6a2ee4963f9feeabc218a125_a3907576a08303bea89e533589b9a42444ffc768.webp" loading="lazy" sizes="100vw" srcSet="/images/6a2ee4963f9feeabc218a125_a3907576a08303bea89e533589b9a42444ffc768-p-500.webp 500w, /images/6a2ee4963f9feeabc218a125_a3907576a08303bea89e533589b9a42444ffc768-p-800.webp 800w, /images/6a2ee4963f9feeabc218a125_a3907576a08303bea89e533589b9a42444ffc768-p-1080.webp 1080w, /images/6a2ee4963f9feeabc218a125_a3907576a08303bea89e533589b9a42444ffc768.webp 1536w" alt="Blurred image of a person holding a camera and extending their hand in a dark setting." className="hero-home-image" />
      <div className="blend-color"></div>
      <div className="home-hero-overlay home"></div>
    </div>
  );
}
