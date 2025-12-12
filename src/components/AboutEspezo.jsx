import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useCart } from '../context/CartContext';

const data = [
  {
    id: 13,
    img: "https://www.glazonoid.com/cdn/shop/products/Ovid-1_600x.jpg?v=1703566479",
    title: "Capsule Shaped LED Mirror with Backlit",
    reviews: 12,
    rating: 4.5,
    oldPrice: "Rs. 5,960.00",
    price: "₹5,662.00",
    newPrice: "Rs. 5,662.00",
  },
  {
    id: 14,
    img: "https://www.glazonoid.com/cdn/shop/products/Ovid-1_600x.jpg?v=1703566479",
    title: "Pebble-Shaped Mirror With Lights",
    reviews: 15,
    rating: 4.5,
    oldPrice: "Rs. 7,450.00",
    price: "₹7,077.50",
    newPrice: "Rs. 7,077.50",
  },
  {
    id: 15,
    img: "https://www.glazonoid.com/cdn/shop/files/doubledoor2_1_600x.webp?v=1742384394",
    title: "Double Door Cabinets | Matt Black Finish",
    reviews: 5,
    rating: 5,
    oldPrice: "Rs. 20,800.00",
    price: "₹19,760.00",
    newPrice: "Rs. 19,760.00",
  },
  {
    id: 16,
    img: "https://www.glazonoid.com/cdn/shop/files/doubledoor2_1_600x.webp?v=1742384394",
    title: "Elegant Border Design Mirror With Lights",
    reviews: 10,
    rating: 4.5,
    oldPrice: "Rs. 7,450.00",
    price: "₹7,077.50",
    newPrice: "Rs. 7,077.50",
  },
];

const AboutEspezo = ({ onBuyNow }) => {
  const { addToCart } = useCart();

  return (
    <div className="p-4 bg-black">
           <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, i) => (
          <div
            key={item.id}
            className="rounded overflow-hidden bg-white text-black relative group shadow-lg"
          >
            {/* Image + Warranty */}
            <div className="relative">
              <div className="absolute top-4 left-0 bg-black text-white px-4 py-2 rounded-r-full flex items-center gap-2 z-10">
                <span className="text-yellow-400 text-2xl font-bold">5</span>
                <div className="leading-tight text-sm">
                  <p className="font-bold">YEAR</p>
                  <p className="text-[10px] tracking-widest">WARRANTY</p>
                </div>
              </div>

              <img src={item.img} className="w-full h-[300px] object-cover" alt="" />
            </div>

            {/* QUICK SHOP */}
            <div className="bg-black text-white text-center py-3 font-semibold text-sm">
              QUICK SHOP
            </div>

            {/* Details */}
            <div className="p-3">
              <p className="text-gray-500 font-bold text-xs">GLAZONOID</p>

              <h3 className="font-semibold mt-1 text-sm line-clamp-1">{item.title}</h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400 text-lg">
                  {Array.from({ length: 5 }).map((_, index) =>
                    index < Math.floor(item.rating) ? (
                      <FaStar key={index} />
                    ) : (
                      <FaRegStar key={index} />
                    )
                  )}
                </div>
                <span className="text-sm">({item.reviews})</span>
              </div>

              {/* Pricing */}
              <div className="mt-1">
                <p className="text-gray-400 text-sm line-through">{item.oldPrice}</p>
                <p className="font-bold text-orange-500 text-lg">From {item.newPrice}</p>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex items-center gap-3">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onBuyNow && onBuyNow(item);
                  }}
                  className="w-1/2 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer"
                >
                  Buy Now
                </button>

                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  className="w-1/2 bg-black text-white py-2 rounded-lg font-semibold border border-gray-700 hover:bg-gray-900 transition cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEspezo;
