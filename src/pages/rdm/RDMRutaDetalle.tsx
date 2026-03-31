import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Mountain, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RUTAS } from "@/data/rdm-mock-data";

export default function RDMRutaDetalle() {
  const { id } = useParams<{ id: string }>();
  const ruta = RUTAS.find(r => r.id === id);

  if (!ruta) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Ruta no encontrada</h2>
        <Button asChild><Link to="/rutas">Volver a rutas</Link></Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button variant="ghost" size="sm" asChild className="mb-6 text-muted-foreground">
        <Link to="/rutas"><ArrowLeft className="h-4 w-4 mr-1" /> Volver a rutas</Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{ruta.nombre}</h1>
        <div className="flex items-center gap-3 mt-3">
          <Badge variant="outline" className="capitalize">{ruta.tipo}</Badge>
          <Badge className="capitalize">{ruta.dificultad}</Badge>
          <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {ruta.duracion}</span>
          <span className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {ruta.puntosInteres} puntos</span>
        </div>
      </div>

      <Card className="bg-card/60 border-border/40 mb-6">
        <CardContent className="p-5">
          <h3 className="font-semibold text-foreground mb-2">Descripción</h3>
          <p className="text-sm text-muted-foreground">{ruta.descripcion}</p>
          <p className="text-sm text-muted-foreground mt-2 italic">Esta ruta te llevará por los puntos más representativos de Real del Monte, combinando historia, paisaje y vida cotidiana.</p>
        </CardContent>
      </Card>

      {/* Itinerary */}
      <Card className="bg-card/60 border-border/40 mb-6">
        <CardContent className="p-5">
          <h3 className="font-semibold text-foreground mb-4">Itinerario paso a paso</h3>
          <div className="relative border-l-2 border-primary/30 ml-3 space-y-4">
            {ruta.itinerario.map((it, i) => (
              <div key={i} className="relative pl-6">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-primary shrink-0 mt-0.5 bg-primary/10 px-1.5 py-0.5 rounded">{it.hora}</span>
                  <div>
                    <p className="font-medium text-foreground text-sm">{it.punto}</p>
                    <p className="text-sm text-muted-foreground">{it.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button asChild className="bg-primary text-primary-foreground">
          <Link to={`/mapa?routeId=${ruta.id}`}><MapPin className="h-4 w-4 mr-2" /> Ver en mapa interactivo</Link>
        </Button>
        <Button variant="outline">
          <Share2 className="h-4 w-4 mr-2" /> Compartir ruta
        </Button>
      </div>
    </div>
  );
}
