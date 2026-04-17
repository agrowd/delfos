"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";

export async function togglePublish(formData: FormData) {
  const id = formData.get("id") as String;
  if (!id) return;

  const post = await prisma.post.findUnique({ where: { id: id.toString() } });
  if (post) {
    await prisma.post.update({
      where: { id: id.toString() },
      data: { isPublished: !post.isPublished },
    });
    revalidatePath("/admin/dashboard");
    revalidatePath("/blog");
  }
}

export async function toggleFeatured(formData: FormData) {
  const id = formData.get("id") as String;
  if (!id) return;

  const post = await prisma.post.findUnique({ where: { id: id.toString() } });
  if (post) {
    await prisma.post.update({
      where: { id: id.toString() },
      data: { isFeatured: !post.isFeatured },
    });
    revalidatePath("/admin/dashboard");
    revalidatePath("/");
  }
}

export async function deletePost(formData: FormData) {
  const id = formData.get("id") as String;
  if (!id) return;

  await prisma.post.delete({ where: { id: id.toString() } });
  revalidatePath("/admin/dashboard");
  revalidatePath("/blog");
  revalidatePath("/");
}

import { uploadFileToCloudinary } from "./upload";

export async function savePost(formData: FormData) {
  const id = formData.get("id") as string | null;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const tags = formData.get("tags") as string;
  const oldImageUrl = formData.get("oldImageUrl") as string;
  
  const imgFile = formData.get("imageFile") as File;
  
  let finalImageUrl = oldImageUrl;
  if (imgFile && imgFile.size > 0) {
    console.log("🖼️ Nueva imagen detectada:", imgFile.name, imgFile.size, "bytes");
    const uploadedUrl = await uploadFileToCloudinary(imgFile);
    if (uploadedUrl) {
       finalImageUrl = uploadedUrl;
       console.log("🔗 URL final a guardar:", finalImageUrl);
    } else {
       console.error("⚠️ Falló la subida de imagen, se mantendrá la anterior o ninguna.");
    }
  }

  if (!title || !content) return;

  const slug = slugify(title, { lower: true, strict: true, locale: 'es' }) + "-" + Date.now().toString().slice(-4);

  if (id && id !== "new") {
    console.log("💾 Actualizando post con ID:", id, "y URL de imagen:", finalImageUrl);
    await prisma.post.update({
      where: { id },
      data: { title, content, excerpt, imageUrl: finalImageUrl, tags },
    });
  } else {
    console.log("🆕 Creando nuevo post con URL de imagen:", finalImageUrl);
    await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        imageUrl: finalImageUrl,
        tags,
        slug,
        isPublished: true, // Público por defecto al crear
      },
    });
  }

  revalidatePath("/admin/dashboard");
  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin/dashboard");
}
