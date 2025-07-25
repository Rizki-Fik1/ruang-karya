import React from 'react';

const StatsCard = () => {
  return (
    <div className="p-4 shadow-lg max-w-5xl w-full text-white rounded-lg"
          style={{ 
            background: '#5370FF',
            }}>

      <div className="flex items-center space-x-2 mb-3">
        {/* Colored circles */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-red-400 rounded-full"></div>
          <div className="w-12 h-12 bg-yellow-300 rounded-full -ml-5"></div>
          <div className="w-12 h-12 bg-green-400 rounded-full -ml-5"></div>
        </div>
        
        <div>
          <h3 className="text-md font-bold mb-2">
            Total 1.000+ Siswa Sudah Gabung.
          </h3>
          
          <p className="text-xs text-white/90">
            Selain membuat karya, kamu juga bisa bangun
            koneksi dengan siswa-siswa lain. Tunggu apa lagi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;



