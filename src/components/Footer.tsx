
import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-playfair text-3xl font-bold mb-6">ClothingbyDan</div>
            <p className="font-inter text-gray-600 leading-relaxed max-w-md mb-8">
              Luxury Nigerian fashion that celebrates heritage while embracing contemporary elegance. Crafted with passion, worn with pride.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="font-inter text-sm tracking-wider font-medium mb-4 uppercase">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none font-inter"
                  required
                />
                <button 
                  type="submit"
                  className="ml-4 font-inter text-sm tracking-wider hover:opacity-70 transition-opacity border-b border-gray-300 pb-3"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter text-sm tracking-wider font-medium mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/" className="font-inter text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="/collections" className="font-inter text-gray-600 hover:text-gray-900 transition-colors">Collections</a></li>
              <li><a href="/about" className="font-inter text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="/contact" className="font-inter text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-sm tracking-wider font-medium mb-6 uppercase">Contact</h4>
            <ul className="space-y-4 font-inter text-gray-600">
              <li>Lagos, Nigeria</li>
              <li>+234 (0) 123 456 7890</li>
              <li>hello@clothingbydan.com</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <p className="font-inter text-sm text-gray-500">
            © 2024 ClothingbyDan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
