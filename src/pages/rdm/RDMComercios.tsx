import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Store, Search, MapPin, Clock, Phone, ChevronRight, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COMERCIOS } from "@/data/rdm-mock-data";

const CATEGORIAS = ["todos", "restaurante", "café", "hospedaje", "artesanías", "servicios"];
const PRECIOS = ["todos", "económico", "medio", "alto"];

export default function RDMComercios() {
  const [searchParams] = useSearchParams();
  const [busqueda, setBusqueda] = useState("");
  const [catFiltro, setCatFiltro] = useState(searchParams.get("categoria") || "todos");
  const [precioFiltro, setPrecioFiltro] = useState("todos");
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = 12;

  const filtrados = COMERCIOS.filter(c => {
    const matchBusqueda = busqueda === "" || c.nombre.toLowerCase().includes(busqueda.toLowerCase()) || c.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const matchCat = catFiltro === "todos" || c.categoria === catFiltro;
    const matchPrecio = precioFiltro === "todos" || c.precio === precioFiltro;
    return matchBusqueda && matchCat && matchPrecio;
  });

  const paginados = filtrados.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtrados.length / pageSize);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
          <Store className="h-8 w-8 text-primary" /> Comercios y Servicios
        </h1>
        <p className="text-muted-foreground mt-2">Descubre dónde comer, hospedarte, comprar artesanías o contratar servicios turísticos con actores locales.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar por nombre, categoría o zona…" value={busqueda} onChange={e => setBusqueda(e.target.value)} className="pl-9" />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex gap-1 flex-wrap">
            {CATEGORIAS.map(c => (
              <Button key={c} variant={catFiltro === c ? "default" : "outline"} size="sm" onClick={() => setCatFiltro(c)} className="capitalize text-xs">{c}</Button>
            ))}
          </div>
          <div className="flex gap-1">
            {PRECIOS.map(p => (
              <Button key={p} variant={precioFiltro === p ? "default" : "outline"} size="sm" onClick={() => setPrecioFiltro(p)} className="capitalize text-xs">{p === "todos" ? "$" : p}</Button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mb-4">{filtrados.length} comercios encontrados</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginados.map(c => (
          <Card key={c.id} className="bg-card/60 border-border/40 group hover:border-primary/30 transition-all">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{c.nombre}</h3>
                  <Badge variant="outline" className="text-xs mt-1 capitalize">{c.categoria}</Badge>
                </div>
                <Badge className="text-[10px] bg-muted text-muted-foreground capitalize">{c.precio}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{c.descripcion}</p>
              <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                <p className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {c.direccion}</p>
                <p className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {c.horario}</p>
                <p className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {c.telefono}</p>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" asChild className="text-xs flex-1">
                  <Link to={`/comercios/${c.id}`}>Ver más <ChevronRight className="h-3 w-3 ml-1" /></Link>
                </Button>
                <Button variant="ghost" size="sm" asChild className="text-xs text-primary">
                  <Link to="/mapa"><MapPin className="h-3 w-3" /></Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <Link key={i} to={`/comercios?page=${i + 1}&categoria=${catFiltro}`}>
              <Button variant={page === i + 1 ? "default" : "outline"} size="sm">{i + 1}</Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
