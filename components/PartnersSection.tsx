
'use client';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";


export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

    // Observer hooks for each stat
  const { ref: countriesRef, inView: Partners } = useInView({ triggerOnce: true });
  const { ref: portsRef, inView: Clients } = useInView({ triggerOnce: true });
  const { ref: warehousesRef, inView: Retention } = useInView({ triggerOnce: true });


  const partners = [
    { name: 'Global Logistics Corp', category: 'Logistics Partner' },
    { name: 'International Trade Bank', category: 'Financial Partner' },
    { name: 'Customs Solutions Ltd', category: 'Customs Partner' },
    { name: 'Maritime Express', category: 'Shipping Partner' },
    { name: 'Air Cargo International', category: 'Air Freight' },
    { name: 'Port Authority Global', category: 'Port Operations' },
    { name: 'Trade Finance Pro', category: 'Financial Services' },
    { name: 'Digital Documentation', category: 'Tech Partner' }
  ];

  const clients = [
    { name: 'TechCorp Industries', industry: 'Electronics', volume: '$45M' },
    { name: 'Global Textiles Inc', industry: 'Fashion', volume: '$32M' },
    { name: 'Agricultural Solutions', industry: 'Agriculture', volume: '$28M' },
    { name: 'Machinery Experts', industry: 'Industrial', volume: '$67M' },
    { name: 'Fashion Forward Ltd', industry: 'Apparel', volume: '$23M' },
    { name: 'Food Export Co', industry: 'Food & Beverage', volume: '$41M' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section
       data-aos="fade-left"
        data-aos-delay="100"
    className="py-14 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#002D62]/10 text-[#002D62] rounded-full text-sm font-medium mb-4">
            Our Network
          </span>
          <h2
             data-aos="fade-down"
        data-aos-delay="200"
          className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 text-justify">
            Trusted Partners & Valued Clients
          </h2>
          <p
             data-aos="fade-up"
        data-aos-delay="300"
          className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            We collaborate with industry leaders and serve Fortune 500 companies, 
            building lasting relationships that drive mutual success in global trade.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 lg:p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#002D62]">Strategic Partners</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                  className="w-10 h-10 bg-[#F8F9FA] hover:bg-[#002D62] hover:text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer duration-1000"
                  disabled={currentSlide === 0}
                >
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                <button
                  onClick={() => setCurrentSlide(Math.min(Math.ceil(partners.length / 4) - 1, currentSlide + 1))}
                  className="w-10 h-10 bg-[#F8F9FA] hover:bg-[#002D62] hover:text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer
                  duration-1000"
                  disabled={currentSlide === Math.ceil(partners.length / 4) - 1}
                >
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </div>
            </div>

            <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="overflow-hidden">
              <div
                className="flex transition-transform duration-1000 "
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {partners.slice(slideIndex * 4, slideIndex * 4 + 4).map((partner, index) => (
                        <div
                          key={index}
                          className="bg-[#F8F9FA] hover:bg-white p-6 rounded-xl transition-all duration-1000 hover:shadow-lg border-2 border-transparent hover:border-[#D4AF37]/20 transform  hover:scale-110 ">
                          <div className="w-16 h-16 bg-[#002D62]/10 rounded-xl flex items-center justify-center mb-4 mx-auto ">
                            <i className="ri-building-line text-2xl text-[#002D62]"></i>
                          </div>
                          <h4 className="font-bold text-[#002D62] mb-2 text-center">{partner.name}</h4>
                          <p className="text-sm text-gray-600 text-center">{partner.category}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    currentSlide === index ? 'bg-[#D4AF37]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div 
           data-aos="fade-right"
        data-aos-delay="200"
        className="bg-white rounded-3xl p-8 lg:p-12">
          <h3 
             data-aos="fade-down"
        data-aos-delay="300"
          className="text-2xl font-bold text-[#002D62] mb-8 text-center">Valued Clients</h3>
          
          <div
            data-aos="fade-up"
             data-aos-delay="400"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12  overflow-visible">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F8F9FA] to-white p-6 rounded-xl border-l-4 border-[#D4AF37] hover:shadow-lg transition-all transform duration-1000 hover:scale-110">

                <div
                  
                className="flex items-center justify-between mb-4 ">
                  <h4 className="font-bold text-[#002D62]">{client.name}</h4>
                  <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                    <i className="ri-star-fill text-[#D4AF37] text-sm"></i>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Industry:</span>
                    <span className="text-sm font-medium text-[#002D62]">{client.industry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Annual Volume:</span>
                    <span className="text-sm font-bold text-[#D4AF37]">{client.volume}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">

               <div ref={countriesRef} className="text-3xl font-bold text-[#002D62] mb-2">
              {Partners && <CountUp start={0} end={200} duration={3} suffix="+" />}
            </div>
                <div className="text-gray-600">Active Partners</div>
              </div>
              <div className="text-center">
                
                 <div ref={portsRef} className="text-3xl font-bold text-[#002D62] mb-2">
              {Clients && <CountUp start={0} end={500} duration={3} suffix="+" />}
            </div>

                <div className="text-gray-600">Global Clients</div>
              </div>
              <div className="text-center">
          
          <div ref={warehousesRef} className="text-3xl font-bold text-[#002D62] mb-2">
              {Retention && <CountUp start={0} end={98} duration={3} suffix="%" />}
            </div>

                <div className="text-gray-600">Client Retention</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer transform duration-1000 hover:scale-105">
                Partner With Us
              </button>
              <button className="border-2 border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer transform duration-1000 hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
