import { useState } from "react";
import { MessageSquare, Image, Send, Filter, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { POSTS_MURO } from "@/data/rdm-mock-data";

const FILTROS_TIPO = ["Todos", "Eventos", "Promociones", "Historias", "Fotos"];
const FILTROS_AUTOR = ["Todos", "Comunidad", "Comercios", "Instituciones"];

const ROL_COLORS: Record<string, string> = {
  turista: "bg-blue-500/20 text-blue-300",
  comerciante: "bg-amber-500/20 text-amber-300",
  ayuntamiento: "bg-purple-500/20 text-purple-300",
  guía: "bg-emerald-500/20 text-emerald-300",
  comunidad: "bg-pink-500/20 text-pink-300",
};

export default function RDMMuro() {
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [filtroAutor, setFiltroAutor] = useState("Todos");
  const [nuevoPost, setNuevoPost] = useState("");
  const [postsVisibles, setPostsVisibles] = useState(10);

  const filtrados = POSTS_MURO.filter(p => {
    if (filtroTipo !== "Todos") {
      const tipoMap: Record<string, string[]> = {
        Eventos: ["#evento"], Promociones: ["#promoción"], Historias: ["#experiencia", "#relato", "#historia"], Fotos: ["#foto"],
      };
      const tags = tipoMap[filtroTipo] || [];
      if (!p.etiquetas.some(e => tags.some(t => e.includes(t)))) return false;
    }
    if (filtroAutor !== "Todos") {
      const autorMap: Record<string, string[]> = {
        Comunidad: ["turista", "comunidad"], Comercios: ["comerciante"], Instituciones: ["ayuntamiento", "guía"],
      };
      if (!autorMap[filtroAutor]?.includes(p.rol)) return false;
    }
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
          <MessageSquare className="h-8 w-8 text-primary" /> Muro de la Comunidad
        </h1>
        <p className="text-muted-foreground mt-2">Historias, fotos, anuncios y promociones que muestran el día a día de Real del Monte.</p>
      </div>

      {/* Post box */}
      <Card className="bg-card/60 border-border/40 mb-6">
        <CardContent className="p-4">
          <Textarea
            placeholder="Comparte algo sobre Real del Monte… una experiencia, una recomendación, una historia o una foto."
            value={nuevoPost}
            onChange={e => setNuevoPost(e.target.value)}
            className="min-h-[80px] mb-3"
          />
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="text-muted-foreground"><Image className="h-4 w-4 mr-1" /> Adjuntar imagen</Button>
            <Button size="sm" className="bg-primary text-primary-foreground" disabled={!nuevoPost.trim()}>
              <Send className="h-4 w-4 mr-1" /> Publicar
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground/60 mt-2 flex items-center gap-1">
            <Info className="h-3 w-3" /> Versión piloto: las publicaciones pueden ser moderadas o generadas a partir de contenido curado de la comunidad.
          </p>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex gap-1 flex-wrap">
          <span className="text-xs text-muted-foreground self-center mr-1">Tipo:</span>
          {FILTROS_TIPO.map(f => (
            <Button key={f} variant={filtroTipo === f ? "default" : "outline"} size="sm" onClick={() => setFiltroTipo(f)} className="text-xs">{f}</Button>
          ))}
        </div>
        <div className="flex gap-1 flex-wrap">
          <span className="text-xs text-muted-foreground self-center mr-1">Autor:</span>
          {FILTROS_AUTOR.map(f => (
            <Button key={f} variant={filtroAutor === f ? "default" : "outline"} size="sm" onClick={() => setFiltroAutor(f)} className="text-xs">{f}</Button>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {filtrados.slice(0, postsVisibles).map(p => (
          <Card key={p.id} className="bg-card/60 border-border/40">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">{p.autor[0]}</div>
                <div>
                  <span className="text-sm font-medium text-foreground">{p.autor}</span>
                  <Badge className={`ml-2 text-[10px] ${ROL_COLORS[p.rol] || ""}`}>{p.rol}</Badge>
                </div>
                <span className="text-[10px] text-muted-foreground ml-auto">{p.fecha}</span>
              </div>
              <p className="text-sm text-muted-foreground">{p.texto}</p>
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {p.etiquetas.map(t => <span key={t} className="text-[10px] text-primary/80 bg-primary/5 px-1.5 py-0.5 rounded">{t}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {postsVisibles < filtrados.length && (
        <div className="text-center mt-6">
          <Button variant="outline" onClick={() => setPostsVisibles(v => v + 10)}>Cargar más</Button>
        </div>
      )}
    </div>
  );
}
