import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const Slider = ({ onOrderNow }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleOrderNow = () => {
    if (isLoggedIn) {
      navigate('/bestseller');
      toast.success('🛍️ Browse our best selling mirrors!');
    } else {
      if (onOrderNow) {
        onOrderNow();
      } else {
        navigate('/bestseller');
        toast.info('👋 Check out our amazing mirror collection!');
      }
    }
  };
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

        <p className="font-semibold text-lg md:text-2xl" style={{color: '#862b2a'}}>
          75000+ HAPPY CLIENT
        </p>

        <button 
          onClick={handleOrderNow}
          className="text-white font-semibold text-lg md:text-xl px-8 py-3 rounded-lg mt-3 transition-all duration-200 transform hover:scale-105 shadow-lg"
          style={{backgroundColor: '#898383'}}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#6b6161'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#898383'}
        >
          Order Now
        </button>
      </div>

    </div>
  )
}

export default Slider
