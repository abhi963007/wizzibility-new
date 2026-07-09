import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header
      data-w-id="dd40cc7b-b405-34ca-5e01-65cea6715166"
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container w-container">
        <div className="nav-wrapper">
          <NavLink to="/" className="nav-brand w-nav-brand" aria-label="Wizzibility Home Logo">
            <div className="navbrand-text">Wizzibility</div>
            <div className="navbrand-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 8 10" fill="none" className="navbrand-icon" aria-hidden="true">
                <path d="M0 9.57185V0H3.41184C4.15341 0 4.76879 0.127749 5.25797 0.383248C5.75028 0.638746 6.11794 0.992394 6.36098 1.44419C6.60401 1.89287 6.72553 2.41166 6.72553 3.00055C6.72553 3.58633 6.60246 4.102 6.35631 4.54756C6.11327 4.99001 5.7456 5.33431 5.2533 5.58046C4.76411 5.82661 4.14874 5.94969 3.40717 5.94969H0.822581V4.70647H3.2763C3.74368 4.70647 4.12381 4.63948 4.4167 4.5055C4.7127 4.37152 4.92925 4.17678 5.06635 3.92128C5.20345 3.66578 5.27199 3.35887 5.27199 3.00055C5.27199 2.63911 5.20189 2.32597 5.06168 2.06113C4.92458 1.79628 4.70803 1.59375 4.41202 1.45354C4.11914 1.31021 3.73433 1.23854 3.25761 1.23854H1.44419V9.57185H0ZM4.72517 5.2533L7.09009 9.57185H5.44492L3.12674 5.2533H4.72517Z" fill="currentColor"></path>
              </svg>
            </div>
          </NavLink>
          <nav role="navigation" className="navigation w-nav-menu" aria-label="Main Navigation Menu">
            <div className="navlink-wrap">
              <NavLink to="/" className={({ isActive }) => isActive ? "navlink w-nav-link w--current" : "navlink w-nav-link"}>Home</NavLink>
              <NavLink to="/service" className={({ isActive }) => isActive ? "navlink w-nav-link w--current" : "navlink w-nav-link"}>Services</NavLink>
              <NavLink to="/project" className={({ isActive }) => isActive ? "navlink w-nav-link w--current" : "navlink w-nav-link"}>Project</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "navlink w-nav-link w--current" : "navlink w-nav-link"}>Contact</NavLink>
            </div>
          </nav>
          <div className="menu-button w-nav-button" aria-label="Toggle Navigation Menu" aria-haspopup="menu" role="button" tabIndex={0}>
            <div
              data-is-ix2-target="1"
              className="btn_close"
              data-w-id="332f894c-ce8f-4450-7957-b7fc34f0ef8f"
              data-animation-type="lottie"
              data-src="https://cdn.prod.website-files.com/6a2ede0dd01527a201b478d4/6a3796e29c579127eedfc850_29124.json"
              data-loop="1"
              data-direction="1"
              data-autoplay="0"
              data-renderer="svg"
              data-default-duration="2"
              data-duration="0"
              data-loading="eager"
              data-ix2-initial-state="0"
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
