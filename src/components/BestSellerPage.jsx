import React from 'react';
import BestSeller from './BestSeller';

const BestSellerPage = ({ onBuyNow }) => {
  return (
    <div className="bg-black min-h-screen">
      <div className="pt-8">
        <h1 className="text-center text-4xl font-bold text-white mb-8">Best Seller Products</h1>
        <BestSeller onBuyNow={onBuyNow} />
      </div>
    </div>
  );
};

export default BestSellerPage;