import "./globals.css";

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="es" className="dark">
      <body className="bg-gray-50 text-gray-800 dark:bg-slate-800 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
