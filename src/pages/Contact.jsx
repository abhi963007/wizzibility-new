import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission success/error classes
    const formDone = document.querySelector('.w-form-done');
    const formFail = document.querySelector('.w-form-fail');
    const form = document.querySelector('.contact-form');
    
    try {
      // In a real app we would submit to an API here
      if (formDone) {
        formDone.style.display = 'block';
        if (form) form.style.display = 'none';
      }
    } catch (err) {
      if (formFail) formFail.style.display = 'block';
    }
  };

  return (
    <>
      {/* Contact Hero Area */}
      <div className="hero-home-area">
        <Navbar />
        <div className="space-10-small"></div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="contact-hero">
            <div className="contact-hero-header">
              <div className="hero-title-wrapper">
                <h1 className="hero-heading">Contact Us</h1>
              </div>
            </div>
            <div className="contact-hero-top">
              <p className="hero-p contact">
                Discover our new and improved ways to get in touch with us. We're here to help you start your next big project.
              </p>
            </div>
          </div>
        </div>
        <img 
          src="/images/6a34034a534a177bb2c50b74_Contemplative%20Profile%20in%20Color%20Gradient.webp" 
          loading="lazy" 
          sizes="(max-width: 1199px) 100vw, 1199px" 
          srcSet="/images/6a34034a534a177bb2c50b74_Contemplative%20Profile%20in%20Color%20Gradient-p-500.webp 500w, /images/6a34034a534a177bb2c50b74_Contemplative%20Profile%20in%20Color%20Gradient-p-800.webp 800w, /images/6a34034a534a177bb2c50b74_Contemplative%20Profile%20in%20Color%20Gradient.webp 1199w" 
          alt="Side profile of a person wearing sunglasses with a colorful blue and orange gradient background." 
          className="contact-hero-img" 
        />
        <div className="blend-color"></div>
        <div className="contact-hero-overlay"></div>
        <div className="space-10-small"></div>
      </div>

      <div className="main">
        {/* Contact Form Section */}
        <section className="section onyx">
          <div className="space-6-normal"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="contact-wrapper">
              <div className="max-width-24">
                <div className="font-2-medium white center">Find Us With Our Updated Contact Options</div>
              </div>
              <div className="space-3-medium"></div>

              <div className="contact-form-block w-form">
                <form 
                  id="email-form" 
                  name="email-form" 
                  data-name="Email Form" 
                  onSubmit={handleSubmit}
                  className="contact-form" 
                  data-wf-page-id="6a33fbf0f79e980e7ba7fe73" 
                  data-wf-element-id="0765ae0d-67bc-8cce-5f0e-12034b56e8d6"
                >
                  <div className="form-block-wrapper">
                    <div className="form-block">
                      <label htmlFor="name" className="form-name-text">Full Name*</label>
                      <input className="text-field w-input" maxLength="256" name="name" data-name="Name" placeholder="Enter your name" type="text" id="name" required />
                    </div>
                    <div className="form-block">
                      <label htmlFor="Email" className="form-name-text">Email*</label>
                      <input className="text-field w-input" maxLength="256" name="Email" data-name="Email" placeholder="Enter your email" type="email" id="Email" required />
                    </div>
                  </div>

                  <div className="form-block-wrapper">
                    <div className="form-block">
                      <label htmlFor="services" className="form-name-text">Services*</label>
                      <select id="services" name="services" data-name="Field" className="form-select w-select" required>
                        <option value="">Select one...</option>
                        <option value="Visual Communication">Visual Communication</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Branding">Branding</option>
                        <option value="Multimedia Production">Multimedia Production</option>
                        <option value="Print Media">Print Media</option>
                        <option value="Website Development">Website Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Data Analytics & Insights">Data Analytics & Insights</option>
                        <option value="AI Training & Workshops">AI Training & Workshops</option>
                        <option value="Custom AI Software Development">Custom AI Software Development</option>
                      </select>
                    </div>
                    <div className="form-block">
                      <label htmlFor="budget" className="form-name-text">Budget Range*</label>
                      <select id="budget" name="budget" data-name="Field" className="form-select w-select" required>
                        <option value="">Select one...</option>
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-block-wrapper">
                    <div className="form-block">
                      <label htmlFor="date" className="form-name-text">Project Date*</label>
                      <select id="date" name="date" data-name="Field" className="form-select w-select" required>
                        <option value="">Select one...</option>
                        <option value="ASAP (Within 1 Month)">ASAP (Within 1 Month)</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                    <div className="form-block">
                      <label htmlFor="location" className="form-name-text">Location*</label>
                      <select id="location" name="location" data-name="Field" className="form-select w-select" required>
                        <option value="">Select one...</option>
                        <option value="In-Office">In-Office</option>
                        <option value="On-Site (Local)">On-Site (Local)</option>
                        <option value="On-Site (Travel Required)">On-Site (Travel Required)</option>
                        <option value="Remote/Digital Only">Remote/Digital Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-rich-box">
                    <label htmlFor="message" className="form-name-text">Comment*</label>
                    <textarea placeholder="Write your message here..." maxLength="5000" id="message" name="message" data-name="Field 2" className="text-field message-area w-input" required></textarea>
                  </div>

                  <div className="submit-button-wrapper">
                    <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="Submit Now" />
                  </div>
                </form>

                <div className="success-message w-form-done" style={{ display: 'none' }}>
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail" style={{ display: 'none' }}>
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>

            </div>
          </div>
          <div className="space-6-normal"></div>
        </section>

        {/* FAQ Accordions Section */}
        <section data-wf-component-id="8200a477-3767-8364-6113-c88aa46f9614" data-wf-variant-state="base" className="section">
          <div className="space-10-small"></div>
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-header">
              <div className="faq-header">
                <div className="faq-heading-wrap left">
                  <h2 className="section-heading">Common</h2>
                </div>
                <div className="faq-heading-wrap right">
                  <h2 className="section-heading">questions</h2>
                </div>
                <div className="header-counter-wrap faq">
                  <div className="section-counter-text">(03)</div>
                </div>
              </div>
            </div>
            <div className="space-3-large"></div>
            <div className="faq-main">
              <div className="faq-card">
                <div className="faq-top">
                  <div className="faq-top-left">
                    <div className="font-1-extra-small white">01</div>
                    <div className="font-1-medium">What is Wizzibility and what services do you offer?</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="faq-arrow">
                    <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="faq-p-wrap">
                  <p className="faq-p">
                    We're an enterprise-ready, startup-friendly marketing and technology agency offering branding, performance marketing, web development, AI integrations, CRM solutions, content, and creative design — all under one roof.
                  </p>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-top">
                  <div className="faq-top-left">
                    <div className="font-1-extra-small white">02</div>
                    <div className="font-1-medium">How does Wizzibility use AI to enhance marketing performance?</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="faq-arrow">
                    <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="faq-p-wrap">
                  <p className="faq-p">
                    Our AI tools automate campaigns, generate intelligent insights, personalize user experiences, and boost overall efficiency — helping your brand grow smarter and faster.
                  </p>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-top">
                  <div className="faq-top-left">
                    <div className="font-1-extra-small white">03</div>
                    <div className="font-1-medium">Is Wizzibility suitable for startups as well as large businesses?</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="faq-arrow">
                    <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="faq-p-wrap">
                  <p className="faq-p">
                    Absolutely — our solutions are cost-effective for startups and robust enough to meet enterprise-level needs. We scale with you.
                  </p>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-top">
                  <div className="faq-top-left">
                    <div className="font-1-extra-small white">04</div>
                    <div className="font-1-medium">Can Wizzibility build my brand from scratch?</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="faq-arrow">
                    <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="faq-p-wrap">
                  <p className="faq-p">
                    Yes — from naming and logo design to narrative, visual identity, and launch campaigns, we handle the complete brand-building journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-10-small"></div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
