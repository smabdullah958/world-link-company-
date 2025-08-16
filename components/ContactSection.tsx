
'use client';
import axios from 'axios';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = async () => {
  try {
    const response = await axios.post(
    "https://api.web3forms.com/submit",
      formData,
        );

    if (response.data.success) {
      console.log('Form submitted successfully');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed", name: '', email: '', company: '', phone: '', service: '', message: '' });
      }, 3000);
    }
    
  } catch (error) {
    console.error('Error submitting form', error);
  }
};

  const offices = [
    {
      city: 'New York',
      country: 'USA',
      address: '150 Broadway, Suite 1800, New York, NY 10038',
      phone: '+1 (555) 123-4567',
      email: 'usa@worldlinkexports.com',
      timezone: 'EST'
    },
    {
      city: 'London',
      country: 'UK',
      address: '25 Old Broad Street, London EC2N 1HQ',
      phone: '+44 20 7123 4567',
      email: 'uk@worldlinkexports.com',
      timezone: 'GMT'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '1 Raffles Place, #40-61, Singapore 048616',
      phone: '+65 6123 4567',
      email: 'asia@worldlinkexports.com',
      timezone: 'SGT'
    }
  ];

  return (
    <section 
    data-aos="fade-right text-justify"
     data-aos-delay="100"
    className="py-12 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span> 
          <h2 
              data-aos="fade-down"
              data-aos-delay="200"
          className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 text-justify">
            Let's Start Your Global Trade Journey
          </h2>
          <p 
              data-aos="fade-up"
              data-aos-delay="300"
          className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Ready to expand your business globally? Our expert team is here to provide 
            personalized solutions and guide you every step of the way.
          </p>
        </div>

        <div
              data-aos="fade-left"
              data-aos-delay="500"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#002D62] mb-8">Send Us a Message</h3>
            <form onSubmit={(e)=>e.preventDefault()}>
            <div id="contact-form"  className="space-y-6">  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
            <input type="hidden" name="access_key" value="881b5b74-2a53-4d04-b485-2284ecf313ed"/>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800"
                />
              </div>

              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800 appearance-none"
                  required
                >
                  <option value="">Select Service of Interest *</option>
                  <option value="import">Import Handling</option>
                  <option value="export">Export Compliance</option>
                  <option value="logistics">Global Logistics</option>
                  <option value="customs">Customs Clearance</option>
                  <option value="warehousing">Warehousing</option>
                  <option value="consultation">Trade Consultation</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your trade requirements..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-gray-800 resize-none"
                rows={5}
                maxLength={500}
                required
              />

              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-4 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer disabled:bg-green-500 duration-1000"
              >
                {isSubmitted ? 'Message Sent Successfully!' : 'Send Message'}
              </button>
            </div>
             </form>

            <div className="mt-8 p-6 bg-[#F8F9FA] rounded-xl transform hover:scale-105 duration-1000 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                  <i className="ri-time-line text-white"></i>
                </div>
                <div >
                  <h4 className="font-semibold text-[#002D62]">Quick Response</h4>
                  <p className="text-sm text-gray-600">We respond within 2 hours during business days</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#002D62] mb-8">Global Offices</h3>
            
            <div className="space-y-6 mb-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-[#F8F9FA] p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all transform hover:scale-105 duration-1000">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-[#002D62] text-lg">{office.city}, {office.country}</h4>
                      <span className="text-sm text-[#D4AF37] font-medium">{office.timezone}</span>
                    </div>
                    <div className="w-8 h-8 bg-[#002D62]/10 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-[#002D62]"></i>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-map-pin-2-line text-[#D4AF37] mt-1"></i>
                      <span className="text-gray-600 text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line text-[#D4AF37]"></i>
                      <span className="text-gray-600 text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line text-[#D4AF37]"></i>
                      <span className="text-gray-600 text-sm">{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#002D62] text-white p-6 rounded-xl transform hover:scale-105 duration-1000">
              <h4 className="font-bold mb-4">24/7 Emergency Support</h4>
              <p className="text-gray-200 text-sm mb-4">
                For urgent shipment issues or emergency assistance
              </p>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-fill text-[#D4AF37]"></i>
                <span className="font-semibold">+1 (555) URGENT-1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F8F9FA] rounded-3xl p-8 lg:p-12"
        data-aos="fade-down" 
        data-aos-delay="100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#002D62] mb-4"
            data-aos="fade-down" data-aos-delay="200">
              Visit Our Main Office</h3>
            <p className="text-gray-600" data-aos="fade-up" data-aos-delay="300">
              Located in the heart of the financial district with easy access to major ports</p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2992867373857!2d-74.01343678459364!3d40.708077179330554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2s150%20Broadway%2C%20New%20York%2C%20NY%2010038!5e0!3m2!1sen!2sus!4v1621876543210!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
