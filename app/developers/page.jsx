"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function DevelopersPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [activeTab, setActiveTab] = useState('quickstart');

  const codeExamples = {
    javascript: `// Initialize the payment
const payment = await ZeroPay.createPayment({
  amount: 1000,
  currency: 'BDT',
  description: 'Product Purchase',
  customer: {
    email: 'customer@example.com',
    phone: '+8801711111111'
  },
  successUrl: 'https://yoursite.com/success',
  cancelUrl: 'https://yoursite.com/cancel'
});

// Redirect to payment page
window.location.href = payment.checkoutUrl;`,
    
    python: `# Initialize the payment
payment = zeropay.Payment.create(
    amount=1000,
    currency='BDT',
    description='Product Purchase',
    customer={
        'email': 'customer@example.com',
        'phone': '+8801711111111'
    },
    success_url='https://yoursite.com/success',
    cancel_url='https://yoursite.com/cancel'
)

# Redirect to payment page
return redirect(payment.checkout_url)`,
    
    php: `// Initialize the payment
$payment = \\ZeroPay\\Payment::create([
    'amount' => 1000,
    'currency' => 'BDT',
    'description' => 'Product Purchase',
    'customer' => [
        'email' => 'customer@example.com',
        'phone' => '+8801711111111'
    ],
    'success_url' => 'https://yoursite.com/success',
    'cancel_url' => 'https://yoursite.com/cancel'
]);

// Redirect to payment page
header('Location: ' . $payment->checkout_url);`,

    nodejs: `// Initialize the payment
const payment = await zeropay.payments.create({
  amount: 1000,
  currency: 'BDT',
  description: 'Product Purchase',
  customer: {
    email: 'customer@example.com',
    phone: '+8801711111111'
  },
  successUrl: 'https://yoursite.com/success',
  cancelUrl: 'https://yoursite.com/cancel'
});

// Redirect to payment page
res.redirect(payment.checkoutUrl);`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZzI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Animated Background Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white text-sm font-medium mb-8">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Developer Resources
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Build with{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                ZeroPay
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-10">
              Powerful APIs, comprehensive SDKs, and detailed documentation to integrate payments seamlessly into your application.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10">
              {[
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '<200ms', label: 'Avg Response' },
                { value: '8+', label: 'SDKs' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-purple-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#quickstart">
                <Button className="px-8 py-6 bg-white text-purple-900 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Quick Start Guide
                </Button>
              </Link>
              <Link href="#api-reference">
                <Button className="px-8 py-6 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white hover:bg-white/20 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  API Reference
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quickstart" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Get Started in Minutes
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start accepting payments in just 3 simple steps
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '01',
                title: 'Get API Keys',
                description: 'Sign up and get your test & live API keys from the dashboard',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
                color: 'from-purple-500 to-indigo-500'
              },
              {
                step: '02',
                title: 'Install SDK',
                description: 'Choose your preferred language and install our SDK via package manager',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                ),
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '03',
                title: 'Start Integration',
                description: 'Initialize payments with a few lines of code and go live',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: 'from-green-500 to-emerald-500'
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 h-full border-2 border-transparent hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-6 shadow-lg`}>
                    {item.icon}
                  </div>
                  
                  <div className={`text-6xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4 opacity-20 absolute top-4 right-4`}>
                    {item.step}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Simple, Powerful Integration
            </h2>
            <p className="text-xl text-gray-600">
              Choose your language and start building
            </p>
          </div>

          {/* Language Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { id: 'javascript', name: 'JavaScript', icon: '🟨' },
              { id: 'nodejs', name: 'Node.js', icon: '🟩' },
              { id: 'python', name: 'Python', icon: '🐍' },
              { id: 'php', name: 'PHP', icon: '🐘' }
            ].map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === lang.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                <span className="mr-2">{lang.icon}</span>
                {lang.name}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
            {/* Code Header */}
            <div className="bg-slate-800 px-6 py-4 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-slate-400 text-sm font-mono">
                payment-integration.{selectedLanguage === 'python' ? 'py' : selectedLanguage === 'php' ? 'php' : 'js'}
              </div>
              <button className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm md:text-base">
                <code className="text-purple-300 font-mono leading-relaxed">
                  {codeExamples[selectedLanguage]}
                </code>
              </pre>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              Installation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 rounded-xl p-4">
                <div className="text-slate-400 text-sm mb-2 font-semibold">NPM</div>
                <code className="text-green-400 font-mono text-sm">npm install @zeropay/sdk</code>
              </div>
              <div className="bg-slate-900 rounded-xl p-4">
                <div className="text-slate-400 text-sm mb-2 font-semibold">Yarn</div>
                <code className="text-green-400 font-mono text-sm">yarn add @zeropay/sdk</code>
              </div>
              <div className="bg-slate-900 rounded-xl p-4">
                <div className="text-slate-400 text-sm mb-2 font-semibold">Python</div>
                <code className="text-green-400 font-mono text-sm">pip install zeropay</code>
              </div>
              <div className="bg-slate-900 rounded-xl p-4">
                <div className="text-slate-400 text-sm mb-2 font-semibold">PHP</div>
                <code className="text-green-400 font-mono text-sm">composer require zeropay/php-sdk</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs & Libraries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              SDKs & Libraries
            </h2>
            <p className="text-xl text-gray-600">
              Official libraries for your favorite platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript', icon: '🟨', version: 'v3.2.1', downloads: '50K+' },
              { name: 'Node.js', icon: '🟩', version: 'v2.8.0', downloads: '45K+' },
              { name: 'Python', icon: '🐍', version: 'v1.9.2', downloads: '38K+' },
              { name: 'PHP', icon: '🐘', version: 'v2.5.1', downloads: '42K+' },
              { name: 'React', icon: '⚛️', version: 'v4.1.0', downloads: '55K+' },
              { name: 'React Native', icon: '📱', version: 'v3.0.5', downloads: '28K+' },
              { name: 'Flutter', icon: '🦋', version: 'v1.7.3', downloads: '22K+' },
              { name: 'Swift', icon: '🍎', version: 'v2.3.0', downloads: '15K+' }
            ].map((sdk, index) => (
              <div key={index} className="group bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-transparent hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="text-5xl mb-4">{sdk.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sdk.name}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-600 font-semibold">{sdk.version}</span>
                  <span className="text-gray-500">{sdk.downloads}</span>
                </div>
                <div className="mt-4 flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700">
                  View Docs
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference Section */}
      <section id="api-reference" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              API Reference
            </h2>
            <p className="text-xl text-gray-600">
              Complete documentation for all API endpoints
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Payments API',
                description: 'Create, retrieve, and manage payment transactions',
                endpoints: 8,
                color: 'from-purple-500 to-indigo-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Customers API',
                description: 'Manage customer information and payment methods',
                endpoints: 6,
                color: 'from-blue-500 to-cyan-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: 'Refunds API',
                description: 'Process full or partial refunds for payments',
                endpoints: 4,
                color: 'from-green-500 to-emerald-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                )
              },
              {
                title: 'Webhooks API',
                description: 'Configure and manage webhook endpoints',
                endpoints: 5,
                color: 'from-orange-500 to-red-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                )
              },
              {
                title: 'Analytics API',
                description: 'Access transaction data and business insights',
                endpoints: 7,
                color: 'from-pink-500 to-rose-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: 'Settlements API',
                description: 'Manage payouts and settlement schedules',
                endpoints: 5,
                color: 'from-teal-500 to-green-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((api, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-purple-300 cursor-pointer">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${api.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {api.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {api.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {api.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-semibold">
                    {api.endpoints} Endpoints
                  </span>
                  <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700">
                    Explore
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Testing & Developer Tools
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build and test integrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Test Mode',
                description: 'Complete sandbox environment with test cards and payment methods for safe development',
                features: ['Test API Keys', 'Sample Data', 'No Real Charges', 'Full Feature Access'],
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: 'from-purple-500 to-indigo-500'
              },
              {
                title: 'Webhooks Testing',
                description: 'Test webhook integrations locally with our CLI tool and webhook simulator',
                features: ['Local Testing', 'Event Replay', 'Request Logs', 'Signature Validation'],
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'API Logs',
                description: 'Real-time logs of all API requests and responses for easy debugging and monitoring',
                features: ['Request Details', 'Response Times', 'Error Tracking', 'Export Data'],
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Postman Collection',
                description: 'Pre-built Postman collection with all API endpoints and example requests',
                features: ['Ready to Import', 'Example Requests', 'Environment Setup', 'Auto-updated'],
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                color: 'from-orange-500 to-red-500'
              }
            ].map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} text-white mb-6 shadow-lg`}>
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZzI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Developer Resources
            </h2>
            <p className="text-xl text-purple-200">
              Tutorials, guides, and community support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Documentation',
                description: 'Complete guides and API references',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                link: '#'
              },
              {
                title: 'Video Tutorials',
                description: 'Step-by-step integration videos',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                link: '#'
              },
              {
                title: 'Community Forum',
                description: 'Connect with other developers',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ),
                link: '#'
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-purple-200 mb-6">
                  {resource.description}
                </p>
                <div className="flex items-center text-white font-semibold">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZzI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-lg mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Get your API keys and start integrating payments in minutes. No credit card required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/joinus">
                  <Button className="px-8 py-6 bg-white text-purple-900 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer">
                    Get API Keys
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="px-8 py-6 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white hover:bg-white/20 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Forever
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  0% Transaction Fee
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
