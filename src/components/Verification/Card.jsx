import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="absolute left-1/2 w-full max-w-3xl px-4 z-10" style={{ transform: 'translateX(-50%) translateY(-52%)' }}>
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-5 shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default Card;
