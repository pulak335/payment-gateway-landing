"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'bg-purple-100 group-hover:bg-purple-200'
                  : 'bg-white/20 group-hover:bg-white/30'
              }`}>
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                ShortlyPay
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/features', label: 'Features' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/developers', label: 'Developers' },
              { href: '/demo', label: 'Demo' },
              { href: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isScrolled
                    ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:block relative">
              <select className={`appearance-none rounded-lg px-3 py-2 pr-8 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                isScrolled
                  ? 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100'
                  : 'bg-white/20 border border-white/30 text-white hover:bg-white/30'
              }`}>
                <option className="text-gray-800">🇺🇸-Eng</option>
                <option className="text-gray-800">🇧🇩-বাংলা</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className={`w-4 h-4 ${isScrolled ? 'text-gray-500' : 'text-white/70'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
                  <Link href="/merchant-login">
                     <Button
                       variant="ghost"
                       className={`font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${
                         isScrolled
                           ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                           : 'text-white/90 hover:text-purple-600 hover:bg-purple-50'
                       }`}
                     >
                       Merchant Login
                     </Button>
                   </Link>
               <Link href="/joinus">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="grid grid-cols-1 gap-4">
              {[
                { href: '/', label: 'Home', icon: '🏠' },
                { href: '/features', label: 'Features', icon: '✨' },
                { href: '/pricing', label: 'Pricing', icon: '💰' },
                { href: '/demo', label: 'Demo', icon: '🎬' },
                { href: '/developers', label: 'Developers', icon: '👨‍💻' },
                { href: '/contact', label: 'Contact', icon: '📞' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-100">
                <div className="grid grid-cols-1 gap-3">
                      <Link href="/demo" onClick={closeMobileMenu}>
                         <Button variant="outline" className="w-full justify-center border-purple-200 text-purple-600 hover:bg-purple-50 cursor-pointer">
                           Schedule Demo
                         </Button>
                       </Link>
                  <Link href="/joinus" onClick={closeMobileMenu}>
                    <Button className="w-full justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white cursor-pointer">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;