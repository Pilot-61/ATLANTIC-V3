import React, { useState } from 'react';
import { User, Edit, Save, X, Camera, Mail, Calendar, Crown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const UserProfile: React.FC = () => {
  const { currentUser, updateProfile, posts } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState(currentUser?.username || '');
  const [editProfilePicture, setEditProfilePicture] = useState(currentUser?.profilePicture || '');

  if (!currentUser) {
    return (
      <section id="user-profile" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-yellow-900/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-12 border border-red-500/30">
            <User className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Sign In Required
            </h2>
            <p className="text-xl text-gray-300">
              Please sign in to view and edit your profile.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const userPosts = posts.filter(post => post.authorId === currentUser.id);
  const totalLikes = userPosts.reduce((total, post) => total + post.likes.length, 0);

  const handleSaveProfile = () => {
    if (editUsername.trim().length >= 3) {
      updateProfile(editUsername, editProfilePicture || undefined);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditUsername(currentUser.username);
    setEditProfilePicture(currentUser.profilePicture);
    setIsEditing(false);
  };

  return (
    <section id="user-profile" className="relative py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-yellow-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(220,38,38,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(245,158,11,0.1),transparent)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              My Profile
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Manage your Atlantic RP profile
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={isEditing ? editProfilePicture : currentUser.profilePicture}
                    alt={currentUser.username}
                    className="w-32 h-32 rounded-full object-cover border-4 border-red-500/30 mx-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150';
                    }}
                  />
                  {currentUser.role === 'admin' && (
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        value={editUsername}
                        onChange={(e) => setEditUsername(e.target.value)}
                        className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                        minLength={3}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Profile Picture URL
                      </label>
                      <input
                        type="url"
                        value={editProfilePicture}
                        onChange={(e) => setEditProfilePicture(e.target.value)}
                        className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                        placeholder="https://example.com/photo.jpg"
                      />
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={handleSaveProfile}
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex-1 flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300"
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <h3 className="text-2xl font-bold text-white">{currentUser.username}</h3>
                      {currentUser.role === 'admin' && (
                        <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-xs rounded-full font-medium">
                          Admin
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{currentUser.email}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          Joined {currentUser.createdAt.toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsEditing(true)}
                      className="mt-6 flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <Edit className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stats and Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {userPosts.length}
                </div>
                <div className="text-gray-300 font-medium">Posts</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {totalLikes}
                </div>
                <div className="text-gray-300 font-medium">Total Likes</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {userPosts.length > 0 ? Math.round(totalLikes / userPosts.length * 10) / 10 : 0}
                </div>
                <div className="text-gray-300 font-medium">Avg. Likes</div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <User className="w-6 h-6 text-red-400" />
                <span>My Recent Posts</span>
              </h3>
              
              {userPosts.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Edit className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-300 mb-2">No posts yet</h4>
                  <p className="text-gray-400">Share your first post with the community!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {userPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="p-4 bg-gray-800/30 rounded-lg border border-gray-600/30">
                      <p className="text-gray-200 mb-2 line-clamp-2">{post.content}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{post.createdAt.toLocaleDateString()}</span>
                        <span>{post.likes.length} likes</span>
                      </div>
                    </div>
                  ))}
                  
                  {userPosts.length > 3 && (
                    <div className="text-center pt-4">
                      <p className="text-gray-400">
                        And {userPosts.length - 3} more posts...
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;