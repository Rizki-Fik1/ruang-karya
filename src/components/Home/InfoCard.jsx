import React from 'react';
import { Icon } from '@iconify/react';

const InfoCard = () => {
  return (
    <div className="bg-yellow-400 rounded-lg p-6 text-black relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2">
          Pengen Karya Kamu Hasilin Uang Lebih?
        </h3>
        
        <div className="absolute top-4 right-4">
          <Icon icon="mdi:camera-outline" className="text-4xl opacity-50" />
        </div>
        
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
          Jelajah Event Yuk!
          <Icon icon="mdi:arrow-right" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default InfoCard;