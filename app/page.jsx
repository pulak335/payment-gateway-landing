import Image from 'next/image';
import HeroSection from '../components/HeroSection';
 import { Button } from '../components/ui/button';
import ProductOverviewSection from '../components/ProductOverviewSection';
import OurCoreFeaturesSection from '../components/OurCoreFeaturesSection';
import WatchPaymentDemoSection from '../components/WatchPaymentDemoSection';
import BusinessesSection from '../components/BusinessesSection';
import ReadyForIntegrationSection from '../components/ReadyForIntegrationSection';
import NewsletterSection from '../components/NewsletterSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ComplianceSection from '../components/ComplianceSection';

// Explore Our Services Section Component
const ExploreOurServicesSection = () => {
  const services = [
    {
      title: 'E-commerce Solutions',
      description: 'Complete payment infrastructure for online stores, marketplaces, and digital businesses.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      features: ['Shopping cart integration', 'Multiple payment methods', 'Subscription management', 'Fraud protection']
    },
    {
      title: 'Mobile Payments',
      description: 'Seamless mobile payment solutions for apps, mobile commerce, and on-the-go transactions.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
      features: ['Mobile wallet support', 'QR code payments', 'In-app purchases', 'Touchless payments']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable payment infrastructure for large organizations with complex payment needs.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500',
      features: ['Custom integrations', 'Advanced analytics', 'Multi-currency support', 'Dedicated support']
    },
    {
      title: 'Subscription Services',
      description: 'Recurring billing and subscription management for SaaS, memberships, and ongoing services.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: 'from-orange-500 to-yellow-500',
      features: ['Recurring billing', 'Trial management', 'Proration handling', 'Dunning management']
    },
    {
      title: 'International Payments',
      description: 'Global payment solutions supporting 135+ currencies and local payment methods worldwide.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-red-500 to-pink-500',
      features: ['Multi-currency support', 'Local payment methods', 'Cross-border transactions', 'Compliance handling']
    },
    {
      title: 'Developer Tools',
      description: 'Comprehensive APIs, SDKs, and developer resources for seamless integration.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-teal-500 to-cyan-500',
      features: ['RESTful APIs', 'SDKs & libraries', 'Webhook support', 'Testing tools']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Explore Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive payment solutions designed to meet the unique needs of your business. 
            From startups to enterprises, we have the perfect payment infrastructure for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg`}>
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <HeroSection />
      <ExploreOurServicesSection />
      <ProductOverviewSection />
      <OurCoreFeaturesSection />
      <WatchPaymentDemoSection />
      <BusinessesSection />
      


      <ReadyForIntegrationSection />

      {/* Stats Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">100M+</h3>
            <p className="text-gray-600">API requests per day</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-800 mb-2">99.9%</h3>
            <p className="text-gray-600">Uptime</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-800 mb-2">135+</h3>
            <p className="text-gray-600">Currencies supported</p>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <TestimonialsSection />
        <ComplianceSection />
      </main>
    </>
  );
}