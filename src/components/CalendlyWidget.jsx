import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-center">
        <div className="text-4xl mb-3">🌲</div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Schedule Your Venue Tour
        </h3>
        <p className="text-emerald-100">
          Book a personalized tour of Willow Brook Cabin and see why couples fall in love with our rustic forest setting
        </p>
      </div>
      
      <div className="p-4">
        <div 
          className="calendly-inline-widget rounded-xl overflow-hidden" 
          data-url="https://calendly.com/everlesstech/book-demo?primary_color=26c411" 
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
};

export default CalendlyWidget;