
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios'
import {toast} from 'react-toastify'

interface CartItem {
  id: number;
  name: string;
  image: string;
  fabric: string;
  size: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  products: Product[];
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// product type based on backend model
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  type: string;
  fabric: string;
  image: string;
  imagePublicId: string;
}

// Define the response type expected from your backend
interface ProductListResponse {
  success: boolean;
  message?: string;
  products: Product[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const backendUrl: string = import.meta.env.VITE_BACKEND_URL as string;

  const getProductsData = async (
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    backendUrl: string
  ): Promise<void> => {
    try {
      const response: AxiosResponse<ProductListResponse> = await axios.get(
        `${backendUrl}/api/product/list`
      );

      if (response.data.success) {
        setProducts(response.data.products);
        console.log(response.data)
      } else {
        toast.error(response.data.message || 'Failed to load products');
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || 'An error occurred');
    }
  };

  useEffect(() => {
    getProductsData(setProducts, backendUrl)
  }, [])

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => 
        cartItem.id === item.id && 
        cartItem.size === item.size
      );

      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === existingItem.id && cartItem.size === existingItem.size
            ? { ...cartItem, quantity: cartItem.quantity + (item.quantity || 1) }
            : cartItem
        );
      }

      return [...prevItems, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (id: number, size: string) => {
    setCartItems(prevItems => prevItems.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id: number, size: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id, size);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      products,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
