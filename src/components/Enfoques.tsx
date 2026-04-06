import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import { BrainCircuit, Workflow, Shuffle, ArrowRight } from 'lucide-react';

const enfoques = [
  { 
    icon: <BrainCircuit size={36} />, 
    title: 'Psicoanálisis', 
    text: 'Exploración profunda del inconsciente y la historia singular. Indagamos en el origen de los patrones repetitivos para lograr cambios subjetivos genuinos y duraderos.',
    accent: 'border-primary/40'
  },
  { 
    icon: <Workflow size={36} />, 
    title: 'Cognitivo Conductual (TCC)', 
    text: 'Abordaje práctico y estructurado. Identifica y modifica esquemas mentales distorsionados y patrones de comportamiento que generan malestar emocional.',
    accent: 'border-secondary/60'
  },
  { 
    icon: <Shuffle size={36} />, 
    title: 'Terapia Sistémica', 
    text: 'Comprensión del individuo como parte de un entramado vincular. Ideal para resolver problemas analizando el contexto familiar o relacional del paciente.',
    accent: 'border-primary/40'
  }
];

export default function Enfoques() {
  return (
    <section id="enfoques" className="py-24 md:py-32 bg-charcoal text-background relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="mb-16 md:mb-20 text-center md:text-left md:max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Metodología</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              Bases de Nuestra Práctica Clínica
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Comprendemos que cada persona es única. Integramos perspectivas teóricas rigurosas y avaladas para adaptarnos a tus necesidades.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {enfoques.map((e, idx) => (
            <ScrollReveal key={idx} delay={0.15 * idx}>
              <div className={`group bg-white/[0.04] backdrop-blur-sm border-l-4 ${e.accent} border border-white/[0.06] p-8 md:p-9 rounded-2xl hover:bg-white/[0.08] transition-all duration-500 h-full flex flex-col`}>
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {e.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                  {e.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm flex-grow">
                  {e.text}
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a href="#contacto" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors inline-flex items-center gap-2">
                    Consultar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
