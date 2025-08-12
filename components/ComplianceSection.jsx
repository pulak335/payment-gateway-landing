const ComplianceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">We are committed, We are Compliant</h2>
        <p className="text-lg text-gray-700 mb-12">
          We value your privacy, data security & for this reason we have taken several initiatives to meet all compliance of regulator & security auditors requirement.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">PCI-DSS</h3>
            <p className="text-gray-600">
              aamarPay is PCI-DSS Level-1 compliant which removes your worry of compliance.
            </p>
          </div>
          <div className="p-6 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">PSO Licensed</h3>
            <p className="text-gray-600">
              aamarPay has achieved the prestigious PSO License from Central Bank of Bangladesh.
            </p>
          </div>
          <div className="p-6 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Affiliation</h3>
            <p className="text-gray-600">
              We are the proud member of ECAB, trade body represents all e-commerce and relevant organizations.
            </p>
          </div>
          <div className="p-6 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Security</h3>
            <p className="text-gray-600">
              We are using Industry standard PositiveSSL issued by SECTIGO to protect your data security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;