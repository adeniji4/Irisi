
import React, { useState } from 'react';
import ProductModal from './ProductModal';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';

const NewestDesigns = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const newestProducts = [
    {
      id: 101,
      name: 'Midnight Elegance',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 520000,
      description: 'Sophisticated evening wear with contemporary African motifs.',
      fabric: 'Silk'
    },
    {
      id: 102,
      name: 'Heritage Modern',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 380000,
      description: 'Traditional craftsmanship meets modern silhouette.',
      fabric: 'Cotton'
    },
    {
      id: 103,
      name: 'Royal Sunset',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 450000,
      description: 'Luxurious fabric with hand-embroidered details.',
      fabric: 'Ankara'
    },
    {
      id: 104,
      name: 'Urban Aristocrat',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 340000,
      description: 'Contemporary urban style with cultural essence.',
      fabric: 'Wool'
    },
    {
      id: 105,
      name: 'Ceremonial Grace',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 480000,
      description: 'Elegant ceremonial wear for special occasions.',
      fabric: 'Silk'
    },
    {
      id: 106,
      name: 'Dynasty Collection',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 420000,
      description: 'Regal design inspired by ancient African royalty.',
      fabric: 'Cotton'
    },
    {
      id: 107,
      name: 'Modern Majesty',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 360000,
      description: 'Contemporary luxury with traditional influence.',
      fabric: 'Ankara'
    },
    {
      id: 108,
      name: 'Cultural Fusion',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 390000,
      description: 'East meets West in this stunning design.',
      fabric: 'Wool'
    },
    {
      id: 109,
      name: 'Executive Elite',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 550000,
      description: 'Premium business attire with cultural elements.',
      fabric: 'Silk'
    },
    {
      id: 110,
      name: 'Evening Sovereign',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 580000,
      description: 'Luxury evening wear with intricate beadwork.',
      fabric: 'Ankara'
    }
  ];

  const formatPrice = (price) => `₦${price.toLocaleString()}`;

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      fabric: product.fabric,
      size: 'M', // Default size
      price: product.price
    });
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light mb-6 animate-fade-in-up">
              Our Newest Designs
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
              Discover our latest collection featuring cutting-edge designs that blend traditional Nigerian artistry with contemporary luxury fashion.
            </p>
          </div>

          {/* Responsive Grid - Mobile: 2 columns, Tablet: 3 columns, Desktop: 4-5 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {newestProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card group animate-fade-in-up transition-all duration-300 ease-in-out hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] max-w-sm mx-auto w-full"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div 
                  className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-2 sm:mb-3 md:mb-4 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/95 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <button className="font-inter text-xs tracking-[0.2em] text-black">
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-1 sm:space-y-2 px-1 sm:px-2">
                  <h3 className="font-playfair text-xs sm:text-sm md:text-base font-light group-hover:opacity-70 transition-opacity duration-300 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <p className="font-inter text-xs text-gray-600">{formatPrice(product.price)}</p>
                  
                  {/* Add to Cart Button */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    size="sm"
                    className="w-full mt-1 sm:mt-2 font-inter text-xs tracking-wider bg-black text-white hover:bg-gray-800 transition-all duration-300 h-7 sm:h-8 md:h-9 px-2"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            ))}
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

export default NewestDesigns;
