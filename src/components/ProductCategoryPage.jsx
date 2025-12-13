import React from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductCategoryPage = () => {
  const { category } = useParams();
  const { isDark } = useTheme();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: `${category}-${product.id}`,
      name: product.name,
      price: product.price,
      image: product.image,
      category: category
    });
    toast.success(`${product.name} added to cart!`);
  };

  const productData = {
    'bathroom-cabinets': {
      title: 'Bathroom Cabinets',
      description: 'Premium quality bathroom cabinets with mirrors for modern bathrooms.',
      products: [
        { id: 1, name: 'Modern Bathroom Cabinet', price: '₹15,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 2, name: 'Luxury Mirror Cabinet', price: '₹22,999', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=300&h=300&fit=crop' },
        { id: 3, name: 'Compact Storage Cabinet', price: '₹12,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' }
      ]
    },
    'bathroom-mirrors': {
      title: 'Bathroom Mirrors',
      description: 'Stylish and functional bathroom mirrors for every space.',
      products: [
        { id: 1, name: 'Round Bathroom Mirror', price: '₹3,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
        { id: 2, name: 'Rectangle Bathroom Mirror', price: '₹4,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 3, name: 'Oval Bathroom Mirror', price: '₹5,499', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' }
      ]
    },
    'dressing-table-mirrors': {
      title: 'Dressing Table Mirrors',
      description: 'Elegant dressing table mirrors for your bedroom.',
      products: [
        { id: 1, name: 'Classic Dressing Mirror', price: '₹8,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
        { id: 2, name: 'Modern Dressing Mirror', price: '₹12,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 3, name: 'Vintage Dressing Mirror', price: '₹15,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' }
      ]
    },
    'led-mirrors': {
      title: 'LED Mirrors',
      description: 'Energy-efficient LED mirrors with perfect lighting.',
      products: [
        { id: 1, name: 'Smart LED Mirror', price: '₹8,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 2, name: 'Backlit LED Mirror', price: '₹12,999', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=300&h=300&fit=crop' },
        { id: 3, name: 'Touch LED Mirror', price: '₹15,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' }
      ]
    },
    'makeup-mirrors': {
      title: 'Makeup Mirrors',
      description: 'Professional makeup mirrors with magnification.',
      products: [
        { id: 1, name: '10X Magnifying Mirror', price: '₹2,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
        { id: 2, name: 'LED Makeup Mirror', price: '₹5,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 3, name: 'Portable Makeup Mirror', price: '₹1,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' }
      ]
    },
    'oval-mirrors': {
      title: 'Oval Mirrors',
      description: 'Elegant oval-shaped mirrors for any room.',
      products: [
        { id: 1, name: 'Large Oval Mirror', price: '₹6,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
        { id: 2, name: 'Framed Oval Mirror', price: '₹8,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 3, name: 'Antique Oval Mirror', price: '₹12,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' }
      ]
    },
    'rectangle-mirrors': {
      title: 'Rectangle Mirrors',
      description: 'Classic rectangular mirrors for modern spaces.',
      products: [
        { id: 1, name: 'Large Rectangle Mirror', price: '₹5,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 2, name: 'Framed Rectangle Mirror', price: '₹7,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
        { id: 3, name: 'Beveled Rectangle Mirror', price: '₹9,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' }
      ]
    },
    'round-mirrors': {
      title: 'Round Mirrors',
      description: 'Stylish round mirrors to complement your decor.',
      products: [
        { id: 1, name: 'Large Round Mirror', price: '₹4,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
        { id: 2, name: 'Decorative Round Mirror', price: '₹6,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 3, name: 'Sunburst Round Mirror', price: '₹11,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' }
      ]
    },
    'standing-mirrors': {
      title: 'Standing Mirrors',
      description: 'Full-length standing mirrors for complete view.',
      products: [
        { id: 1, name: 'Full Length Standing Mirror', price: '₹8,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 2, name: 'Adjustable Standing Mirror', price: '₹12,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
        { id: 3, name: 'Wooden Frame Standing Mirror', price: '₹15,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' }
      ]
    },
    'vanity-mirrors': {
      title: 'Vanity Mirrors',
      description: 'Elegant vanity mirrors for your dressing area.',
      products: [
        { id: 1, name: 'Hollywood Vanity Mirror', price: '₹18,999', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=300&h=300&fit=crop' },
        { id: 2, name: 'Tabletop Vanity Mirror', price: '₹6,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
        { id: 3, name: 'Wall Mount Vanity Mirror', price: '₹9,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' }
      ]
    },
    'wall-mirrors': {
      title: 'Wall Mirrors',
      description: 'Decorative wall mirrors to enhance your space.',
      products: [
        { id: 1, name: 'Designer Wall Mirror', price: '₹7,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
        { id: 2, name: 'Frameless Wall Mirror', price: '₹4,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 3, name: 'Decorative Wall Mirror', price: '₹11,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' }
      ]
    },
    'wash-basin-mirrors': {
      title: 'Wash Basin Mirrors',
      description: 'Functional mirrors designed for wash basin areas.',
      products: [
        { id: 1, name: 'Basin Mirror with Shelf', price: '₹5,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' },
        { id: 2, name: 'LED Basin Mirror', price: '₹8,999', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=300&h=300&fit=crop' },
        { id: 3, name: 'Anti-Fog Basin Mirror', price: '₹7,999', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop' }
      ]
    }
  };

  const currentCategory = productData[category] || {
    title: 'Products',
    description: 'Explore our range of premium mirrors and accessories.',
    products: []
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-12 px-6`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-orange-500">{currentCategory.title}</h1>
        <p className={`text-center mb-12 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {currentCategory.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.products.map((product) => (
            <div key={product.id} className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-6 hover:shadow-lg transition-shadow`}>
              <div className="h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-orange-500 text-lg font-bold mb-4">{product.price}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPage;