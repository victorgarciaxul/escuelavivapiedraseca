"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import construccionesData from "@/data/construcciones.json";
import { MapPin } from "lucide-react";

const MapaInteractivo = dynamic(() => import("@/components/MapaInteractivo"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-arena)",
      }}
    >
      <p style={{ color: "var(--color-piedra)", fontFamily: "'Inter', sans-serif" }}>Cargando mapa...</p>
    </div>
  ),
});

const tiposUnicos = Array.from(new Set(construccionesData.map((c) => c.tipo)));
const municipiosUnicos = Array.from(new Set(construccionesData.map((c) => c.municipio)));

const colorEstado: Record<string, string> = {
  "muy bueno": "#2d6a1f",
  bueno: "#5a8a30",
  "parcialmente deteriorado": "#b5622a",
  deteriorado: "#8b2a1a",
};

export default function MapaPage() {
  const [filtroMunicipio, setFiltroMunicipio] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  const filtradas = construccionesData.filter((c) => {
    if (filtroMunicipio && c.municipio !== filtroMunicipio) return false;
    if (filtroTipo && c.tipo !== filtroTipo) return false;
    return true;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 80px)" }}>
      {/* Barra superior */}
      <div
        style={{
          backgroundColor: "var(--color-oscuro)",
          borderBottom: "2px solid var(--color-terracota)",
          padding: "12px 20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "16px",
          flexShrink: 0,
        }}
      >
        <div className="flex items-center gap-2">
          <MapPin size={18} color="var(--color-terracota)" />
          <h1
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: "var(--color-crema)",
              fontSize: "1.15rem",
              margin: 0,
            }}
          >
            Mapa Georreferenciado · Inventario de Construcciones
          </h1>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginLeft: "auto", alignItems: "center" }}>
          {/* Filtro municipio */}
          <select
            value={filtroMunicipio}
            onChange={(e) => setFiltroMunicipio(e.target.value)}
            style={{
              backgroundColor: "var(--color-tierra)",
              color: "var(--color-crema)",
              border: "1px solid var(--color-piedra)",
              borderRadius: "4px",
              padding: "5px 10px",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            <option value="">Todos los municipios</option>
            {municipiosUnicos.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          {/* Filtro tipo */}
          <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
            style={{
              backgroundColor: "var(--color-tierra)",
              color: "var(--color-crema)",
              border: "1px solid var(--color-piedra)",
              borderRadius: "4px",
              padding: "5px 10px",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            <option value="">Todos los tipos</option>
            {tiposUnicos.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <span style={{ color: "var(--color-piedra-clara)", fontSize: "0.78rem" }}>
            {filtradas.length} construcción{filtradas.length !== 1 ? "es" : ""}
          </span>
        </div>
      </div>

      {/* Contenedor principal: mapa + lista lateral */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Lista lateral izquierda */}
        <div
          style={{
            width: "280px",
            flexShrink: 0,
            overflowY: "auto",
            backgroundColor: "var(--color-arena)",
            borderRight: "1px solid var(--color-piedra-clara)",
          }}
          className="hidden lg:block"
        >
          <div style={{ padding: "12px" }}>
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "var(--color-piedra)",
                textTransform: "uppercase",
                marginBottom: "8px",
                padding: "0 4px",
              }}
            >
              Inventario ({filtradas.length})
            </p>
            {filtradas.map((c) => (
              <div
                key={c.id}
                style={{
                  padding: "10px 12px",
                  marginBottom: "6px",
                  borderRadius: "6px",
                  backgroundColor: "var(--color-crema)",
                  border: "1px solid var(--color-piedra-clara)",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: colorEstado[c.estado] ?? "#8B7355",
                      flexShrink: 0,
                      marginTop: "5px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: "0.9rem",
                        color: "var(--color-tierra)",
                        margin: "0 0 2px",
                        lineHeight: 1.3,
                      }}
                    >
                      {c.nombre}
                    </p>
                    <p style={{ fontSize: "0.68rem", color: "var(--color-piedra)", margin: 0 }}>
                      {c.municipio} · {c.tipo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mapa */}
        <div style={{ flex: 1, position: "relative" }}>
          <MapaInteractivo
            construcciones={construccionesData}
            filtroMunicipio={filtroMunicipio}
            filtroTipo={filtroTipo}
          />
        </div>
      </div>

      {/* Leyenda inferior móvil */}
      <div
        style={{
          backgroundColor: "var(--color-oscuro)",
          borderTop: "1px solid var(--color-tierra)",
          padding: "8px 16px",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "var(--color-piedra-clara)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          Estado:
        </span>
        {Object.entries(colorEstado).map(([estado, color]) => (
          <div key={estado} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: color, display: "inline-block" }} />
            <span style={{ color: "var(--color-arena)", fontSize: "0.68rem", textTransform: "capitalize" }}>{estado}</span>
          </div>
        ))}
        <span style={{ color: "var(--color-piedra)", fontSize: "0.65rem", marginLeft: "auto" }}>
          Datos: Proyecto Escuela Viva de Piedra Seca · Fundación XUL 2025
        </span>
      </div>
    </div>
  );
}
