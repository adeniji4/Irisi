import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Country, State } from 'country-state-city';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useCart } from '../contexts/CartContext';
import { PaystackButton } from 'react-paystack';

const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
  sameAsBilling: true,
  shippingFirstName: '',
  shippingLastName: '',
  shippingAddress: '',
  shippingCity: '',
  shippingState: '',
  shippingZipCode: ''
};

// Reusable class for consistent styling
const fieldClass =
  "mt-2 w-full border border-gray-200 focus:border-black rounded-md py-2 px-3 text-sm font-inter";

const requiredFields = [
  'firstName',
  'lastName',
  'email',
  'address',
  'city',
  'state',
  'country',
  'phone',
];

const Payment = () => {
  const [step, setStep] = useState(3);
  const [formData, setFormData] = useState(initialFormData);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { cartItems, clearCart, addToCart } = useCart();

  // Country/State logic
  const countries = Country.getAllCountries();
  const states = formData.country ? State.getStatesOfCountry(formData.country) : [];
  const selectedCountry = countries.find(c => c.isoCode === formData.country);

  const getTotalPrice = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 15000;
    return subtotal + shipping;
  };

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.address.trim() &&
    formData.city.trim() &&
    formData.state.trim() &&
    formData.country.trim() &&
    formData.phone.trim();

  const email = formData.email;
  const amount = getTotalPrice() * 100;

  // Send order/payment info to backend, clear cart and form
  const handleOrderSuccess = async (reference: string) => {
    setLoading(true);
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems,
          customer: formData,
          paymentReference: reference,
        }),
      });
      clearCart();
      setStep(4);
      setPaymentSuccess(true);
      setFormData(initialFormData);
      // Set flag in localStorage
      localStorage.setItem('paymentSuccess', 'true');
    } catch (error) {
      alert('Order update failed. Please contact support.');
    } finally {
      setLoading(false);
    }
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: `${formData.firstName} ${formData.lastName}`,
        },
        {
          display_name: "Billing Address",
          variable_name: "billing_address",
          value: `${formData.address}, ${formData.city}, ${formData.state}, ${selectedCountry?.name || ''}`,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: `${selectedCountry ? '+' + selectedCountry.phonecode : ''}${formData.phone}`,
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (reference: { reference: string }) => {
      handleOrderSuccess(reference.reference);
    },
    onClose: () => alert("Payment window closed"),
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15000;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'This field is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'This field is required';
    if (!formData.email.trim()) newErrors.email = 'This field is required';
    if (!formData.address.trim()) newErrors.address = 'This field is required';
    if (!formData.city.trim()) newErrors.city = 'This field is required';
    if (!formData.state.trim()) newErrors.state = 'This field is required';
    if (!formData.country.trim()) newErrors.country = 'This field is required';
    if (!formData.phone.trim()) newErrors.phone = 'This field is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validate();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) validate();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(requiredFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    if (!validate()) return;
    // ...proceed to next step or submit...
  };

  const steps = [
    { number: 1, label: 'Cart', completed: true },
    { number: 2, label: 'Details', completed: true },
    { number: 3, label: 'Payment', completed: false },
    { number: 4, label: 'Done', completed: false }
  ];

  useEffect(() => {
    if (cartItems.length > 0 && step !== 4) {
      localStorage.removeItem('paymentSuccess');
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem('paymentSuccess') === 'true' &&
      cartItems.length === 0
    ) {
      setStep(4);
      setPaymentSuccess(true);
    }
    // eslint-disable-next-line
  }, []);

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
            {step !== 4 && (
              <>
                <div className="lg:col-span-2">
                  <div className="space-y-12">
                    {/* Shipping Details */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                      <h2 className="font-playfair text-2xl font-light mb-6">Shipping Details</h2>
                      <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* First Name */}
                          <div>
                            <Label htmlFor="firstName" className="font-inter text-sm font-medium">First Name</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              onBlur={() => handleBlur('firstName')}
                              className="mt-2 border-gray-200 focus:border-black"
                            />
                            {touched.firstName && errors.firstName && (
                              <div className="text-red-500 text-xs mt-1">{errors.firstName}</div>
                            )}
                          </div>
                          {/* Last Name */}
                          <div>
                            <Label htmlFor="lastName" className="font-inter text-sm font-medium">Last Name</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              onBlur={() => handleBlur('lastName')}
                              className="mt-2 border-gray-200 focus:border-black"
                            />
                            {touched.lastName && errors.lastName && (
                              <div className="text-red-500 text-xs mt-1">{errors.lastName}</div>
                            )}
                          </div>
                          {/* Email */}
                          <div className="md:col-span-2">
                            <Label htmlFor="email" className="font-inter text-sm font-medium">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              onBlur={() => handleBlur('email')}
                              className="mt-2 border-gray-200 focus:border-black"
                            />
                            {touched.email && errors.email && (
                              <div className="text-red-500 text-xs mt-1">{errors.email}</div>
                            )}
                          </div>
                          {/* Country */}
                          <div>
                            <Label htmlFor="country" className="font-inter text-sm font-medium">Country</Label>
                            <select
                              id="country"
                              value={formData.country}
                              onChange={(e) => handleInputChange('country', e.target.value)}
                              className={fieldClass}
                            >
                              <option value="">Select Country</option>
                              {countries.map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          {/* State */}
                          <div>
                            <Label htmlFor="state" className="font-inter text-sm font-medium">State</Label>
                            <select
                              id="state"
                              value={formData.state}
                              onChange={(e) => handleInputChange('state', e.target.value)}
                              className={fieldClass}
                              disabled={!formData.country}
                            >
                              <option value="">Select State</option>
                              {states.map((state) => (
                                <option key={state.isoCode} value={state.name}>
                                  {state.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          {/* Address */}
                          <div className="md:col-span-2">
                            <Label htmlFor="address" className="font-inter text-sm font-medium">Address</Label>
                            <Input
                              id="address"
                              value={formData.address}
                              onChange={(e) => handleInputChange('address', e.target.value)}
                              onBlur={() => handleBlur('address')}
                              className="mt-2 border-gray-200 focus:border-black"
                            />
                            {touched.address && errors.address && (
                              <div className="text-red-500 text-xs mt-1">{errors.address}</div>
                            )}
                          </div>
                          {/* City */}
                          <div>
                            <Label htmlFor="city" className="font-inter text-sm font-medium">City</Label>
                            <Input
                              id="city"
                              value={formData.city}
                              onChange={(e) => handleInputChange('city', e.target.value)}
                              onBlur={() => handleBlur('city')}
                              className="mt-2 border-gray-200 focus:border-black"
                            />
                            {touched.city && errors.city && (
                              <div className="text-red-500 text-xs mt-1">{errors.city}</div>
                            )}
                          </div>
                          {/* Phone with country code */}
                          <div>
                            <Label htmlFor="phone" className="font-inter text-sm font-medium">Phone Number</Label>
                            <div className="relative">
                              <span
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none font-inter"
                                style={{ zIndex: 2 }}
                              >
                                +{selectedCountry?.phonecode || ''}
                              </span>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={e => handleInputChange('phone', e.target.value)}
                                onBlur={() => handleBlur('phone')}
                                className="mt-2 w-full border border-gray-200 focus:border-black rounded-md py-2 pl-12 pr-3 text-sm font-inter"
                                placeholder="Enter phone number"
                                style={{ boxSizing: 'border-box' }}
                              />
                            </div>
                            {touched.phone && errors.phone && (
                              <div className="text-red-500 text-xs mt-1">{errors.phone}</div>
                            )}
                          </div>
                        </div>

                        <Button type="submit" className="mt-6">Continue</Button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 p-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    <h2 className="font-playfair text-2xl font-light mb-8">Order Summary</h2>
                    
                    <div className="space-y-4 mb-8">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between font-inter text-sm">
                          <div className="flex items-center">
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 object-cover rounded mr-3 border"
                                onError={e => { (e.target as HTMLImageElement).src = '/fallback-image.jpg'; }} // fallback image
                              />
                            )}
                            <div>
                              <div>
                                {item.name} × {item.quantity}
                                {item.size && (
                                  <span className="ml-2 text-gray-500">({item.size})</span>
                                )}
                              </div>
                            </div>
                          </div>
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

                    {/* Only render PaystackButton if form is valid */}
                    {isFormValid ? (
                      <PaystackButton {...componentProps} className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg" disabled={loading} />
                    ) : (
                      <Button disabled className="w-full bg-gray-300 text-gray-500 py-4 text-lg cursor-not-allowed">
                        Pay Now
                      </Button>
                    )}

                    <div className="mt-6 text-center">
                      <Link to="/cart" className="font-inter text-sm text-gray-600 hover:text-black transition-colors">
                        ← Back to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Done Step */}
            {step === 4 && paymentSuccess && (
              <div className="col-span-3 text-center py-16">
                <h2 className="text-3xl font-playfair mb-4">Thank you for your purchase!</h2>
                <p className="text-lg">Your payment was successful and your order has been received.</p>
                <Link
                  to="/"
                  className="mt-8 inline-block bg-black text-white px-6 py-3 rounded"
                  onClick={() => localStorage.removeItem('paymentSuccess')}
                >
                  Go to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;

