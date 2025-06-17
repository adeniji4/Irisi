
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1719169395435-9b650fd3c794?q=80&w=3176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1661332626260-05ac719e46dc?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1648677486536-413a9235ccb2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1719314073622-9399d167725b?q=80&w=2775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1696339059571-6adf15e705f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Image Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Premium Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/70"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-1 h-32 bg-white/20 animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-1 h-24 bg-white/30 animate-float" style={{animationDelay: '2s'}}></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* <div className="mb-8 animate-fade-in-down">
            <div className="w-24 h-px bg-white/60 mx-auto mb-8"></div>
            <p className="font-inter text-sm tracking-[0.3em] mb-4 opacity-90">LUXURY TRADITIONAL CAPS</p>
          </div> */}
          
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.9] animate-blur-in" style={{animationDelay: '0.5s'}}>
            <span className="font-bold" style={{ color: '#ff6600' }}>Ìrísí</span><br />
            <span className="italic font-normal">Heritage Meets Craft</span>
          </h1>
          
          <p className="font-inter text-lg md:text-xxl mb-16 tracking-wide max-w-2xl mx-auto opacity-120 leading-relaxed animate-fade-in-up" style={{animationDelay: '1s', color: '#ff6600'}}>
            Ìrísí redefines elegance with handcrafted caps that tell timeless stories of identity, royalty, and culture
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '1.0s'}}>
            <Link to="/collections" className="group relative font-inter text-sm  tracking-[0.2em] border border-white px-12 py-4 hover:bg-[#ff6600] hover:text-black transition-all duration-700 overflow-hidden hover:shadow-[0px_8px_16px_rgba(0,0,0,0.4)]">
              <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-500">
                SHOP COLLECTION
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </Link>
            
            <Link to="/Contact" className="group font-inter text-sm tracking-[0.2em] text-[#ff6600]/80 hover:text-white transition-all duration-300 border-b border-white/30 hover:border-white pb-1 hover:shadow-[0px_4px_8px_rgba(255,255,255,0.3)]">
              CUSTOM ORDER
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent opacity-60"></div>
          <div className="font-inter text-xs tracking-[0.3em] opacity-70">SCROLL</div>
          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
            <div className="w-px h-3 bg-[#ff6600]/60 mt-2 animate-bounce"></div>
          </div>
        </div>
      </div> */}

      {/* Image Indicators */}
      <div className="absolute bottom-12 right-12 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-12 h-1 transition-all duration-500 ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
