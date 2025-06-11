
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn items with original tags. Custom pieces are non-returnable unless there's a manufacturing defect."
    },
    {
      question: "How long does shipping take?",
      answer: "Domestic shipping within Nigeria takes 3-5 business days. International shipping takes 7-14 business days. Custom orders require 2-4 weeks for completion."
    },
    {
      question: "Do you offer international delivery?",
      answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location. All international orders are fully insured and tracked."
    },
    {
      question: "How do I know my size?",
      answer: "We provide detailed size charts for each garment. For custom pieces, we offer virtual consultations to ensure perfect fit. Our customer service team is available to help with sizing questions."
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-light mb-6 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Everything you need to know about our luxury fashion pieces and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 bg-white animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-inter font-medium text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="font-inter text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
