import React, { useState } from 'react';
import { Plus, Image, Send, Users, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Post from './Post';

const SocialFeed: React.FC = () => {
  const { currentUser, posts, createPost } = useAuth();
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState('');
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      createPost(newPostContent, newPostImage || undefined);
      setNewPostContent('');
      setNewPostImage('');
      setShowCreatePost(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleCreatePost();
    }
  };

  if (!currentUser) {
    return (
      <section id="social-feed" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-yellow-900/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-12 border border-red-500/30">
            <Users className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Join the Community
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Sign in to see posts from the Atlantic RP community and share your own experiences!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="social-feed" className="relative py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-yellow-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(220,38,38,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(245,158,11,0.1),transparent)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Community Feed
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay connected with the Atlantic RP community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              {posts.length}
            </div>
            <div className="text-gray-400 text-sm">Total Posts</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              {posts.reduce((total, post) => total + post.likes.length, 0)}
            </div>
            <div className="text-gray-400 text-sm">Total Likes</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 text-center col-span-2 md:col-span-1">
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Active</span>
            </div>
            <div className="text-gray-400 text-sm">Community Status</div>
          </div>
        </div>

        {/* Create Post Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={currentUser.profilePicture}
              alt={currentUser.username}
              className="w-12 h-12 rounded-full object-cover border-2 border-red-500/30"
            />
            <div className="flex-1">
              <button
                onClick={() => setShowCreatePost(true)}
                className="w-full text-left px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-400 hover:text-white hover:border-red-500/50 transition-all duration-300"
              >
                What's on your mind, {currentUser.username}?
              </button>
            </div>
          </div>

          {showCreatePost && (
            <div className="space-y-4">
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none"
                rows={4}
                placeholder="Share your Atlantic RP experience..."
                autoFocus
              />
              
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="url"
                    value={newPostImage}
                    onChange={(e) => setNewPostImage(e.target.value)}
                    className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                    placeholder="Add image URL (optional)"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={handleCreatePost}
                    disabled={!newPostContent.trim()}
                    className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 disabled:from-gray-600 disabled:to-gray-700 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>Post</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      setShowCreatePost(false);
                      setNewPostContent('');
                      setNewPostImage('');
                    }}
                    className="px-4 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold text-white transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>💡 Tip: Press Ctrl+Enter to post quickly</p>
              </div>
            </div>
          )}
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No posts yet</h3>
              <p className="text-gray-400">Be the first to share something with the community!</p>
            </div>
          ) : (
            posts.map((post) => (
              <Post key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;