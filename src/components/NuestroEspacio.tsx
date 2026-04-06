import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import Image from 'next/image';

export default function NuestroEspacio() {
  return (
    <section id="espacio" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Nuestra Filosofía</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8 leading-tight">
                El Origen de Nuestro Espacio
                <span className="block w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></span>
              </h2>
              <div className="text-charcoal/75 space-y-5 text-base md:text-lg leading-relaxed">
                <p>
                  En la antigua Grecia, el Templo de Apolo, ubicado en la ciudad de Delfos, era el punto de encuentro de los grandes sabios y filósofos de la época. Allí se inscribió la premisa fundamental que da sentido a nuestro proyecto: <em className="text-primary font-medium not-italic">"Conócete a ti mismo"</em>.
                </p>
                <p>
                  Bajo esta filosofía fundacional, creamos este Espacio de Psicología. Un ambiente diseñado para brindarte calidez, confidencialidad y respeto. Los consultorios están pensados como un ambiente seguro, donde encontrarás a un equipo de profesionales comprometidos para acompañarte en el inicio de tu búsqueda personal.
                </p>
              </div>
              
              {/* Stats/highlights row */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="text-center p-4 bg-white/80 rounded-2xl border border-stone/20">
                  <div className="text-2xl font-bold text-primary">+10</div>
                  <div className="text-xs text-charcoal/60 mt-1">Profesionales</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-2xl border border-stone/20">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-charcoal/60 mt-1">Enfoques</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-2xl border border-stone/20">
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-xs text-charcoal/60 mt-1">Especialidades</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/10 group">
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/50 to-transparent z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/espacio-bg.png')" }}
                />
              {/* Floating caption */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-white/90 text-sm font-medium">Un espacio pensado para tu bienestar</p>
                </div>
              </div>
              
              {/* Decorative floating card - repositioned to avoid overlap */}
              <div className="absolute -bottom-8 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-stone/10 hidden md:block z-30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg">🏛️</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Templo de Apolo</p>
                    <p className="text-xs text-charcoal/60">Delfos, Grecia</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
