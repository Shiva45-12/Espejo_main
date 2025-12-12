
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import BestSellerPage from './components/BestSellerPage.jsx'
import MetalMirrorPage from './components/MetalMirrorPage.jsx'
import AboutUsPage from './components/AboutUsPage.jsx'
import ContactUsPage from './components/ContactUsPage.jsx'
import SearchPage from './components/SearchPage.jsx'
import Footer from './components/Footer.jsx'
import CartPage from './components/CartPage.jsx'
import CheckoutPage from './components/CheckoutPage.jsx'
import AuthModal from './components/AuthModal.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import { OrderProvider } from './context/OrderContext.jsx'


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
      <CartProvider>
        <Router>
          <Header onUserClick={() => setShowAuth(true)} />
          
          <Routes>
            <Route path="/" element={<HomePage onBuyNow={handleBuyNow} />} />
            <Route path="/bestseller" element={<BestSellerPage onBuyNow={handleBuyNow} />} />
            <Route path="/metal-mirror" element={<MetalMirrorPage onBuyNow={handleBuyNow} />} />
            <Route path="/about" element={<AboutUsPage onBuyNow={handleBuyNow} />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/search" element={<SearchPage onBuyNow={handleBuyNow} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage selectedItem={selectedItem} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          <Footer />
          
          <AuthModal 
            isOpen={showAuth} 
            onClose={() => setShowAuth(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </Router>
      </CartProvider>
    </OrderProvider>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
