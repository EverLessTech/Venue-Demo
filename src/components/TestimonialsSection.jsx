import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar } = FiIcons;

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah & Michael Thompson',
      rating: 5,
      text: 'Willow Brook Cabin exceeded our dreams! The rustic charm and natural beauty created the perfect backdrop for our special day. Our guests are still talking about the magical forest setting.',
      weddingDate: 'September 2023',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emily & James Rodriguez',
      rating: 5,
      text: 'The venue coordinator was incredible and the brook-side ceremony was absolutely breathtaking. Every detail was perfect, from the log cabin altar to the forest reception under the stars.',
      weddingDate: 'June 2023',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Jessica & David Park',
      rating: 5,
      text: 'Our woodland wedding at Willow Brook was like a fairy tale come true. The natural beauty of Neverland\'s forest provided the most romantic setting we could have imagined.',
      weddingDate: 'August 2023',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">
            Love Stories from Our Couples
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the happy couples who chose Willow Brook Cabin for their special day 
            and created magical memories in our enchanted forest setting.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-green-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-lg fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Couple Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Married {testimonial.weddingDate}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-green-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-sm sm:text-base text-gray-600">Weddings Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">5.0★</div>
                <div className="text-sm sm:text-base text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm sm:text-base text-gray-600">Recommend Us</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">5yrs</div>
                <div className="text-sm sm:text-base text-gray-600">Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;