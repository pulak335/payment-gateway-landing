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
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Trusted Partners
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Businesses Using <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">ShortlyPay</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join a growing community of businesses that rely on our secure and efficient payment gateway. 
            From startups to enterprises, we power payments for businesses of all sizes.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-16">
          {/* Left Side - Logo Grid */}
          <div className="mb-12 lg:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              Supported Payment Methods
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {logos.map((logo, index) => (
                <div 
                  key={logo.name} 
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transform transition-all duration-300 ease-in-out hover:-translate-y-2 border border-gray-100 hover:border-purple-200 overflow-hidden relative"
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  
                  {/* Logo */}
                  <div className="relative flex justify-center mb-3">
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
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                      {logo.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {logo.category}
                    </p>
                  </div>
                  
                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300 ease-out"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Why Businesses Choose ShortlyPay
            </h3>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Join Thousands of Successful Businesses?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Start accepting payments today and experience the ShortlyPay difference. 
              Join our community of trusted businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <Link href="/demo">
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessesSection;