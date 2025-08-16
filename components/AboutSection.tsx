
'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';


export default function AboutSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

    // Observer hooks
  const { ref: countriesRef, inView: countriesVisible } = useInView({ triggerOnce: true });
  const { ref: tradeRef, inView: tradeVisible } = useInView({ triggerOnce: true });


  return (
    <section className="py-16 bg-white text-justify" id="about" data-aos="fade-left">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium">
                About WorldLink Exports
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-8 leading-tight">
              Global Trade Excellence Since 1995
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
              For nearly three decades, WorldLink Exports has been at the forefront of international trade, 
              connecting businesses across continents with reliable, efficient, and innovative logistics solutions. 
              We've facilitated over $2.5 billion in global trade transactions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-eye-line text-[#D4AF37] text-xl "  ></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002D62] mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the world's most trusted bridge in global trade, enabling seamless 
                    commerce between nations and fostering economic growth worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-target-line text-[#D4AF37] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002D62] mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To deliver exceptional import-export solutions through innovative technology, 
                    expert knowledge, and unwavering commitment to client success.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-award-line text-[#D4AF37] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002D62] mb-2">Our Experience</h3>
                  <p className="text-gray-600">
                    With operations in 45+ countries and partnerships with leading global carriers, 
                    we bring unmatched expertise to every trade transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6"
               data-aos="zoom-in"
                data-aos-delay="200">
              <div className="space-y-6">
                
            <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/businessman.jpeg"  // <- fixed path
                    alt="Global trade operations"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-top transform transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>


                <div className="bg-[#002D62] text-white p-6 rounded-xl transform transition-transform duration-500 hover:scale-105">
                  <div        
                    ref={tradeRef} 
                   className="text-3xl font-bold text-[#D4AF37] mb-2 ">
                    {tradeVisible && (

                          <CountUp
        start={1}      // starting number
        end={45}      // ending number
        duration={5} // seconds
        suffix="+"    // text after number
/>
)}
                  </div>
                  <div className="text-sm">Countries Served</div>
                </div>
              </div>
              <div className="space-y-6 pt-12  ">
                <div 
                className="bg-[#D4AF37] text-white p-6 rounded-xl transform transition-transform duration-500 hover:scale-105">
                  <div
                  ref={countriesRef}
                  className="text-3xl font-bold mb-2 ">
                      {countriesVisible && (
                          <CountUp
        start={1}      // starting number
        end={2.5}      // ending number
        duration={5} // seconds
        decimals={1}   // show one decimal
        suffix="B+"    // text after number
       
      />
      )}
                  </div>
                  <div className="text-sm">Trade Volume</div>
                </div>
                
                <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/imag3.jpeg"
                    alt="Container operations"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-top transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#002D62]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
