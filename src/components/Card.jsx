import React from "react";
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useTheme } from '../context/ThemeContext';
import { FaHeart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    video:
      "https://cdn.shopify.com/videos/c/o/v/ddc73a68333a46f18e5de01165aa2657.mp4",
    title: "Self Standing Mirror with Base",
    price: "₹39,045.00",
    oldPrice: "₹41,100.00",
  },
  {
    id: 2,
    video:
      "https://cdn.shopify.com/videos/c/o/v/8889764b88b14ea981c7bc32cff15f09.mp4",
    title: "Round LED Premium Mirror",
    price: "₹18,999.00",
    oldPrice: "₹23,500.00",
  },
  {
    id: 3,
    video:
      "https://cdn.shopify.com/videos/c/o/v/73d57a6c4a694933b23ec33481c180a2.mp4",
    title: "Designer LED Vanity Mirror",
    price: "₹24,050.00",
    oldPrice: "₹27,100.00",
  },
  {
    id: 4,
    video:
      "https://cdn.shopify.com/videos/c/o/v/ab7450779dac4e558d214e7906c4ddca.mp4",
    title: "Full Height Standing Mirror",
    price: "₹34,999.00",
    oldPrice: "₹39,000.00",
  },
  {
    id: 5,
    video:
      "https://cdn.shopify.com/videos/c/o/v/58aa76a1fbd749a6ac31179cb3808bfd.mp4",
    title: "Premium Wall LED Mirror",
    price: "₹12,450.00",
    oldPrice: "₹15,000.00",
  },
  {
    id: 6,
    video:
      "https://cdn.shopify.com/videos/c/o/v/ab7450779dac4e558d214e7906c4ddca.mp4",
    title: "Full Height Standing Mirror",
    price: "₹34,999.00",
    oldPrice: "₹39,000.00",
  },
  {
    id: 7,
    video:
      "https://cdn.shopify.com/videos/c/o/v/ab7450779dac4e558d214e7906c4ddca.mp4",
    title: "Full Height Standing Mirror",
    price: "₹34,999.00",
    oldPrice: "₹39,000.00",
  },
  {
    id: 8,
    video:
      "https://cdn.shopify.com/videos/c/o/v/ab7450779dac4e558d214e7906c4ddca.mp4",
    title: "Full Height Standing Mirror",
    price: "₹34,999.00",
    oldPrice: "₹39,000.00",
  },
];

const Card = ({ onBuyNow }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isDark } = useTheme();

  return (
    <div className={`p-5 ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-200`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden shadow-lg group">
            {/* Video */}
            <video
              autoPlay
              loop
              muted
              className="w-full h-[300px] object-cover rounded-xl"
              src={item.video}
            ></video>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
              <h2 className="text-sm font-semibold truncate">{item.title}</h2>

              <div className="flex items-center gap-3 mt-1">
                <p className="text-lg font-bold">{item.price}</p>
                <p className="text-gray-400 line-through text-sm">{item.oldPrice}</p>
              </div>
            </div>

            {/* Wishlist Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                isInWishlist(item.id) ? removeFromWishlist(item.id) : addToWishlist(item);
              }}
              className={`absolute top-4 left-4 p-2 rounded-full transition-colors z-20 ${
                isInWishlist(item.id) 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/20 text-white hover:bg-red-500'
              }`}
            >
              <FaHeart size={16} />
            </button>

            {/* Buttons - Separate from overlay */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onBuyNow && onBuyNow(item);
                }}
                className="text-white px-3 py-2 rounded font-semibold transition-colors text-sm cursor-pointer"
                style={{backgroundColor: '#898383'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#6b6161'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#898383'}
              >
                Buy Now
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
                className="text-white px-3 py-2 rounded font-semibold transition-colors text-sm cursor-pointer"
                style={{backgroundColor: '#862b2a'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#6b1f1e'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#862b2a'}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
