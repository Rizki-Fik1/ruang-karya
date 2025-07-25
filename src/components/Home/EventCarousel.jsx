import React, { useState } from 'react';

const EventCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "POPULAR X TOGETHER",
      subtitle: "COMING SOON.",
      description: "UPCOMING EVENT!",
      background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)"
    }
  ];

  return (
    <div className="relative">
      <div 
        className="rounded-lg p-8 text-white relative overflow-hidden"
        style={{ 
          background: slides[currentSlide].background,
          minHeight: '300px'
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-4 left-4 text-6xl">✨</div>
          <div className="absolute bottom-4 right-4 text-4xl">🎬</div>
        </div>

        <div className="relative z-10">
          <div className="mb-4">
            <span className="text-sm font-semibold">Event</span>
            <span className="ml-2 font-bold text-xl">Menarik</span>
          </div>
          
          <div className="text-center">
            <div className="text-lg mb-2">{slides[currentSlide].title}</div>
            <div className="text-4xl font-bold mb-4">{slides[currentSlide].subtitle}</div>
            <div className="text-sm">{slides[currentSlide].description}</div>
          </div>

          <button className="absolute bottom-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
            Kunjungi
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
          <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;