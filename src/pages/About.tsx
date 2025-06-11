import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-light mb-8 animate-fade-in-up">
            About ClothingbyDan
          </h1>
          <p className="font-inter text-xl md:text-2xl font-light leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Where Nigerian heritage meets contemporary luxury fashion
          </p>
          <div className="w-32 h-px bg-white mx-auto mt-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="w-24 h-px bg-black mb-8"></div>
              <h2 className="font-playfair text-4xl md:text-5xl font-light mb-8">Our Story</h2>
              <div className="space-y-6 font-inter text-gray-600 text-lg leading-relaxed">
                <p>
                  ClothingbyDan was born from a vision to elevate African fashion on the global stage. Founded in Lagos, Nigeria, our brand represents the perfect fusion of traditional Nigerian craftsmanship and contemporary luxury design.
                </p>
                <p>
                  Each piece in our collection tells a story of heritage, artistry, and innovation. We work exclusively with master craftsmen who have inherited techniques passed down through generations, ensuring every garment maintains the authenticity and quality that defines our brand.
                </p>
                <p>
                  From the bustling markets of Lagos to the fashion capitals of the world, ClothingbyDan has become synonymous with excellence, sophistication, and cultural pride.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <h2 className="font-playfair text-4xl md:text-5xl font-light mb-8 animate-fade-in-up">
              Craftsmanship
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Every ClothingbyDan piece is a testament to the extraordinary skill and dedication of our artisans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-playfair text-2xl">01</span>
              </div>
              <h3 className="font-playfair text-2xl font-light mb-4">Traditional Techniques</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                We employ time-honored Nigerian textile techniques, preserving cultural heritage while creating contemporary masterpieces.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-playfair text-2xl">02</span>
              </div>
              <h3 className="font-playfair text-2xl font-light mb-4">Premium Materials</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Only the finest fabrics and materials are selected, sourced from the best textile producers across Africa and beyond.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-playfair text-2xl">03</span>
              </div>
              <h3 className="font-playfair text-2xl font-light mb-4">Attention to Detail</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Every stitch, every pattern, every finish is executed with meticulous precision and artistic vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Vision"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-24 h-px bg-black mb-8"></div>
              <h2 className="font-playfair text-4xl md:text-5xl font-light mb-8">Vision & Philosophy</h2>
              <div className="space-y-6 font-inter text-gray-600 text-lg leading-relaxed">
                <p>
                  Our vision extends beyond fashion. We believe clothing should be a celebration of identity, culture, and personal expression. Each ClothingbyDan piece is designed to empower the wearer with confidence and cultural pride.
                </p>
                <p>
                  We are committed to sustainable practices, fair trade, and supporting local communities. Our philosophy centers on creating timeless pieces that transcend seasonal trends and become cherished wardrobe staples.
                </p>
                <blockquote className="font-playfair text-2xl text-black italic border-l-4 border-black pl-6 my-8">
                  "Fashion fades, but style and heritage are eternal."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-24 h-px bg-black mx-auto mb-8"></div>
          <h2 className="font-playfair text-4xl md:text-5xl font-light mb-16 animate-fade-in-up">
            Creative Leadership
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Dan Adewale"
                  className="w-full aspect-square object-cover rounded-full mx-auto mb-8"
                />
              </div>
              <div className="text-left animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <h3 className="font-playfair text-3xl font-light mb-4">Dan Adewale</h3>
                <p className="font-inter text-sm tracking-wider text-gray-500 mb-6">FOUNDER & CREATIVE DIRECTOR</p>
                <p className="font-inter text-gray-600 leading-relaxed mb-6">
                  With over a decade of experience in luxury fashion design, Dan brings both international training and deep cultural roots to every collection. His work has been featured in major fashion publications and worn by celebrities worldwide.
                </p>
                <p className="font-inter text-gray-600 leading-relaxed">
                  Born and raised in Lagos, Dan's designs reflect his commitment to showcasing Nigerian artistry on the global stage while maintaining the highest standards of luxury fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
