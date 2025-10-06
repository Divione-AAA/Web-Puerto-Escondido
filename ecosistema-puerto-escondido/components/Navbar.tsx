"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/miembros", label: "Miembros" },
  { href: "/actividades", label: "Actividades" },
  { href: "/articulos", label: "Artículos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo + Nombre */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Logo del Proyecto"
            width={36}
            height={36}
            priority
          />
          <span className="font-semibold text-gray-800 dark:text-slate-100 text-lg">
            Puerto Escondido
          </span>
        </Link>

        {/* Enlaces */}
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              } transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}
