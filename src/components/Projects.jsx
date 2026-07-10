import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    { id: 1, title: 'Social Media Campaigns', date: '23 Sep, 2026', slug: 'social-media-videos', image: '6a356f5456ef1a53f0f6f826_7782b6bf6ea462330fdb471ee69d6f709461c3f2.webp' },
    { id: 2, title: 'Brand Identity Systems', date: '23 Sep, 2026', slug: 'wedding-stories', image: '6a356f69fd4f8718f8c20f44_717887a9f039712b0380565e87774a542a5e5727.webp' },
    { id: 3, title: 'Performance Marketing', date: '23 Sep, 2026', slug: 'brand-campaigns', image: '6a356f7a7328f22b398385f8_61975c7043a75c5376431e97031e5a4d2631ccd4.webp' },
    { id: 4, title: 'Product Design & UI/UX', date: '23 Sep, 2026', slug: 'product-shoots', image: '6a356f5456ef1a53f0f6f826_7782b6bf6ea462330fdb471ee69d6f709461c3f2.webp' },
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
                      <img src={`/images/${project.image}`} loading="lazy" alt="" sizes="100vw" srcSet={`/images/${project.image.replace('.webp', '-p-500.webp')} 500w, /images/${project.image} 640w`} className="project-image" />
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
