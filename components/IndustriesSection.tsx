
'use client';

export default function IndustriesSection() {
  const industries = [
    {
      icon: 'ri-plant-line',
      title: 'Agriculture',
      description: 'Farm products, organic foods, seeds, and agricultural equipment',
      stats: '$450M+ traded',
      image: 'images/Agriculture.jpeg'
    },
    {
      icon: 'ri-shirt-line',
      title: 'Textiles',
      description: 'Fabrics, garments, fashion accessories, and textile machinery',
      stats: '$320M+ traded',
      image: 'images/textile.jpg'
    },
    {
      icon: 'ri-computer-line',
      title: 'Electronics',
      description: 'Consumer electronics, components, and technology devices',
      stats: '$680M+ traded',
      image: 'images/electronics.jpg'
    },
    {
      icon: 'ri-tools-line',
      title: 'Machinery',
      description: 'Industrial equipment, manufacturing tools, and heavy machinery',
      stats: '$750M+ traded',
      image: 'images/machinery.jpg'
    }
  ];

  return (
    <section 
        data-aos="fade-left"
        data-aos-delay="100"
    className="py-10 bg-[#e1e8f0]" id="industries">
   
<div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#d2dfed] text-[#002D62] rounded-full text-sm font-medium mb-4 ">
            Industries We Serve
          </span>
          <h2 
          data-aos="fade-down"
          data-aos-delay="200"
          data_aos-duration="500"
          className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 text-center">
            Specialized Expertise Across Key Sectors
          </h2>
          <p
          data-aos="fade-up"
          data-aos-delay="300"
          data_aos-duration="500"
          className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Our deep industry knowledge and specialized solutions serve diverse sectors, 
            from traditional agriculture to cutting-edge technology.
          </p>
        </div>

        <div 
              data-aos="fade-down"
              data-aos-delay="100"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-1000 transform hover:-translate-y-2 group 
              hover:border-[#D4AF37] border-2  "
            >
              <div className="relative overflow-hidden ">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <i className={`${industry.icon} text-2xl text-[#002D62]`}></i>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#c7d9ed] group-hover:bg-[#98bfe9] transition-colors duration-300">
                <h3 className="text-2xl font-bold text-[#002D62] mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-sm font-semibold text-[#D4AF37]">{industry.stats}</span>
                  </div>
                  {/* <button className="text-[#002D62] hover:text-[#D4AF37] font-semibold text-sm transition-colors cursor-pointer">
                    Learn More →
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
         data-aos="fade-right"
        data-aos-delay="100"
        className="bg-[#d5e0ec] rounded-3xl p-8 ">
          <div
          className="text-center mb-12">
            <h3
             data-aos="fade-down"
        data-aos-delay="200"
            className="text-3xl font-bold text-[#002D62] mb-4 text-center">
              Don't See Your Industry?
            </h3>
            <p
             data-aos="fade-down"
        data-aos-delay="100"
            className="text-lg text-gray-600 max-w-2xl mx-auto text-left">
              We work across numerous other sectors including automotive, chemicals, pharmaceuticals, 
              and renewable energy. Our adaptable solutions can be tailored to any industry.
            </p>
          </div>

          <div 
          data-aos="fade-down"
          data-aos-delay="200"
          data_aos-duration="500"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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
              <h4 className="font-semibold text-[#002D62] w-[90%] break-words">Pharmaceuticals</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#002D62]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl text-[#002D62]"></i>
              </div>
              <h4 className="font-semibold text-[#002D62]">Renewable Energy</h4>
            </div>
          </div>

    
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  <button className="bg-[#9dc4f0] hover:bg-[#82aad7] text-[#002D62] border-2 border-black
    py-4 rounded-lg font-bold whitespace-nowrap cursor-pointer transition-all duration-500 hover:text-white transform hover:scale-105 w-full sm:w-48 text-sm sm:text-md ">
    Discuss Your Industry
  </button>
  <button className="border-2 border-[#002D62] text-[#002D62] bg-[#9dc4f0] hover:bg-[#82aad7] hover:text-white py-4 rounded-lg font-bold whitespace-nowrap cursor-pointer transition-all duration-500 transform hover:scale-105 w-full sm:w-48 ">
    View All Sectors
  </button>
</div>


        </div>
      </div>
    </section>
  );
}
