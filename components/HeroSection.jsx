import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Trusted by 10,000+ businesses worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              The Future of
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Payment Processing
              </span>
              is Here
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience lightning-fast transactions, ironclad security, and unparalleled convenience with our seamless payment solutions that scale with your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">135+</div>
                <div className="text-white/70 text-sm">Currencies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/get-started">
                <Button className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25">
                  Get Started Free
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 text-lg font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 text-center lg:text-left">
              <p className="text-white/60 text-sm mb-4">Trusted by leading companies</p>
              <div className="flex justify-center lg:justify-start space-x-6 opacity-60">
                <div className="w-16 h-8 bg-white/20 rounded"></div>
                <div className="w-16 h-8 bg-white/20 rounded"></div>
                <div className="w-16 h-8 bg-white/20 rounded"></div>
                <div className="w-16 h-8 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative hidden lg:block">
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Payment Card Mockup */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 text-white mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-2xl font-bold">ShortlyPay</div>
                  <div className="w-12 h-8 bg-white/20 rounded"></div>
                </div>
                <div className="text-4xl font-bold mb-2">•••• •••• •••• 1234</div>
                <div className="flex justify-between text-sm opacity-80">
                  <span>JOHN DOE</span>
                  <span>12/25</span>
                </div>
              </div>

              {/* Success Animation */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-green-400 font-semibold">Payment Successful!</div>
                <div className="text-white/60 text-sm">Transaction completed in 0.8s</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;