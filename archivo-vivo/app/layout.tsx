import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Escuela Viva de Piedra Seca — Archivo Vivo",
  description:
    "Plataforma digital del proyecto Escuela Viva de Piedra Seca en Los Pedroches. Archivo vivo interactivo financiado por el Ministerio de Cultura de España.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "var(--color-crema)", color: "var(--color-oscuro)" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
