
import { Fragment } from "react";
import { Button } from "../../components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";

export default function PricingPage() {
  return (
    <Fragment>
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Our Pricing Plans
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* aamarEducation Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
              <p className="text-lg text-indigo-600 mb-6">Best for Education Institutes</p>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">Call For Price</div>
              <ul className="text-gray-700 space-y-3 flex-grow">
                <li><span className="text-xs">•</span> One time fee (non-refundable)</li>
                <li><span className="text-xs">•</span> No Monthly Fee</li>
                <li><span className="text-xs">•</span> 2.2% per trx (Visa & MasterCard)</li>
                <li><span className="text-xs">•</span> 1.50% per trx (bkash, Nagad etc.)</li>
                <li><span className="text-xs">•</span> EMI & Discount Offer Facility</li>
                <li><span className="text-xs">•</span> Invoice Generator (SMS & Email)</li>
                <li><span className="text-xs">•</span> QR Payment Facility</li>
                <li><span className="text-xs">•</span> Payment Link</li>
                <li><span className="text-xs">•</span> Transaction Alert: SMS & Email</li>
                <li><span className="text-xs">•</span> Statement using Portal & App</li>
                <li><span className="text-xs">•</span> Support: Call, Email & Chat</li>
                <li><span className="text-xs">•</span> Dedicated Key Account Manager</li>
                <li><span className="text-xs">•</span> Single (1) Store Support</li>
                <li><span className="text-xs">•</span> For Additional Store (+ Additional Charge)</li>
                <li><span className="text-xs">•</span> All Payment Methods By Default</li>
                <li><span className="text-xs">•</span> No Additional Payment Method Fee</li>
              </ul>
              <div className="mt-auto pt-6">
                <Button className="w-full bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded">
                  Choose Plan
                </Button>
              </div>
            </div>

            {/* aamarSME Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SME</h2>
              <p className="text-lg text-purple-600 mb-6">Best for SME Business</p>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">Call For Price</div>
              <ul className="text-gray-700 space-y-3 flex-grow">
                <li><span className="text-xs">•</span> One time fee (non-refundable)</li>
                <li><span className="text-xs">•</span> No Monthly Fee</li>
                <li><span className="text-xs">•</span> 2% per trx (Visa & MasterCard)</li>
                <li><span className="text-xs">•</span> 1.90% per trx (bKash, Nagad etc)</li>
                <li><span className="text-xs">•</span> EMI & Discount Offer Facility</li>
                <li><span className="text-xs">•</span> Invoice Generator (SMS & Email)</li>
                <li><span className="text-xs">•</span> QR Payment Facility</li>
                <li><span className="text-xs">•</span> Payment Link</li>
                <li><span className="text-xs">•</span> Transaction Alert: SMS & Email</li>
                <li><span className="text-xs">•</span> Statement using Portal & App</li>
                <li><span className="text-xs">•</span> Support: Call, Email & Chat</li>
                <li><span className="text-xs">•</span> Dedicated Key Account Manager</li>
                <li><span className="text-xs">•</span> Single (1) Store Support</li>
                <li><span className="text-xs">•</span> For Additional Store (+ Additional Charge)</li>
                <li><span className="text-xs">•</span> All Payment Methods By Default</li>
                <li><span className="text-xs">•</span> No Additional Payment Method Fee</li>
              </ul>
                            <div className="mt-auto pt-6">
                <Button className="w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                  Choose Plan
                </Button>
              </div>
            </div>

            {/* aamarGrowth Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Growth</h2>
              <p className="text-lg text-pink-600 mb-6">Best for Growing Business</p>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">Call For Price</div>
              <ul className="text-gray-700 space-y-3 flex-grow">
                <li><span className="text-xs">•</span> One time fee (non-refundable)</li>
                <li><span className="text-xs">•</span> No Monthly Fee</li>
                <li><span className="text-xs">•</span> 2% per trx (Visa & MasterCard)</li>
                <li><span className="text-xs">•</span> 1.90% per trx (bKash, Nagad etc)</li>
                <li><span className="text-xs">•</span> EMI & Discount Offer Facility</li>
                <li><span className="text-xs">•</span> Invoice Generator (SMS & Email)</li>
                <li><span className="text-xs">•</span> QR Payment Facility</li>
                <li><span className="text-xs">•</span> Payment Link</li>
                <li><span className="text-xs">•</span> Transaction Alert: SMS & Email</li>
                <li><span className="text-xs">•</span> Statement using Portal & App</li>
                <li><span className="text-xs">•</span> Support: Call, Email & Chat</li>
                <li><span className="text-xs">•</span> Dedicated Key Account Manager</li>
                <li><span className="text-xs">•</span> Single (1) Store Support</li>
                <li><span className="text-xs">•</span> For Additional Store (+ Additional Charge)</li>
                <li><span className="text-xs">•</span> All Payment Methods By Default</li>
                <li><span className="text-xs">•</span> No Additional Payment Method Fee</li>
              </ul>
              <div className="mt-auto pt-6">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose ShortlyPay! Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Why Choose ShortlyPay!
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">Discover the advantages that make ShortlyPay! the preferred choice for businesses worldwide.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="/flutter.svg" alt="Seamless Integration Icon" className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Seamless Integration</h3>
                <p className="text-gray-600">Integrate with your existing systems effortlessly using our robust APIs and comprehensive documentation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="/react.svg" alt="Advanced Security Icon" className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Security</h3>
                <p className="text-gray-600">Protect your transactions with state-of-the-art encryption and fraud detection technologies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="/nodejs.svg" alt="24/7 Customer Support Icon" className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Customer Support</h3>
                <p className="text-gray-600">Our dedicated support team is available around the clock to assist you with any queries or issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="/php.svg" alt="Competitive Pricing Icon" className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Competitive Pricing</h3>
                <p className="text-gray-600">Benefit from transparent and competitive pricing plans tailored to suit businesses of all sizes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="/python.svg" alt="Global Reach Icon" className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Reach</h3>
                <p className="text-gray-600">Expand your business globally with support for multiple currencies and international payment methods.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="/r.svg" alt="Scalability Icon" className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Scalability</h3>
                <p className="text-gray-600">Our platform is designed to scale with your business, handling increasing transaction volumes with ease.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">Find answers to the most common questions about ShortlyPay!.</p>
            <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How to get started with ShortlyPay?</AccordionTrigger>
                    <AccordionContent>
                      Getting started with ShortlyPay! is easy. Simply sign up for an account, choose your desired pricing plan, and follow our integration guide to connect your systems.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is my transaction safe over online?</AccordionTrigger>
                    <AccordionContent>
                      Yes, all transactions processed through ShortlyPay! are secured with state-of-the-art encryption and fraud detection technologies to ensure your data and funds are safe.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is Debit & Credit Card allowed over aamarPay?</AccordionTrigger>
                    <AccordionContent>
                      ShortlyPay! supports a wide range of payment methods, including major debit and credit cards, as well as various local and international payment options.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is there any monthly or hidden charges?</AccordionTrigger>
                    <AccordionContent>
                      No, ShortlyPay! believes in transparent pricing. All our plans clearly outline the costs, and there are no hidden fees or monthly charges beyond what is stated in your chosen plan.
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
      </main>


    </Fragment>
  );
}