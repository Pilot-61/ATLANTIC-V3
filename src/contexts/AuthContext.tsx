import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface Post {
  id: string;
  authorId: string;
  author: User;
  content: string;
  image?: string;
  createdAt: Date;
  likes: string[]; // Array of user IDs who liked the post
}

interface AuthContextType {
  currentUser: User | null;
  users: User[];
  posts: Post[];
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string, profilePicture?: string) => Promise<boolean>;
  logout: () => void;
  createPost: (content: string, image?: string) => void;
  deletePost: (postId: string) => void;
  updatePost: (postId: string, content: string, image?: string) => void;
  toggleLike: (postId: string) => void;
  updateProfile: (username: string, profilePicture?: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Sample data
const initialUsers: User[] = [
  {
    id: '1',
    username: 'AdminAtlantic',
    email: 'admin@atlanticrp.com',
    profilePicture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'admin',
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2',
    username: 'MoroccanKing',
    email: 'player1@example.com',
    profilePicture: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'user',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '3',
    username: 'CasablancaRP',
    email: 'player2@example.com',
    profilePicture: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'user',
    createdAt: new Date('2024-01-20')
  }
];

const initialPosts: Post[] = [
  {
    id: '1',
    authorId: '1',
    author: initialUsers[0],
    content: 'Welcome to Atlantic RP! 🇲🇦 We are excited to announce our new community features. Join us for an authentic Moroccan roleplay experience!',
    image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: new Date('2024-01-25T10:00:00'),
    likes: ['2', '3']
  },
  {
    id: '2',
    authorId: '1',
    author: initialUsers[0],
    content: 'Server maintenance completed! All systems are running smoothly. Thank you for your patience. 🔧⚡',
    createdAt: new Date('2024-01-24T15:30:00'),
    likes: ['2']
  },
  {
    id: '3',
    authorId: '2',
    author: initialUsers[1],
    content: 'Just had an amazing roleplay session in Casablanca! The attention to detail in this server is incredible. Shoutout to the dev team! 👑',
    createdAt: new Date('2024-01-23T20:15:00'),
    likes: ['1', '3']
  },
  {
    id: '4',
    authorId: '3',
    author: initialUsers[2],
    content: 'Looking forward to tonight\'s community event! Who else is joining the royal ceremony? 🎭✨',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: new Date('2024-01-22T18:45:00'),
    likes: ['1', '2']
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simple mock authentication
    const user = users.find(u => u.email === email);
    if (user && password.length >= 6) { // Mock password validation
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const register = async (username: string, email: string, password: string, profilePicture?: string): Promise<boolean> => {
    // Check if user already exists
    if (users.some(u => u.email === email || u.username === username)) {
      return false;
    }

    if (password.length < 6) {
      return false;
    }

    const newUser: User = {
      id: Date.now().toString(),
      username,
      email,
      profilePicture: profilePicture || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'user',
      createdAt: new Date()
    };

    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const createPost = (content: string, image?: string) => {
    if (!currentUser) return;

    const newPost: Post = {
      id: Date.now().toString(),
      authorId: currentUser.id,
      author: currentUser,
      content,
      image,
      createdAt: new Date(),
      likes: []
    };

    setPosts(prev => [newPost, ...prev]);
  };

  const deletePost = (postId: string) => {
    if (!currentUser) return;
    
    setPosts(prev => prev.filter(post => {
      if (currentUser.role === 'admin') {
        return post.id !== postId;
      }
      return post.id !== postId && post.authorId === currentUser.id;
    }));
  };

  const updatePost = (postId: string, content: string, image?: string) => {
    if (!currentUser) return;

    setPosts(prev => prev.map(post => {
      if (post.id === postId && (currentUser.role === 'admin' || post.authorId === currentUser.id)) {
        return { ...post, content, image };
      }
      return post;
    }));
  };

  const toggleLike = (postId: string) => {
    if (!currentUser) return;

    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const likes = post.likes.includes(currentUser.id)
          ? post.likes.filter(id => id !== currentUser.id)
          : [...post.likes, currentUser.id];
        return { ...post, likes };
      }
      return post;
    }));
  };

  const updateProfile = (username: string, profilePicture?: string) => {
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      username,
      ...(profilePicture && { profilePicture })
    };

    setCurrentUser(updatedUser);
    setUsers(prev => prev.map(user => user.id === currentUser.id ? updatedUser : user));
    setPosts(prev => prev.map(post => 
      post.authorId === currentUser.id 
        ? { ...post, author: updatedUser }
        : post
    ));
  };

  const value: AuthContextType = {
    currentUser,
    users,
    posts,
    login,
    register,
    logout,
    createPost,
    deletePost,
    updatePost,
    toggleLike,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};