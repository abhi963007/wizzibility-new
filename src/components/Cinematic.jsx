import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cinematic() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <section>
      <div className="space-10-small"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="cinematic-wrapper">
          <div className="section-header">
            <div className="section-heading-wrap cinematic">
              <h2 className="section-heading">Cinematic Videos That Move People</h2>
              <div className="section-counter cinematic">
                <div className="section-counter-text">(08)</div>
              </div>
            </div>
          </div>
          <div className="space-3-large"></div>
          <div className="cinematic-video-wrapper">
            <div className="cinematic-video w-background-video w-background-video-atom">
              <video ref={videoRef} autoPlay loop muted playsInline style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/6a2ede0dd01527a201b478d4%2F6a36e2273df09853ce6be394_close-up-side-view-of-asian-male-using-a-camera-ta-2025-12-17-22-42-18-utc_poster.0000000.jpg")' }}>
                <source src="/media/6a2ede0dd01527a201b478d4%2F6a36e2273df09853ce6be394_close-up-side-view-of-asian-male-using-a-camera-ta-2025-12-17-22-42-18-utc_mp4.mp4" type="video/mp4" />
                <source src="/media/6a2ede0dd01527a201b478d4%2F6a36e2273df09853ce6be394_close-up-side-view-of-asian-male-using-a-camera-ta-2025-12-17-22-42-18-utc_webm.webm" type="video/webm" />
              </video>
            </div>
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
          <div className="space-3-medium"></div>
          <div className="cinematic-content-wrapper">
            <p className="section-p center-white">We capture portraits, events, products, weddings, and brand moments with clean composition and natural emotion.Every photo is created to feel real, sharp, balanced, and ready for personal or professional use.</p>
            <div className="section-button-wrap">
              <Link to="/contact" className="button w-inline-block">
                <div className="button-text-wrapper">
                  <div className="button-text">Start a Video Project</div>
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
        </div>
      </div>
      <div className="space-10-small"></div>
    </section>
  );
}
