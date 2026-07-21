import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    { id: 1, title: 'Social Media Campaigns', date: '23 Sep, 2026', slug: 'social-media-campaigns', image: 'Social Media.jpeg' },
    { id: 2, title: 'Brand Identity Systems', date: '23 Sep, 2026', slug: 'brand-identity-systems', image: 'Brand Identity Systems.jpeg' },
    { id: 3, title: 'Performance Marketing', date: '23 Sep, 2026', slug: 'performance-marketing', image: 'Performance Marketing.jpeg' },
    { id: 4, title: 'Product Design & UI/UX', date: '23 Sep, 2026', slug: 'product-design-ui-ux', image: 'Product Design.jpeg' },
  ];

  return (
    <section className="section bg project-section-purple">
      <div className="space-6-normal"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="project-wrapper">
          <div className="project-title-wrapper">
            <div className="section-header left">
              <div className="max-width-44">
                <h2 className="section-heading night">Our Recent Project</h2>
              </div>
            </div>
            <div className="max-width-30">
              <p className="section-p">Empowering brands with creativity, technology, and strategy. We blend design, marketing, and tech to build extraordinary digital experiences.</p>
            </div>
          </div>
          <div className="space-3-large"></div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              {projects.map((project) => (
                <div key={project.id} role="listitem" className="w-dyn-item">
                  <Link to={`/project/${project.slug}`} className="project-collection-wrapper w-inline-block">
                    <div className="project-image-wrapper">
                      <img src={`/images/home/${project.image}`} loading="lazy" alt={project.title} className="project-image" />
                      <div className="project-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 37 37" fill="none" className="project-icon">
                          <path d="M6.1539 16.9231V20H24.6154V23.0769H27.6924V20H30.7693V16.9231H27.6924V13.8462H24.6154V16.9231H6.1539ZM21.5385 10.7692H24.6154V13.8462H21.5385V10.7692ZM21.5385 10.7692H18.4616V7.69231H21.5385V10.7692ZM21.5385 26.1538H24.6154V23.0769H21.5385V26.1538ZM21.5385 26.1538H18.4616V29.2308H21.5385V26.1538Z" fill="currentColor" className="project-icon"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="project-right">
                      <div className="project-collection-heading">{project.title}</div>
                      <div className="project-collection-date">{project.date}</div>
                      <div className="project-line-wrap"></div>
                    </div>
                    <div className="demo">#</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-6-normal"></div>
    </section>
  );
}
