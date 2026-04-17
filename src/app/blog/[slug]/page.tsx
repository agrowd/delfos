import { prisma } from "@/lib/prisma";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  const post = await prisma.post.findUnique({
    where: { slug }
  });

  if (!post || !post.isPublished) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <article className="pt-32 pb-24 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal/50 hover:text-primary mb-8 font-medium transition-colors">
            <ArrowLeft size={18} /> Volver al Blog
          </Link>

          {post.tags && (
             <div className="flex gap-2 mb-6">
                 {post.tags.split(',').map((tag, i) => (
                    <span key={i} className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {tag.trim()}
                    </span>
                 ))}
             </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-charcoal/50 mb-12 border-y border-stone-200 py-4">
             <div className="flex items-center gap-2">
                 <Calendar size={16} />
                 {new Date(post.createdAt).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
             </div>
          </div>

          {post.imageUrl && (
            <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-xl bg-stone-100">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div 
            className="prose prose-lg prose-stone max-w-none text-charcoal/80" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
