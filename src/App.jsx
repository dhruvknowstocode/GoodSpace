import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Hotjar from './components/Hotjar';
import Integrations from './components/Integrations';
import FeaturesSection from './components/Features';
import CustomerTestimonials from './components/CustomerTestimonials';
import TrialSection from './components/TrialSection';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <Hotjar />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="integrations">
        <Integrations />
      </section>
      <section id="blog">
        <CustomerTestimonials />
      </section>
      <section id="pricing">
        <TrialSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
