import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ReturnPolicyPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-8 md:py-12 px-4 md:px-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8" style={{color: '#862b2a'}}>Return Policy</h1>
        
        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Product Return Policy</h2>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Eligibility for Returns</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              At Espejo, customer satisfaction is important to us. Returns are accepted under the following conditions:
            </p>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>The product is damaged, defective, or incorrect at the time of delivery</li>
              <li>The return request is raised within 48 hours of receiving the product</li>
              <li>The product is unused, uninstalled, and returned in original packaging</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Non-Returnable Items</h2>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>Customized or made-to-order mirrors and cabinets</li>
              <li>Products damaged due to improper handling, installation, or misuse</li>
              <li>Clearance or discounted items (unless damaged on delivery)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Return Process</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              To initiate a return, customers must contact Espejo customer support with order details and supporting images. Upon approval, return instructions will be shared.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;