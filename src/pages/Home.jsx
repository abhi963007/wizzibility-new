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
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/shared/Footer';

export default function Home() {
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
        <Pricing />
        <Team />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
