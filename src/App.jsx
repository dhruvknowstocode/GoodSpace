import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Hotjar from './components/Hotjar';
import Integrations from './components/Integrations';
import './App.scss'
import FeaturesSection from './components/Features';
import CustomerTestimonials from './components/CustomerTestimonials';
import TrialSection from './components/TrialSection';

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <Hotjar />
      <FeaturesSection />
      <Integrations />
      <CustomerTestimonials />
      <TrialSection />
    </div>
  )
}

export default App
