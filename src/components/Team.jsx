import React from 'react';

export default function Team() {
  const team = [
    { id: 1, name: 'Brooklyn Simmons', role: 'Lead Developer', image: '6a2fd6923e5daf11466f37d8_image%2057372.webp' },
    { id: 2, name: 'Darlene Robertson', role: 'Chief Technology Officer', image: '6a2fd69280be1041c486ea15_image%2057373%20%283%29.webp' },
    { id: 3, name: 'Emma Markson', role: 'Creative Director', image: '6a2fd691512d2eebe845225f_image%2057378.webp' },
  ];

  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-header">
          <div className="service-title-wrapper">
            <h2 className="section-heading">Expertise</h2>
            <div className="service-header-right">
              <h2 className="section-heading">teams</h2>
            </div>
            <div className="service-top-team team">
              <div className="section-counter-text">(10)</div>
            </div>
          </div>
        </div>
        <div className="space-3-large"></div>
        <div className="w-layout-grid team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-img-wrap">
                <img src={`/images/${member.image}`} loading="lazy" sizes="100vw" srcSet={`/images/${member.image.replace('.webp', '-p-500.webp')} 500w, /images/${member.image.replace('.webp', '-p-800.webp')} 800w, /images/${member.image}`} alt={member.name} className="team-image" />
              </div>
              <div className="team-info-wrap">
                <div className="font-2-small">{member.name}</div>
                <div className="font-1-extra-small nobel">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-10-small"></div>
    </section>
  );
}
