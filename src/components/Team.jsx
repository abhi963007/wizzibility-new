import React from 'react';

export default function Team() {
  const team = [
    { id: 1, name: 'Brooklyn Simmons', role: 'Lead Developer', image: 'home/Lead Developer.jpeg' },
    { id: 2, name: 'Darlene Robertson', role: 'Chief Technology Officer', image: 'home/Chief Technology.jpeg' },
    { id: 3, name: 'Emma Markson', role: 'Creative Director', image: 'home/Creative Director.jpeg' },
  ];

  return (
    <section className="section team-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-header" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h2 className="section-heading" style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>Expertise Teams</h2>
          </div>
        </div>
        <div className="w-layout-grid team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-img-wrap">
                <img src={`/images/${member.image}`} loading="lazy" alt={member.name} className="team-image" />
              </div>
              <div className="team-info-wrap">
                <div className="font-2-small">{member.name}</div>
                <div className="font-1-extra-small nobel">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

