import React from 'react';
import { FaShieldAlt, FaStar, FaTools, FaLeaf, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useTheme } from '../context/ThemeContext';

const MetalMirrorPage = ({ onBuyNow }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isDark } = useTheme();
  const metalMirrors = [
    {
      id: 17,
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Antique Brass Round Metal Mirror",
      price: "₹8,999.00",
      oldPrice: "₹12,500.00",
      features: ["Brass Frame", "Antique Finish", "Wall Mount"]
    },
    {
      id: 18,
      img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Industrial Black Metal Frame Mirror",
      price: "₹6,750.00",
      oldPrice: "₹9,000.00",
      features: ["Iron Frame", "Matte Black", "Industrial Style"]
    },
    {
      id: 19,
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Gold Decorative Metal Mirror",
      price: "₹11,250.00",
      oldPrice: "₹15,000.00",
      features: ["Gold Plated", "Decorative Design", "Premium Quality"]
    },
    {
      id: 20,
      img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Copper Vintage Metal Mirror",
      price: "₹9,500.00",
      oldPrice: "₹13,200.00",
      features: ["Copper Frame", "Vintage Look", "Handcrafted"]
    },
    {
      id: 21,
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Silver Hexagonal Metal Mirror",
      price: "₹7,800.00",
      oldPrice: "₹10,400.00",
      features: ["Silver Finish", "Hexagonal Shape", "Modern Design"]
    },
    {
      id: 22,
      img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Rose Gold Oval Metal Mirror",
      price: "₹10,200.00",
      oldPrice: "₹14,000.00",
      features: ["Rose Gold", "Oval Shape", "Elegant Design"]
    }
  ];

  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-orange-500" />,
      title: "Rust Resistant",
      description: "Special coating prevents rust and corrosion"
    },
    {
      icon: <FaStar className="text-3xl text-orange-500" />,
      title: "Premium Finish",
      description: "High-quality metal finishes that last years"
    },
    {
      icon: <FaTools className="text-3xl text-orange-500" />,
      title: "Easy Installation",
      description: "Simple wall mounting with included hardware"
    },
    {
      icon: <FaLeaf className="text-3xl text-orange-500" />,
      title: "Eco-Friendly",
      description: "Sustainable materials and processes"
    }
  ];

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen transition-colors duration-200`}>
      {/* Hero Section */}
      <div className="pt-8 pb-16 text-center">
        <h1 className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-4`}>Metal Mirror Collection</h1>
        <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto px-6`}>
          Discover our exquisite range of metal-framed mirrors that combine durability with elegant design. 
          Perfect for adding a touch of sophistication to any space.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className={`text-3xl font-bold text-center ${isDark ? 'text-white' : 'text-black'} mb-12`}>Why Choose Metal Mirrors?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'} p-6 rounded-lg text-center transition-colors`}>
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'} mb-3`}>{feature.title}</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className={`text-3xl font-bold text-center ${isDark ? 'text-white' : 'text-black'} mb-12`}>Our Metal Mirror Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metalMirrors.map((mirror) => (
            <div key={mirror.id} className={`${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg overflow-hidden transition-colors group`}>
              <div className="relative">
                <img 
                  src={mirror.img} 
                  alt={mirror.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Metal Frame
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    isInWishlist(mirror.id) ? removeFromWishlist(mirror.id) : addToWishlist(mirror);
                  }}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                    isInWishlist(mirror.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <FaHeart size={16} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'} mb-3`}>{mirror.title}</h3>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {mirror.features.map((feature, index) => (
                      <span key={index} className={`${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-300 text-gray-700'} px-2 py-1 rounded text-xs`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-orange-500">{mirror.price}</span>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'} line-through`}>{mirror.oldPrice}</span>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => onBuyNow && onBuyNow(mirror)}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors"
                  >
                    Buy Now
                  </button>
                  <button 
                    onClick={() => addToCart(mirror)}
                    className={`flex-1 ${isDark ? 'bg-gray-800 hover:bg-gray-700 border-gray-600' : 'bg-gray-300 hover:bg-gray-400 border-gray-400'} ${isDark ? 'text-white' : 'text-black'} py-2 rounded-lg font-semibold border transition-colors`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} py-16`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-6`}>About Our Metal Mirrors</h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8`}>
            Our metal mirror collection features premium quality frames crafted from durable materials including 
            brass, copper, iron, and stainless steel. Each mirror is designed to withstand the test of time while 
            adding elegance to your space. With various finishes like antique brass, matte black, gold, and silver, 
            you'll find the perfect match for your interior design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">5+ Years</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Warranty Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Rust Resistant</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Design Options</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalMirrorPage;