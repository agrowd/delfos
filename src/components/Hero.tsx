'use client';
import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-background via-background/85 to-primary/10" />
      
      {/* Animated decorative elements */}
      <div className="absolute top-32 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-10 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <ScrollReveal>
          <div className="max-w-2xl">
            <motion.span 
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-charcoal px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm border border-primary/15"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Espacio de Psicología
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading text-charcoal font-bold leading-[1.1] mb-6">
              Tu camino al{' '}
              <span className="text-gradient">autoconocimiento</span>
              {' '}comienza en Delfos.
            </h1>
            
            <p className="text-lg md:text-xl font-light italic text-charcoal/70 mb-10 max-w-lg">
              "Conócete a ti mismo" — Inscripción en el Templo de Apolo en Delfos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5491166567238?text=Hola%2C%20me%20comunico%20desde%20la%20web%20de%20Delfos%20Psicolog%C3%ADa.%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20para%20agendar%20una%20entrevista."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-primary/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                Solicitar Entrevista
              </a>
              <a 
                href="#servicios" 
                className="border-2 border-charcoal/20 hover:border-primary text-charcoal hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 text-center backdrop-blur-sm bg-white/30"
              >
                Conocer más
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[15] pointer-events-none" />
    </section>
  );
}
