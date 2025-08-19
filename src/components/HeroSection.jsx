import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const HeroSection = ({ formData, setFormData, isSubmitting, handleSubmit }) => {
  return (
    <motion.div 
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-green-800/50 to-amber-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-white text-center lg:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Willow Brook
              <span className="block text-amber-300">Cabin</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Nestled in the heart of Neverland's enchanted forest, Willow Brook Cabin 
              offers the perfect rustic setting for your dream wedding. Exchange vows 
              surrounded by towering pines and the gentle sounds of nature.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-sm mx-auto lg:mx-0">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-bold text-amber-300">150+</div>
                <div className="text-sm sm:text-base text-gray-300">Happy Couples</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-bold text-amber-300">5★</div>
                <div className="text-sm sm:text-base text-gray-300">Perfect Rating</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center text-gray-200 justify-center lg:justify-start">
                <span className="text-amber-300 mr-4 text-xl sm:text-2xl">🏕️</span>
                <span className="text-base sm:text-lg">Rustic log cabin ceremony space</span>
              </div>
              <div className="flex items-center text-gray-200 justify-center lg:justify-start">
                <span className="text-amber-300 mr-4 text-xl sm:text-2xl">🌊</span>
                <span className="text-base sm:text-lg">Scenic brook-side photo opportunities</span>
              </div>
              <div className="flex items-center text-gray-200 justify-center lg:justify-start">
                <span className="text-amber-300 mr-4 text-xl sm:text-2xl">🌿</span>
                <span className="text-base sm:text-lg">Enchanted forest reception area</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <div className="w-full">
            <ContactForm 
              formData={formData}
              setFormData={setFormData}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;