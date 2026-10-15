import React from 'react';
import { Diamond, Heart, Truck, Leaf, ArrowRight } from 'lucide-react';

export default function WhyChooseHealthify() {
  const advantages = [
    {
      icon: <Diamond className="w-6 h-6 text-[#4a5d3f] group-hover:text-[#a8cb97] transition-all duration-500 group-hover:scale-110" />,
      title: "Premium Quality",
      description: "High-quality, fresh ingredients"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#4a5d3f] group-hover:text-[#a8cb97] transition-all duration-500 group-hover:scale-110" />,
      title: "Health Focused",
      description: "Nutritionist designed meals"
    },
    {
      icon: <Truck className="w-6 h-6 text-[#4a5d3f] group-hover:text-[#a8cb97] transition-all duration-500 group-hover:scale-110" />,
      title: "Convenient Delivery",
      description: "To your home or office"
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#4a5d3f] group-hover:text-[#a8cb97] transition-all duration-500 group-hover:scale-110" />,
      title: "Flexible Plans",
      description: "Options for every dietary need"
    }
  ];

  return (
    <section className="py-10 px-4 md:px-8 font-sans">
      {/* Outer Glassmorphism Container */}
      <div className="max-w-[1200px] mx-auto bg-[#f2f5f0]/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Animated Background Geometry Shapes */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/40 blur-2xl animate-pulse pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-[#4a5d3f]/10 blur-3xl animate-pulse pointer-events-none" />

        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 relative z-10">
          
          {/* Left Content Area */}
          <div className="w-full xl:w-4/12 flex flex-col items-start text-left">
            <span className="text-xs font-bold tracking-widest text-[#4a5d3f] uppercase mb-2">
              OUR ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2d3d27] mb-4 leading-tight drop-shadow-sm">
              Why Choose <br />
              <span className="text-[#6b8c5a]">Healthify</span>
            </h2>
            <p className="text-[#555e50] text-sm md:text-base mb-8 leading-relaxed max-w-md font-medium">
              More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#4a5d3f] hover:bg-[#3b4c32] text-white font-bold py-3.5 px-7 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer">
              <span>Discover All Advantages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Cards Grid (Dark Green Hover Color Transition Applied) */}
          <div className="w-full xl:w-8/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((item, index) => (
              <div 
                key={index} 
                className="group bg-[#f2f5f0] hover:bg-[#2d3d27] p-6 rounded-3xl shadow-lg border border-white/80 hover:border-[#6b8c5a]/60 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 flex flex-col items-start justify-between min-h-[220px] cursor-pointer"
              >
                {/* Icon Badge Container */}
                <div className="w-12 h-12 rounded-2xl bg-white/80 group-hover:bg-[#a8cb97]/20 flex items-center justify-center mb-6 shadow-sm border border-white/90 group-hover:border-white/20 group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>
              
                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-bold text-[#2d3d27] group-hover:text-white mb-2 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6b7565] group-hover:text-gray-300 leading-relaxed font-semibold transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}