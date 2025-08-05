
'use client';
import { useState } from 'react';

export default function HeroSection() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowQuoteForm(false);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20global%20shipping%20containers%20at%20modern%20international%20port%20with%20cargo%20ships%2C%20cranes%20and%20logistics%20operations%20under%20blue%20sky%2C%20representing%20worldwide%20trade%20and%20export%20business%2C%20industrial%20maritime%20scene%20with%20geometric%20composition%20and%20clean%20professional%20lighting&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      />
      <div className="absolute inset-0 bg-[#002D62]/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full text-[#D4AF37] text-sm font-medium border border-[#D4AF37]/30">
              Trusted Global Trade Partner Since 1995
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Connecting Markets,
            <span className="block text-[#D4AF37]">Bridging Continents</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            WorldLink Exports delivers comprehensive import and export solutions, 
            connecting businesses worldwide with seamless logistics and unmatched expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => setShowQuoteForm(true)}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Request Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#002D62] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
              Explore Services
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </div>

      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#002D62]">Request Quote</h3>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800"
                required
              />
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800 appearance-none"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="import">Import Handling</option>
                  <option value="export">Export Compliance</option>
                  <option value="logistics">Global Logistics</option>
                  <option value="customs">Customs Clearance</option>
                  <option value="warehousing">Warehousing</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
              <textarea
                placeholder="Additional Requirements"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800 resize-none"
                rows={3}
                maxLength={500}
              />
              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Send Quote Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
