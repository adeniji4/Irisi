
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Ankara Evening Gown',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 450000,
      fabric: 'Ankara',
      description: 'Exquisitely crafted evening gown featuring premium Ankara fabric with contemporary silhouette. Perfect for special occasions and formal events.'
    },
    {
      id: 2,
      name: 'Contemporary Agbada',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 320000,
      fabric: 'Silk',
      description: 'Modern interpretation of the classic Agbada with refined tailoring and luxury fabric blend. A statement piece for the discerning gentleman.'
    },
    {
      id: 3,
      name: 'Luxury Kaftan Set',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 280000,
      fabric: 'Cotton',
      description: 'Flowing kaftan set crafted from the finest fabrics. Comfortable yet elegant, perfect for both casual and semi-formal occasions.'
    },
    {
      id: 4,
      name: 'Modern Dashiki',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 195000,
      fabric: 'Ankara',
      description: 'Contemporary take on the traditional Dashiki with premium fabric and modern cut. Versatile piece that bridges tradition and modernity.'
    },
    {
      id: 5,
      name: 'Ceremonial Wrapper',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 380000,
      fabric: 'Silk',
      description: 'Ceremonial wrapper featuring intricate patterns and premium materials. Designed for special cultural celebrations and formal ceremonies.'
    },
    {
      id: 6,
      name: 'Heritage Blazer',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 240000,
      fabric: 'Cotton',
      description: 'Tailored heritage blazer combining classic craftsmanship with contemporary design. Perfect for business and formal occasions.'
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
      size: 'M',
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
      <section id="collections" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
            <h2 className="font-playfair text-4xl md:text-5xl font-light mb-6 animate-fade-in-up">
              Our Collections
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Discover our curated selection of premium Nigerian fashion pieces, each crafted with meticulous attention to detail and cultural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card group cursor-pointer animate-fade-in-up transition-all duration-300 ease-in-out hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)]"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  
                  {/* Hover Overlay with Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/95 backdrop-blur-sm px-8 py-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 space-y-3">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product);
                        }}
                        variant="outline"
                        size="sm"
                        className="w-full font-inter text-xs tracking-wider border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                      >
                        VIEW DETAILS
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                        size="sm"
                        className="w-full font-inter text-xs tracking-wider bg-black text-white hover:bg-gray-800 transition-all duration-300"
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-playfair text-xl font-light mb-2 group-hover:opacity-70 transition-opacity duration-300">
                    {product.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-500 mb-2">{product.fabric}</p>
                  <p className="font-inter text-gray-600 tracking-wide">{formatPrice(product.price)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/collections" 
              className="collection-item font-inter text-sm tracking-[0.2em] border border-black px-12 py-4 hover:bg-black hover:text-white transition-all duration-500"
            >
              VIEW ALL COLLECTIONS
            </Link>
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

export default ProductGrid;
