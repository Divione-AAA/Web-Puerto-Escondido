# 🌊 Web - Puerto Escondido

## 📝 Resumen
Proyecto web en Next.js que sirve como interfaz para el ecosistema "Puerto Escondido". Contiene componentes para mostrar miembros (cards), un navbar y estilos con TailwindCSS. Actualmente la UI está en modo oscuro por defecto.

## 🎯 Misión
Ofrecer una vista clara y accesible del ecosistema, facilitando la visualización de miembros y relaciones (teoría de grafos aplicada a la comunidad).

## ✨ Importancia
Permite centralizar información de los participantes, facilitar la navegación y probar visualizaciones y componentes reutilizables en Next.js + Tailwind.

## ✅ Requisitos esenciales
- 🖥️ Node.js (recomendado 18.x o superior)  
- 📦 npm (o yarn/pnpm)  
- 🔗 Git

## 🚀 Pasos para inicializar (esenciales)
1. Clonar el repositorio:
   git clone <URL-del-repositorio>
2. Entrar al proyecto:
   cd "Web-Puerto-Escondido"
3. (Opcional) Si hay conflictos de dependencias por React, editar `package.json` y asegurar:
   ```json
   "react": "18.2.0",
   "react-dom": "18.2.0"
   ```
4. Instalar dependencias:
   npm install  
   - Si falla por `peerDependencies`, probar:
     npm install --legacy-peer-deps
5. Ejecutar en desarrollo:
   npm run dev
6. Construir para producción:
   npm run build  
   npm run start

## 📁 Archivos y ubicaciones clave
- 🧭 `app/layout.tsx` — Layout principal  
- 🎨 `app/globals.css` — CSS global y configuración Tailwind  
- ⚙️ `tailwind.config.js` — Configuración Tailwind  
- 🧩 `postcss.config.js` — Configuración PostCSS  
- 🃏 `components/CardMiembro.tsx` — Card de miembro (componente cliente)  
- 🧭 `components/Navbar.tsx` — Barra de navegación  
- 🪝 `hooks/useTheme.ts` — (hoja de tema; puede haber sido eliminada si se forzó modo oscuro)

## ⚠️ Notas y problemas comunes
- Si al ejecutar `npm install` aparece conflicto con paquetes que requieren React 16/17/18 (por ejemplo `vaul`), configurar React a 18.2.0 o actualizar/quitar el paquete conflictivo.  
- Componentes que usan hooks deben ser Client Components (`"use client"`).  
- La app actualmente está forzada en modo oscuro; para cambiar comportamiento del tema revisa hooks y layout.
