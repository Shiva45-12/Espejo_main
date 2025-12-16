import React from 'react';
import { useTheme } from '../context/ThemeContext';

const BlogPage = () => {
  const { isDark } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Perfect Mirror for Your Bathroom',
      date: 'January 15, 2025',
      excerpt: 'Discover the key factors to consider when selecting a bathroom mirror that combines style and functionality.',
      content: 'When choosing a bathroom mirror, consider the size of your space, lighting conditions, and overall design aesthetic...'
    },
    {
      id: 2,
      title: 'LED Mirrors: The Future of Modern Bathrooms',
      date: 'January 10, 2025',
      excerpt: 'Explore the benefits of LED mirrors and why they are becoming essential in contemporary bathroom design.',
      content: 'LED mirrors offer energy efficiency, perfect lighting, and modern aesthetics that transform any bathroom space...'
    },
    {
      id: 3,
      title: 'Mirror Maintenance Tips for Long-lasting Shine',
      date: 'January 5, 2025',
      excerpt: 'Learn professional tips to keep your mirrors spotless and maintain their clarity for years to come.',
      content: 'Proper mirror maintenance involves regular cleaning with appropriate products and techniques...'
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#862b2a]">Espejo Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-6 rounded-lg`}>
              <h2 className="text-2xl font-semibold mb-2 text-[#862b2a]">{post.title}</h2>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>{post.date}</p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{post.excerpt}</p>
              <button className="text-[#862b2a] hover:text-[#862b2a] font-semibold transition-colors">
                Read More →
              </button>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Stay tuned for more mirror care tips and design inspiration!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;