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
            <div className="w-layout-grid hero-grid">
              <div className="hero-left">
                <p className="hero-p">With over 8 years of experience in capturing moments that last a lifetime, I specialize rom weddings and portraits to adventure through the lens of my camera.</p>
              </div>
              <div className="hero-right">
                <div className="hero-item-wrapper">
                  <div className="hero-pill">
                    <div className="font-1-medium">Photography</div>
                  </div>
                  <div className="hero-pill">
                    <div className="font-1-medium">Videography</div>
                  </div>
                  <div className="hero-pill">
                    <div className="font-1-medium">Editing</div>
                  </div>
                  <div className="hero-pill last">
                    <div className="font-1-medium">Creative Production</div>
                  </div>
                </div>
                <div className="small-overlay"></div>
              </div>
            </div>
            <div className="hero-title-wrapper">
              <h1 className="hero-heading">Framevo <span className="heading-hightlight">Studio</span></h1>
              <div className="home-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 22" fill="none" className="heading-icon">
                  <path d="M0 21.9589V0H7.82716C9.52841 0 10.9402 0.293072 12.0624 0.879215C13.1918 1.46536 14.0353 2.27667 14.5928 3.31314C15.1504 4.34247 15.4292 5.53262 15.4292 6.88361C15.4292 8.22746 15.1468 9.41047 14.5821 10.4326C14.0246 11.4477 13.1811 12.2375 12.0517 12.8022C10.9294 13.3669 9.51769 13.6493 7.81644 13.6493H1.8871V10.7972H7.51622C8.58844 10.7972 9.4605 10.6435 10.1324 10.3361C10.8115 10.0288 11.3083 9.58202 11.6228 8.99588C11.9373 8.40973 12.0946 7.70565 12.0946 6.88361C12.0946 6.05443 11.9337 5.33605 11.6121 4.72846C11.2976 4.12088 10.8008 3.65625 10.1217 3.33459C9.44978 3.00577 8.56699 2.84137 7.47333 2.84137H3.31314V21.9589H0ZM10.8401 12.0517L16.2655 21.9589H12.4913L7.17311 12.0517H10.8401Z" fill="currentColor"></path>
                </svg>
              </div>
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
