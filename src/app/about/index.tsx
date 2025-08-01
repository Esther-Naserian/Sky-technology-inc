'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Users, Home, TrendingUp, Shield, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: <Home className="w-8 h-8" />, number: "500+", label: "Properties Sold" },
    { icon: <Users className="w-8 h-8" />, number: "1000+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Years Experience" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "95%", label: "Success Rate" },
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Trust & Integrity",
      description: "We build lasting relationships through transparent dealings and honest communication with every client."
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Client-Focused Service",
      description: "Your dreams become our mission. We go above and beyond to ensure your real estate goals are achieved."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Market Excellence",
      description: "Deep local knowledge and cutting-edge market insights help you make informed property decisions."
    }
  ];

  return (
    <div id='about' className="w-full bg-white">
      {/* Hero Banner */}
      <div className="relative w-full">
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('https://images.pexels.com/photos/5845712/pexels-photo-5845712.jpeg')"
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">About Kirui </h1>
            <p className="text-xl md:text-2xl text-center max-w-4xl px-4 leading-relaxed">
              Your trusted partners in finding the perfect property. We turn real estate dreams into reality 
              with expertise, dedication, and personalized service that puts you first.
            </p>
          </div>
          
          {/* Curved bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1920 100"
              className="w-full h-[100px] fill-white"
              preserveAspectRatio="none"
            >
              <path d="M0,100 C300,20 900,30 1920,100 L1920,100 L0,100 Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wide">
                Your Real Estate Experts
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Building Dreams, 
                <span className="text-blue-600"> Creating Homes</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 15 years, Kirui  Real Estate has been more than just a property company. 
                We're dream builders, home creators, and investment partners who understand that buying or 
                selling property is one of life's most important decisions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our deep understanding of the Kenyan real estate market, combined with our commitment to 
                exceptional service, has helped over 1,000 families find their perfect homes and helped 
                countless investors build their wealth through strategic property investments.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/7641825/pexels-photo-7641825.jpeg"
                alt="Kirui  Real Estate Team"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and ensure every client receives the highest level of service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're buying your first home, upgrading to a larger space, or looking for investment opportunities, 
            we're here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Browse Properties
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
