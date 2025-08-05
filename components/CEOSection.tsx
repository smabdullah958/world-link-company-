
'use client';

export default function CEOSection() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20confident%20CEO%20executive%20in%20elegant%20business%20suit%20standing%20in%20modern%20office%20with%20global%20map%20background%2C%20representing%20international%20trade%20leadership%2C%20sophisticated%20corporate%20portrait%20with%20warm%20professional%20lighting%20and%20authoritative%20presence&width=500&height=600&seq=ceo-portrait&orientation=portrait"
                  alt="CEO Portrait"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#002D62]/10 rounded-full blur-3xl"></div>
            </div>

            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#002D62]/10 text-[#002D62] rounded-full text-sm font-medium">
                  Leadership Message
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6">
                Meet Our CEO
              </h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">Michael Chen Rodriguez</h3>
                <p className="text-lg text-gray-600 mb-6">Chief Executive Officer & Founder</p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                      <i className="ri-graduation-cap-line text-[#D4AF37] text-sm"></i>
                    </div>
                    <span className="text-sm text-gray-600">MBA International Business</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                      <i className="ri-time-line text-[#D4AF37] text-sm"></i>
                    </div>
                    <span className="text-sm text-gray-600">30+ Years Experience</span>
                  </div>
                </div>
              </div>

              <blockquote className="relative mb-8">
                <div className="absolute -top-4 -left-4 w-12 h-12 text-[#D4AF37]/20">
                  <i className="ri-double-quotes-l text-4xl"></i>
                </div>
                <p className="text-lg text-gray-700 italic leading-relaxed pl-8">
                  "In today's interconnected world, success in global trade isn't just about moving goods – 
                  it's about building bridges between cultures, economies, and opportunities. At WorldLink Exports, 
                  we don't just facilitate transactions; we create lasting partnerships that drive mutual growth 
                  and prosperity across continents."
                </p>
              </blockquote>

              <div className="space-y-4">
                <p className="text-gray-600">
                  With over three decades of experience in international trade, Michael has led WorldLink Exports 
                  from a small regional firm to a globally recognized leader in import-export solutions. His vision 
                  has guided the company through major economic shifts while maintaining our core values of integrity, 
                  innovation, and excellence.
                </p>
                
                <p className="text-gray-600">
                  Under his leadership, the company has expanded to 45+ countries, established partnerships with 
                  Fortune 500 companies, and pioneered several industry-first digital trade solutions.
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <a href="#" className="w-10 h-10 bg-[#002D62] hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-white text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-[#002D62] hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white text-lg"></i>
                </a>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <i className="ri-mail-line text-[#D4AF37]"></i>
                  <span>m.rodriguez@worldlinkexports.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
