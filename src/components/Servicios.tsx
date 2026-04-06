import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import { User, Users, HeartHandshake, Baby, Activity, BookOpen } from 'lucide-react';

const servicios = [
  { icon: <Baby size={28} />, title: 'Niños', text: 'A través del juego como herramienta terapéutica, creamos un espacio de contención donde los niños pueden expresar sus emociones, fortalecer su autoestima y superar desafíos del desarrollo en un entorno seguro y a su medida.', color: 'from-primary/20 to-primary/5' },
  { icon: <User size={28} />, title: 'Adolescentes', text: 'Acompañamos a los jóvenes en la transición hacia la adultez, brindando un espacio de escucha sin juicios donde puedan trabajar su identidad, gestionar las presiones sociales y encontrar herramientas para afrontar los cambios propios de esta etapa.', color: 'from-secondary/40 to-secondary/10' },
  { icon: <User size={28} />, title: 'Adultos', text: 'Orientado a quienes buscan un proceso de autoconocimiento profundo, sanación de heridas emocionales o herramientas para atravesar crisis personales, laborales o vinculares, recuperando el bienestar y el equilibrio interno.', color: 'from-primary/20 to-primary/5' },
  { icon: <Activity size={28} />, title: 'Adultos mayores', text: 'Espacio dedicado a la escucha activa y valoración de la experiencia vital. Acompañamos en el proceso de envejecimiento, brindando apoyo emocional ante duelos, cambios en la autonomía y la búsqueda de nuevos sentidos en esta etapa.', color: 'from-secondary/40 to-secondary/10' },
  { icon: <HeartHandshake size={28} />, title: 'Terapia de Pareja', text: 'Un espacio neutral para desenredar conflictos de comunicación, reconstruir la confianza y fortalecer el vínculo. Trabajamos en la identificación de patrones relacionales para lograr acuerdos saludables y dinámicas de respeto mutuo.', color: 'from-primary/20 to-primary/5' },
  { icon: <BookOpen size={28} />, title: 'Orientación a Padres', text: 'Brindamos asesoramiento integral y herramientas prácticas para la crianza, ayudando a las familias a gestionar límites, mejorar la comunicación con sus hijos y entender las necesidades emocionales en cada fase del crecimiento.', color: 'from-secondary/40 to-secondary/10' }
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
