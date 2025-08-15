import React, { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Rules from './components/Rules';
import Community from './components/Community';
import Connect from './components/Connect';
import SocialFeed from './components/SocialFeed';
import AdminDashboard from './components/AdminDashboard';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('nav')) {
          setIsMenuOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Render the correct page
  let PageComponent = null;
  if (currentPage === 'home') PageComponent = <Hero setCurrentPage={setCurrentPage} />;
  if (currentPage === 'features') PageComponent = <Features />;
  if (currentPage === 'rules') PageComponent = <Rules />;
  if (currentPage === 'community') PageComponent = <Community />;
  if (currentPage === 'connect') PageComponent = <Connect />;
  if (currentPage === 'social-feed') PageComponent = <SocialFeed />;
  if (currentPage === 'admin-dashboard') PageComponent = <AdminDashboard />;
  if (currentPage === 'user-profile') PageComponent = <UserProfile />;

  return (
    <AuthProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src={`${import.meta.env.BASE_URL}BG%20-%20Made%20with%20Clipchamp.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-yellow-900/10 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent)] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navigation
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            scrollY={scrollY}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}
          />
          <div className="transition-all duration-300">
            {PageComponent}
          </div>
          <Footer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        {/* Auth Modals */}
        {showLogin && (
          <Login
            onSwitchToRegister={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
            onClose={() => setShowLogin(false)}
          />
        )}
        
        {showRegister && (
          <Register
            onSwitchToLogin={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
            onClose={() => setShowRegister(false)}
          />
        )}

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
          .bg-300\% {
            background-size: 300% 300%;
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          html {
            scroll-behavior: smooth;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
          }
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #dc2626, #eab308);
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #b91c1c, #d97706);
          }
        `}</style>
      </div>
    </AuthProvider>
  );
};

export default App;