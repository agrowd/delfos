import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import { User, Users, HeartHandshake, Baby, Activity, BookOpen } from 'lucide-react';

const servicios = [
  { icon: <Baby size={28} />, title: 'Niños', text: 'Herramientas lúdicas, contención y un entorno a su escala para las primeras etapas del desarrollo.', color: 'from-primary/20 to-primary/5' },
  { icon: <User size={28} />, title: 'Adolescentes', text: 'Escucha activa enfocada en transitar los cambios y potenciar los recursos de identidad y crecimiento.', color: 'from-secondary/40 to-secondary/10' },
  { icon: <User size={28} />, title: 'Adultos', text: 'Espacios orientados a atravesar crisis, sanar heridas emocionales e impulsar el autoconocimiento profundo.', color: 'from-primary/20 to-primary/5' },
  { icon: <Activity size={28} />, title: 'Adultos mayores', text: 'Acompañamiento especializado, escucha empática y contención ante los desafíos propios de esta vital etapa.', color: 'from-secondary/40 to-secondary/10' },
  { icon: <HeartHandshake size={28} />, title: 'Terapia de Pareja', text: 'Abordajes para desenredar conflictos, mejorar la comunicación y reconstruir vínculos saludables.', color: 'from-primary/20 to-primary/5' },
  { icon: <BookOpen size={28} />, title: 'Orientación a Padres', text: 'Asesoramiento y herramientas prácticas para afrontar asertivamente la crianza y las dinámicas familiares.', color: 'from-secondary/40 to-secondary/10' }
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Especialidades</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
              A quiénes acompañamos
            </h2>
            <p className="text-base md:text-lg text-charcoal/70 max-w-2xl mx-auto">
              Brindamos atención personalizada e integral, adaptada a cada etapa vital.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicios.map((s, idx) => (
            <ScrollReveal key={idx} delay={0.08 * idx}>
              <div className="group bg-white p-7 md:p-8 rounded-2xl border border-stone/20 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rounded-xl group-hover:shadow-lg group-hover:shadow-primary/20`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-charcoal/65 leading-relaxed text-sm flex-grow">
                  {s.text}
                </p>
                <div className="mt-5 pt-4 border-t border-stone/15">
                  <a href="#contacto" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors inline-flex items-center gap-1">
                    Conocer más <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
