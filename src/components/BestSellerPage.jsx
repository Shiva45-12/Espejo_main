import React from 'react';
import BestSeller from './BestSeller';
import { useTheme } from '../context/ThemeContext';

const BestSellerPage = ({ onBuyNow }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen transition-colors duration-200`}>
      <div className="pt-8">
        <h1 className={`text-center text-4xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-8`}>Best Seller Products</h1>
        <BestSeller onBuyNow={onBuyNow} />
      </div>
    </div>
  );
};

export default BestSellerPage;