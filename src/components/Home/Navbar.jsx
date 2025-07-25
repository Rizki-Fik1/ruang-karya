import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#5370FF' }} className="px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Icon icon="mdi:play-circle" className="text-white text-2xl mr-2" />
          <span className="text-white font-bold text-xl">RuangKarya.</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Telusuri Video..."
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none"
            />
            <Icon 
              icon="mdi:magnify" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
            <Icon icon="mdi:compass" className="mr-2" />
            Jelajah
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center">
            <Icon icon="mdi:plus" className="mr-2" />
            Buat Karya
          </button>
          <Icon icon="mdi:bell" className="text-white text-xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;