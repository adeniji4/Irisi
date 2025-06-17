
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className={`font-playfair text-2xl font-bold tracking-wide hover:opacity-70 transition-all duration-300 ${
            isScrolled ? 'text-[#ff6600]' : 'text-white drop-shadow-lg'
          }`}>
            Ìrísí
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/" 
              className={`font-inter text-sm tracking-wider transition-all duration-300 ${
                isScrolled 
                  ? (isActive('/') ? 'text-[#ff6600] border-b border-black pb-1' : 'text-gray-700 hover:text-black') 
                  : (isActive('/') ? 'text-white border-b border-white pb-1' : 'text-white/80 hover:text-white drop-shadow-lg')
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/collections" 
              className={`font-inter text-sm tracking-wider transition-all duration-300 ${
                isScrolled 
                  ? (isActive('/collections') ? 'text-[#ff6600] border-b border-black pb-1' : 'text-gray-700 hover:text-black') 
                  : (isActive('/collections') ? 'text-white border-b border-white pb-1' : 'text-white/80 hover:text-white drop-shadow-lg')
              }`}
            >
              COLLECTIONS
            </Link>
            <Link 
              to="/about" 
              className={`font-inter text-sm tracking-wider transition-all duration-300 ${
                isScrolled 
                  ? (isActive('/about') ? 'text-[#ff6600] border-b border-black pb-1' : 'text-gray-700 hover:text-black') 
                  : (isActive('/about') ? 'text-white border-b border-white pb-1' : 'text-white/80 hover:text-white drop-shadow-lg')
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className={`font-inter text-sm tracking-wider transition-all duration-300 ${
                isScrolled 
                  ? (isActive('/contact') ? 'text-[#ff6600] border-b border-black pb-1' : 'text-gray-700 hover:text-black') 
                  : (isActive('/contact') ? 'text-white border-b border-white pb-1' : 'text-white/80 hover:text-white drop-shadow-lg')
              }`}
            >
              CONTACT
            </Link>
            <Link 
              to="/cart" 
              className={`transition-all duration-300 flex items-center px-3 py-2 relative ${
                isScrolled 
                  ? (isActive('/cart') ? 'bg-black text-white' : 'text-gray-700 hover:text-black hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)]')
                  : (isActive('/cart') ? 'bg-white text-black' : 'text-white/80 hover:text-white hover:shadow-[0px_4px_8px_rgba(255,255,255,0.3)] drop-shadow-lg')
              }`}
            >
              <ShoppingBag size={16} />
              {totalItems > 0 && (
                <span className={`absolute -top-2 -right-2 text-xs rounded-full w-5 h-5 flex items-center justify-center ${
                  isScrolled ? 'bg-black text-white' : 'bg-white text-black'
                }`}>
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white drop-shadow-lg'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-6 py-8 space-y-6">
              <Link to="/" className="block font-inter text-sm tracking-wider text-black" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <Link to="/collections" className="block font-inter text-sm tracking-wider text-black" onClick={() => setIsMobileMenuOpen(false)}>COLLECTIONS</Link>
              <Link to="/about" className="block font-inter text-sm tracking-wider text-black" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
              <Link to="/contact" className="block font-inter text-sm tracking-wider text-black" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
              <Link to="/cart" className="block font-inter text-sm tracking-wider flex items-center space-x-2 relative text-black" onClick={() => setIsMobileMenuOpen(false)}>
                <ShoppingBag size={16} />
                <span>CART</span>
                {totalItems > 0 && (
                  <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
