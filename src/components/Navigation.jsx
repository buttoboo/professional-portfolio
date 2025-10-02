import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isScrolled, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">LY</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Lee Yu Xuan</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 capitalize text-sm font-medium ${
                  activeSection === item
                    ? 'text-pink-500 bg-pink-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-lg capitalize text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;