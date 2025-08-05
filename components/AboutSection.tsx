

'use client';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium">
                About WorldLink Exports
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-8 leading-tight">
              Global Trade Excellence Since 1995
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For nearly three decades, WorldLink Exports has been at the forefront of international trade, 
              connecting businesses across continents with reliable, efficient, and innovative logistics solutions. 
              We've facilitated over $2.5 billion in global trade transactions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-eye-line text-[#D4AF37] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002D62] mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the world's most trusted bridge in global trade, enabling seamless 
                    commerce between nations and fostering economic growth worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-target-line text-[#D4AF37] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002D62] mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To deliver exceptional import-export solutions through innovative technology, 
                    expert knowledge, and unwavering commitment to client success.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-award-line text-[#D4AF37] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002D62] mb-2">Our Experience</h3>
                  <p className="text-gray-600">
                    With operations in 45+ countries and partnerships with leading global carriers, 
                    we bring unmatched expertise to every trade transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20international%20business%20office%20with%20professionals%20working%20on%20global%20trade%20documents%20and%20logistics%20planning%2C%20clean%20workspace%20with%20computers%20showing%20shipping%20data%2C%20professional%20lighting%20and%20contemporary%20design&width=300&height=200&seq=about-1&orientation=landscape"
                  alt="Global trade operations"
                  className="w-full h-48 object-cover rounded-xl shadow-lg object-top"
                />
                <div className="bg-[#002D62] text-white p-6 rounded-xl">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">45+</div>
                  <div className="text-sm">Countries Served</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-[#D4AF37] text-white p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">$2.5B+</div>
                  <div className="text-sm">Trade Volume</div>
                </div>
                <img
                  src="https://readdy.ai/api/search-image?query=International%20cargo%20terminal%20with%20shipping%20containers%20being%20loaded%20onto%20freight%20vessels%2C%20industrial%20port%20operations%20with%20cranes%20and%20logistics%20equipment%2C%20representing%20global%20export%20business%20efficiency&width=300&height=200&seq=about-2&orientation=landscape"
                  alt="Container operations"
                  className="w-full h-48 object-cover rounded-xl shadow-lg object-top"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#002D62]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
