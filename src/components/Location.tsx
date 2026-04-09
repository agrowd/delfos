'use client';
import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import { MapPin, Clock, Phone } from 'lucide-react';

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
                      Lunes a Viernes: 08:00 - 20:00<br />
                      Sábados: 08:00 - 16:00
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
              {/* Real Google Maps Embed */}
              <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  title="Ubicación Delfos Psicología"
                  src="https://www.google.com/maps?q=Constituyentes+41,+Villa+Madero,+Buenos+Aires,+Argentina&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating CTA button on top of map */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Constituyentes+41+Villa+Madero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-7 py-3 rounded-full font-semibold shadow-xl shadow-primary/40 hover:scale-105 transition-transform flex items-center gap-2 text-sm"
                  >
                    <MapPin size={16} /> Cómo llegar
                  </a>
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
