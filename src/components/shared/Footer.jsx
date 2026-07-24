import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const handleLinkClick = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer data-wf-component-id="5a6382d2-e0d3-62a0-fb99-90b247678888" data-wf-variant-state="base" className="section" role="contentinfo" style={{ paddingTop: '2.5rem' }}>
      <style>
        {`
          .footer-soical-wrapper:hover .footer-social-icon,
          .footer-soical-wrapper:hover .footer-social-text {
            color: #ffd84d !important;
          }
          .footer-social-icon, .footer-social-text {
            transition: color 0.3s ease;
          }
          .email-address {
            font-family: "Bebas Neue", sans-serif !important;
            font-weight: 400 !important;
            text-transform: uppercase !important;
            transform: scaleY(1.3) !important;
            transform-origin: center center !important;
            line-height: 1.15 !important;
            letter-spacing: 0.02em !important;
            display: inline-block !important;
          }
        `}
      </style>
      <div className="space-2-normal" style={{ paddingTop: '1rem' }}></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-wrapper">
          <div className="custom-footer-nav-wrapper">
            <div className="footer-navigation">
              <NavLink to="/" className="nav-item-simple" onClick={handleLinkClick}>Home</NavLink>
              <NavLink to="/about" className="nav-item-simple" onClick={handleLinkClick}>About</NavLink>
              <NavLink to="/service" className="nav-item-simple" onClick={handleLinkClick}>Service</NavLink>
              <NavLink to="/project" className="nav-item-simple" onClick={handleLinkClick}>Project</NavLink>
              <NavLink to="/contact" className="nav-item-simple" onClick={handleLinkClick}>Contact</NavLink>
            </div>
          </div>
          <div className="space-3-small"></div>
          <div className="footer-title-wrapper">
            <a href="mailto:info@wizzibility.com" className="email-address" aria-label="Wizzibility Email Contact">info@wizzibility.com</a>
            <div className="footer-social-block">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-soical-wrapper w-inline-block" aria-label="Wizzibility Facebook Page">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="footer-social-icon" aria-hidden="true">
                  <path d="M13.397 20.9972V12.8012H16.162L16.573 9.59225H13.397V7.54825C13.397 6.62225 13.655 5.98825 14.984 5.98825H16.668V3.12725C15.8487 3.03874 15.0251 2.99634 14.201 3.00025C11.757 3.00025 10.079 4.49225 10.079 7.23125V9.58625H7.33203V12.7952H10.085V20.9972H13.397Z" fill="currentColor"></path>
                </svg>
                <div className="footer-social-text">Facebook</div>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-soical-wrapper w-inline-block" aria-label="Wizzibility Instagram Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon" aria-hidden="true">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
                <div className="footer-social-text">Instagram</div>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="footer-soical-wrapper w-inline-block" aria-label="Wizzibility Twitter Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="footer-social-icon" aria-hidden="true">
                  <path d="M17.6873 3.06348L12.6913 8.77448L8.3713 3.06348H2.1123L9.5893 12.8395L2.5033 20.9385H5.5373L11.0063 14.6885L15.7863 20.9385H21.8883L14.0943 10.6345L20.7193 3.06348H17.6873ZM16.6233 19.1235L5.6543 4.78248H7.4573L18.3033 19.1225L16.6233 19.1235Z" fill="currentColor"></path>
                </svg>
                <div className="footer-social-text">Twitter</div>
              </a>
            </div>
          </div>
          <div className="space-4-medium"></div>
        </div>
      </div>
      <div className="copyright-wrapper" style={{ display: 'block' }}>
        <div className="w-layout-blockcontainer container w-container">
          <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
            <div className="copyright-text" style={{ textAlign: 'center', width: '100%' }}>© Copyright 2026 - Wizzibility</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
