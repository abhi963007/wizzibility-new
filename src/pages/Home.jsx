import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
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

export default function Home() {
  useMeta(
    'Wizzibility | Next-Gen Creative Tech Studio',
    "We're a next-gen creative tech studio blending design, marketing, and technology to build extraordinary digital experiences. Whether you're a startup, an enterprise, or a visionary brand, our AI-powered web design and integrated services help you stand out."
  );

  return (
    <>
      <Hero />
      <div className="main">
        <About />
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
      </div>
    </>
  );
}
