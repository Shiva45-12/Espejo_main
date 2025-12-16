import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const PrivacyPolicyPage = () => {
  const { isDark } = useTheme();
  const [active, setActive] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'collect', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Your Information' },
    { id: 'security', title: 'Data Protection & Security' },
    { id: 'sharing', title: 'Third-Party Sharing' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies' },
    { id: 'updates', title: 'Updates to This Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>

      {/* HERO */}
      <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20 text-center ${isDark ? 'text-white' : 'text-black'}`}>
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm opacity-90">
          Last Updated: December 15, 2025
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <aside className="md:col-span-1">
          <div
            className={`sticky top-24 p-6 rounded-xl border
            ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}
          >
            <h3 className="font-semibold mb-4">Table of Contents</h3>

            <ul className="space-y-2">
              {sections.map((sec, index) => (
                <li
                  key={sec.id}
                  onClick={() => setActive(sec.id)}
                  className={`cursor-pointer px-4 py-2 rounded-md text-sm transition
                    ${
                      active === sec.id
                        ? 'text-black font-semibold'
                        : isDark
                        ? 'text-gray-400 hover:bg-gray-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  style={active === sec.id ? {backgroundColor: '#862b2a', color: 'white'} : {}}
                  className={`cursor-pointer px-4 py-2 rounded-md text-sm transition ${
                      active === sec.id
                        ? ''
                        : isDark
                        ? 'text-gray-400 hover:bg-gray-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {index + 1}. {sec.title}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="md:col-span-3">

          {active === 'introduction' && (
            <Section isDark={isDark} title="1. Introduction">
              Welcome to ESPEJO. We respect your privacy and are committed to protecting the personal information you share with us through our website, communication channels, and services. This Privacy Policy explains how ESPEJO collects, uses, discloses, and safeguards your information when you interact with us.
            </Section>
          )}

          {active === 'collect' && (
            <Section isDark={isDark} title="2. Information We Collect">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Personal details such as name, phone number, email address, billing and shipping address</li>
                <li>Order and payment-related information</li>
                <li>Information shared through contact forms, inquiries, or customer support</li>
                <li>Technical data such as IP address, browser type, and website usage data</li>
              </ul>
            </Section>
          )}

          {active === 'usage' && (
            <Section isDark={isDark} title="3. How We Use Your Information">
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill orders</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Improve our products, services, and website experience</li>
                <li>Send order updates, service-related communication, or promotional content (if opted in)</li>
              </ul>
            </Section>
          )}

          {active === 'security' && (
            <Section isDark={isDark} title="4. Data Protection & Security">
              ESPEJO uses appropriate technical and organizational measures to protect your personal data against unauthorized access, misuse, or disclosure.
            </Section>
          )}

          {active === 'sharing' && (
            <Section isDark={isDark} title="5. Third-Party Sharing">
              We do not sell or rent personal data. Information may be shared only with trusted partners such as logistics providers or payment gateways for order fulfillment and transactions.
            </Section>
          )}

          {active === 'rights' && (
            <Section isDark={isDark} title="6. Your Rights">
              You may request access, correction, or deletion of your personal data by contacting us.
            </Section>
          )}

          {active === 'cookies' && (
            <Section isDark={isDark} title="7. Cookies">
              We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
            </Section>
          )}

          {active === 'updates' && (
            <Section isDark={isDark} title="8. Updates to This Policy">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </Section>
          )}

          {active === 'contact' && (
            <Section isDark={isDark} title="9. Contact Us">
              If you have any questions about this Privacy Policy, please contact us through our Contact Us page or email us directly.
            </Section>
          )}

        </main>
      </div>
    </div>
  );
};

/* SECTION CARD */
const Section = ({ title, children, isDark }) => (
  <section
    className={`rounded-xl border p-8 mb-6
    ${isDark ? 'bg-black border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}
  >
    <h2 className="text-2xl font-semibold mb-4 border-l-4 pl-4" style={{borderLeftColor: '#862b2a'}}>
      {title}
    </h2>
    <div className="leading-relaxed">{children}</div>
  </section>
);

export default PrivacyPolicyPage;
