import React from 'react';
import { Crown, Users, Calendar, Trophy, MessageSquare, Star } from 'lucide-react';

const Community: React.FC = () => {
  const communityFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Active Community",
      description: "Join over 500 passionate Moroccan players",
      stat: "500+",
      color: "from-blue-500 to-red-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Weekly Events",
      description: "Participate in exclusive community events",
      stat: "Weekly",
      color: "from-green-500 to-yellow-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitions",
      description: "Compete in tournaments and challenges",
      stat: "Monthly",
      color: "from-yellow-500 to-red-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Get help anytime from our dedicated staff",
      stat: "24/7",
      color: "from-purple-500 to-red-500"
    }
  ];

  const benefits = [
    "Simple and fast installation",
    "24/7 technical support",
    "Weekly exclusive events",
    "Active Discord community",
    "Regular content updates",
    "Professional moderation team"
  ];

  return (
    <section id="community" className="relative py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-yellow-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(220,38,38,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(245,158,11,0.1),transparent)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              Join Our Community
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            A passionate community of Moroccan players awaits you
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 text-center"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-red-400 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                {feature.stat}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

  {/* Main Community Section removed as requested */}

        {/* Statistics */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-12 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            Community Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Active Members</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Events Hosted</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Support Available</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Server Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;