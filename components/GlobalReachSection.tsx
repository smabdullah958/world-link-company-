


'use client';
import { useState } from 'react';

export default function GlobalReachSection() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { id: 'all', name: 'Global', countries: 45, color: '#002D62' },
    { id: 'asia', name: 'Asia Pacific', countries: 18, color: '#D4AF37' },
    { id: 'europe', name: 'Europe', countries: 12, color: '#0066CC' },
    { id: 'americas', name: 'Americas', countries: 10, color: '#00AA44' },
    { id: 'africa', name: 'Africa & ME', countries: 5, color: '#CC6600' }
  ];

  const stats = [
    { value: '45+', label: 'Countries Served', icon: 'ri-global-line' },
    { value: '150+', label: 'Port Locations', icon: 'ri-ship-line' },
    { value: '25+', label: 'Warehouses', icon: 'ri-building-line' },
    { value: '500+', label: 'Trade Routes', icon: 'ri-route-line' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium mb-4">
            Global Reach
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6">
            Worldwide Trade Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our extensive global network spans five continents, connecting major trade hubs 
            and emerging markets through strategic partnerships and local expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-[#F8F9FA] rounded-xl">
              <div className="w-16 h-16 bg-[#002D62] rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-[#002D62] mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#F8F9FA] rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-[#002D62] mb-8">Interactive Global Map</h3>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                      selectedRegion === region.id
                        ? 'bg-[#002D62] text-white'
                        : 'bg-white text-gray-600 hover:bg-[#002D62] hover:text-white'
                    }`}
                  >
                    {region.name} ({region.countries})
                  </button>
                ))}
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-[#002D62] mb-3">Regional Highlights</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-[#D4AF37] font-semibold">Major Ports</div>
                      <div className="text-gray-600">Shanghai, Rotterdam, Long Beach</div>
                    </div>
                    <div>
                      <div className="text-[#D4AF37] font-semibold">Trade Volume</div>
                      <div className="text-gray-600">$2.5B+ Annual</div>
                    </div>
                    <div>
                      <div className="text-[#D4AF37] font-semibold">Key Industries</div>
                      <div className="text-gray-600">Electronics, Textiles, Machinery</div>
                    </div>
                    <div>
                      <div className="text-[#D4AF37] font-semibold">Local Partners</div>
                      <div className="text-gray-600">200+ Certified Partners</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-[#002D62] mb-3">Service Coverage</h4>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                      <span>Full Service</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#002D62] rounded-full"></div>
                      <span>Partner Network</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span>Expanding Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 h-96 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200970448.9668121!2d-98.04394516308594!3d38.13429264453125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-[#D4AF37] text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium">Active Trade Routes</div>
                <div className="text-2xl font-bold">500+</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#002D62] mb-6">
            Ready to Expand Your Global Reach?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us connect your business to new markets and opportunities worldwide. 
            Our local expertise and global network make international expansion seamless.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Explore Opportunities
            </button>
            <button className="border-2 border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Contact Regional Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
