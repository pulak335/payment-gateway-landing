'use client'
import Link from 'next/link';

const ProductCard = ({ icon, title, description, link }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 ease-in-out hover:scale-105">
    <div className="mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={link} className="text-purple-600 hover:text-purple-800 font-medium">Learn More &rarr;</Link>
  </div>
);

const ProductOverviewSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Explore Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-600"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h8.25M6 18h.008v.008H6v-.008ZM12.75 18h.008v.008h-.008v-.008ZM18 18h.008v.008H18v-.008Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 18H6a3 3 0 0 0-3 3v2.25a.75.75 0 0 0 .75.75h15.5a.75.75 0 0 0 .75-.75V21a3 3 0 0 0-3-3Z" /></svg>}
            title="Payment Gateway"
            description="Securely process online payments with ease and efficiency."
            link="/products/payment-gateway"
          />
          <ProductCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-600"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25m0 0l3 2.25m-3-2.25v7.5m6-4.5H18a2.25 2.25 0 0 0-2.25-2.25H12A2.25 2.25 0 0 0 9.75 9v.75m0-7.5h-1.5C7.26 2.25 6 3.51 6 5.062V6a2.25 2.25 0 0 0-2.25 2.25v5.25a2.25 2.25 0 0 0 2.25 2.25h1.5m-1.5-5.25h4.5m4.5-.75h-1.5m-6 0L9 17.25m9-4.5a2.25 2.25 0 0 0-2.25-2.25H12A2.25 2.25 0 0 0 9.75 13.5v.75m0 0h-1.5m0-7.5H12m-7.5 0H6m-1.5 0H3.75C2.784 2.25 2 3.034 2 4.009V4.5c0 1.452 1.26 2.712 2.75 2.712h1.5M4.5 18.75h-1.5C2.784 18.75 2 19.534 2 20.509V21c0 1.464 1.26 2.724 2.75 2.724h1.5M19.5 18.75h-1.5c-.974 0-1.75-.784-1.75-1.759V18c0-1.452 1.26-2.712 2.75-2.712h1.5m-1.5 5.25h1.5c.974 0 1.75-.784 1.75-1.759V21c0-1.464-1.26-2.724-2.75-2.724Z" /></svg>}
            title="QR Payments"
            description="Accept payments quickly and easily with QR code scanning."
            link="/products/qr-payments"
          />
          <ProductCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-600"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 21h4.5m-1.5-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008ZM16.5 21h2.25a2.25 2.25 0 0 0 2.25-2.25V15m0 0l3-3m0 0-3-3m0 3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>}
            title="Invoice Generation"
            description="Generate professional invoices and track payments effortlessly."
            link="/products/invoice-generation"
          />
          <ProductCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-600"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>}
            title="Payment Links"
            description="Create and share payment links for quick and easy transactions."
            link="/products/payment-links"
          />
          <ProductCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-600"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75A2.25 2.25 0 0 0 15.75 1.5H13.5m-3 0V3.75m3-2.25V3.75M15 15.75H9m6 3H9m6 3H9" /></svg>}
            title="Super App Features"
            description="Unlock advanced features for a comprehensive payment experience."
            link="/products/super-app-features"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductOverviewSection;