import React, { useState } from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import FaqItem from '../components/shared/FaqItem';

import useMeta from '../hooks/useMeta';

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://wizzibility.com/contact#contactpage",
    "name": "Contact Us | Wizzibility",
    "description": "Get in touch with Wizzibility. Call +91-9391763990, email info@wizzibility.com, or visit us in Hyderabad to start your next creative project.",
    "publisher": {
      "@type": "Organization",
      "name": "Wizzibility",
      "url": "https://wizzibility.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://wizzibility.com/contact#localbusiness",
    "name": "Wizzibility",
    "image": "https://wizzibility.com/images/contact/6a356f5456ef1a53f0f6f826_7782b6bf6ea462330fdb471ee69d6f709461c3f2.webp",
    "telephone": "+91-9391763990",
    "email": "info@wizzibility.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, 2/91/20, Kondapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4556572,
      "longitude": 78.3650841
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
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
        "name": "Contact",
        "item": "https://wizzibility.com/contact"
      }
    ]
  }
];

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Contact() {
  useMeta({
    title: 'Contact Us | Wizzibility',
    description: 'Get in touch with Wizzibility. Call +91-9391763990, email info@wizzibility.com, or visit us in Hyderabad to start your next creative project.',
    canonical: 'https://wizzibility.com/contact',
    keywords: 'contact us, wizzibility phone number, email wizzibility, office address hyderabad',
    schema: contactSchema,
    og: {
      type: 'website',
      url: 'https://wizzibility.com/contact'
    }
  });

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      number: '01',
      question: 'What is Wizzibility and what services do you offer?',
      answer: "We're an enterprise-ready, startup-friendly marketing and technology agency offering branding, performance marketing, web development, AI integrations, CRM solutions, content, and creative design — all under one roof.",
    },
    {
      number: '02',
      question: 'How does Wizzibility use AI to enhance marketing performance?',
      answer: 'Our AI tools automate campaigns, generate intelligent insights, personalize user experiences, and boost overall efficiency — helping your brand grow smarter and faster.',
    },
    {
      number: '03',
      question: 'Is Wizzibility suitable for startups as well as large businesses?',
      answer: 'Absolutely — our solutions are cost-effective for startups and robust enough to meet enterprise-level needs. We scale with you.',
    },
    {
      number: '04',
      question: 'Can Wizzibility build my brand from scratch?',
      answer: 'Yes — from naming and logo design to narrative, visual identity, and launch campaigns, we handle the complete brand-building journey.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDone = document.querySelector('.w-form-done');
    const formFail = document.querySelector('.w-form-fail');
    const form = document.querySelector('.contact-form');
    try {
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
          <div className="contact-hero" style={{ paddingTop: 'clamp(5rem, 15vw, 15rem)' }}>
            <div className="contact-hero-header">
              <div className="hero-title-wrapper">
                <h1 className="hero-heading">
                  Contact <span className="heading-hightlight" style={{ color: '#ffd84d', opacity: 1, display: 'inline-block' }}>Us</span>
                </h1>
              </div>
            </div>
            <div className="contact-hero-top">
              <p className="hero-p contact">
                Discover our new and improved ways to get in touch with us. We're here to help you start your next big project.
              </p>
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="contact-hero-img"
          style={{ transform: 'none' }}
        >
          <source src="/video/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="blend-color"></div>
        <div className="contact-hero-overlay"></div>
        <div className="space-10-small"></div>
      </div>

      <main className="main" id="main-content" role="main">
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

        {/* FAQ Accordion Section */}
        <section className="section">
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
              </div>
            </div>
            <div className="space-3-large"></div>
            <div className="faq-main">
              {faqs.map((faq, idx) => (
                <FaqItem
                  key={idx}
                  number={faq.number}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === idx}
                  onMouseEnter={() => setOpenFaq(idx)}
                  onMouseLeave={() => setOpenFaq(null)}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
          <div className="space-10-small"></div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
