import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Photography from '../components/Photography';
import Gallery from '../components/Gallery';
import WhyChoose from '../components/WhyChoose';
import Process from '../components/Process';
import Cinematic from '../components/Cinematic';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/shared/Footer';

import useMeta from '../hooks/useMeta';

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wizzibility.com/#organization",
    "name": "Wizzibility",
    "url": "https://wizzibility.com",
    "logo": "https://wizzibility.com/fav-icon.png",
    "sameAs": [
      "https://www.facebook.com/wizzibility",
      "https://www.instagram.com/wizzibility",
      "https://x.com/wizzibility"
    ],
    "founder": {
      "@type": "Person",
      "name": "Haripreeth"
    },
    "foundingDate": "2025-05-20",
    "email": "info@wizzibility.com",
    "telephone": "+91-9391763990"
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://wizzibility.com/#localbusiness",
    "name": "Wizzibility",
    "image": "https://wizzibility.com/images/6a356f5456ef1a53f0f6f826_7782b6bf6ea462330fdb471ee69d6f709461c3f2.webp",
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
    "@type": "WebSite",
    "@id": "https://wizzibility.com/#website",
    "url": "https://wizzibility.com",
    "name": "Wizzibility",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wizzibility.com/project?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Wizzibility and what services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An enterprise-ready, startup-friendly marketing and technology agency offering branding, performance marketing, web development, AI integrations, CRM solutions, content, and creative design — all under one roof."
        }
      },
      {
        "@type": "Question",
        "name": "How does Wizzibility use AI to enhance marketing performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI tools automate campaigns, generate intelligent insights, personalize user experiences, and boost efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "Is Wizzibility suitable for startups as well as large businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — cost-effective for startups and robust for enterprise needs."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Wizzibility specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Real estate, e-commerce, interior design, tech startups, construction, education, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Can Wizzibility build my brand from scratch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — from naming and logo design to narrative, visual identity, and launch campaigns."
        }
      }
    ]
  }
];

export default function Home() {
  useMeta({
    title: 'Wizzibility | Next-Gen Creative Tech Studio',
    description: "We're a next-gen creative tech studio blending design, marketing, and technology to build extraordinary digital experiences. Whether you're a startup, an enterprise, or a visionary brand, our AI-powered web design and integrated services help you stand out.",
    canonical: 'https://wizzibility.com/',
    keywords: 'creative tech studio, web design hyderabad, AI design agency, digital marketing, website development, branding agency',
    schema: homeSchema,
    og: {
      type: 'website',
      url: 'https://wizzibility.com/',
    }
  });

  return (
    <>
      <Hero />
      <main className="main" id="main-content" role="main">
        <Projects />
        <Services />
        <Photography />
        <Gallery />
        <WhyChoose />
        <Process />
        <Cinematic />
        <Team />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
