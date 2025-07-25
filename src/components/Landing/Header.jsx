import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 relative z-10">
      <div className="flex items-center space-x-2">
        <img src="/R-logo.png" alt="R" className="w-8 h-8" />
        <span className="text-white text-xl font-bold">RuangKarya.</span>
      </div>
      <nav className="flex space-x-8">
        <a href="#about" className="text-white hover:text-yellow-300 transition-colors">
          About Us
        </a>
        <a href="#faq" className="text-white hover:text-yellow-300 transition-colors">
          FAQ
        </a>
      </nav>
    </header>
  );
};

export default Header;