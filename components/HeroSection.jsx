import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 py-20 overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
          The Fast, Secure, and Easy Way to Accept Payments.
        </h1>
        <p className="text-xl text-white mb-10">
          Experience lightning-fast transactions, ironclad security, and unparalleled convenience with our seamless payment solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/get-started" passHref>
            <Button className="px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white">
              Get Started
            </Button>
          </Link>
          <Link href="/demo" passHref>
            <Button variant="secondary" className="px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5m0-13.5h6.75m-6.75 0H2.25A.75.75 0 0 0 1.5 6v12a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25zm13.5 0a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 .75.75h6.75a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-6.75z" />
              </svg>
              <span>Try Demo</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;