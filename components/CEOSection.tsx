
'use client';
import Image from 'next/image';
export default function CEOSection() {
  return (
    <section
    data-aos="fade-left"
    data-aos-delay="200"
    className="p-10  bg-[#F8F9FA] text-justify">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10">
                <Image
                data-aos="zoom-in"
                data-aos-delay="200"
                  src="/images/image2.jpeg"
                  alt="CEO Portrait"
                  width={100}
                  height={100}
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover object-top
                  transform transition-transform duration-700 hover:scale-105"
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
              
              <h2
            data-aos="fade-up" data-aos-delay="100"
              className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6">
                Meet Our CEO
              </h2>
              
              <div className="mb-8">
                <h3 
                data-aos="fade-up" data-aos-delay="200"
                className="text-2xl font-bold text-[#D4AF37] mb-2">USAMA BIN MUJEEB</h3>
                <p 
                data-aos="fade-up" data-aos-delay="300"
                className="text-lg text-gray-600 mb-6">Chief Executive Officer & Founder</p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex flex-wrap items-center space-x-2">
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
                <p 
                data-aos="fade-right" data-aos-delay="400" 
                className="text-lg text-gray-700 italic leading-relaxed pl-8 text-justify">
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
                  Fortune 500 companies, and pioneered seve ral industry-first digital trade solutions.
                </p>
              </div>

              <div className="flex space-x-4 mt-8 flex-wrap">
                <a target="_blank" href="https://www.linkedin.com/in/usama-bin-mujeeb-957510258/"
                 className="w-10 h-10 bg-[#002D62] hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:transition-all hover:duration-500">
                  <i className="ri-linkedin-fill text-white text-lg  "></i>
                </a>
                <a href="#" className="w-10 h-10 bg-[#002D62] hover:bg-[#D4AF37] rounded-lg flex items-center justify-center cursor-pointer hover:transition-all hover:duration-500">
                  <i className="ri-twitter-fill text-white text-lg"></i>
                </a>
                <div className="break-all space-x-2 pt-2 text-sm text-gray-600 ">
                  <i className="ri-mail-line text-[#D4AF37] "></i>
                  <span>usama mujeeb @gmail.com</span>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
