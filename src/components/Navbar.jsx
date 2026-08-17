import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sparkles, Send } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-4'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-2xl border-2 border-slate-900 bg-white/95 px-4 py-2 shadow-[4px_4px_0px_#0f172a] backdrop-blur-md">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-2.5 group pl-1">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-mono font-black text-sm border-2 border-slate-900 shadow-[2px_2px_0px_#ff2d87] transition-transform duration-200 group-hover:scale-105">
              M
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-pink-500"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-slate-900 font-['Space_Grotesk']">
                MAAWAZ<span className="text-pink-500">.</span>
              </span>
              <span className="text-[10px] text-slate-600 font-mono -mt-1 hidden sm:inline font-bold">AI / ML Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-[2px_2px_0px_#ff2d87]'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/Muhammad_Maawaz_CV.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-xl border-2 border-slate-900 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#0f172a]"
            >
              <FileDown size={14} className="text-pink-600" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-xl border-2 border-slate-900 bg-slate-900 px-4 py-1.5 text-xs font-bold text-white shadow-[2px_2px_0px_#ff2d87] transition hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#ff2d87] active:scale-95"
            >
              <Sparkles size={14} className="text-pink-400" />
              Collaborate
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-slate-900 bg-white text-slate-900 shadow-[2px_2px_0px_#0f172a] lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 max-w-md mx-auto rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-[5px_5px_0px_#0f172a] lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition ${
                    activeSection === link.href.substring(1)
                      ? 'bg-slate-900 text-white shadow-[2px_2px_0px_#ff2d87]'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t-2 border-slate-200 flex flex-col gap-2">
                <a
                  href="/Muhammad_Maawaz_CV.pdf"
                  download
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-white py-2.5 text-sm font-bold text-slate-900 shadow-[2px_2px_0px_#0f172a]"
                >
                  <FileDown size={16} className="text-pink-600" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-slate-900 py-2.5 text-sm font-bold text-white shadow-[2px_2px_0px_#ff2d87]"
                >
                  <Send size={16} />
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
