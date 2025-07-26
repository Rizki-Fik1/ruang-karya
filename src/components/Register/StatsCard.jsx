import React from 'react';

const StatsCard = () => {
  return (
    <div className="p-3 sm:p-4 shadow-lg w-full text-white rounded-lg"
          style={{ 
            background: '#5370FF',
            }}>

      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2 sm:mb-3">
        {/* Colored circles */}
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-400 rounded-full"></div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-300 rounded-full -ml-3 sm:-ml-4 lg:-ml-5"></div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-400 rounded-full -ml-3 sm:-ml-4 lg:-ml-5"></div>
        </div>
        
        <div className="text-center sm:text-left w-full sm:w-auto">
          <h3 className="text-sm sm:text-md font-bold mb-1 sm:mb-2">
            Total 1.000+ Siswa Sudah Gabung.
          </h3>
          
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            Selain membuat karya, kamu juga bisa bangun
            <br className="hidden sm:block" />
            koneksi dengan siswa-siswa lain. Tunggu apa lagi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;




