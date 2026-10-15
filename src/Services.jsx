import React from 'react';

export default function Services() {
  const serviceCards = [
    {
      title: "Healthy Ready-To-Eat Meals",
      description: "Fresh, balanced meals prepared daily and ready to enjoy anytime.",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "duration-[3000ms]"
    },
    {
      title: "Customized Meal Plans",
      description: "Personalized nutrition plans designed specifically for your individual goals.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "duration-[4000ms]"
    },
    {
      title: "Weight Management Plans",
      description: "Delicious meals carefully calculated to support weight loss or maintenance.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "duration-[3500ms]"
    },
    {
      title: "High Protein Meal Plans",
      description: "Nutrient-dense, protein-rich meals tailored for active lifestyles and fitness.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "duration-[4500ms]"
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 py-10 px-4 md:px-8">
      {/* Services Hero Section */}
      <section className="relative overflow-hidden max-w-[1200px] mx-auto mb-16">
        
        {/* Glassmorphism Outer Hero Box */}
        <div className="bg-[#f2f5f0]/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 lg:p-14 shadow-2xl relative z-10">
          
          {/* Animated Background Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#6b8c5a]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Content */}
            <div className="max-w-[480px]">
              <div className="text-xs text-[#4a5d3f] mb-2 font-bold tracking-widest uppercase">
                Our Services
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#2d3d27] mb-4 leading-[1.15] drop-shadow-sm">
                Healthy Meal Plans for
                <br />
                <span className="text-[#6b8c5a]">Every Lifestyle</span>
              </h1>
              
              <p className="text-[#555e50] text-sm lg:text-base mb-8 leading-relaxed">
                From ready-to-eat meals to customized nutrition plans, we offer 
                a variety of healthy food solutions tailored to your specific 
                dietary needs, fitness goals, and lifestyle preferences.
              </p>
              
              {/* Feature Tags */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#4a5d3f] flex items-center justify-center shadow-md shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#2d3d27] text-xs lg:text-sm font-semibold">Flexible Meal Plans</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#4a5d3f] flex items-center justify-center shadow-md shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#2d3d27] text-xs lg:text-sm font-semibold">Expert Nutrition Guidance</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#4a5d3f] flex items-center justify-center shadow-md shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#2d3d27] text-xs lg:text-sm font-semibold">Convenient Delivery</span>
                </div>
              </div>
              
              {/* Button */}
              <div>
                <button className="bg-[#4a5d3f] hover:bg-[#3b4c32] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95">
                  View All Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Column Image with Animation */}
            <div className="relative">
              {/* Floating Shape Animations */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#f2f5f0]/60 backdrop-blur-sm rounded-full border border-white/60 shadow-lg animate-bounce duration-[4000ms] pointer-events-none z-0" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4a5d3f]/10 backdrop-blur-md rounded-3xl border border-white/40 shadow-lg animate-pulse z-0" />

              <div className="relative w-full h-[380px] lg:h-[460px] z-10 group overflow-hidden rounded-3xl shadow-2xl border border-white/80">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Variety of healthy meal plans" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Bouncing Glass Badge */}
                <div className="absolute bottom-6 right-6 bg-[#f2f5f0]/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/80 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 text-white bg-[#4a5d3f] rounded-xl flex items-center justify-center shadow-md">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2d3d27]">Meal Planning</div>
                      <div className="text-[11px] font-semibold text-[#6b7565]">Made Simple</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section className="max-w-[1200px] mx-auto py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2d3d27] mb-3 drop-shadow-sm">
            Our Meal Plan Options
          </h2>
          <p className="text-[#555e50] text-base lg:text-lg max-w-2xl mx-auto font-medium">
            Choose from our range of carefully crafted meal plans designed to meet your specific health and lifestyle goals.
          </p>
        </div>
        
        {/* Dark Glassmorphism Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((service, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#2d3d27]/85 backdrop-blur-lg hover:bg-[#2d3d27]/95 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between`}
            >
              {/* Image Container with Hover Scale */}
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Dark Overlay Gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d3d27]/90 via-transparent to-transparent" />
              </div>

              {/* Card Body - High-Contrast Dark Glass Styling */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#a8cb97] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-xs leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Animated Arrow Button */}
                <div className="flex justify-end pt-2 border-t border-white/10">
                  <button 
                    aria-label={`Explore ${service.title}`}
                    className="w-9 h-9 bg-white/20 hover:bg-[#6b8c5a] text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}