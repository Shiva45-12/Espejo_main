import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-center text-4xl font-bold mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhone className="text-orange-500 text-xl" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-orange-500 text-xl" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">info@espezo.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-orange-500 text-xl" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-300">123 Mirror Street, Glass City, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;