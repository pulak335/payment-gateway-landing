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
                <Button className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25 cursor-pointer">
                  Get Started Free
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 text-lg font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
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

          {/* Right Column - Payment Gateway Integration Process Flow */}
          <div className="relative hidden lg:block">
            {/* Flow Diagram Container */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Payment Gateway Integration Process Flow</h3>

              {/* Main Flow Line */}
              <div className="relative">
                {/* Step 1: User */}
                <div className="absolute left-0 top-0 z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    01
                  </div>
                  <div className="mt-2 text-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm">User</span>
                  </div>
                </div>

                {/* Step 2: Merchant */}
                <div className="absolute left-20 top-16 z-10">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg transform rotate-12">
                    Merchant
                  </div>
                </div>

                {/* Step 3: Merchant A/C */}
                <div className="absolute left-40 top-0 z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    Merchant A/C
                  </div>
                </div>

                {/* Step 4: Using Bank/Processor */}
                <div className="absolute right-40 top-16 z-10">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    Using Bank/ Processor
                  </div>
                </div>

                {/* Step 5: Issue Bank */}
                <div className="absolute right-20 top-32 z-10">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    Issue Bank
                  </div>
                </div>

                {/* Step 6: Card Networking */}
                <div className="absolute right-0 top-48 z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    Card Networking
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{zIndex: 1}}>
                  {/* Horizontal lines */}
                  <line x1="64" y1="32" x2="256" y2="32" stroke="#60A5FA" strokeWidth="3" strokeDasharray="5,5"/>
                  <line x1="320" y1="32" x2="512" y2="80" stroke="#60A5FA" strokeWidth="3" strokeDasharray="5,5"/>
                  <line x1="320" y1="80" x2="512" y2="80" stroke="#60A5FA" strokeWidth="3" strokeDasharray="5,5"/>
                  <line x1="576" y1="80" x2="704" y2="32" stroke="#60A5FA" strokeWidth="3" strokeDasharray="5,5"/>
                  <line x1="576" y1="200" x2="704" y2="200" stroke="#60A5FA" strokeWidth="3" strokeDasharray="5,5"/>

                  {/* Vertical lines */}
                  <line x1="64" y1="32" x2="64" y2="200" stroke="#60A5FA" strokeWidth="3" strokeDasharray="5,5"/>
                  <line x1="704" y1="32" x2="704" y2="200" stroke="#60A5FA" strokeWidth="3" strokeDasharray="5,5"/>
                </svg>

                {/* Fraud Check circles */}
                <circle cx="448" cy="56" r="20" fill="#10B981" stroke="#fff" strokeWidth="2" className="animate-pulse"/>
                <text x="448" y="60" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">04</text>
                <text x="448" y="75" textAnchor="middle" fill="#10B981" fontSize="8">Fraud Check</text>

                <circle cx="160" cy="200" r="20" fill="#F59E0B" stroke="#fff" strokeWidth="2"/>
                <text x="160" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">05</text>

                <circle cx="320" cy="56" r="20" fill="#F59E0B" stroke="#fff" strokeWidth="2"/>
                <text x="320" y="60" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">08</text>

                <circle cx="544" cy="200" r="20" fill="#10B981" stroke="#fff" strokeWidth="2" className="animate-pulse"/>
                <text x="544" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">06</text>
                <text x="544" y="220" textAnchor="middle" fill="#10B981" fontSize="8">Fraud Check</text>

                <circle cx="448" cy="200" r="20" fill="#F59E0B" stroke="#fff" strokeWidth="2"/>
                <text x="448" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">05</text>

                {/* Additional step numbers */}
                <text x="256" y="50" textAnchor="middle" fill="#60A5FA" fontSize="12" fontWeight="bold">08</text>
                <text x="384" y="50" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold">03</text>
                <text x="640" y="50" textAnchor="middle" fill="#60A5FA" fontSize="12" fontWeight="bold">07</text>

                {/* Bank icons */}
                <g transform="translate(120, 180)">
                  <rect x="0" y="0" width="24" height="16" fill="#F59E0B" rx="2"/>
                  <rect x="2" y="2" width="20" height="12" fill="white"/>
                  <line x1="2" y1="6" x2="22" y2="6" stroke="#F59E0B" strokeWidth="1"/>
                  <line x1="2" y1="10" x2="22" y2="10" stroke="#F59E0B" strokeWidth="1"/>
                </g>

                <g transform="translate(520, 180)">
                  <rect x="0" y="0" width="24" height="16" fill="#F59E0B" rx="2"/>
                  <rect x="2" y="2" width="20" height="12" fill="white"/>
                  <line x1="2" y1="6" x2="22" y2="6" stroke="#F59E0B" strokeWidth="1"/>
                  <line x1="2" y1="10" x2="22" y2="10" stroke="#F59E0B" strokeWidth="1"/>
                </g>

                {/* Card icon */}
                <g transform="translate(680, 180)">
                  <rect x="0" y="0" width="24" height="16" fill="#60A5FA" rx="2"/>
                  <rect x="2" y="2" width="20" height="3" fill="white"/>
                  <rect x="2" y="7" width="20" height="3" fill="white"/>
                  <circle cx="20" cy="12" r="2" fill="white"/>
                </g>

                {/* Home icon for merchant */}
                <g transform="translate(200, 120)">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#F59E0B"/>
                </g>

                {/* Gear icon for processor */}
                <g transform="translate(280, 20)">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#F59E0B" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="#F59E0B"/>
                  <path d="M12 6v12M6 12h12" stroke="#F59E0B" strokeWidth="2"/>
                </g>
              </div>

              {/* Legend */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <span className="text-white">Customer Actions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-white">System Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-white">Security Checks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    <span className="text-white">Banking Network</span>
                  </div>
                </div>
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