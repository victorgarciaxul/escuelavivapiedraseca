"use client";

import { useParams, useRouter } from "next/navigation";
import modulosData from "@/data/modulos.json";
import videosData from "@/data/videos.json";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  BookOpen, 
  Download, 
  CheckCircle2, 
  ChevronRight,
  Monitor,
  Users,
  Layers
} from "lucide-react";

const modalidadConfig: Record<string, { icon: any; color: string; label: string }> = {
  online: { icon: Monitor, color: "#3D3520", label: "Online" },
  presencial: { icon: Users, color: "#B5622A", label: "Presencial" },
  mixto: { icon: Layers, color: "#8B7355", label: "Mixto" },
};

export default function ModuloDetallePage() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id as string);

  const modulo = modulosData.find((m) => m.id === id);

  if (!modulo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Módulo no encontrado</h1>
          <Link href="/formacion" className="text-[var(--color-terracota)] font-bold">
            Volver a Formación
          </Link>
        </div>
      </div>
    );
  }

  const modalidad = modalidadConfig[modulo.modalidad] ?? modalidadConfig.online;
  const ModalidadIcon = modalidad.icon;

  // Filtrar videos que pertenecen a este módulo
  const videosModulo = videosData.filter(v => modulo.videos.includes(v.id));

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header / Hero */}
      <div className="relative py-20 bg-[var(--color-tierra)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/texture.png" alt="" fill className="object-cover" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Volver al Itinerario
          </button>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest">
                  Módulo {modulo.id}
                </span>
                <span className="flex items-center gap-2 text-[var(--color-piedra-clara)] text-[10px] font-bold uppercase tracking-widest">
                   <ModalidadIcon size={14} />
                   {modalidad.label}
                </span>
              </div>
              <h1 
                style={{ fontFamily: "'Crimson Pro', serif" }}
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                {modulo.titulo}
              </h1>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                {modulo.subtitulo}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-[var(--color-terracota)]/20 text-[var(--color-terracota)]">
                  <Clock size={20} />
                </div>
                <div>
                   <span className="text-white/40 text-[10px] font-bold uppercase block">Duración Estimada</span>
                   <span className="text-white font-bold">{modulo.duracion}</span>
                </div>
              </div>
              <div className="h-px bg-white/10 mb-4" />
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-green-500/20 text-green-500">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                   <span className="text-white/40 text-[10px] font-bold uppercase block">Estado</span>
                   <span className="text-white font-bold">Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Descripción */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-tierra)] mb-6 flex items-center gap-3">
                <div className="w-8 h-1 bg-[var(--color-terracota)] rounded-full" />
                Introducción al Módulo
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-lg font-light">
                {modulo.descripcion}
              </p>
            </section>

            {/* Videos / Píldoras */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-tierra)] mb-8 flex items-center gap-3">
                <div className="w-8 h-1 bg-[var(--color-terracota)] rounded-full" />
                Contenidos Audiovisuales
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                {videosModulo.length > 0 ? (
                  videosModulo.map((video) => (
                    <div 
                      key={video.id}
                      className="group bg-white rounded-3xl border border-[var(--color-piedra-clara)]/20 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-all"
                    >
                      <div 
                        className="md:w-64 aspect-video md:aspect-auto relative flex items-center justify-center overflow-hidden"
                        style={{ backgroundColor: video.thumbColor }}
                      >
                         <div className="absolute inset-0 opacity-20">
                            <Image src="/images/texture.png" alt="" fill className="object-cover" />
                         </div>
                         <button className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play size={24} fill="white" />
                         </button>
                      </div>
                      <div className="flex-1 p-8">
                        <div className="flex items-center justify-between mb-2">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-terracota)]">{video.coleccion}</span>
                           <span className="text-xs text-gray-400 font-medium">{video.duracion}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[var(--color-tierra)] mb-3">{video.titulo}</h3>
                        <p className="text-sm text-[var(--text-secondary)] line-clamp-2 font-light">
                          {video.descripcion}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-12 rounded-3xl bg-[var(--color-arena)]/30 border border-dashed border-[var(--color-piedra-clara)] text-center">
                    <p className="text-[var(--text-secondary)] italic">No hay vídeos específicos cargados para este módulo aún.</p>
                  </div>
                )}
              </div>
            </section>

            {/* Objetivos */}
            <section className="bg-[var(--color-tierra)] rounded-[40px] p-10 md:p-16 text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                  <Image src="/images/texture.png" alt="" fill className="object-cover" />
               </div>
               <h2 className="text-3xl font-bold mb-10 font-serif">Objetivos de <br/><span className="text-[var(--color-piedra-clara)] italic">Aprendizaje</span></h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {modulo.objetivos.map((obj, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-terracota)] font-bold text-xs">
                        {i + 1}
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {obj}
                      </p>
                    </div>
                  ))}
               </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            
            {/* Listado de Contenidos */}
            <div className="glass rounded-[32px] p-8 border-[var(--color-piedra-clara)]/30">
               <h3 className="text-lg font-bold text-[var(--color-tierra)] mb-6 flex items-center gap-2">
                 <BookOpen size={20} className="text-[var(--color-terracota)]" />
                 Índice del Módulo
               </h3>
               <ul className="space-y-4">
                  {modulo.contenidos.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                       <span className="text-[var(--color-terracota)] font-bold">{i+1}.</span>
                       {item}
                    </li>
                  ))}
               </ul>
            </div>

            {/* Descargables */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[var(--color-piedra-clara)]/10">
               <h3 className="text-lg font-bold text-[var(--color-tierra)] mb-6 flex items-center gap-2">
                 <Download size={20} className="text-[var(--color-terracota)]" />
                 Recursos PDF
               </h3>
               <div className="space-y-4">
                  {modulo.materiales.map((mat, i) => (
                    <div key={i} className={`p-4 rounded-2xl flex items-center justify-between border transition-all ${mat.disponible ? 'border-[var(--color-piedra-clara)]/20 hover:border-[var(--color-terracota)]/50' : 'bg-gray-50 border-transparent opacity-60'}`}>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[var(--color-tierra)]">{mat.titulo}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">{mat.disponible ? 'Descargar PDF' : 'Próximamente'}</span>
                      </div>
                      {mat.disponible ? (
                        <a href={mat.archivo} download className="p-2 rounded-full bg-[var(--color-terracota)] text-white shadow-md">
                           <Download size={14} />
                        </a>
                      ) : (
                        <div className="p-2 rounded-full bg-gray-200 text-gray-400">
                           <Clock size={14} />
                        </div>
                      )}
                    </div>
                  ))}
               </div>
            </div>

            {/* Siguiente Módulo (Si existe) */}
            {modulosData.find(m => m.id === id + 1) && (
              <Link 
                href={`/formacion/${id + 1}`}
                className="group block p-8 bg-[var(--color-arena)] rounded-[32px] transition-all hover:bg-[var(--color-piedra-clara)]/20"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-terracota)] mb-2 block">Siguiente Módulo</span>
                <div className="flex items-center justify-between">
                   <h4 className="text-xl font-bold text-[var(--color-tierra)]">
                     {modulosData.find(m => m.id === id + 1)?.titulo.split(':')[1] || modulosData.find(m => m.id === id + 1)?.titulo}
                   </h4>
                   <ChevronRight className="group-hover:translate-x-2 transition-transform text-[var(--color-terracota)]" />
                </div>
              </Link>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
