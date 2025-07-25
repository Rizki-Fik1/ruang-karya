import React from 'react';
import { Icon } from '@iconify/react';

const Sidebar = () => {
  const menuItems = [
    { icon: 'mdi:home', label: 'Home', active: true },
    { icon: 'mdi:account-group', label: 'Mengikuti' },
    { icon: 'mdi:heart', label: 'Join Group' },
    { icon: 'mdi:bookmark', label: 'Disimpan' },
  ];

  const channelItems = [
    { icon: 'mdi:chart-line', label: 'Statistik' },
    { icon: 'mdi:account', label: 'Member' },
    { icon: 'mdi:video', label: 'Karya' },
  ];

  const privateItems = [
    { icon: 'mdi:cog', label: 'Setelan' },
    { icon: 'mdi:history', label: 'Histori' },
  ];

  return (
    <div style={{ backgroundColor: '#5370FF' }} className="w-64 h-screen p-4 text-white fixed left-0 top-0 overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <Icon icon="mdi:play-circle" className="text-white text-2xl mr-2" />
        <span className="text-white font-bold text-xl">RuangKarya.</span>
      </div>

      {/* User Profile */}
      <div className="flex items-center mb-6 p-3 bg-blue-600 rounded-lg">
        <img 
          src="/api/placeholder/40/40" 
          alt="Profile" 
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <div className="font-semibold">Muh. Putra</div>
          <div className="text-sm opacity-75">SMKN 8 Semarang</div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="mb-6">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer ${
              item.active ? 'bg-blue-600' : 'hover:bg-blue-600'
            }`}
          >
            <Icon icon={item.icon} className="mr-3" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Channel Section */}
      <div className="mb-6">
        <div className="text-sm opacity-75 mb-3">Channel</div>
        {channelItems.map((item, index) => (
          <div key={index} className="flex items-center p-3 rounded-lg mb-2 cursor-pointer hover:bg-blue-600">
            <Icon icon={item.icon} className="mr-3" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Private Section */}
      <div>
        <div className="text-sm opacity-75 mb-3">Private</div>
        {privateItems.map((item, index) => (
          <div key={index} className="flex items-center p-3 rounded-lg mb-2 cursor-pointer hover:bg-blue-600">
            <Icon icon={item.icon} className="mr-3" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
