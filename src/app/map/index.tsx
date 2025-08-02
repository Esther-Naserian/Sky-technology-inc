'use client';
import React, { useState } from 'react';
import { ChevronDown, Coffee, Leaf, Clock, ThumbsUp, Coffee as CoffeeIcon, Package } from 'lucide-react';

const ContactFormFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      icon: <Coffee className="w-5 h-5" />,
      question: "What types of properties do you specialize in?",
      answer: "We specialize in residential homes, luxury villas, commercial properties, investment properties, and rental units across Kenya. Our portfolio includes everything from starter homes to premium estates."
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      question: "How do you determine property prices?",
      answer: "Our pricing is based on comprehensive market analysis, including location, property condition, recent sales in the area, market trends, and unique property features. We ensure competitive and fair pricing for all our clients."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "How long does the property buying process take?",
      answer: "The timeline varies depending on factors like financing, inspections, and negotiations. Typically, cash purchases take 2-4 weeks, while financed purchases take 4-8 weeks. We guide you through every step to ensure a smooth process."
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      question: "Do you offer property management services?",
      answer: "Yes, we provide comprehensive property management services including tenant screening, rent collection, maintenance coordination, regular inspections, and financial reporting for property owners."
    },
    {
      icon: <CoffeeIcon className="w-5 h-5" />,
      question: "What financing options are available?",
      answer: "We work with multiple financial institutions to help you secure the best mortgage rates and terms. We can connect you with banks, SACCOs, and other lending institutions that offer competitive property financing."
    },
    {
      icon: <Package className="w-5 h-5" />,
      question: "Do you assist with legal documentation and transfers?",
      answer: "Absolutely! We work with qualified lawyers and legal experts to handle all documentation, title transfers, land searches, and ensure all legal requirements are met for your property transaction."
    }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3794803/pexels-photo-3794803.jpeg')"
        }}
      ></div>
      <div className="relative z-10">
        <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Real Estate Questions?
          </h2>
          <p className="text-gray-400 mb-12">
            Find answers to  most frequently asked real estate questions
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">{item.icon}</span>
                  <span className="text-gray-300">{item.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-4 pb-4 text-gray-400">
                  <div className="pt-2 pl-9">{item.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact section header with image */}
        <div className="text-center mb-12">
          <div className="w-full h-32 mb-8 rounded-2xl overflow-hidden relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/27641056/pexels-photo-27641056.jpeg')"
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white">Get In Touch With Us</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl text-blue-500 mb-8 font-medium">
              Contact Our Real Estate Experts
            </h2>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-1 focus:ring-blue-500 text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-1 focus:ring-blue-500 text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Messages"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-1 focus:ring-blue-500 text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300 font-medium"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="h-[300px] md:h-full relative bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.043999993085!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22ac8e463%3A0x1cbdb005499a6c9e!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1635770000000!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default ContactFormFAQ;
