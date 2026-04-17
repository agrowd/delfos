import { checkSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await checkSession();
  
  if (session) {
    redirect("/admin/dashboard");
  } else {
    redirect("/admin/login");
  }
}
