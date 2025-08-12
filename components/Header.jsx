"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-2xl font-bold text-gray-800">Your Logo</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
        <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
        <Link href="/demo" className="text-gray-600 hover:text-gray-900">Demo</Link>
        <Link href="/developers" className="text-gray-600 hover:text-gray-900">Developers</Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        <Link href="/joinus" className="text-gray-600 hover:text-gray-900">Join Us</Link>
      </nav>

      {/* Right Section: Language Selector & CTA Buttons */}
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <div className="relative">
          <select className="block appearance-none bg-white border border-purple-800 text-purple-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>English</option>
            <option>Bangla</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        {/* CTA Buttons */}
        {!isMobileMenuOpen &&(
          <Link href="/joinus">
            <Button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">Join Us</Button>
            </Link>
          )}
        
      </div>

      {/* Mobile Menu (visible on small screens when open) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>Pricing</Link>
          <Link href="/demo" className="text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>Demo</Link>
          <Link href="/developers" className="text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>Developers</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>Contact</Link>
          <Link href="/joinus" className="text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>
          <Button className="w-full bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">Join Us</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;