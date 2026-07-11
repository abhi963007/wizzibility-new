import React from 'react';
import { Link } from 'react-router-dom';

export default function Photography() {
  return (
    <section className="section photography-section-purple">
      <div className="w-layout-blockcontainer container w-container">
        <div className="photography-wrapper">
          <div className="section-header left">
            <div className="section-heading-wrap photography">
              <h2 className="section-heading">Visuals That Tell Your Brand's Story</h2>
            </div>
          </div>
          <div className="space-3-large hide-mobile"></div>
          <div className="w-layout-grid photography-grid">
            <div className="photography-left">
              <div className="photography-top">
                <div className="max-width-30">
                  <p className="section-p white-left">We design assets, digital illustrations, marketing graphics, and brand assets with clean layouts and premium aesthetics. Every visual is created to feel premium, sharp, balanced, and ready to elevate your business's presence.</p>
                </div>
                <div className="section-button-wrap">
                  <Link to="/contact" className="button w-inline-block">
                    <div className="button-text-wrapper">
                      <div className="button-text">Work with us</div>
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
              <div className="photoraphy-image-wrapper left">
                <img src="/images/home/6a2fd4c166aa567e67e7901e_image%2057367.webp" loading="lazy" sizes="100vw" srcSet="/images/home/6a2fd4c166aa567e67e7901e_image%2057367-p-500.webp 500w, /images/home/6a2fd4c166aa567e67e7901e_image%2057367-p-800.webp 800w, /images/home/6a2fd4c166aa567e67e7901e_image%2057367-p-1080.webp 1080w, /images/home/6a2fd4c166aa567e67e7901e_image%2057367.webp 1256w" alt="Person in a white hoodie with a dark shadowed face against a red and black background." className="photography-image" />
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
            </div>
            <div className="photography-right">
              <img src="/images/home/6a2fd4c24d9c1fd8d2a43a4a_image%2057368%20%281%29.webp" loading="lazy" sizes="100vw" srcSet="/images/home/6a2fd4c24d9c1fd8d2a43a4a_image%2057368%20%281%29-p-500.webp 500w, /images/home/6a2fd4c24d9c1fd8d2a43a4a_image%2057368%20%281%29-p-800.webp 800w, /images/home/6a2fd4c24d9c1fd8d2a43a4a_image%2057368%20%281%29-p-1080.webp 1080w, /images/home/6a2fd4c24d9c1fd8d2a43a4a_image%2057368%20%281%29-p-1600.webp 1600w, /images/home/6a2fd4c24d9c1fd8d2a43a4a_image%2057368%20%281%29.webp 1947w" alt="Black perfume bottle with blank label resting on glowing volcanic rocks with red lava light." className="photography-image" />
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
          </div>
        </div>
      </div>
      <div className="space-10-small"></div>
    </section>
  );
}
