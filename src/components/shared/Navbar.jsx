import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../Wizzibility_white_logo-1.webp';

export default function Navbar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="navbar-fixed-container">
      {/* Ambient Backlight Behind Navbar */}
      <div className="navbar-ambient-backlight" />

      <header
        className="floating-navbar-capsule"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Liquid Cursor Glow (Mouse follow) */}
        <div 
          className="navbar-cursor-glow" 
          style={{ 
            left: mousePos.x, 
            top: mousePos.y, 
            opacity: isHovered ? 1 : 0 
          }} 
        />

        <div className="navbar-internal-layout">
          
          {/* Logo Section (Left Column) */}
          <div className="navbar-logo-area">
            <NavLink 
              to="/" 
              className="nav-brand-custom"
              aria-label="Wizzibility Logo"
            >
              <div className="navbrand-logo-wrap">
                <img src={logoImg} alt="Wizzibility Logo" className="navbar-logo-img" />
              </div>
            </NavLink>
          </div>

          {/* Navigation Content (Aligned to the Right) */}
          <div className="nav-center-block">
            <div className="primary-nav-row">
              <NavLink to="/" className="nav-item-simple">HOME</NavLink>
              <NavLink to="/service" className="nav-item-simple">SERVICES</NavLink>
              <NavLink to="/project" className="nav-item-simple">PROJECTS</NavLink>
              <NavLink to="/contact" className="nav-item-simple">CONTACT</NavLink>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}
