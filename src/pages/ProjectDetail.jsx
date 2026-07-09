import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug];

  // If the project doesn't exist, redirect back to projects listing page
  if (!project) {
    return <Navigate to="/project" replace />;
  }

  // Scroll to the top of the page when the project slug changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
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
        <img 
          src={`/images/${project.heroImage}`} 
          loading="lazy" 
          alt="" 
          sizes={project.heroImageSizes} 
          srcSet={project.heroImageSrcset} 
          className="proeject-main-img" 
        />
        <div className="blend-color"></div>
        <div className="home-hero-overlay"></div>
      </div>

      <div className="main">
        {/* Project Body Details */}
        <section className="section">
          <div className="space-3-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="project-body-main">
              
              {/* Overview Main Body Image */}
              <div className="project-hero-img-wrap">
                <img 
                  src={`/images/${project.bodyImage}`} 
                  loading="lazy" 
                  alt="" 
                  sizes={project.bodyImageSizes} 
                  srcSet={project.bodyImageSrcset} 
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
                    src={`/images/${project.galleryImage1}`} 
                    loading="lazy" 
                    alt="" 
                    sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                    srcSet={project.galleryImage1Srcset} 
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
                    src={`/images/${project.galleryImage2}`} 
                    loading="lazy" 
                    alt="" 
                    sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                    srcSet={project.galleryImage2Srcset} 
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
                    src={`/images/${project.galleryImageMiddle}`} 
                    loading="lazy" 
                    alt="" 
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 939px" 
                    srcSet={project.galleryImageMiddleSrcset} 
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
                      src={`/images/${project.galleryImage3}`} 
                      loading="lazy" 
                      alt="" 
                      sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                      srcSet={project.galleryImage3Srcset} 
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
                      src={`/images/${project.galleryImage4}`} 
                      loading="lazy" 
                      alt="" 
                      sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                      srcSet={project.galleryImage4Srcset} 
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
                    src={`/images/${project.solutionImage}`} 
                    loading="lazy" 
                    alt="" 
                    sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 461px" 
                    srcSet={project.solutionImageSrcset} 
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
                <div className="header-counter-wrap faq">
                  <div className="section-top-text">(05)</div>
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
                        src={`/images/${relatedProject.heroImage}`} 
                        loading="lazy" 
                        alt="" 
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 939px" 
                        srcSet={relatedProject.heroImageSrcset} 
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
        <section data-wf-component-id="d0f53c86-b418-a526-4d6f-71e162cb1bb7" data-wf-variant-state="base" className="section bg">
          <div className="cta-sticky-wrap">
            <div className="cta-sticky">
              <div className="cta-content-wrap">
                <div className="cta-number">(10)</div>
                <div className="cta-heading-wrap">
                  <h2 className="cta-heading">Let’s Frame Something</h2>
                </div>
                <Link data-wf--primary-button--variant="bg-white" data-wf-component-id="65aca0e1-f951-823d-959b-848e3a7ce565" data-wf-variant-state="06be3d8b-21d0-779c-6896-d9322336667f" to="/contact" className="button w-inline-block">
                  <div className="button-text-wrapper w-variant-06be3d8b-21d0-779c-6896-d9322336667f">
                    <div className="button-text">Book photography</div>
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
              <div className="cta-circle-large">
                <div className="cta-circle-small"></div>
                <div className="cta-card _01">
                  <img loading="lazy" src="/images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29.webp" alt="Modern villa pool exterior" sizes="(max-width: 2528px) 100vw, 2528px" srcSet="/images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-500.webp 500w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-800.webp 800w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-1080.webp 1080w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-1600.webp 1600w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29-p-2000.webp 2000w, /images/6a2fdb77859e335168fa06d4_image%2057387%20%281%29.webp 2528w" className="cta-card-img" />
                  <div className="cta-card-text">@2026</div>
                </div>
                <div className="cta-card _02">
                  <img loading="lazy" src="/images/6a34034a534a177bb2c50b74_Contemplative%20Profile%20in%20Color%20Gradient.webp" alt="Modern villa pool exterior" sizes="(max-width: 904px) 100vw, 904px" srcSet="/images/6a34034a534a177bb2c50b74_Contemplative%20Profile%20in%20Color%20Gradient-p-500.webp 500w, /images/6a34034a534a177bb2c50b74_Contemplative%20Profile%20in%20Color%20Gradient.webp 1199w" className="cta-card-img" />
                  <div className="cta-card-text">@2026</div>
                </div>
                <div className="cta-card _03">
                  <img loading="lazy" src="/images/6a3452a73f041d6e38e3c63a_9275859a8a5d77330830771699639a1c0e3123ff.webp" alt="Modern villa pool exterior" sizes="(max-width: 904px) 100vw, 904px" srcSet="/images/6a3452a73f041d6e38e3c63a_9275859a8a5d77330830771699639a1c0e3123ff-p-500.webp 500w, /images/6a3452a73f041d6e38e3c63a_9275859a8a5d77330830771699639a1c0e3123ff.webp 640w" className="cta-card-img" />
                  <div className="cta-card-text">@2026</div>
                </div>
                <div className="cta-card _04">
                  <img loading="lazy" src="/images/6a3400b56571238315a68eca_575d1a0db0939e2ff392584b41240239_Woman%20Illuminated%20in%20Red%20Gazing%20Upward.webp" alt="Modern villa pool exterior" sizes="(max-width: 904px) 100vw, 904px" srcSet="/images/6a3400b56571238315a68eca_575d1a0db0939e2ff392584b41240239_Woman%20Illuminated%20in%20Red%20Gazing%20Upward-p-500.webp 500w, /images/6a3400b56571238315a68eca_575d1a0db0939e2ff392584b41240239_Woman%20Illuminated%20in%20Red%20Gazing%20Upward-p-800.webp 800w, /images/6a3400b56571238315a68eca_575d1a0db0939e2ff392584b41240239_Woman%20Illuminated%20in%20Red%20Gazing%20Upward-p-1080.webp 1080w, /images/6a3400b56571238315a68eca_575d1a0db0939e2ff392584b41240239_Woman%20Illuminated%20in%20Red%20Gazing%20Upward.webp 1200w" className="cta-card-img" />
                  <div className="cta-card-text">@2026</div>
                </div>
                <div className="cta-card _05">
                  <img loading="lazy" src="/images/6a32f97242ecfd2a31f27c73_e1d9a0b1de7bd9df1def9c845c2a857def6c8c26.webp" alt="Modern villa pool exterior" sizes="(max-width: 904px) 100vw, 904px" srcSet="/images/6a32f97242ecfd2a31f27c73_e1d9a0b1de7bd9df1def9c845c2a857def6c8c26-p-500.webp 500w, /images/6a32f97242ecfd2a31f27c73_e1d9a0b1de7bd9df1def9c845c2a857def6c8c26.webp 640w" className="cta-card-img" />
                  <div className="cta-card-text">@2026</div>
                </div>
                <div className="cta-card _06">
                  <img loading="lazy" src="/images/6a32f68243bd61f703504b7e_662eab522ab6ce8bf8e08b76e6992bb21e5365a4.webp" alt="Modern villa pool exterior" sizes="(max-width: 904px) 100vw, 904px" srcSet="/images/6a32f68243bd61f703504b7e_662eab522ab6ce8bf8e08b76e6992bb21e5365a4-p-500.webp 500w, /images/6a32f68243bd61f703504b7e_662eab522ab6ce8bf8e08b76e6992bb21e5365a4.webp 640w" className="cta-card-img" />
                  <div className="cta-card-text">@2026</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
