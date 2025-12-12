import React from 'react'

const Slider = () => {
  return (
    <div className="relative w-full">
      
      {/* Background Image */}
      <img
        className="w-full h-[500px] object-cover md:h-[700px]"
        src="https://cdn.shopify.com/s/files/1/0685/2034/5908/files/Untitled_10.001-1_686eaaf9-f851-428e-b2a2-1d0156dc61fc.webp?v=1739714271"
        alt=""
      />

      {/* Text Content */}
      <div className="absolute left-5 top-[45%] md:top-[55%] space-y-2 md:space-y-4">

        <h2 className="text-white font-bold text-lg md:text-2xl">
          Discover
        </h2>

        <p className="text-white font-bold text-3xl md:text-5xl leading-tight">
          INDIA MOST
        </p>
        <p className="text-white font-bold text-3xl md:text-5xl leading-tight">
          INTELLIGENT MIRRORS
        </p>

        <p className="text-orange-400 font-semibold text-lg md:text-2xl">
          75000+ HAPPY CLIENT
        </p>

        <button className="bg-orange-400 text-white font-semibold text-lg md:text-xl px-6 py-2 rounded mt-3">
          Order Now
        </button>
      </div>

    </div>
  )
}

export default Slider
