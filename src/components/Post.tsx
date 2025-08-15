import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Edit, Trash2, Save, X } from 'lucide-react';
import { useAuth, Post as PostType } from '../contexts/AuthContext';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { currentUser, toggleLike, deletePost, updatePost } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const [editImage, setEditImage] = useState(post.image || '');
  const [showMenu, setShowMenu] = useState(false);

  const isLiked = currentUser ? post.likes.includes(currentUser.id) : false;
  const canEdit = currentUser && (currentUser.role === 'admin' || currentUser.id === post.authorId);

  const handleLike = () => {
    if (currentUser) {
      toggleLike(post.id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowMenu(false);
  };

  const handleSaveEdit = () => {
    updatePost(post.id, editContent, editImage || undefined);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditContent(post.content);
    setEditImage(post.image || '');
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(post.id);
    }
    setShowMenu(false);
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      return diffInMinutes < 1 ? 'Just now' : `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.author.profilePicture}
            alt={post.author.username}
            className="w-12 h-12 rounded-full object-cover border-2 border-red-500/30"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-white">{post.author.username}</h3>
              {post.author.role === 'admin' && (
                <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-xs rounded-full font-medium">
                  Admin
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm">{formatDate(post.createdAt)}</p>
          </div>
        </div>

        {canEdit && (
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>

            {showMenu && (
              <div className="absolute right-0 top-full mt-2 bg-gray-800/95 backdrop-blur-sm rounded-lg border border-gray-600/50 shadow-xl z-10 min-w-[120px]">
                <button
                  onClick={handleEdit}
                  className="w-full px-4 py-2 text-left text-gray-300 hover:text-white hover:bg-gray-700/50 flex items-center space-x-2 transition-colors duration-300"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full px-4 py-2 text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 flex items-center space-x-2 transition-colors duration-300"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Post Content */}
      {isEditing ? (
        <div className="space-y-4 mb-4">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none"
            rows={4}
            placeholder="What's on your mind?"
          />
          <input
            type="url"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
            placeholder="Image URL (optional)"
          />
          <div className="flex space-x-3">
            <button
              onClick={handleSaveEdit}
              className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button
              onClick={handleCancelEdit}
              className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-gray-200 mb-4 leading-relaxed whitespace-pre-wrap">{post.content}</p>
          
          {post.image && (
            <div className="mb-4">
              <img
                src={post.image}
                alt="Post content"
                className="w-full rounded-lg object-cover max-h-96 border border-gray-600/30"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          )}
        </>
      )}

      {/* Post Actions */}
      {!isEditing && (
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleLike}
              disabled={!currentUser}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                isLiked
                  ? 'text-red-400 bg-red-500/10 hover:bg-red-500/20'
                  : 'text-gray-400 hover:text-red-400 hover:bg-red-500/10'
              } ${!currentUser ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{post.likes.length}</span>
            </button>

            <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 px-3 py-2 rounded-lg transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Comment</span>
            </button>

            <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 px-3 py-2 rounded-lg transition-all duration-300">
              <Share2 className="w-5 h-5" />
              <span className="font-medium">Share</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;