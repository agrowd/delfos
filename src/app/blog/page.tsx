import { prisma } from "@/lib/prisma";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Search, Star } from "lucide-react";
import Image from "next/image";

export default async function BlogPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = await searchParams?.q || "";
  
  const posts = await prisma.post.findMany({
    where: {
      isPublished: true,
      OR: q ? [
        { title: { contains: q } },
        { content: { contains: q } },
        { tags: { contains: q } }
      ] : undefined
    },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-charcoal/50 hover:text-primary mb-8 font-medium transition-colors">
            <ArrowLeft size={18} /> Volver a Inicio
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Blog Delfos</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-4">
                Recursos y Actualidad
              </h1>
              <p className="text-lg text-charcoal/70 max-w-xl">
                Artículos, reflexiones y recursos diseñados para aportar valor a nuestra comunidad y acompañar tu proceso.
              </p>
            </div>

            {/* Buscador Sencillo */}
            <form className="relative w-full md:w-80">
              <input 
                type="text" 
                name="q"
                defaultValue={q}
                placeholder="Buscar artículos..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 bg-white"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            </form>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-stone-100">
              <p className="text-xl text-charcoal/50">No encontramos artículos para &quot;{q}&quot;</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group flex flex-col h-full hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    {post.imageUrl ? (
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                        style={{ backgroundImage: `url(${post.imageUrl})` }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">Sin Imagen</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    {post.tags && (
                      <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider text-white bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                        {post.tags.split(',')[0]}
                      </span>
                    )}
                    {post.isFeatured && (
                      <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-white bg-yellow-500/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-lg ring-1 ring-white/20">
                        <Star size={10} fill="currentColor" /> Destacado
                      </span>
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex flex-col grow">
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm line-clamp-3 mb-6">
                      {post.excerpt || post.content.substring(0, 120) + "..."}
                    </p>
                    <div className="mt-auto pt-4 border-t border-stone-100 text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors flex items-center justify-between">
                      Leer Artículo
                      <span className="text-charcoal/40 text-xs font-normal">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
