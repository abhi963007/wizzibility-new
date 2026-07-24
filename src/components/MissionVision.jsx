import React from 'react';
import { motion } from 'framer-motion';

export default function MissionVision() {
  return (
    <section className="section mission-vision-section" style={{ padding: '6rem 0 3rem 0', position: 'relative' }}>
      <div className="w-layout-blockcontainer container w-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              background: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '1.75rem',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
            whileHover={{ y: -5, borderColor: 'rgba(224, 45, 13, 0.35)' }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-60px',
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, rgba(224, 45, 13, 0.12) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
              }}
            />

            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#e02d0d',
                    display: 'inline-block',
                  }}
                ></span>
                <span
                  style={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#e02d0d',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  PURPOSE
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'calc(1.8rem + 0.8vw)',
                  color: '#ffffff',
                  fontFamily: 'Phudu, sans-serif',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Our Mission
              </h2>

              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                To create an AI-forward platform that empowers every brand — big or small — to access intelligent, creative, and scalable branding solutions that are both effective and affordable.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: '1px solid rgba(224, 45, 13, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#e02d0d',
                  }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            style={{
              background: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '1.75rem',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
            whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.25)' }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-60px',
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
              }}
            />

            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    display: 'inline-block',
                  }}
                ></span>
                <span
                  style={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  FUTURE
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'calc(1.8rem + 0.8vw)',
                  color: '#ffffff',
                  fontFamily: 'Phudu, sans-serif',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Our Vision
              </h2>

              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                To provide modular, customizable brand kits that adapt to each brand's unique voice, tone, and visual identity — making professional branding flexible, fast, and accessible.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                  }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
