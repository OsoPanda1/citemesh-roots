import { useState } from "react";
import { Link } from "react-router-dom";
import { Utensils, ChevronRight, MapPin, Route } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PLATILLOS, RUTAS_GASTRONOMICAS } from "@/data/rdm-mock-data";
import gastroHero from "@/assets/rdm-gastronomia-hero.jpg";

export default function RDMGastronomia() {
  const platillos = PLATILLOS.filter(p => p.categoria === "platillo");
  const dulces = PLATILLOS.filter(p => p.categoria === "dulce");
  const bebidas = PLATILLOS.filter(p => p.categoria === "bebida");

  return (
    <div>
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img src={gastroHero} alt="Gastronomía de Real del Monte" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 px-4 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Utensils className="h-8 w-8 text-primary" /> Sabores de Real del Monte
          </h1>
          <p className="text-muted-foreground mt-1">Un recorrido por los platillos, dulces y bebidas que han hecho famoso al Real dentro y fuera de México.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="platillos">
          <TabsList className="bg-muted/50 mb-8">
            <TabsTrigger value="platillos">Platillos Típicos</TabsTrigger>
            <TabsTrigger value="dulces">Dulces y Pan</TabsTrigger>
            <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
            <TabsTrigger value="rutas">Rutas Gastronómicas</TabsTrigger>
          </TabsList>

          {[
            { value: "platillos", items: platillos, intro: "Platillos emblemáticos que debes probar al visitar Real del Monte." },
            { value: "dulces", items: dulces, intro: "Dulces artesanales y panes que cuentan historias de generaciones." },
            { value: "bebidas", items: bebidas, intro: "Bebidas tradicionales para acompañar el frío de la montaña." },
          ].map(section => (
            <TabsContent key={section.value} value={section.value}>
              <p className="text-muted-foreground mb-6">{section.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map(p => (
                  <Card key={p.id} className="bg-card/60 border-border/40">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground text-lg">{p.nombre}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{p.descripcion}</p>
                      <p className="text-xs text-muted-foreground/70 mt-2 italic">{p.origen}</p>
                      <div className="mt-3 flex gap-1 flex-wrap">
                        {p.comerciosRecomendados.map(c => (
                          <Link key={c} to={`/comercios/${c}`}>
                            <Badge variant="outline" className="text-xs hover:bg-primary/10 cursor-pointer">Ver comercio</Badge>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}

          <TabsContent value="rutas">
            <p className="text-muted-foreground mb-6">Diseña tu visita a partir de la comida: rutas para degustar pastes, café, dulces y cocina tradicional.</p>
            <div className="space-y-4">
              {RUTAS_GASTRONOMICAS.map(r => (
                <Card key={r.id} className="bg-card/60 border-border/40">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{r.nombre}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{r.descripcion}</p>
                        <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                          <span>⏱ {r.duracion}</span>
                          <span>📍 {r.puntosInteres} paradas</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/mapa?routeId=${r.id}`}><MapPin className="h-3 w-3 mr-1" /> Ver en mapa</Link>
                      </Button>
                    </div>
                    <div className="mt-4 space-y-2">
                      {r.itinerario.map((it, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm">
                          <span className="text-xs text-primary font-mono shrink-0 mt-0.5">{it.hora}</span>
                          <div>
                            <span className="font-medium text-foreground">{it.punto}</span>
                            <span className="text-muted-foreground"> – {it.descripcion}</span>
                          </div>
                        </div>
                      ))}
                    </div>
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
