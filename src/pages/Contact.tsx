import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import WhatsAppCTA from '../components/WhatsAppCTA';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = `${firstName} ${lastName}`.trim();
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    });
    const data = await res.json();
    if (data.success) {
      alert('Message sent!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('Failed to send message');
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-light mb-8 animate-fade-in-up" style={{ color: '#ff6600' }}>
            Get In Touch
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Whether it’s for a wedding, ceremony, personal style, or bulk order <br></br>Ìrísí is ready to craft your perfect custom Fila.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="font-playfair text-3xl font-light mb-8" style={{ color: '#ff6600' }}>Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none font-inter"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none font-inter"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none font-inter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none font-inter"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    rows={6}
                    placeholder="Message"
                    className="w-full px-0 py-4 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none font-inter resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="font-inter text-sm tracking-[0.2em] border border-black px-12 py-4 hover:bg-black hover:text-white transition-all duration-500"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div>
                <h2 className="font-playfair text-3xl font-light mb-8" style={{ color: '#ff6600' }}>Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <MapPin size={20} className="mt-1 text-gray-600" />
                    <div>
                      <div className="font-inter font-medium mb-1" >Studio Address</div>
                      <div className="font-inter text-gray-600">
                        123 Victoria Island<br />
                        Lagos, Nigeria
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone size={20} className="mt-1 text-gray-600" />
                    <div>
                      <div className="font-inter font-medium mb-1">Phone</div>
                      <div className="font-inter text-gray-600">+234 901 234 5678</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail size={20} className="mt-1 text-gray-600" />
                    <div>
                      <div className="font-inter font-medium mb-1">Email</div>
                      <div className="font-inter text-gray-600">hello@clothbydan.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-light mb-6" style={{ color: '#ff6600' }}>Studio Hours</h3>
                <div className="space-y-2 font-inter text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Contact;
