import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const SitemapPage = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const siteLinks = {
    'Main Pages': [
      { name: 'Home', path: '/' },
      { name: 'Best Seller', path: '/bestseller' },
      { name: 'Metal Mirror', path: '/metal-mirror' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' }
    ],
    'Product Categories': [
      { name: 'Bathroom Cabinets', path: '/products/bathroom-cabinets' },
      { name: 'Bathroom Mirrors', path: '/products/bathroom-mirrors' },
      { name: 'LED Mirrors', path: '/products/led-mirrors' },
      { name: 'Vanity Mirrors', path: '/products/vanity-mirrors' },
      { name: 'Wall Mirrors', path: '/products/wall-mirrors' }
    ],
    'Policies': [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Refund Policy', path: '/refund-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' }
    ],
    'Other': [
      { name: 'Company Profile', path: '/company-profile' },
      { name: 'Become a Dealer', path: '/become-dealer' },
      { name: 'Sitemap', path: '/sitemap' }
    ]
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#862b2a]">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(siteLinks).map(([category, links]) => (
            <div key={category} className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-6 rounded-lg`}>
              <h2 className="text-xl font-semibold mb-4 text-[#862b2a]">{category}</h2>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigate(link.path)}
                      className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} hover:text-orange-400 transition-colors text-left`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;