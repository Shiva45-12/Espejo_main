import React from 'react';
import Slider from './Slider.jsx';
import Company from './Company.jsx';
import Card from './Card.jsx';
import BestSeller from './BestSeller.jsx';
import AboutEspezo from './AboutEspezo.jsx';
import FeaturesSection from './FeaturesSection.jsx';

const HomePage = ({ onBuyNow }) => {
  return (
    <>
      <Slider />
      <Company />
      <hr className='w-[95%] border border-2 mx-auto text-gray-500' />
      <Card onBuyNow={onBuyNow} />
      <hr className='w-[95%] border border-2 mx-auto text-gray-500' />
      <BestSeller onBuyNow={onBuyNow} />
      <hr className='w-[95%] border border-2 mx-auto text-gray-500' />
      <AboutEspezo onBuyNow={onBuyNow} />
      <hr className='w-[95%] border border-2 mx-auto text-gray-500' />
      <FeaturesSection />
      <hr className='w-[95%] border border-2 mx-auto text-gray-500' />
    </>
  );
};

export default HomePage;