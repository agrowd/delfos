'use client';
import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import Image from 'next/image';
import { motion } from 'framer-motion';

const photos = [
  { src: '/gallery/espera-1.jpeg', alt: 'Sala de espera', span: 'md:col-span-2 md:row-span-2' },
  { src: '/gallery/primera-foto-consultorio-1.jpeg', alt: 'Consultorio 1', span: 'md:col-span-2 md:row-span-1' },
  { src: '/gallery/segunda-foto-consultorio-1.jpg', alt: 'Consultorio 1 - Detalle', span: 'md:col-span-2 md:row-span-1' },
  { src: '/gallery/primera-foto-consultorio-2.jpeg', alt: 'Consultorio 2', span: 'md:col-span-2 md:row-span-1' },
  { src: '/gallery/segunda-foto-consultorio-2.jpg', alt: 'Consultorio 2 - Detalle', span: 'md:col-span-2 md:row-span-1' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Nuestro Espacio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
              Un ambiente pensado para vos
            </h2>
            <p className="text-base md:text-lg text-charcoal/70 max-w-2xl mx-auto">
              Recorré nuestras instalaciones diseñadas para brindar calidez, privacidad y el confort necesario para tu proceso.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {photos.map((photo, i) => (
            <ScrollReveal key={i} delay={0.1 * i} className={photo.span}>
              <motion.div 
                className="relative w-full h-full rounded-3xl overflow-hidden group shadow-lg"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image 
                  src={photo.src} 
                  alt={photo.alt} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
