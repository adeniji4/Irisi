
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "ClothByDan created the most stunning piece for my wedding. The attention to detail and craftsmanship is unparalleled. I felt like royalty.",
      author: "Adunni Adebayo",
      role: "Bride & Fashion Enthusiast"
    },
    {
      quote: "Working with Dan was a dream. He understood my vision perfectly and created a collection that honored my heritage while keeping me on-trend.",
      author: "Temi Ogundimu",
      role: "Celebrity & Actress"
    },
    {
      quote: "The quality is exceptional. Every stitch tells a story, and wearing ClothByDan makes me feel connected to my roots in the most elegant way.",
      author: "Kemi Williams",
      role: "Art Curator"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-light mb-20 animate-fade-in-up">
          Client Stories
        </h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentTestimonial 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <blockquote className="font-playfair text-2xl md:text-3xl font-light leading-relaxed text-gray-900 mb-12">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="font-inter text-sm tracking-wider font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="font-inter text-xs tracking-wider text-gray-500 uppercase">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
