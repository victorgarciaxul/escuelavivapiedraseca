"use client";

import { useState } from "react";
import videosData from "@/data/videos.json";
import { Film, Play, Clock, Tag } from "lucide-react";

const colecciones = [
  { id: "documental", label: "Documental Etnográfico", descripcion: "Pieza documental colaborativa que visibiliza el proceso, los actores y los resultados del proyecto." },
  { id: "oralidades", label: "Oralidades Vivas", descripcion: "Serie de testimonios en vídeo de portadores del saber: maestros locales, paereros y mujeres constructoras." },
  { id: "pildoras", label: "Píldoras Formativas", descripcion: "Vídeos breves de apoyo a los módulos formativos. Disponibles con libre acceso." },
];

const estadoColor: Record<string, { bg: string; text: string; label: string }> = {
  listo: { bg: "#2d6a1f22", text: "#2d6a1f", label: "Disponible" },
  editado: { bg: "#3D352022", text: "#5a8a30", label: "Editado" },
  "en edición": { bg: "#B5622A22", text: "#B5622A", label: "En edición" },
  "en producción": { bg: "#8B735522", text: "#8B7355", label: "En producción" },
};

export default function RepositorioPage() {
  const [coleccionActiva, setColeccionActiva] = useState("documental");

  const videos = videosData.filter((v) => v.coleccion === coleccionActiva);

  return (
    <div style={{ minHeight: "calc(100vh - 64px)" }}>
      {/* Cabecera */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--color-tierra) 0%, var(--color-oscuro) 100%)",
          borderBottom: "3px solid var(--color-terracota)",
          padding: "40px 0 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Film size={22} color="var(--color-terracota)" />
            <span
              style={{ color: "var(--color-terracota)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Acción A5–A6
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: "var(--color-crema)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              margin: "0 0 8px",
            }}
          >
            Repositorio Audiovisual
          </h1>
          <p style={{ color: "var(--color-piedra-clara)", fontSize: "0.9rem", maxWidth: "620px" }}>
            Documentación audiovisual del proceso formativo y comunitario: testimonios orales, escenas de
            aprendizaje y vínculos interculturales en torno a la piedra seca de Los Pedroches.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tabs de colección */}
        <div
          style={{
            display: "flex",
            gap: "2px",
            borderBottom: "2px solid var(--color-piedra-clara)",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          {colecciones.map((col) => (
            <button
              key={col.id}
              onClick={() => setColeccionActiva(col.id)}
              style={{
                padding: "10px 20px",
                fontFamily: "'Crimson Pro', serif",
                fontSize: "1rem",
                fontWeight: coleccionActiva === col.id ? 600 : 400,
                color: coleccionActiva === col.id ? "var(--color-terracota)" : "var(--color-piedra)",
                backgroundColor: "transparent",
                border: "none",
                borderBottom: coleccionActiva === col.id ? "3px solid var(--color-terracota)" : "3px solid transparent",
                cursor: "pointer",
                marginBottom: "-2px",
                transition: "color 0.15s",
              }}
            >
              {col.label}
              <span
                style={{
                  marginLeft: "6px",
                  fontSize: "0.7rem",
                  backgroundColor: "var(--color-arena)",
                  color: "var(--color-piedra)",
                  padding: "1px 6px",
                  borderRadius: "10px",
                }}
              >
                {videosData.filter((v) => v.coleccion === col.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Descripción de colección activa */}
        {colecciones.find((c) => c.id === coleccionActiva) && (
          <p
            style={{
              color: "var(--color-piedra)",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              marginBottom: "24px",
              padding: "12px 16px",
              backgroundColor: "var(--color-arena)",
              borderRadius: "6px",
              borderLeft: "3px solid var(--color-terracota)",
            }}
          >
            {colecciones.find((c) => c.id === coleccionActiva)?.descripcion}
          </p>
        )}

        {/* Grid de vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => {
            const estado = estadoColor[video.estado] ?? estadoColor["en producción"];
            const disponible = video.estado === "listo" || video.estado === "editado";
            return (
              <div
                key={video.id}
                style={{
                  backgroundColor: "var(--color-crema)",
                  border: "1px solid var(--color-piedra-clara)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Miniatura */}
                <div
                  style={{
                    backgroundColor: video.thumbColor,
                    height: "160px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Patrón de piedra decorativo */}
                  <svg width="100%" height="100%" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
                    <rect x="0" y="0" width="80" height="24" rx="2" fill="#C4A882" />
                    <rect x="84" y="0" width="100" height="24" rx="2" fill="#F5F0E8" />
                    <rect x="188" y="0" width="112" height="24" rx="2" fill="#C4A882" />
                    <rect x="0" y="28" width="120" height="24" rx="2" fill="#F5F0E8" />
                    <rect x="124" y="28" width="70" height="24" rx="2" fill="#C4A882" />
                    <rect x="198" y="28" width="102" height="24" rx="2" fill="#F5F0E8" />
                    <rect x="0" y="56" width="60" height="24" rx="2" fill="#C4A882" />
                    <rect x="64" y="56" width="90" height="24" rx="2" fill="#F5F0E8" />
                    <rect x="158" y="56" width="142" height="24" rx="2" fill="#C4A882" />
                  </svg>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                      border: "2px solid rgba(255,255,255,0.35)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Play size={20} color="white" fill="white" style={{ marginLeft: "3px" }} />
                  </div>
                  {/* Badge estado */}
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "0.62rem",
                      fontWeight: 600,
                      padding: "3px 8px",
                      borderRadius: "10px",
                      backgroundColor: estado.bg,
                      color: estado.text,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {estado.label}
                  </span>
                </div>

                {/* Contenido */}
                <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      color: "var(--color-tierra)",
                      fontSize: "1.05rem",
                      margin: "0 0 8px",
                      lineHeight: 1.35,
                    }}
                  >
                    {video.titulo}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--color-piedra)",
                      lineHeight: 1.55,
                      flex: 1,
                      margin: "0 0 12px",
                    }}
                  >
                    {video.descripcion}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.72rem", color: "var(--color-piedra)" }}>
                      <Clock size={12} />
                      {video.duracion}
                    </span>
                    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      {video.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            fontSize: "0.62rem",
                            padding: "2px 6px",
                            borderRadius: "8px",
                            backgroundColor: "var(--color-arena)",
                            color: "var(--color-piedra)",
                          }}
                        >
                          <Tag size={8} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón */}
                <div style={{ padding: "0 16px 16px" }}>
                  <button
                    disabled={!disponible}
                    style={{
                      width: "100%",
                      padding: "9px",
                      borderRadius: "5px",
                      border: "none",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      cursor: disponible ? "pointer" : "not-allowed",
                      backgroundColor: disponible ? "var(--color-terracota)" : "var(--color-arena)",
                      color: disponible ? "white" : "var(--color-piedra)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <Play size={13} />
                    {disponible ? "Ver vídeo" : "Próximamente"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota CC */}
        <div
          style={{
            marginTop: "40px",
            padding: "14px 16px",
            backgroundColor: "var(--color-arena)",
            borderRadius: "6px",
            border: "1px solid var(--color-piedra-clara)",
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>©</span>
          <p style={{ fontSize: "0.78rem", color: "var(--color-piedra)", lineHeight: 1.5, margin: 0 }}>
            Todos los contenidos audiovisuales de este repositorio están disponibles bajo licencia{" "}
            <strong style={{ color: "var(--color-tierra)" }}>Creative Commons BY-NC-SA 4.0</strong>.
            Puedes compartirlos y adaptarlos con fines no comerciales citando el proyecto «Escuela Viva de Piedra Seca» y Fundación XUL.
          </p>
        </div>
      </div>
    </div>
  );
}
