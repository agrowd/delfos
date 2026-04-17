import { checkSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { savePost } from "@/app/actions/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogEditorForm from "@/components/admin/BlogEditorForm";

export default async function EditorPage({ params }: { params: { id: string } }) {
  const session = await checkSession();
  if (!session) redirect("/admin/login");

  const { id } = await params;
  let post = null;

  if (id !== "new") {
    post = await prisma.post.findUnique({ where: { id } });
    if (!post) redirect("/admin/dashboard");
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-primary mb-6 transition-colors">
        <ArrowLeft size={18} /> Volver al Dashboard
      </Link>
      
      <h1 className="text-3xl font-bold font-heading text-charcoal mb-8">
        {post ? "Editar Artículo" : "Crear Nuevo Artículo"}
      </h1>

      <BlogEditorForm post={post} saveAction={savePost} />
    </div>
  );
}
