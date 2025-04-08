
'use client';

import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <div id='about' className="w-full">
      <div className="relative w-full">
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/backk.png')"
          }}
        >
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1920 100"
              className="w-full h-[100px] fill-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C300,90 900,80 1920,0 L1920,100 L0,100 Z" />
            </svg>
          </div>

        
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1 className="text-4xl font-bold text-black mb-6">About Us</h1>
            <p className="text-gray-800 text-lg max-w-3xl text-center px-4">
 Sky Technology – Empowering your space with cutting-edge CCTV, solar, and tech solutions.
From reliable computer repairs to seamless Wi-Fi optimization, we keep you connected and secure.
Partner with us for a smarter, safer, and greener future, powered by innovation.
            </p>
          </div>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
        
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl relative">
            
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/ground.jpeg"
                  alt="Coffee cup with magical tree"
                  fill
                  priority
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

            
              <div className="absolute top-0 -right-8 w-20 h-20">
                <div className="w-full h-full bg-green-500 rounded-full opacity-20 blur-xl"></div>
              </div>
              <div className="absolute -bottom-4 left-10 w-16 h-16">
                 <div className="w-full h-full bg-green-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>

        
          <div className="space-y-6">
            <div className="uppercase text-black tracking-wider text-sm font-medium">
            INNOVATION, PERFORMANCE, RELIABILITY
            </div>
            <h2 className="text-4xl font-bold">
              Our vision <span className="">Story</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
            By focusing on top-tier CCTV installations, solar energy solutions, and tech repairs, we ensure that each service delivers exceptional quality and reliability. 
            This allows you to experience seamless performance, expert craftsmanship, and cutting-edge technology in every solution we provide.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;