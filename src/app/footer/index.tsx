'use client';
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Linkedin, Twitter, Instagram,  Building, Users } from 'lucide-react';

const RealEstateFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      {/* Contact Information Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Ready to find your dream property? Contact our expert team today.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-blue-400 font-semibold text-lg">+254 748 225 118</p>
            <p className="text-gray-400 text-sm mt-1">Available 24/7</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-blue-400 font-semibold">info@kirui.co.ke</p>
            <p className="text-gray-400 text-sm mt-1">We reply within 24 hours</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-blue-400 font-semibold">Nairobi CBD</p>
            <p className="text-gray-400 text-sm mt-1">Kenya</p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <div className="text-white font-bold text-xl">K</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Kirui</h3>
                <p className="text-blue-400 text-sm">Real Estate</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partners in finding the perfect property. We turn real estate dreams into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2 text-blue-400" />
              Properties
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Residential Homes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Commercial Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Luxury Villas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Apartments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Investment Properties</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-400" />
              Services
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Property Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Property Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Property Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Investment Consultation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Property Valuation</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest property listings and market updates.</p>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300 pr-12"
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Get weekly property updates and exclusive listings directly in your inbox.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © 2025 Kirui Real Estate. All Rights Reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Licensed Real Estate Agents in Kenya
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RealEstateFooter;
