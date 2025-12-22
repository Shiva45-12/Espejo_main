import React from 'react';
import BestSeller from './BestSeller';
import { useTheme } from '../context/ThemeContext';

const BestSellerPage = ({ onBuyNow }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen transition-colors duration-200`}>
      <div className="pt-8">
        <h1 className={`text-center text-4xl md:text-5xl font-bold mb-4`} style={{color: '#862b2a'}}>Best Seller Products</h1>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 rounded" style={{backgroundColor: '#862b2a'}}></div>
        </div>
        <BestSeller onBuyNow={onBuyNow} />
      </div>
    </div>
  );
};

export default BestSellerPage;