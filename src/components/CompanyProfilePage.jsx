import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CompanyProfilePage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8" style={{color: '#862b2a'}}>Company Profile</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About Espejo</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              Espejo is a leading manufacturer and supplier of premium quality mirrors and bathroom accessories. 
              We specialize in creating innovative mirror solutions that combine functionality with aesthetic appeal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              To provide high-quality, innovative mirror solutions that enhance the beauty and functionality of every space.
            </p>
          </section>

          {/* <section>
            <h2 className="text-2xl font-semibold mb-4">Company Details</h2>
            <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-6 rounded-lg`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Founded</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>2020</p>
                </div>
                <div>
                  <h3 className="font-semibold">Industry</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Home Decor & Mirrors</p>
                </div>
                <div>
                  <h3 className="font-semibold">Headquarters</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>India</p>
                </div>
                <div>
                  <h3 className="font-semibold">Products</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Mirrors, LED Mirrors, Bathroom Accessories</p>
                </div>
              </div>
            </div>
          </section> */}

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Bathroom Mirrors', 'LED Mirrors', 'Metal Mirrors', 'Vanity Mirrors', 'Wall Mirrors', 'Standing Mirrors'].map((product, index) => (
                <div key={index} className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg text-center`}>
                  <p className="font-medium">{product}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfilePage;