import React from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Refund & Dispute Resolution Policy</h1>
          <p className="text-xl opacity-90">
            Comprehensive refund and dispute resolution guidelines for our payment gateway services.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Purpose */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Purpose</h2>
            <p className="text-gray-600 leading-relaxed">
              This Refund & Dispute Resolution Policy outlines how refunds, cancellations, chargebacks, and disputes are managed for transactions processed via our Payment Gateway Services (BDT Wallet & USD Wallet).
            </p>
            <p className="text-gray-600 leading-relaxed">
              The policy ensures transparency, compliance with Bangladesh Bank, BFIU, international financial regulations, PCI-DSS, and card network rules (Visa/Mastercard/PayPal), and protection for both Merchants and Customers.
            </p>
          </div>

          {/* Scope */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Scope</h2>
            <p className="text-gray-600 leading-relaxed">
              This policy applies to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Merchants using our payment gateway.</li>
              <li>Customers making payments via our platform.</li>
              <li>Transactions processed in local currency (BDT) and international currency (USD).</li>
            </ul>
          </div>

          {/* General Principles */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">General Principles</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Refunds are subject to Merchant&apos;s refund and cancellation policy.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Company only facilitates refunds — the Merchant is responsible for approving and funding them.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Refunds will only be processed to the original payment method (no cash/manual refunds).
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Refunds may take:
              <br />
              BDT Transactions: 3–7 working days.
              <br />
              USD Transactions: 7–15 working days (due to international settlement).
            </p>
          </div>

          {/* Refund Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Refund Process</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Customer Request: Customer must contact the Merchant directly to request a refund.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Merchant Action: Merchant reviews and approves/declines the refund as per their internal policy.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gateway Processing: Upon Merchant&apos;s approval, the Company processes the refund back to the original payment source.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Notification: Both Merchant and Customer will be notified by email/SMS.
            </p>
          </div>

          {/* Disputes & Chargebacks */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Disputes & Chargebacks</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If a Customer disputes a transaction via their bank/card issuer, a chargeback may be initiated.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Merchant must provide:
              <br />
              Proof of product/service delivery.
              <br />
              Signed invoices, delivery slips, or digital logs.
              <br />
              Refund/return policy communicated to customer.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If Merchant fails to provide valid proof, the disputed amount will be deducted from Merchant&apos;s settlement balance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chargeback fees may apply as per card network rules.
            </p>
          </div>

          {/* Non-Refundable Transactions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Non-Refundable Transactions</h2>
            <p className="text-gray-600 leading-relaxed">
              Refunds are not allowed for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Illegal or fraudulent transactions.</li>
              <li>Services/products already consumed or delivered.</li>
              <li>Digital goods or subscriptions (unless required by law).</li>
              <li>Transactions beyond 180 days (6 months).</li>
            </ul>
          </div>

          {/* Merchant Responsibilities */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Merchant Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              Clearly publish refund, cancellation, and return policies on their website/app.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Provide accurate transaction details to avoid disputes.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Respond to refund/chargeback requests within 5 working days.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Maintain proper customer service channels.
            </p>
          </div>

          {/* Company Responsibilities */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Company Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              Provide technical support for refund processing.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ensure refunds comply with financial regulations.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Cooperate with banks, card networks, and regulators in case of disputes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Withhold or reverse settlements if fraudulent activity is detected.
            </p>
          </div>

          {/* Compliance & Legal */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Compliance & Legal</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Refunds must comply with Bangladesh Bank guidelines for BDT.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              USD refunds must comply with international banking and foreign exchange laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Company may decline refunds if required by law enforcement or regulators.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dispute Resolution</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Step 1: Customer contacts Merchant.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Step 2: Merchant resolves within 7 working days.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Step 3: If unresolved, Company acts as neutral mediator.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Step 4: If still unresolved, dispute may proceed to:
              <br />
              Bangladesh Bank (for BDT transactions).
              <br />
              Arbitration / card network dispute resolution (for USD transactions).
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Governing Law</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              BDT transactions: Governed by the laws of Bangladesh.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USD transactions: Governed by international financial and card network regulations.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For Refunds & Disputes, contact:
              <br />
              📧 Email: [support@yourcompany.com]
              <br />
              📞 Phone: [+880-XXX-XXXXXXX]
            </p>
          </div>


          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help with a Refund?</h3>
            <p className="text-purple-100 mb-6">
              Our customer support team is here to assist you with any refund-related questions or requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Contact Support
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
