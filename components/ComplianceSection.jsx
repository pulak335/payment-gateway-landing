import Link from 'next/link';
import React from 'react';

const ComplianceSection = () => {
  const complianceItems = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "PCI-DSS Level 1",
      description: "ShortlyPay is PCI-DSS Level-1 compliant, ensuring the highest standards of payment security and removing your compliance worries.",
      badge: "Certified",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "PSO Licensed",
      description: "ShortlyPay has achieved the prestigious PSO License from Central Bank of Bangladesh, ensuring regulatory compliance and trust.",
      badge: "Licensed",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "ECAB Member",
      description: "We are proud members of ECAB, the trade body representing all e-commerce and relevant organizations in Bangladesh.",
      badge: "Member",
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "SSL Security",
      description: "We use industry-standard PositiveSSL issued by SECTIGO to protect your data security with bank-level encryption.",
      badge: "Secure",
      gradient: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Compliance & Security
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            We are <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Committed</span>, 
            We are <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Compliant</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We value your privacy and data security above all else. For this reason, we have taken comprehensive initiatives 
            to meet all regulatory compliance requirements and exceed security auditor expectations.
          </p>
        </div>

        {/* Compliance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {complianceItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transform transition-all duration-500 ease-in-out hover:-translate-y-2 border border-gray-100 hover:border-purple-200 overflow-hidden relative"
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.bgColor} text-gray-800`}>
                  {item.badge}
                </span>
              </div>
              
              {/* Icon */}
              <div className="relative mb-6 flex justify-center">
                <div className={`p-4 rounded-2xl ${item.iconBg} text-gray-700 transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Bottom Border Animation */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500 ease-out`}></div>
            </div>
          ))}
        </div>

        {/* Additional Security Features */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Advanced Security Features</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond basic compliance, we implement cutting-edge security measures to protect your business and customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Fraud Detection</h4>
              <p className="text-gray-600">AI-powered fraud detection with real-time monitoring and prevention systems.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">End-to-End Encryption</h4>
              <p className="text-gray-600">Bank-level encryption ensuring your data remains secure at every step.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">24/7 Monitoring</h4>
              <p className="text-gray-600">Round-the-clock security monitoring and instant threat response capabilities.</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-4xl font-bold mb-6">
              Trusted by Thousands of Businesses
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the growing community of businesses that trust ShortlyPay for their payment security and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More
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

export default ComplianceSection;