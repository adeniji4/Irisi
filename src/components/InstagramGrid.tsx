
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramGrid = () => {
  const instagramImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-light mb-6 animate-fade-in-up">
            Follow Our Journey
          </h2>
          <p className="font-inter text-gray-600 mb-8 animate-fade-in">
            @clothbydan
          </p>
          <a 
            href="https://instagram.com/clothbydan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-inter text-sm tracking-wider hover:opacity-70 transition-opacity"
          >
            <Instagram size={20} />
            <span>FOLLOW US ON INSTAGRAM</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden cursor-pointer animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Instagram 
                  size={24} 
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
