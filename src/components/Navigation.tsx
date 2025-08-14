import React from 'react';
import { Crown, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'rules', label: 'Rules' },
  { id: 'community', label: 'Community' },
  { id: 'connect', label: 'Connect' },
];

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollY: number;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollY,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 100 
        ? 'bg-black/90 backdrop-blur-md border-b border-red-500/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
            tabIndex={0}
            aria-label="Go to Home"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-gradient-to-r from-red-600 to-yellow-500">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Atlantic RP Logo" className="w-10 h-10 object-cover" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              ATLANTIC RP
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`relative text-white font-medium transition-colors duration-300 px-3 py-2 rounded-lg
                    ${currentPage === link.id ? 'after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-yellow-500 after:rounded-full after:transition-all after:duration-300 text-yellow-400' : 'hover:text-yellow-400'}
                  `}
                  style={{ minWidth: 48, minHeight: 48 }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden flex items-center justify-center text-white hover:text-yellow-400 transition-colors duration-300 rounded-lg hover:bg-red-500/10"
  style={{ minWidth: 48, minHeight: 48, width: 48, height: 48 }}
  aria-label="Toggle menu"
  type="button"
>
  {isMenuOpen
    ? <X className="w-7 h-7 pointer-events-none" />
    : <Menu className="w-7 h-7 pointer-events-none" />}
</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-500/20 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 text-white font-medium rounded-lg transition-all duration-300
                  ${currentPage === link.id ? 'border-l-4 border-yellow-400 text-yellow-400 bg-black/70' : 'hover:text-yellow-400 hover:bg-black/60'}
                `}
                style={{ minWidth: 48, minHeight: 48 }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;