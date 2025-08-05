
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#002D62] rounded-lg flex items-center justify-center">
              <i className="ri-ship-line text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-[#002D62]">WorldLink Exports</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">About Us</Link>
            <Link href="/services" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">Services</Link>
            <Link href="/industries" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">Industries</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">Contact</Link>
            <button className="bg-[#D4AF37] text-white px-6 py-2 rounded-lg hover:bg-[#B8941F] transition-colors whitespace-nowrap cursor-pointer">
              Request Quote
            </button>
          </nav>

          <button 
            className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-[#002D62]`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">Services</Link>
              <Link href="/industries" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">Industries</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#002D62] transition-colors cursor-pointer">Contact</Link>
              <button className="bg-[#D4AF37] text-white px-6 py-2 rounded-lg hover:bg-[#B8941F] transition-colors whitespace-nowrap cursor-pointer self-start">
                Request Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
