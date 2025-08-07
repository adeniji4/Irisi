import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-20 bg-[#ff6600] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-40 bg-white/20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12 animate-fade-in-up">
          <div className="w-32 h-px bg-white/30 mx-auto mb-8"></div>
          <h2 className="font-playfair text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
            Ready To Create<br />
            <span className="italic font-normal text-white/80">Something Extraordinary?</span>
          </h2>
          <p className="font-inter text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a custom piece or want to explore our latest collection, 
            we're here to bring your vision to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <Link 
            to="/contact" 
            className="group relative font-inter text-sm tracking-[0.2em] bg-white text-black px-12 py-4 hover:bg-transparent hover:text-white border border-white transition-all duration-700 overflow-hidden"
          >
            <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-500">
              CUSTOM ORDER 
            </span>
          </Link>
          
          <Link 
            to="/contact" 
            className="font-inter text-sm tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-300 border-b border-white/30 hover:border-white pb-1"
          >
            CONTACT US NOW
          </Link>
        </div>

        <div className="mt-10 flex flex-row items-center justify-center space-x-4 md:space-x-8 text-white animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center">
            <div className="font-playfair text-xl md:text-2xl font-light mb-1 md:mb-2">24/7</div>
            <div className="font-inter text-xs md:text-sm tracking-wider uppercase">Support</div>
          </div>
          <div className="w-px h-8 md:h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="font-playfair text-xl md:text-2xl font-light mb-1 md:mb-2">1+ Week</div>
            <div className="font-inter text-xs md:text-sm tracking-wider uppercase">Custom Orders</div>
          </div>
          <div className="w-px h-8 md:h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="font-playfair text-xl md:text-2xl font-light mb-1 md:mb-2">Worldwide</div>
            <div className="font-inter text-xs md:text-sm tracking-wider uppercase">Shipping</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
