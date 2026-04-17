"use server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadFileToCloudinary(file: File): Promise<string | null> {
  if (!file || file.size === 0) return null;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    console.log("📤 Iniciando subida a Cloudinary (" + file.name + ")...");
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "delfos_blog" },
        (error, result) => {
          if (error) {
            console.error("❌ Error de Cloudinary:", error.message);
            reject(error);
          }
          else {
            console.log("✅ Imagen subida con éxito:", (result as any).secure_url);
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });
    return (uploadResult as any).secure_url;
  } catch (err: any) {
    console.error("❌ Fallo crítico en upload.ts:", err.message || err);
    return null;
  }
}
