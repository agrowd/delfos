"use client";

import { Trash2 } from "lucide-react";
import { deletePost } from "@/app/actions/blog";
import { useState } from "react";

interface DeletePostButtonProps {
  id: string;
}

export default function DeletePostButton({ id }: DeletePostButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (formData: FormData) => {
    if (!confirm("¿Estás seguro de que querés borrar este artículo? Esta acción no se puede deshacer.")) {
      return;
    }
    setIsDeleting(true);
    try {
      await deletePost(formData);
    } catch (error) {
      console.error("Error al borrar:", error);
      alert("Hubo un error al intentar borrar el post.");
      setIsDeleting(false);
    }
  };

  return (
    <form action={handleDelete}>
      <input type="hidden" name="id" value={id} />
      <button 
        type="submit" 
        disabled={isDeleting}
        className={`p-2 rounded-lg transition-colors ${isDeleting ? 'text-stone-300' : 'text-red-600 hover:bg-red-50'}`}
      >
        <Trash2 size={18} />
      </button>
    </form>
  );
}
