
import React, { useState, useEffect } from 'react';

const IntroStatement = () => {
  const [currentPhilosophy, setCurrentPhilosophy] = useState(0);

  const philosophies = [
    {
      title: "Fashion is the armor to survive",
      subtitle: "the reality of everyday life",
      description: "At ClothByDan, we believe that true luxury lies not just in the finest materials or impeccable craftsmanship, but in the stories we tell and the heritage we honor through every stitch.",
      stats: [
        { number: "15+", label: "Years Experience" },
        { number: "500+", label: "Pieces Created" },
        { number: "50+", label: "Countries Reached" }
      ]
    },
    {
      title: "Tradition meets",
      subtitle: "contemporary innovation",
      description: "Every thread tells a story of cultural heritage reimagined for the modern world. Our designs bridge the gap between ancestral artistry and contemporary luxury fashion.",
      stats: [
        { number: "100%", label: "Handcrafted" },
        { number: "24/7", label: "Design Process" },
        { number: "∞", label: "Creative Vision" }
      ]
    },
    {
      title: "Excellence in",
      subtitle: "every detail",
      description: "From the first sketch to the final stitch, our commitment to excellence ensures that each piece becomes a timeless work of art, worthy of the most discerning clientele.",
      stats: [
        { number: "72h", label: "Quality Check" },
        { number: "1000+", label: "Hours Per Piece" },
        { number: "5★", label: "Client Rating" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhilosophy((prev) => (prev + 1) % philosophies.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 pb-8 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-0 w-px h-32 bg-gray-200"></div>
      <div className="absolute bottom-1/4 right-0 w-px h-40 bg-gray-200"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-px bg-gray-300 mx-auto mb-6"></div>
          <p className="font-inter text-sm tracking-[0.3em] text-gray-500 uppercase">Philosophy</p>
        </div>
        
        <div className="relative min-h-[350px] flex items-center justify-center mb-12">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentPhilosophy 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-gray-900 mb-6">
                {philosophy.title}<br />
                <span className="italic font-normal text-gray-600">{philosophy.subtitle}</span>
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <p className="font-inter text-lg leading-relaxed text-gray-600 mb-10">
                  {philosophy.description}
                </p>
                
                <div className="flex items-center justify-center space-x-8">
                  {philosophy.stats.map((stat, statIndex) => (
                    <React.Fragment key={statIndex}>
                      <div className="text-center">
                        <div className="font-playfair text-3xl font-light text-gray-900 mb-2">{stat.number}</div>
                        <div className="font-inter text-sm tracking-wider text-gray-500 uppercase">{stat.label}</div>
                      </div>
                      {statIndex < philosophy.stats.length - 1 && (
                        <div className="w-px h-12 bg-gray-300"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Indicators */}
        <div className="flex justify-center space-x-3 mb-6">
          {philosophies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhilosophy(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPhilosophy ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <div className="w-24 h-px bg-gray-300 mx-auto animate-fade-in"></div>
      </div>
    </section>
  );
};

export default IntroStatement;
