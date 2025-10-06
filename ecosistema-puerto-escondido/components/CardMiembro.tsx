"use client";
import Image from "next/image";
import { useState } from "react";

interface Miembro {
  id: string;
  nombre: string;
  fotoUrl: string;
  descripcion: string;
  funcion: string;
  viajes: number;
}

export default function CardMiembro({ miembro }: { miembro: Miembro }) {
  const [expandida, setExpandida] = useState(false);

  return (
    <div
      className={`bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl rounded-xl p-4 flex flex-col transition-all border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-slate-100 cursor-pointer ${expandida ? "max-h-[600px]" : "max-h-80"}`}
      onClick={() => setExpandida((e) => !e)}
      style={{ overflow: "hidden" }}
    >
      <Image
        src={miembro.fotoUrl.replace("./", "/")}
        alt={miembro.nombre}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-semibold text-blue-700 dark:text-blue-300">
        {miembro.nombre}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        {miembro.funcion}
      </p>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
        Viajes realizados: {miembro.viajes}
      </p>

      <div
        className={`transition-all duration-300 ${expandida ? "opacity-100 mt-4" : "opacity-0 h-0 mt-0"}`}
        style={{ pointerEvents: expandida ? "auto" : "none" }}
      >
        <p className="text-sm text-gray-400 dark:text-gray-300">
          {miembro.descripcion}
        </p>
      </div>
    </div>
  );
}
