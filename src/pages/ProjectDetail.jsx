import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { projectsData } from '../data/projectsData';

import useMeta from '../hooks/useMeta';

// Mapping of project slugs to background videos
const projectVideos = {
  'social-media-campaigns': '/video/social.mp4',
  'brand-identity-systems': '/video/brand-identity.mp4',
  'performance-marketing': '/video/performce-marketing.mp4',
  'product-design-ui-ux': '/video/ui-ux.mp4',
  'corporate-strategy-audits': '/video/corporate.mp4',
  'multimedia-content-creation': '/video/content-creation.mp4',
};

export default function ProjectDetail() {
  const ctaRef = React.useRef(null);
  const [ctaScale, setCtaScale] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ctaRef.current) return;
      const rect = ctaRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const startPoint = viewportHeight;
        const endPoint = viewportHeight * 0.25; 
        
        let progress = (startPoint - rect.top) / (startPoint - endPoint);
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        
        setCtaScale(progress);
      } else if (rect.top >= viewportHeight) {
        setCtaScale(0);
      } else if (rect.bottom <= 0) {
        setCtaScale(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const { slug } = useParams();
  const project = projectsData[slug];

  // If the project doesn't exist, redirect back to projects listing page
  if (!project) {
    return <Navigate to="/project" replace />;
  }

  const projectSchema = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.overview,
      "image": project.heroImage.startsWith('/') ? `https://wizzibility.com${project.heroImage}` : `https://wizzibility.com/images/projects/details/${project.heroImage}`,
      "publisher": {
        "@type": "Organization",
        "name": "Wizzibility",
        "url": "https://wizzibility.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://wizzibility.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://wizzibility.com/project"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": project.title,
          "item": `https://wizzibility.com/project/${slug}`
        }
      ]
    }
  ];

  useMeta({
    title: `${project.title} | Projects | Wizzibility`,
    description: project.overview,
    canonical: `https://wizzibility.com/project/${slug}`,
    keywords: `case study, portfolio, ${project.title}, wizzibility campaigns`,
    schema: projectSchema,
    og: {
      type: 'article',
      url: `https://wizzibility.com/project/${slug}`,
      image: project.heroImage.startsWith('/') ? project.heroImage : `/images/projects/details/${project.heroImage}`
    }
  });

  // Scroll to the top of the page when the project slug changes
  React.useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  // Retrieve details for related projects
  const relatedProjects = (project.relatedSlugs ?? [])
    .map(relatedSlug => ({ slug: relatedSlug, ...projectsData[relatedSlug] }))
    .filter(p => p.title);

  return (
    <>
      {/* Project Detail Hero Section */}
      <div className="hero-home-area">
        <Navbar />
        <div className="space-3-small hide-tab"></div>
        <section className="section hero">
          <div className="space-10-small"></div>
          <div className="space-6-normal hide-mobile"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="hero-wrapper">
              <div className="hero-left">
                <p className="hero-p">{project.overview}</p>
              </div>
              <div className="hero-title-wrapper">
                <h1 className="single-innner-heading">{project.title}</h1>
              </div>
            </div>
          </div>
        </section>
        {projectVideos[slug] ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="proeject-main-img"
            style={{ transform: 'none' }}
            poster={project.heroImage.startsWith('/') ? project.heroImage : `/images/projects/details/${project.heroImage}`}
          >
            <source src={projectVideos[slug]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={project.heroImage.startsWith('/') ? project.heroImage : `/images/projects/details/${project.heroImage}`} 
            loading="lazy" 
            alt="" 
            sizes={project.heroImageSizes} 
            srcSet={project.heroImage.startsWith('/') ? project.heroImageSrcset : project.heroImageSrcset?.replaceAll('/images/', '/images/projects/details/')} 
            className="proeject-main-img" 
          />
        )}
        <div className="blend-color"></div>
        <div className="home-hero-overlay"></div>
      </div>

      <main className="main" id="main-content" role="main">
        {/* Project Body Details */}
        <section className="section">
          <div className="space-3-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="project-body-main">
              
              {/* Overview Main Body Image */}
              <div className="project-hero-img-wrap">
                <img 
                  src={`/images/projects/details/${project.bodyImage}`} 
                  loading="lazy" 
                  alt="" 
                  sizes={project.bodyImageSizes} 
                  srcSet={project.bodyImageSrcset?.replaceAll('/images/', '/images/projects/details/')} 
                  className="project-hero-img" 
                />
                <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>
              </div>

              {/* Project Overview Details */}
              <div className="project-details-wrap">
                <div className="details-content w-richtext">
                  <h2>project overview</h2>
                  <p></p>
                  <p>{project.overview}</p>
                </div>
              </div>

              {/* Gallery Image Grid Row 1 */}
              <div className="w-layout-grid project-multi-img-grid">
                <div className="project-multi-img-wrap">
                  <img 
                    src={`/images/projects/details/${project.galleryImage1}`} 
                    loading="lazy" 
                    alt="" 
                    sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                    srcSet={project.galleryImage1Srcset?.replaceAll('/images/', '/images/projects/details/')} 
                    className="project-multi-img" 
                  />
                  <div className="blend-color"></div>
                  <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                  </div>
                </div>
                <div className="project-multi-img-wrap">
                  <img 
                    src={`/images/projects/details/${project.galleryImage2}`} 
                    loading="lazy" 
                    alt="" 
                    sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                    srcSet={project.galleryImage2Srcset?.replaceAll('/images/', '/images/projects/details/')} 
                    className="project-multi-img" 
                  />
                  <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>

              {/* Mission Details */}
              <div className="project-details-wrap">
                <div className="details-content w-richtext">
                  <h2>{project.missionTitle}</h2>
                  <p></p>
                  <p>{project.missionDescription}</p>
                  <p></p>
                  <ul role="list">
                    {project.missionPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Gallery Image Row 2 (Middle Wide & Grid Row 3) */}
              <div className="project-img-block">
                <div className="project-multi-img-wrap">
                  <img 
                    src={`/images/projects/details/${project.galleryImageMiddle}`} 
                    loading="lazy" 
                    alt="" 
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 939px" 
                    srcSet={project.galleryImageMiddleSrcset?.replaceAll('/images/', '/images/projects/details/')} 
                    className="project-multi-img" 
                  />
                  <div className="blend-color"></div>
                  <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                  </div>
                </div>
                <div className="w-layout-grid project-multi-img-grid _02">
                  <div className="project-multi-img-wrap">
                    <img 
                      src={`/images/projects/details/${project.galleryImage3}`} 
                      loading="lazy" 
                      alt="" 
                      sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                      srcSet={project.galleryImage3Srcset?.replaceAll('/images/', '/images/projects/details/')} 
                      className="project-multi-img" 
                    />
                    <div className="blend-color"></div>
                    <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                    </div>
                  </div>
                  <div className="project-multi-img-wrap">
                    <img 
                      src={`/images/projects/details/${project.galleryImage4}`} 
                      loading="lazy" 
                      alt="" 
                      sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                      srcSet={project.galleryImage4Srcset?.replaceAll('/images/', '/images/projects/details/')} 
                      className="project-multi-img" 
                    />
                    <div className="blend-color"></div>
                    <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                      <div className="col"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem Statement Section */}
              <div className="project-details-wrap">
                <div className="details-content w-richtext">
                  <h2>Problem Statement</h2>
                  <p></p>
                  <p>{project.problemStatement}</p>
                </div>
              </div>

              {/* Solution Grid Section */}
              <div className="w-layout-grid solution-grid">
                <div className="solution-left">
                  <div className="details-content w-richtext">
                    <h2>Solution</h2>
                    <p></p>
                    <p>{project.solutionDescription}</p>
                    <p></p>
                    <ul role="list">
                      {project.solutionPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="solution-right">
                  <img 
                    src={`/images/projects/details/${project.solutionImage}`} 
                    loading="lazy" 
                    alt="" 
                    sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                    srcSet={project.solutionImageSrcset?.replaceAll('/images/', '/images/projects/details/')} 
                    className="project-multi-img-seven" 
                  />
                  <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="space-10-small"></div>
        </section>

        {/* Related Projects Section */}
        <section className="section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-header">
              <div className="releted-service-header">
                <div className="releted-service-heading-wrap left">
                  <h2 className="section-heading">Related</h2>
                </div>
                <div className="releted-service-heading-wrap right">
                  <h2 className="section-heading">Projects</h2>
                </div>
              </div>
            </div>
            <div className="space-3-large"></div>
            
            <div className="w-dyn-list">
              <div role="list" className="project-collection-list w-dyn-items">
                {relatedProjects.map((relatedProject) => (
                  <div key={relatedProject.slug} role="listitem" className="w-dyn-item">
                    <Link to={`/project/${relatedProject.slug}`} className="project-card w-inline-block">
                      <img 
                        src={relatedProject.heroImage.startsWith('/') ? relatedProject.heroImage : `/images/projects/details/${relatedProject.heroImage}`} 
                        loading="lazy" 
                        alt="" 
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 939px" 
                        srcSet={relatedProject.heroImage.startsWith('/') ? relatedProject.heroImageSrcset : relatedProject.heroImageSrcset?.replaceAll('/images/', '/images/projects/details/')} 
                        className="project-card-img" 
                      />
                      <div className="project-arrow-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 23" fill="none" className="project-icon-2">
                          <path fillRule="evenodd" clipRule="evenodd" d="M28.2134 9.46264C24.1672 9.46264 20.4796 5.74946 20.4796 1.67184L20.4796 -8.94821e-07L17.1604 -7.49793e-07L17.1604 1.67184C17.1604 4.63769 18.4515 7.41963 20.4779 9.46264L4.13796e-07 9.46264L5.60013e-07 12.8063L20.4779 12.8063C18.4515 14.8493 17.1604 17.6313 17.1604 20.5971L17.1604 22.2689L20.4796 22.2689L20.4796 20.5971C20.4796 16.5195 24.1672 12.8063 28.2134 12.8063L29.873 12.8063L29.873 9.46264L28.2134 9.46264Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <div className="proejct-card-overlay"></div>
                      <div className="project-info-wrap">
                        <div className="project-title-wrap">
                          <div className="project-card-title">{relatedProject.title}</div>
                        </div>
                      </div>
                      <div className="demo">#</div>
                      <div data-wf--overlay-grid--variant="base" data-wf-component-id="cb7828ae-a9c6-5bd0-42f2-dab3822909f5" data-wf-variant-state="base" className="overlay-grid">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-10-small"></div>
          </div>
        </section>

        {/* Bottom Booking CTA Section */}
        <section ref={ctaRef} data-wf-component-id="d0f53c86-b418-a526-4d6f-71e162cb1bb7" data-wf-variant-state="base" className="section bg">
          <div className="cta-sticky-wrap">
            <div className="cta-sticky">
              <div className="cta-content-wrap">
                <div className="cta-heading-wrap" style={{ display: 'none' }}>
                  <h2 className="cta-heading">Let’s Create Something</h2>
                </div>
                <Link 
                  data-wf--primary-button--variant="bg-white" 
                  data-wf-component-id="65aca0e1-f951-823d-959b-848e3a7ce565" 
                  data-wf-variant-state="06be3d8b-21d0-779c-6896-d9322336667f" 
                  to="/contact" 
                  className="button w-inline-block" 
                  style={{ display: 'none' }}
                >
                  <div className="button-text-wrapper w-variant-06be3d8b-21d0-779c-6896-d9322336667f">
                    <div className="button-text">Work with us</div>
                  </div>
                  <div className="button-icon-wrapper w-variant-06be3d8b-21d0-779c-6896-d9322336667f">
                    <div className="project-arrow-pill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon">
                        <path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H16V15H14V17ZM14 17H12V19H14V17Z" fill="currentColor"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon">
                        <path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H16V15H14V17ZM14 17H12V19H14V17Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              {/* GIF overlay - absolutely centered over the circles, outside rotating wrapper */}
              <div className="cta-gif-overlay" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${ctaScale})`,
                transition: 'transform 0.15s ease-out',
                zIndex: 10,
                borderRadius: '50%',
                overflow: 'hidden',
                width: '240px',
                height: '240px',
                transformOrigin: 'center center',
              }}>
                <img 
                  src="/images/wizzibilityeye.gif" 
                  alt="Wizzibility Eye Animation" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    display: 'block',
                  }} 
                />
              </div>
              <div className="cta-circle-large">
                <div className="cta-circle-small"></div>
                <div className="cta-card _01">
                  <img loading="lazy" src="/images/home/cards1.jpeg" alt="Creative preview 1" className="cta-card-img" />
                  <div className="cta-card-text">SocialMedia</div>
                </div>
                <div className="cta-card _02">
                  <img loading="lazy" src="/images/home/cards2.jpeg" alt="Creative preview 2" className="cta-card-img" />
                  <div className="cta-card-text">Branding</div>
                </div>
                <div className="cta-card _03">
                  <img loading="lazy" src="/images/home/cards3.jpeg" alt="Creative preview 3" className="cta-card-img" />
                  <div className="cta-card-text">Marketing</div>
                </div>
                <div className="cta-card _04">
                  <img loading="lazy" src="/images/home/cards4.jpeg" alt="Creative preview 4" className="cta-card-img" />
                  <div className="cta-card-text">UI_UX</div>
                </div>
                <div className="cta-card _05">
                  <img loading="lazy" src="/images/home/cards5.jpeg" alt="Creative preview 5" className="cta-card-img" />
                  <div className="cta-card-text">Strategy</div>
                </div>
                <div className="cta-card _06">
                  <img loading="lazy" src="/images/home/cards6.jpeg" alt="Creative preview 6" className="cta-card-img" />
                  <div className="cta-card-text">Multimedia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
