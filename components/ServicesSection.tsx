
'use client';
import { useState } from 'react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: 'ri-download-line',
      title: 'Import Handling',
      description: 'Comprehensive import management from documentation to delivery',
      details: 'Complete import solutions including vendor sourcing, quality control, documentation management, and customs clearance. We ensure your imports meet all regulatory requirements while optimizing costs and delivery times.',
      features: ['Vendor Sourcing', 'Quality Control', 'Documentation', 'Regulatory Compliance']
    },
    {
      icon: 'ri-upload-line',
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
      icon: 'ri-file-shield-line',
      title: 'Documentation',
      description: 'Professional handling of all trade documentation requirements',
      details: 'Expert management of complex trade documentation including certificates of origin, commercial invoices, packing lists, and specialized industry certifications. We ensure accuracy and compliance.',
      features: ['Commercial Invoices', 'Certificates of Origin', 'Packing Lists', 'Industry Certifications']
    },
    {
      icon: 'ri-government-line',
      title: 'Customs Clearance',
      description: 'Fast and efficient customs clearance in all major ports',
      details: 'Streamlined customs clearance services with our licensed customs brokers. We handle all customs procedures, duty optimization, and ensure rapid clearance to minimize delays.',
      features: ['Licensed Brokers', 'Duty Optimization', 'Rapid Processing', 'Port Networks']
    },
    {
      icon: 'ri-building-line',
      title: 'Warehousing',
      description: 'Secure storage and distribution facilities worldwide',
      details: 'Strategic warehousing solutions across key global locations. Our facilities offer secure storage, inventory management, cross-docking, and distribution services with advanced tracking systems.',
      features: ['Strategic Locations', 'Secure Storage', 'Inventory Management', 'Cross-docking']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6">
            Comprehensive Trade Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final delivery, we provide end-to-end solutions 
            that simplify global trade and ensure your success in international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeService === index
                  ? 'bg-[#002D62] text-white shadow-2xl transform scale-105'
                  : 'bg-[#F8F9FA] hover:bg-white hover:shadow-lg'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                activeService === index ? 'bg-[#D4AF37]' : 'bg-[#002D62]'
              }`}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
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

              {activeService === index && (
                <button className="mt-6 bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                  Learn More
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#F8F9FA] rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#002D62] mb-6">
                {services[activeService].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {services[activeService].details}
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Get Quote
                </button>
                <button className="border-2 border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Schedule Call
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20international%20logistics%20center%20with%20advanced%20cargo%20handling%20systems%2C%20automated%20warehouse%20operations%2C%20professional%20freight%20management%20technology%2C%20clean%20industrial%20environment%20with%20global%20shipping%20containers%20and%20efficient%20workflow&width=600&height=400&seq=services-detail&orientation=landscape"
                alt="Service Details"
                className="w-full h-80 object-cover rounded-2xl shadow-lg object-top"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#D4AF37]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
