import React from 'react';
import { useTheme } from '../context/ThemeContext';

const WhyChooseEspezoPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-8 md:py-12 px-4 md:px-6`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-orange-500">Why Choose ESPEZO?</h1>
        
        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Premium Quality Materials</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              Our mirrors are made using high-grade glass and durable frames to ensure clarity, safety, and longevity.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-green-500">✔</span> Modern & Timeless Designs
            </h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              Minimal, elegant, and contemporary designs that suit both classic and modern interiors.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-green-500">✔</span> Functional Innovation
            </h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              From LED illumination to moisture-resistant finishes, ESPEZO mirrors are designed for real-world use.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-green-500">✔</span> Perfect for Homes & Commercial Spaces
            </h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              Ideal for bathrooms, bedrooms, living areas, salons, hotels, and retail environments.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEspezoPage;