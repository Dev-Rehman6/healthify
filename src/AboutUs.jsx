import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen font-sans text-gray-800 py-10 px-4 md:px-8">
      {/* About Us Section */}
      <section className="relative overflow-hidden max-w-[1200px] mx-auto">
        
        {/* Glassmorphism Outer Container */}
        <div className="bg-[#f2f5f0]/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 lg:p-14 shadow-2xl relative z-10">
          
          {/* Animated Background Decorative Circles */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#6b8c5a]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Left Column - Animated Complex Image Layout */}
            <div className="relative">
              
              {/* Floating Geometry Elements Behind Image */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-md animate-bounce duration-[5000ms] z-0" />
              <div className="absolute -bottom-6 -right-4 w-28 h-28 rounded-3xl bg-[#4a5d3f]/10 backdrop-blur-md border border-white/40 shadow-lg animate-pulse z-0" />

              <div className="relative w-full h-[400px] lg:h-[480px] z-10 group">
                {/* Main food bowl image with smooth hover scale */}
                <div className="w-full h-full overflow-hidden rounded-3xl shadow-2xl border border-white/80">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Healthy meal bowl with fresh ingredients" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
               
                {/* Small overlay image with smooth floating motion */}
                <div className="absolute -bottom-6 left-6 w-36 h-28 lg:w-44 lg:h-32 z-20 animate-[bounce_6s_infinite] transition-transform duration-300 hover:scale-105">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeyYAjXghvXrXQVG3Mpn-9lUasW3awmnQxJ9s8omAbA&s=10"
                    alt="Hands preparing fresh food" 
                    className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-white/90"
                  />
                </div>
                
                {/* Floating "Nourishing Lives Daily" glass card */}
                <div className="absolute top-6 right-6 bg-[#f2f5f0]/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/80 z-20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 text-white bg-[#4a5d3f] rounded-xl flex items-center justify-center shadow-md">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2d3d27]">Nourishing</div>
                      <div className="text-[11px] font-semibold text-[#6b7565]">Lives Daily</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Right Column - Text & Feature Highlights */}
            <div className="max-w-[500px]">
              <div className="text-xs text-[#4a5d3f] mb-2 font-bold tracking-widest uppercase">
                About Healthify
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#2d3d27] mb-4 leading-[1.15] drop-shadow-sm">
                Your Trusted Healthy
                <br />
                <span className="text-[#6b8c5a]">Food Partner</span>
              </h1>
              
              <p className="text-[#555e50] text-sm lg:text-base mb-8 leading-relaxed">
                At Healthify, we believe healthy eating should be convenient, 
                affordable, and enjoyable. Based in Dubai, we prepare fresh, 
                balanced meals using high-quality ingredients to help individuals 
                and families achieve their health goals without sacrificing taste.
              </p>
              
              {/* Features List with Icons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#4a5d3f] flex items-center justify-center shadow-md shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#2d3d27] text-xs lg:text-sm font-semibold">Freshly Prepared Daily</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#4a5d3f] flex items-center justify-center shadow-md shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#2d3d27] text-xs lg:text-sm font-semibold">Balanced Nutrition</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#4a5d3f] flex items-center justify-center shadow-md shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#2d3d27] text-xs lg:text-sm font-semibold">Great Taste</span>
                </div>
              </div>
              
              {/* Call-to-Action Button */}
              <div>
                <button className="bg-[#4a5d3f] hover:bg-[#3b4c32] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95">
                  More About Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}