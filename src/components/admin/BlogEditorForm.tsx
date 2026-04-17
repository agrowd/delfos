"use client";

import React, { useState, useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { 
  Bold, Italic, List, ListOrdered, 
  Heading1, Heading2, Quote, Undo, Redo, 
  Link as LinkIcon, Underline as UnderlineIcon,
  Save, UploadCloud, X
} from "lucide-react";

interface BlogEditorFormProps {
  post?: any;
  saveAction: (formData: FormData) => Promise<void>;
}

export default function BlogEditorForm({ post, saveAction }: BlogEditorFormProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(post?.imageUrl || null);
  const [content, setContent] = useState(post?.content || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: post?.content || "<p>Escribe el contenido aquí...</p>",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-stone max-w-none focus:outline-none min-h-[400px] p-4",
      },
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeImage = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (!editor) return null;

  return (
    <form action={saveAction} className="space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
      <input type="hidden" name="id" value={post?.id || "new"} />
      <input type="hidden" name="oldImageUrl" value={previewUrl || ""} />
      {/* Hidden input to pass Tiptap HTML content to the Server Action */}
      <input type="hidden" name="content" value={content} />

      <div className="space-y-6">
        {/* Título */}
        <div>
          <label className="block text-sm font-bold text-charcoal/80 mb-2">Título del Artículo</label>
          <input 
            type="text" 
            name="title" 
            defaultValue={post?.title || ""}
            required 
            placeholder="Ej: ¿Cuándo es momento de iniciar terapia?"
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-xl font-semibold"
          />
        </div>

        {/* Extracto */}
        <div>
          <label className="block text-sm font-bold text-charcoal/80 mb-2">Extracto Corto (Bajada)</label>
          <textarea 
            name="excerpt" 
            defaultValue={post?.excerpt || ""}
            rows={2}
            placeholder="Breve resumen para mostrar en las tarjetas de preview..."
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
        </div>

        {/* Imagen y Tags */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold text-charcoal/80 mb-2">Imagen de Portada</label>
            <div className="relative group">
              {previewUrl ? (
                <div className="relative aspect-video rounded-xl overflow-hidden border border-stone-200 bg-stone-50">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    type="button" 
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                  <div className="absolute bottom-0 inset-x-0 bg-charcoal/60 backdrop-blur-sm text-white text-[10px] py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    Hacé click abajo para cambiar la imagen
                  </div>
                </div>
              ) : (
                <div className="aspect-video rounded-xl border-2 border-dashed border-stone-200 bg-stone-50 flex flex-col items-center justify-center gap-2 text-stone-400">
                  <UploadCloud size={32} />
                  <span className="text-sm">Subir imagen</span>
                </div>
              )}
              <input 
                ref={fileInputRef}
                type="file" 
                name="imageFile" 
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-charcoal/80 mb-2">Etiquetas (separadas por coma)</label>
            <input 
              type="text" 
              name="tags" 
              defaultValue={post?.tags || ""}
              placeholder="Niños, Terapia de pareja, Ansiedad"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 mb-4"
            />
            <p className="text-xs text-stone-400">La primera etiqueta será la que se muestre como categoría principal.</p>
          </div>
        </div>

        {/* Editor Tiptap */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-charcoal/80">Contenido de la nota</label>
          <div className="border border-stone-200 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            {/* Toolbar */}
            <div className="bg-stone-50 border-b border-stone-200 p-2 flex flex-wrap gap-1">
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleBold().run()} 
                active={editor.isActive('bold')}
                icon={<Bold size={18} />}
              />
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleItalic().run()} 
                active={editor.isActive('italic')}
                icon={<Italic size={18} />}
              />
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleUnderline().run()} 
                active={editor.isActive('underline')}
                icon={<UnderlineIcon size={18} />}
              />
              <div className="w-px h-6 bg-stone-300 mx-1 self-center" />
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
                active={editor.isActive('heading', { level: 1 })}
                icon={<Heading1 size={18} />}
              />
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
                active={editor.isActive('heading', { level: 2 })}
                icon={<Heading2 size={18} />}
              />
              <div className="w-px h-6 bg-stone-300 mx-1 self-center" />
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleBulletList().run()} 
                active={editor.isActive('bulletList')}
                icon={<List size={18} />}
              />
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleOrderedList().run()} 
                active={editor.isActive('orderedList')}
                icon={<ListOrdered size={18} />}
              />
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleBlockquote().run()} 
                active={editor.isActive('blockquote')}
                icon={<Quote size={18} />}
              />
              <div className="w-px h-6 bg-stone-300 mx-1 self-center" />
              <ToolbarButton 
                onClick={() => editor.chain().focus().undo().run()} 
                icon={<Undo size={18} />}
              />
              <ToolbarButton 
                onClick={() => editor.chain().focus().redo().run()} 
                icon={<Redo size={18} />}
              />
            </div>
            
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-stone-100 flex justify-end">
        <button 
          type="submit" 
          className="bg-primary text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-primary-dark transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          <Save size={20} /> Guardar Artículo
        </button>
      </div>
    </form>
  );
}

function ToolbarButton({ onClick, active, icon }: { onClick: () => void, active?: boolean, icon: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`p-2 rounded-lg transition-colors ${active ? 'bg-primary text-white' : 'text-stone-600 hover:bg-stone-200'}`}
    >
      {icon}
    </button>
  );
}
