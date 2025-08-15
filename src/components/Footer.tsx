import React from 'react';
import { Crown, MessageSquare, Users, Shield, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Features', id: 'features' },
  { name: 'Rules', id: 'rules' },
  { name: 'Community', id: 'community' },
  { name: 'Connect', id: 'connect' }
];

const socialLinks = [
  {
    name: 'Discord',
    href: 'https://discord.gg/DRF4qPmA',
    icon: <MessageSquare className="w-5 h-5" />,
    color: 'hover:text-blue-400'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@moroccanrp',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.236 3.5 12 3.5 12 3.5s-7.236 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.336 0 12 0 12s0 3.664.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.764 20.5 12 20.5 12 20.5s7.236 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.664 24 12 24 12s0-3.664-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    ),
    color: 'hover:text-red-500'
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@atlanticrpv3',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M12.004 2c.001 2.21 1.792 4.001 4.001 4.001.001 0 .001 0 .001 0v2.001c-1.104 0-2-.896-2-2V2h-2.002v12.001c0 2.209-1.792 4.001-4.001 4.001s-4.001-1.792-4.001-4.001c0-2.209 1.792-4.001 4.001-4.001.001 0 .001 0 .001 0V8.001c-3.313 0-6.001 2.687-6.001 6.001s2.687 6.001 6.001 6.001c3.313 0 6.001-2.687 6.001-6.001V2h-2.001z"/></svg>
    ),
    color: 'hover:text-black'
  }
];

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/90 border-t border-red-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Atlantic RP Logo" className="w-10 h-10 object-cover" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                    ATLANTIC RP
                  </span>
                  <p className="text-gray-400 text-sm">Moroccan Roleplay Server</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Experience the most authentic Moroccan roleplay server on GTA V. 
                Join our community and live a royal adventure in a 100% Moroccan environment.
              </p>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 transform hover:scale-110 ${link.color} border border-gray-700/50 hover:border-red-500/50 group`}
                  >
                    <div className="flex items-center space-x-2">
                      {link.icon}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Users className="w-5 h-5 text-red-400" />
                <span>Quick Links</span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => setCurrentPage(link.id)}
                      className={`relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium px-3 py-2 rounded-lg
                        ${currentPage === link.id ? 'after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-yellow-500 after:rounded-full after:transition-all after:duration-300 text-yellow-400' : ''}
                      `}
                      style={{ minWidth: 48, minHeight: 48 }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Server Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span>Server Info</span>
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                  <h4 className="text-red-400 font-semibold mb-2">FiveM Connect</h4>
                  <code className="text-gray-300 text-sm font-mono">connect 7zq6gv</code>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                  <h4 className="text-yellow-400 font-semibold mb-2">Server Status</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">Online - 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {currentYear} Atlantic RP. All rights reserved.</p>
              <p className="text-sm mt-1">The best Moroccan roleplay server on GTA V</p>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p className="text-sm">Made with ❤️ for the Moroccan community</p>
              <p className="text-xs mt-1">Not affiliated with Rockstar Games or Take-Two Interactive</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;