
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
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
          <div className="mb-8 animate-fade-in-down">
            <div className="w-24 h-px bg-white/60 mx-auto mb-8"></div>
            <p className="font-inter text-sm tracking-[0.3em] mb-4 opacity-90">LUXURY NIGERIAN FASHION</p>
          </div>
          
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.9] animate-blur-in" style={{animationDelay: '0.5s'}}>
            Where Fashion<br />
            <span className="italic font-normal">Meets Art</span>
          </h1>
          
          <p className="font-inter text-lg md:text-xl mb-16 tracking-wide max-w-2xl mx-auto opacity-90 leading-relaxed animate-fade-in-up" style={{animationDelay: '1s'}}>
            Nigerian heritage meets contemporary luxury fashion.<br />
            Each piece tells a story of tradition reimagined.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '1.5s'}}>
            <Link to="/collections" className="group relative font-inter text-sm tracking-[0.2em] border border-white px-12 py-4 hover:bg-white hover:text-black transition-all duration-700 overflow-hidden hover:shadow-[0px_8px_16px_rgba(0,0,0,0.4)]">
              <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-500">
                SHOP COLLECTION
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </Link>
            
            <Link to="/about" className="group font-inter text-sm tracking-[0.2em] text-white/80 hover:text-white transition-all duration-300 border-b border-white/30 hover:border-white pb-1 hover:shadow-[0px_4px_8px_rgba(255,255,255,0.3)]">
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent opacity-60"></div>
          <div className="font-inter text-xs tracking-[0.3em] opacity-70">SCROLL</div>
          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
            <div className="w-px h-3 bg-white/60 mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

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
