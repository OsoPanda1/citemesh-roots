import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Landmark, Utensils, BookOpen, Store, Route, MessageSquare, Eye, ChevronRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { POSTS_MURO } from "@/data/rdm-mock-data";
import { EVENTOS_RDM } from "@/data/rdm-events";
import heroImg from "@/assets/rdm-hero-home.jpg";

const QUICK_BLOCKS = [
  { title: "Cultura e Historia", desc: "Conoce el origen minero, la influencia inglesa y las tradiciones que han dado identidad a Real del Monte a lo largo de los siglos.", href: "/cultura", icon: Landmark, color: "text-amber-400" },
  { title: "Gastronomía", desc: "Descubre los sabores del Real: pastes, barbacoa, dulces y bebidas que cuentan historias en cada bocado.", href: "/gastronomia", icon: Utensils, color: "text-orange-400" },
  { title: "Dichos Mineros", desc: "Aprende el lenguaje minero y los dichos que han pasado de generación en generación bajo la tierra y en las calles.", href: "/dichos-mineros", icon: BookOpen, color: "text-emerald-400" },
  { title: "Catálogo de Comercios", desc: "Encuentra restaurantes, cafés, hospedaje, artesanías y servicios locales confiables, todo en un mismo lugar.", href: "/comercios", icon: Store, color: "text-blue-400" },
  { title: "Rutas Turísticas", desc: "Recorre el Real con rutas diseñadas para aprovechar tu tiempo: históricas, gastronómicas, naturales y mixtas.", href: "/rutas", icon: Route, color: "text-purple-400" },
  { title: "Muro de Publicaciones", desc: "Entra al pulso digital del pueblo: experiencias, fotos, anuncios y promociones de la comunidad.", href: "/muro", icon: MessageSquare, color: "text-pink-400" },
];

const EXPLORE_SECTIONS = [
  { title: "Primera vez en Real del Monte", desc: "Los imprescindibles para tu primera visita", href: "/que-visitar", emoji: "🏔️" },
  { title: "Experiencias mineras y patrimonio", desc: "Desciende a las minas y conoce siglos de historia", href: "/cultura", emoji: "⛏️" },
  { title: "Sabores del Real", desc: "Rutas gastronómicas para cada paladar", href: "/gastronomia", emoji: "🍽️" },
];

export default function RDMHome() {
  const todayEvents = EVENTOS_RDM.filter(e => e.destacado).slice(0, 4);
  const recentPosts = POSTS_MURO.slice(0, 3);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Real del Monte, Pueblo Mágico" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Pueblo Mágico · Hidalgo, México</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Real del Monte Digital
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2">Pueblo Mágico vivo 24/7</p>
            <p className="text-sm md:text-base text-muted-foreground/80 mb-8 max-w-xl mx-auto">
              Explora su historia, sabores, rutas, comercios y comunidad en un solo espacio interactivo, pensado para habitantes, visitantes y amantes del Real.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/rutas"><Route className="h-4 w-4 mr-2" /> Explorar rutas turísticas</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                <Link to="/que-visitar"><Eye className="h-4 w-4 mr-2" /> Qué visitar en el Real</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground">
                <Link to="/mapa"><MapPin className="h-4 w-4 mr-2" /> Ver mapa interactivo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* ─── QUICK BLOCKS ─── */}
        <section className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {QUICK_BLOCKS.map((b, i) => (
              <motion.div key={b.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <Link to={b.href}>
                  <Card className="group h-full bg-card/60 border-border/40 hover:border-primary/40 hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <b.icon className={`h-6 w-6 mt-0.5 ${b.color} shrink-0`} />
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{b.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
                          <span className="text-xs text-primary mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Ver más <ChevronRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── HOY EN EL REAL ─── */}
        <section className="py-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Hoy en el Real</h2>
          </div>
          <p className="text-muted-foreground mb-6">Eventos, promociones y momentos que están ocurriendo ahora mismo en Real del Monte.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {todayEvents.map(e => (
              <Card key={e.id} className="bg-card/60 border-border/40">
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">{e.category}</Badge>
                  <h4 className="font-semibold text-foreground text-sm">{e.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{e.date} · {e.time}</p>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{e.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ─── EXPLORA POR INTERÉS ─── */}
        <section className="py-12">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Explora por interés</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {EXPLORE_SECTIONS.map(s => (
              <Link key={s.href} to={s.href}>
                <Card className="group bg-card/60 border-border/40 hover:border-primary/40 transition-all">
                  <CardContent className="p-5 text-center">
                    <span className="text-3xl mb-3 block">{s.emoji}</span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── RECENT POSTS ─── */}
        <section className="py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Del Muro</h2>
            </div>
            <Link to="/muro" className="text-sm text-primary hover:underline flex items-center gap-1">Ver todo <ChevronRight className="h-3 w-3" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentPosts.map(p => (
              <Card key={p.id} className="bg-card/60 border-border/40">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-foreground">{p.autor}</span>
                    <Badge variant="outline" className="text-[10px]">{p.rol}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{p.texto}</p>
                  <div className="flex gap-1.5 mt-2 flex-wrap">
                    {p.etiquetas.map(t => <span key={t} className="text-[10px] text-primary/70">{t}</span>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
