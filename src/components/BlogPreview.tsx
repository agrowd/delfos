import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const recursos = [
  { title: '3 Señales de que es momento de iniciar terapia', tag: 'Crecimiento', img: 'https://images.unsplash.com/photo-1544027993-37db25a20d4f?auto=format&fit=crop&q=80&w=600&h=400' },
  { title: 'Control Inhibitorio en la Primera Infancia', tag: 'Desarrollo Infantil', img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600&h=400' },
  { title: 'El significado del Templo de Delfos para la salud mental', tag: 'Filosofía', img: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=600&h=400' }
];

export default function BlogPreview() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Blog</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                Recursos y Actualidad
              </h2>
              <p className="text-base md:text-lg text-charcoal/70 max-w-lg">
                Posts educativos diseñados para aportar valor a nuestra comunidad.
              </p>
            </div>
            <a href="#" className="group font-semibold text-primary hover:text-primary-dark transition-colors whitespace-nowrap inline-flex items-center gap-2">
              Ver todos <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recursos.map((r, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <div className="bg-white rounded-2xl overflow-hidden border border-stone/20 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group flex flex-col h-full cursor-pointer hover:-translate-y-2">
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${r.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider text-white bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {r.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-charcoal mb-4 group-hover:text-primary transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-stone/15 flex justify-between items-center text-sm font-medium text-charcoal/50 group-hover:text-primary transition-colors">
                    <span>Leer Artículo</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
