import React from 'react';
import { Play, ChevronRight, Users, Clock, Briefcase, Zap } from 'lucide-react';

const Hero: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, number: "500+", label: "Active Players" },
    { icon: <Clock className="w-5 h-5" />, number: "24/7", label: "Server Uptime" },
    { icon: <Briefcase className="w-5 h-5" />, number: "50+", label: "Unique Jobs" },
    { icon: <Zap className="w-5 h-5" />, number: "99.9%", label: "Performance" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Animated Particles */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-500 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-50 animation-delay-2000"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-gradient-x bg-300% font-extrabold">
              ATLANTIC RP
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            Experience the most authentic Moroccan roleplay server on GTA V.
            <br />
            <span className="text-yellow-400">Live a royal experience in a 100% Moroccan environment.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-500">
          <button
            onClick={() => setCurrentPage('connect')}
            className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30 flex items-center space-x-3 min-w-[250px] justify-center"
          >
            <Play className="w-6 h-6" />
            <span>Join Now</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            onClick={() => setCurrentPage('features')}
            className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 min-w-[250px] backdrop-blur-sm"
          >
            Discover More
          </button>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up animation-delay-1000">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
              <div className="flex items-center justify-center mb-3 text-yellow-500 group-hover:text-red-400 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;