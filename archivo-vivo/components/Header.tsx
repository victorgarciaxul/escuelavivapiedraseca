"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/mapa", label: "Mapa" },
  { href: "/repositorio", label: "Repositorio" },
  { href: "/formacion", label: "Formación" },
  { href: "/glosario", label: "Glosario" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="glass-dark sticky top-0 z-[1100] transition-all duration-300"
      style={{ borderBottom: "1px solid rgba(212, 196, 168, 0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + nombre proyecto */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="p-1 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
              <StoneIcon />
            </div>
            <div className="flex flex-col">
              <span
                style={{ fontFamily: "'Crimson Pro', serif", color: "var(--color-crema)" }}
                className="text-xl font-bold leading-none tracking-tight"
              >
                Escuela Viva
              </span>
              <span 
                style={{ color: "var(--color-piedra-clara)" }}
                className="text-xs uppercase tracking-widest font-medium mt-1"
              >
                de Piedra Seca
              </span>
            </div>
          </Link>

          {/* Nav escritorio */}
          <nav className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "var(--color-crema)" }}
                className="px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-6 pl-6 border-l border-white/10">
              <MinisterioCulturaLogo />
            </div>
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10"
            style={{ color: "var(--color-crema)" }}
            aria-label="Abrir menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div
          className="md:hidden glass-dark border-t border-white/10 px-4 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: "var(--color-crema)" }}
              className="px-4 py-3 text-lg font-medium rounded-xl hover:bg-white/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 pt-6 border-t border-white/10 flex justify-center">
            <MinisterioCulturaLogo />
          </div>
        </div>
      )}
    </header>
  );
}

function StoneIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="20" width="14" height="7" rx="1" fill="#C4A882" />
      <rect x="18" y="20" width="16" height="7" rx="1" fill="#8B7355" />
      <rect x="2" y="12" width="10" height="7" rx="1" fill="#8B7355" />
      <rect x="14" y="12" width="20" height="7" rx="1" fill="#C4A882" />
      <rect x="2" y="4" width="18" height="7" rx="1" fill="#C4A882" />
      <rect x="22" y="4" width="12" height="7" rx="1" fill="#8B7355" />
    </svg>
  );
}

function MinisterioCulturaLogo() {
  return (
    <a
      href="https://www.cultura.gob.es/"
      target="_blank"
      rel="noopener noreferrer"
      title="Proyecto financiado por el Ministerio de Cultura — Gobierno de España"
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "4px",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image
        src="/images/ministerio-cultura.png"
        alt="Ministerio de Cultura — Gobierno de España"
        width={155}
        height={50}
        priority
        style={{ display: "block", height: "50px", width: "auto" }}
      />
    </a>
  );
}
