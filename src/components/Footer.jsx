import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Footer = ({ onLoginClick }) => {
    const { isDark } = useTheme();
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoriesRes, productsRes] = await Promise.all([
                    fetch('https://glassadminpanelapi.onrender.com/api/categories'),
                    fetch('https://glassadminpanelapi.onrender.com/api/products')
                ]);
                
                const categoriesData = await categoriesRes.json();
                const productsData = await productsRes.json();
                
                setCategories(categoriesData.categories || []);
                setProducts(productsData.products || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <footer className={`${isDark ? 'bg-black text-white border-[#1e1e1e]' : 'bg-gray-100 text-black border-gray-300'} py-10 px-8 md:px-12 border-t transition-colors duration-200`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* OUR COMPANY */}
                <div className="lg:px-8 text-center md:text-left">

                    {/* logo footer */}
                    <div className="mt-6">
                        <img
                            src="/Logo/PNG/SLogo2.png"
                            alt="ESPEJO Logo"
                            className="h-[80px] md:h-[100px] w-auto object-contain opacity-90 hover:opacity-100 transition cursor-pointer mx-auto md:mx-0"
                            onClick={() => navigate('/')}
                        />

                    </div>
                    <h3 className={`text-lg md:text-[20px] font-semibold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Our Company</h3>
                    <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[16px]`}>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => isLoggedIn ? navigate('/profile') : onLoginClick()}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            {isLoggedIn ? 'My Account' : 'Login/Create account'}
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/company-profile')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Company Profile
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/about')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            About Us
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/contact')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Contact Us
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/privacy-policy')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Privacy Policy
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/refund-policy')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Refund Policy
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/terms-of-service')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Terms of Service
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/why-choose-espezo')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Why Choose ESPEJO?
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/return-policy')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Return Policy
                        </li>
                    </ul>

                </div>

               
                {/* EXPLORE */}
                <div className="lg:px-8 text-center md:text-left">
                    <h3 className={`text-lg md:text-[20px] font-semibold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Explore</h3>
                    <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[16px]`}>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/become-dealer')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Become a dealer
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/sitemap')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Sitemap
                        </li>
                        <li
                            className="cursor-pointer transition-colors"
                            onClick={() => navigate('/blog')}
                            onMouseEnter={(e) => e.target.style.color = '#862b2a'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Blog
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-300'} p-4 rounded-lg border mt-6 md:mt-8`}>
                        <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>Follow Us</h4>
                        <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[16px]`}>
                            <div className={`flex items-center gap-2 cursor-pointer hover:text-[#862b2a] transition-colors p-2 border rounded ${isDark ? 'border-gray-600 hover:border-[#862b2a] ' : 'border-gray-400 hover:border-[#862b2a] '}`}>
                                <FaFacebookF /> <span>Facebook</span>
                            </div>
                            <div className={`flex items-center gap-2 cursor-pointer hover:text-[#862b2a] transition-colors p-2 border rounded ${isDark ? 'border-gray-600 hover:border-[#862b2a] ' : 'border-gray-400 hover:border-[#862b2a] '}`}>
                                <FaTwitter /> <span>Twitter</span>
                            </div>
                            <div className={`flex items-center gap-2 cursor-pointer hover:text-[#862b2a]  transition-colors p-2 border rounded ${isDark ? 'border-gray-600 hover:border-[#862b2a] ' : 'border-gray-400 hover:border-[#862b2a] '}`}>
                                <FaInstagram /> <span>Instagram</span>
                            </div>
                            <div className={`flex items-center gap-2 cursor-pointer hover:text-[#862b2a]  transition-colors p-2 border rounded ${isDark ? 'border-gray-600 hover:border-[#862b2a] ' : 'border-gray-400 hover:border-[#862b2a] '}`}>
                                <FaLinkedinIn /> <span>LinkedIn</span>
                            </div>

                        </div>
                    </div>
                </div>


                 {/* PRODUCTS */}
                <div className="lg:px-8 text-center md:text-left">
                    <h3 className={`text-lg md:text-[20px] font-semibold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Products</h3>
                    <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[16px]`}>
                        {products
                            .filter(product => product.category?.slug) // Only show products with valid category slugs
                            .slice(0, 10)
                            .map((product) => (
                            <li 
                                key={product._id}
                                className="cursor-pointer transition-colors" 
                                onClick={() => {
                                    if (product.category?.slug) {
                                        navigate(`/category/${product.category.slug}`);
                                    }
                                }} 
                                onMouseEnter={(e) => e.target.style.color = '#862b2a'} 
                                onMouseLeave={(e) => e.target.style.color = ''}
                            >
                                {product.name}
                            </li>
                        ))}
                    </ul>
                </div>

            </div><br />
            <hr className="w-[98%] mx-auto border border-2 text-gray-300" />

            <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-xs sm:text-sm font-semibold text-center mt-8`}>
                Copyright &copy; {new Date().toLocaleDateString('en-IN', { year: 'numeric',  })} <span style={{ color: '#862b2a' }}>Espejo </span> | Designed by  <span
                    className="cursor-pointer transition-colors"
                    style={{ color: '#862b2a' }}
                    onClick={() => window.open('https://digicoders.in/', '_blank')}
                    onMouseEnter={(e) => e.target.style.color = '#6b1f1e'}
                    onMouseLeave={(e) => e.target.style.color = '#862b2a'}
                >
                    Team  DigiCoders
                </span>
            </p>

        </footer>
    );
};

export default Footer;
