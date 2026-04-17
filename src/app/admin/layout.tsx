import { checkSession } from "@/lib/auth";
import { logout } from "@/app/actions/auth";
import Link from "next/link";
import { LayoutDashboard, FileText, LogOut, ArrowLeft, UserCircle } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await checkSession();

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col md:flex-row">
      {session && (
        <aside className="w-full md:w-64 bg-charcoal text-white p-6 md:min-h-screen flex flex-col shrink-0">
          <div className="mb-8">
            <h2 className="text-xl font-bold">Delfos Admin</h2>
            <p className="text-white/50 text-sm">Administrador</p>
          </div>
          <nav className="flex-1 space-y-2">
            <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link href="/admin/blog/editor/new" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
              <FileText size={20} />
              <span>Nuevo Post</span>
            </Link>
            <Link href="/admin/perfil" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
              <UserCircle size={20} />
              <span>Mi Perfil</span>
            </Link>
            <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors mt-8 text-primary">
              <ArrowLeft size={20} />
              <span>Ver sitio web</span>
            </Link>
          </nav>
          
          <div className="mt-8 pt-8 border-t border-white/10">
             <form action={logout}>
                <button type="submit" className="flex w-full items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-300 transition-colors">
                  <LogOut size={20} />
                  <span>Cerrar sesión</span>
                </button>
             </form>
          </div>
        </aside>
      )}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
