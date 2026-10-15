import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="font-sans text-white relative">
      {/* TOP CTA BANNER WITH NATURE BACKGROUND & GLASS CARD */}
      <div className="relative overflow-hidden py-16 px-4 md:px-8 min-h-[240px] flex items-center justify-center">
        {/* Background Image with Dark Overlay */}
        <img
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1600"
          alt="Fresh green leaves background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2d3d27]/75 backdrop-blur-xs" />

        {/* Floating Glass Container */}
        <div className="relative z-10 max-w-[1200px] w-full mx-auto bg-white/10 backdrop-blur-md border border-white/25 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-white/40 transition-all duration-500">
          <div className="max-w-2xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#a8cb97] uppercase block mb-2">
              READY TO START?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight drop-shadow-sm">
              Transform Your Health, One Meal At A Time
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 font-medium">
              Fresh. Nutritious. Convenient. Join thousands of happy customers today.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 bg-[#a8cb97] hover:bg-white text-[#2d3d27] text-xs font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer shrink-0 group">
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* MAIN DARK GREEN FOOTER */}
      <div className="bg-[#1f2b1b] pt-16 pb-8 px-4 md:px-8 relative border-t border-white/10">
        <div className="max-w-[1200px] mx-auto">
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
            
            {/* Column 1: Brand Logo & About */}
            <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
              {/* Logo / Brand */}
              <div className="mb-4">
                <span className="block text-xs text-[#a8cb97] font-bold tracking-widest leading-none mb-1">
                  صحتفي
                </span>
                <span className="text-2xl font-black tracking-widest text-white uppercase font-sans">
                  HEALTHIFY
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mb-6 font-medium max-w-sm">
                At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable for everyone.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#a8cb97] hover:text-[#1f2b1b] transition-all duration-300 shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#x" aria-label="X (Twitter)" className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#a8cb97] hover:text-[#1f2b1b] transition-all duration-300 font-bold text-xs shadow-sm">
                  X
                </a>
                <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#a8cb97] hover:text-[#1f2b1b] transition-all duration-300 shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.418c-.807.875-1.958 1.418-3.255 1.418s-2.448-.543-3.255-1.418c-.875-.807-1.418-1.958-1.418-3.255s.543-2.448 1.418-3.255c.807-.875 1.958-1.418 3.255-1.418s2.448.543 3.255 1.418c.875.807 1.418 1.958 1.418 3.255s-.543 2.448-1.418 3.255z"/>
                  </svg>
                </a>
                <a href="#youtube" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#a8cb97] hover:text-[#1f2b1b] transition-all duration-300 shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-[#a8cb97] uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
                <li><a href="#home" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Home</a></li>
                <li><a href="#about" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">About Us</a></li>
                <li><a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Our Services</a></li>
                <li><a href="#advantages" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Advantages</a></li>
                <li><a href="#plans" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Growth Plans</a></li>
                <li><a href="#blogs" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Blogs</a></li>
                <li><a href="#contact" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-[#a8cb97] uppercase tracking-wider mb-4">Our Services</h4>
              <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
                <li><a href="#service1" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Healthy ready-to-eat meals</a></li>
                <li><a href="#service2" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Customized meal plans</a></li>
                <li><a href="#service3" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Weight management meal</a></li>
                <li><a href="#service4" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">High-protein meal plans</a></li>
                <li><a href="#service5" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Corporate meal solutions</a></li>
                <li><a href="#service6" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Fitness and wellness nutrition</a></li>
                <li><a href="#service7" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">Healthy snacks and beverages</a></li>
              </ul>
            </div>

            {/* Column 4: Get In Touch */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-[#a8cb97] uppercase tracking-wider mb-4">Get In Touch</h4>
              <ul className="space-y-3.5 text-xs text-gray-300 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#a8cb97]" />
                  </div>
                  <span>Pakistan,Karachi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#a8cb97]" />
                  </div>
                  <span>+98123691326</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#a8cb97]" />
                  </div>
                  <span>info@healthify.ae</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider & Copyright */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 font-medium gap-4" >
            <p className="flex items-center gap-1">
              Copyright © 2026 Healthify. Made with <Heart className="w-3 h-3 text-emerald-400 fill-emerald-400" />
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Action Button with Pulse Effect */}
        <div className="fixed bottom-6 right-6 z-50">
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none"></span>
          <a
            href="https://wa.me/971502626144"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
            aria-label="Contact on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}