import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useOrder } from '../context/OrderContext';
import { useTheme } from '../context/ThemeContext';
import { toast } from 'react-toastify';

const CheckoutPage = ({ selectedItem }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { addOrder } = useOrder();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({
      item: selectedItem,
      shippingInfo: formData,
      total: selectedItem?.price
    });
    toast.success('🎉 Order placed successfully! Thank you for shopping with Espejo!');
    navigate('/');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate('/')} className="text-2xl hover:text-orange-500">
            <FaArrowLeft />
          </button>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-6`}>
            <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                  rows="3"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Payment Method</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Credit/Debit Card
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    UPI
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg mt-6"
              >
                Place Order
              </button>
            </form>
          </div>

          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-6`}>
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            {selectedItem && (
              <div className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} pb-4 mb-4`}>
                <div className="flex gap-4">
                  {selectedItem.video ? (
                    <video
                      src={selectedItem.video}
                      className="w-20 h-20 object-cover rounded"
                      muted
                    />
                  ) : (
                    <img
                      src={selectedItem.img}
                      className="w-20 h-20 object-cover rounded"
                      alt={selectedItem.title}
                    />
                  )}
                  <div>
                    <h3 className="font-semibold">{selectedItem.title}</h3>
                    <p className="text-orange-500 font-bold text-lg">{selectedItem.price}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{selectedItem?.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>₹0</span>
              </div>
            </div>

            <hr className={`${isDark ? 'border-gray-700' : 'border-gray-300'} mb-4`} />
            
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span className="text-orange-500">{selectedItem?.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;