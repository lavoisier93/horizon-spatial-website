import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";

// Fix pour les icônes Leaflet avec Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Réparer les icônes par défaut
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// GeoJSON simplifié des limites de la Côte d'Ivoire
const COTE_DIVOIRE_BOUNDS: GeoJSON.Feature = {
  type: "Feature",
  properties: { name: "Côte d'Ivoire" },
  geometry: {
    type: "Polygon",
    coordinates: [[
      [-8.599, 4.736], [-8.389, 4.897], [-8.029, 5.195], [-7.544, 5.313],
      [-7.395, 5.213], [-7.269, 5.143], [-6.959, 5.200], [-6.661, 5.250],
      [-6.389, 5.150], [-5.897, 5.117], [-5.518, 5.128], [-5.273, 5.289],
      [-5.158, 5.439], [-4.976, 5.278], [-4.714, 5.217], [-4.339, 5.160],
      [-3.926, 5.096], [-3.617, 5.128], [-3.227, 5.132], [-2.940, 5.110],
      [-2.856, 5.187], [-2.898, 5.373], [-3.071, 5.466], [-3.243, 6.071],
      [-3.119, 6.226], [-2.939, 6.353], [-2.657, 6.440], [-2.658, 6.734],
      [-2.831, 7.181], [-2.628, 7.578], [-2.563, 8.019], [-2.628, 8.327],
      [-2.822, 8.604], [-3.010, 9.044], [-3.082, 9.377], [-3.271, 9.625],
      [-3.616, 9.949], [-3.790, 10.159], [-4.181, 10.296], [-4.477, 10.320],
      [-4.850, 10.389], [-5.262, 10.319], [-5.508, 10.293], [-5.812, 10.138],
      [-6.089, 10.072], [-6.242, 10.124], [-6.404, 10.390], [-6.702, 10.366],
      [-6.941, 10.152], [-7.359, 10.093], [-7.500, 10.199], [-7.650, 10.420],
      [-7.892, 10.223], [-8.071, 10.098], [-8.204, 9.918], [-8.214, 9.693],
      [-8.117, 9.446], [-8.029, 9.251], [-7.895, 8.967], [-7.859, 8.587],
      [-8.033, 8.405], [-8.145, 8.201], [-8.244, 7.897], [-8.379, 7.608],
      [-8.514, 7.379], [-8.505, 7.092], [-8.401, 6.844], [-8.337, 6.599],
      [-8.516, 6.444], [-8.523, 6.187], [-8.484, 5.876], [-8.350, 5.548],
      [-8.271, 5.242], [-8.439, 5.038], [-8.599, 4.736]
    ]]
  }
};

// Créer une icône personnalisée
const createCustomIcon = (color: string, number?: number) => {
  const svg = `
    <svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 16 24 16 24s16-15.163 16-24C32 7.163 24.837 0 16 0z" fill="${color}"/>
      <circle cx="16" cy="14" r="8" fill="white"/>
      ${number !== undefined ? `<text x="16" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="${color}">${number}</text>` : ''}
    </svg>
  `;
  return L.divIcon({
    html: svg,
    className: "custom-marker",
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });
};

// Hook pour ajuster la vue sur la Côte d'Ivoire
function FitBoundsToCI() {
  const map = useMap();
  useEffect(() => {
    // Bounds de la Côte d'Ivoire
    const bounds = L.latLngBounds(
      [4.3, -8.6], // Sud-Ouest
      [10.7, -2.5]  // Nord-Est
    );
    map.fitBounds(bounds, { padding: [20, 20] });
  }, [map]);
  return null;
}

// Composant de carte simple pour Contact
interface SimpleMapProps {
  center: [number, number];
  zoom?: number;
  markerPosition?: [number, number];
  markerTitle?: string;
  markerContent?: React.ReactNode;
  className?: string;
  height?: string;
}

export function SimpleMap({
  center,
  zoom = 15,
  markerPosition,
  markerTitle,
  markerContent,
  className,
  height = "300px",
}: SimpleMapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={cn("w-full rounded-xl z-0", className)}
      style={{ height }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerPosition && (
        <Marker position={markerPosition} icon={createCustomIcon("#0047AB")}>
          {(markerTitle || markerContent) && (
            <Popup>
              {markerTitle && <strong>{markerTitle}</strong>}
              {markerContent}
            </Popup>
          )}
        </Marker>
      )}
    </MapContainer>
  );
}

// Types pour les projets
interface Project {
  title: string;
  location: string;
  category: string;
  year: string;
  coordinates: { lat: number; lng: number };
}

interface ProjectsMapProps {
  projects: Project[];
  categoryColors: Record<string, string>;
  activeProject?: number | null;
  onProjectClick?: (index: number) => void;
  className?: string;
}

// Composant pour centrer sur un projet
function CenterOnProject({ project, trigger }: { project: Project | null; trigger: number }) {
  const map = useMap();
  useEffect(() => {
    if (project) {
      map.flyTo([project.coordinates.lat, project.coordinates.lng], 9, {
        duration: 1
      });
    }
  }, [project, trigger, map]);
  return null;
}

export function ProjectsMap({
  projects,
  categoryColors,
  activeProject,
  onProjectClick,
  className,
}: ProjectsMapProps) {
  const activeProjectData = activeProject !== null && activeProject !== undefined 
    ? projects[activeProject] 
    : null;

  return (
    <MapContainer
      center={[7.54, -5.55]}
      zoom={6}
      className={cn("w-full h-full rounded-3xl z-0", className)}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Limites de la Côte d'Ivoire */}
      <GeoJSON
        data={COTE_DIVOIRE_BOUNDS}
        style={{
          color: "#0047AB",
          weight: 2,
          fillColor: "#0047AB",
          fillOpacity: 0.05,
        }}
      />
      
      {/* Fit sur les bounds au chargement */}
      <FitBoundsToCI />
      
      {/* Centrer sur le projet actif */}
      <CenterOnProject project={activeProjectData} trigger={activeProject ?? -1} />
      
      {/* Marqueurs des projets */}
      {projects.map((project, index) => {
        const color = categoryColors[project.category] || "#0047AB";
        const isActive = activeProject === index;
        
        return (
          <Marker
            key={index}
            position={[project.coordinates.lat, project.coordinates.lng]}
            icon={createCustomIcon(color, index + 1)}
            eventHandlers={{
              click: () => onProjectClick?.(index),
            }}
          >
            <Popup>
              <div className="min-w-[200px]">
                <span
                  className="inline-block px-2 py-0.5 rounded-full text-white text-xs font-medium mb-2"
                  style={{ backgroundColor: color }}
                >
                  {project.category}
                </span>
                <h3 className="font-bold text-sm mb-1">{project.title}</h3>
                <p className="text-xs text-gray-600">📍 {project.location}</p>
                <p className="text-xs text-gray-500">📅 {project.year}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

