import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogClose } from './ui/dialog';
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  fabric?: string;
  sizes: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;


  const sizes = product.sizes || ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const quantities = [1, 2, 3, 4, 5];

  const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
    onClose();
  };

 

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-white p-0 overflow-hidden animate-scale-in max-h-[90vh] md:max-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[600px]">
          {/* Product Image */}
          {product && (
            <div className="flex flex-col items-center justify-center py-6 md:py-12">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mb-4 shadow"
                style={{ width: '280px', height: '280px', objectFit: 'cover', maxWidth: '90vw', maxHeight: '45vh' }}
              />
            </div>
          )}

          {/* Product Details */}
          <div className="p-4 md:p-10 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="space-y-2 md:space-y-3 px-1 md:px-2 py-1 md:py-2">
                <h2 className="font-playfair text-lg md:text-2xl font-light">{product.name}</h2>
                <p className="font-inter text-sm md:text-base text-gray-500">{product.fabric}</p>
                <p className="font-inter text-gray-900 font-semibold text-base md:text-lg">{formatPrice(product.price)}</p>
                <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed mb-2 md:mb-4">
                  {product.description}
                </p>

                {/* Size Selector */}
                <div className="mb-2 md:mb-6">
                  <label className="font-inter text-sm md:text-base font-medium mb-1 md:mb-3 block">Size</label>
                  <select 
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full border border-gray-200 px-2 md:px-4 py-2 md:py-3 font-inter focus:outline-none focus:border-black transition-colors text-sm md:text-base"
                  >
                    {sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity Selector */}
                <div className="mb-4 md:mb-10">
                  <label className="font-inter text-sm md:text-base font-medium mb-1 md:mb-3 block">Quantity</label>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full border border-gray-200 px-2 md:px-4 py-2 md:py-3 font-inter focus:outline-none focus:border-black transition-colors text-sm md:text-base"
                  >
                    {quantities.map(qty => (
                      <option key={qty} value={qty}>{qty}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full font-inter text-sm md:text-base tracking-wider bg-[#ff6600] text-white hover:bg-gray-800 transition-all duration-300 px-4 md:px-6 py-2 md:py-3 mt-2 md:mt-4"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <DialogClose className="absolute right-3 top-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
