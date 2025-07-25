import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
    // atau navigate('/') untuk kembali ke halaman utama
  };

  return (
    <div 
      className="h-[60vh] relative"
      style={{ 
        background: 'linear-gradient(180deg, #5370FF 0%, #2445F0 100%)',
        borderBottomLeftRadius: '50px',
        borderBottomRightRadius: '50px'
      }}
    >
      {/* Cloud Images */}
      <div className="absolute top-20 left-0 w-60 h-32">
        <img src="/src/assets/images/sky-removebg-preview 3.png" alt="Cloud" className="w-full h-full" />
      </div>
      <div className="absolute top-44 left-0 w-40 h-26">
        <img src="/src/assets/images/sky-removebg-preview 6.png" alt="Cloud" className="w-full h-full" />
      </div>
      
      <div className="absolute top-20 right-0 w-48 h-32">
        <img src="/src/assets/images/sky-removebg-preview 4.png" alt="Cloud" className="w-full h-full" />
      </div>
      <div className="absolute top-40 right-0 w-65 h-28">
        <img src="/src/assets/images/sky-removebg-preview 5.png" alt="Cloud" className="w-full h-full" />
      </div>

      {/* Back Button */}
      <div className="absolute top-8 left-8 z-30">
        <button 
          onClick={handleBack}
          className="flex items-center space-x-2 text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 transition-colors z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Kembali</span>
        </button>
      </div>

      {/* Header Text */}
      <div className="text-center pt-20 relative z-0">
        <h1 className="text-3xl font-bold text-white mb-4">
          Oops... Satu tahap lagi, nih!
        </h1>
        <p className="text-white/90 text-md">
          Oke kalau niat Kamu udah serius, selesaikan<br />
          verifikasi identitas dulu ya.
        </p>
      </div>
    </div>
  );
};

export default Header;



