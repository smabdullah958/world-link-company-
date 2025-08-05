
'use client';

export default function IndustriesSection() {
  const industries = [
    {
      icon: 'ri-plant-line',
      title: 'Agriculture',
      description: 'Farm products, organic foods, seeds, and agricultural equipment',
      stats: '$450M+ traded',
      image: 'https://readdy.ai/api/search-image?query=Modern%20agricultural%20export%20facility%20with%20fresh%20organic%20produce%2C%20grains%20and%20farming%20equipment%20being%20prepared%20for%20international%20shipping%2C%20clean%20professional%20agricultural%20processing%20environment%20with%20global%20trade%20focus&width=400&height=300&seq=agriculture&orientation=landscape'
    },
    {
      icon: 'ri-shirt-line',
      title: 'Textiles',
      description: 'Fabrics, garments, fashion accessories, and textile machinery',
      stats: '$320M+ traded',
      image: 'https://readdy.ai/api/search-image?query=Professional%20textile%20manufacturing%20facility%20with%20high-quality%20fabrics%2C%20garments%20and%20fashion%20products%20being%20prepared%20for%20international%20export%2C%20modern%20textile%20industry%20with%20global%20trade%20operations&width=400&height=300&seq=textiles&orientation=landscape'
    },
    {
      icon: 'ri-computer-line',
      title: 'Electronics',
      description: 'Consumer electronics, components, and technology devices',
      stats: '$680M+ traded',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20electronics%20manufacturing%20and%20export%20facility%20with%20high-tech%20consumer%20devices%2C%20computer%20components%20and%20technology%20products%20in%20professional%20industrial%20setting%20for%20global%20trade&width=400&height=300&seq=electronics&orientation=landscape'
    },
    {
      icon: 'ri-tools-line',
      title: 'Machinery',
      description: 'Industrial equipment, manufacturing tools, and heavy machinery',
      stats: '$750M+ traded',
      image: 'https://readdy.ai/api/search-image?query=Industrial%20machinery%20export%20center%20with%20heavy%20equipment%2C%20manufacturing%20tools%20and%20industrial%20machinery%20being%20prepared%20for%20international%20shipping%2C%20professional%20heavy%20industry%20with%20global%20trade%20operations&width=400&height=300&seq=machinery&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#002D62]/10 text-[#002D62] rounded-full text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6">
            Specialized Expertise Across Key Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our deep industry knowledge and specialized solutions serve diverse sectors, 
            from traditional agriculture to cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <i className={`${industry.icon} text-2xl text-[#002D62]`}></i>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#002D62] mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-sm font-semibold text-[#D4AF37]">{industry.stats}</span>
                  </div>
                  <button className="text-[#002D62] hover:text-[#D4AF37] font-semibold text-sm transition-colors cursor-pointer">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#002D62] mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work across numerous other sectors including automotive, chemicals, pharmaceuticals, 
              and renewable energy. Our adaptable solutions can be tailored to any industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#002D62]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-car-line text-2xl text-[#002D62]"></i>
              </div>
              <h4 className="font-semibold text-[#002D62]">Automotive</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#002D62]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-flask-line text-2xl text-[#002D62]"></i>
              </div>
              <h4 className="font-semibold text-[#002D62]">Chemicals</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#002D62]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-capsule-line text-2xl text-[#002D62]"></i>
              </div>
              <h4 className="font-semibold text-[#002D62]">Pharmaceuticals</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#002D62]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl text-[#002D62]"></i>
              </div>
              <h4 className="font-semibold text-[#002D62]">Renewable Energy</h4>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer mr-4">
              Discuss Your Industry
            </button>
            <button className="border-2 border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              View All Sectors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
