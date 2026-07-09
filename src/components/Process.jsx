import React from 'react';

export default function Process() {
  const steps = [
    { id: 1, title: 'Discover', description: 'We learn about your story, goal, style, and project needs.', image: '6a2fd6923e5daf11466f37d8_image%2057372.webp' },
    { id: 2, title: 'Plan', description: 'We prepare the concept, mood, location, and creative direction.', image: '6a3452aaac57c482ba42872c_3077e770cdd04ed4421b756812d0ca9c9b8933a7.webp' },
    { id: 3, title: 'Create', description: 'We capture photos and videos with care, detail, and intention.', image: '6a3452a7e8b89d5850831283_e99b98690dd0e97f74d7db5b770bb989e634ab7c.webp' },
    { id: 4, title: 'Edit', description: 'We polish every frame with clean editing, color, retouching, and sound.', image: '6a3452a73f041d6e38e3c63a_9275859a8a5d77330830771699639a1c0e3123ff.webp' },
    { id: 5, title: 'Deliver', description: 'You receive final visuals ready for websites,ads, or personal use.', image: '6a34034a534a177bb2c50b74_Contemplative%20Profile%20in%20Color%20Gradient.webp' },
  ];

  return (
    <section className="section bg">
      <div className="space-6-normal"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="process-title-wrapper">
          <div className="section-header left">
            <div className="max-width-44">
              <h2 className="section-heading night">Working Process</h2>
            </div>
          </div>
          <div className="max-width-28">
            <p className="section-p">Working with Framevo Studio means you get more than photos and videos. You get a guided creative experience from planning to delivery.</p>
          </div>
        </div>
      </div>
      <div className="space-3-large"></div>
      <div className="pin-height">
        <div className="sticky-wrap">
          <div className="process-card-container">
            {steps.map((step) => (
              <div key={step.id} className={`media ${step.id === 1 ? '_01' : step.id === 2 ? '_02' : step.id === 3 ? '_03' : step.id === 4 ? '_04' : ''}`}>
                <div className="process-image-wrapper">
                  <img src={`/images/${step.image}`} loading="lazy" sizes="100vw" srcSet={`/images/${step.image.replace('.webp', '-p-500.webp')} 500w, /images/${step.image.replace('.webp', '-p-800.webp')} 800w, /images/${step.image}`} alt="" className="process-img" />
                </div>
                <div className="process-shape">
                  <div className="process-card-pill">
                    <div className="font-1-extra-small">Step {String(step.id).padStart(2, '0')}</div>
                  </div>
                  <div className="process-content-wrapper">
                    <div className="font-1-normal black-phudu">{step.title}</div>
                    <p className="paragraph-medium center">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="process-card-container _02">
            {steps.map((step) => (
              <div key={step.id} className={`media ${step.id === 1 ? '_01' : step.id === 2 ? '_02' : step.id === 3 ? '_03' : step.id === 4 ? '_04' : ''}`}>
                <div className="process-image-wrapper">
                  <img src={`/images/${step.image}`} loading="lazy" sizes="100vw" srcSet={`/images/${step.image.replace('.webp', '-p-500.webp')} 500w, /images/${step.image.replace('.webp', '-p-800.webp')} 800w, /images/${step.image}`} alt="" className="process-img" />
                </div>
                <div className="process-shape">
                  <div className="process-card-pill">
                    <div className="font-1-extra-small">Step {String(step.id).padStart(2, '0')}</div>
                  </div>
                  <div className="process-content-wrapper">
                    <div className="font-1-normal black-phudu">{step.title}</div>
                    <p className="paragraph-medium center">{step.description}</p>
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
