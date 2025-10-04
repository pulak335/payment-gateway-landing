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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              These Terms & Conditions (&ldquo;Terms&rdquo;) govern your use of [Your Company Name]&apos;s payment gateway solutions and wallet services in Bangladeshi Taka (BDT) and United States Dollar (USD).
            </p>
            <p className="text-gray-600 leading-relaxed">
              By registering, accessing, or using our services, you agree to these Terms. If you do not agree, please discontinue using our platform.
            </p>
          </div>

          {/* Definitions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Definitions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">&ldquo;Company&rdquo; / &ldquo;We&rdquo; / &ldquo;Our&rdquo; / &ldquo;Us&rdquo;</h3>
                <p className="text-gray-600">[Your Company Name], provider of the payment gateway solution.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">&ldquo;User&rdquo; / &ldquo;You&rdquo; / &ldquo;Your&rdquo;</h3>
                <p className="text-gray-600">Any person or business entity using our services.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">&ldquo;Wallet&rdquo;</h3>
                <p className="text-gray-600">A digital account maintained in BDT (Local Wallet) or USD (International Wallet).</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">&ldquo;Merchant&rdquo;</h3>
                <p className="text-gray-600">Businesses or individuals accepting payments through our platform.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">&ldquo;KYC&rdquo;</h3>
                <p className="text-gray-600">Know Your Customer, verification required for compliance.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">&ldquo;Transaction&rdquo;</h3>
                <p className="text-gray-600">Any payment, transfer, or settlement made using our platform.</p>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Eligibility</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You must be at least 18 years old to use our services.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You must complete KYC verification (National ID/Passport, Mobile Verification, Bank/MFS account linkage).
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Businesses must provide valid trade licenses and tax documents (for Bangladesh users).
            </p>
            <p className="text-gray-600 leading-relaxed">
              For USD wallets, international compliance documents may be required.
            </p>
          </div>

          {/* Services Provided */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Services Provided</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We provide:
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Payment Gateway Integration – For online and offline merchants.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Wallet System –
              <br />
              BDT Wallet: Local transactions via banks, MFS (bKash, Nagad, Rocket), cards.
              <br />
              USD Wallet: International payments, cross-border settlements.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Transaction Settlement –
              <br />
              Standard Settlement: T+2 or T+3 (free).
              <br />
              Instant Settlement: Subject to a fee (1.5%–2.5%).
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Currency Conversion – For cross-currency transactions (rates depend on financial partners).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Fraud & Risk Monitoring – As per AML/CFT guidelines.
            </p>
          </div>

          {/* User Responsibilities */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide accurate and up-to-date information.</li>
              <li>Maintain confidentiality of your account credentials.</li>
              <li>Not use the platform for unlawful activities including money laundering, gambling, terrorism financing, or fraud.</li>
              <li>Ensure sufficient funds in your wallet/bank/MFS account.</li>
              <li>Notify us immediately of unauthorized transactions.</li>
            </ul>
          </div>

          {/* Fees & Charges */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fees & Charges</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Transaction Fees –
              <br />
              Local Wallet (BDT): [Insert Fee Structure]
              <br />
              International Wallet (USD): [Insert Fee Structure]
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Settlement Fees –
              <br />
              Standard Settlement: Free
              <br />
              Instant Settlement: 1.5% – 2.5% of transaction amount
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Currency Conversion Fees – Applied as per exchange partner rates.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Other Charges – May apply for failed transactions, chargebacks, or compliance checks.
            </p>
          </div>

          {/* Transaction Settlement & Limits */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Transaction Settlement & Limits</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Settlement timelines may vary due to banking/MFS restrictions.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Daily/Monthly transaction limits may apply based on KYC level and regulatory approvals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to hold or delay transactions for security or compliance checks.
            </p>
          </div>

          {/* Refunds & Chargebacks */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Refunds & Chargebacks</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Refunds are subject to merchant policies.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Chargebacks may apply for unauthorized or disputed transactions.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Refunds may take 5–15 business days depending on the bank/MFS provider.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For cross-border (USD) transactions, refund timelines depend on international banking partners.
            </p>
          </div>

          {/* Prohibited Activities */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Prohibited Activities</h2>
            <p className="text-gray-600 leading-relaxed">
              You may not use our services for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Money laundering, terrorist financing, or tax evasion.</li>
              <li>Online gambling, pornography, or illegal trade.</li>
              <li>Selling counterfeit goods or unauthorized financial services.</li>
              <li>Transactions violating Bangladesh Bank regulations or international financial laws.</li>
            </ul>
          </div>

          {/* Compliance & Monitoring */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Compliance & Monitoring</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We comply with Bangladesh Bank, BFIU, and international AML/CFT standards.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may suspend, block, or terminate accounts flagged for suspicious activity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Users agree to periodic KYC/AML checks.
            </p>
          </div>

          {/* Data Privacy & Security */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Privacy & Security</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We collect, process, and store personal data in line with our Privacy Policy.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are PCI-DSS compliant for secure handling of card data.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              All transactions are encrypted (SSL/TLS, AES-256).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cross-border data may be processed outside Bangladesh, subject to GDPR & global standards.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are not liable for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Delays or failures due to banking/MFS partners.</li>
              <li>Losses due to incorrect account details provided by users.</li>
              <li>Unauthorized use if you fail to secure your credentials.</li>
              <li>Force majeure events (network failure, natural disaster, regulatory changes).</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Our liability is limited to the transaction value in dispute.
            </p>
          </div>

          {/* Account Suspension & Termination */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Account Suspension & Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may suspend or terminate your account if you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide false KYC information.</li>
              <li>Engage in fraudulent or illegal activity.</li>
              <li>Violate these Terms or regulatory requirements.</li>
            </ul>
          </div>

          {/* Governing Law & Jurisdiction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Governing Law & Jurisdiction</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For BDT Wallet Users: Governed by the laws of Bangladesh, under jurisdiction of Bangladesh courts.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For USD Wallet Users: Governed by international financial regulations, subject to arbitration under [Insert International Arbitration Body].
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dispute Resolution</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Users must first contact Customer Support.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If unresolved, disputes for local users will be settled under Bangladesh arbitration laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              International disputes may be resolved through international arbitration centers.
            </p>
          </div>

          {/* Amendments */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Amendments</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms. Users will be notified of major changes through email, SMS, or app notifications.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              [Your Company Name]
              <br />
              Registered Office: [Insert Address]
              <br />
              Email: [Insert Contact Email]
              <br />
              Phone: [Insert Support Number]
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="text-purple-100 mb-6">
              Our legal team is here to help clarify any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Contact Us
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
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
