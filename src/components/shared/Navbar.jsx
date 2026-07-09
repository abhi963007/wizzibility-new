import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../Wizzibility_white_logo-1.webp';

export default function Navbar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    setMousePos({ x: mouseX, y: e.clientY - rect.top });

    // macOS Dock Magnification Logic
    const items = e.currentTarget.querySelectorAll('.nav-item-simple');
    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2 - rect.left;
      const distance = Math.abs(mouseX - itemCenter);
      
      const maxMagnification = 1.45;
      const rangeDistance = 40; // Only focus magnification on hovered item

      // Gaussian bell curve formula
      const exponent = -Math.pow(distance, 2) / (2 * Math.pow(rangeDistance, 2));
      const scale = (maxMagnification - 1) * Math.exp(exponent) + 1;
      
      item.style.setProperty('--dock-scale', scale);
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset all scales back to 1
    const items = document.querySelectorAll('.nav-item-simple');
    items.forEach((item) => {
      item.style.setProperty('--dock-scale', 1);
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
        onMouseLeave={handleMouseLeave}
      >
        {/* Isolated background wrapper for cursor glow to support overflow visible */}
        <div className="navbar-bg-glow-wrapper">
          {/* Liquid Cursor Glow (Mouse follow) */}
          <div 
            className="navbar-cursor-glow" 
            style={{ 
              left: mousePos.x, 
              top: mousePos.y, 
              opacity: isHovered ? 1 : 0 
            }} 
          />
        </div>

        <div className="navbar-internal-layout">
          
          {/* Logo Brand */}
          <NavLink 
            to="/" 
            className="nav-brand-custom"
            aria-label="Wizzibility Logo"
          >
            <div className="navbrand-logo-wrap">
              <img src={logoImg} alt="Wizzibility Logo" className="navbar-logo-img" />
            </div>
          </NavLink>

          {/* Navigation Links (Directly distributed via space-between) */}
          <NavLink to="/" className="nav-item-simple">HOME</NavLink>
          <NavLink to="/service" className="nav-item-simple">SERVICES</NavLink>
          <NavLink to="/project" className="nav-item-simple">PROJECTS</NavLink>
          <NavLink to="/contact" className="nav-item-simple">CONTACT</NavLink>

        </div>
      </header>
    </div>
  );
}
