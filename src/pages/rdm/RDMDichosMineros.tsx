import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronLeft, ChevronRight, Heart, Quote, Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DICHOS_MINEROS } from "@/data/rdm-mock-data";

type Categoria = "TODOS" | "GASTRONOMIA" | "ARTE" | "CULTURA" | "HISTORIA" | "TRADICION_LOCAL";

const CATEGORIES: { id: Categoria; label: string; icon: string }[] = [
  { id: "TODOS", label: "Todos", icon: "✨" },
  { id: "GASTRONOMIA", label: "Gastronomía", icon: "🍽️" },
  { id: "ARTE", label: "Arte", icon: "🎭" },
  { id: "CULTURA", label: "Cultura", icon: "🏛️" },
  { id: "HISTORIA", label: "Historia", icon: "📜" },
  { id: "TRADICION_LOCAL", label: "Tradición local", icon: "⛏️" },
];

const detectarCategoria = (texto: string): Categoria => {
  const t = texto.toLowerCase();
  if (t.includes("paste") || t.includes("pulque") || t.includes("comer")) return "GASTRONOMIA";
  if (t.includes("leyenda") || t.includes("teat") || t.includes("música")) return "ARTE";
  if (t.includes("historia") || t.includes("1812") || t.includes("siglo")) return "HISTORIA";
  if (t.includes("mina") || t.includes("barretero") || t.includes("veta")) return "TRADICION_LOCAL";
  return "CULTURA";
};

export default function RDMDichosMineros() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState<Categoria>("TODOS");
  const [pagina, setPagina] = useState(1);
  const [likes, setLikes] = useState<Set<string>>(new Set());

  const dichosConCategoria = useMemo(
    () => DICHOS_MINEROS.map((d) => ({ ...d, categoria: detectarCategoria(`${d.dicho} ${d.contexto} ${d.anecdota}`) })),
    [],
  );

  const filtrados = useMemo(() => {
    return dichosConCategoria.filter((d) => {
      const q = busqueda.toLowerCase();
      const matchesQuery = !q || d.dicho.toLowerCase().includes(q) || d.significado.toLowerCase().includes(q) || d.contexto.toLowerCase().includes(q);
      const matchesCategory = categoria === "TODOS" || d.categoria === categoria;
      return matchesQuery && matchesCategory;
    });
  }, [busqueda, categoria, dichosConCategoria]);

  const porPagina = 6;
  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / porPagina));
  const paginaActual = Math.min(pagina, totalPaginas);
  const visibles = filtrados.slice((paginaActual - 1) * porPagina, paginaActual * porPagina);

  const destacados = [...dichosConCategoria].slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <section className="mb-10 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/15 via-background to-background p-8">
        <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/40">
          <Sparkles className="h-3.5 w-3.5 mr-1.5" /> Archivo RDM · Tradición y Cultura Local
        </Badge>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-amber-500" /> Dichos Mineros Locales
        </h1>
        <p className="text-muted-foreground mt-3 max-w-3xl">
          Colección viva para preservar la memoria oral de Real del Monte: expresiones de mina, cantina, familia y calle que definen la identidad realmontense.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Selección destacada</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {destacados.map((d) => (
            <Card key={d.id} className="bg-card/70 border-border/40">
              <CardContent className="p-5">
                <Quote className="h-6 w-6 text-amber-500/40 mb-2" />
                <p className="font-semibold text-foreground">“{d.dicho}”</p>
                <p className="text-sm text-muted-foreground mt-2">{d.significado}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por dicho, significado o contexto..."
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                setPagina(1);
              }}
              className="pl-9"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              variant={categoria === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setCategoria(cat.id);
                setPagina(1);
              }}
            >
              {cat.icon} {cat.label}
            </Button>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs text-muted-foreground mb-4">{filtrados.length} registros · página {paginaActual} de {totalPaginas}</p>
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibles.map((d, index) => (
              <motion.div key={d.id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}>
                <Card className="h-full bg-card/65 border-border/40 hover:border-amber-500/40 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">{CATEGORIES.find((c) => c.id === d.categoria)?.label}</Badge>
                      <button
                        onClick={() => {
                          setLikes((prev) => {
                            const next = new Set(prev);
                            next.has(d.id) ? next.delete(d.id) : next.add(d.id);
                            return next;
                          });
                        }}
                        className="text-muted-foreground hover:text-red-500"
                        aria-label="Me gusta"
                      >
                        <Heart className={`h-4 w-4 ${likes.has(d.id) ? "fill-red-500 text-red-500" : ""}`} />
                      </button>
                    </div>
                    <p className="text-base font-semibold text-foreground">“{d.dicho}”</p>
                    <p className="text-sm mt-2 text-muted-foreground"><strong>Significado:</strong> {d.significado}</p>
                    <p className="text-xs mt-3 text-muted-foreground"><strong>Contexto:</strong> {d.contexto}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </section>

      <section className="mt-8 flex items-center justify-center gap-2">
        <Button variant="outline" size="sm" onClick={() => setPagina((p) => Math.max(1, p - 1))} disabled={paginaActual <= 1}>
          <ChevronLeft className="h-4 w-4 mr-1" /> Anterior
        </Button>
        <Button variant="outline" size="sm" onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))} disabled={paginaActual >= totalPaginas}>
          Siguiente <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </section>
    </div>
  );
}
