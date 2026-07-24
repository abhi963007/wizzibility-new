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
          alignItems: 'center'
        }}>
          {/* Left Column: Bold Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
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
              alignItems: 'flex-end',
              textAlign: 'right'
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
            style={{ maxWidth: '540px' }}
          >
            <p style={{
              fontFamily: '"Montserrat", "Inter Tight", sans-serif',
              fontSize: 'calc(1.1rem + 0.35vw)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.9)',
              margin: 0,
              fontWeight: 400
            }}>
              Wizzibility is a design-driven agency focused on crafting bold digital experiences for brands that want to stand out — and scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
