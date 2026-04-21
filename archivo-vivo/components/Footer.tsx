import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[var(--color-tierra)] border-t border-[var(--color-piedra-clara)]/10">
      {/* Banda superior */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          {/* Columna 1: Proyecto */}
          <div className="md:col-span-2">
            <h3
              style={{ fontFamily: "'Crimson Pro', serif" }}
              className="text-[var(--color-piedra-clara)] text-2xl font-bold mb-6"
            >
              Escuela Viva de Piedra Seca
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
              Plataforma digital dedicada a la salvaguarda y difusión del conocimiento tradicional de la construcción en piedra seca. Un proyecto de la Fundación XUL para el Ministerio de Cultura de España.
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Identidad Visual</span>
              <span className="text-white/80 text-sm">Colectivo Nadie</span>
            </div>
          </div>

          {/* Columna 2: Secciones */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: "/mapa", label: "Mapa Interactivo" },
                { href: "/repositorio", label: "Archivo Audiovisual" },
                { href: "/formacion", label: "Módulos de Formación" },
                { href: "/glosario", label: "Glosario de Términos" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Colaboradores */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Promovido por</h4>
            <a
              href="https://www.fundacionxul.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block mb-8"
            >
              <span className="text-white/80 text-sm font-bold group-hover:text-[var(--color-terracota)] transition-colors">Fundación XUL</span>
              <span className="text-white/40 text-xs block mt-1">Innovación Social y Cultural</span>
            </a>
            
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">Con el apoyo de</h4>
            <div className="rounded-xl bg-white p-4 inline-block">
               <Image
                 src="/images/ministerio-cultura.png"
                 alt="Ministerio de Cultura"
                 width={160}
                 height={50}
                 className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
            </div>
          </div>
        </div>
      </div>

      {/* Banda inferior */}
      <div className="bg-black/20 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <CCIcon />
            <p className="text-white/40 text-xs">
              Contenidos bajo licencia{" "}
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Creative Commons BY-NC-SA 4.0
              </a>
            </p>
          </div>
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Fundación XUL · Archivo Vivo
          </p>
        </div>
      </div>
    </footer>
  );
}

function CCIcon() {
  return (
    <svg width="52" height="18" viewBox="0 0 52 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Creative Commons BY-NC-SA">
      <rect width="52" height="18" rx="9" fill="#4A4A4A" />
      <text x="6" y="13" fontFamily="Arial" fontSize="9" fontWeight="bold" fill="white">CC</text>
      <text x="22" y="13" fontFamily="Arial" fontSize="9" fontWeight="bold" fill="white">BY</text>
      <text x="34" y="13" fontFamily="Arial" fontSize="8" fontWeight="bold" fill="#ffcc00">NC</text>
    </svg>
  );
}
