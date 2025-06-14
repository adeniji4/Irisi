
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
      <DialogContent className="max-w-4xl w-[95vw] md:w-full bg-white p-0 overflow-hidden animate-scale-in max-h-[90vh] md:max-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[600px]">
          {/* Product Image */}
          <div className="bg-gray-100 h-[250px] md:h-full">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="p-4 sm:p-6 md:p-12 flex flex-col justify-between overflow-y-auto">
            <div>
              <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-light mb-2 md:mb-4">{product.name}</h2>
              <p className="font-inter text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-6">{formatPrice(product.price)}</p>
              {product.fabric && (
                <p className="font-inter text-sm text-gray-600 mb-2 md:mb-4">Fabric: {product.fabric}</p>
              )}
              <p className="font-inter text-sm text-gray-600 leading-relaxed mb-4 md:mb-8">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-3 md:mb-6">
                <label className="font-inter text-sm font-medium mb-2 md:mb-3 block">Size</label>
                <select 
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full border border-gray-200 px-3 py-2 md:px-4 md:py-3 font-inter focus:outline-none focus:border-black transition-colors text-sm"
                >
                  {sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Quantity Selector */}
              <div className="mb-4 md:mb-8">
                <label className="font-inter text-sm font-medium mb-2 md:mb-3 block">Quantity</label>
                <select 
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full border border-gray-200 px-3 py-2 md:px-4 md:py-3 font-inter focus:outline-none focus:border-black transition-colors text-sm"
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
              className="w-full bg-black text-white hover:bg-gray-800 py-3 md:py-4 text-sm md:text-lg font-inter tracking-wide"
            >
              ADD TO CART
            </Button>
          </div>
        </div>

        {/* Close Button */}
        <DialogClose className="absolute right-3 top-3 md:right-6 md:top-6 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
