import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BusinessesSection = () => {
  const logos = [
    { 
      name: 'bKash', 
      src: 'https://cdn.prod.website-files.com/628a20f8bd44e7d42b9fa39b/633432fed1074494e21c7409_Bkash-logo.png',
      alt: 'bKash Mobile Banking Logo',
      category: 'Mobile Banking'
    },
    { 
      name: 'Nagad', 
      src: 'https://www.bssnews.net/assets/news_photos/2022/02/04/image-42525-1643965434.jpg',
      alt: 'Nagad Mobile Banking Logo',
      category: 'Mobile Banking'
    },
    { 
      name: 'Rocket', 
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Rocket_mobile_banking_logo.svg/200px-Rocket_mobile_banking_logo.svg.png',
      alt: 'Rocket Mobile Banking Logo',
      category: 'Mobile Banking'
    },
    { 
      name: 'Upay', 
      src: 'https://static.vecteezy.com/system/resources/previews/068/706/007/non_2x/upay-logo-color-mobile-banking-app-icon-free-png.png',
      alt: 'Upay Mobile Banking Logo',
      category: 'Mobile Banking'
    },
    { 
      name: 'Visa', 
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png',
      alt: 'Visa Logo',
      category: 'Credit Cards'
    },
    { 
      name: 'American Express', 
      src: 'https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png',
      alt: 'American Express Logo',
      category: 'Credit Cards'
    },
    { 
      name: 'UnionPay', 
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/1280px-UnionPay_logo.svg.png',
      alt: 'UnionPay Logo',
      category: 'Credit Cards'
    },
    { 
      name: 'Discover', 
      src: 'https://www.discover.com/company/images/newsroom/media-downloads/DGN_AcceptanceMark.png',
      alt: 'Discover Logo',
      category: 'Credit Cards'
    },
    { 
      name: 'OK Wallet', 
      src: 'https://okwallet.com.bd/images/bs-img.png',
      alt: 'OK Wallet Logo',
      category: 'Digital Wallets'
    },
    { 
      name: 'Stripe', 
      src: 'https://cdn.prod.website-files.com/5ae897b18423ad8b62ceba7c/5b3a97163c43bae706308fca_logo_horz_mint_bg%402x.png',
      alt: 'Stripe Logo',
      category: 'Payment Processors'
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Active Businesses' },
    { number: '50M+', label: 'Transactions Processed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      ),
      title: "Supercharge Your Business",
      description: "Streamline payment processes, reduce operational costs, and enhance customer satisfaction with our robust platform."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Major Payment Method Coverage",
      description: "Accept payments from credit/debit cards, mobile wallets, and local bank transfers, ensuring you never miss a sale."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise-Grade Security",
      description: "Bank-level security with PCI DSS compliance, fraud detection, and end-to-end encryption for your peace of mind."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-200/50 mb-8 shadow-sm">
            <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-purple-700 font-bold text-sm">Trusted by 10,000+ Businesses Worldwide</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by Thousands of
            <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Successful Businesses
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join industry leaders who trust our payment gateway to process millions of transactions securely and efficiently every day.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-2xl border-2 border-purple-100 p-8 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                {/* Icon Background */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-bold text-sm">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500 rounded-bl-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start mb-20">
          {/* Left Side - Logo Grid */}
          <div className="mb-12 lg:mb-0">
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center lg:text-left">
                Supported Payment Methods
              </h3>
              <p className="text-gray-600 text-center lg:text-left">
                Accept payments from all major providers worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
              {logos.map((logo, index) => (
                <div 
                  key={logo.name} 
                  className="group relative bg-white rounded-xl border-2 border-gray-100 p-6 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Logo */}
                  <div className="relative flex justify-center items-center h-16 mb-3">
                    <Image
                      className="h-12 w-auto object-contain max-w-full group-hover:scale-110 transition-transform duration-300"
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={48}
                      unoptimized
                    />
                  </div>
                  
                  {/* Company Name */}
                  <div className="relative text-center">
                    <h4 className="text-xs font-bold text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                      {logo.name}
                    </h4>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500 rounded-bl-xl"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Features */}
          <div>
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Why Businesses Choose Us
              </h3>
              <p className="text-gray-600">
                Trusted features that drive business growth
              </p>
            </div>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="group relative bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-purple-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300"></div>
                  
                  <div className="relative flex items-start space-x-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 border-2 border-purple-200">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl shadow-2xl max-w-5xl mx-auto">
            {/* Decorative Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-12 lg:p-16">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Join Thousands of<br />Successful Businesses?
              </h3>
              
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Start accepting payments today with zero transaction fees and experience seamless payment processing for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
                <button className="group bg-white text-purple-600 hover:bg-gray-50 font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20">
                  <span className="flex items-center">
                    Get Started Free
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <Link href="/demo">
                  <button className="group border-3 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center">
                      Schedule Demo
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm font-semibold">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Zero Transaction Fees
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  5-Minute Setup
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessesSection;