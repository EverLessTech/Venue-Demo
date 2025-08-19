import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CalendlyWidget from './CalendlyWidget';

const { FiCheckCircle, FiMail } = FiIcons;

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Success Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-green-100 rounded-full p-6">
              <SafeIcon icon={FiCheckCircle} className="text-6xl text-green-600" />
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Thanks! Check Your Email
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Your Willow Brook Cabin venue guide is on its way to your inbox. While you're here, 
              why not book a personalized tour of our rustic forest venue?
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <SafeIcon icon={FiMail} className="text-green-600 text-2xl mr-3" />
              <span className="text-lg text-gray-700">
                Venue guide sent to your email
              </span>
            </div>
          </motion.div>

          {/* Calendly Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CalendlyWidget />
          </motion.div>

          {/* Additional Information */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="text-green-600 text-3xl mb-3">🏕️</div>
              <h3 className="font-semibold text-gray-800 mb-2">Rustic Ceremony Space</h3>
              <p className="text-gray-600 text-sm">
                Say "I do" in our charming log cabin surrounded by towering pines
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="text-green-600 text-3xl mb-3">🌊</div>
              <h3 className="font-semibold text-gray-800 mb-2">Brook-side Photos</h3>
              <p className="text-gray-600 text-sm">
                Capture magical moments by the gentle flowing brook in Neverland
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="text-green-600 text-3xl mb-3">🌿</div>
              <h3 className="font-semibold text-gray-800 mb-2">Forest Reception</h3>
              <p className="text-gray-600 text-sm">
                Dance under the stars in our enchanted forest reception area
              </p>
            </div>
          </motion.div>

          {/* Venue Highlights */}
          <motion.div
            className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">What Makes Willow Brook Special</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <span>Prime location in Neverland's pristine forest</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎪</span>
                <span>All-weather covered reception pavilion</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🚗</span>
                <span>Convenient parking for up to 100 guests</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🍽️</span>
                <span>Full catering kitchen and bar facilities</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;