import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[95vh] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Simple Background Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-2xl opacity-20"></div>

        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-[85vh]">
          {/* Left Column - Modern Hero Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight mb-6">
              Revolutionize
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Payments
              </span>
              with Zero Fees
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience the future of digital payments. Lightning-fast processing, ironclad security, and zero transaction fees.
            </p>

            {/* Single CTA Button */}
            <div className="mb-8">
              <Link href="/get-started">
                <Button className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white text-lg font-bold px-12 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/25 cursor-pointer">
                  <span className="mr-2">🚀</span>
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Modern Feature Showcase */}
          <div className="relative hidden lg:block">
            {/* Feature Showcase Container */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 border border-slate-200 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Why Choose Our Gateway?</h3>

              {/* Key Features */}
              <div className="space-y-3 mb-6">
                {/* Zero Fees */}
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl">💰</div>
                  <div>
                    <div className="text-green-700 font-bold">$0 Transaction Fees</div>
                    <div className="text-green-600 text-sm">Forever free processing</div>
                  </div>
                </div>

                {/* Speed */}
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <div className="text-blue-700 font-bold">Lightning Fast</div>
                    <div className="text-blue-600 text-sm">Sub-second processing</div>
                  </div>
                </div>
              </div>

              {/* Zero Fee Highlight */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 text-center mb-6">
                <div className="text-green-600 font-bold text-3xl mb-2">$0.00</div>
                <div className="text-slate-800 font-semibold mb-1">Transaction Fee</div>
                <div className="text-green-600 text-sm">Forever Free Processing</div>
              </div>

              {/* Simple Testimonial */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="text-center">
                  <div className="text-slate-800 font-semibold mb-2">Trusted by 10,000+ businesses</div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-50"></div>
            <div className="absolute top-1/2 -right-12 w-20 h-20 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
          <div className="w-1 h-4 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;