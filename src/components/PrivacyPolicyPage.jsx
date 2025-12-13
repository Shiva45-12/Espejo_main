import React from 'react';
import { useTheme } from '../context/ThemeContext';

const PrivacyPolicyPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              Welcome to ESPEZO. We respect your privacy and are committed to protecting the personal information you share with us through our website, communication channels, and services. This Privacy Policy explains how ESPEZO collects, uses, discloses, and safeguards your information when you interact with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>We may collect the following types of information:</p>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>Personal details such as name, phone number, email address, billing and shipping address</li>
              <li>Order and payment-related information</li>
              <li>Information shared through contact forms, inquiries, or customer support</li>
              <li>Technical data such as IP address, browser type, and website usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>Your information is used to:</p>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>Process and fulfill orders</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Improve our products, services, and website experience</li>
              <li>Send order updates, service-related communication, or promotional content (if opted in)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Protection & Security</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              ESPEZO uses appropriate technical and organizational measures to protect your personal data against unauthorized access, misuse, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Sharing</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              We do not sell or rent personal data. Information may be shared only with trusted partners such as logistics providers or payment gateways for order fulfillment and transactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              You may request access, correction, or deletion of your personal data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              If you have any questions about this Privacy Policy, please contact us through our Contact Us page or email us directly.
            </p>
          </section>

         
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;