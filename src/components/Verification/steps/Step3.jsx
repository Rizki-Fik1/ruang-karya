import React, { useState, useEffect } from 'react';

const Step3 = () => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  return (
    <div className="text-center space-y-6 sm:space-y-8 py-16 sm:py-20 lg:py-28 px-4">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
          Sedang <span className="text-blue-600">Menyiapkan</span> Akun
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Proses ini mungkin membutuhkan waktu,<br />
          harap tunggu sebentar.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        {/* Progress Bar Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Play Icon */}
          <img src="/src/assets/svg/line-md_play-filled.svg" alt="Play" className="w-3 h-3 sm:w-4 sm:h-4" />
          
          {/* Pause Icon */}
          <img src="/src/assets/svg/material-symbols_pause-rounded.svg" alt="Pause" className="w-3 h-3 sm:w-4 sm:h-4" />

          {/* Progress Bar */}
          <div className="w-48 sm:w-64 lg:w-80 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-100 ease-out"
              style={{ 
                width: `${progress}%`,
                background: '#5370FF'
              }}
            />
          </div>
        </div>
        
        {/* Progress Percentage */}
        <div>
          <span className="text-sm font-medium text-gray-700">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Step3;







