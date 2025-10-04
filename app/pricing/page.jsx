
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
      name: "Education",
      description: "Best for Educational Institutes",
      price: "Call For Price",
      period: null,
      subtitle: "One-time setup fee (non-refundable)",
      gradient: "from-pink-500 to-rose-500",
      popular: false,
      features: [
        "No Monthly Fee",
        "2.2% per transaction (Visa & MasterCard)",
        "1.50% per transaction (bKash, Nagad etc.)",
        "EMI & Discount Offer Facility",
        "Invoice Generator (SMS & Email)",
        "QR Payment Facility",
        "Payment Link Generation",
        "Transaction Alert: SMS & Email",
        "Statement using Portal & App",
        "Support: Call, Email & Chat",
        "Dedicated Key Account Manager",
        "Single Store Support",
        "All Payment Methods Included",
        "No Additional Payment Method Fee"
      ]
    },
    {
      name: "SME",
      description: "Best for Small & Medium Enterprises",
      price: "Call For Price",
      period: null,
      subtitle: "One-time setup fee (non-refundable)",
      gradient: "from-purple-500 to-indigo-500",
      popular: true,
      features: [
        "No Monthly Fee",
        "2% per transaction (Visa & MasterCard)",
        "1.90% per transaction (bKash, Nagad etc)",
        "EMI & Discount Offer Facility",
        "Invoice Generator (SMS & Email)",
        "QR Payment Facility",
        "Payment Link Generation",
        "Transaction Alert: SMS & Email",
        "Statement using Portal & App",
        "Support: Call, Email & Chat",
        "Dedicated Key Account Manager",
        "Single Store Support",
        "All Payment Methods Included",
        "No Additional Payment Method Fee"
      ]
    },
    {
      name: "Growth",
      description: "Best for Growing Businesses",
      price: "Call For Price",
      period: null,
      subtitle: "One-time setup fee (non-refundable)",
      gradient: "from-indigo-500 to-blue-500",
      popular: false,
      features: [
        "No Monthly Fee",
        "2% per transaction (Visa & MasterCard)",
        "1.90% per transaction (bKash, Nagad etc)",
        "EMI & Discount Offer Facility",
        "Invoice Generator (SMS & Email)",
        "QR Payment Facility",
        "Payment Link Generation",
        "Transaction Alert: SMS & Email",
        "Statement using Portal & App",
        "Support: Call, Email & Chat",
        "Dedicated Key Account Manager",
        "Single Store Support",
        "All Payment Methods Included",
        "No Additional Payment Method Fee"
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
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Simple, <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include our core features with no hidden fees or monthly charges.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose ShortlyPay Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose ShortlyPay?
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Discover the advantages that make ShortlyPay the preferred choice for businesses worldwide.
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
            <p className="text-xl text-gray-600 mb-12 text-center">Find answers to the most common questions about ShortlyPay.</p>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How to get started with ShortlyPay?</AccordionTrigger>
                  <AccordionContent>
                    Getting started with ShortlyPay is easy. Simply sign up for an account, choose your desired pricing plan, and follow our integration guide to connect your systems.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my transaction safe over online?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all transactions processed through ShortlyPay are secured with state-of-the-art encryption and fraud detection technologies to ensure your data and funds are safe.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is Debit & Credit Card allowed over ShortlyPay?</AccordionTrigger>
                  <AccordionContent>
                    ShortlyPay supports a wide range of payment methods, including major debit and credit cards, as well as various local and international payment options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is there any monthly or hidden charges?</AccordionTrigger>
                  <AccordionContent>
                    No, ShortlyPay believes in transparent pricing. All our plans clearly outline the costs, and there are no hidden fees or monthly charges beyond what is stated in your chosen plan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Do you provide Development Support?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! We provide comprehensive development support, including detailed API documentation, SDKs, and a dedicated support team to assist your developers during integration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>How do you provide Technical Support?</AccordionTrigger>
                  <AccordionContent>
                    Our technical support team is available 24/7 via email, chat, and phone. We offer prompt assistance for any technical issues or queries you may have.
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