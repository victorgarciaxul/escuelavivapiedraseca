"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Construccion = {
  id: string;
  nombre: string;
  municipio: string;
  tipo: string;
  estado: string;
  lat: number;
  lng: number;
  descripcion: string;
  materiales: string[];
  tecnica: string;
  fechaDocumentacion: string;
  testimonio: string | null;
  testimonioAutor: string | null;
  fotos: string[];
  tags: string[];
};

const colorEstado: Record<string, string> = {
  "muy bueno": "#2d6a1f",
  bueno: "#5a8a30",
  "parcialmente deteriorado": "#b5622a",
  deteriorado: "#8b2a1a",
};

const colorTipo: Record<string, string> = {
  muro: "#3D3520",
  cercado: "#8B7355",
  terraza: "#5a7a2a",
  chozo: "#B5622A",
  corraliza: "#6a4a20",
  majada: "#4a3a20",
};

function createIcon(tipo: string, estado: string) {
  const bg = colorTipo[tipo] ?? "#3D3520";
  const border = colorEstado[estado] ?? "#8B7355";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 10 16 24 16 24S32 26 32 16C32 7.163 24.837 0 16 0z" fill="${bg}" stroke="${border}" stroke-width="2.5"/>
    <circle cx="16" cy="16" r="7" fill="rgba(255,255,255,0.25)"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });
}

function FitBounds({ construcciones }: { construcciones: Construccion[] }) {
  const map = useMap();
  useEffect(() => {
    if (construcciones.length > 0) {
      const bounds = L.latLngBounds(construcciones.map((c) => [c.lat, c.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [map, construcciones]);
  return null;
}

export default function MapaInteractivo({
  construcciones,
  filtroMunicipio,
  filtroTipo,
}: {
  construcciones: Construccion[];
  filtroMunicipio: string;
  filtroTipo: string;
}) {
  const [seleccionada, setSeleccionada] = useState<Construccion | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fix Leaflet default icon paths in Next.js
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  if (!mounted) return (
    <div style={{ height: "100%", backgroundColor: "var(--color-arena)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "var(--color-piedra)", fontFamily: "'Inter', sans-serif" }}>Cargando mapa...</p>
    </div>
  );

  const filtradas = construcciones.filter((c) => {
    if (filtroMunicipio && c.municipio !== filtroMunicipio) return false;
    if (filtroTipo && c.tipo !== filtroTipo) return false;
    return true;
  });

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <MapContainer
        center={[38.458, -4.693]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds construcciones={filtradas} />
        {filtradas.map((c) => (
          <Marker
            key={c.id}
            position={[c.lat, c.lng]}
            icon={createIcon(c.tipo, c.estado)}
            eventHandlers={{ click: () => setSeleccionada(c) }}
          >
            <Popup>
              <div style={{ fontFamily: "'Inter', sans-serif", minWidth: "200px" }}>
                <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", fontWeight: 600, color: "#2C2416", margin: "0 0 4px" }}>
                  {c.nombre}
                </p>
                <p style={{ fontSize: "0.72rem", color: "#8B7355", margin: "0 0 6px" }}>
                  {c.municipio} · {c.tipo}
                </p>
                <p style={{ fontSize: "0.75rem", color: "#3D3520", lineHeight: 1.4, margin: 0 }}>
                  {c.descripcion.slice(0, 120)}…
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Panel lateral de detalle */}
      {seleccionada && (
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            width: "300px",
            maxHeight: "calc(100% - 24px)",
            overflowY: "auto",
            backgroundColor: "var(--color-crema)",
            border: "1px solid var(--color-piedra-clara)",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(44,36,22,0.2)",
            zIndex: 1000,
            padding: "16px",
          }}
        >
          <button
            onClick={() => setSeleccionada(null)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-piedra)",
              fontSize: "1.2rem",
              lineHeight: 1,
            }}
            aria-label="Cerrar"
          >
            ×
          </button>

          <span
            style={{
              display: "inline-block",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "var(--color-terracota)",
              textTransform: "uppercase",
              marginBottom: "4px",
            }}
          >
            {seleccionada.tipo} · {seleccionada.municipio}
          </span>

          <h3
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: "var(--color-tierra)",
              fontSize: "1.1rem",
              margin: "0 0 8px",
              paddingRight: "20px",
            }}
          >
            {seleccionada.nombre}
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: colorEstado[seleccionada.estado] ?? "#8B7355",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "0.75rem", color: "var(--color-piedra)", textTransform: "capitalize" }}>
              Estado: {seleccionada.estado}
            </span>
          </div>

          <p style={{ fontSize: "0.8rem", color: "var(--color-tierra)", lineHeight: 1.6, marginBottom: "12px" }}>
            {seleccionada.descripcion}
          </p>

          <div style={{ marginBottom: "10px" }}>
            <p style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--color-piedra)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Técnica
            </p>
            <p style={{ fontSize: "0.78rem", color: "var(--color-tierra)" }}>{seleccionada.tecnica}</p>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <p style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--color-piedra)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Materiales
            </p>
            <p style={{ fontSize: "0.78rem", color: "var(--color-tierra)" }}>{seleccionada.materiales.join(", ")}</p>
          </div>

          {seleccionada.testimonio && (
            <div
              style={{
                backgroundColor: "var(--color-arena)",
                borderLeft: "3px solid var(--color-terracota)",
                padding: "10px 12px",
                borderRadius: "0 4px 4px 0",
                marginBottom: "10px",
              }}
            >
              <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "var(--color-tierra)", lineHeight: 1.5, margin: 0 }}>
                "{seleccionada.testimonio}"
              </p>
              {seleccionada.testimonioAutor && (
                <p style={{ fontSize: "0.68rem", color: "var(--color-piedra)", marginTop: "6px" }}>
                  — {seleccionada.testimonioAutor}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-1 mt-2">
            {seleccionada.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.65rem",
                  padding: "2px 7px",
                  borderRadius: "10px",
                  backgroundColor: "var(--color-arena)",
                  color: "var(--color-piedra)",
                  border: "1px solid var(--color-piedra-clara)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p style={{ fontSize: "0.65rem", color: "var(--color-piedra)", marginTop: "10px" }}>
            Documentado: {seleccionada.fechaDocumentacion}
          </p>
        </div>
      )}
    </div>
  );
}
