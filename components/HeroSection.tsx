
'use client';
import axios from 'axios';
import { useState } from 'react';

export default function HeroSection() {
   const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  const [formData, setFormData] = useState({
    access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed",
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  let Fields=!formData.name||!formData.email||!formData.company||!formData.message
  ||!formData.service

  let clearForm=()=>{
  setShowQuoteForm(false)
      setFormData({access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed", name: '', email: '',
         company:'',service: '', message: '' });
  }

 const handleSubmit = async () => {
  if(Fields){
     setIsSubmitted(false)
     console.log("all field are mandatory") 
    }
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
        setShowQuoteForm(false)
        setFormData({access_key:"881b5b74-2a53-4d04-b485-2284ecf313ed", name: '', email: '', company: '', service: '', message: '' });
      }, 1000);
    }
    
  } catch (error) {
    console.error('Error submitting form', error);
  }
};


  return (
    <div  id="home">
      <div   className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-0 pb-5 md:pb-0"
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-delay="100">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/bg_image.jpeg')`
        }}
      />
      <div className="absolute inset-0 bg-[#002D62]/70 "></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-1">
            <span className="inline-block px-4 py-2 bg-[#092147]/20 backdrop-blur-sm rounded-full text-[#deca87]  text-xs sm:text-sm border border-[#D4AF37]/30  mt-8">
              Trusted Global Trade Partner Since 1995
            </span>
          </div>
          
          <h1 
              data-aos="fade-down"
             data-aos-duration="500"
             data-aos-delay="100"
          className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-8  leading-tight mt-5 ">
            Connecting Markets,
            <span className="block text-[#deca87] ">Bridging Continents</span>
          </h1>
          
          <p 
              data-aos="fade-up"
             data-aos-duration="500"
             data-aos-delay="200"
          className="text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed text-left sm:text-center">
            WorldLink Exports delivers comprehensive import and export solutions, 
            connecting businesses worldwide with seamless logistics and unmatched expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 ">
            <button
              onClick={() => setShowQuoteForm(true)}
              className="bg-[#199fb1] hover:bg-[#0d5c75] border-white border-2 hover:font-bold text-white px-5 py-[18px] rounded-lg text-lg font-semibold transition-all duration-1000  transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Request Free Quote
            </button>
            <button className="border-2 bg-[#199fb1]  text-white hover:bg-[#199fce] hover:text-[#002D62] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-1000 whitespace-nowrap cursor-pointer hover:scale-105">
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
</div>
      { showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center ">
          <div className="bg-white rounded-xl p-5 max-w-md w-full">
            <div className="flex items-center justify-between ">
              <h3 className="text-2xl font-bold text-[#002D62] mt-3  sm:mt-0">Request Quote</h3>
              <button
                onClick={clearForm}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer mt-3  sm:mt-0"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
             <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
              
              <input type="hidden" name="access_key" value="881b5b74-2a53-4d04-b485-2284ecf313ed"/>


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
                onClick={handleSubmit}
                disabled={Fields}
                className={`w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-4 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer  duration-1000 ${Fields?"opacity-20 cursor-not-allowed":"opacity-100"}`}
              >
                {isSubmitted ? 'Message Sent Successfully!' : 'Send Message'}
              </button>

            </form> 
            
                     </div>
        </div>
      )}
    </div>
  );
}