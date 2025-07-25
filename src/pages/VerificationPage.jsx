import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from '../components/Verification/Header';
import Footer from '../components/Verification/Bottom';
import Card from '../components/Verification/Card';
import Step1 from '../components/Verification/steps/Step1';
import Step2 from '../components/Verification/steps/Step2';
import Step3 from '../components/Verification/steps/Step3';

const VerificationPage = () => {
  const location = useLocation();
  
  const getCurrentStep = () => {
    if (location.pathname.includes('step-1')) return 1;
    if (location.pathname.includes('step-2')) return 2;
    if (location.pathname.includes('step-3')) return 3;
    return 1;
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      <Footer currentStep={getCurrentStep()} />
      <Card>
        <Routes>
          <Route path="/" element={<Navigate to="step-1" replace />} />
          <Route path="step-1" element={<Step1 />} />
          <Route path="step-2" element={<Step2 />} />
          <Route path="step-3" element={<Step3 />} />
        </Routes>
      </Card>
    </div>
  );
};

export default VerificationPage;




