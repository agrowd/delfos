# Registro de Errores

## ERR-XX: Nombre del error (Fecha)
**SÃ­ntoma:** 
**Root Cause:** 
**SoluciÃ³n:** 
**Commit:** 
**Estado:**

## ERR-01: Turbopack Memory Leak y Module Resolution en root dir (2026-04-01)
**Síntoma:** Fatal JavaScript out of memory (MemoryChunk allocation failed) al ejecutar npm run dev.
**Root Cause:** Existía un archivo package.json huérfano en C:\Users\Try Hard\ que engañaba al motor de resolución (Turbopack/Webpack). Intentaba resolver tailwindcss subiendo por el árbol de directorios hasta encontrar el package.json root.
**Solución:** Borrar el archivo C:\Users\Try Hard\package.json y C:\Users\Try Hard\package-lock.json. Limpiar la carpeta .next cacheada.
**Estado:** ? FIXED

## ERR-02: CSS @import order con Tailwind v4 (2026-04-01)
**Síntoma:** Build Error - '@import rules must precede all rules aside from @charset and @layer statements' en globals.css.
**Root Cause:** Tailwind v4 usa '@import tailwindcss' que expande a reglas @layer. Un @import url() de Google Fonts ubicado después viola la especificación CSS.
**Solución:** Mover la carga de Google Fonts de CSS @import a tags <link> en layout.tsx.
**Estado:** ? FIXED
