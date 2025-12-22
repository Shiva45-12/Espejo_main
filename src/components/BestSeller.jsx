import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaHeart, FaCheck } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/* ================= DUMMY DATA (FALLBACK) ================= */
const dummyData = [
  {
    id: "d1",
    img: "https://via.placeholder.com/400",
    title: "Sample LED Mirror",
    reviews: 0,
    rating: 5,
    oldPrice: "₹15000",
    newPrice: "₹12000",
    price: "₹12000",
  },
];

const BestSeller = ({ onBuyNow }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState({});
  const [buyingNow, setBuyingNow] = useState({});

  const handleBuyNow = async (product) => {
    setBuyingNow(prev => ({ ...prev, [product.id]: 'loading' }));
    
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login first to place an order!');
      setBuyingNow(prev => ({ ...prev, [product.id]: null }));
      return;
    }
    
    try {
      const addToCartPayload = {
        productId: product.id,
        quantity: 1
      };
      
      const cartResponse = await fetch('https://glassadminpanelapi.onrender.com/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addToCartPayload)
      });
      
      if (cartResponse.ok) {
        setBuyingNow(prev => ({ ...prev, [product.id]: 'success' }));
        setTimeout(() => {
          navigate('/checkout');
        }, 500);
      } else {
        const error = await cartResponse.json();
        toast.error('Failed to add product to cart');
        setBuyingNow(prev => ({ ...prev, [product.id]: null }));
      }
      
    } catch (error) {
      toast.error('Network error. Please try again.');
      setBuyingNow(prev => ({ ...prev, [product.id]: null }));
    }
  };

  /* ================= FETCH PRODUCTS ================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://glassadminpanelapi.onrender.com/api/products"
        );

        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();
        // console.log("API DATA 👉", data);

        if (data?.products?.length > 0) {
          const mappedProducts = data.products.map((p, index) => ({
            id: p._id || `api-${index}`,
            img: p.mainImage?.url || "https://via.placeholder.com/400",
            title: p.name,
            reviews: 0,
            rating: 5,
            oldPrice: p.discountPercent ? `₹${p.price}` : "",
            newPrice: `₹${p.finalPrice || p.price}`,
            price: `₹${p.finalPrice || p.price}`, 
          }));

          setProducts(mappedProducts.slice(0, 8));
        } else {
          setProducts(dummyData);
        }
      } catch (error) {
        // console.error("Fetch error:", error.message);
        setProducts(dummyData);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={`p-4 ${isDark ? "bg-black" : "bg-white"}`}>
      {/* <h1
        className={`text-center text-3xl font-semibold p-4 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Best Seller
      </h1> */}

      {loading && (
        <p className="text-center text-lg py-10">Loading products...</p>
      )}

      {!loading && products.length === 0 && (
        <p className="text-center py-10">No products found</p>
      )}

      <div className={`${products.length > 4 ? 'flex overflow-x-auto gap-6 pb-4' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'}`} style={products.length > 4 ? {scrollbarWidth: 'none', msOverflowStyle: 'none'} : {}} onScroll={(e) => e.target.style.setProperty('--webkit-scrollbar', 'none')}>
        {products.map((item, index) => (
          <div
            key={item.id || index}
            className={`rounded overflow-hidden ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'} relative shadow-lg ${products.length > 4 ? 'min-w-[300px] flex-shrink-0' : ''}`}
          >
            {/* IMAGE */}
            <div className="relative">
              <button
                onClick={() =>
                  isInWishlist(item.id)
                    ? removeFromWishlist(item.id)
                    : addToWishlist(item)
                }
                className={`absolute top-4 right-4 p-2 rounded-full z-10 ${
                  isInWishlist(item.id)
                    ? "bg-red-500 text-white"
                    : isDark 
                    ? "bg-gray-700 text-white hover:bg-red-500 hover:text-white"
                    : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"
                }`}
              >
                <FaHeart size={16} />
              </button>

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] object-cover"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/400")
                }
              />
            </div>

            {/* QUICK SHOP */}
            <div className={`${isDark ? 'bg-gray-700 text-white' : 'bg-black text-white'} text-center py-3 font-semibold text-sm`}>
              QUICK SHOP
            </div>

            {/* DETAILS */}
            <div className="p-3">
              <p className={`font-bold text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>ESPEJO</p>

              <h3 className="font-semibold mt-1 text-sm line-clamp-1">
                {item.title}
              </h3>

              {/* RATING */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400 text-lg">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < Math.floor(item.rating) ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                </div>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>({item.reviews})</span>
              </div>

              {/* PRICE */}
              <div className="mt-1">
                {item.oldPrice && (
                  <p className={`text-sm line-through ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {item.oldPrice}
                  </p>
                )}
                <p className="font-bold text-lg text-[#a76665]">
                  From {item.newPrice}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="mt-4 flex gap-3">
                <button
                  onClick={async () => {
                    setBuyingNow(prev => ({ ...prev, [item.id]: 'loading' }));
                    await handleBuyNow(item);
                  }}
                  className="w-1/2 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#898383" }}
                  disabled={buyingNow[item.id]}
                >
                  {buyingNow[item.id] === 'loading' && <ImSpinner8 className="animate-spin" size={14} />}
                  {buyingNow[item.id] === 'success' && <FaCheck size={14} />}
                  {!buyingNow[item.id] && 'Buy Now'}
                  {buyingNow[item.id] === 'loading' && 'Processing...'}
                  {buyingNow[item.id] === 'success' && 'Redirecting...'}
                </button>

                <button
                  onClick={async () => {
                    setAddingToCart(prev => ({ ...prev, [item.id]: 'loading' }));
                    await addToCart(item);
                    setAddingToCart(prev => ({ ...prev, [item.id]: 'success' }));
                    setTimeout(() => {
                      setAddingToCart(prev => ({ ...prev, [item.id]: null }));
                    }, 1500);
                  }}
                  className="w-1/2 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#a76665" }}
                  disabled={addingToCart[item.id]}
                >
                  {addingToCart[item.id] === 'loading' && <ImSpinner8 className="animate-spin" size={14} />}
                  {addingToCart[item.id] === 'success' && <FaCheck size={14} />}
                  {!addingToCart[item.id] && 'Add to Cart'}
                  {addingToCart[item.id] === 'loading' && 'Adding...'}
                  {addingToCart[item.id] === 'success' && 'Added!'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
