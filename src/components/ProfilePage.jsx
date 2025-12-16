import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useOrder } from '../context/OrderContext';
import { useTheme } from '../context/ThemeContext';
import { FaArrowLeft, FaUser, FaEnvelope, FaSignOutAlt, FaEdit, FaSave, FaTimes, FaShoppingBag, FaHeart, FaCalendarAlt, FaCrown, FaStar, FaGift } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { user, isLoggedIn, logout } = useAuth();
  const { orders } = useOrder();
  
  // Calculate user stats
  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum, order) => {
    const price = parseFloat(order.total?.replace('₹', '').replace(',', '') || 0);
    return sum + price;
  }, 0);
  const memberSince = new Date().getFullYear() - 1; // Mock data
  const loyaltyPoints = Math.floor(totalSpent / 100); // 1 point per ₹100
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  const handleLogout = () => {
    logout();
    toast.success('👋 Logged out successfully!');
    navigate('/');
  };

  const handleSave = () => {
    // In real app, this would update user data via API
    toast.success('✅ Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: user?.name || '',
      email: user?.email || ''
    });
    setIsEditing(false);
  };

  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex items-center justify-center transition-colors duration-200`}>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Please Login</h1>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>You need to login to view your profile</p>
          <button 
            onClick={() => navigate('/')}
            className="text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            style={{backgroundColor: '#862b2a'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#6b1f1e'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#862b2a'}
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-200`}>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate('/')} className="text-2xl transition-colors" onMouseEnter={(e) => e.target.style.color = '#862b2a'} onMouseLeave={(e) => e.target.style.color = ''}>
            <FaArrowLeft />
          </button>
          <h1 className="text-3xl font-bold">My Profile</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-r from-[#862b2a] to-[#a0342f] rounded-lg p-4 text-white">
            <div className="flex items-center gap-3">
              <FaShoppingBag size={24} />
              <div>
                <p className="text-2xl font-bold">{totalOrders}</p>
                <p className="text-sm opacity-90">Total Orders</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="flex items-center gap-3">
              <FaStar size={24} />
              <div>
                <p className="text-2xl font-bold">₹{totalSpent.toLocaleString()}</p>
                <p className="text-sm opacity-90">Total Spent</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center gap-3">
              <FaGift size={24} />
              <div>
                <p className="text-2xl font-bold">{loyaltyPoints}</p>
                <p className="text-sm opacity-90">Loyalty Points</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="flex items-center gap-3">
              <FaCrown size={24} />
              <div>
                <p className="text-2xl font-bold">{memberSince}</p>
                <p className="text-sm opacity-90">Member Since</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className={`${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700' : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300'} rounded-xl p-6 border`}>
              <div className="text-center mb-6">
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-r from-[#862b2a] to-[#a0342f] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-3xl">
                      {user.name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className={`bg-green-500 w-6 h-6 rounded-full border-2 ${isDark ? 'border-gray-900' : 'border-gray-200'} flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold break-words" style={{color: '#862b2a'}}>{user.name}</h2>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} break-words text-sm`}>{user.email}</p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold" style={{backgroundColor: '#862b2a20', color: '#862b2a'}}>
                    <FaCrown size={12} /> Premium Member
                  </span>
                </div>
              </div>

              {!isEditing ? (
                <div className="space-y-4">
                  <div className={`flex items-center gap-3 p-4 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-r from-gray-200 to-gray-300 border-gray-400'} rounded-lg border`}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#862b2a20'}}>
                      <FaUser className="flex-shrink-0" style={{color: '#862b2a'}} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium`}>Full Name</p>
                      <p className={`font-semibold break-words ${isDark ? 'text-white' : 'text-black'}`}>{user.name}</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-3 p-4 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-r from-gray-200 to-gray-300 border-gray-400'} rounded-lg border`}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#862b2a20'}}>
                      <FaEnvelope className="flex-shrink-0" style={{color: '#862b2a'}} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium`}>Email Address</p>
                      <p className={`font-semibold break-words text-sm ${isDark ? 'text-white' : 'text-black'}`}>{user.email}</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-3 p-4 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-r from-gray-200 to-gray-300 border-gray-400'} rounded-lg border`}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#862b2a20'}}>
                      <FaCalendarAlt className="flex-shrink-0" style={{color: '#862b2a'}} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium`}>Member Since</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{memberSince}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-8">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="w-full text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl border"
                      style={{background: 'linear-gradient(to right, #862b2a, #a0342f)', borderColor: '#862b2a50'}}
                      onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #6b1f1e, #7d2924)'}
                      onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #862b2a, #a0342f)'}
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <FaEdit size={16} />
                      </div>
                      <span className="text-lg">Edit Profile</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-red-600 hover:to-red-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl border border-gray-600 hover:border-red-500/50"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <FaSignOutAlt size={16} />
                      </div>
                      <span className="text-lg">Logout</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Name</label>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({...editData, name: e.target.value})}
                      className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Email</label>
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({...editData, email: e.target.value})}
                      className={`w-full px-3 py-2 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} border rounded-lg focus:outline-none focus:border-orange-500`}
                    />
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={handleSave}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <FaSave size={14} /> Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <FaTimes size={14} /> Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <div className={`${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700' : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300'} rounded-xl p-6 border`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold" style={{color: '#862b2a'}}>Order History</h3>
                <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FaShoppingBag />
                  <span>{orders.length} Orders</span>
                </div>
              </div>
              
              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>No orders yet</p>
                  <button 
                    onClick={() => navigate('/')}
                    className="text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    style={{backgroundColor: '#862b2a'}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#6b1f1e'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#862b2a'}
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.slice(0, 5).map((order, index) => (
                    <div key={order.id} className={`${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-r from-gray-200 to-gray-300 border-gray-400'} rounded-lg p-3 md:p-5 border hover:border-orange-500/50 transition-all duration-200 transform hover:scale-[1.02]`}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#862b2a20'}}>
                              <span className="font-bold text-xs md:text-sm" style={{color: '#862b2a'}}>#{index + 1}</span>
                            </div>
                            <h4 className={`font-semibold text-sm md:text-base ${isDark ? 'text-white' : 'text-black'}`}>Order #{order.id}</h4>
                          </div>
                          <p className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-1`}>
                            <FaCalendarAlt size={10} /> {order.orderDate}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="font-bold text-lg md:text-2xl" style={{color: '#862b2a'}}>{order.total}</p>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold shadow-lg mt-1 ${
                            order.status === 'Processing' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black' :
                            order.status === 'Shipped' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' :
                            'bg-gradient-to-r from-green-500 to-green-600 text-white'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      {order.item && (
                        <div className={`flex gap-3 ${isDark ? 'bg-gray-800/50' : 'bg-gray-300/50'} rounded-lg p-3`}>
                          <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                            {order.item.video ? (
                              <video
                                src={order.item.video}
                                className="w-full h-full object-cover rounded-lg border-2 border-orange-500/30"
                                muted
                              />
                            ) : (
                              <img
                                src={order.item.img}
                                className="w-full h-full object-cover rounded-lg border-2 border-orange-500/30"
                                alt={order.item.title}
                              />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-semibold text-sm md:text-base ${isDark ? 'text-white' : 'text-black'} mb-1 truncate`}>{order.item.title}</p>
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{backgroundColor: '#862b2a20', color: '#862b2a'}}>GLAZONOID</span>
                              <span className="text-xs bg-green-500/20 text-green-400 px-1 md:px-2 py-1 rounded-full font-semibold">5 Year Warranty</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {orders.length > 5 && (
                    <button 
                      onClick={() => navigate('/cart')}
                      className="w-full text-white py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                      style={{background: 'linear-gradient(to right, #862b2a, #a0342f)'}}
                      onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #6b1f1e, #7d2924)'}
                      onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #862b2a, #a0342f)'}
                    >
                      <FaShoppingBag /> View All {orders.length} Orders
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;