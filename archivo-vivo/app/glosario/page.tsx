"use client";

import { useState } from "react";
import glosarioData from "@/data/glosario.json";
import Pictograma from "@/components/Pictograma";
import { BookOpen, Search } from "lucide-react";

const categorias = [
  { id: "", label: "Todos" },
  { id: "oficio", label: "Oficio" },
  { id: "tecnica", label: "Técnica" },
  { id: "tipologia", label: "Tipología" },
  { id: "material", label: "Material" },
];

const categoriaColor: Record<string, string> = {
  oficio: "#B5622A",
  tecnica: "#3D3520",
  tipologia: "#8B7355",
  material: "#5a7a2a",
};

export default function GlosarioPage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [termSeleccionado, setTermSeleccionado] = useState<typeof glosarioData[0] | null>(null);

  const filtrados = glosarioData.filter((t) => {
    const matchCategoria = !categoriaFiltro || t.categoria === categoriaFiltro;
    const matchBusqueda =
      !busqueda ||
      t.termino.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.definicion.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.sinonimos.some((s) => s.toLowerCase().includes(busqueda.toLowerCase()));
    return matchCategoria && matchBusqueda;
  });

  return (
    <div style={{ minHeight: "calc(100vh - 80px)" }}>
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
            <BookOpen size={22} color="var(--color-terracota)" />
            <span style={{ color: "var(--color-terracota)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Acción A5
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
            Glosario Técnico
          </h1>
          <p style={{ color: "var(--color-piedra-clara)", fontSize: "0.9rem", maxWidth: "640px" }}>
            Términos del oficio del paerero ilustrados con pictogramas vectoriales.
            Vocabulario vivo de la construcción en piedra seca en Los Pedroches.
          </p>
          <p style={{ color: "var(--color-piedra)", fontSize: "0.75rem", marginTop: "6px", fontStyle: "italic" }}>
            Pictogramas: Colectivo Nadie (en desarrollo)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barra de búsqueda y filtros */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          {/* Búsqueda */}
          <div style={{ position: "relative", flex: "1 1 240px" }}>
            <Search
              size={15}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--color-piedra)",
              }}
            />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar término o definición..."
              style={{
                width: "100%",
                padding: "9px 12px 9px 36px",
                borderRadius: "6px",
                border: "1px solid var(--color-piedra-clara)",
                backgroundColor: "var(--color-crema)",
                fontSize: "0.85rem",
                color: "var(--color-tierra)",
                outline: "none",
              }}
            />
          </div>

          {/* Filtros categoría */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaFiltro(cat.id)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "0.78rem",
                  fontWeight: categoriaFiltro === cat.id ? 600 : 400,
                  border: categoriaFiltro === cat.id
                    ? "1.5px solid var(--color-terracota)"
                    : "1px solid var(--color-piedra-clara)",
                  backgroundColor: categoriaFiltro === cat.id
                    ? "rgba(181,98,42,0.1)"
                    : "transparent",
                  color: categoriaFiltro === cat.id
                    ? "var(--color-terracota)"
                    : "var(--color-piedra)",
                  cursor: "pointer",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span style={{ color: "var(--color-piedra)", fontSize: "0.75rem", marginLeft: "auto" }}>
            {filtrados.length} término{filtrados.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Layout: grid + detalle */}
        <div style={{ display: "grid", gridTemplateColumns: termSeleccionado ? "1fr 380px" : "1fr", gap: "24px", alignItems: "start" }}>
          {/* Grid de términos */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {filtrados.map((termino) => {
              const catColor = categoriaColor[termino.categoria] ?? "#8B7355";
              const activo = termSeleccionado?.id === termino.id;
              return (
                <button
                  key={termino.id}
                  onClick={() => setTermSeleccionado(activo ? null : termino)}
                  style={{
                    backgroundColor: activo ? "rgba(181,98,42,0.08)" : "var(--color-crema)",
                    border: activo
                      ? "2px solid var(--color-terracota)"
                      : "1px solid var(--color-piedra-clara)",
                    borderRadius: "8px",
                    padding: "20px 16px",
                    cursor: "pointer",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    transition: "transform 0.1s, border-color 0.1s",
                  }}
                >
                  <Pictograma id={termino.pictograma} size={48} color={catColor} />
                  <div>
                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: "1.05rem",
                        color: "var(--color-tierra)",
                        margin: "0 0 4px",
                        fontWeight: activo ? 600 : 400,
                      }}
                    >
                      {termino.termino}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: catColor,
                        padding: "1px 7px",
                        borderRadius: "8px",
                        backgroundColor: `${catColor}18`,
                      }}
                    >
                      {termino.categoria}
                    </span>
                  </div>
                </button>
              );
            })}

            {filtrados.length === 0 && (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "48px", color: "var(--color-piedra)" }}>
                <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.2rem", marginBottom: "6px" }}>
                  No se encontraron términos
                </p>
                <p style={{ fontSize: "0.82rem" }}>Prueba con otra búsqueda o categoría</p>
              </div>
            )}
          </div>

          {/* Panel de detalle */}
          {termSeleccionado && (
            <div
              style={{
                backgroundColor: "var(--color-crema)",
                border: "1px solid var(--color-piedra-clara)",
                borderRadius: "10px",
                padding: "28px",
                position: "sticky",
                top: "80px",
              }}
            >
              {/* Pictograma grande */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px",
                  backgroundColor: "var(--color-arena)",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  border: "1px solid var(--color-piedra-clara)",
                }}
              >
                <Pictograma
                  id={termSeleccionado.pictograma}
                  size={96}
                  color={categoriaColor[termSeleccionado.categoria] ?? "#3D3520"}
                />
              </div>

              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: categoriaColor[termSeleccionado.categoria] ?? "#8B7355",
                  marginBottom: "6px",
                }}
              >
                {termSeleccionado.categoria}
              </span>

              <h2
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  color: "var(--color-tierra)",
                  fontSize: "1.6rem",
                  margin: "0 0 12px",
                  lineHeight: 1.2,
                }}
              >
                {termSeleccionado.termino}
              </h2>

              <p
                style={{
                  color: "var(--color-tierra)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                }}
              >
                {termSeleccionado.definicion}
              </p>

              {termSeleccionado.sinonimos.length > 0 && (
                <div
                  style={{
                    padding: "10px 14px",
                    backgroundColor: "var(--color-arena)",
                    borderRadius: "5px",
                    border: "1px solid var(--color-piedra-clara)",
                  }}
                >
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-piedra)", marginBottom: "4px" }}>
                    También conocido como
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-tierra)", fontStyle: "italic" }}>
                    {termSeleccionado.sinonimos.join(" · ")}
                  </p>
                </div>
              )}

              <p style={{ fontSize: "0.68rem", color: "var(--color-piedra)", marginTop: "14px", fontStyle: "italic" }}>
                Pictograma: Colectivo Nadie (placeholder) · CC BY-NC-SA
              </p>

              <button
                onClick={() => setTermSeleccionado(null)}
                style={{
                  marginTop: "14px",
                  padding: "7px 14px",
                  borderRadius: "4px",
                  border: "1px solid var(--color-piedra-clara)",
                  backgroundColor: "transparent",
                  color: "var(--color-piedra)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                Cerrar
              </button>
            </div>
          )}
        </div>

        {/* Nota colaboración */}
        <div
          style={{
            marginTop: "40px",
            padding: "16px 20px",
            backgroundColor: "var(--color-arena)",
            borderRadius: "6px",
            border: "1px solid var(--color-piedra-clara)",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>🎨</span>
          <p style={{ fontSize: "0.8rem", color: "var(--color-piedra)", lineHeight: 1.6, margin: 0 }}>
            Los pictogramas definitivos de este glosario serán desarrollados por el{" "}
            <strong style={{ color: "var(--color-tierra)" }}>Colectivo Nadie</strong>, colaboradores
            del proyecto, siguiendo la identidad visual que une tradición y contemporaneidad.
            Los pictogramas actuales son placeholders ilustrativos.
          </p>
        </div>
      </div>
    </div>
  );
}
