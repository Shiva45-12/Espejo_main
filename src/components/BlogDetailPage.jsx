import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaCalendarAlt, FaUser, FaClock, FaEye, FaHeart, FaArrowLeft, FaShare } from 'react-icons/fa';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();

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
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=400&fit=crop',
      excerpt: 'Discover the key factors to consider when selecting a bathroom mirror that combines style and functionality for your perfect space.',
      content: 'When choosing the perfect mirror for your bathroom, several factors come into play. First, consider the size of your space and the mirror proportions. A mirror should be proportional to your vanity - typically 2-4 inches narrower than the vanity width. Next, think about lighting. Mirrors with built-in LED lighting can provide excellent illumination for daily routines. The style should complement your bathroom décor, whether modern, traditional, or transitional. Finally, consider special features like anti-fog coating, magnification zones, or smart technology integration.',
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
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=400&fit=crop',
      excerpt: 'Explore the benefits of LED mirrors and why they are becoming essential in contemporary bathroom design and smart homes.',
      content: 'LED mirrors represent the cutting edge of bathroom technology, combining functionality with energy efficiency. These mirrors offer superior lighting that mimics natural daylight, making them perfect for grooming tasks. The LED strips are typically positioned around the perimeter or behind the mirror, providing even, shadow-free illumination. Many models include dimming capabilities, color temperature adjustment, and even smart features like Bluetooth connectivity, touch controls, and anti-fog heating. The energy efficiency of LED technology means lower electricity bills and longer lifespan compared to traditional lighting solutions.',
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
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
      excerpt: 'Learn professional tips to keep your mirrors spotless and maintain their clarity for years to come with proper care techniques.',
      content: 'Proper mirror maintenance is essential for preserving clarity and extending lifespan. Start with the right cleaning solution - avoid harsh chemicals that can damage the mirror backing. Instead, use a mixture of white vinegar and water or specialized mirror cleaners. Always spray the cleaner onto a microfiber cloth rather than directly onto the mirror to prevent liquid from seeping behind the glass. Clean in a circular motion, then finish with vertical strokes for a streak-free shine. For LED mirrors, ensure the electrical components are turned off and avoid getting moisture near the controls. Regular cleaning prevents buildup that can permanently damage the mirror surface.',
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
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop',
      excerpt: 'Discover how statement mirrors can completely transform your living space and create stunning focal points in any room.',
      content: 'Statement mirrors are powerful design elements that can dramatically transform any space. These oversized or uniquely shaped mirrors serve as both functional pieces and artistic focal points. In small rooms, large mirrors create the illusion of expanded space and increased natural light. Consider placement carefully - opposite windows to reflect outdoor views, or in dark corners to brighten the area. The frame style should complement your existing décor while making a bold statement. Popular options include ornate vintage frames, sleek modern designs, or geometric shapes. Remember that a statement mirror should be the star of the wall, so avoid cluttering the surrounding area with other decorative elements.',
      tags: ['Interior', 'Statement', 'Transform']
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-[#862b2a] text-white rounded-lg hover:bg-[#6d2221] transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-200`}>
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <button 
          onClick={() => navigate('/blog')}
          className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          <FaArrowLeft />
          Back to Blog
        </button>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{backgroundColor: '#862b2a'}}>
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-black'}`}>
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className={`flex flex-wrap items-center gap-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-8 pb-8 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2">
            <FaUser />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <span>{post.views} views</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHeart />
            <span>{post.likes} likes</span>
          </div>
        </div>

        {/* Content */}
        <div className={`prose prose-lg max-w-none mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <p className="text-lg leading-relaxed">
            {post.content}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;