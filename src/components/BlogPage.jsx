import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaBlog, FaCalendarAlt, FaUser, FaArrowRight, FaTag, FaClock, FaEye, FaHeart, FaShare } from 'react-icons/fa';

const BlogPage = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      image: 'https://via.placeholder.com/400x250',
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
      image: 'https://via.placeholder.com/400x250',
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
      image: 'https://via.placeholder.com/400x250',
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
      image: 'https://via.placeholder.com/400x250',
      excerpt: 'Discover how statement mirrors can completely transform your living space and create stunning focal points in any room.',
      tags: ['Interior', 'Statement', 'Transform']
    }
  ];

  const categories = ['All', 'Design Tips', 'Technology', 'Maintenance'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-200`}>
      {/* Hero Section */}
      <div className={`${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-gray-100 to-gray-200'} py-20`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FaBlog className="text-6xl mx-auto mb-6" style={{color: '#862b2a'}} />
          <h1 className="text-5xl font-bold mb-6" style={{color: '#862b2a'}}>Espejo Blog</h1>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 rounded" style={{backgroundColor: '#862b2a'}}></div>
          </div>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Discover expert tips, design inspiration, and the latest trends in mirrors and home décor. 
            Stay updated with our comprehensive guides and professional insights.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'text-white shadow-lg'
                  : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
              }`}
              style={{
                backgroundColor: selectedCategory === category ? '#862b2a' : undefined
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className={`${filteredPosts.length > 4 ? 'flex overflow-x-auto gap-8 pb-4' : 'grid grid-cols-1 lg:grid-cols-2 gap-8'}`} style={filteredPosts.length > 4 ? {scrollbarWidth: 'none', msOverflowStyle: 'none'} : {}} onScroll={(e) => e.target.style.setProperty('--webkit-scrollbar', 'none')}>
          {filteredPosts.map((post) => (
            <article key={post.id} className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border hover:shadow-xl transition-all duration-300 p-6 group ${filteredPosts.length > 4 ? 'min-w-[400px] flex-shrink-0' : ''}`}>
              {/* Category Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{backgroundColor: '#862b2a'}}>
                  {post.category}
                </span>
              </div>

              {/* Post Content */}
              <div>
                <h2 className={`text-xl font-bold mb-3 group-hover:text-[#862b2a] transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
                  {post.title}
                </h2>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                  <div className="flex items-center gap-1">
                    <FaUser size={12} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt size={12} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className={`px-2 py-1 rounded text-xs ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Post Stats & Read More */}
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <div className="flex items-center gap-1">
                      <FaEye size={12} />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaHeart size={12} />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 font-semibold transition-colors group" style={{color: '#862b2a'}}>
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