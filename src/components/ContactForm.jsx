import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiMail, FiUser } = FiIcons;



const ContactForm = ({ formData, setFormData, isSubmitting, handleSubmit, title = "Get Your Venue Guide", description = "Discover everything Willow Brook Cabin has to offer for your special day" }) => {
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div 
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="text-center mb-6 sm:mb-8">
        <div className="text-3xl sm:text-4xl mb-3">📖</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <SafeIcon 
              icon={FiUser} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 text-sm sm:text-base" 
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <SafeIcon 
              icon={FiMail} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 text-sm sm:text-base" 
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Wedding Date
          </label>
          <div className="relative">
            <SafeIcon 
              icon={FiCalendar} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 text-sm sm:text-base" 
            />
            <input
              type="date"
              name="weddingDate"
              value={formData.weddingDate}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-4 sm:py-4 px-6 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </div>
          ) : (
            'Get Our Wedding Guide'
          )}
        </motion.button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        By submitting this form, you agree to receive information about Willow Brook Cabin via email.
      </p>
    </motion.div>
  );
};

export default ContactForm;