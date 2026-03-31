import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clapperboard, Landmark, MessageSquare, Mic2, Route, Sparkles, Store, Theater, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { POSTS_MURO } from "@/data/rdm-mock-data";
import { EVENTOS_RDM } from "@/data/rdm-events";
import heroImg from "@/assets/rdm-hero-home.jpg";

const MAIN_EXPERIENCES = [
  { title: "Gastronomía", desc: "Pastes, cacao de metate, pulque y cocina de montaña en una curaduría premium.", href: "/gastronomia", icon: Utensils },
  { title: "Arte y Cultura", desc: "Festivales, galerías, rituales y talento local con mirada internacional.", href: "/cultura/2", icon: Theater },
  { title: "Historia Viva", desc: "Línea del tiempo minera, patrimonio cornish y memoria oral del pueblo.", href: "/cultura/0", icon: Landmark },
  { title: "Archivo RDM", desc: "Tradición local, relatos y el habla popular preservada en formato digital.", href: "/dichos-mineros", icon: Mic2 },
  { title: "Rutas Sofisticadas", desc: "Itinerarios con ritmo cinematográfico para viajeros exigentes.", href: "/rutas", icon: Route },
  { title: "Comercios Selectos", desc: "Hoteles, cafés, experiencias y compras con identidad local.", href: "/comercios", icon: Store },
];

const PAGINACION_CAPITULOS = [
  { label: "Página 01", title: "Gastronomía", href: "/gastronomia" },
  { label: "Página 02", title: "Arte", href: "/cultura/2" },
  { label: "Página 03", title: "Cultura", href: "/cultura/1" },
  { label: "Página 04", title: "Historia", href: "/cultura/0" },
  { label: "Página 05", title: "Archivo RDM", href: "/dichos-mineros" },
];

export default function RDMHome() {
  const todayEvents = EVENTOS_RDM.filter((e) => e.destacado).slice(0, 4);
  const recentPosts = POSTS_MURO.slice(0, 3);

  return (
    <div>
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Real del Monte, Pueblo Mágico" className="absolute inset-0 w-full h-full object-cover scale-105" width={1920} height={900} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(251,191,36,0.24),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-black/45" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-5 bg-amber-500/20 text-amber-300 border-amber-400/40">
              <Clapperboard className="h-3.5 w-3.5 mr-1.5" /> Presentación Cinematográfica AAA
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
              Real del Monte
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-100">Elegante, Vivo y Global</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 mb-8 max-w-2xl mx-auto">
              Una experiencia turística sofisticada, amigable y profundamente local: gastronomía, arte, cultura, historia y tradición minera en un solo escenario digital.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-amber-500 text-black hover:bg-amber-400">
                <Link to="/que-visitar">Iniciar experiencia</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 bg-black/20 text-white hover:bg-black/35">
                <Link to="/dichos-mineros">Archivo RDM · Dichos</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <section className="py-14">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl font-bold text-foreground">Experiencias Premium</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MAIN_EXPERIENCES.map((item, i) => (
              <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link to={item.href}>
                  <Card className="group h-full bg-card/65 border-border/40 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-900/20 transition-all">
                    <CardContent className="p-5">
                      <item.icon className="h-6 w-6 text-amber-500 mb-3" />
                      <h3 className="font-semibold text-foreground group-hover:text-amber-500 transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      <span className="text-xs mt-3 inline-flex items-center gap-1 text-amber-500">Entrar <ArrowRight className="h-3 w-3" /></span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-bold text-foreground mb-5">Paginación editorial de turismo global</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PAGINACION_CAPITULOS.map((cap) => (
              <Link key={cap.href} to={cap.href}>
                <Card className="h-full border-border/40 bg-muted/25 hover:bg-muted/40 transition-colors">
                  <CardContent className="p-4">
                    <p className="text-xs text-amber-500 font-medium">{cap.label}</p>
                    <p className="font-semibold text-foreground mt-1">{cap.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Hoy en el Real</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {todayEvents.map((e) => (
              <Card key={e.id} className="bg-card/60 border-border/40">
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">{e.category}</Badge>
                  <h4 className="font-semibold text-foreground text-sm">{e.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{e.date} · {e.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Pulso de la comunidad</h2>
            </div>
            <Link to="/muro" className="text-sm text-primary hover:underline">Ver todo</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentPosts.map((p) => (
              <Card key={p.id} className="bg-card/60 border-border/40">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-foreground">{p.autor}</p>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{p.texto}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
