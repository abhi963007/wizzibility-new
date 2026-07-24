import React from 'react';
import { motion } from 'framer-motion';

export default function AboutWizzibility() {
  return (
    <section className="section about-wizzibility-section" style={{ padding: '7rem 0', backgroundColor: '#000000', color: '#ffffff' }}>
      <div className="w-layout-blockcontainer container w-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'stretch'
        }}>
          {/* Left Column: Bold Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ height: '100%' }}
          >
            <h2 style={{
              fontFamily: '"Inter Tight", "Montserrat", sans-serif',
              fontWeight: 900,
              fontSize: 'calc(2.6rem + 2.6vw)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              textAlign: 'right',
              height: '100%'
            }}>
              <span>WE</span>
              <span>DESIGN WITH</span>
              <span>PURPOSE</span>
            </h2>
          </motion.div>

          {/* Right Column: Text description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            style={{ maxWidth: '540px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0.25rem 0' }}
          >
            <div style={{
              fontFamily: '"Montserrat", "Inter Tight", sans-serif',
              fontSize: 'calc(1.1rem + 0.35vw)',
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.9)',
              margin: 0,
              fontWeight: 400
            }}>
              Wizzibility is a design-driven agency
            </div>
            <div style={{
              fontFamily: '"Montserrat", "Inter Tight", sans-serif',
              fontSize: 'calc(1.1rem + 0.35vw)',
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.9)',
              margin: 0,
              fontWeight: 400
            }}>
              focused on crafting bold digital experiences
            </div>
            <div style={{
              fontFamily: '"Montserrat", "Inter Tight", sans-serif',
              fontSize: 'calc(1.1rem + 0.35vw)',
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.9)',
              margin: 0,
              fontWeight: 400
            }}>
              for brands that want to stand out — and scale.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
