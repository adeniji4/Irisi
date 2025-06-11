
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const shipping = 15000;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-light mb-4 animate-fade-in-up">
              Shopping Cart
            </h1>
            <div className="w-24 h-px bg-black animate-fade-in" style={{animationDelay: '0.2s'}}></div>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <p className="font-inter text-gray-600 text-lg mb-8">Your cart is empty</p>
              <Link to="/collections">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-8">
                {cartItems.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.size}`} 
                    className="bg-white border border-gray-100 p-8 animate-fade-in-up"
                    style={{animationDelay: `${0.3 + index * 0.1}s`}}
                  >
                    <div className="flex gap-8">
                      {/* Product Image */}
                      <div className="w-32 h-40 bg-gray-100 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-playfair text-xl font-light mb-2">{item.name}</h3>
                        <p className="font-inter text-gray-600 text-sm mb-1">Fabric: {item.fabric}</p>
                        <p className="font-inter text-gray-600 text-sm mb-4">Size: {item.size}</p>
                        <p className="font-inter text-lg font-medium">{formatPrice(item.price)}</p>
                      </div>

                      {/* Quantity and Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <button 
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>

                        <div className="flex items-center border border-gray-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 min-w-[60px] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  <h2 className="font-playfair text-2xl font-light mb-8">Order Summary</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between font-inter">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between font-inter">
                      <span>Shipping</span>
                      <span>{formatPrice(shipping)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between font-inter text-lg font-medium">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>

                  <Link to="/payment" className="block">
                    <Button className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
