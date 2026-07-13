import React from 'react';
import step1Svg from './step-1.svg';
import step2Svg from './step-2.svg';
import curveBg from './curve.webp';

export default function Process() {
  const steps = [
    {
      id: 1,
      title: 'DISCOVER',
      description: 'Discovery session to analyze brand, goals, customer journey, and gaps through research and audits.',
      image: 'work1.jpeg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
          <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
          <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'STRATEGY',
      description: 'Formulate technology integration roadmaps and digital marketing funnels.',
      image: 'work2.jpeg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
          <path d="M3 17l4-4 4 4 4-6 4 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'DESIGN & DEVELOP',
      description: 'Expert team designs a tailored marketing ecosystem using design, storytelling, data, and AI tools.',
      image: 'work3.jpeg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2"/>
          <path d="M17.5 14v6M14.5 17h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'DEPLOY & SCALE',
      description: 'Launch campaigns and assets, then monitor, optimize, and scale for continuous growth and returns.',
      image: 'work4.jpeg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
          <path d="M4 14l4-8 4 5 3-3 5 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 20h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 5,
      title: 'OPTIMIZE',
      description: 'Refine user experiences, automate workflows, and scale for continuous revenue growth.',
      image: 'work5.jpeg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
          <path d="M4 18l3-6 3 3 3-5 3 4 4-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const modifierClass = (id) => {
    if (id === 1) return '_01';
    if (id === 2) return '_02';
    if (id === 3) return '_03';
    if (id === 4) return '_04';
    return '';
  };

  return (
    <section className="section bg process-section">
      <div className="space-6-normal"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="process-title-wrapper">
          <div className="section-header left">
            <div className="max-width-44">
              <h2 className="section-heading night">Working Process</h2>
            </div>
          </div>
          <div className="max-width-28">
            <p className="section-p">Working with Wizzibility means you get a next-gen creative tech partner. We guide you from discovery through engineering and scaling.</p>
          </div>
        </div>
      </div>
      <div className="space-3-large"></div>
      <div className="pin-height">
        <div className="sticky-wrap" data-w-id="833d6c3e-f5a5-241d-0496-aa5bfb8fc895" data-wf-target='["6a2ede0dd01527a201b478d1","833d6c3e-f5a5-241d-0496-aa5bfb8fc895"]'>
          <div className="process-card-container">
            {steps.map((step) => (
              <div key={step.id} className={`media ${modifierClass(step.id)} process-card-ref`}>
                {/* Top Image Area */}
                <div className="process-image-wrapper">
                  <img
                    src={`/images/home/${step.image}`}
                    loading="lazy"
                    alt={step.title}
                    className="process-img"
                  />
                </div>

                {/* Bottom Content Area - Wave background */}
                <div className="process-shape" style={{ backgroundImage: `url(${curveBg})` }}>
                  <div className="process-shape-inner">
                    {/* Left Column: Text Content */}
                    <div className="process-text-col">
                      <div className="process-card-pill">
                        <div className="font-1-extra-small">Step {String(step.id).padStart(2, '0')}</div>
                      </div>
                      <div className="process-content-wrapper">
                        <div className="font-1-normal black-phudu process-card-title">{step.title}</div>
                        <div className="process-card-title-line"></div>
                        <p className="paragraph-medium process-card-desc">{step.description}</p>
                      </div>
                    </div>

                    {/* Right Column: Circular Graphic */}
                    <div className="process-graphic-col">
                      {step.id === 1 ? (
                        <img
                          src={step1Svg}
                          alt=""
                          className="process-circle-graphic"
                        />
                      ) : step.id === 2 ? (
                        <img
                          src={step2Svg}
                          alt=""
                          className="process-circle-graphic"
                        />
                      ) : (
                        <div className="process-circle-graphic-fallback">
                          <div className="outer-dashed-ring">
                            <div className="dot top-right"></div>
                            <div className="dot bottom-left"></div>
                            <div className="inner-glow-ring">
                              <div className="center-purple-circle">
                                {step.icon}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="process-card-container _02">
            {steps.map((step) => (
              <div key={step.id} className={`media ${modifierClass(step.id)} process-card-ref`}>
                {/* Top Image Area */}
                <div className="process-image-wrapper">
                  <img
                    src={`/images/home/${step.image}`}
                    loading="lazy"
                    alt={step.title}
                    className="process-img"
                  />
                </div>

                {/* Bottom Content Area - Wave background */}
                <div className="process-shape" style={{ backgroundImage: `url(${curveBg})` }}>
                  <div className="process-shape-inner">
                    {/* Left Column: Text Content */}
                    <div className="process-text-col">
                      <div className="process-card-pill">
                        <div className="font-1-extra-small">Step {String(step.id).padStart(2, '0')}</div>
                      </div>
                      <div className="process-content-wrapper">
                        <div className="font-1-normal black-phudu process-card-title">{step.title}</div>
                        <div className="process-card-title-line"></div>
                        <p className="paragraph-medium process-card-desc">{step.description}</p>
                      </div>
                    </div>

                    {/* Right Column: Circular Graphic */}
                    <div className="process-graphic-col">
                      {step.id === 1 ? (
                        <img
                          src={step1Svg}
                          alt=""
                          className="process-circle-graphic"
                        />
                      ) : step.id === 2 ? (
                        <img
                          src={step2Svg}
                          alt=""
                          className="process-circle-graphic"
                        />
                      ) : (
                        <div className="process-circle-graphic-fallback">
                          <div className="outer-dashed-ring">
                            <div className="dot top-right"></div>
                            <div className="dot bottom-left"></div>
                            <div className="inner-glow-ring">
                              <div className="center-purple-circle">
                                {step.icon}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-6-normal hide-destop"></div>
    </section>
  );
}
