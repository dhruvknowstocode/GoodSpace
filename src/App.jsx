import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Hotjar from './components/Hotjar';
import './App.scss'
import FeaturesSection from './components/Features';

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <Hotjar />
      <FeaturesSection />
    </div>
  )
}

export default App
