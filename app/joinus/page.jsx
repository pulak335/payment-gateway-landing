

export default function JoinUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Business Information</h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg mb-4">Please fill out the form below to join us.</p>

          <form className="space-y-6">
            {/* Business Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Business Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="registeredName" className="block text-sm font-medium text-gray-700">Business registered name / legal name *</label>
                  <input type="text" id="registeredName" name="registeredName" placeholder="Olive trading corporation" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Example: Your Company LLC / Sole Owner / Private Limited / Public Limited Company</p>
                </div>
                <div>
                  <label htmlFor="tradingName" className="block text-sm font-medium text-gray-700">Trading Name / DBA (Doing Business As) *</label>
                  <input type="text" id="tradingName" name="tradingName" placeholder="www.yourdomain.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Example: yourdomain.com / yourdomain.xyz / yourdomain.org or Brand Name</p>
                </div>
              </div>
            </div>

            {/* Type of Business */}
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">Type of Business *</label>
              <select id="businessType" name="businessType" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>eCommerce</option>
                <option>fCommerce (Facebook Page)</option>
                <option>Information Technology</option>
                <option>Education</option>
                <option>Charity / Donation</option>
                <option>Service Platform (Web & App based)</option>
                <option>Gaming (App based)</option>
                <option>Membership System</option>
                <option>Event Ticket / Registration</option>
                <option>Consultancy Service</option>
                <option>Health Service (Appointment / Consultancy)</option>
                <option>Others</option>
              </select>
            </div>

            {/* Mobile / Cell Phone */}
            <div>
              <label htmlFor="mobilePhone" className="block text-sm font-medium text-gray-700">Mobile / Cell Phone *</label>
              <input type="text" id="mobilePhone" name="mobilePhone" placeholder="01686339288" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <p className="mt-2 text-sm text-gray-500">Your direct contact mobile number. we will send text notification for each transaction here.</p>
            </div>

            {/* Business Email */}
            <div>
              <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700">Business Email *</label>
              <input type="email" id="businessEmail" name="businessEmail" placeholder="contact@yourdomain.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <p className="mt-2 text-sm text-gray-500">example@example.com | yourname@yourdomain.com</p>
            </div>

            {/* Product Name */}
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name *</label>
              <input type="text" id="productName" name="productName" placeholder="What you are going to sell online" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <p className="mt-2 text-sm text-gray-500">What you are going to sell online. Example: Service /Product / Consultancy / Ticket / Donation etc.</p>
            </div>

            {/* Website / Facebook Page Address */}
            <div>
              <label htmlFor="websiteAddress" className="block text-sm font-medium text-gray-700">Website / Facebook Page Address *</label>
              <input type="url" id="websiteAddress" name="websiteAddress" placeholder="https://yourdomain.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <p className="mt-2 text-sm text-gray-500">Where you are planning to sell or receive payment. Example: yourdomain.com / Facebook Page URL</p>
            </div>

            {/* Legal Identity */}
            <div>
              <label htmlFor="legalIdentity" className="block text-sm font-medium text-gray-700">Legal Identity *</label>
              <select id="legalIdentity" name="legalIdentity" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Sole Proprietor</option>
                <option>Non-Profit</option>
                <option>Partnership</option>
                <option>Government Agency</option>
                <option>Private Limited</option>
                <option>Educational Institution</option>
                <option>Public Limited</option>
                <option>Religious Entity</option>
                <option>NGO</option>
              </select>
            </div>

            {/* Contact Person Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Person Details</h2>
              <p className="text-sm text-gray-500 mb-4">Please share your accounts & technical contact details</p>

              {/* Accounts Contact */}
              <h3 className="text-xl font-medium mb-2">Accounts Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="accountsFullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input type="text" id="accountsFullName" name="accountsFullName" placeholder="Md Nesar Ahmed" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="accountsDesignation" className="block text-sm font-medium text-gray-700">Designation *</label>
                  <input type="text" id="accountsDesignation" name="accountsDesignation" placeholder="Vice President" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Your role / designation with your organization</p>
                </div>
                <div>
                  <label htmlFor="accountsMobile" className="block text-sm font-medium text-gray-700">Mobile *</label>
                  <input type="text" id="accountsMobile" name="accountsMobile" placeholder="01686339288" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Contact person&apos;s valid mobile number.</p>
                </div>
                <div>
                  <label htmlFor="accountsEmail" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input type="email" id="accountsEmail" name="accountsEmail" placeholder="contact@yourdomain.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Contact person&apos;s valid email address.</p>
                </div>
              </div>

              {/* Technical Contact */}
              <h3 className="text-xl font-medium mb-2">Technical Contact</h3>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="sameAsAccounts" name="sameAsAccounts" className="h-4 w-4 text-purple-800 border-purple-500 rounded" />
                <label htmlFor="sameAsAccounts" className="ml-2 block text-sm text-gray-900">Same as Contact Person&apos;s Details</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="technicalFullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input type="text" id="technicalFullName" name="technicalFullName" placeholder="Md Rony Hossain" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="technicalDesignation" className="block text-sm font-medium text-gray-700">Designation *</label>
                  <input type="text" id="technicalDesignation" name="technicalDesignation" placeholder="Software Developer" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Your role / designation with your organization</p>
                </div>
                <div>
                  <label htmlFor="technicalMobile" className="block text-sm font-medium text-gray-700">Mobile *</label>
                  <input type="text" id="technicalMobile" name="technicalMobile" placeholder="01686339288" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Contact person&apos;s valid mobile number.</p>
                </div>
                <div>
                  <label htmlFor="technicalEmail" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input type="email" id="technicalEmail" name="technicalEmail" placeholder="contact@yourdomain.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Contact person&apos;s valid email address.</p>
                </div>
              </div>
            </div>

            {/* Technical Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technical Information</h2>
              <p className="text-sm text-gray-500 mb-4">Please share your website details</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="websiteURL" className="block text-sm font-medium text-gray-700">Website URL *</label>
                  <input type="url" id="websiteURL" name="websiteURL" placeholder="https://yourdomain.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Please provide your live website URL.</p>
                </div>
                <div>
                  <label htmlFor="hostingIP" className="block text-sm font-medium text-gray-700">Hosting Server IP Address *</label>
                  <input type="text" id="hostingIP" name="hostingIP" placeholder="199.188.200.241" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="mt-2 text-sm text-gray-500">Write down your shared / dedicated / VPS IP.</p>
                </div>
              </div>
            </div>

            {/* Plan / Subscription */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Plan / Subscription</h2>
              <p className="text-sm text-gray-500 mb-4">Please select your preferred plan</p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Features</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education (Only for School, College & University) -One time & non-refundable</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">aamar Growth (One time & non-refundable)</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SME</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">One Time Fee</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">BDT 0.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">BDT 5000.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">BDT 0.00</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Details</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer">Click to View</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer">Click to View</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer">Click to View</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Documents Upload */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Documents Upload</h2>
              <p className="text-sm text-gray-500 mb-4">Please upload the required documents</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="businessLogo" className="block text-sm font-medium text-gray-700">Business / Organization Logo *</label>
                  <input type="file" id="businessLogo" name="businessLogo" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                  <p className="mt-2 text-sm text-gray-500">Format: .jpg/.png/.gif | Resolution: 512 X 512 | File Size (Max): 2MB</p>
                </div>
                <div>
                  <label htmlFor="tradeLicense" className="block text-sm font-medium text-gray-700">Trade License *</label>
                  <input type="file" id="tradeLicense" name="tradeLicense" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                  <p className="mt-2 text-sm text-gray-500">Please provide your updated Trade License | Format: .jpg/.png/.pdf | File Size (Max): 5MB</p>
                </div>
                <div>
                  <label htmlFor="legalDocuments" className="block text-sm font-medium text-gray-700">NID / Passport / Birth Certificate / Driving License*</label>
                  <input type="file" id="legalDocuments" name="legalDocuments" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                  <p className="mt-2 text-sm text-gray-500">Format: .jpg/.png/.pdf | File Size (Max): 5MB</p>
                </div>
                <div>
                  <label htmlFor="tinCertificate" className="block text-sm font-medium text-gray-700">TIN Certificate *</label>
                  <input type="file" id="tinCertificate" name="tinCertificate" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                  <p className="mt-2 text-sm text-gray-500">Format: .jpg/.png/.pdf | File Size (Max): 5MB</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}