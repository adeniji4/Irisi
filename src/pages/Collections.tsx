
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import { Button } from '../components/ui/button';
import { useCart } from '../contexts/CartContext';

const Collections = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  
  const products = [
    { id: 1, name: 'Ankara Evening Gown', image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 450000, category: 'Women', fabric: 'Ankara', description: 'Exquisitely crafted evening gown featuring premium Ankara fabric with contemporary silhouette. Perfect for special occasions and formal events.' },
    { id: 2, name: 'Contemporary Agbada', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 320000, category: 'Men', fabric: 'Silk', description: 'Modern interpretation of the classic Agbada with refined tailoring and luxury fabric blend. A statement piece for the discerning gentleman.' },
    { id: 3, name: 'Luxury Kaftan Set', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 280000, category: 'Unisex', fabric: 'Cotton', description: 'Flowing kaftan set crafted from the finest fabrics. Comfortable yet elegant, perfect for both casual and semi-formal occasions.' },
    { id: 4, name: 'Modern Dashiki', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 195000, category: 'Men', fabric: 'Ankara', description: 'Contemporary take on the traditional Dashiki with premium fabric and modern cut. Versatile piece that bridges tradition and modernity.' },
    { id: 5, name: 'Ceremonial Wrapper', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 380000, category: 'Women', fabric: 'Silk', description: 'Ceremonial wrapper featuring intricate patterns and premium materials. Designed for special cultural celebrations and formal ceremonies.' },
    { id: 6, name: 'Heritage Blazer', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 240000, category: 'Unisex', fabric: 'Cotton', description: 'Tailored heritage blazer combining classic craftsmanship with contemporary design. Perfect for business and formal occasions.' },
    { id: 7, name: 'Royal Gele Set', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 150000, category: 'Women', fabric: 'Silk', description: 'Traditional royal gele set with contemporary styling. Perfect for cultural events and special celebrations.' },
    { id: 8, name: 'Executive Suit', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 520000, category: 'Men', fabric: 'Wool', description: 'Premium executive suit with Nigerian-inspired details. Crafted for the modern professional who values heritage and style.' },
    { id: 9, name: 'Vintage Aso Oke', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 275000, category: 'Women', fabric: 'Aso Oke', description: 'Authentic vintage Aso Oke with traditional weaving patterns. A timeless piece celebrating Nigerian textile heritage.' },
    { id: 10, name: 'Statement Kimono', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 185000, category: 'Unisex', fabric: 'Silk', description: 'Contemporary kimono with bold African-inspired prints. Perfect for layering and making a fashion statement.' },
    { id: 11, name: 'Boubou Grand', image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 295000, category: 'Men', fabric: 'Cotton', description: 'Traditional Boubou with grand styling and premium cotton fabric. Ideal for formal cultural events and ceremonies.' },
    { id: 12, name: 'Ankara Jumpsuit', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 225000, category: 'Women', fabric: 'Ankara', description: 'Modern Ankara jumpsuit with contemporary cut and vibrant patterns. Perfect for both day and evening wear.' },
    { id: 13, name: 'Traditional Buba', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 165000, category: 'Men', fabric: 'Cotton', description: 'Classic Buba shirt with traditional embroidery and modern tailoring. A versatile piece for cultural and casual occasions.' },
    { id: 14, name: 'Elegant Iro & Buba', image: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 340000, category: 'Women', fabric: 'Aso Oke', description: 'Elegant Iro and Buba set in premium Aso Oke fabric. Traditional styling with contemporary fit and finish.' },
    { id: 15, name: 'Casual Dashiki Shirt', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 125000, category: 'Unisex', fabric: 'Cotton', description: 'Casual Dashiki shirt with relaxed fit and authentic African prints. Perfect for everyday wear and casual occasions.' },
    { id: 16, name: 'Luxury Agbada Set', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 485000, category: 'Men', fabric: 'Silk', description: 'Luxury Agbada set with intricate embroidery and premium silk fabric. The ultimate in traditional Nigerian formal wear.' },
    { id: 17, name: 'Modern Gele Wrap', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 95000, category: 'Women', fabric: 'Silk', description: 'Modern gele wrap with pre-styled design for easy wearing. Perfect for those who want traditional elegance with convenience.' },
    { id: 18, name: 'Designer Kaftan', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 315000, category: 'Unisex', fabric: 'Ankara', description: 'Designer kaftan with unique African-inspired patterns and contemporary silhouette. A fashion-forward piece for style enthusiasts.' },
    { id: 19, name: 'Premium Wrapper Set', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 420000, category: 'Women', fabric: 'Silk', description: 'Premium wrapper set with matching accessories. Crafted from the finest silk with traditional patterns and modern styling.' },
    { id: 20, name: 'Executive Kaftan', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 365000, category: 'Men', fabric: 'Wool', description: 'Executive kaftan with premium wool blend and sophisticated styling. Perfect for business meetings and formal events.' }
  ];

  const filters = ['All', 'Men', 'Women', 'Unisex'];
  
  const filteredProducts = selectedFilter === 'All' 
    ? products 
    : products.filter(product => product.category === selectedFilter);

  const formatPrice = (price) => `₦${price.toLocaleString()}`;

  const handleViewProduct = (product) => {
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
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-light mb-8 animate-fade-in-up">
              Our Signature Collection
            </h1>
            <p className="font-inter text-xl md:text-2xl font-light leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Discover luxury Nigerian fashion pieces crafted with meticulous attention to detail
            </p>
            <div className="w-32 h-px bg-white mx-auto mt-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}></div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center space-x-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`font-inter text-sm tracking-wider transition-all duration-300 pb-2 ${
                    selectedFilter === filter 
                      ? 'text-black border-b-2 border-black' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {filter.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="group animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <h3 className="font-playfair text-lg font-light">{product.name}</h3>
                    <p className="font-inter text-sm text-gray-500">{product.fabric}</p>
                    <p className="font-inter text-gray-900 font-medium">{formatPrice(product.price)}</p>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 justify-center pt-2">
                      <Button
                        onClick={() => handleViewProduct(product)}
                        variant="outline"
                        size="sm"
                        className="font-inter text-xs tracking-wider border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                      >
                        VIEW
                      </Button>
                      <Button
                        onClick={() => handleAddToCart(product)}
                        size="sm"
                        className="font-inter text-xs tracking-wider bg-black text-white hover:bg-gray-800 transition-all duration-300"
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCartFromModal}
      />
    </>
  );
};

export default Collections;
