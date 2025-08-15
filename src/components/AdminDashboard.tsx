import React, { useState } from 'react';
import { Shield, Plus, Users, BarChart3, Settings, Send, Image, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Post from './Post';

const AdminDashboard: React.FC = () => {
  const { currentUser, posts, users, createPost } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState('');

  // Redirect if not admin
  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <section id="admin-dashboard" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-yellow-900/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-12 border border-red-500/30">
            <Shield className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Access Denied
            </h2>
            <p className="text-xl text-gray-300">
              You need admin privileges to access this dashboard.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      createPost(newPostContent, newPostImage || undefined);
      setNewPostContent('');
      setNewPostImage('');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'posts', label: 'Manage Posts', icon: <Edit className="w-5 h-5" /> },
    { id: 'users', label: 'Users', icon: <Users className="w-5 h-5" /> },
    { id: 'create', label: 'Create Post', icon: <Plus className="w-5 h-5" /> }
  ];

  const stats = [
    { label: 'Total Users', value: users.length, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Posts', value: posts.length, color: 'from-green-500 to-green-600' },
    { label: 'Total Likes', value: posts.reduce((total, post) => total + post.likes.length, 0), color: 'from-red-500 to-red-600' },
    { label: 'Admin Posts', value: posts.filter(post => post.author.role === 'admin').length, color: 'from-yellow-500 to-yellow-600' }
  ];

  return (
    <section id="admin-dashboard" className="relative py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-yellow-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(220,38,38,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(245,158,11,0.1),transparent)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Admin Dashboard
              </span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Manage your Atlantic RP community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-red-600 to-yellow-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-red-400" />
                  <span>Recent Activity</span>
                </h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                      <img
                        src={post.author.profilePicture}
                        alt={post.author.username}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-white font-medium">{post.author.username}</p>
                        <p className="text-gray-400 text-sm truncate">{post.content}</p>
                      </div>
                      <div className="text-red-400 text-sm">
                        {post.likes.length} likes
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Edit className="w-6 h-6 text-red-400" />
                  <span>Manage Posts ({posts.length})</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  Edit or delete posts from the community. You can manage all posts as an admin.
                </p>
              </div>

              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Users className="w-6 h-6 text-red-400" />
                <span>User Management ({users.length})</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/50 hover:border-red-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={user.profilePicture}
                        alt={user.username}
                        className="w-12 h-12 rounded-full object-cover border-2 border-red-500/30"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{user.username}</h4>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Role:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === 'admin' 
                            ? 'bg-gradient-to-r from-red-500 to-yellow-500 text-white'
                            : 'bg-gray-600 text-gray-200'
                        }`}>
                          {user.role}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Posts:</span>
                        <span className="text-white">{posts.filter(p => p.authorId === user.id).length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Joined:</span>
                        <span className="text-white text-sm">
                          {user.createdAt.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'create' && (
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Plus className="w-6 h-6 text-red-400" />
                <span>Create New Post</span>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Post Content
                  </label>
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none"
                    rows={6}
                    placeholder="Write your announcement or community update..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Image URL (Optional)
                  </label>
                  <div className="flex space-x-4">
                    <input
                      type="url"
                      value={newPostImage}
                      onChange={(e) => setNewPostImage(e.target.value)}
                      className="flex-1 p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                {newPostImage && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Image Preview
                    </label>
                    <img
                      src={newPostImage}
                      alt="Preview"
                      className="w-full max-w-md rounded-lg object-cover max-h-64 border border-gray-600/30"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                <div className="flex space-x-4">
                  <button
                    onClick={handleCreatePost}
                    disabled={!newPostContent.trim()}
                    className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    <span>Publish Post</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      setNewPostContent('');
                      setNewPostImage('');
                    }}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold text-white transition-all duration-300"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;