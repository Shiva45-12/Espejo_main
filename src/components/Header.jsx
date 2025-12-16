import React, { useState } from "react";
import { FaSearch, FaUser, FaBars, FaTimes, FaShoppingCart, FaSignOutAlt, FaHeart, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useTheme } from '../context/ThemeContext';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';



const Header = ({ onUserClick }) => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { getTotalWishlistItems } = useWishlist();
  const { isDark, toggleTheme } = useTheme();
  const { isLoggedIn, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/');
  };

  const Menu = [
    { name: "Home", path: "/" },
    { name: "BestSeller", path: "/bestseller" },
    // { name: "Led Mirror", path: "/" },
    // { name: "Accessories", path: "/" },
    { name: "Metal Mirror", path: "/metal-mirror" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" }
  ];

  const handleMenuClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} w-full sticky top-0 z-50 shadow-lg transition-colors duration-200`}>

      {/* Header Row */}
      <div className="flex items-center justify-between px-4 py-2">

        {/* Hamburger (LEFT on Mobile) */}
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* Logo Center on Mobile */}
        <h1
          className="mx-auto md:mx-0 cursor-pointer flex items-center"
          onClick={() => navigate('/')}
        >
          <img
            src={"/Logo/PNG/Logo.png"}
            alt="ESPEJO Logo"
            className="h-[30px] w-[200px] md:h-[70px] md:w-[300px] object-contain"
          />

        </h1>




        {/* DESKTOP MENU */}
        <ul className="hidden md:flex md:items-center md:justify-center md:gap-10 md:py-2 font-semibold text-lg">
          {Menu.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer transition-colors pb-1`}
              style={{
                color: location.pathname === item.path ? '#862b2a' : 'inherit',
                borderBottom: location.pathname === item.path ? '2px solid #862b2a' : 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#862b2a'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === item.path ? '#862b2a' : 'inherit'}
              onClick={() => handleMenuClick(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Icons Right */}
        <div className="flex gap-4 text-2xl md:mr-10">
          <div className="relative cursor-pointer" onClick={() => navigate('/wishlist')}>
            <FaHeart />
            {getTotalWishlistItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalWishlistItems()}
              </span>
            )}
          </div>
          <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
            <FaShoppingCart />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" style={{ backgroundColor: '#862b2a' }}>
                {getTotalItems()}
              </span>
            )}
          </div>

          <div
            className="cursor-pointer transition-colors"
            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
            onMouseLeave={(e) => e.target.style.color = ''}
            onClick={toggleTheme}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </div>
          {isLoggedIn ? (
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors"
              style={{ backgroundColor: '#862b2a' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#6b1f1e'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#862b2a'}
              onClick={() => navigate('/profile')}
              title={`Profile - ${user?.name}`}
            >
              <span className="text-white font-bold text-sm">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            </div>
          ) : (
            <FaUser className="cursor-pointer" onClick={onUserClick} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul
        className={`
          md:hidden
          ${isDark ? 'bg-black text-white' : 'bg-white text-black'} w-full text-center font-semibold text-lg
          transition-all duration-300
          ${open ? "max-h-screen py-4" : "max-h-0 overflow-hidden"}
        `}
      >
        {Menu.map((item, index) => (
          <li
            key={index}
            className={`py-3 cursor-pointer transition-colors ${location.pathname === item.path
                ? `mx-4 rounded`
                : ''
              }`}
            style={{
              color: location.pathname === item.path ? '#862b2a' : 'inherit',
              backgroundColor: location.pathname === item.path ? (isDark ? '#6b6161' : '#f3f4f6') : 'transparent'
            }}
            onClick={() => handleMenuClick(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>



      {/* Search Bar */}
      {searchOpen && (
        <div className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} p-4 border-t transition-colors duration-200`}>
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mirrors, accessories..."
                className={`w-full px-4 py-2 ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'} rounded-lg focus:outline-none pr-10 transition-colors duration-200`}
                onFocus={(e) => e.target.style.borderColor = '#862b2a'}
                onBlur={(e) => e.target.style.borderColor = ''}
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 transition-colors"
                style={{ color: '#862b2a' }}
                onMouseEnter={(e) => e.target.style.color = '#6b1f1e'}
                onMouseLeave={(e) => e.target.style.color = '#862b2a'}
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      )}

      <hr className={`w-[98%] mx-auto ${isDark ? 'border-gray-700' : 'border-gray-300'}`} />
    </div>
  );
};

export default Header;
