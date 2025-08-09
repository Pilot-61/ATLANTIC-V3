import React, { useState } from 'react';
import { Play, MessageSquare, Copy, Check, ExternalLink, Crown } from 'lucide-react';

const Connect: React.FC = () => {
  const [copiedFiveM, setCopiedFiveM] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const fivemCommand = "connect 7zq6gv";
  const discordLink = "https://discord.gg/DRF4qPmA";

  const copyToClipboard = (text: string, type: 'fivem' | 'discord') => {
    navigator.clipboard.writeText(text);
    if (type === 'fivem') {
      setCopiedFiveM(true);
      setTimeout(() => setCopiedFiveM(false), 2000);
    } else {
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
    }
  };

  return (
    <section id="connect" className="relative py-24 bg-gradient-to-b from-transparent to-red-900/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-yellow-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-black/80 to-red-900/40 rounded-3xl p-8 md:p-16 backdrop-blur-sm border border-red-500/30 shadow-2xl">
          <Crown className="w-20 h-20 text-yellow-500 mx-auto mb-8 animate-bounce" />
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Your Kingdom Awaits
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't miss the opportunity to join the best Moroccan roleplay experience on GTA V
          </p>

          {/* Connection Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* FiveM Connection */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl mx-auto mb-6">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect to Server</h3>
              <p className="text-gray-300 mb-6">
                Connect to Fivem server:
              </p>
              <br />
                <a
                  href="https://cfx.re/join/7zq6gv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span>Join Server</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            {/* Discord Connection */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Join Discord</h3>
              <p className="text-gray-300 mb-6">
                Connect with our community and get support on our Discord server:
              </p>
              
              {/* Removed Discord copy link, only button remains */}

              <a
                href={discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Open Discord</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://cfx.re/join/7zq6gv"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30 flex items-center space-x-3 min-w-[300px] justify-center"
            >
              <Play className="w-6 h-6" />
              <span>Start Playing Now</span>
            </a>
            
            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 min-w-[300px] text-center backdrop-blur-sm flex items-center justify-center space-x-3"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Discord & Support</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-red-900/30 to-yellow-900/30 rounded-2xl p-6 border border-red-500/20">
            <h4 className="text-xl font-bold text-white mb-4">Need Help?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <div>
                <h5 className="font-semibold text-red-400 mb-2">Installation Issues?</h5>
                <p className="text-sm">Our Discord support team is available 24/7</p>
              </div>
              <div>
                <h5 className="font-semibold text-yellow-400 mb-2">New to Roleplay?</h5>
                <p className="text-sm">Check our rules section and beginner guides</p>
              </div>
              <div>
                <h5 className="font-semibold text-red-400 mb-2">Technical Problems?</h5>
                <p className="text-sm">Visit our Discord #Need Help channel for assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;