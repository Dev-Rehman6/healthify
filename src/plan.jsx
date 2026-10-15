import React from 'react';
import { Leaf, Star, BarChart2, Check, ArrowRight } from 'lucide-react';

export default function GrowthPlans() {
  const plans = [
    {
      name: 'Essential Plan',
      description: 'Great for individuals starting their healthy journey.',
      price: '299',
      unit: '/ month',
      icon: <Leaf className="w-5 h-5 text-[#4a5d3f] group-hover:text-[#a8cb97] transition-colors" />,
      badge: null,
      isPopular: false,
      features: [
        'Fresh daily meals',
        'Balanced nutrition',
        'Flexible delivery',
      ],
      buttonText: 'Get Started',
    },
    {
      name: 'Balanced Plan',
      description: 'Our best value plan for a healthier lifestyle.',
      price: '499',
      unit: '/ month',
      icon: <Star className="w-5 h-5 text-[#4a5d3f] group-hover:text-[#a8cb97] fill-[#4a5d3f]/20 group-hover:fill-[#a8cb97]/30 transition-colors" />,
      badge: 'MOST POPULAR ★',
      isPopular: true,
      features: [
        'Customized meal options',
        'Wide variety of meals',
        'Nutritionist support',
        'Flexible delivery',
      ],
      buttonText: 'Get Started',
    },
    {
      name: 'Performance Plan',
      description: 'For fitness enthusiasts and active lifestyles.',
      price: '699',
      unit: '/ month',
      icon: <BarChart2 className="w-5 h-5 text-[#4a5d3f] group-hover:text-[#a8cb97] transition-colors" />,
      badge: null,
      isPopular: false,
      features: [
        'High-protein meals',
        'Performance-focused nutrition',
        'Personalized plans',
        'Priority support',
      ],
      buttonText: 'Get Started',
    },
  ];

  return (
    <section className="py-10 px-4 md:px-8 font-sans">
      {/* Outer Glassmorphism Container */}
      <div className="max-w-[1200px] mx-auto bg-[#f2f5f0]/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Animated Background Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#4a5d3f]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 relative z-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#4a5d3f] uppercase block mb-1">
              GROWTH PLANS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2d3d27] drop-shadow-sm">
              Find the Perfect Plan for You
            </h2>
          </div>
          <a
            href="#view-all"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4a5d3f] hover:text-[#2d3d27] transition-colors group"
          >
            <span>View All Plans</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Content Grid: 3 Dynamic Hover Pricing Cards + 1 Image Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">
          
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-[#f2f5f0] hover:bg-[#2d3d27] backdrop-blur-md rounded-3xl border transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl cursor-pointer ${
                plan.isPopular
                  ? 'border-[#4a5d3f] ring-2 ring-[#4a5d3f]/30'
                  : 'border-white/80 hover:border-[#6b8c5a]/60'
              }`}
            >
              {/* Popular Top Bar */}
              {plan.badge && (
                <div className="bg-[#4a5d3f] group-hover:bg-[#6b8c5a] text-white text-[11px] font-bold tracking-widest uppercase py-2 text-center shadow-sm transition-colors duration-500">
                  {plan.badge}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/80 group-hover:bg-white/10 flex items-center justify-center shrink-0 shadow-sm border border-white/90 group-hover:border-white/20 group-hover:rotate-6 transition-all duration-500">
                    {plan.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#2d3d27] group-hover:text-white transition-colors duration-500">
                    {plan.name}
                  </h3>
                </div>

                {/* Subtitle */}
                <p className="text-xs text-[#6b7565] group-hover:text-gray-300 leading-relaxed mb-6 font-medium min-h-[36px] transition-colors duration-500">
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-xs font-bold text-[#2d3d27] group-hover:text-[#a8cb97] transition-colors duration-500">AED</span>
                  <span className="text-3xl font-black text-[#2d3d27] group-hover:text-white transition-colors duration-500">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#6b7565] group-hover:text-gray-300 font-semibold transition-colors duration-500">{plan.unit}</span>
                </div>

                {/* Feature Check List */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#4a5d3f] group-hover:bg-[#a8cb97] flex items-center justify-center shrink-0 shadow-xs transition-colors duration-500">
                        <Check className="w-2.5 h-2.5 text-white group-hover:text-[#2d3d27] stroke-[3] transition-colors duration-500" />
                      </div>
                      <span className="text-xs text-[#3b4536] group-hover:text-gray-200 font-semibold transition-colors duration-500">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-500 cursor-pointer shadow-md active:scale-95 ${
                    plan.isPopular
                      ? 'bg-[#4a5d3f] group-hover:bg-[#a8cb97] text-white group-hover:text-[#2d3d27] shadow-lg'
                      : 'bg-white/80 group-hover:bg-white text-[#2d3d27] group-hover:text-[#2d3d27] border border-white/90'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}

          {/* Right Promotional Feature Card */}
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] shadow-xl flex flex-col justify-end p-6 group border border-white/80">
            {/* Background Image with Hover Scale */}
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
              alt="Healthy meal bowl"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            {/* Dark Gradient Overlay for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d3d27]/90 via-[#2d3d27]/40 to-transparent" />

            {/* Floating Graphic Element inside Image Card */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 animate-bounce duration-[4000ms] pointer-events-none" />

            {/* Content Inside Image Card */}
            <div className="relative z-10 text-white">
              <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mb-3 shadow-md">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black leading-tight mb-2 drop-shadow-md">
                Invest in <br /> a Healthier <br /> You
              </h3>
              <div className="w-12 h-1 bg-[#a8cb97] rounded-full mt-3 transition-all duration-500 group-hover:w-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}