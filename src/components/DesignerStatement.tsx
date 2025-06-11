
import React from 'react';

const DesignerStatement = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Designer Dan"
              className="w-full aspect-[4/5] object-cover animate-scale-in"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in-up">
            <blockquote className="font-playfair text-2xl md:text-3xl font-light leading-relaxed text-gray-900">
              "Fashion is not just about clothing; it's about telling stories, preserving culture, and creating a legacy that transcends generations."
            </blockquote>
            
            <div className="space-y-4">
              <p className="font-inter text-gray-600 leading-relaxed">
                Born and raised in Lagos, Nigeria, Dan brings over a decade of experience in luxury fashion design. Having trained in both traditional Nigerian textile arts and modern European fashion houses, he founded ClothByDan with a vision to elevate African fashion on the global stage.
              </p>
              
              <p className="font-inter text-gray-600 leading-relaxed">
                His work has been featured in Vogue, Elle, and worn by celebrities and dignitaries worldwide. Each piece reflects his commitment to excellence, sustainability, and cultural authenticity.
              </p>
            </div>
            
            <div className="pt-8">
              <div className="font-playfair text-3xl text-gray-400 mb-2">Dan Adewale</div>
              <div className="font-inter text-sm tracking-wider text-gray-500">CREATIVE DIRECTOR & FOUNDER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerStatement;
