
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import BestSellerPage from './components/BestSellerPage.jsx'
import MetalMirrorPage from './components/MetalMirrorPage.jsx'
import AboutUsPage from './components/AboutUsPage.jsx'
import ContactUsPage from './components/ContactUsPage.jsx'
import SearchPage from './components/SearchPage.jsx'
import WishlistPage from './components/WishlistPage.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import Footer from './components/Footer.jsx'
import CartPage from './components/CartPage.jsx'
import CheckoutPage from './components/CheckoutPage.jsx'
import AuthModal from './components/AuthModal.jsx'
import ScrollToTopButton from './components/ScrollToTop.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import { OrderProvider } from './context/OrderContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'


function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [pendingCheckout, setPendingCheckout] = useState(null);
  const { isLoggedIn } = useAuth();

  const handleBuyNow = (item) => {
    setSelectedItem(item);
    if (isLoggedIn) {
      window.location.href = '/checkout';
    } else {
      setPendingCheckout(item);
      setShowAuth(true);
    }
  };

  const handleLoginSuccess = () => {
    if (pendingCheckout) {
      window.location.href = '/checkout';
      setPendingCheckout(null);
    }
  };

  return (
    <OrderProvider>
      <WishlistProvider>
        <CartProvider>
        <Router>
          <ScrollToTopOnRouteChange />
          <Header onUserClick={() => setShowAuth(true)} />
          
          <Routes>
            <Route path="/" element={<HomePage onBuyNow={handleBuyNow} />} />
            <Route path="/bestseller" element={<BestSellerPage onBuyNow={handleBuyNow} />} />
            <Route path="/metal-mirror" element={<MetalMirrorPage onBuyNow={handleBuyNow} />} />
            <Route path="/about" element={<AboutUsPage onBuyNow={handleBuyNow} />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/search" element={<SearchPage onBuyNow={handleBuyNow} />} />
            <Route path="/wishlist" element={<WishlistPage onBuyNow={handleBuyNow} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage selectedItem={selectedItem} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          <Footer />
          <ScrollToTopButton />
          
          <AuthModal 
            isOpen={showAuth} 
            onClose={() => setShowAuth(false)}
            onLoginSuccess={handleLoginSuccess}
          />
          
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Router>
        </CartProvider>
      </WishlistProvider>
    </OrderProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
