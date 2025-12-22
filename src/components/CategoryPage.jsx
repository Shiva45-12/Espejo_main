import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart, FaArrowLeft } from "react-icons/fa";

const CATEGORY_API = "https://glassadminpanelapi.onrender.com/api/categories";
const PRODUCT_API = "https://glassadminpanelapi.onrender.com/api/products";

const CategoryPage = ({ onBuyNow }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /* ========= FETCH CATEGORIES ========= */
        const catRes = await fetch(CATEGORY_API);
        const catData = await catRes.json();

        const foundCategory = catData?.categories?.find(
          (cat) => cat.slug === slug
        );

        if (!foundCategory) {
          setCategory(null);
          setProducts([]);
          return;
        }

        setCategory(foundCategory);

        /* ========= FETCH PRODUCTS ========= */
        const prodRes = await fetch(PRODUCT_API);
        const prodData = await prodRes.json();

        // filter by category _id (NOT slug)
        const filteredProducts =
          prodData?.products?.filter(
            (p) => p.category?._id === foundCategory._id
          ) || [];

        const mappedProducts = filteredProducts.map((p, index) => ({
          id: p._id || `prod-${index}`,
          img: p.mainImage?.url || "https://via.placeholder.com/400",
          title: p.name,
          oldPrice: p.discountPercent ? `₹${p.price}` : "",
          newPrice: `₹${p.finalPrice || p.price}`,
          price: `₹${p.finalPrice || p.price}`,
        }));

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Category fetch error:", error);
        setCategory(null);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  /* ========= LOADING ========= */
  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <p className="text-xl">Loading category...</p>
      </div>
    );
  }

  /* ========= CATEGORY NOT FOUND ========= */
  if (!category) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="text-center">
          <p className="text-xl mb-4">Category not found</p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#862b2a] text-white px-6 py-3 rounded-lg"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-2xl hover:text-[#862b2a]"
          >
            <FaArrowLeft />
          </button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {category.name}
            </h1>
            {category.description && (
              <p className="mt-2 text-lg text-gray-500">
                {category.description}
              </p>
            )}
          </div>
        </div>

        {/* PRODUCTS */}
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              No products found in this category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div
                key={item.id || index}
                className="rounded bg-white text-black shadow-lg overflow-hidden"
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
                      (e.target.src =
                        "https://via.placeholder.com/400")
                    }
                  />
                </div>

                {/* DETAILS */}
                <div className="p-3">
                  <h3 className="font-semibold text-sm line-clamp-2">
                    {item.title}
                  </h3>

                  <div className="mt-2">
                    {item.oldPrice && (
                      <p className="text-gray-400 text-sm line-through">
                        {item.oldPrice}
                      </p>
                    )}
                    <p className="font-bold text-lg text-[#862b2a]">
                      From {item.newPrice}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => onBuyNow && onBuyNow(item)}
                      className="w-1/2 bg-[#898383] text-white py-2 rounded-lg"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-1/2 bg-[#862b2a] text-white py-2 rounded-lg"
                    >
                      Add to Cart
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

export default CategoryPage;
