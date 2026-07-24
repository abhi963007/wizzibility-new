import React from 'react';
import { motion } from 'framer-motion';

export default function AboutWizzibility() {
  return (
    <section className="section about-wizzibility-section" style={{ padding: '6rem 0 3rem 0', position: 'relative' }}>
      <div className="w-layout-blockcontainer container w-container">
        
        {/* Top Heading */}
        <div style={{ marginBottom: '6rem', maxWidth: '1050px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.75rem',
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              border: '1px solid rgba(155, 81, 224, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#9b51e0',
                display: 'inline-block',
                boxShadow: '0 0 8px #9b51e0',
              }}></span>
            </div>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ 
              fontSize: 'calc(2.2rem + 1.8vw)', 
              color: '#ffffff', 
              fontFamily: 'Phudu, sans-serif', 
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            Empowering modern brands through intelligent technology, seamless design, and purposeful innovation.
          </motion.h2>
        </div>

        {/* Bottom 2-Column Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '5rem', 
          alignItems: 'center' 
        }}>
          {/* Left Side: Image / Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{ position: 'relative', padding: '1rem' }}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              height: '90%',
              background: 'radial-gradient(circle, rgba(155, 81, 224, 0.15) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
              zIndex: 0
            }} />
            <img 
              src="/images/brand-identity.png" 
              alt="Wizzibility Brand Identity Mockups" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '1.25rem', 
                position: 'relative', 
                zIndex: 1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                transform: 'rotate(-3deg) scale(1.02)'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            {/* Fallback image placeholder */}
            <div style={{
              display: 'none',
              width: '100%',
              height: '450px',
              background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
              borderRadius: '1.25rem',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              zIndex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.2)',
              fontSize: '1.2rem',
              fontFamily: 'Phudu, sans-serif'
            }}>
              Brand Mockups
            </div>
          </motion.div>

          {/* Right Side: Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.65)', 
              fontSize: '1.1rem', 
              lineHeight: 1.75, 
              marginBottom: '1.75rem',
              fontWeight: 300
            }}>
              We envision a future where brands that think sharp and act swift thrive. At Wizzibility, we fuse creative insight with advanced technology to craft brands that don't just compete — they excel.
            </p>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.65)', 
              fontSize: '1.1rem', 
              lineHeight: 1.75, 
              margin: 0,
              fontWeight: 300
            }}>
              Our work, fueled by vision and innovation, creates lasting impact in a digital era. Whether shaping identities, strategies, or immersive experiences, we ensure your brand is future-proof and memorable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
