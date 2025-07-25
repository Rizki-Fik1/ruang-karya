import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 flex flex-col">
      <Header />
      <HeroSection />
    </div>
  );
};

export default LandingPage;

