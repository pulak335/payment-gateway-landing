"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-400">Home</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Features</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Developers</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">FAQ</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Icons</h3>
            <ul className="space-y-2">
              {/* Placeholder for social icons */}
              <li><Link href="#" className="hover:text-gray-400">Facebook</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Twitter</Link></li>
              <li><Link href="#" className="hover:text-gray-400">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Instagram</Link></li>
              <li><Link href="#" className="hover:text-gray-400">YouTube</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Support</h3>
            <p className="text-gray-300">Email: support@example.com</p>
            <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}