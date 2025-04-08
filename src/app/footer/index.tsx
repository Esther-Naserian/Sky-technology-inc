
'use client';
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const DarkFooter = () => {

  return (
    <footer className="bg-blue-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 p-3 rounded-full mb-3">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <p>(+254) 748225118</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 p-3 rounded-full mb-3">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <p>skytechnology@gmail.com</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 p-3 rounded-full mb-3">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <p>Twin Towers, Kisii Town Room TT110, first floor </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Awards</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Career</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Our products</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-amber-500 text-gray-300"
              />
              <button 
                type="button" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-500 hover:text-amber-600"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm mt-2">Get updates in your mailbox</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">©  2025 Sky Technology  Ltd. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bashanaimigongoartcenter/?locale=en_GB" className="hover:text-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/charles-ashimwe-378542152/" className="hover:text-amber-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/imgbashana" className="hover:text-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/bashana_imigongo/" className="hover:text-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DarkFooter;
