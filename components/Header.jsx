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
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      isScrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-purple-100/50'
        : 'bg-white/80 backdrop-blur-xl border-b border-purple-100/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Redesigned */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 group-hover:from-purple-700 group-hover:via-indigo-700 group-hover:to-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/50 group-hover:scale-105">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  ZeroPay
                </span>
                <div className="text-xs text-gray-500 font-medium -mt-1">Payment Gateway</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Redesigned */}
          <nav className="hidden lg:flex items-center space-x-2">
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
                className="group relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer text-gray-700 hover:text-purple-600"
              >
                <span>{item.label}</span>
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
          </nav>

          {/* Right Section - Redesigned */}
          <div className="flex items-center space-x-3">
            {/* Language Selector - Redesigned */}
            <div className="hidden md:block relative">
              <select className="appearance-none rounded-xl px-4 py-2.5 pr-10 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/50 text-gray-700 hover:border-purple-300 cursor-pointer">
                <option className="text-gray-800">🇺🇸 English</option>
                <option className="text-gray-800">🇧🇩 বাংলা</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* CTA Buttons - Redesigned */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/merchant-login">
                <Button
                  variant="ghost"
                  className="font-semibold transition-all duration-300 hover:scale-105 cursor-pointer text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-xl px-5 py-2.5"
                >
                  <span className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Login</span>
                  </span>
                </Button>
              </Link>
              <Link href="/joinus">
                <Button className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 cursor-pointer">
                  <span className="relative flex items-center space-x-2">
                    <span>Get Started</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button - Redesigned */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 rounded-xl transition-all duration-300 cursor-pointer text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Redesigned */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 backdrop-blur-xl border-t border-purple-200/50 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav className="grid grid-cols-1 gap-3">
              {[
                { href: '/', label: 'Home', icon: '🏠', color: 'from-blue-500 to-cyan-500' },
                { href: '/features', label: 'Features', icon: '✨', color: 'from-purple-500 to-indigo-500' },
                { href: '/pricing', label: 'Pricing', icon: '💰', color: 'from-green-500 to-emerald-500' },
                { href: '/demo', label: 'Demo', icon: '🎬', color: 'from-pink-500 to-rose-500' },
                { href: '/developers', label: 'Developers', icon: '👨‍💻', color: 'from-orange-500 to-yellow-500' },
                { href: '/contact', label: 'Contact', icon: '📞', color: 'from-teal-500 to-cyan-500' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="group relative overflow-hidden flex items-center space-x-4 px-5 py-4 rounded-xl text-gray-700 hover:text-purple-600 bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg border border-gray-100 hover:border-purple-200"
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-md`}>
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className="font-semibold text-base">{item.label}</span>
                  <svg className="w-5 h-5 ml-auto text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-xl"></div>
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-purple-200/50">
                <select className="w-full appearance-none rounded-xl px-5 py-4 pr-10 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/80 border border-purple-200/50 text-gray-700 hover:border-purple-300 cursor-pointer shadow-sm">
                  <option className="text-gray-800">🇺🇸 English</option>
                  <option className="text-gray-800">🇧🇩 বাংলা</option>
                </select>
              </div>
              
              {/* Mobile CTA Buttons - Redesigned */}
              <div className="pt-4 border-t border-purple-200/50">
                <div className="grid grid-cols-1 gap-3">
                  <Link href="/merchant-login" onClick={closeMobileMenu}>
                    <Button variant="outline" className="w-full justify-center border-2 border-purple-300 text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 cursor-pointer font-semibold py-4 rounded-xl shadow-sm">
                      <span className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Merchant Login</span>
                      </span>
                    </Button>
                  </Link>
                  <Link href="/joinus" onClick={closeMobileMenu}>
                    <Button className="w-full justify-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white cursor-pointer font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/50">
                      <span className="flex items-center space-x-2">
                        <span>Get Started</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
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