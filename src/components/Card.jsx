import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

const PRODUCT_API = "https://glassadminpanelapi.onrender.com/api/products";

const Card = ({ onBuyNow }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleBuyNow = async (product) => {
    console.log('🛒 Buy Now clicked for:', product);
    
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login first to place an order!');
      return;
    }
    
    try {
      // Add product to cart via API
      const addToCartPayload = {
        productId: product.id,
        quantity: 1
      };
      
      console.log('📦 Adding to cart via API:', addToCartPayload);
      
      const cartResponse = await fetch('https://glassadminpanelapi.onrender.com/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addToCartPayload)
      });
      
      if (cartResponse.ok) {
        console.log('✅ Product added to cart successfully');
        // Navigate to checkout immediately
        navigate('/checkout');
      } else {
        const error = await cartResponse.json();
        console.error('❌ Failed to add to cart:', error);
        toast.error('Failed to add product to cart');
      }
      
    } catch (error) {
      console.error('🚨 Buy Now error:', error);
      toast.error('Network error. Please try again.');
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(PRODUCT_API);
        const data = await res.json();

        if (data?.products?.length > 0) {
          const mappedProducts = data.products.map((p, index) => ({
            id: p._id || index,
            img:
              p.mainImage?.url ||
              "https://via.placeholder.com/400x300",
            title: p.name,
            price: `₹${(p.finalPrice || p.price).toLocaleString("en-IN")}`,
            oldPrice: p.discountPercent
              ? `₹${p.price.toLocaleString("en-IN")}`
              : "",
          }));

          setProducts(mappedProducts);
        }
      } catch (error) {
        console.error("Card product fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div
        className={`p-5 text-center ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Loading products...
      </div>
    );
  }

  return (
    <div
      className={`p-5 ${
        isDark ? "bg-black" : "bg-white"
      } transition-colors duration-200`}
    >
      <div className={`${products.length > 4 ? 'flex overflow-x-auto gap-6 pb-4' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'}`} style={products.length > 4 ? {scrollbarWidth: 'none', msOverflowStyle: 'none'} : {}} onScroll={(e) => e.target.style.setProperty('--webkit-scrollbar', 'none')}>
        {products.map((item, i) => (
          <div
            key={item.id || i}
            className={`relative rounded-xl overflow-hidden shadow-lg group ${products.length > 4 ? 'min-w-[300px] flex-shrink-0' : ''}`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded-xl"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/400x300")
              }
            />

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
              <h2 className="text-sm font-semibold truncate">
                {item.title}
              </h2>

              <div className="flex items-center gap-3 mt-1">
                <p className="text-lg font-bold">{item.price}</p>
                {item.oldPrice && (
                  <p className="text-gray-400 line-through text-sm">
                    {item.oldPrice}
                  </p>
                )}
              </div>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                isInWishlist(item.id)
                  ? removeFromWishlist(item.id)
                  : addToWishlist(item);
              }}
              className={`absolute top-4 left-4 p-2 rounded-full transition-colors z-20 ${
                isInWishlist(item.id)
                  ? "bg-red-500 text-white"
                  : "bg-white/20 text-white hover:bg-red-500"
              }`}
            >
              <FaHeart size={16} />
            </button>

            {/* Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuyNow(item);
                }}
                className="text-white px-3 py-2 rounded font-semibold text-sm"
                style={{ backgroundColor: "#898383" }}
              >
                Buy Now
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
                className="text-white px-3 py-2 rounded font-semibold text-sm"
                style={{ backgroundColor: "#862b2a" }}
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
