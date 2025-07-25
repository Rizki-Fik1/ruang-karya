import React from 'react';

const Bottom = ({ currentStep }) => {
  const renderProgressDot = (stepNumber) => {
    const isActive = stepNumber <= currentStep;
    const isCompleted = stepNumber < currentStep;
    
    if (isActive) {
      return (
        <div className="w-4 h-4 rounded-full" style={{ background: '#405DF2' }}></div>
      );
    } else {
      return (
        <div className="w-4 h-4 rounded-full border-2 bg-white" style={{ borderColor: '#405DF2' }}></div>
      );
    }
  };

  const renderProgressLine = (lineNumber) => {
    const isActive = lineNumber < currentStep;
    
    return (
      <div 
        className="w-12 h-1 rounded-full" 
        style={{ background: isActive ? '#405DF2' : '#E5E7EB' }}
      ></div>
    );
  };

  return (
    <div className="h-1/2 bg-white relative">
      {/* Film Clapperboards */}
      <div className="absolute top-3.5 left-0">
         <img src="/src/assets/images/takevid-removebg-preview 2.png" alt="Vid " className="w-3/4 h-3/4" />
      </div>
      
      <div className="absolute top-3.5 right-0">
        <img src="/src/assets/images/takevid-removebg-preview 3.png" alt="Vid " className="w-3/4 h-3/4 ml-auto" />
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center items-center space-x-2 absolute -bottom-64 left-1/2 transform -translate-x-1/2">
        {/* Step 1 */}
        {renderProgressDot(1)}
        
        {/* Line 1 */}
        {renderProgressLine(1)}
        
        {/* Step 2 */}
        {renderProgressDot(2)}
        
        {/* Line 2 */}
        {renderProgressLine(2)}
        
        {/* Step 3 */}
        {renderProgressDot(3)}
      </div>
    </div>
  );
};

export default Bottom;



