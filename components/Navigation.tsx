import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavigationProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPath, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('/')}>
             <img 
               src="https://lh3.googleusercontent.com/d/1QEbg3877zAlGzgc22X7x8av5nOQAGcY4" 
               alt="Talen Logo" 
               className="h-16 w-auto object-contain"
             />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {NAV_ITEMS.map((item: NavItem) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md ${
                  currentPath === item.path
                    ? 'text-primary border-b-2 border-secondary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="tel:0912507007" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Phone size={18} />
              <span>اتصل بنا</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary-dark p-2 focus:outline-none"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item: NavItem) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-right px-3 py-4 rounded-md text-base font-medium ${
                   currentPath === item.path
                    ? 'bg-green-50 text-primary font-bold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};