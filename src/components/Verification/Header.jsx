import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div 
      className="h-[50vh] sm:h-[55vh] lg:h-[60vh] relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #5370FF 0%, #2445F0 100%)',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px'
      }}
    >
      {/* Cloud Images - Responsive positioning */}
      <div className="absolute top-10 sm:top-16 lg:top-20 left-0 w-32 sm:w-48 lg:w-60 h-16 sm:h-24 lg:h-32">
        <img src="/src/assets/images/sky-removebg-preview 3.png" alt="Cloud" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-24 sm:top-36 lg:top-44 left-0 w-24 sm:w-32 lg:w-40 h-16 sm:h-20 lg:h-28">
        <img src="/src/assets/images/sky-removebg-preview 6.png" alt="Cloud" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute top-10 sm:top-16 lg:top-20 right-0 w-24 sm:w-40 lg:w-48 h-16 sm:h-24 lg:h-32">
        <img src="/src/assets/images/sky-removebg-preview 4.png" alt="Cloud" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 sm:top-32 lg:top-40 right-0 w-14 sm:w-14 md:w-16 lg:w-28 h-16 sm:h-22 lg:h-28">
        <img src="/src/assets/images/sky-removebg-preview 5.png" alt="Cloud" className="w-full h-full object-contain" />
      </div>

      {/* Back Button - Responsive */}
      <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 z-30">
        <button 
          onClick={handleBack}
          className="flex items-center space-x-1 sm:space-x-2 text-white border border-white/30 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full hover:bg-white/10 transition-colors z-10 text-xs sm:text-sm lg:text-base"
        >
          <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="hidden sm:inline">Kembali</span>
        </button>
      </div>

      {/* Header Text - Responsive */}
      <div className="text-center pt-16 sm:pt-16 lg:pt-20 relative z-0 px-4">
        <h1 className="text-md sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
          Oops... Satu tahap lagi, nih!
        </h1>
        <p className="text-white/90 text-xs sm:text-base lg:text-lg leading-relaxed">
          Oke kalau niat Kamu udah serius, selesaikan<br className="hidden sm:block" />
          verifikasi identitas dulu ya.
        </p>
      </div>
    </div>
  );
};

export default Header;





