
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-[#ff6600] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
          <h2 className="font-playfair text-4xl md:text-6xl font-light text-white mb-6 animate-fade-in-up">
            Behind The Craft
          </h2>
          <p className="font-inter text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Watch the meticulous process of creating each unique piece, from concept to completion.
          </p>
        </div>
        
        <div className="relative aspect-video max-w-4xl mx-auto animate-scale-in" style={{animationDelay: '0.4s'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Behind the scenes of fashion creation"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
              <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1 group-hover:scale-110 transition-transform"></div>
            </button>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="font-inter text-sm tracking-[0.2em] border border-white/30 text-white px-12 py-4 hover:bg-white hover:text-black transition-all duration-500">
            WATCH FULL DOCUMENTARY
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
