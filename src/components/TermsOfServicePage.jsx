import React from 'react';
import { useTheme } from '../context/ThemeContext';

const TermsOfServicePage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">Terms of Service</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              By accessing or using ESPEZO's website and services, you agree to comply with these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Products & Services</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              All product descriptions, images, pricing, and availability are subject to change without prior notice. ESPEZO reserves the right to discontinue or modify products at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Pricing & Accuracy</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              We strive to ensure accurate pricing and product information. In case of errors, ESPEZO reserves the right to cancel or modify orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              All content including logos, images, designs, text, and trademarks are the property of ESPEZO and may not be used without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              ESPEZO shall not be liable for indirect, incidental, or consequential damages arising from the use of our products or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              These terms shall be governed and interpreted in accordance with the laws of India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              For any questions regarding these policies, please contact:
            </p>
            <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg`}>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>ESPEZO Customer Support</p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email: [Add Official Email]</p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Phone: [Add Contact Number]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;