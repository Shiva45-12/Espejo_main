import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 border-t border-[#1e1e1e]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* OUR COMPANY */}
                <div>
                    <h3 className="text-lg md:text-[20px] font-semibold mb-4 md:mb-6">Our Company</h3>
                    <ul className="space-y-2 text-gray-300 text-sm md:text-[16px]">
                        <li>Login/Create account</li>
                        <li>Company Profile</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                    {/* Social Icons */}
                    <div className="flex gap-4 text-gray-300 mt-6 md:mt-8 text-lg md:text-xl">
                        <FaFacebookF className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaInstagram className="hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="hover:text-white cursor-pointer" />
                        <FaPinterestP className="hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* PRODUCTS */}
                <div>
                    <h3 className="text-lg md:text-[20px] font-semibold mb-4 md:mb-6">Products</h3>
                    <ul className="space-y-2 text-gray-300 text-sm md:text-[16px]">
                        <li>Bathroom Cabinets</li>
                        <li>Bathroom Mirrors</li>
                        <li>Dressing Table Mirrors</li>
                        <li>LED Mirrors</li>
                        <li>Makeup Mirrors</li>
                        <li>Metal Mirrors</li>
                        <li>Oval Mirrors</li>
                        <li>Rectangle Mirrors</li>
                        <li>Round Mirrors</li>
                        <li>Standing Mirrors</li>
                        <li>Vanity Mirrors</li>
                        <li>Wall Mirrors</li>
                        <li>Wash Basin Mirrors</li>
                    </ul>
                </div>

                {/* EXPLORE */}
                <div>
                    <h3 className="text-lg md:text-[20px] font-semibold mb-4 md:mb-6">Explore</h3>
                    <ul className="space-y-2 text-gray-300 text-sm md:text-[16px]">
                        <li>Become a dealer</li>
                        <li>Sitemap</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h3 className="text-lg md:text-[20px] font-semibold mb-4 md:mb-6">Newsletter Signup</h3>

                    {/* Email Input + Button */}
                    <div className="flex flex-col sm:flex-row w-full gap-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-2 bg-transparent border border-[#3a3a3a] rounded-full focus:outline-none text-sm"
                        />
                        <button className="px-4 py-2 bg-[#f6c343] text-black font-semibold rounded-full hover:bg-[#ffda74] transition-all text-sm">
                            Subscribe
                        </button>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 mt-3 text-gray-300 text-sm">
                        <input type="checkbox" className="w-4 h-4" />
                        <label>I agree with the terms and conditions.</label>
                    </div>
                </div>

            </div>

            <p className="text-gray-500 text-xs sm:text-sm font-semibold text-center mt-8">
                Copyright &copy; 2025-26 <span className="text-orange-400">Espezo</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
