import { checkSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit2, Trash2, Star, Eye, EyeOff } from "lucide-react";
import { togglePublish, toggleFeatured, deletePost } from "@/app/actions/blog";
import DeletePostButton from "@/components/admin/DeletePostButton";

export default async function DashboardPage() {
  const session = await checkSession();
  if (!session) redirect("/admin/login");

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-heading text-charcoal">Artículos del Blog</h1>
        <Link href="/admin/blog/editor/new" className="bg-primary text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-primary-dark transition-colors shadow-lg">
          <Plus size={18} /> Crear Post
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200 text-sm text-charcoal/60">
              <th className="p-4 font-medium">Título</th>
              <th className="p-4 font-medium">Fecha</th>
              <th className="p-4 font-medium text-center">Estado</th>
              <th className="p-4 font-medium text-center">Destacado</th>
              <th className="p-4 font-medium text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-charcoal/50">No hay artículos creados todavía.</td>
              </tr>
            )}
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-stone-100 last:border-0 hover:bg-stone-50/50">
                <td className="p-4">
                  <p className="font-semibold text-charcoal">{post.title}</p>
                  <p className="text-sm text-charcoal/50">{post.slug}</p>
                </td>
                <td className="p-4 text-sm text-charcoal/70">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4 text-center">
                  <form action={togglePublish}>
                    <input type="hidden" name="id" value={post.id} />
                    <button type="submit" className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${post.isPublished ? 'bg-green-100 text-green-700' : 'bg-stone-200 text-stone-600'}`}>
                      {post.isPublished ? <><Eye size={14}/> Público</> : <><EyeOff size={14}/> Oculto</>}
                    </button>
                  </form>
                </td>
                <td className="p-4 text-center">
                  <form action={toggleFeatured}>
                    <input type="hidden" name="id" value={post.id} />
                    <button type="submit" className={`p-2 rounded-full transition-colors ${post.isFeatured ? 'text-yellow-500 bg-yellow-50' : 'text-stone-400 hover:bg-stone-100'}`}>
                      <Star size={18} fill={post.isFeatured ? 'currentColor' : 'none'} />
                    </button>
                  </form>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/admin/blog/editor/${post.id}`} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 size={18} />
                    </Link>
                    <DeletePostButton id={post.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
