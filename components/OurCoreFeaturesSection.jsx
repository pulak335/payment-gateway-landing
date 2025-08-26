import React from 'react';

const features = [
  {
    title: 'Instant Payment Processing',
    description: 'Process payments in real-time with lightning-fast transaction speeds that keep your business running smoothly.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100'
  },
  {
    title: 'Multi-Currency Support',
    description: 'Accept payments in 135+ currencies worldwide, expanding your global reach and customer base.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100'
  },
  {
    title: 'Advanced Fraud Detection',
    description: 'AI-powered algorithms detect and prevent fraudulent transactions, protecting your business and customers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.757 1.125 5.227 2.938 7.078A11.999 11.999 0 0012 22c2.912 0 5.618-1.125 7.618-3.04A12.001 12.001 0 0022 12c0-2.757-1.125-5.227-2.938-7.078z" />
      </svg>
    ),
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    iconBg: 'bg-red-100'
  },
  {
    title: 'Customizable Payment Pages',
    description: 'Design branded payment pages that match your business aesthetics and enhance user experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-100'
  },
  {
    title: 'Recurring Billing',
    description: 'Automate subscription and recurring payments, simplifying billing cycles for your services.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    iconBg: 'bg-orange-100'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Gain insights into your sales and customer behavior with comprehensive reports and analytics.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    iconBg: 'bg-indigo-100'
  },
  {
    title: 'API Integration',
    description: 'Seamlessly integrate with your existing systems using our robust and well-documented APIs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
    iconBg: 'bg-teal-100'
  },
  {
    title: 'PCI DSS Compliance',
    description: 'Ensure the highest level of security with our PCI DSS compliant payment gateway.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.757 1.125 5.227 2.938 7.078A11.999 11.999 0 0012 22c2.912 0 5.618-1.125 7.618-3.04A12.001 12.001 0 0022 12c0-2.757-1.125-5.227-2.938-7.078z" />
      </svg>
    ),
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-50',
    iconBg: 'bg-emerald-100'
  },
  {
    title: '24/7 Customer Support',
    description: 'Get round-the-clock support from our dedicated team to resolve any issues promptly.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    iconBg: 'bg-rose-100'
  },
  {
    title: 'Mobile Payment Solutions',
    description: 'Offer convenient payment options for customers on the go with our mobile-friendly solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    iconBg: 'bg-violet-100'
  },
  {
    title: 'Tokenization',
    description: 'Securely store customer card details with tokenization, reducing your PCI scope.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zM7 12l2 2 4-4" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    iconBg: 'bg-amber-100'
  },
  {
    title: 'Chargeback Management',
    description: 'Tools and support to help you manage and dispute chargebacks effectively.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-50',
    iconBg: 'bg-sky-100'
  }
];

const OurCoreFeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Our Core Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful tools and capabilities that make ShortlyPay the preferred choice for businesses worldwide. 
            From instant processing to advanced security, we've got everything you need to succeed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl ${feature.bgColor} p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-gray-200`}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 inline-flex p-4 rounded-2xl ${feature.iconBg} text-gray-700 group-hover:scale-110 transition-transform duration-300 mb-6`}>
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} transition-all duration-500 group-hover:w-full`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Experience These Features?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses already using ShortlyPay to transform their payment processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoreFeaturesSection;