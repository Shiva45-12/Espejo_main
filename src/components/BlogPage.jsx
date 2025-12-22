import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaCalendarAlt, FaUser, FaClock, FaEye, FaHeart, FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Perfect Mirror for Your Bathroom',
      date: 'January 15, 2025',
      author: 'Espejo Team',
      category: 'Design Tips',
      readTime: '5 min read',
      views: 1250,
      likes: 89,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop',
      excerpt: 'Discover the key factors to consider when selecting a bathroom mirror that combines style and functionality for your perfect space.',
      tags: ['Bathroom', 'Design', 'Tips']
    },
    {
      id: 2,
      title: 'LED Mirrors: The Future of Modern Bathrooms',
      date: 'January 10, 2025',
      author: 'Design Expert',
      category: 'Technology',
      readTime: '7 min read',
      views: 2100,
      likes: 156,
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop',
      excerpt: 'Explore the benefits of LED mirrors and why they are becoming essential in contemporary bathroom design and smart homes.',
      tags: ['LED', 'Technology', 'Modern']
    },
    {
      id: 3,
      title: 'Mirror Maintenance Tips for Long-lasting Shine',
      date: 'January 5, 2025',
      author: 'Care Specialist',
      category: 'Maintenance',
      readTime: '4 min read',
      views: 890,
      likes: 67,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      excerpt: 'Learn professional tips to keep your mirrors spotless and maintain their clarity for years to come with proper care techniques.',
      tags: ['Maintenance', 'Care', 'Tips']
    },
    {
      id: 4,
      title: 'Transform Your Space with Statement Mirrors',
      date: 'December 28, 2024',
      author: 'Interior Designer',
      category: 'Design Tips',
      readTime: '6 min read',
      views: 1680,
      likes: 124,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      excerpt: 'Discover how statement mirrors can completely transform your living space and create stunning focal points in any room.',
      tags: ['Interior', 'Statement', 'Transform']
    }
  ];

  const openPost = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} transition-colors duration-200`}>
      {/* Header */}
      <div className={`${isDark ? 'bg-black' : 'bg-white'} py-12 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: '#862b2a'}}>Blog</h1>
          <p className={`text-center text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Discover expert tips, design inspiration, and the latest trends in mirrors and home décor
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <div 
            onClick={() => openPost(featuredPost.id)}
            className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{backgroundColor: '#862b2a'}}>
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#862b2a] transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
                  {featuredPost.title}
                </h2>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                  {featuredPost.excerpt}
                </p>
                <div className={`flex items-center gap-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-6`}>
                  <div className="flex items-center gap-2">
                    <FaUser size={14} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt size={14} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock size={14} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 font-semibold transition-colors group" style={{color: '#862b2a'}}>
                  Read More
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <article 
              key={post.id} 
              onClick={() => openPost(post.id)}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{backgroundColor: '#862b2a'}}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 group-hover:text-[#862b2a] transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
                  {post.title}
                </h3>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed text-sm`}>
                  {post.excerpt}
                </p>

                <div className={`flex items-center justify-between text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FaUser size={10} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock size={10} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <FaEye size={10} />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaHeart size={10} />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {post.date}
                  </span>
                  <button className="flex items-center gap-1 text-sm font-semibold transition-colors group" style={{color: '#862b2a'}}>
                    Read More
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;