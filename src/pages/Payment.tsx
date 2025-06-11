
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const Payment = () => {
  const [step, setStep] = useState(3); // Current step: Payment
  const [formData, setFormData] = useState({
    // Billing Address
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Shipping Address
    sameAsBilling: true,
    shippingFirstName: '',
    shippingLastName: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZipCode: '',
    
    // Payment
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const cartItems = [
    {
      id: 1,
      name: 'Ankara Evening Gown',
      price: 450000,
      quantity: 1
    },
    {
      id: 2,
      name: 'Contemporary Agbada',
      price: 320000,
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15000;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const steps = [
    { number: 1, label: 'Cart', completed: true },
    { number: 2, label: 'Details', completed: true },
    { number: 3, label: 'Payment', completed: false },
    { number: 4, label: 'Done', completed: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Step Indicator */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((stepItem, index) => (
                <div key={stepItem.number} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                    ${stepItem.number === step 
                      ? 'bg-black text-white' 
                      : stepItem.completed 
                        ? 'bg-gray-300 text-gray-600' 
                        : 'bg-gray-100 text-gray-400'
                    }
                  `}>
                    {stepItem.number}
                  </div>
                  <span className={`ml-2 font-inter text-sm ${
                    stepItem.number === step ? 'text-black font-medium' : 'text-gray-500'
                  }`}>
                    {stepItem.label}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="w-12 h-px bg-gray-200 ml-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {/* Billing Address */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <h2 className="font-playfair text-2xl font-light mb-6">Billing Address</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="font-inter text-sm font-medium">First Name</Label>
                      <Input 
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="mt-2 border-gray-200 focus:border-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="font-inter text-sm font-medium">Last Name</Label>
                      <Input 
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="mt-2 border-gray-200 focus:border-black"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email" className="font-inter text-sm font-medium">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-2 border-gray-200 focus:border-black"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address" className="font-inter text-sm font-medium">Address</Label>
                      <Input 
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="mt-2 border-gray-200 focus:border-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="font-inter text-sm font-medium">City</Label>
                      <Input 
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="mt-2 border-gray-200 focus:border-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="font-inter text-sm font-medium">State</Label>
                      <Input 
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="mt-2 border-gray-200 focus:border-black"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <h2 className="font-playfair text-2xl font-light mb-6">Payment Information</h2>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="cardName" className="font-inter text-sm font-medium">Name on Card</Label>
                      <Input 
                        id="cardName"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                        className="mt-2 border-gray-200 focus:border-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber" className="font-inter text-sm font-medium">Card Number</Label>
                      <Input 
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="mt-2 border-gray-200 focus:border-black"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="expiryDate" className="font-inter text-sm font-medium">Expiry Date</Label>
                        <Input 
                          id="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          placeholder="MM/YY"
                          className="mt-2 border-gray-200 focus:border-black"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="font-inter text-sm font-medium">CVV</Label>
                        <Input 
                          id="cvv"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          placeholder="123"
                          className="mt-2 border-gray-200 focus:border-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <h2 className="font-playfair text-2xl font-light mb-8">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between font-inter text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8 border-t border-gray-200 pt-4">
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

                <Button className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg">
                  Complete Purchase
                </Button>

                <div className="mt-6 text-center">
                  <Link to="/cart" className="font-inter text-sm text-gray-600 hover:text-black transition-colors">
                    ← Back to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
