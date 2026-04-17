import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import { ArrowUpRight, Star } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function BlogPreview() {
  const recursos = await prisma.post.findMany({
    where: { isPublished: true },
    orderBy: [
      { isFeatured: 'desc' },
      { createdAt: 'desc' }
    ],
    take: 3
  });

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
            <Link href="/blog" className="group font-semibold text-primary hover:text-primary-dark transition-colors whitespace-nowrap inline-flex items-center gap-2">
              Ver todos <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {recursos.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-2xl">
             <p className="text-charcoal/50">Próximamente nuevos artículos...</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recursos.map((r, idx) => (
              <ScrollReveal key={r.id} delay={0.15 * idx}>
                <Link href={`/blog/${r.slug}`} className="bg-white rounded-2xl overflow-hidden border border-stone/20 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group flex flex-col h-full cursor-pointer hover:-translate-y-2">
                  <div className="relative h-48 md:h-52 overflow-hidden bg-stone-100">
                    {r.imageUrl && (
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                        style={{ backgroundImage: `url(${r.imageUrl})` }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                    {r.tags && (
                      <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider text-white bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        {r.tags.split(',')[0]}
                      </span>
                    )}
                    {r.isFeatured && (
                      <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-white bg-yellow-500/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-lg ring-1 ring-white/20">
                        <Star size={10} fill="currentColor" /> Destacado
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-charcoal mb-4 group-hover:text-primary transition-colors leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 line-clamp-2 mb-4">{r.excerpt}</p>
                    <div className="mt-auto pt-4 border-t border-stone/15 flex justify-between items-center text-sm font-medium text-charcoal/50 group-hover:text-primary transition-colors">
                      <span>Leer Artículo</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
