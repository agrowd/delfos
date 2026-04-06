'use client';
import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-gradient-to-b from-white to-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left info column */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Contacto</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 leading-tight">
                Contactanos
              </h2>
              <p className="text-charcoal/75 mb-10 leading-relaxed">
                Estamos aquí para escucharte. Ya sea que busques iniciar un proceso terapéutico, alquilar un espacio o sumarte a nuestro equipo, envianos tu consulta y te responderemos a la brevedad.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Ubicación</p>
                    <p className="text-xs text-charcoal/60">Buenos Aires, Argentina</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Email</p>
                    <p className="text-xs text-charcoal/60">delfospsico@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">WhatsApp</p>
                    <p className="text-xs text-charcoal/60">+54 9 11 6656-7238</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right form column */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.2}>
              <form 
                className="bg-white border border-stone/20 p-7 md:p-10 rounded-3xl shadow-2xl shadow-charcoal/5" 
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">Nombre y Apellido</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-stone/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-charcoal/30"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">Correo Electrónico</label>
                    <input 
                      type="email" 
                      className="w-full bg-background/50 border border-stone/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-charcoal/30"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full bg-background/50 border border-stone/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-charcoal/30"
                      placeholder="+54 9 11 0000-0000"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">Motivo</label>
                    <select className="w-full bg-background/50 border border-stone/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-charcoal/70 appearance-none cursor-pointer">
                      <option value="consulta">Consulta Psicológica</option>
                      <option value="equipo">Sumarse al equipo</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 mb-8">
                  <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">Mensaje</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-background/50 border border-stone/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none placeholder:text-charcoal/30"
                    placeholder="Cuéntanos un poco sobre ti o tu consulta..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-3"
                >
                  <span>Enviar Mensaje</span>
                  <Send size={16} />
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
