import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex-1 flex flex-col justify-center items-center text-center px-6 relative">
      {/* Camera Image - Left */}
      <img 
        src="/camera.png" 
        alt="Camera" 
        className="absolute left-12 top-1/2 transform -translate-y-1/2 w-32 h-auto z-10"
      />
      
      {/* Clapperboard Image - Right */}
      <img 
        src="/clip.png" 
        alt="Clapperboard" 
        className="absolute right-12 top-1/2 transform -translate-y-1/2 w-32 h-auto z-10"
      />

      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          TUNJUKAN <span className="text-yellow-300">BAKATMU</span>
          <br />
          BANGUN MASA DEPAN
        </h1>
        
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          "Bayangkan jika video hasil kerja tim kamu bisa viral, dan 
          bahkan mengundang tawaran kolaborasi dan juga 
          freelance dari pihak atau sekolah lain."
        </p>
        
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full text-lg transition-colors">
          Mulai Sekarang
        </button>
      </div>
    </section>
  );
};

export default HeroSection;