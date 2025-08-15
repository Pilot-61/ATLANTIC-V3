import React from 'react';
import { Crown, Users, Shield, Zap, Globe, Play, Car, Heart, Gamepad2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Unique Royal System",
      description: "Experience a royal adventure with our class and hierarchy system inspired by Morocco",
      color: "from-yellow-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Active Community",
      description: "Join over 500 active players in our premium Moroccan server",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Anti-Cheat",
      description: "Maximum protection against cheaters with our cutting-edge security system",
      color: "from-blue-500 to-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimal Performance",
      description: "High-performance servers ensuring smooth gameplay 24/7",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Moroccan Culture",
      description: "Complete immersion in Moroccan culture with authentic events",
      color: "from-green-500 to-red-500"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Exclusive Content",
      description: "Vehicles, clothing, and locations inspired by Moroccan heritage",
      color: "from-red-500 to-yellow-500"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Custom Vehicles",
      description: "Exclusive Moroccan-themed vehicles and modifications",
      color: "from-purple-500 to-red-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Realistic Healthcare",
      description: "Advanced medical system with realistic injury mechanics",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Immersive Gameplay",
      description: "Deep roleplay mechanics that bring your character to life",
      color: "from-indigo-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black/50 to-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-yellow-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(220,38,38,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.1),transparent)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Why Choose Atlantic RP?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover what makes Atlantic RP the best Moroccan roleplay server
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`mb-6 text-red-500 group-hover:bg-gradient-to-r group-hover:${feature.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 transform group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-red-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-red-500/30">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              Experience the Difference
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of players who have already discovered the magic of Atlantic RP
            </p>
            <button 
              onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;