"use client";
import { useEffect, useState } from "react";

export default function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Evita el renderizado hasta que el cliente esté montado (para que Tailwind lea la clase dark correctamente)
  if (!mounted) return null;
  return <>{children}</>;
}
