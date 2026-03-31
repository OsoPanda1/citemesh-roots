import { useState } from "react";
import { BookOpen, Search, LayoutGrid, List, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DICHOS_MINEROS } from "@/data/rdm-mock-data";
import { cn } from "@/lib/utils";

export default function RDMDichosMineros() {
  const [busqueda, setBusqueda] = useState("");
  const [letraFiltro, setLetraFiltro] = useState<string | null>(null);
  const [vista, setVista] = useState<"cards" | "lista">("cards");

  const letras = [...new Set(DICHOS_MINEROS.map(d => d.letraInicial))].sort();

  const filtrados = DICHOS_MINEROS.filter(d => {
    const matchBusqueda = busqueda === "" || d.dicho.toLowerCase().includes(busqueda.toLowerCase()) || d.significado.toLowerCase().includes(busqueda.toLowerCase());
    const matchLetra = !letraFiltro || d.letraInicial === letraFiltro;
    return matchBusqueda && matchLetra;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" /> Dichos Mineros de Real del Monte
        </h1>
        <p className="text-muted-foreground mt-2">Expresiones populares nacidas en la mina y en las calles, que siguen vivas en el habla cotidiana.</p>
        <p className="text-sm text-muted-foreground/70 mt-1">Explora el significado, el contexto y las historias detrás de cada dicho minero.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Busca un dicho o una palabra clave…"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1">
          <Button variant={vista === "cards" ? "default" : "outline"} size="icon" onClick={() => setVista("cards")}><LayoutGrid className="h-4 w-4" /></Button>
          <Button variant={vista === "lista" ? "default" : "outline"} size="icon" onClick={() => setVista("lista")}><List className="h-4 w-4" /></Button>
        </div>
      </div>

      {/* Letter filter */}
      <div className="flex gap-1 mb-6 flex-wrap">
        <Button variant={!letraFiltro ? "default" : "outline"} size="sm" onClick={() => setLetraFiltro(null)} className="text-xs">Todas</Button>
        {letras.map(l => (
          <Button key={l} variant={letraFiltro === l ? "default" : "outline"} size="sm" onClick={() => setLetraFiltro(l)} className="text-xs w-8">{l}</Button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-4">{filtrados.length} dichos encontrados</p>

      {vista === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtrados.map(d => (
            <Card key={d.id} className="bg-card/60 border-border/40">
              <CardContent className="p-5">
                <p className="text-lg font-semibold text-primary italic">"{d.dicho}"</p>
                <p className="text-sm text-foreground mt-3"><strong>Significado:</strong> {d.significado}</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Contexto:</strong> {d.contexto}</p>
                <div className="mt-3 p-3 rounded-md bg-muted/30 border border-border/30">
                  <p className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <Info className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                    <span><strong>Anécdota:</strong> {d.anecdota}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="border border-border/40 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Dicho</th>
                <th className="text-left p-3 font-semibold text-foreground hidden md:table-cell">Significado</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.map(d => (
                <tr key={d.id} className="border-t border-border/20 hover:bg-muted/20">
                  <td className="p-3 text-primary italic">"{d.dicho}"</td>
                  <td className="p-3 text-muted-foreground hidden md:table-cell">{d.significado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 p-4 rounded-lg bg-muted/20 border border-border/30">
        <p className="text-xs text-muted-foreground flex items-start gap-2">
          <Info className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
          Algunas anécdotas pueden ser generadas por inteligencia artificial como recreaciones aproximadas, no como testimonios históricos.
        </p>
      </div>
    </div>
  );
}
