"use client";

/* Pictogramas SVG del oficio de la piedra seca.
   Diseño placeholder basado en el vocabulario técnico.
   Serán reemplazados por los definitivos del Colectivo Nadie. */

const pictogramas: Record<string, React.FC<{ size?: number; color?: string }>> = {
  paerero: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Figura humana con herramienta */}
      <circle cx="24" cy="10" r="5" fill={color} opacity="0.85" />
      <line x1="24" y1="15" x2="24" y2="30" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="20" x2="32" y2="20" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="30" x2="18" y2="42" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="30" x2="30" y2="42" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Martillo */}
      <rect x="30" y="16" width="10" height="5" rx="1" fill={color} opacity="0.7" />
      <line x1="36" y1="21" x2="36" y2="30" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  aparejo: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Hiladas de piedras con junta escalonada */}
      <rect x="4" y="8" width="18" height="8" rx="1.5" fill={color} opacity="0.9" />
      <rect x="24" y="8" width="20" height="8" rx="1.5" fill={color} opacity="0.65" />
      <rect x="4" y="18" width="12" height="8" rx="1.5" fill={color} opacity="0.65" />
      <rect x="18" y="18" width="26" height="8" rx="1.5" fill={color} opacity="0.9" />
      <rect x="4" y="28" width="22" height="8" rx="1.5" fill={color} opacity="0.9" />
      <rect x="28" y="28" width="16" height="8" rx="1.5" fill={color} opacity="0.65" />
      <rect x="4" y="38" width="10" height="5" rx="1.5" fill={color} opacity="0.65" />
      <rect x="16" y="38" width="20" height="5" rx="1.5" fill={color} opacity="0.9" />
      <rect x="38" y="38" width="6" height="5" rx="1.5" fill={color} opacity="0.65" />
    </svg>
  ),

  "doble-hoja": ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Sección transversal doble hoja */}
      {/* Hoja izquierda */}
      <rect x="2" y="8" width="12" height="32" rx="1.5" fill={color} opacity="0.9" />
      {/* Relleno */}
      <rect x="16" y="8" width="16" height="32" rx="0" fill={color} opacity="0.25" />
      <circle cx="20" cy="16" r="2.5" fill={color} opacity="0.5" />
      <circle cx="28" cy="24" r="2" fill={color} opacity="0.4" />
      <circle cx="22" cy="30" r="3" fill={color} opacity="0.5" />
      {/* Hoja derecha */}
      <rect x="34" y="8" width="12" height="32" rx="1.5" fill={color} opacity="0.9" />
    </svg>
  ),

  cascajo: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Fragmentos pequeños irregulares */}
      <polygon points="8,8 16,6 18,14 10,16" fill={color} opacity="0.8" />
      <polygon points="22,4 30,8 26,16 18,12" fill={color} opacity="0.55" />
      <polygon points="34,6 42,10 40,18 32,14" fill={color} opacity="0.8" />
      <polygon points="6,20 14,18 16,28 6,30" fill={color} opacity="0.55" />
      <polygon points="20,20 28,22 24,32 16,28" fill={color} opacity="0.8" />
      <polygon points="32,18 40,16 42,26 34,28" fill={color} opacity="0.55" />
      <polygon points="8,34 16,32 18,42 8,44" fill={color} opacity="0.8" />
      <polygon points="22,34 30,36 26,44 18,42" fill={color} opacity="0.55" />
      <polygon points="36,32 44,34 42,42 34,40" fill={color} opacity="0.8" />
    </svg>
  ),

  coronamiento: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Muro con coronamiento de bitas verticales */}
      <rect x="4" y="28" width="40" height="8" rx="1" fill={color} opacity="0.5" />
      <rect x="4" y="36" width="40" height="6" rx="1" fill={color} opacity="0.7" />
      {/* Bitas verticales */}
      <rect x="6" y="18" width="6" height="12" rx="1" fill={color} opacity="0.9" />
      <rect x="16" y="14" width="7" height="16" rx="1" fill={color} opacity="0.9" />
      <rect x="27" y="16" width="6" height="14" rx="1" fill={color} opacity="0.9" />
      <rect x="37" y="18" width="6" height="12" rx="1" fill={color} opacity="0.9" />
    </svg>
  ),

  chozo: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Chozo - planta y alzado */}
      {/* Paredes */}
      <path
        d="M24 4 C36 8 42 20 40 36 L8 36 C6 20 12 8 24 4 Z"
        fill={color} opacity="0.15"
        stroke={color} strokeWidth="2"
      />
      {/* Hiladas de piedra en la cúpula */}
      <ellipse cx="24" cy="22" rx="14" ry="3" fill="none" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="24" cy="14" rx="9" ry="2.5" fill="none" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="24" cy="8" rx="4" ry="2" fill="none" stroke={color} strokeWidth="1.2" opacity="0.5" />
      {/* Puerta */}
      <rect x="19" y="30" width="10" height="8" rx="1" fill={color} opacity="0.7" />
      {/* Base */}
      <rect x="4" y="36" width="40" height="4" rx="1" fill={color} opacity="0.7" />
    </svg>
  ),

  majada: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Recinto circular visto desde arriba */}
      <circle cx="24" cy="24" r="19" fill="none" stroke={color} strokeWidth="3.5" opacity="0.9" />
      <circle cx="24" cy="24" r="15" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3" />
      {/* Abertura (entrada) */}
      <line x1="24" y1="5" x2="24" y2="2" stroke="white" strokeWidth="5" />
      <line x1="24" y1="5" x2="24" y2="2" stroke={color} strokeWidth="1" />
      {/* Ovejas esquemáticas */}
      <circle cx="18" cy="24" r="3" fill={color} opacity="0.4" />
      <circle cx="28" cy="20" r="3" fill={color} opacity="0.4" />
      <circle cx="26" cy="30" r="3" fill={color} opacity="0.4" />
    </svg>
  ),

  terraza: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Sección de bancales escalonados */}
      {/* Bancal 1 - inferior */}
      <rect x="2" y="36" width="44" height="6" rx="1" fill={color} opacity="0.9" />
      <rect x="2" y="28" width="6" height="8" rx="0" fill={color} opacity="0.9" />
      {/* Bancal 2 - medio */}
      <rect x="8" y="26" width="36" height="6" rx="1" fill={color} opacity="0.65" />
      <rect x="8" y="18" width="6" height="8" rx="0" fill={color} opacity="0.65" />
      {/* Bancal 3 - superior */}
      <rect x="14" y="16" width="30" height="6" rx="1" fill={color} opacity="0.9" />
      <rect x="14" y="8" width="6" height="8" rx="0" fill={color} opacity="0.9" />
      {/* Bancal 4 - top */}
      <rect x="20" y="6" width="24" height="6" rx="1" fill={color} opacity="0.65" />
    </svg>
  ),

  "falsa-cupula": ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Sección de falsa cúpula por encorbelado */}
      {/* Paredes */}
      <rect x="2" y="36" width="8" height="10" rx="1" fill={color} opacity="0.9" />
      <rect x="38" y="36" width="8" height="10" rx="1" fill={color} opacity="0.9" />
      {/* Hiladas de voladizo */}
      <rect x="3" y="30" width="8" height="6" rx="0.5" fill={color} opacity="0.9" />
      <rect x="37" y="30" width="8" height="6" rx="0.5" fill={color} opacity="0.9" />
      <rect x="5" y="24" width="8" height="6" rx="0.5" fill={color} opacity="0.75" />
      <rect x="35" y="24" width="8" height="6" rx="0.5" fill={color} opacity="0.75" />
      <rect x="8" y="18" width="8" height="6" rx="0.5" fill={color} opacity="0.9" />
      <rect x="32" y="18" width="8" height="6" rx="0.5" fill={color} opacity="0.9" />
      <rect x="12" y="12" width="8" height="6" rx="0.5" fill={color} opacity="0.75" />
      <rect x="28" y="12" width="8" height="6" rx="0.5" fill={color} opacity="0.75" />
      {/* Piedra de cierre */}
      <rect x="18" y="8" width="12" height="6" rx="0.5" fill={color} opacity="0.9" />
    </svg>
  ),

  lecho: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Piedra con plano de lecho marcado */}
      <polygon points="6,20 22,12 42,16 42,32 26,40 6,36" fill={color} opacity="0.18" stroke={color} strokeWidth="1.5" />
      {/* Plano superior - el lecho */}
      <polygon points="6,20 22,12 42,16 26,24" fill={color} opacity="0.6" />
      {/* Flecha indicando el lecho */}
      <line x1="24" y1="6" x2="24" y2="14" stroke={color} strokeWidth="1.5" markerEnd="url(#arr)" />
      <path d="M20,12 L24,6 L28,12" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  ),

  trabazon: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Trabazón: hiladas con juntas escalonadas marcadas */}
      <rect x="4" y="8" width="18" height="9" rx="1.5" fill={color} opacity="0.9" />
      <rect x="24" y="8" width="20" height="9" rx="1.5" fill={color} opacity="0.65" />
      <rect x="4" y="19" width="10" height="9" rx="1.5" fill={color} opacity="0.65" />
      <rect x="16" y="19" width="26" height="9" rx="1.5" fill={color} opacity="0.9" />
      <rect x="4" y="30" width="22" height="9" rx="1.5" fill={color} opacity="0.9" />
      <rect x="28" y="30" width="16" height="9" rx="1.5" fill={color} opacity="0.65" />
      {/* Líneas de junta vertical resaltadas en rojo para mostrar la trabazón */}
      <line x1="22" y1="8" x2="22" y2="17" stroke="#B5622A" strokeWidth="2" opacity="0.8" />
      <line x1="16" y1="19" x2="16" y2="28" stroke="#B5622A" strokeWidth="2" opacity="0.8" />
      <line x1="28" y1="30" x2="28" y2="39" stroke="#B5622A" strokeWidth="2" opacity="0.8" />
    </svg>
  ),

  cuna: ({ size = 48, color = "#3D3520" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Cuña insertada bajo una piedra */}
      <rect x="4" y="28" width="40" height="4" rx="1" fill={color} opacity="0.3" />
      {/* Piedra grande encima */}
      <rect x="8" y="16" width="30" height="12" rx="2" fill={color} opacity="0.75" />
      {/* Cuña triangular */}
      <polygon points="16,28 28,28 22,36" fill="var(--color-terracota)" opacity="0.9" />
      {/* Flecha de inserción */}
      <line x1="22" y1="40" x2="22" y2="32" stroke="var(--color-terracota)" strokeWidth="1.5" />
      <path d="M19,34 L22,40 L25,34" stroke="var(--color-terracota)" strokeWidth="1.5" fill="none" />
    </svg>
  ),
};

export default function Pictograma({
  id,
  size = 48,
  color = "#3D3520",
}: {
  id: string;
  size?: number;
  color?: string;
}) {
  const Icono = pictogramas[id];
  if (!Icono) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="4" width="40" height="40" rx="4" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
        <text x="24" y="30" textAnchor="middle" fontSize="20" fill={color} opacity="0.5">?</text>
      </svg>
    );
  }
  return <Icono size={size} color={color} />;
}
