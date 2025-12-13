import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrder } from "../context/OrderContext";
import { useTheme } from "../context/ThemeContext";
import { FaPlus, FaMinus, FaTrash, FaArrowLeft } from "react-icons/fa";

const CartPage = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useCart();
  const { orders } = useOrder();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* BACK BUTTON & TITLE */}
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <button
            onClick={() => navigate("/")}
            className="text-2xl hover:text-orange-500"
          >
            <FaArrowLeft />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold">Cart & Orders</h1>
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-6 md:mb-8">
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold ${
              activeTab === "cart"
                ? "bg-orange-500 text-white"
                : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
            }`}
          >
            Cart ({cartItems.length})
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold ${
              activeTab === "orders"
                ? "bg-orange-500 text-white"
                : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
            }`}
          >
            Orders ({orders.length})
          </button>
        </div>

        {/* ========== CART SECTION ========== */}
        {activeTab === "cart" ? (
          cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Your cart is empty</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* LEFT SIDE — CART ITEMS */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-4 md:p-6 flex flex-col lg:flex-row gap-6 border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
                  >
                    {/* IMAGE */}
                    <div className="w-full h-48 md:h-56 lg:w-48 lg:h-48 flex-shrink-0">
                      {item.video ? (
                        <video
                          src={item.video}
                          className="w-full h-full object-cover rounded-lg"
                          autoPlay
                          loop
                          muted
                        />
                      ) : (
                        <img
                          src={item.img || item.image}
                          className="w-full h-full object-cover rounded-lg"
                          alt={item.title || item.name || 'Product'}
                        />
                      )}
                    </div>

                    {/* DETAILS */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-1">
                        {item.title || item.name || 'Product'}
                      </h3>

                      <p className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                        {item.price}
                      </p>

                      {/* QUANTITY */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Quantity:</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className={`${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-300 hover:bg-gray-400 text-black'} p-2 rounded`}
                          >
                            <FaMinus />
                          </button>

                          <span className={`px-4 py-2 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} rounded text-lg font-semibold`}>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className={`${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-300 hover:bg-gray-400 text-black'} p-2 rounded`}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>

                      {/* PRODUCT INFO */}
                      <div className={`space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm md:text-base`}>
                        <p>
                          <span className="font-semibold">Brand:</span>{" "}
                          GLAZONOID
                        </p>
                        <p>
                          <span className="font-semibold">Warranty:</span> 5
                          Years
                        </p>
                        <p>
                          <span className="font-semibold">Material:</span>{" "}
                          Premium Glass
                        </p>
                        <p>
                          <span className="font-semibold">Features:</span> LED
                          Backlit, Touch Sensor
                        </p>
                      </div>

                      {/* REMOVE BUTTON */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2"
                      >
                        <FaTrash /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE — ORDER SUMMARY */}
              <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-5 md:p-6 h-fit border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                <h2 className="text-xl md:text-2xl font-bold mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 text-sm md:text-base">
                  {cartItems.map((item) => {
                    const numericPrice = parseFloat(
                      item.price.replace("₹", "").replace(",", "")
                    );

                    return (
                      <div key={item.id} className="flex justify-between">
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {(item.title || item.name || 'Product').substring(0, 18)}... ×{item.quantity}
                        </span>

                        <span>
                          ₹
                          {(
                            numericPrice * item.quantity
                          ).toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <hr className={`${isDark ? 'border-gray-700' : 'border-gray-300'} mb-4`} />

                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>Total:</span>
                  <span className="text-orange-500">
                    ₹{getTotalPrice().toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )
        ) : (
          /* ========== ORDERS SECTION ========== */
          orders.length === 0 ? (
            <div className="text-center py-20">
              <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>No orders yet</p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-6 border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Order #{order.id}
                      </h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Ordered on {order.orderDate}
                      </p>

                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                          order.status === "Processing"
                            ? "bg-yellow-500 text-black"
                            : order.status === "Shipped"
                            ? "bg-blue-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold text-orange-500">
                        {order.total}
                      </p>
                    </div>
                  </div>

                  {order.item && (
                    <div className={`flex gap-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'} pt-4`}>
                      <div className="w-24 h-24 flex-shrink-0">
                        {order.item.video ? (
                          <video
                            src={order.item.video}
                            className="w-full h-full object-cover rounded"
                            muted
                          />
                        ) : (
                          <img
                            src={order.item.img || 'https://via.placeholder.com/150'}
                            className="w-full h-full object-cover rounded"
                            alt={order.item.title || 'Product'}
                          />
                        )}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold">{order.item.title || 'Product'}</h4>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Brand: GLAZONOID</p>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Warranty: 5 Years</p>
                      </div>
                    </div>
                  )}

                  {order.shippingInfo && (
                    <div className={`mt-4 p-4 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded`}>
                      <h5 className="font-semibold mb-2">
                        Shipping Address:
                      </h5>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                        {order.shippingInfo.firstName || ''}{" "}
                        {order.shippingInfo.lastName || ''}
                        <br />
                        {order.shippingInfo.address || ''}
                        <br />
                        {order.shippingInfo.city || ''},{" "}
                        {order.shippingInfo.state || ''} -{" "}
                        {order.shippingInfo.pincode || ''}
                        <br />
                        Phone: {order.shippingInfo.phone || ''}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CartPage;