import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-[#4a5d3f]" />,
      title: "Email Us",
      value: "support@healthify.com",
      subtext: "We usually reply within 2 hours"
    },
    {
      icon: <Phone className="w-5 h-5 text-[#4a5d3f]" />,
      title: "Call Us",
      value: "+971 4 123 4567",
      subtext: "Mon-Sat from 8am to 8pm"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#4a5d3f]" />,
      title: "Visit Us",
      value: "Downtown Dubai, UAE",
      subtext: "Business Bay Tower, Office 1402"
    },
    {
      icon: <Clock className="w-5 h-5 text-[#4a5d3f]" />,
      title: "Working Hours",
      value: "Sunday – Friday",
      subtext: "08:00 AM – 09:00 PM GST"
    }
  ];

  return (
    <section className="font-sans text-[#2d3d27] py-10 px-4 md:px-8">
      {/* Outer Glassmorphism Container */}
      <div className="max-w-[1200px] mx-auto bg-[#f2f5f0]/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 lg:p-14 shadow-2xl relative overflow-hidden space-y-12">
        
        {/* Animated Background Geometry Elements */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#4a5d3f]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-widest text-[#4a5d3f] uppercase block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2d3d27] leading-tight mb-4 drop-shadow-sm">
            We’d Love to Hear <br />
            <span className="text-[#6b8c5a]">From You</span>
          </h2>
          <p className="text-sm md:text-base text-[#5d6857] leading-relaxed font-medium">
            Have questions about our meal plans, delivery, or custom nutrition options? Drop us a message or get in touch below.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
       

        {/* Form and Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">
          
          {/* Left Side: Contact Form with Glassmorphism */}
          <div className="lg:col-span-7 bg-[#f2f5f0]/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/80 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-[#2d3d27] mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs md:text-sm text-[#5d6857] mb-8 font-medium">
                Fill out the form below and our team will reach out to you shortly.
              </p>

              {submitted ? (
                <div className="bg-white/80 border border-[#4a5d3f]/30 p-8 rounded-2xl text-center space-y-3 my-6 animate-fadeIn shadow-sm">
                  <CheckCircle2 className="w-12 h-12 text-[#4a5d3f] mx-auto animate-bounce" />
                  <h4 className="text-lg font-extrabold text-[#2d3d27]">Thank You!</h4>
                  <p className="text-xs text-[#5d6857] font-medium">
                    Your message has been sent successfully. We will get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#4a5d3f] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#3b4536] uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/80 border border-white/90 rounded-xl px-4 py-3 text-sm text-[#2d3d27] placeholder-gray-400 focus:outline-none focus:border-[#4a5d3f] focus:ring-1 focus:ring-[#4a5d3f] transition-all shadow-xs"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#3b4536] uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/80 border border-white/90 rounded-xl px-4 py-3 text-sm text-[#2d3d27] placeholder-gray-400 focus:outline-none focus:border-[#4a5d3f] focus:ring-1 focus:ring-[#4a5d3f] transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-[#3b4536] uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="e.g. Question about Meal Plans"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/80 border border-white/90 rounded-xl px-4 py-3 text-sm text-[#2d3d27] placeholder-gray-400 focus:outline-none focus:border-[#4a5d3f] focus:ring-1 focus:ring-[#4a5d3f] transition-all shadow-xs"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#3b4536] uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/80 border border-white/90 rounded-xl px-4 py-3 text-sm text-[#2d3d27] placeholder-gray-400 focus:outline-none focus:border-[#4a5d3f] focus:ring-1 focus:ring-[#4a5d3f] transition-all resize-none shadow-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#4a5d3f] hover:bg-[#3b4c32] text-white text-xs font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer w-full md:w-auto"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Side: Visual Banner with Animated Glass Elements */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between p-8 text-white min-h-[420px] group border border-white/80">
            {/* Background Image with Hover Zoom */}
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800"
              alt="Fresh healthy ingredients"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d3d27]/95 via-[#2d3d27]/50 to-black/30" />

            {/* Top Glass Badge */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide border border-white/30 animate-pulse">
                Customer Care
              </span>
            </div>

            {/* Bottom Content Inside Image Banner */}
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-black leading-snug drop-shadow-md">
                Looking for quick answers?
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed max-w-sm font-medium">
                Check our Frequently Asked Questions section to find instant answers about deliveries, meal plans, and subscriptions.
              </p>
              
              <a
                href="#faq"
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#2d3d27] hover:bg-white text-xs font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md active:scale-95"
              >
                <span>Read FAQs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}