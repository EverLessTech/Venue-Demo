import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiHome, FiPhone, FiMail } = FiIcons;

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-amber-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Success Animation */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: "spring",
              stiffness: 200 
            }}
          >
            <div className="bg-emerald-100 rounded-full p-8 border-4 border-emerald-200">
              <SafeIcon icon={FiCheckCircle} className="text-8xl text-emerald-600" />
            </div>
          </motion.div>

          {/* Confirmation Message */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-4xl mb-4">🌲</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Your Tour is Booked!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We'll be in touch soon with all the details for your Willow Brook Cabin tour. 
              Get ready to fall in love with our rustic forest charm in the heart of Neverland!
            </p>
          </motion.div>

          {/* Confirmation Details */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-green-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              What Happens Next?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Confirmation Email</h3>
                <p className="text-gray-600 text-sm">
                  You'll receive a confirmation email with tour details and directions to Neverland within 5 minutes
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Personal Call</h3>
                <p className="text-gray-600 text-sm">
                  Our venue coordinator will call you within 24 hours to prepare for your forest adventure
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Venue Tour</h3>
                <p className="text-gray-600 text-sm">
                  Experience Willow Brook Cabin's rustic charm and envision your perfect woodland wedding
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="font-semibold text-gray-800 mb-4 text-center">
                Need to Make Changes to Your Tour?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center">
                  <SafeIcon icon={FiPhone} className="text-emerald-600 mr-2" />
                  <span className="text-gray-700">Call us: (555) WILLOW-1</span>
                </div>
                <div className="flex items-center justify-center">
                  <SafeIcon icon={FiMail} className="text-emerald-600 mr-2" />
                  <span className="text-gray-700">Email: tours@willowbrookcabin.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What to Expect */}
          <motion.div
            className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">What to Expect on Your Tour</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-2xl mr-3 flex-shrink-0">🏕️</span>
                <div>
                  <h4 className="font-semibold mb-1">Cabin Ceremony Space</h4>
                  <p className="text-emerald-100 text-sm">See our rustic log cabin where you'll exchange vows</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3 flex-shrink-0">🌊</span>
                <div>
                  <h4 className="font-semibold mb-1">Brook-side Walk</h4>
                  <p className="text-emerald-100 text-sm">Stroll along the gentle brook for photo opportunities</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3 flex-shrink-0">🌲</span>
                <div>
                  <h4 className="font-semibold mb-1">Forest Reception Area</h4>
                  <p className="text-emerald-100 text-sm">Explore our enchanted reception space under the pines</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3 flex-shrink-0">🍽️</span>
                <div>
                  <h4 className="font-semibold mb-1">Catering Facilities</h4>
                  <p className="text-emerald-100 text-sm">Tour our full kitchen and discuss catering options</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:from-emerald-700 hover:to-green-800 transition-all duration-300"
            >
              <SafeIcon icon={FiHome} className="mr-2" />
              Return to Willow Brook Home
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-gray-500 text-sm mb-4">
              Join over 150 happy couples who celebrated their special day at Willow Brook Cabin
            </p>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
              <span className="text-gray-600 ml-2">5.0/5 rating • Neverland's #1 Forest Venue</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmationPage;