import Link from "next/link";
import Image from "next/image";
import { Map, Film, GraduationCap, BookOpen, ChevronRight, ArrowRight } from "lucide-react";

const secciones = [
  {
    href: "/mapa",
    icon: Map,
    titulo: "Mapa Georreferenciado",
    accion: "A1",
    descripcion:
      "Explora el visor interactivo con muros y construcciones tradicionales documentadas en Los Pedroches.",
    color: "var(--color-tierra)",
  },
  {
    href: "/repositorio",
    icon: Film,
    titulo: "Repositorio Audiovisual",
    accion: "A5–A6",
    descripcion:
      "Documentales, testimonios de portadores del saber y píldoras formativas sobre la técnica ancestral.",
    color: "var(--color-terracota)",
  },
  {
    href: "/formacion",
    icon: GraduationCap,
    titulo: "Entorno de Formación",
    accion: "A3",
    descripcion:
      "Itinerario pedagógico híbrido con manuales de buenas prácticas y materiales descargables.",
    color: "#8B7355",
  },
  {
    href: "/glosario",
    icon: BookOpen,
    titulo: "Glosario Técnico",
    accion: "A5",
    descripcion:
      "Términos del oficio del paerero ilustrados con la simbología tradicional de la piedra seca.",
    color: "var(--color-tierra)",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Piedra Seca Landscape"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            {/* UNESCO Tag */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-dark">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase">
                UNESCO 2018 · Patrimonio Inmaterial
              </span>
            </div>

            <h1
              style={{ fontFamily: "'Crimson Pro', serif" }}
              className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight"
            >
              Escuela Viva de<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-piedra-clara)] to-[var(--color-arena)]">
                Piedra Seca
              </span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed">
              Preservando el conocimiento tradicional de la construcción en piedra seca en Los Pedroches, Córdoba. Un puente entre el pasado y el futuro sostenible.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/mapa"
                className="group flex items-center gap-3 px-8 py-4 bg-[var(--color-terracota)] text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-2xl shadow-orange-900/20"
              >
                Explorar Archivo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/formacion"
                className="flex items-center gap-3 px-8 py-4 glass-dark text-white rounded-full font-semibold transition-all hover:bg-white/10"
              >
                Acceder a Formación
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em]">Explorar</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-24 bg-[var(--color-arena)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
           <Image src="/images/texture.png" alt="" fill className="object-cover rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-4xl text-[var(--color-terracota)] font-serif italic mb-6 block">"</span>
          <blockquote
            style={{ fontFamily: "'Crimson Pro', serif" }}
            className="text-[var(--color-tierra)] text-2xl md:text-4xl italic font-medium leading-snug mb-8"
          >
            "Las piedras se hablan entre sí, solo hay que escucharlas y colocarlas donde quieren estar."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-px bg-[var(--color-piedra-clara)]" />
             <p className="text-[var(--color-piedra)] font-bold tracking-widest text-xs uppercase">
               Manuel R., Maestro Paerero
             </p>
             <div className="w-12 h-px bg-[var(--color-piedra-clara)]" />
          </div>
        </div>
      </section>

      {/* Grid Secciones */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-tierra)]">
              Descubre el <br />
              <span className="italic font-serif">Archivo Vivo</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg font-light">
              Un ecosistema digital diseñado para la salvaguarda del Patrimonio Cultural Inmaterial. Navega a través de nuestro inventario georreferenciado y recursos educativos.
            </p>
          </div>
          <Link href="/glosario" className="text-[var(--color-terracota)] font-bold flex items-center gap-2 group">
             Ver todos los recursos <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secciones.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group relative h-[400px] rounded-[32px] overflow-hidden flex flex-col p-8 transition-all hover:scale-[1.02] hover:shadow-2xl"
                style={{ backgroundColor: idx % 2 === 0 ? 'var(--color-tierra)' : 'var(--color-crema)', border: idx % 2 !== 0 ? '1px solid var(--color-piedra-clara)' : 'none' }}
              >
                <div className={`mb-auto w-14 h-14 rounded-2xl flex items-center justify-center ${idx % 2 === 0 ? 'bg-white/10' : 'bg-[var(--color-terracota)]/10'}`}>
                  <Icon size={28} color={idx % 2 === 0 ? 'var(--color-piedra-clara)' : 'var(--color-terracota)'} />
                </div>
                
                <div className="z-10">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block ${idx % 2 === 0 ? 'text-white/50' : 'text-[var(--color-terracota)]'}`}>
                    ACCIÓN {s.accion}
                  </span>
                  <h3 className={`text-2xl font-bold mb-4 ${idx % 2 === 0 ? 'text-white' : 'text-[var(--color-tierra)]'}`}>
                    {s.titulo}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${idx % 2 === 0 ? 'text-white/60' : 'text-[var(--text-secondary)]'}`}>
                    {s.descripcion}
                  </p>
                  <div className={`flex items-center gap-2 font-bold text-sm ${idx % 2 === 0 ? 'text-white' : 'text-[var(--color-terracota)]'}`}>
                    Explorar <ArrowRight size={16} />
                  </div>
                </div>
                
                {/* Decoration background */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5 grayscale pointer-events-none">
                   <Image src="/images/texture.png" alt="" fill className="object-cover" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Territorio Section */}
      <section className="bg-[var(--color-tierra)] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image src="/images/texture.png" alt="Texture" fill className="object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
                El Territorio: <br />
                <span className="text-[var(--color-piedra-clara)] font-serif italic">Los Pedroches</span>
              </h2>
              <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
                La comarca de Los Pedroches, en el norte de Córdoba, alberga uno de los patrimonios de piedra seca más singulares de Europa. Muros de granito, chozos y majadas que dibujan un paisaje cultural milenario ahora en riesgo de desaparición.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-2 border-[var(--color-terracota)] pl-6">
                  <span className="text-white text-4xl font-bold block mb-1">2</span>
                  <span className="text-white/50 text-xs uppercase tracking-widest">Municipios Foco</span>
                </div>
                <div className="border-l-2 border-[var(--color-terracota)] pl-6">
                  <span className="text-white text-4xl font-bold block mb-1">6+</span>
                  <span className="text-white/50 text-xs uppercase tracking-widest">Monumentos Mapeados</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl shadow-black/50">
               <Image src="/images/hero.png" alt="Landscape" fill className="object-cover" />
               <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Info */}
      <section className="py-20 text-center bg-white">
        <p className="text-[var(--color-piedra)] text-xs uppercase tracking-[0.4em] font-bold mb-4">
          Patrocinado por
        </p>
        <div className="flex justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
           <Image src="/images/ministerio-cultura.png" alt="Ministerio de Cultura" width={200} height={60} className="h-12 w-auto" />
        </div>
      </section>
    </div>
  );
}
