import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Phone, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COMERCIOS } from "@/data/rdm-mock-data";

export default function RDMComercioDetalle() {
  const { id } = useParams<{ id: string }>();
  const comercio = COMERCIOS.find(c => c.id === id);

  if (!comercio) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Comercio no encontrado</h2>
        <Button asChild><Link to="/comercios">Volver al catálogo</Link></Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button variant="ghost" size="sm" asChild className="mb-6 text-muted-foreground">
        <Link to="/comercios"><ArrowLeft className="h-4 w-4 mr-1" /> Volver al catálogo</Link>
      </Button>

      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{comercio.nombre}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="capitalize">{comercio.categoria}</Badge>
            <Badge className="bg-muted text-muted-foreground capitalize text-xs">{comercio.precio}</Badge>
            <Badge className="bg-primary/10 text-primary text-xs">{comercio.zona}</Badge>
          </div>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link to="/mapa"><MapPin className="h-3 w-3 mr-1" /> Ver en mapa</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Description */}
          <Card className="bg-card/60 border-border/40">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Descripción</h3>
              <p className="text-sm text-muted-foreground">{comercio.descripcion}</p>
            </CardContent>
          </Card>

          {/* Specialties */}
          <Card className="bg-card/60 border-border/40">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                {comercio.especialidades.map(e => (
                  <Badge key={e} variant="outline" className="text-sm">{e}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="bg-card/60 border-border/40">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Servicios</h3>
              <div className="grid grid-cols-2 gap-2">
                {comercio.servicios.map(s => (
                  <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-primary" /> {s}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews placeholder */}
          <Card className="bg-card/60 border-border/40">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Opiniones</h3>
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} className={`h-4 w-4 ${i <= 4 ? "text-primary fill-primary" : "text-muted"}`} />)}
                <span className="text-sm text-muted-foreground ml-2">4.0 / 5</span>
              </div>
              <p className="text-sm text-muted-foreground italic">Información próximamente. Este comercio forma parte del catálogo piloto de Real del Monte Digital.</p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card className="bg-card/60 border-border/40">
            <CardContent className="p-5 space-y-3">
              <h3 className="font-semibold text-foreground">Datos de contacto</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> {comercio.direccion}</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-primary" /> {comercio.horario}</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> {comercio.telefono}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
