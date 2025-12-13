import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Footer = ({ onLoginClick }) => {
    const { isDark } = useTheme();
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    
    return (
        <footer className={`${isDark ? 'bg-black text-white border-[#1e1e1e]' : 'bg-gray-100 text-black border-gray-300'} py-10 px-8 md:px-12 border-t transition-colors duration-200`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* OUR COMPANY */}
                <div className="lg:px-8">
                    <h3 className={`text-lg md:text-[20px] font-semibold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Our Company</h3>
                    <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[16px]`}>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => isLoggedIn ? navigate('/profile') : onLoginClick()}
                        >
                            {isLoggedIn ? 'My Account' : 'Login/Create account'}
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/company-profile')}
                        >
                            Company Profile
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/about')}
                        >
                            About Us
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/privacy-policy')}
                        >
                            Privacy Policy
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/refund-policy')}
                        >
                            Refund Policy
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/terms-of-service')}
                        >
                            Terms of Service
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/why-choose-espezo')}
                        >
                            Why Choose ESPEZO?
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/return-policy')}
                        >
                            Return Policy
                        </li>
                        
                    </ul>
                   
                </div>

                {/* PRODUCTS */}
                <div className="lg:px-8">
                    <h3 className={`text-lg md:text-[20px] font-semibold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Products</h3>
                    <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[16px]`}>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/bathroom-cabinets')}>Bathroom Cabinets</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/bathroom-mirrors')}>Bathroom Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/dressing-table-mirrors')}>Dressing Table Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/led-mirrors')}>LED Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/makeup-mirrors')}>Makeup Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/metal-mirror')}>Metal Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/oval-mirrors')}>Oval Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/rectangle-mirrors')}>Rectangle Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/round-mirrors')}>Round Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/standing-mirrors')}>Standing Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/vanity-mirrors')}>Vanity Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/wall-mirrors')}>Wall Mirrors</li>
                        <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => navigate('/products/wash-basin-mirrors')}>Wash Basin Mirrors</li>
                    </ul>
                </div>

                {/* EXPLORE */}
                <div className="lg:px-8">
                    <h3 className={`text-lg md:text-[20px] font-semibold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Explore</h3>
                    <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[16px]`}>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/become-dealer')}
                        >
                            Become a dealer
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/sitemap')}
                        >
                            Sitemap
                        </li>
                        <li 
                            className="cursor-pointer hover:text-orange-400 transition-colors"
                            onClick={() => navigate('/blog')}
                        >
                            Blog
                        </li>
                    </ul>

                     {/* Social Icons */}
                    <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-300'} p-4 rounded-lg border mt-6 md:mt-8`}>
                        <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>Follow Us</h4>
                        <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[16px]`}>
                            <div className={`flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-colors p-2 border rounded ${isDark ? 'border-gray-600 hover:border-orange-400' : 'border-gray-400 hover:border-orange-400'}`}>
                                <FaFacebookF /> <span>Facebook</span>
                            </div>
                            <div className={`flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-colors p-2 border rounded ${isDark ? 'border-gray-600 hover:border-orange-400' : 'border-gray-400 hover:border-orange-400'}`}>
                                <FaTwitter /> <span>Twitter</span>
                            </div>
                            <div className={`flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-colors p-2 border rounded ${isDark ? 'border-gray-600 hover:border-orange-400' : 'border-gray-400 hover:border-orange-400'}`}>
                                <FaInstagram /> <span>Instagram</span>
                            </div>
                            <div className={`flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-colors p-2 border rounded ${isDark ? 'border-gray-600 hover:border-orange-400' : 'border-gray-400 hover:border-orange-400'}`}>
                                <FaLinkedinIn /> <span>LinkedIn</span>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div><br />
            <hr className="w-[98%] mx-auto border border-2 text-gray-300"/>

            <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-xs sm:text-sm font-semibold text-center mt-8`}>
                Copyright &copy; 2025 <span className="text-orange-400">Espezo </span> | Designed by  <span 
                    className="text-orange-400 cursor-pointer hover:text-orange-300 transition-colors"
                    onClick={() => window.open('https://digicoders.in/', '_blank')}
                >
                  Team  DigiCoders
                </span>
            </p>

        </footer>
    );
};

export default Footer;
