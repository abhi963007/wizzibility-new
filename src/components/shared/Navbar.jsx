import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../Wizzibility_white_logo-1.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const glowRef = useRef(null);

  useEffect(() => {
    // Automatically open navbar smoothly on page load / reload
    const timer = setTimeout(() => {
      if (window.scrollY <= 100) {
        setIsOpen(true);
      }
    }, 400);

    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ignore micro jitter
      if (Math.abs(currentScrollY - lastScrollY) < 8) {
        ticking = false;
        return;
      }

      if (currentScrollY <= 30) {
        // Near top of page -> expand navbar
        setIsOpen(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling DOWN -> shrink navbar capsule
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP -> auto-expand navbar capsule
        setIsOpen(true);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (glowRef.current) {
      glowRef.current.style.left = `${mouseX}px`;
      glowRef.current.style.top = `${mouseY}px`;
    }

    // Only apply macOS dock magnification if menu is open
    if (!isOpen) return;

    // macOS Dock Magnification Logic
    const items = e.currentTarget.querySelectorAll('.nav-item-simple');
    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2 - rect.left;
      const distance = Math.abs(mouseX - itemCenter);
      
      const maxMagnification = 1.35;
      const rangeDistance = 85;

      // Gaussian bell curve formula
      const exponent = -Math.pow(distance, 2) / (2 * Math.pow(rangeDistance, 2));
      const scale = (maxMagnification - 1) * Math.exp(exponent) + 1;
      
      item.style.setProperty('--dock-scale', scale);
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset all scales back to 1 smoothly
    const items = document.querySelectorAll('.nav-item-simple');
    items.forEach((item) => {
      item.style.setProperty('--dock-scale', 1);
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="navbar-fixed-container">
      {/* Ambient Backlight Behind Navbar */}
      <div className={`navbar-ambient-backlight ${isOpen ? 'menu-open' : ''}`} />

      <header
        className={`floating-navbar-capsule ${isOpen ? 'menu-open' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Isolated background wrapper for cursor glow to support overflow visible */}
        <div className="navbar-bg-glow-wrapper">
          {/* Liquid Cursor Glow (Mouse follow) */}
          <div 
            ref={glowRef}
            className="navbar-cursor-glow" 
            style={{ 
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
            onClick={handleLinkClick}
          >
            <div className="navbrand-logo-wrap">
              <img src={logoImg} alt="Wizzibility Logo" className="navbar-logo-img" />
            </div>
          </NavLink>

          {/* Navigation Links Wrapper (collapses/reveals with swipe) */}
          <div className={`navbar-links-wrapper ${isOpen ? 'open' : ''}`}>
            <NavLink to="/" className="nav-item-simple" onClick={handleLinkClick}>HOME</NavLink>
            <NavLink to="/service" className="nav-item-simple" onClick={handleLinkClick}>SERVICES</NavLink>
            <NavLink to="/project" className="nav-item-simple" onClick={handleLinkClick}>PROJECTS</NavLink>
            <NavLink to="/contact" className="nav-item-simple" onClick={handleLinkClick}>CONTACT</NavLink>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button 
            className={`navbar-toggle-btn ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            <div className="hamburger-circle">
              <div className="hamburger-lines">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </div>
            </div>
          </button>

        </div>
      </header>
    </div>
  );
}
