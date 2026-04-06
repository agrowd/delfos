'use client';
import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import { motion } from 'framer-motion';
import { Puzzle, Brain, Users, Sparkles } from 'lucide-react';

export default function Juegoteca() {
  const highlightFeatures = [
    { title: 'Atención', icon: <Sparkles size={20} /> },
    { title: 'Memoria', icon: <Brain size={20} /> },
    { title: 'Lenguaje', icon: <Users size={20} /> },
    { title: 'Planificación', icon: <Puzzle size={20} /> },
  ];

  return (
    <section id="juegoteca" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 border border-white/20">
              Propuesta Diferencial
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
              Juegoteca y estimulación cognitiva
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12">
              En este espacio, el juego es la base del aprendizaje. Acompañamos a los niños a expresarse, vincularse y desarrollar habilidades como la atención, memoria, lenguaje, planificación, resolución de problemas, creatividad, favoreciendo la autonomía y el bienestar integral.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {highlightFeatures.map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-2xl flex flex-col items-center gap-3 group hover:bg-white/20 transition-all cursor-default"
                >
                  <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-white text-sm font-semibold tracking-wide">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
