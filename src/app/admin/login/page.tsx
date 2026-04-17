'use client';
import { login } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await login(formData);

    if (res?.error) {
      setError(res.error);
    } else {
      router.push('/admin/dashboard');
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-stone-200">
        <h1 className="text-2xl font-bold text-charcoal mb-6 text-center">Acceso CMS Delfos</h1>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-charcoal/70 mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal/70 mb-1">Contraseña</label>
            <input 
              type="password" 
              name="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
