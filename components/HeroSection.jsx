import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-8">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-white text-sm font-semibold">🔒 PCI DSS Compliant • 99.9% Uptime</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Payment Gateway
              </span>
              Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your business with lightning-fast, secure payment processing. Accept payments globally with enterprise-grade security and real-time analytics.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Instant Setup</div>
                  <div className="text-gray-400 text-sm">Get started in minutes</div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Bank-Level Security</div>
                  <div className="text-gray-400 text-sm">256-bit encryption</div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Global Reach</div>
                  <div className="text-gray-400 text-sm">150+ currencies</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/get-started">
                <Button className="group bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25 cursor-pointer">
                  Start Free Trial
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 text-lg font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-4">Trusted by Fortune 500 companies</p>
              <div className="flex justify-center lg:justify-start items-center space-x-8 opacity-60">
                <div className="text-white/60 text-2xl font-bold">Stripe</div>
                <div className="text-white/60 text-2xl font-bold">PayPal</div>
                <div className="text-white/60 text-2xl font-bold">Square</div>
                <div className="text-white/60 text-2xl font-bold">Shopify</div>
              </div>
            </div>
          </div>

          {/* Right Column - Modern Payment Processing Dashboard */}
          <div className="relative hidden lg:block">
            {/* Dashboard Container */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Payment Dashboard</h3>
                <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-semibold">Live Processing</span>
                </div>
              </div>

              {/* Transaction Card */}
              <div className="bg-gradient-to-br from-purple-600/80 to-indigo-600/80 rounded-2xl p-6 text-white mb-6 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm opacity-80 mb-1">Transaction ID</div>
                    <div className="text-lg font-mono">#TXN-2024-001</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-80 mb-1">Amount</div>
                    <div className="text-2xl font-bold">$299.99</div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm opacity-80">
                  <span>John Doe • Visa •••• 4242</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Approved
                  </span>
                </div>
              </div>

              {/* Processing Steps */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Payment Initiated</div>
                    <div className="text-gray-400 text-sm">Customer entered card details</div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Authorization</div>
                    <div className="text-gray-400 text-sm">Bank validates transaction</div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Fraud Check</div>
                    <div className="text-gray-400 text-sm">AI-powered security scan</div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Settlement</div>
                    <div className="text-gray-400 text-sm">Funds transferred instantly</div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Processing Animation */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-4 animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-green-400 font-bold text-lg">Transaction Complete!</div>
                <div className="text-white/60 text-sm">Processed in 0.8 seconds</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full animate-bounce animation-delay-1000"></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full animate-pulse animation-delay-2000"></div>
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