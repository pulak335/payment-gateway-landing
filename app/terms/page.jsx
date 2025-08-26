import React from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl opacity-90">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Last Updated</h2>
              <p className="text-gray-600">These Terms & Conditions were last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Introduction</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of ShortlyPay's payment gateway services, website, and related applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
            </p>
          </div>

          {/* Definitions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Definitions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">"Services"</h3>
                <p className="text-gray-600">Refers to ShortlyPay's payment gateway, website, mobile applications, and any related services.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">"User," "you," "your"</h3>
                <p className="text-gray-600">Refers to any individual or entity using our Services.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">"Company," "we," "us," "our"</h3>
                <p className="text-gray-600">Refers to ShortlyPay and its affiliates.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">"Account"</h3>
                <p className="text-gray-600">Refers to your registered account with ShortlyPay.</p>
              </div>
            </div>
          </div>

          {/* Account Registration */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">3. Account Registration and Use</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Account Creation</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To use certain features of our Services, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Account Security</h3>
            <p className="text-gray-600 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We are not liable for any loss or damage arising from unauthorized use of your account.
            </p>
          </div>

          {/* Acceptable Use */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Acceptable Use Policy</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Use the Services for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Services</li>
              <li>Use the Services to transmit harmful or malicious code</li>
              <li>Engage in fraudulent or deceptive practices</li>
            </ul>
          </div>

          {/* Payment Services */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Payment Services</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Service Description</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ShortlyPay provides payment processing services that allow businesses to accept payments from customers. Our services include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Payment gateway integration</li>
              <li>Multiple payment method support</li>
              <li>Transaction processing and settlement</li>
              <li>Fraud detection and prevention</li>
              <li>Reporting and analytics</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Transaction Processing</h3>
            <p className="text-gray-600 leading-relaxed">
              We process payments on your behalf and will settle funds to your designated account according to our settlement schedule. All transactions are subject to our fees and any applicable taxes.
            </p>
          </div>

          {/* Fees and Charges */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Fees and Charges</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our fees are clearly outlined in your pricing plan and may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Transaction processing fees</li>
              <li>Setup and integration fees</li>
              <li>Monthly or annual subscription fees (if applicable)</li>
              <li>Additional service fees</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              All fees are non-refundable unless otherwise specified. We reserve the right to modify our fee structure with appropriate notice.
            </p>
          </div>

          {/* Privacy and Data */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Privacy and Data Protection</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our Services, you consent to our collection and use of your information as described in our Privacy Policy.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Services and their content, features, and functionality are owned by ShortlyPay and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative works of our Services without our express written consent.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">9. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To the maximum extent permitted by law, ShortlyPay shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Loss of profits or revenue</li>
              <li>Loss of business opportunities</li>
              <li>Data loss or corruption</li>
              <li>Service interruptions</li>
              <li>Any other damages arising from your use of the Services</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Our total liability to you for any claims shall not exceed the amount you paid to us in the twelve months preceding the claim.
            </p>
          </div>

          {/* Indemnification */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">10. Indemnification</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless ShortlyPay and its officers, directors, employees, and agents from and against any claims, damages, losses, and expenses arising from your use of the Services or violation of these Terms.
            </p>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">11. Termination</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Termination by You</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You may terminate your account at any time by contacting our support team. Upon termination, your access to the Services will cease immediately.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Termination by Us</h3>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your account at any time for violation of these Terms, fraudulent activity, or for any other reason at our sole discretion.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">12. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where ShortlyPay is incorporated.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Any disputes arising from these Terms or your use of the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
          </div>

          {/* Miscellaneous */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">13. Miscellaneous</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Entire Agreement</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              These Terms constitute the entire agreement between you and ShortlyPay regarding the Services and supersede all prior agreements and understandings.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Severability</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Waiver</h3>
            <p className="text-gray-600 leading-relaxed">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">14. Contact Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">Email: legal@shortlypay.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">Phone: +1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">Address: 123 Business Street, Suite 100, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="text-purple-100 mb-6">
              Our legal team is here to help clarify any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
