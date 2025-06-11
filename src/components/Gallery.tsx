
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductModal from './ProductModal';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';

const Gallery = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { addToCart } = useCart();

  const galleryItems = [
    {
      id: 1,
      category: 'Hoodies',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      category: 'Sweatshirts',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      category: 'Shirts',
      image: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      category: 'T-Shirts',
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      category: 'Jackets',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      category: 'Agbada',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 7,
      category: 'Kaftan',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 8,
      category: 'Dashiki',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 9,
      category: 'Wrapper',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 10,
      category: 'Blazer',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Sample product data for modals
  const productData = [
    { id: 1, name: 'Premium Hoodie Collection', fabric: 'Cotton Blend', price: 185000, description: 'Comfortable and stylish hoodies perfect for casual wear and layering.' },
    { id: 2, name: 'Luxury Sweatshirt Line', fabric: 'French Terry', price: 165000, description: 'Premium sweatshirts with contemporary cuts and superior comfort.' },
    { id: 3, name: 'Executive Shirt Collection', fabric: 'Cotton', price: 145000, description: 'Professional shirts with Nigerian-inspired details and modern tailoring.' },
    { id: 4, name: 'Designer T-Shirt Range', fabric: 'Organic Cotton', price: 85000, description: 'Sustainable and stylish t-shirts featuring unique African-inspired designs.' },
    { id: 5, name: 'Heritage Jacket Series', fabric: 'Wool Blend', price: 285000, description: 'Sophisticated jackets combining traditional craftsmanship with contemporary style.' },
    { id: 6, name: 'Royal Agbada Collection', fabric: 'Silk', price: 520000, description: 'Traditional Agbada with modern refinements for special occasions.' },
    { id: 7, name: 'Contemporary Kaftan Set', fabric: 'Linen', price: 245000, description: 'Flowing kaftans perfect for both casual and formal settings.' },
    { id: 8, name: 'Modern Dashiki Line', fabric: 'Ankara', price: 195000, description: 'Contemporary interpretations of the classic Dashiki with vibrant patterns.' },
    { id: 9, name: 'Ceremonial Wrapper Collection', fabric: 'Silk', price: 380000, description: 'Elegant wrappers for cultural celebrations and formal ceremonies.' },
    { id: 10, name: 'Professional Blazer Range', fabric: 'Wool', price: 325000, description: 'Tailored blazers for the modern professional with heritage-inspired details.' },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('gallery-container');
    if (container) {
      const scrollAmount = 320; // Width of one card plus gap
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const handleViewProduct = (item) => {
    const product = productData.find(p => p.id === item.id);
    if (product) {
      setSelectedProduct({
        ...product,
        image: item.image,
        category: item.category
      });
      setIsModalOpen(true);
    }
  };

  const handleAddToCart = (item) => {
    const product = productData.find(p => p.id === item.id);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        image: item.image,
        fabric: product.fabric,
        size: 'M',
        price: product.price
      });
    }
  };

  const handleAddToCartFromModal = (product, size, quantity) => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      fabric: product.fabric,
      size: size,
      price: product.price,
      quantity: quantity
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-full px-6">
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
            <h2 className="font-playfair text-4xl md:text-5xl font-light mb-6 animate-fade-in-up">
              Our Collections
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Discover our curated selection of premium Nigerian fashion pieces, each crafted with exceptional attention to detail and contemporary style.
            </p>
          </div>

          {/* Horizontal Scrollable Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Next items"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Carousel Container */}
            <div className="w-full">
              <div 
                id="gallery-container"
                className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {galleryItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="gallery-card relative flex-shrink-0 cursor-pointer group transition-all duration-500 ease-in-out snap-start w-80 min-w-[280px] h-[70vh] lg:w-[calc(20%-8px)] sm:w-[calc(50%-8px)] sm:min-w-[240px] sm:h-[60vh]"
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      filter: hoveredCard && hoveredCard !== item.id ? 'grayscale(100%)' : 'grayscale(0%)',
                      transform: hoveredCard === item.id ? 'scale(1.02)' : 'scale(1)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.category}
                      className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    
                    {/* Vertical Text Label */}
                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                      <div className="transform -rotate-90 origin-center">
                        <span className="font-playfair text-2xl md:text-3xl font-light text-white tracking-[0.3em] uppercase whitespace-nowrap">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover Action Buttons */}
                    <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2 justify-center">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewProduct(item);
                          }}
                          variant="outline"
                          size="sm"
                          className="font-inter text-xs tracking-wider border-white text-white hover:bg-white hover:text-black transition-all duration-300 bg-white/10 backdrop-blur-sm"
                        >
                          VIEW
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(item);
                          }}
                          size="sm"
                          className="font-inter text-xs tracking-wider bg-white text-black hover:bg-gray-100 transition-all duration-300"
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCartFromModal}
      />
    </>
  );
};

export default Gallery;
