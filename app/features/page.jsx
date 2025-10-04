"use client";

import React from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

const FeatureCard = ({ icon, title, description, features, gradient, badge }) => (
  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transform transition-all duration-500 ease-in-out hover:-translate-y-2 border border-gray-100 hover:border-purple-200 overflow-hidden">
    {/* Background Gradient Overlay */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
    
    {/* Badge */}
    {badge && (
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          {badge}
        </span>
      </div>
    )}
    
    {/* Icon */}
    <div className="relative mb-6 flex justify-center">
      <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white transform group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
    </div>
    
    {/* Content */}
    <div className="relative">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* Features List */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Bottom Border Animation */}
    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-500 ease-out`}></div>
  </div>
);

export default function FeaturesPage() {
  const featureCategories = [
    {
      title: "Payment Processing",
      description: "Core payment infrastructure for seamless transactions",
      features: [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          ),
          title: "Multi-Currency Support",
          description: "Accept payments in 135+ currencies worldwide with real-time exchange rates.",
          features: ["Global coverage", "Real-time rates", "Local payment methods", "Instant settlements"],
          gradient: "from-blue-500 to-cyan-500",
          badge: "Popular"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v.01M12 8v.01M12 12v.01M12 16v.01M12 20v.01M4 12h.01M8 12h.01M16 12h.01M20 12h.01M4 4h.01M8 4h.01M16 4h.01M20 4h.01M4 20h.01M8 20h.01M16 20h.01M20 20h.01" />
            </svg>
          ),
          title: "QR Code Payments",
          description: "Fast, secure QR code payments for retail and mobile commerce.",
          features: ["Dynamic QR codes", "Offline support", "Instant notifications", "Multi-language"],
          gradient: "from-green-500 to-emerald-500"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101m-1.721 6.853L7.944 11.459m-2.24 2.24l2.24-2.24" />
            </svg>
          ),
          title: "Payment Links",
          description: "Create and share payment links instantly for any business need.",
          features: ["One-click creation", "Social sharing", "Analytics tracking", "Custom branding"],
          gradient: "from-orange-500 to-yellow-500"
        }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security to protect your business",
      features: [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          title: "PCI DSS Compliance",
          description: "Bank-level security with PCI DSS Level 1 compliance and end-to-end encryption.",
          features: ["Level 1 compliance", "End-to-end encryption", "Tokenization", "Regular audits"],
          gradient: "from-purple-500 to-indigo-500",
          badge: "Certified"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          ),
          title: "Fraud Detection",
          description: "AI-powered fraud detection with real-time monitoring and prevention.",
          features: ["Machine learning", "Real-time monitoring", "Risk scoring", "Instant blocking"],
          gradient: "from-red-500 to-pink-500"
        }
      ]
    },
    {
      title: "Business Tools",
      description: "Essential tools to grow and manage your business",
      features: [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          ),
          title: "Invoice Generation",
          description: "Professional invoice creation with automated payment tracking.",
          features: ["Custom templates", "Auto-reminders", "Multi-language", "Tax calculation"],
          gradient: "from-teal-500 to-cyan-500"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          title: "Analytics & Reporting",
          description: "Comprehensive insights into your business performance and customer behavior.",
          features: ["Real-time dashboards", "Custom reports", "Export capabilities", "Performance metrics"],
          gradient: "from-indigo-500 to-purple-500"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Features
          </div>
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Unlock the Full <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Potential</span>
          </h1>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover a comprehensive suite of powerful features designed to streamline your operations, 
            enhance security, and drive unprecedented business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Get Started Today
            </Button>
                             <Link href="/demo">
                   <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                     Schedule Demo
                   </Button>
                 </Link>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-24">
              {/* Category Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <FeatureCard key={featureIndex} {...feature} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-800 mb-2">135+</h3>
              <p className="text-gray-600">Currencies Supported</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-800 mb-2">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-800 mb-2">1M+</h3>
              <p className="text-gray-600">Transactions Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of businesses that trust us for their payment solutions. 
            Explore our features and see how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}