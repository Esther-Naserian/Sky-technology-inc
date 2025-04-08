
'use client';
import React, { useState } from 'react';
import { ChevronDown, Coffee, Leaf, Clock, ThumbsUp, Coffee as CoffeeIcon, Package } from 'lucide-react';

const ContactFormFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      icon: <Coffee className="w-5 h-5" />,
      question: " What CCTV installation solutions do you offer?",
      answer: "We offer a range of CCTV installation solutions, including residential, commercial, IP camera systems, wireless setups, and 24/7 monitoring services."
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      question: "What solar installation solutions do you offer?",
      answer: "We offer a range of solar installation solutions, including residential, commercial, custom designs, off-grid systems, and energy storage options."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "  What computer accessories and repair services do you offer",

  
      answer: "Yes, We offer a variety of computer accessories, including keyboards, mice, monitors, and external storage devices, along with expert repair services for laptops, desktops, and other devices, ensuring efficient and reliable solutions for all your tech needs ."
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      question: " What Wi-Fi provision and repair services do you offer ?",
      answer: "  We provide expert Wi-Fi installation, configuration, and troubleshooting services, along with reliable repair solutions to optimize your network performance and resolve connectivity issues."
    },
    {
      icon: <CoffeeIcon className="w-5 h-5" />,
      question: "What kind of websites do you develop?",
      answer: "  We specialize in developing custom websites, including business websites, e-commerce platforms, blogs, and portfolio sites, all designed to be responsive, user-friendly, and optimized for performance."
    },
    {
      icon: <Package className="w-5 h-5" />,
      question: " What POS systems and networking solutions do you offer for businesses?",
      answer: "We offer customized POS systems tailored to your business needs, along with reliable networking solutions for seamless connectivity, ensuring smooth transactions, secure data management, and efficient communication across your network.                     ."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-amber-500 text-center mb-4">
          Have any questions?
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Find answers to our most frequently asked  questions
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-amber-500">{item.icon}</span>
                  <span className="text-gray-300">{item.question}</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${
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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl text-amber-500 mb-8 font-medium">
              Reach out to us for any inquiry
            </h2>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:bg-gray-600 focus:ring-1 focus:ring-amber-500 text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:bg-gray-600 focus:ring-1 focus:ring-amber-500 text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Messages"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:bg-gray-600 focus:ring-1 focus:ring-amber-500 text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-colors duration-300 font-medium"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="h-[300px] md:h-full relative bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.311809955266!2d30.6534!3d-1.9845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c49c89c735af6d%3A0x39e2c8e0fd741e71!2sKayonza%2C%20Rwanda!5e0!3m2!1sen!2s!4v1635770000000!5m2!1sen!2s"
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
  );
};

export default ContactFormFAQ;


