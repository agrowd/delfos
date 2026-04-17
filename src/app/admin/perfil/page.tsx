'use client';
import { changePassword } from '@/app/actions/auth';
import { useState } from 'react';
import { ArrowLeft, Save, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PerfilPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const formData = new FormData(e.currentTarget);
    const res = await changePassword(formData);

    if (res?.error) {
      setError(res.error);
    } else {
      setSuccess('Contraseña cambiada exitosamente. Vuelve a iniciar sesión con la nueva contraseña.');
      setTimeout(() => {
        router.push('/admin/login');
      }, 3000);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-primary mb-6 transition-colors">
        <ArrowLeft size={18} /> Volver al Dashboard
      </Link>
      
      <h1 className="text-3xl font-bold font-heading text-charcoal mb-8 flex items-center gap-3">
        <UserCircle size={32} className="text-primary"/> Mi Perfil (Admin)
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">{error}</div>}
          {success && <div className="p-4 bg-green-50 text-green-600 rounded-xl text-sm font-medium">{success}</div>}

          <div>
            <label className="block text-sm font-bold text-charcoal/80 mb-2">Usuario (Email)</label>
            <input 
              type="text" 
              name="email"
              required
              defaultValue="delfos"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-charcoal/80 mb-2">Contraseña Actual</label>
            <input 
              type="password" 
              name="oldPassword"
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="pt-4 border-t border-stone-100">
            <label className="block text-sm font-bold text-charcoal/80 mb-2">Nueva Contraseña</label>
            <input 
              type="password" 
              name="newPassword"
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <button type="submit" className="w-full bg-charcoal text-white py-3 rounded-xl font-medium hover:bg-black transition-colors flex justify-center items-center gap-2 mt-4">
             <Save size={18} /> Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}
