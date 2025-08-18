
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: 'ri-global-line',
      title: 'Import Handling',
      description: 'Comprehensive import management from documentation to delivery',
      details: 'Complete import solutions including vendor sourcing, quality control, documentation management, and customs clearance. We ensure your imports meet all regulatory requirements while optimizing costs and delivery times.',
      features: ['Vendor Sourcing', 'Quality Control', 'Documentation', 'Regulatory Compliance']
    },
    {
      icon: 'ri-send-plane-line',
      title: 'Export Compliance',
      description: 'Ensure seamless export operations with full regulatory compliance',
      details: 'Navigate complex export regulations with our expert compliance team. We handle all export documentation, licensing, and regulatory requirements to ensure your products reach international markets smoothly.',
      features: ['Export Licensing', 'Regulatory Review', 'Documentation Prep', 'Market Access']
    },
    {
      icon: 'ri-truck-line',
      title: 'Global Logistics',
      description: 'End-to-end logistics solutions connecting worldwide destinations',
      details: 'Our global network provides comprehensive logistics solutions including air, sea, and land transportation. We optimize routes, manage cargo, and ensure timely delivery across all continents.',
      features: ['Multi-modal Transport', 'Route Optimization', 'Cargo Management', 'Real-time Tracking']
    },
    {
      icon: 'ri-file-shield-2-line',
      title: 'Documentation',
      description: 'Professional handling of all trade documentation requirements',
      details: 'Expert management of complex trade documentation including certificates of origin, commercial invoices, packing lists, and specialized industry certifications. We ensure accuracy and compliance.',
      features: ['Commercial Invoices', 'Certificates of Origin', 'Packing Lists', 'Industry Certifications']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Customs Clearance',
      description: 'Fast and efficient customs clearance in all major ports',
      details: 'Streamlined customs clearance services with our licensed customs brokers. We handle all customs procedures, duty optimization, and ensure rapid clearance to minimize delays.',
      features: ['Licensed Brokers', 'Duty Optimization', 'Rapid Processing', 'Port Networks']
    },
    {
      icon: 'ri-home-8-line',
      title: 'Warehousing',
      description: 'Secure storage and distribution facilities worldwide',
      details: 'Strategic warehousing solutions across key global locations. Our facilities offer secure storage, inventory management, cross-docking, and distribution services with advanced tracking systems.',
      features: ['Strategic Locations', 'Secure Storage', 'Inventory Management', 'Cross-docking']
    }
  ];

  return (
    <section 
        data-aos="fade-left"
    data-aos-delay="200"
    className="py-10  bg-[#ece8dc] text-justify" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#e6e1cf] text-[#002D62] rounded-full text-sm font-medium mb-4 ">
            Our Services
          </span>
          <h2
             data-aos="fade-up" data-aos-delay="100"
          className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6  text-center">
            Comprehensive Trade Solutions
          </h2>
          <p
           data-aos="fade-up" data-aos-delay="300"
          className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            From initial consultation to final delivery, we provide end-to-end solutions 
            that simplify global trade and ensure your success in international markets.
          </p>
        </div>

            <div
            data-aos="fade-down"
        data-aos-delay="100"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
               
              className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeService === index
                  ? 'bg-[#002D62] text-white shadow-2xl transition-transform scale-x-105 duration-1000 '
                  : 'bg-[#d5dadf] hover:bg-[#d4dde7] hover:shadow-lg transition-transform hover:scale-x-105 hover:duration-1000'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className='flex items-center justify-between mb-2 sm:mb-0  sm:justify-around '>

               <h3 className="text-xl sm:text-2xl font-bold  sm:w-52 break-words w-[80%] gap-x-2  ">{service.title}</h3>

            <div className={`size-7 rounded-xl flex items-center justify-center mb-4  ${
                activeService === index ? 'bg-[#64c5d2]' : 'bg-[#819fc2]'
              }`}>
                
                <i className={`${service.icon} text-lg text-black`}></i>
              </div>
              </div>
              <p className={`mb-6 ${
                activeService === index ? 'text-gray-200' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <i className={`ri-check-line text-sm ${
                      activeService === index ? 'text-[#D4AF37]' : 'text-[#002D62]'
                    }`}></i>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* {activeService === index && (
                <button className="mt-6 bg-[#c29f2e] hover:bg-[#9c7906] text-white px-6 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer duration-1000 border-2 border-white ">
                  Learn More
                </button>
              )} */}
            </div>
          ))}
        </div>

        {/* <div id="Import_Handling" className="bg-[#aec4da] rounded-3xl p-8 lg:p-12" 
    data-aos="fade-left"
    data-aos-delay="200" >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-12 items-center">
          
            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/imag6.jpeg"
                alt="Service Details"
                width={600}
                height={400}
                className=" object-cover rounded-2xl shadow-lg object-top"  />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#D4AF37]/20 rounded-full blur-xl">
              </div>
            </div>

            <div className='order-2 lg:order-1'>
              <h3 className="text-3xl font-bold text-[#002D62] mb-6">
                {services[activeService].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {services[activeService].details}
              </p>
              <div className="flex  flex-wrap gap-4 ">
                <button className="bg-[#D4AF37] hover:bg-[#B8941F] w-40 text-white px-6 py-3 rounded-lg font-semibold  whitespace-nowrap cursor-pointer transition-all duration-500 transform hover:scale-105"> 
                  Get Quote
                </button>
                <button className="border-2 border-[#002D62] text-[#002D62] w-40 hover:bg-[#002D62] hover:text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap cursor-pointer transition-all duration-1000 transform hover:scale-105">
                  Schedule Call
                </button>
              </div>
            </div>
            
            
          </div>
        </div>*/}
      </div> 
    </section>
  );
}
