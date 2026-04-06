'use client';
import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import Image from 'next/image';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 block">Dónde estamos</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8 leading-tight">
                Nuestra Ubicación
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-md shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-charcoal">Dirección</p>
                    <p className="text-charcoal/70 leading-relaxed">
                      Constituyentes 41,<br />
                      Villa Madero, Buenos Aires, Argentina
                    </p>
                    <p className="text-xs text-secondary mt-2 font-medium italic">* Dirección exacta brindada al agendar la entrevista.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-md shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-charcoal">Horarios</p>
                    <p className="text-charcoal/70 leading-relaxed">
                      Lunes a Viernes: 08:00 - 21:00<br />
                      Sábados: Consultas especiales según disponibilidad
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-md shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-charcoal">Contacto Directo</p>
                    <p className="text-charcoal/70 leading-relaxed font-body tracking-wider">+54 9 11 6656-7238</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative group">
              {/* Map Image Container */}
              <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/mapa-delfos.png" 
                  alt="Ubicación de Delfos Psicología" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-charcoal/30 flex flex-col items-center justify-center text-center p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <MapPin size={40} className="text-white" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">Mapa Interactivo</h4>
                  <p className="text-sm text-white/80 mb-6">Estamos ubicados en una zona accesible de Villa Madero.</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Constituyentes+41+Villa+Madero" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
                  >
                    Cómo llegar
                  </a>
                </div>

                {/* Always visible small tag */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md z-20 group-hover:opacity-0 transition-opacity">
                  <p className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <MapPin size={12} /> Villa Madero
                  </p>
                </div>
              </div>
              
              {/* Decorative detail */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
