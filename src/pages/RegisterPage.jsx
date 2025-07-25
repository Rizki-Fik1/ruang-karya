import React from 'react';
import RegisterForm from '../components/Register/RegisterForm';
import RegisterHero from '../components/Register/RegisterHero';
import StatsCard from '../components/Register/StatsCard';

const RegisterPage = () => {
  return (
    <div 
      className="min-h-screen flex justify-center items-center"
      style={{
        background: '#FFFF',
        overflow: 'hidden'
      }}
    >
      <div className="flex max-w-7xl w-full gap-5">
        {/* Left Side - Form and Stats */}
        <div className="flex-1 flex flex-col items-center justify-center relative px-2">
          <RegisterForm />
          <div className="mt-4">
            <StatsCard />
          </div>
        </div>

        {/* Right Side - Hero */}
        <div className="flex-1 relative">
          <RegisterHero />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

