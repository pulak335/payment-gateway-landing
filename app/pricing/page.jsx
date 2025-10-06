
import { Fragment } from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";

const PricingCard = ({ plan, features, gradient, badge, popular }) => (
  <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transform transition-all duration-500 ease-in-out hover:-translate-y-2 border-2 ${
    popular ? 'border-purple-500' : 'border-gray-100'
  } overflow-hidden`}>
    {/* Background Gradient Overlay */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>
    
    {/* Popular Badge */}
    {popular && (
      <div className="absolute -top-0 left-1/2 transform -translate-x-1/2">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
          ⭐ Most Popular
        </span>
      </div>
    )}
    
    {/* Plan Header */}
    <div className="relative text-center mb-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-2">{plan?.name}</h3>
      <p className="text-lg text-gray-600 mb-4">{plan?.description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-800">{plan?.price}</span>
        {plan?.period && <span className="text-gray-600 ml-2">/{plan?.period}</span>}
      </div>
      {plan?.subtitle && (
        <p className="text-sm text-gray-500">{plan?.subtitle}</p>
      )}
    </div>
    
    {/* Features List */}
    <div className="relative mb-8">
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    
    {/* CTA Button */}
    <div className="relative">
      <Link href="/joinus" className="block cursor-pointer">
        <Button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
          popular 
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white'
            : `bg-gradient-to-r ${gradient} hover:opacity-90 text-white`
        }`}>
          {popular ? 'Get Started Now' : 'Choose Plan'}
        </Button>
      </Link>
    </div>
    
    {/* Bottom Border Animation */}
    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${gradient} hover:w-full transition-all duration-500 ease-out`}></div>
  </div>
);

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Standard Plan",
      description: "Perfect for all businesses",
      price: "FREE",
      period: null,
      subtitle: "Forever Free • No Hidden Costs",
      gradient: "from-purple-500 to-indigo-500",
      popular: true,
      features: [
        "✨ 0% Transaction Fee (Forever)",
        "✨ Zero Setup Cost",
        "Unlimited Transactions",
        "All Payment Methods Included",
        "Dual Wallet System (BDT & USD)",
        "Multiple Payment Options",
        "Instant & Flexible Settlements",
        "Smart Merchant Dashboard",
        "Role-Based Access Control",
        "QR & Link-Based Payments",
        "AI-Powered Analytics & Reports",
        "Bank-Grade Security",
        "Seamless API & SDK Integration",
        "Payment Link Generation",
        "Invoice Generator",
        "Transaction Alerts",
        "EMI & Discount Offers",
        "Multi-Currency Support"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Seamless Integration",
      description: "Integrate with your existing systems effortlessly using our robust APIs and comprehensive documentation."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Advanced Security",
      description: "Protect your transactions with state-of-the-art encryption and fraud detection technologies."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist you with any queries or issues."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Competitive Pricing",
      description: "Benefit from transparent and competitive pricing plans tailored to suit businesses of all sizes."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Reach",
      description: "Expand your business globally with support for multiple currencies and international payment methods."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      ),
      title: "Scalability",
      description: "Our platform is designed to scale with your business, handling increasing transaction volumes with ease."
    }
  ];

  return (
    <Fragment>
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-12">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Pricing Plans
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Zero Fees</span>, Maximum Value
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Revolutionary pricing that puts your business first. No transaction fees, no setup costs, no hidden charges. Ever.
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg border-2 border-green-100">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-gray-800">0% Transaction Fee</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg border-2 border-blue-100">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-gray-800">Zero Setup Cost</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg border-2 border-purple-100">
                <svg className="w-6 h-6 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-gray-800">No Hidden Charges</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Pricing Card - Centered */}
            <div className="max-w-2xl mx-auto mb-16">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>

            {/* Additional Services Card */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl shadow-xl p-10 border-2 border-purple-200">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-200 mb-6">
                    <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span className="text-purple-700 font-bold">SMS & Services Package</span>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Optional Add-On Services
                  </h3>
                  <p className="text-xl text-gray-600 mb-8">
                    Enhance your payment gateway with SMS notifications and premium services
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* BDT Pricing */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-4">
                        <span className="text-3xl">🇧🇩</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">For Bangladesh</h4>
                      <div className="mb-6">
                        <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">৳999</span>
                        <span className="text-gray-600 ml-2 text-lg">/year</span>
                      </div>
                      <p className="text-gray-600">Billed annually in BDT</p>
                    </div>
                  </div>

                  {/* USD Pricing */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4">
                        <span className="text-3xl">🌎</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">International</h4>
                      <div className="mb-6">
                        <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$10</span>
                        <span className="text-gray-600 ml-2 text-lg">/year</span>
                      </div>
                      <p className="text-gray-600">Billed annually in USD</p>
                    </div>
                  </div>
                </div>

                {/* Features Included */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Package Includes:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "SMS Transaction Alerts",
                      "Email Notifications",
                      "Invoice Generation via SMS",
                      "Payment Confirmations",
                      "Custom SMS Templates",
                      "Delivery Status Reports",
                      "Priority Support Access",
                      "Advanced Analytics Reports"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-8">
                  <Link href="/joinus" className="inline-block">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                      Add SMS Package
                    </Button>
                  </Link>
                  <p className="text-gray-500 text-sm mt-4">Optional • Can be added anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose ZeroPay?
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Discover the advantages that make ZeroPay the preferred choice for businesses worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">Find answers to the most common questions about ZeroPay.</p>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is there really zero transaction fee?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We charge absolutely 0% transaction fee on all payments processed through our gateway. This applies forever with no limits on transaction volume or amount.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is included in the SMS & Services package?</AccordionTrigger>
                  <AccordionContent>
                    The SMS & Services package (৳999/year or $10/year) includes transaction alerts, email notifications, invoice generation via SMS, payment confirmations, custom templates, delivery reports, priority support, and advanced analytics.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there any setup cost or onboarding fee?</AccordionTrigger>
                  <AccordionContent>
                    No, there is zero setup cost. You can start using ZeroPay immediately without any initial investment or onboarding fees.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Are there any hidden charges or monthly fees?</AccordionTrigger>
                  <AccordionContent>
                    No hidden charges whatsoever. The core payment gateway is completely free. The only optional cost is the SMS & Services package at ৳999/year or $10/year if you want those additional features.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How secure are the transactions?</AccordionTrigger>
                  <AccordionContent>
                    All transactions are protected with bank-grade security, PCI DSS compliance, end-to-end encryption, and multi-layered fraud detection to ensure complete safety of your data and funds.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I use both BDT and USD wallets?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Our dual wallet system allows you to seamlessly manage payments in both Bangladeshi Taka (BDT) and US Dollars (USD) with dedicated wallets for local and international transactions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-10 opacity-90">
              Choose the plan that fits your business needs and start accepting payments today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Start Free Trial
              </Button>
                                 <Link href="/demo">
                     <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                       Schedule Demo
                     </Button>
                   </Link>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}