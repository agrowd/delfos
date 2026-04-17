import { cookies } from "next/headers";

const SESSION_SECRET = "delfos_admin_session_valid";

export async function checkSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  return session?.value === SESSION_SECRET;
}
