import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import DealerApplicationModal from './DealerApplicationModal';

const BecomeDealerPage = () => {
  const { isDark } = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">Become a Dealer</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Join ESPEZO Dealer Network</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              Partner with ESPEZO and become an authorized dealer to expand your business with our premium mirror collection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>Competitive wholesale pricing</li>
              <li>Marketing support and materials</li>
              <li>Product training and support</li>
              <li>Exclusive dealer territories</li>
              <li>Regular new product updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>Valid business license</li>
              <li>Retail or showroom space</li>
              <li>Minimum order commitments</li>
              <li>Customer service capabilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
            <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-6 rounded-lg`}>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                Ready to join our dealer network? Contact us with your business details.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us to Apply
              </button>
            </div>
          </section>
        </div>
      </div>
      
      <DealerApplicationModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
};

export default BecomeDealerPage;