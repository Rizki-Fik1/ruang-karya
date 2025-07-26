import React, { useState, useEffect } from 'react';

const RegisterHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      background: 'linear-gradient(135deg, #5370FF 0%, #2B43BA 100%)',
      heroText: (
        <>
          "Ide besar dimulai dari
          <br />
          hal kecil. RuangKarya
          <br />
          hadir jadi awal
          <br />
          perjalananmu."
        </>
      ),
      image: "/src/assets/images/register.png",
      imageAlt: "Person with camera"
    },
    {
      background: 'linear-gradient(135deg, #3153FF 0%, #768DFF 100%)',
      heroText: (
        <>
          "Ayo tampilkan karya mu
          <br />
          bersama kami"
        </>
      ),
      image: "/src/assets/images/siswi.png",
      imageAlt: "Person with laptop"
    },
    {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      heroText: (
        <>
          "Berkolaborasi dan
          <br />
          wujudkan impian
          <br />
          kreatifmu bersama"
        </>
      ),
      image: "/src/assets/images/siswa.png",
      imageAlt: "Creative person"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div 
      className={`p-4 sm:p-6 lg:p-8 shadow-lg w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-auto flex flex-col justify-between relative rounded-lg overflow-hidden transition-all duration-700 ease-in-out transform ${
        isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
      }`}
      style={{ 
        background: slides[currentSlide].background,
      }}
    >
      
      {/* Hero Text */}
      <div className={`z-10 transition-all duration-700 ease-in-out transform ${
        isTransitioning ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
      }`}>
        <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {slides[currentSlide].heroText}
        </h1>
      </div>

      {/* Image - Responsive positioning */}
      <div className={`absolute right-0 top-1/2 sm:top-[60%] lg:top-[280px] transform -translate-y-1/2 z-10 transition-all duration-700 ease-in-out ${
        isTransitioning ? 'translate-x-8 opacity-0 scale-90' : 'translate-x-0 opacity-100 scale-100'
      }`}>
        <img 
          src={slides[currentSlide].image}
          alt={slides[currentSlide].imageAlt}
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[370px] h-auto" 
        />
      </div>

      {/* Bottom Section */}
      <div className="z-10 mt-auto">
        {/* Navigation Dots */}
        <div className="flex space-x-1 sm:space-x-2 mb-4 sm:mb-6">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`w-4 h-2 sm:w-6 sm:h-3 rounded-md transition-all duration-500 transform ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 scale-100'
              }`}
            />
          ))}
        </div>

        {/* Login Button and Navigation Card */}
        <div 
          className="p-2 sm:p-3 rounded-xl sm:rounded-2xl"
          style={{ 
            background: '#101841', 
            borderRadius: 20, 
            backdropFilter: 'blur(25px)' 
          }}
        >
          {/* Login Button and Navigation */}
          <div className="flex items-center justify-between mb-6 sm:mb-10">
            <button className="bg-transparent text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors text-xs sm:text-sm lg:text-md font-medium">
              Login
            </button>
            <div className="flex space-x-2 sm:space-x-3">
              <button 
                onClick={prevSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-transparent rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 relative"
              >
                <img src="/src/assets/svg/Ellipse 23.svg" alt="Circle" className="absolute w-full h-full" />
                <img src="/src/assets/svg/back.svg" alt="Back" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-transparent rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 relative"
              >
                <img src="/src/assets/svg/Ellipse 23.svg" alt="Circle" className="absolute w-full h-full" />
                <img src="/src/assets/svg/next.svg" alt="Next" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10" />
              </button>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-white text-xs sm:text-sm lg:text-md leading-relaxed font-normal">
            Semua ini bukan tentang siapa yang <br className="hidden sm:block" />
            paling jago, tapi siapa yang berani <br className="hidden sm:block" />
            mulai dan berkolaborasi
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterHero;











