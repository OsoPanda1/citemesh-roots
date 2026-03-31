import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Clock, Mountain, MapPin, ChevronRight, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RUTAS } from "@/data/rdm-mock-data";

const TIPOS = ["todos", "histórica", "gastronómica", "natural", "mixta"];
const DIFICULTADES = ["todos", "baja", "media", "alta"];

const DIF_COLORS: Record<string, string> = { baja: "bg-emerald-500/20 text-emerald-300", media: "bg-amber-500/20 text-amber-300", alta: "bg-red-500/20 text-red-300" };

export default function RDMRutas() {
  const [tipoFiltro, setTipoFiltro] = useState("todos");
  const [difFiltro, setDifFiltro] = useState("todos");

  const filtradas = RUTAS.filter(r => {
    return (tipoFiltro === "todos" || r.tipo === tipoFiltro) && (difFiltro === "todos" || r.dificultad === difFiltro);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
          <Route className="h-8 w-8 text-primary" /> Rutas Turísticas por Real del Monte
        </h1>
        <p className="text-muted-foreground mt-2">Elige una ruta según tu tiempo, intereses y nivel de caminata, y recorre el Real de forma inteligente.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <div className="flex gap-1 flex-wrap">
          <span className="text-xs text-muted-foreground self-center mr-1">Tipo:</span>
          {TIPOS.map(t => (
            <Button key={t} variant={tipoFiltro === t ? "default" : "outline"} size="sm" onClick={() => setTipoFiltro(t)} className="capitalize text-xs">{t}</Button>
          ))}
        </div>
        <div className="flex gap-1 flex-wrap">
          <span className="text-xs text-muted-foreground self-center mr-1">Dificultad:</span>
          {DIFICULTADES.map(d => (
            <Button key={d} variant={difFiltro === d ? "default" : "outline"} size="sm" onClick={() => setDifFiltro(d)} className="capitalize text-xs">{d}</Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtradas.map(r => (
          <Card key={r.id} className="bg-card/60 border-border/40 group hover:border-primary/30 transition-all">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{r.nombre}</h3>
                <Badge className={DIF_COLORS[r.dificultad] || ""} >{r.dificultad}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{r.descripcion}</p>
              <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {r.duracion}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.puntosInteres} puntos</span>
                <Badge variant="outline" className="text-[10px] capitalize">{r.tipo}</Badge>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" asChild className="text-xs flex-1">
                  <Link to={`/rutas/${r.id}`}>Ver detalles <ChevronRight className="h-3 w-3 ml-1" /></Link>
                </Button>
                <Button variant="ghost" size="sm" asChild className="text-xs text-primary">
                  <Link to={`/mapa?routeId=${r.id}`}><MapPin className="h-3 w-3 mr-1" /> Mapa</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
