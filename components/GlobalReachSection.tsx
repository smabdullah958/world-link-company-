
'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

export default function GlobalReachSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Observer hooks for each stat
  const { ref: countriesRef, inView: countriesVisible } = useInView({ triggerOnce: true });
  const { ref: portsRef, inView: portsVisible } = useInView({ triggerOnce: true });
  const { ref: warehousesRef, inView: warehousesVisible } = useInView({ triggerOnce: true });
  const { ref: routesRef, inView: routesVisible } = useInView({ triggerOnce: true });

  return (
    <section className="py-12 bg-white" data-aos="fade-left">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium mb-4">
            Global Reach
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 text-justify" data-aos="fade-up">
            Worldwide Trade Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify" data-aos="fade-down">
            Our extensive global network spans five continents, connecting major trade hubs 
            and emerging markets through strategic partnerships and local expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
          
          {/* Countries Served */}
          <div className="text-center p-6 bg-[#F8F9FA] rounded-xl hover:scale-105 transition-transform duration-1000">
            <div className="w-16 h-16 bg-[#002D62] rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-global-line text-2xl text-white"></i>
            </div>
            <div ref={countriesRef} className="text-3xl font-bold text-[#002D62] mb-2">
              {countriesVisible && <CountUp start={0} end={45} duration={3} suffix="+" />}
            </div>
            <div className="text-gray-600 font-medium">Countries Served</div>
          </div>

          {/* Port Locations */}
          <div className="text-center p-6 bg-[#F8F9FA] rounded-xl hover:scale-105 transition-transform duration-1000">
            <div className="w-16 h-16 bg-[#002D62] rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-ship-line text-2xl text-white"></i>
            </div>
            <div ref={portsRef} className="text-3xl font-bold text-[#002D62] mb-2">
              {portsVisible && <CountUp start={0} end={150} duration={3} suffix="+" />}
            </div>
            <div className="text-gray-600 font-medium">Port Locations</div>
          </div>

          {/* Warehouses */}
          <div className="text-center p-6 bg-[#F8F9FA] rounded-xl hover:scale-105 transition-transform duration-1000">
            <div className="w-16 h-16 bg-[#002D62] rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-building-line text-2xl text-white"></i>
            </div>
            <div ref={warehousesRef} className="text-3xl font-bold text-[#002D62] mb-2">
              {warehousesVisible && <CountUp start={0} end={25} duration={3} suffix="+" />}
            </div>
            <div className="text-gray-600 font-medium">Warehouses</div>
          </div>

          {/* Trade Routes */}
          <div className="text-center p-6 bg-[#F8F9FA] rounded-xl hover:scale-105 transition-transform duration-1000">
            <div className="w-16 h-16 bg-[#002D62] rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-route-line text-2xl text-white"></i>
            </div>
            <div ref={routesRef} className="text-3xl font-bold text-[#002D62] mb-2">
              {routesVisible && <CountUp start={0} end={500} duration={3} suffix="+" />}
            </div>
            <div className="text-gray-600 font-medium">Trade Routes</div>
          </div>

        </div>
      </div>
    </section>
  );
}
