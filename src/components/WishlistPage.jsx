import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { FaArrowLeft, FaTrash, FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const WishlistPage = ({ onBuyNow }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="text-2xl hover:text-orange-500">
              <FaArrowLeft />
            </button>
            <h1 className="text-3xl font-bold">My Wishlist</h1>
          </div>
          {wishlistItems.length > 0 && (
            <button 
              onClick={() => {
                if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
                  clearWishlist();
                  toast.success('🗑️ Wishlist cleared successfully!');
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <FaTrashAlt size={14} /> Clear All
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Your wishlist is empty</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-[#862b2a] hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className={`${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg overflow-hidden transition-colors group`}>
                <div className="relative">
                  {item.video ? (
                    <video
                      src={item.video}
                      className="w-full h-48 object-cover"
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{item.title}</h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-orange-500">{item.price}</span>
                    {item.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">{item.oldPrice}</span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => onBuyNow && onBuyNow(item)}
                      className="flex-1 text-white py-2 rounded font-semibold transition-colors text-sm"
                      style={{backgroundColor: '#898383'}}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#6b6161'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#898383'}
                    >
                      Buy Now
                    </button>
                    <button 
                      onClick={() => {
                        addToCart(item);
                        removeFromWishlist(item.id);
                        toast.success('🛍️ Item moved to cart!');
                      }}
                      className="flex-1 text-white py-2 rounded font-semibold transition-colors text-sm flex items-center justify-center gap-2"
                      style={{backgroundColor: '#862b2a'}}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#6b1f1e'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#862b2a'}
                    >
                      <FaShoppingCart size={12} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;