
import React from 'react';

const DesignerStatement = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/6558838f-f529-488b-80e5-bf1a0b39c1e0.JPG"
              alt="Designer Dan"
              className="w-full aspect-[4/5] object-cover animate-scale-in"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in-up">
            <blockquote className="font-playfair text-2xl md:text-3xl font-light leading-relaxed text-gray-900" style={{color: '#ff6600'}}>
              "At Ìrísí, fashion becomes a vessel carrying stories, preserving culture, and crafting a legacy that lives beyond time.
            </blockquote>
            
            <div className="space-y-4">
              <p className="font-inter text-gray-600 leading-relaxed">
                Ìrísí, a name that means "appearance" in Yoruba, but stands for so much more. Rooted in the heart of Nigeria, Ìrísí was born from a desire to celebrate tradition through timeless design. Blending the rich heritage of Yoruba craftsmanship with modern sophistication, Ìrísí reimagines the traditional cap as a symbol of identity, pride, and elegance.

                It reflects a deeper narrative, one of culture, presence, and purpose.

                Each piece is meticulously crafted to honor cultural legacy while embracing the future of African luxury. With every stitch, Ìrísí tells a story of history preserved, of style refined, and of a continent whose beauty speaks through its craft.

                From ceremonial halls to global fashion platforms, Ìrísí represents more than Caps, it is heritage, elevated.
                </p>
            </div>
            
            <div className="pt-8">
              <div className="font-playfair text-3xl text-gray-400 mb-2" style={{color: '#ff6600'}}>Ìrísí Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerStatement;
