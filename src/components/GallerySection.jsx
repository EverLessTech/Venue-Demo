import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1570074760215-606497449167?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Rustic Ceremony Space',
      description: 'Exchange vows in our charming log cabin'
    },
    {
      url: 'https://images.unsplash.com/photo-1588502279275-5a9693489e83?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Brook-side Photography',
      description: 'Capture magical moments by the water'
    },
    {
      url: 'https://images.unsplash.com/photo-1624355691266-c33182dc9410?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Forest Reception Area',
      description: 'Dance under the stars in our enchanted forest'
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Scenic Forest Views',
      description: 'Surrounded by towering pines in Neverland'
    }
  ];

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const goToImage = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">
            Explore Our Venue
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through Willow Brook Cabin's enchanting spaces, 
            from our rustic ceremony area to the magical forest reception grounds.
          </p>
        </motion.div>

        {/* Mobile Gallery - Carousel */}
        <div className="lg:hidden">
          <motion.div 
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-80 sm:h-96">
              <img 
                src={galleryImages[currentImageIndex].url} 
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-200">
                  {galleryImages[currentImageIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all touch-manipulation"
              aria-label="Previous image"
            >
              <SafeIcon icon={FiChevronLeft} className="text-xl" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all touch-manipulation"
              aria-label="Next image"
            >
              <SafeIcon icon={FiChevronRight} className="text-xl" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all touch-manipulation ${
                    index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop Gallery - Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-80">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-200">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;