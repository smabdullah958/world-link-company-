
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-[#002D62] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <i className="ri-ship-line text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold">WorldLink Exports</span>
            </div>
            <p className="text-gray-300 mb-6">
              Connecting markets and bridging continents through reliable global trade solutions since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">About Us</Link>
              <Link href="/services" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">Services</Link>
              <Link href="/industries" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">Industries</Link>
              <Link href="/careers" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">Careers</Link>
              <Link href="/news" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">News</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">Import Handling</a>
              <a href="#" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">Export Compliance</a>
              <a href="#" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">Global Logistics</a>
              <a href="#" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">Customs Clearance</a>
              <a href="#" className="block text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer">Warehousing</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with the latest trade insights and company news.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white px-4 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 lg:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <i className="ri-shield-check-line text-sm"></i>
                </div>
                <span className="text-sm text-gray-300">ISO 9001</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <i className="ri-award-line text-sm"></i>
                </div>
                <span className="text-sm text-gray-300">WTO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <i className="ri-global-line text-sm"></i>
                </div>
                <span className="text-sm text-gray-300">Global Trade</span>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm">
                © 2024 WorldLink Exports. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-end space-x-4 mt-2">
                <Link href="/privacy" className="text-xs text-gray-400 hover:text-[#D4AF37] cursor-pointer">Privacy Policy</Link>
                <Link href="/terms" className="text-xs text-gray-400 hover:text-[#D4AF37] cursor-pointer">Terms of Service</Link>
                <Link href="/cookies" className="text-xs text-gray-400 hover:text-[#D4AF37] cursor-pointer">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
