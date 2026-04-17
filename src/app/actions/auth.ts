"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!email || !password) return { error: "Faltan credenciales" };

  // Auto-seed: Si no hay NINGUN usuario en la BD, creamos el de default usando el .env
  try {
    const count = await prisma.user.count();
    if (count === 0) {
      const adminEmail = process.env.ADMIN_EMAIL || "admin@delfos.com";
      const adminPass = process.env.ADMIN_PASSWORD || "delfos12345";
      const hash = await bcrypt.hash(adminPass, 10);
      await prisma.user.create({
          data: { email: adminEmail, password: hash }
      });
    }
  } catch (error) {
    // Si la DB no está inicializada o configurada, tiramos un error explícito
    return { error: "Base de datos no configurada (Configurar PostgreSQL URL)" };
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { error: "Credenciales incorrectas" };

  const passMatch = await bcrypt.compare(password, user.password);
  if (passMatch) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "delfos_admin_session_valid", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 60, // 30 minutos
      path: "/",
    });
    return { success: true };
  }
  return { error: "Credenciales incorrectas" };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}

export async function changePassword(formData: FormData) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (session?.value !== "delfos_admin_session_valid") return { error: "No autorizado" };

  const email = formData.get("email") as string;
  const oldPassword = formData.get("oldPassword") as string;
  const newPassword = formData.get("newPassword") as string;

  if (!email || !oldPassword || !newPassword) return { error: "Faltan datos" };

  const currentUser = await prisma.user.findFirst();
  if (!currentUser) return { error: "Usuario no encontrado" };

  const passMatch = await bcrypt.compare(oldPassword, currentUser.password);
  if (!passMatch) return { error: "Contraseña antigua incorrecta" };

  const newHash = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: currentUser.id },
    data: { email: email, password: newHash }
  });

  return { success: true };
}
