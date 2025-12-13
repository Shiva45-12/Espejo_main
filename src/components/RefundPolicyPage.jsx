import React from 'react';
import { useTheme } from '../context/ThemeContext';

const RefundPolicyPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">Refund Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Payment & Refund Policy</h2>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Payments</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>ESPEZO accepts payments through secure and trusted payment gateways. Available payment methods may include:</p>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>Credit / Debit Cards</li>
              <li>Net Banking</li>
              <li>UPI</li>
              <li>Other digital payment options as displayed on the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>Approved refunds will be processed after quality inspection of the returned product</li>
              <li>Refunds are issued to the original payment method</li>
              <li>Processing time may take 7–10 business days, depending on the payment provider</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>Orders can be canceled before dispatch within 2-3 days of order</li>
              <li>Once dispatched, cancellations are not permitted</li>
              <li>Customized orders cannot be canceled once production has begun</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Product Return Policy</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              At ESPEZO, customer satisfaction is important to us. Returns are accepted under the following conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Eligibility for Returns</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>Returns are accepted under the following conditions:</p>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>The product is damaged, defective, or incorrect at the time of delivery</li>
              <li>The return request is raised within 48 hours of receiving the product</li>
              <li>The product is unused, uninstalled, and returned in original packaging</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-2 list-disc pl-6`}>
              <li>Customized or made-to-order mirrors and cabinets</li>
              <li>Products damaged due to improper handling, installation, or misuse</li>
              <li>Clearance or discounted items (unless damaged on delivery)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              To initiate a return, customers must contact ESPEZO customer support with order details and supporting images. Upon approval, return instructions will be shared.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Refund Processing</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              Once we receive and inspect your returned item, we will process your refund within the timeframes mentioned above. Refunds will be credited to your original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              For any return or refund queries, please contact our customer support team through our Contact Us page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;