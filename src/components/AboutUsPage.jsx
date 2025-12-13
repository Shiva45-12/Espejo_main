import React from 'react';
import { FaAward, FaShieldAlt, FaUsers, FaStar, FaTools, FaLeaf } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import AboutEspezo from './AboutEspezo';


const AboutUsPage = ({ onBuyNow }) => {
  const { isDark } = useTheme();
  
  const features = [
    {
      icon: <FaAward className="text-4xl text-orange-500" />,
      title: "Premium Quality",
      description: "Crafted with the finest materials and cutting-edge technology for lasting beauty."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
      title: "5 Year Warranty",
      description: "Comprehensive warranty coverage on all products for complete peace of mind."
    },
    {
      icon: <FaUsers className="text-4xl text-orange-500" />,
      title: "Expert Craftsmanship",
      description: "Designed by skilled artisans with years of experience in mirror manufacturing."
    },
    {
      icon: <FaStar className="text-4xl text-orange-500" />,
      title: "Customer Satisfaction",
      description: "Over 10,000+ happy customers trust Espezo for their mirror needs."
    },
    {
      icon: <FaTools className="text-4xl text-orange-500" />,
      title: "Easy Installation",
      description: "Professional installation support and detailed guides for hassle-free setup."
    },
    {
      icon: <FaLeaf className="text-4xl text-orange-500" />,
      title: "Eco-Friendly",
      description: "Sustainable manufacturing processes and environmentally conscious materials."
    }
  ];

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen transition-colors duration-200`}>
      {/* Hero Section */}
      <div className="pt-8 pb-16">
        <h1 className={`text-center text-5xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-4`}>About Espezo</h1>
        <p className={`text-center text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto px-6`}>
          Reflecting Excellence Since 2019
        </p>
      </div>

      {/* Company Story */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isDark ? 'text-white' : 'text-black'}`}>
            <h2 className="text-3xl font-bold mb-6 text-orange-400">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2019, Espezo emerged from a simple vision: to transform ordinary spaces into extraordinary experiences through the power of premium mirrors. What started as a small workshop has grown into India's leading mirror manufacturing company.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We believe that mirrors are more than just functional items – they're design elements that can completely transform your living spaces. From LED-lit vanity mirrors to elegant bathroom cabinets, every Espezo product is crafted with precision and passion.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we serve thousands of customers across India, delivering not just mirrors, but reflections of quality, style, and innovation.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Modern bathroom with LED mirror" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className={`text-3xl font-bold text-center ${isDark ? 'text-white' : 'text-black'} mb-12`}>Why Choose Espezo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'} p-6 rounded-lg text-center transition-colors`}>
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'} mb-3`}>{feature.title}</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} py-16`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`${isDark ? 'text-white' : 'text-black'}`}>
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-6">
                To revolutionize the mirror industry by delivering innovative, high-quality products that enhance the beauty and functionality of every space. We are committed to excellence in design, manufacturing, and customer service.
              </p>
              <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Premium quality materials and craftsmanship
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Innovative LED technology integration
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Exceptional customer service and support
                </li>
              </ul>
            </div>
            <div className={`${isDark ? 'text-white' : 'text-black'}`}>
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Our Vision</h2>
              <p className="text-lg leading-relaxed mb-6">
                To become the most trusted and preferred mirror brand globally, known for our commitment to quality, innovation, and customer satisfaction. We envision a world where every space reflects beauty and functionality.
              </p>
              <div className={`${isDark ? 'bg-black' : 'bg-white'} p-6 rounded-lg border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                <h3 className="text-xl font-semibold mb-4 text-orange-400">Our Values</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>✨ Innovation</div>
                  <div>🎯 Quality</div>
                  <div>🤝 Integrity</div>
                  <div>💚 Sustainability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-3xl font-bold text-center ${isDark ? 'text-white' : 'text-black'} mb-12`}>Our Achievements</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className={`${isDark ? 'text-white' : 'text-black'}`}>
              <div className="text-4xl font-bold text-orange-500 mb-2">10,000+</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Happy Customers</div>
            </div>
            <div className={`${isDark ? 'text-white' : 'text-black'}`}>
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Product Variants</div>
            </div>
            <div className={`${isDark ? 'text-white' : 'text-black'}`}>
              <div className="text-4xl font-bold text-orange-500 mb-2">5</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Years Experience</div>
            </div>
            <div className={`${isDark ? 'text-white' : 'text-black'}`}>
              <div className="text-4xl font-bold text-orange-500 mb-2">99%</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="pb-16">
        <h2 className={`text-3xl font-bold text-center ${isDark ? 'text-white' : 'text-black'} mb-12`}>Our Featured Products</h2>
        <AboutEspezo onBuyNow={onBuyNow} />
      </div>
    </div>
  );
};

export default AboutUsPage;