import React from 'react';
import { Crown, Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollY: number;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen, scrollY }) => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 100 
        ? 'bg-black/90 backdrop-blur-md border-b border-red-500/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-gradient-to-r from-red-600 to-yellow-500">
              <img src="/images.jpg" alt="Atlantic RP Logo" className="w-10 h-10 object-cover" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              ATLANTIC RP
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('features')} className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('rules')} className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Rules
              </button>
              <button onClick={() => scrollToSection('community')} className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Community
              </button>
              <button onClick={() => scrollToSection('connect')} className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Connect
              </button>
            </div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-red-400 transition-colors duration-300 p-2 rounded-lg hover:bg-red-500/10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-500/20 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-white hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-white hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300">
              Features
            </button>
            <button onClick={() => scrollToSection('rules')} className="block w-full text-left px-3 py-2 text-white hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300">
              Rules
            </button>
            <button onClick={() => scrollToSection('community')} className="block w-full text-left px-3 py-2 text-white hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300">
              Community
            </button>
            <button onClick={() => scrollToSection('connect')} className="block w-full text-left px-3 py-2 text-white hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300">
              Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;