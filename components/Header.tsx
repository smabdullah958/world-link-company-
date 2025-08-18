
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu after clicking
      closeMenu();
    }
  };

  const closeMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsAnimating(false);
    }, 500); // match transition duration
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#edeaea] backdrop-blur-lg shadow-sm z-50">
      <div className="container mx-auto px-6 pt-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
             <Image src="/images/logo.jpeg" alt="WorldLink Exports Logo" width={50} 
            height={50} 
             className="rounded-full border-2 border-[#D4AF37] object-cover shadow-md" />
            <span className="text-lg sm:text-2xl font-bold text-[#002D62]">WorldLink Exports</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-black hover:font-bold hover:text-xl transition-all duration-500 cursor-pointer">Home</Link>
            <Link href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="text-black hover:font-bold hover:text-xl transition-all duration-500 cursor-pointer">About Us</Link>
            <Link href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="text-black hover:font-bold hover:text-xl transition-all duration-500 cursor-pointer">Services</Link>
            <Link href="#industries" onClick={(e) => handleSmoothScroll(e, '#industries')} className="text-black hover:font-bold hover:text-xl transition-all duration-500 cursor-pointer">Industries</Link>
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="text-black hover:font-bold hover:text-xl transition-all duration-500 cursor-pointer">Contact</Link>
            {/* <button className="bg-[#ead694] text-black px-6 py-2 rounded-xl 
            hover:bg-[#e8d595] transition-colors duration-1000 whitespace-nowrap cursor-pointer">
              Request Quote
            </button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-[#002D62]`}></i>
          </button>
        </div>

        {/* Mobile Nav */}
        {(isMenuOpen || isAnimating) && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-black hover:font-bold transition-all duration-500 cursor-pointer">Home</Link>
              <Link href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="text-black hover:font-bold transition-all duration-500 cursor-pointer">About Us</Link>
              <Link href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="text-black hover:font-bold transition-all duration-500 cursor-pointer">Services</Link>
              <Link href="#industries" onClick={(e) => handleSmoothScroll(e, '#industries')} className="text-black hover:font-bold transition-all duration-500 cursor-pointer">Industries</Link>
              <Link href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="text-black hover:font-bold transition-all duration-500 cursor-pointer ">Contact</Link>
              {/* <button className="bg-[#D4AF37] text-white px-6 py-2 rounded-lg hover:bg-[#B8941F] transition-colors duration-500 whitespace-nowrap cursor-pointer self-start">
                Request Quote
              </button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
