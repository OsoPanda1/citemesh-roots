import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { MapPin, Layers, Eye, Store, Landmark, Route, ZoomIn, ZoomOut, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllMapMarkers, RUTAS } from "@/data/rdm-mock-data";

const LAYER_CONFIG = [
  { key: "punto_interes", label: "Puntos de interés", icon: Eye, color: "bg-emerald-500" },
  { key: "comercio", label: "Comercios", icon: Store, color: "bg-amber-500" },
  { key: "patrimonio", label: "Patrimonio minero", icon: Landmark, color: "bg-blue-500" },
  { key: "ruta_inicio", label: "Rutas", icon: Route, color: "bg-purple-500" },
];

export default function RDMMapa() {
  const [searchParams] = useSearchParams();
  const routeId = searchParams.get("routeId");
  const [activeLayers, setActiveLayers] = useState<string[]>(["punto_interes", "comercio", "patrimonio"]);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  const allMarkers = useMemo(() => getAllMapMarkers(), []);
  const visibleMarkers = allMarkers.filter(m => activeLayers.includes(m.tipo));
  const activeRoute = routeId ? RUTAS.find(r => r.id === routeId) : null;
  const selected = allMarkers.find(m => m.id === selectedMarker);

  const toggleLayer = (key: string) => {
    setActiveLayers(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  };

  // Approximate positions for the visual map
  const CENTER = { lat: 20.1335, lng: -98.6735 };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
          <MapPin className="h-8 w-8 text-primary" /> Mapa Interactivo de Real del Monte
        </h1>
        <p className="text-muted-foreground mt-2">Explora en un solo mapa los puntos de interés, comercios, rutas y sitios históricos del Real.</p>
        <p className="text-xs text-muted-foreground/60 mt-1">Haz zoom, mueve el mapa y toca un marcador para ver más información y abrir la ficha completa del lugar.</p>
      </div>

      {activeRoute && (
        <Card className="bg-primary/5 border-primary/30 mb-4">
          <CardContent className="p-3 flex items-center gap-3">
            <Route className="h-5 w-5 text-primary" />
            <div>
              <span className="text-sm font-medium text-foreground">Ruta activa: {activeRoute.nombre}</span>
              <span className="text-xs text-muted-foreground ml-2">{activeRoute.duracion} · {activeRoute.puntosInteres} puntos</span>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Sidebar - Layers */}
        <div className="lg:col-span-1 space-y-3">
          <Card className="bg-card/60 border-border/40">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <Layers className="h-4 w-4 text-primary" /> Capas
              </h3>
              <div className="space-y-2">
                {LAYER_CONFIG.map(l => (
                  <button
                    key={l.key}
                    onClick={() => toggleLayer(l.key)}
                    className={`w-full flex items-center gap-2 text-sm p-2 rounded-md transition-colors ${
                      activeLayers.includes(l.key) ? "bg-muted/50 text-foreground" : "text-muted-foreground hover:bg-muted/20"
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${activeLayers.includes(l.key) ? l.color : "bg-muted"}`} />
                    <l.icon className="h-3.5 w-3.5" />
                    {l.label}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">{visibleMarkers.length} marcadores visibles</p>
            </CardContent>
          </Card>

          {/* Selected marker info */}
          {selected && (
            <Card className="bg-card/60 border-primary/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground text-sm">{selected.nombre}</h4>
                <Badge variant="outline" className="text-[10px] mt-1 capitalize">{selected.categoria}</Badge>
                <div className="mt-3">
                  <Button variant="outline" size="sm" asChild className="text-xs w-full">
                    <Link to={selected.enlace}>Ver ficha completa</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Map area */}
        <div className="lg:col-span-3">
          <Card className="bg-card/60 border-border/40 overflow-hidden">
            <div className="relative bg-muted/20 aspect-[16/10] min-h-[400px]">
              {/* Visual map representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-muted/10 to-amber-900/10" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(hsl(var(--border) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }} />

              {/* Center label */}
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-md px-3 py-1.5 text-xs text-muted-foreground border border-border/40">
                Real del Monte · 20.1335°N, 98.6735°W · 2,700 msnm
              </div>

              {/* Zoom controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8 bg-background/80"><ZoomIn className="h-3.5 w-3.5" /></Button>
                <Button variant="outline" size="icon" className="h-8 w-8 bg-background/80"><ZoomOut className="h-3.5 w-3.5" /></Button>
              </div>

              {/* Markers */}
              <div className="absolute inset-8 relative">
                {visibleMarkers.map((m, i) => {
                  const x = ((m.coords.lng - CENTER.lng + 0.01) / 0.02) * 100;
                  const y = ((CENTER.lat - m.coords.lat + 0.01) / 0.02) * 100;
                  const layerCfg = LAYER_CONFIG.find(l => l.key === m.tipo);
                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMarker(m.id)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 group z-10 transition-all ${selectedMarker === m.id ? "scale-150 z-20" : "hover:scale-125"}`}
                      style={{ left: `${Math.min(95, Math.max(5, x))}%`, top: `${Math.min(95, Math.max(5, y))}%` }}
                      title={m.nombre}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 border-background shadow-lg ${layerCfg?.color || "bg-primary"} ${selectedMarker === m.id ? "ring-2 ring-primary ring-offset-1 ring-offset-background" : ""}`} />
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[10px] text-foreground bg-background/90 px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {m.nombre}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-md px-3 py-2 flex gap-3 text-[10px] border border-border/40">
                {LAYER_CONFIG.filter(l => activeLayers.includes(l.key)).map(l => (
                  <span key={l.key} className="flex items-center gap-1 text-muted-foreground">
                    <div className={`w-2 h-2 rounded-full ${l.color}`} /> {l.label}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-[9px] text-muted-foreground/50 border border-border/40 flex items-center gap-1">
                <Info className="h-2.5 w-2.5" /> Mapa visual · Integración con Leaflet en V2
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
