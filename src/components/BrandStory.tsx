
import React from 'react';

const BrandStory = () => {
  return (
    <section className="py-20">
      {/* First Story Block */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Craftsmanship"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-50 p-12 lg:p-20">
          <div className="max-w-lg">
            <h3 className="font-playfair text-3xl md:text-4xl font-light mb-8 animate-slide-in-left">
              Heritage & Craftsmanship
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed mb-8 animate-fade-in">
              Every piece tells a story of Nigerian heritage, reimagined through the lens of contemporary luxury. Our artisans blend traditional techniques with modern silhouettes, creating garments that celebrate both our roots and our future.
            </p>
            <p className="font-inter text-gray-600 leading-relaxed animate-fade-in">
              From the vibrant markets of Lagos to the fashion capitals of the world, ClothByDan represents the pinnacle of African luxury fashion.
            </p>
          </div>
        </div>
      </div>

      {/* Second Story Block */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center bg-white p-12 lg:p-20 order-2 lg:order-1">
          <div className="max-w-lg">
            <h3 className="font-playfair text-3xl md:text-4xl font-light mb-8 animate-slide-in-left">
              Sustainable Luxury
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed mb-8 animate-fade-in">
              We believe luxury should never come at the expense of our planet. Our commitment to sustainable practices ensures that every garment is crafted with respect for both the environment and the communities that create them.
            </p>
            <p className="font-inter text-gray-600 leading-relaxed animate-fade-in">
              Quality over quantity, timeless over trendy - these principles guide every decision we make.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Sustainability"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
