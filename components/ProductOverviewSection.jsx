'use client'
import Link from 'next/link';
import { Button } from './ui/button';

const ProductCard = ({ icon, title, description, features, link, gradient, badge }) => (
  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transform transition-all duration-500 ease-in-out hover:-translate-y-2 border border-gray-100 hover:border-purple-200 overflow-hidden">
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
      
      {/* CTA Button */}
      <Link href={link} className="block">
        <Button className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg`}>
          Learn More
        </Button>
      </Link>
    </div>
    
    {/* Bottom Border Animation */}
    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-500 ease-out`}></div>
  </div>
);

const ProductOverviewSection = () => {
  const products = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h8.25M6 18h.008v.008H6v-.008ZM12.75 18h.008v.008h-.008v-.008ZM18 18h.008v.008H18v-.008Z" />
        </svg>
      ),
      title: "Payment Gateway",
      description: "Enterprise-grade payment processing with advanced fraud protection and real-time analytics.",
      features: ["PCI DSS compliant", "99.9% uptime", "Global coverage", "Instant settlements"],
      link: "/products/payment-gateway",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Most Popular"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v.01M12 8v.01M12 12v.01M12 16v.01M12 20v.01M4 12h.01M8 12h.01M16 12h.01M20 12h.01M4 4h.01M8 4h.01M16 4h.01M20 4h.01M4 20h.01M8 20h.01M16 20h.01M20 20h.01" />
        </svg>
      ),
      title: "QR Payments",
      description: "Fast, secure QR code payments for retail, restaurants, and mobile commerce.",
      features: ["Dynamic QR codes", "Offline support", "Multi-currency", "Instant notifications"],
      link: "/products/qr-payments",
      gradient: "from-green-500 to-emerald-500",
      badge: "Trending"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Invoice Generation",
      description: "Professional invoice creation with automated payment tracking and reminders.",
      features: ["Custom templates", "Auto-reminders", "Multi-language", "Tax calculation"],
      link: "/products/invoice-generation",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101m-1.721 6.853L7.944 11.459m-2.24 2.24l2.24-2.24" />
        </svg>
      ),
      title: "Payment Links",
      description: "Create and share payment links instantly for any business need.",
      features: ["One-click creation", "Social sharing", "Analytics tracking", "Custom branding"],
      link: "/products/payment-links",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75A2.25 2.25 0 0 0 15.75 1.5H13.5m-3 0V3.75m3-2.25V3.75M15 15.75H9m6 3H9m6 3H9" />
        </svg>
      ),
      title: "Super App Features",
      description: "All-in-one payment solution with advanced features and integrations.",
      features: ["Unified dashboard", "API access", "Webhook support", "24/7 support"],
      link: "/products/super-app-features",
      gradient: "from-red-500 to-pink-500",
      badge: "New"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Our Products
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Explore Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of payment solutions designed to accelerate your business growth and streamline operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful businesses using our products to increase revenue and improve customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </Button>
                               <Link href="/demo">
                     <Button variant="secondary" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                       Schedule Demo
                     </Button>
                   </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverviewSection;