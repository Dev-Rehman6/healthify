import React, { useState } from 'react';
import { Star, ArrowRight, Plus, Minus } from 'lucide-react';

export default function CustomerStoriesAndFAQ() {
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default for clean presentation

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      quote:
        '"Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!"',
      name: 'Sara M.',
      location: 'Dubai, UAE',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    {
      quote:
        '"Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle."',
      name: 'Ahmed R.',
      location: 'Dubai, UAE',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      quote:
        '"Great quality, variety, and customer service. I feel healthier and more energized every day."',
      name: 'Fatima K.',
      location: 'Dubai, UAE',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    },
  ];

  const faqs = [
    {
      question: 'What are your meal plans?',
      answer:
        'We offer a variety of customizable plans including Essential, Balanced, and Performance plans tailored to meet your nutrition goals.',
    },
    {
      question: 'How does delivery work?',
      answer:
        'We deliver fresh meals daily directly to your home or office in temperature-controlled packaging.',
    },
    {
      question: 'Can I customize my meals?',
      answer:
        'Yes, you can swap ingredients or select specific dietary preferences through your account dashboard.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, debit cards, and online digital wallet payment methods.',
    },
    {
      question: 'Do you have a mobile app?',
      answer:
        'Yes! You can manage your meal deliveries, customize menus, and track nutritional goals using our mobile app.',
    },
  ];

  return (
    <div className="font-sans text-[#2d3d27] py-10 px-4 md:px-8 space-y-12">
      
      {/* SECTION 1: CUSTOMER STORIES */}
      <section className="max-w-[1200px] mx-auto bg-[#f2f5f0]/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Animated Decorative Circle */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none animate-pulse" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 relative z-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#4a5d3f] uppercase block mb-1">
              CUSTOMER STORIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2d3d27] drop-shadow-sm">
              What Our Customers Say
            </h2>
          </div>
          <a
            href="#reviews"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4a5d3f] hover:text-[#2d3d27] transition-colors group"
          >
            <span>View More Reviews</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Testimonials Cards Grid (Light Sage to Dark Green Hover Effect) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-[#f2f5f0] hover:bg-[#2d3d27] p-6 md:p-8 rounded-3xl border border-white/80 hover:border-[#6b8c5a]/60 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              <p className="text-sm text-[#5d6857] group-hover:text-gray-200 leading-relaxed mb-8 font-medium transition-colors duration-500">
                {item.quote}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-black/5 group-hover:border-white/10 transition-colors duration-500">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/80 shadow-md group-hover:border-[#a8cb97] transition-all duration-500"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#2d3d27] group-hover:text-white transition-colors duration-500">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#6b7565] group-hover:text-[#a8cb97] font-semibold transition-colors duration-500">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b] group-hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-[1200px] mx-auto bg-[#f2f5f0]/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Animated Background Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#4a5d3f]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
          
          {/* Left Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <span className="text-xs font-bold tracking-widest text-[#4a5d3f] uppercase block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2d3d27] leading-tight mb-4 drop-shadow-sm">
              Have Questions? <br />
              <span className="text-[#6b8c5a]">We've Got Answers.</span>
            </h2>
            <p className="text-sm text-[#5d6857] leading-relaxed mb-8 max-w-sm font-medium">
              Find quick answers to common questions about our meal plans, delivery options, and nutritional customization.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#4a5d3f] hover:bg-[#3b4c32] text-white text-xs font-bold py-3.5 px-7 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer">
              <span>View All FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Accordion List with Dynamic Glass Transition */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-500 overflow-hidden shadow-md ${
                    isOpen
                      ? 'bg-[#2d3d27] text-white border-[#4a5d3f] shadow-xl'
                      : 'bg-[#f2f5f0] hover:bg-[#e4ebd0] border-white/80 text-[#2d3d27]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left py-4.5 px-6 flex items-center justify-between text-sm md:text-base font-bold transition-colors cursor-pointer"
                  >
                    <span className={isOpen ? 'text-white' : 'text-[#2d3d27]'}>
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ml-4 ${
                        isOpen
                          ? 'bg-[#a8cb97] text-[#2d3d27] rotate-180'
                          : 'bg-white/80 text-[#4a5d3f]'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[3]" />
                      )}
                    </span>
                  </button>

                  {/* Expandable Accordion Answer */}
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs md:text-sm text-gray-200 leading-relaxed border-t border-white/10 pt-3 font-medium animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}