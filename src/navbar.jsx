import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to handle smooth scrolling to sections on home page
  const handleScrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { 
      name: 'Home', 
      href: '/', 
      sectionId: 'home',
      active: location.pathname === '/' 
    },
    { 
      name: 'About Us', 
      href: '/about', 
      sectionId: 'about',
      active: location.pathname === '/about' 
    },
    { 
      name: 'Our Services', 
      href: '/services', 
      sectionId: 'services',
      active: location.pathname === '/services' 
    },
    { 
      name: 'Advantages', 
      href: '/advantage', 
      sectionId: 'advantages',
      active: location.pathname === '/advantage' 
    },
    { 
      name: 'Growth Plans', 
      href: '/plan', 
      sectionId: 'plans',
      active: location.pathname === '/plan' 
    },
    { 
      name: 'Blogs', 
      href: '/blog', 
      sectionId: 'blogs',
      active: location.pathname === '/blog' 
    },
    { 
      name: 'Contact Us', 
      href: '/contact', 
      sectionId: 'contact',
      active: location.pathname === '/contact' 
    },
  ];

  const handleNavClick = (link, e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      handleScrollToSection(link.sectionId);
    }
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-4 w-full sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/40 shadow-lg transition-all duration-300">
      {/* Logo Section */}
      <Link to="/" className="flex flex-col items-start text-decoration-none group">
        <span className="font-serif text-xl font-black text-gray-900 leading-none drop-shadow-md">صحتفي</span>
        <span className="text-[13px] font-extrabold tracking-[0.14em] text-emerald-800 uppercase mt-[2px] leading-none drop-shadow-sm">
          HEALTHIFY
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            onClick={(e) => handleNavClick(link, e)}
            className={`text-[15px] font-semibold transition-all duration-200 drop-shadow-sm ${
              link.active
                ? 'text-emerald-700 font-bold border-b-2 border-emerald-600 pb-0.5'
                : 'text-gray-800 hover:text-emerald-700'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right Section: Get Started Button & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <a
          href="#get-started"
          className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-[14px] font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-emerald-500/25 transition-all duration-200 gap-2 whitespace-nowrap active:scale-95"
        >
          Get Started
          <svg
            className="w-4 h-4 stroke-current stroke-[2.5] fill-none"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-800 hover:text-emerald-700 focus:outline-none drop-shadow-sm"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/40 shadow-xl py-6 px-6 flex flex-col gap-3 z-40">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              onClick={(e) => handleNavClick(link, e)}
              className={`text-[15px] font-semibold py-2 border-b border-white/20 ${
                link.active ? 'text-emerald-700 font-bold' : 'text-gray-800 hover:text-emerald-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#get-started"
            onClick={() => setIsOpen(false)}
            className="sm:hidden mt-2 inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[14px] font-bold px-6 py-3 rounded-full shadow-md gap-2 w-full"
          >
            Get Started
            <svg
              className="w-4 h-4 stroke-current stroke-[2.5] fill-none"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      )}
    </header>
  );
}