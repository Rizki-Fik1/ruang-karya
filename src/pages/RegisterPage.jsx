import React from 'react';
import RegisterForm from '../components/Register/RegisterForm';
import RegisterHero from '../components/Register/RegisterHero';
import StatsCard from '../components/Register/StatsCard';

const RegisterPage = () => {
  return (
    <div 
      className="min-h-screen flex justify-center items-center p-4"
      style={{
        background: '#fff',
        overflow: 'hidden'
      }}
    >
      <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-4 lg:gap-5">
        {/* Left Side - Form and Stats */}
        <div className="flex-1 flex flex-col items-center justify-center relative px-2 order-2 lg:order-1">
          <RegisterForm />
          <div className="mt-4 w-full">
            <StatsCard />
          </div>
        </div>

        {/* Right Side - Hero */}
        <div className="flex-1 relative order-1 lg:order-2 min-h-[400px] lg:min-h-auto">
          <RegisterHero />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;


