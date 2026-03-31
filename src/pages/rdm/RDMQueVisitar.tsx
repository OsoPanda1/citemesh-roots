import { Link } from "react-router-dom";
import { Eye, MapPin, Clock, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PUNTOS_INTERES } from "@/data/rdm-mock-data";

const SECCIONES = [
  { key: "imprescindible", title: "Imprescindibles", emoji: "⭐", desc: "Lo que no te puedes perder en tu visita" },
  { key: "mirador", title: "Miradores y Paisajes", emoji: "🏔️", desc: "Vistas espectaculares de la sierra" },
  { key: "museo", title: "Museos y Sitios Históricos", emoji: "🏛️", desc: "Patrimonio y conocimiento" },
  { key: "experiencia_minera", title: "Experiencias Mineras", emoji: "⛏️", desc: "Recorridos guiados y descensos a minas" },
];

const HORARIO_LABELS: Record<string, string> = { mañana: "🌅 Mañana", tarde: "🌇 Tarde", noche: "🌙 Noche", cualquiera: "🕐 Cualquier hora" };

export default function RDMQueVisitar() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
          <Eye className="h-8 w-8 text-primary" /> Qué visitar en Real del Monte
        </h1>
        <p className="text-muted-foreground mt-2">Un resumen curado de los lugares imprescindibles, miradores, museos y experiencias mineras que no te puedes perder.</p>
      </div>

      {SECCIONES.map(sec => {
        const items = PUNTOS_INTERES.filter(p => p.categoria === sec.key);
        if (items.length === 0) return null;
        return (
          <section key={sec.key} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{sec.emoji}</span>
              <div>
                <h2 className="text-xl font-bold text-foreground">{sec.title}</h2>
                <p className="text-sm text-muted-foreground">{sec.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map(p => (
                <Card key={p.id} className="bg-card/60 border-border/40">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground">{p.nombre}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.descripcion}</p>
                    <div className="flex gap-3 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.tiempoRecomendado}</span>
                      <span>{HORARIO_LABELS[p.mejorHorario]}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="ghost" size="sm" asChild className="text-xs text-primary">
                        <Link to="/mapa"><MapPin className="h-3 w-3 mr-1" /> Ver en mapa</Link>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs text-muted-foreground" disabled>
                        <Plus className="h-3 w-3 mr-1" /> Agregar a mi ruta
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
