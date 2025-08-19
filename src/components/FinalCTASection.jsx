import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const FinalCTASection = ({ formData, setFormData, isSubmitting, handleSubmit }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-green-600 to-emerald-700">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl sm:text-6xl mb-6 sm:mb-8">🌲</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Ready to Fall in Love with Willow Brook?
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
            Get your complete venue guide and start planning your dream woodland wedding 
            in the heart of Neverland's enchanted forest.
          </p>

          {/* Second Form */}
          <div className="max-w-md mx-auto" style={{color: 'black'}}>
            <ContactForm 
              formData={formData}
              setFormData={setFormData}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
              title="Book Your Forest Wedding"
              description="Start your journey to the perfect woodland ceremony"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;