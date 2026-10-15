import React from 'react';
import AboutUs from './AboutUs';
import Services from './Services';
import Advantage from './advantage';
import Plan from './plan';
import Blog from './blog';
import Contact from './contact';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-10 px-4 md:px-8">
        {/* Main Hero Glass Card Container */}
        <div className="max-w-[1200px] mx-auto bg-[#f2f5f0]/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 lg:p-14 shadow-2xl relative z-10 overflow-hidden">
          
          {/* Animated Background Geometry Shape (Top Circle) */}
          <div className="absolute -top-10 right-1/3 w-40 h-40 rounded-full bg-white/30 backdrop-blur-md animate-[spin_12s_linear_infinite] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="max-w-[480px]">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2d3d27] mb-4 leading-[1.1] drop-shadow-sm">
                Healthy Meals
                <br />
                <span className="text-[#6b8c5a]">Happier Lives</span>
              </h1>
              
              <p className="text-base lg:text-lg text-[#5d6857] mb-3 font-semibold">
                Fresh. Nutritious. Convenient. Delivered to You.
              </p>
              
              <p className="text-[#555e50] text-sm lg:text-base mb-8 leading-relaxed">
                At Healthify, we make healthy eating simple and enjoyable with 
                chef-prepared meals, customized plans and a commitment to 
                your wellness goals.
              </p>
              
              {/* Hero Buttons */}
              <div className="flex gap-4 mb-8">
                <button className="bg-[#4a5d3f] hover:bg-[#3b4c32] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95">
                  Explore Meal Plans
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
                <button className="border border-[#dce3d8] bg-[#f2f5f0]/90 text-[#4a5d3f] hover:bg-[#e4ebd0] px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md active:scale-95">
                  Learn More
                </button>
              </div>
              
              {/* Feature Checkmarks */}
              <div className="flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#4a5d3f] flex items-center justify-center shadow-md">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#3b4536] text-sm font-semibold">Fresh Ingredients</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#4a5d3f] flex items-center justify-center shadow-md">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#3b4536] text-sm font-semibold">Nutritionist Approved</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#4a5d3f] flex items-center justify-center shadow-md">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-[#3b4536] text-sm font-semibold">Delivered to Your Door</span>
                </div>
              </div>
            </div>
            
            {/* Right Column: Hero Image with Geometric Floating Animations */}
            <div className="relative flex justify-center items-center">
              
              {/* ANIMATED GEOMETRY: Floating Circle (Top Left) */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f2f5f0]/60 backdrop-blur-sm rounded-full border border-white/60 shadow-lg animate-bounce duration-[4000ms] pointer-events-none z-0" />
              
              {/* ANIMATED GEOMETRY: Floating Soft Rectangle (Right Side) */}
              <div className="absolute -right-8 bottom-4 w-32 h-56 bg-[#f2f5f0]/50 backdrop-blur-md rounded-3xl border border-white/50 shadow-xl animate-pulse duration-[3000ms] pointer-events-none z-0" />

              {/* Main Image Container */}
              <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[460px] z-10 group">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"
                  alt="Healthy food bowl" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                />
                
                {/* Floating Card: Top Right "Good Food" - EXACT COLOR MATCH */}
                <div className="absolute top-4 right-4 bg-[#f2f5f0]/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-white/80 animate-[bounce_5s_infinite]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-[#4a5d3f] rounded-full animate-ping"></div>
                    <span className="text-xs font-bold text-[#2d3d27]">Good Food</span>
                  </div>
                  <div className="text-[11px] font-medium text-[#6b7565] mt-0.5">Brighter You</div>
                </div>
                
                {/* Floating Card: Bottom Right "Nutritious Meals" - EXACT COLOR MATCH */}
                <div className="absolute bottom-6 right-6 bg-[#f2f5f0]/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/80 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 text-white flex items-center justify-center bg-[#4a5d3f] rounded-xl">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2d3d27]">Nutritious Meals</div>
                      <div className="text-[11px] font-medium text-[#6b7565]">A Healthier Tomorrow</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      
     {/* Stats Section with Dynamic Dark Green Hover Transition */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1M+ Meals Delivered */}
            <div className="group flex items-center gap-4 bg-[#f2f5f0] hover:bg-[#2d3d27] rounded-2xl p-5 shadow-lg border border-white/60 hover:border-[#6b8c5a]/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a5d3f] group-hover:bg-[#a8cb97] text-white group-hover:text-[#2d3d27] rounded-xl shadow-md shrink-0 transition-all duration-500 group-hover:rotate-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-black text-[#2d3d27] group-hover:text-white transition-colors duration-500">1M+</div>
                <div className="text-xs font-semibold text-[#6b7565] group-hover:text-gray-300 transition-colors duration-500">Meals Delivered</div>
              </div>
            </div>
            
            {/* 30K+ Happy Customers */}
            <div className="group flex items-center gap-4 bg-[#f2f5f0] hover:bg-[#2d3d27] rounded-2xl p-5 shadow-lg border border-white/60 hover:border-[#6b8c5a]/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a5d3f] group-hover:bg-[#a8cb97] text-white group-hover:text-[#2d3d27] rounded-xl shadow-md shrink-0 transition-all duration-500 group-hover:rotate-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-black text-[#2d3d27] group-hover:text-white transition-colors duration-500">30K+</div>
                <div className="text-xs font-semibold text-[#6b7565] group-hover:text-gray-300 transition-colors duration-500">Happy Customers</div>
              </div>
            </div>
            
            {/* 4.8/5 Customer Satisfaction */}
            <div className="group flex items-center gap-4 bg-[#f2f5f0] hover:bg-[#2d3d27] rounded-2xl p-5 shadow-lg border border-white/60 hover:border-[#6b8c5a]/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a5d3f] group-hover:bg-[#a8cb97] text-white group-hover:text-[#2d3d27] rounded-xl shadow-md shrink-0 transition-all duration-500 group-hover:rotate-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-black text-[#2d3d27] group-hover:text-white transition-colors duration-500">4.8/5</div>
                <div className="text-xs font-semibold text-[#6b7565] group-hover:text-gray-300 transition-colors duration-500">Customer Satisfaction</div>
              </div>
            </div>
            
            {/* 550+ Corporate Clients */}
            <div className="group flex items-center gap-4 bg-[#f2f5f0] hover:bg-[#2d3d27] rounded-2xl p-5 shadow-lg border border-white/60 hover:border-[#6b8c5a]/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a5d3f] group-hover:bg-[#a8cb97] text-white group-hover:text-[#2d3d27] rounded-xl shadow-md shrink-0 transition-all duration-500 group-hover:rotate-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1-.9-2-2-2s-2 .9-2 2V18H4zM13 12.5c0-1.1-.9-2-2-2s-2 .9-2 2V18h4v-5.5zM20 18v-4h-3v4h-2v-7.5c0-1.1.9-2 2-2s2 .9 2 2V18h1z"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-black text-[#2d3d27] group-hover:text-white transition-colors duration-500">550+</div>
                <div className="text-xs font-semibold text-[#6b7565] group-hover:text-gray-300 transition-colors duration-500">Corporate Clients</div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Remaining Page Sections */}
      <section id="about" className="relative"><AboutUs /></section>
      <section id="services" className="relative"><Services /></section>
      <section id="advantages" className="relative"><Advantage /></section>
      <section id="plans" className="relative"><Plan /></section>
      <section id="blogs" className="relative"><Blog /></section>
      <section id="contact" className="relative"><Contact /></section>
    </div>
  );
}