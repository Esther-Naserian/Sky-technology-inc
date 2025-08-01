'use client'

import { useState, useEffect, SetStateAction, useCallback } from 'react';

const TRANSITION_DURATION = 1000; 

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      title: 'LUXURY HOMES',
      description: 'DISCOVER EXQUISITE PROPERTIES THAT DEFINE SOPHISTICATED LIVING'
    },
    {
      image: 'https://images.pexels.com/photos/17797763/pexels-photo-17797763.jpeg',
      title: 'COMMERCIAL PROPERTIES',
      description: 'PRIME BUSINESS LOCATIONS FOR YOUR INVESTMENT SUCCESS'
    },
    {
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
      title: 'FAMILY RESIDENCES',
      description: 'FIND THE PERFECT HOME WHERE MEMORIES ARE MADE'
    },
    {
      image: 'https://images.pexels.com/photos/5845712/pexels-photo-5845712.jpeg',
      title: 'INVESTMENT OPPORTUNITIES',
      description: 'SECURE YOUR FINANCIAL FUTURE WITH SMART REAL ESTATE INVESTMENTS'
    },
    {
      image: 'https://images.pexels.com/photos/33247902/pexels-photo-33247902.jpeg',
      title: 'MODERN APARTMENTS',
      description: 'CONTEMPORARY LIVING SPACES IN PREMIUM LOCATIONS'
    }
  ];

  const handleSlideChange = useCallback((newDirection: SetStateAction<string>) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection(newDirection);

    setTimeout(() => {
      if (newDirection === 'next') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }, TRANSITION_DURATION / 2);

    setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  }, [isTransitioning, slides.length]);

  useEffect(() => {
    const timer = setInterval(() => handleSlideChange('next'), 6000);
    return () => clearInterval(timer);
  }, [handleSlideChange]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getSlideStyle = (index: number) => {
    const isCurrent = index === currentSlide;
    const isNext = (index === (currentSlide + 1) % slides.length);
    const isPrev = (index === (currentSlide - 1 + slides.length) % slides.length);

    let transform = 'scale(0.7) translateZ(-1000px)';
    let opacity = 0;
    let zIndex = 0;

    if (isCurrent) {
      transform = 'scale(1) translateZ(0)';
      opacity = 1;
      zIndex = 2;
    } else if (isNext && direction === 'next') {
      transform = isTransitioning 
        ? 'scale(1) translateZ(0)' 
        : 'scale(0.7) translateZ(-1000px) rotateX(45deg)';
      zIndex = 1;
    } else if (isPrev && direction === 'prev') {
      transform = isTransitioning
        ? 'scale(1) translateZ(0)'
        : 'scale(0.7) translateZ(-1000px) rotateX(-45deg)';
      zIndex = 1;
    }

    return {
      opacity,
      transform,
      zIndex,
      transition: `all ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
    };
  };

  return (
    <div id='home' className="min-h-screen">
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0" style={{ perspective: '2000px' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute inset-0 w-full h-full"
              style={getSlideStyle(index)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${slide.image})`,
                }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.4) 100%)'
                }}
              />
            </div>
          ))}
        </div>

        <div className="relative z-10">
        
          <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 bg-black/70 backdrop-blur-md">
            <div className="flex items-center">
              <div className="flex items-center">
                {/* Custom Logo Design */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                  <div className="text-white font-bold text-xl">K</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xl font-bold tracking-wide">KIRUI</span>
                  <span className="text-blue-300 text-sm font-medium tracking-wider">REAL ESTATE</span>
                </div>
              </div>
            </div>

            <ul className="hidden md:flex space-x-8 text-xl text-gray-200">
              {['HOME', 'PROPERTIES', 'ABOUT', 'SERVICES', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleMenu} 
                className="md:hidden text-gray-200 hover:text-white transition-colors"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </nav>  

        
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-20 left-0 right-0 bg-black bg-opacity-90 z-20`}>
            <ul className="px-8 py-4 space-y-4 text-gray-200">
              {['HOME', 'PROPERTIES', 'ABOUT', 'SERVICES', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="block hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero content */}
          <div className="relative px-8 md:px-20 flex items-center justify-center min-h-[calc(100vh-88px)]">
            <div className="text-center max-w-2xl relative z-10">
              <div className="mb-8">
                <svg className="w-16 h-16 mx-auto animate-spin-slow opacity-80" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="30" fill="none" stroke="white" strokeWidth="2"/>
                  <path d="M32 15 C20 28, 44 28, 32 41" stroke="white" fill="none" strokeWidth="2"/>
                  <circle cx="32" cy="25" r="5" fill="white"/>
                </svg>
              </div>
              
              <h1 
                className="text-5xl md:text-7xl font-serif text-white mb-6 transform transition-all duration-1000"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(20px) rotateX(45deg)' : 'translateY(0) rotateX(0)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                {slides[currentSlide].title}
              </h1>
              <p 
                className="text-gray-300 text-lg mb-8 transform transition-all duration-1000 delay-200"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(20px) rotateX(45deg)' : 'translateY(0) rotateX(0)',
                }}
              >
                {slides[currentSlide].description}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider relative overflow-hidden group"
                >
                  <span className="relative z-10">VIEW PROPERTIES</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
                <button
                  className="bg-amber-500 text-white px-8 py-3 hover:bg-amber-600 transition-all duration-300 text-sm tracking-wider"
                >
                  CONTACT US
                </button>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 'next' : 'prev');
                    setCurrentSlide(index);
                  }}
                  className={`group relative h-2 transition-all duration-300 ${
                    index === currentSlide ? 'w-8' : 'w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span 
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50 group-hover:bg-white/75'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
