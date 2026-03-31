import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Landmark, Clock, MapPin, Calendar, Filter, Mountain } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TIMELINE_HISTORIA, TRADICIONES, PATRIMONIO_MINERO } from "@/data/rdm-mock-data";
import culturaHero from "@/assets/rdm-cultura-hero.jpg";

const TIPO_COLORS: Record<string, string> = {
  religiosa: "bg-blue-500/20 text-blue-300",
  cívica: "bg-emerald-500/20 text-emerald-300",
  gastronómica: "bg-orange-500/20 text-orange-300",
  minera: "bg-amber-500/20 text-amber-300",
  comunitaria: "bg-purple-500/20 text-purple-300",
};

const TIPO_PM: Record<string, string> = {
  mina: "⛏️ Mina",
  hacienda: "🏛️ Hacienda",
  museo: "🏛️ Museo",
  túnel: "🕳️ Túnel",
};

export default function RDMCultura() {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "historia";
  const [filtroTipo, setFiltroTipo] = useState<string>("todos");

  const tradicionesFiltradas = filtroTipo === "todos" ? TRADICIONES : TRADICIONES.filter(t => t.tipo === filtroTipo);

  return (
    <div>
      {/* Header */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img src={culturaHero} alt="Cultura de Real del Monte" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 px-4 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Landmark className="h-8 w-8 text-primary" /> Cultura e Historia
          </h1>
          <p className="text-muted-foreground mt-1">Conoce el origen minero, las tradiciones vivas y el patrimonio que hacen único a este Pueblo Mágico.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue={defaultTab}>
          <TabsList className="bg-muted/50 mb-8">
            <TabsTrigger value="historia">Historia</TabsTrigger>
            <TabsTrigger value="tradiciones">Cultura y Tradiciones</TabsTrigger>
            <TabsTrigger value="patrimonio">Patrimonio Minero</TabsTrigger>
          </TabsList>

          {/* ─── HISTORIA ─── */}
          <TabsContent value="historia">
            <p className="text-muted-foreground mb-8">Recorre las etapas clave de Real del Monte, desde los primeros trabajos mineros hasta su reconocimiento como Pueblo Mágico.</p>
            <div className="relative border-l-2 border-primary/30 ml-4 space-y-8">
              {TIMELINE_HISTORIA.map((h, i) => (
                <motion.div key={h.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                  <Card className="bg-card/60 border-border/40">
                    <CardContent className="p-5">
                      <Badge variant="outline" className="mb-2">{h.yearRange}</Badge>
                      <h3 className="text-lg font-semibold text-foreground">{h.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{h.description}</p>
                      <Button variant="ghost" size="sm" asChild className="mt-3 text-primary">
                        <Link to="/mapa"><MapPin className="h-3 w-3 mr-1" /> Ver en mapa</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* ─── TRADICIONES ─── */}
          <TabsContent value="tradiciones">
            <p className="text-muted-foreground mb-6">Fiestas, festivales, procesiones y costumbres que mantienen viva la identidad del Real.</p>
            <div className="flex gap-2 mb-6 flex-wrap">
              {["todos", "religiosa", "cívica", "gastronómica", "minera", "comunitaria"].map(t => (
                <Button key={t} variant={filtroTipo === t ? "default" : "outline"} size="sm" onClick={() => setFiltroTipo(t)} className="capitalize text-xs">
                  {t}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tradicionesFiltradas.map(t => (
                <Card key={t.id} className="bg-card/60 border-border/40">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground">{t.nombre}</h3>
                      <Badge className={TIPO_COLORS[t.tipo] || ""}>{t.tipo}</Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {t.fecha}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {t.ubicacion}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">{t.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ─── PATRIMONIO ─── */}
          <TabsContent value="patrimonio">
            <p className="text-muted-foreground mb-8">Minas, haciendas, túneles y museos que testimonian siglos de trabajo bajo la tierra.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PATRIMONIO_MINERO.map(p => (
                <Card key={p.id} className="bg-card/60 border-border/40">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{TIPO_PM[p.tipo]?.split(" ")[0]}</span>
                      <Badge variant="outline" className="text-xs">{TIPO_PM[p.tipo]?.split(" ").slice(1).join(" ") || p.tipo}</Badge>
                    </div>
                    <h3 className="font-semibold text-foreground">{p.nombre}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.descripcion}</p>
                    {p.horario && <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1"><Clock className="h-3 w-3" /> {p.horario}</p>}
                    <Button variant="ghost" size="sm" asChild className="mt-3 text-primary">
                      <Link to="/mapa"><MapPin className="h-3 w-3 mr-1" /> Ver en mapa</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
