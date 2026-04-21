"use client";
import { useState } from "react";

import modulosData from "@/data/modulos.json";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Download, ExternalLink, Monitor, Users, Layers, CheckCircle2, Clock, ArrowRight } from "lucide-react";

const modalidadConfig: Record<string, { icon: typeof Monitor; color: string; label: string }> = {
  online: { icon: Monitor, color: "#3D3520", label: "Online" },
  presencial: { icon: Users, color: "#B5622A", label: "Presencial" },
  mixto: { icon: Layers, color: "#8B7355", label: "Mixto" },
};

const estadoConfig: Record<string, { color: string; label: string }> = {
  abierto: { color: "#2d6a1f", label: "Abierto" },
  "pendiente convocatoria": { color: "#B5622A", label: "Pendiente convocatoria" },
  pendiente: { color: "#8B7355", label: "Próximamente" },
};

export default function FormacionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Cabecera */}
      <div className="relative py-24 bg-[var(--color-tierra)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image src="/images/texture.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[var(--color-terracota)]/20 text-[var(--color-terracota)]">
              <GraduationCap size={24} />
            </div>
            <span className="text-[var(--color-terracota)] text-xs font-bold tracking-widest uppercase">
              Acción A3
            </span>
          </div>
          <h1
            style={{ fontFamily: "'Crimson Pro', serif" }}
            className="text-white text-4xl md:text-6xl font-bold mb-6"
          >
            Entorno de Formación
          </h1>
          <p className="text-white/60 text-lg max-w-2xl font-light leading-relaxed">
            Itinerario pedagógico híbrido diseñado para la salvaguarda de la técnica de la piedra seca. Desde la historia y las oralidades vivas hasta la práctica técnica y microproyectos locales.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

        {/* Aviso Moodle */}
        <div className="glass border-[var(--color-piedra-clara)]/30 rounded-3xl p-8 mb-16 flex flex-col md:flex-row gap-6 items-start transition-all hover:shadow-xl">
          <div className="p-3 rounded-2xl bg-[var(--color-terracota)]/10 text-[var(--color-terracota)]">
             <ExternalLink size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-tierra)] mb-2">
              Integración Institucional
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              En colaboración con la <strong>Granja Escuela Pedroche</strong>, este entorno actúa como pasarela técnica. Los módulos online se gestionan directamente aquí, mientras que la formación presencial y el aula virtual extendida se integran mediante sistemas de interoperabilidad.
            </p>
            <div className="flex items-center gap-2 text-[var(--color-terracota)] font-bold text-xs uppercase tracking-widest">
               Sincronización en curso <span className="flex h-2 w-2 rounded-full bg-[var(--color-terracota)] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Módulos */}
        <div className="grid grid-cols-1 gap-12">
          {modulosData.map((modulo, idx) => {
            const modalidad = modalidadConfig[modulo.modalidad] ?? modalidadConfig.online;
            const estado = estadoConfig[modulo.estado] ?? estadoConfig.pendiente;
            const ModalidadIcon = modalidad.icon;
            const abierto = modulo.estado === "abierto";

            return (
              <div
                key={modulo.id}
                className="group bg-white rounded-[40px] border border-[var(--color-piedra-clara)]/20 overflow-hidden transition-all hover:shadow-2xl flex flex-col lg:flex-row shadow-sm"
              >
                {/* Lateral Módulo Info */}
                <div 
                   className="lg:w-72 p-10 flex flex-col justify-between"
                   style={{ backgroundColor: modalidad.color }}
                >
                  <div>
                    <span className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4 block">
                      Módulo {modulo.id}
                    </span>
                    <h2 className="text-white text-2xl font-bold font-serif mb-6 leading-tight">
                      {modulo.titulo}
                    </h2>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <ModalidadIcon size={18} />
                      {modalidad.label}
                    </div>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${abierto ? 'bg-white/20 text-white' : 'bg-black/20 text-white/70'}`}>
                       {abierto ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                       {estado.label}
                    </div>
                  </div>
                </div>

                {/* Contenido Módulo */}
                <div className="flex-1 p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-[var(--color-terracota)] text-sm font-bold mb-2">{modulo.subtitulo}</p>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
                        {modulo.descripcion}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-piedra)] mb-3 block">Objetivos</span>
                        <ul className="space-y-2">
                          {modulo.objetivos.slice(0, 3).map((obj) => (
                            <li key={obj} className="flex gap-3 text-xs text-[var(--text-secondary)]">
                              <span className="text-[var(--color-terracota)]">●</span> {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[var(--color-arena)]/50 rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-piedra)] mb-4 block">Recursos del Módulo</span>
                      <div className="space-y-3 mb-8">
                        {modulo.materiales.map((mat) => (
                          <div key={mat.titulo} className="flex items-center justify-between group/file">
                             <span className="text-xs text-[var(--color-tierra)] font-medium">{mat.titulo}</span>
                             {mat.disponible ? (
                               <a href={mat.archivo} download className="p-2 rounded-full bg-white text-[var(--color-terracota)] shadow-sm hover:scale-110 transition-transform">
                                  <Download size={14} />
                               </a>
                             ) : (
                               <span className="p-2 rounded-full bg-white/50 text-gray-400">
                                  <Clock size={14} />
                               </span>
                             )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {abierto ? (
                      <Link
                        href={`/formacion/${modulo.id}`}
                        className="flex items-center justify-center gap-3 py-4 bg-[var(--color-terracota)] text-white rounded-2xl font-bold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-orange-900/10"
                      >
                        Iniciar Formación <ArrowRight size={18} />
                      </Link>
                    ) : (
                      <div className="py-4 bg-gray-200 text-gray-500 rounded-2xl font-bold text-sm text-center">
                        Acceso Restringido
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Formulario Section */}
        <div className="mt-32 relative rounded-[48px] overflow-hidden bg-[var(--color-tierra)] p-12 md:p-20 text-white">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 grayscale pointer-events-none">
              <Image src="/images/texture.png" alt="" fill className="object-cover" />
           </div>
           
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Evaluación <br /> <span className="text-[var(--color-piedra-clara)] font-serif italic">del Impacto</span>
              </h2>
              <p className="text-white/60 text-lg font-light mb-12">
                Participa en la salvaguarda activa. Antes de comenzar el itinerario, necesitamos conocer tu perfil para adaptar la experiencia formativa.
              </p>
              
              {submitted ? (
                <div className="bg-white/10 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[var(--color-terracota)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Evaluación Enviada</h3>
                  <p className="text-white/60 mb-8">
                    Gracias por tu participación. Tu perfil ha sido registrado y ahora tienes acceso completo al itinerario formativo.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    Enviar otra evaluación
                  </button>
                </div>
              ) : (
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                  <div className="md:col-span-2">
                    <input required type="text" placeholder="Nombre completo" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-terracota)] transition-colors" />
                  </div>
                  <div>
                    <input required type="email" placeholder="Email institucional/personal" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-terracota)] transition-colors" />
                  </div>
                  <div>
                    <input required type="text" placeholder="Municipio" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-terracota)] transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full py-5 bg-[var(--color-terracota)] text-white rounded-2xl font-bold transition-all hover:bg-[var(--color-terracota)]/90 hover:scale-[1.01]">
                      Enviar Evaluación y Acceder
                    </button>
                  </div>
                </form>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
