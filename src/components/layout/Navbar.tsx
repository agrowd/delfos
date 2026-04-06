'use client';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WA_URL = 'https://wa.me/5491166567238?text=Hola%2C%20me%20comunico%20desde%20la%20web%20de%20Delfos%20Psicolog%C3%ADa.%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20para%20agendar%20una%20entrevista.';

const links = [
  { href: '#espacio', label: 'Nuestro Espacio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#enfoques', label: 'Enfoques' },
  { href: '#juegoteca', label: 'Juegoteca' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileNav = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    // Small delay so the menu closes before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-xl shadow-lg border-b border-white/10' : 'bg-primary/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <div className="relative w-[150px] h-[55px] md:w-[220px] md:h-[80px] shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="Delfos Psicología" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a 
            href={WA_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary hover:bg-secondary hover:text-primary-dark px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-white/20 hover:-translate-y-0.5"
          >
            Agenda tu turno
          </a>
        </div>

        {/* Hamburger Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Menú"
        >
          {open ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {links.map((l, idx) => (
                <motion.a 
                  key={l.href} 
                  href={l.href} 
                  onClick={(e) => handleMobileNav(e, l.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  className="text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 px-5 py-3.5 rounded-2xl transition-all"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a 
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 bg-white text-primary text-center px-6 py-4 rounded-full font-bold shadow-xl shadow-black/20"
              >
                Agenda tu turno
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
