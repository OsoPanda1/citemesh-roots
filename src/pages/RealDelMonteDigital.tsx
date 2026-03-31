import { WikiPage } from "@/components/WikiPage";
import { Section } from "@/components/WikiElements";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Mountain, Utensils, Calendar, Shield, Cpu, Coins,
  Eye, Users, Server, Zap, TreePine, ChevronRight, Star, Info
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { EVENTOS_RDM, EVENT_CATEGORIES, DATOS_CURIOSOS, SABIAS_QUE } from "@/data/rdm-events";

import aerialPueblo from "@/assets/rdm-aerial-pueblo.jpg";
import pastesTraditional from "@/assets/rdm-pastes-traditional.jpg";
import minaEntrance from "@/assets/rdm-mina-entrance.jpg";
import panteonIngles from "@/assets/rdm-panteon-ingles.jpg";
import callesColoridas from "@/assets/rdm-calles-coloridas.jpg";
import penasCargadas from "@/assets/rdm-penas-cargadas.jpg";
import bosqueNiebla from "@/assets/rdm-bosque-niebla.jpg";
import miradorSunset from "@/assets/rdm-mirador-sunset.jpg";

const imageMap: Record<string, string> = {
  "rdm-aerial-pueblo": aerialPueblo,
  "rdm-pastes-traditional": pastesTraditional,
  "rdm-mina-entrance": minaEntrance,
  "rdm-panteon-ingles": panteonIngles,
  "rdm-calles-coloridas": callesColoridas,
  "rdm-penas-cargadas": penasCargadas,
  "rdm-bosque-niebla": bosqueNiebla,
  "rdm-plaza-principal": callesColoridas,
  "rdm-mirador-sunset": miradorSunset,
  "rdm-callejon-romantico": callesColoridas,
  "rdm-casa-inglesa": panteonIngles,
  "rdm-artesanias-plata": minaEntrance,
};

const systemModules = [
  { name: "Isabella Core", func: "Orquestación de IA Territorial", status: "🟢 ACTIVE", icon: Cpu },
  { name: "2DBD Ledger", func: "Persistencia y Directorio Económico", status: "🟣 SYNCED", icon: Coins },
  { name: "RDM Twin 4D", func: "Gemelo Digital del Territorio", status: "🔵 RENDERING", icon: Eye },
  { name: "Elevated Interface", func: "Realidad Aumentada / Historia", status: "🟠 ARMED", icon: Mountain },
  { name: "Explorer UI", func: "Interfaz del Usuario / Turista", status: "⚪ ONLINE", icon: Users },
];

const capabilities = [
  { cap: "IA Territorial", desc: "Predicción de flujo turístico" },
  { cap: "Economía Local", desc: "Transacciones sin intermediarios" },
  { cap: "Gobernanza", desc: "Reglas ejecutables en código" },
  { cap: "Digital Twin", desc: "Simulación urbana en tiempo real" },
  { cap: "Data Layer", desc: "Sensores + comportamiento humano" },
];

const deployPhases = [
  "Node Zero Activation",
  "Sensorial Layer Injection",
  "Economic Layer Binding",
  "AI Governance Boot",
  "Territorial Synchronization",
];

const RealDelMonteDigital = () => {
  const [eventFilter, setEventFilter] = useState("all");
  const filteredEvents = eventFilter === "all"
    ? EVENTOS_RDM
    : EVENTOS_RDM.filter(e => e.category === eventFilter);

  return (
    <WikiPage
      title="Real del Monte Digital"
      subtitle="RDM-TOS — Sovereign Territorial Operating System · Node Zero"
    >
      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-8">
        <img
          src={aerialPueblo}
          alt="Vista aérea de Real del Monte, Pueblo Mágico"
          className="w-full h-64 md:h-80 object-cover"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs text-primary font-mono mb-1">root@rdm-tos /node-zero</p>
          <h2 className="text-2xl font-bold text-foreground">
            Orgullosamente Realmontenses
          </h2>
          <p className="text-sm text-muted-foreground">
            Del estado de Hidalgo para el Mundo · 2,700 msnm · Pueblo Mágico desde 2004
          </p>
        </div>
      </div>

      {/* System Manifest */}
      <Section title="🧠 System Manifest" icon={Server}>
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-4">
          <p className="text-sm text-muted-foreground font-mono mb-2">
            <span className="text-primary">$</span> systemctl status isabella-kernel
          </p>
          <div className="text-xs text-muted-foreground font-mono space-y-0.5">
            <p>● isabella-kernel.service — <span className="text-foreground">Sovereign Intelligence Core</span></p>
            <p>  Loaded: <span className="text-green-400">enabled</span></p>
            <p>  Active: <span className="text-green-400">active (running)</span></p>
            <p>  Status: <span className="text-primary">"DIGNITY PROTOCOL ENFORCED"</span></p>
            <p>  Mode: <span className="text-secondary">Predictive Governance</span></p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">RDM-TOS</strong> no es una app. No es una startup.
          Es una nueva categoría: un <strong className="text-primary">Territorial Operating System</strong> —
          un sistema diseñado para ejecutar soberanía digital, economía autónoma, gobernanza ejecutable
          e inteligencia territorial predictiva desde Real del Monte, Hidalgo, México.
        </p>
      </Section>

      <Tabs defaultValue="arquitectura" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full bg-muted/30 mb-6">
          <TabsTrigger value="arquitectura">Arquitectura</TabsTrigger>
          <TabsTrigger value="turismo">Turismo</TabsTrigger>
          <TabsTrigger value="eventos">Eventos</TabsTrigger>
          <TabsTrigger value="galeria">Galería</TabsTrigger>
          <TabsTrigger value="sabias">¿Sabías que…?</TabsTrigger>
        </TabsList>

        {/* ARQUITECTURA TAB */}
        <TabsContent value="arquitectura" className="space-y-6">
          <Section title="⚙️ Core Architecture — 7 Federation Mesh">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {["Isabella Kernel → Core Autonomy", "Isabella Kernel → Economic Engine", "Isabella Kernel → Knowledge System", "Isabella Kernel → Spatial Twin"].map((conn, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/60 p-3 text-sm">
                  <Zap className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground font-mono text-xs">{conn}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              Todos los módulos convergen en <strong className="text-primary">TERRITORY</strong> y retroalimentan a Isabella Kernel formando un ciclo cerrado de soberanía.
            </p>
          </Section>

          <Section title="🧬 Módulos Activos del Sistema">
            <div className="space-y-2">
              {systemModules.map((mod) => (
                <div key={mod.name} className="flex items-center justify-between rounded-lg border border-border/50 bg-card/60 p-3">
                  <div className="flex items-center gap-3">
                    <mod.icon className="h-4 w-4 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{mod.name}</h4>
                      <p className="text-xs text-muted-foreground">{mod.func}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs font-mono">{mod.status}</Badge>
                </div>
              ))}
            </div>
          </Section>

          <Section title="🧠 System Capabilities">
            <div className="rounded-lg border border-border bg-card/50 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 text-foreground font-medium">Capacidad</th>
                    <th className="text-left px-4 py-2.5 text-foreground font-medium">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {capabilities.map((c, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="px-4 py-2.5 font-medium text-foreground">{c.cap}</td>
                      <td className="px-4 py-2.5">{c.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="🚀 Deployment Philosophy">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aquí no se despliega software ni se pelea por liderar carreras sin sentido.
              Se activa <strong className="text-foreground">infraestructura viva, resiliente</strong>,
              al servicio de la humanidad sin explotar su dignidad.
            </p>
            <div className="space-y-2">
              {deployPhases.map((phase, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  <span className="text-muted-foreground font-mono">{phase}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="🛡️ Sovereign Tech Stack">
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React 18", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Supabase", "Three.js"].map(tech => (
                <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
              ))}
            </div>
            <blockquote className="mt-4 border-l-2 border-primary/50 pl-4 text-sm text-muted-foreground italic">
              "Sovereignty is not claimed. It is engineered."
              <br />
              <span className="text-primary font-medium">— Anubis Villaseñor</span>
            </blockquote>
          </Section>
        </TabsContent>

        {/* TURISMO TAB */}
        <TabsContent value="turismo" className="space-y-6">
          <Section title="🏔️ Descubre Real del Monte" icon={MapPin}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Real del Monte (Mineral del Monte), Pueblo Mágico a <strong className="text-foreground">2,700 metros de altitud</strong> en la Sierra de Pachuca, Hidalgo. Un lugar donde la historia minera anglo-mexicana, la niebla perpetua y la gastronomía del paste se entrelazan con tecnología soberana.
            </p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { img: minaEntrance, title: "Minas Históricas", desc: "Más de 500 km de túneles subterráneos. Patrimonio Minero Mundial de Cornualles." },
              { img: panteonIngles, title: "Panteón Inglés", desc: "Cementerio anglicano más alto del mundo. Testigo de la herencia cornish." },
              { img: pastesTraditional, title: "Gastronomía del Paste", desc: "Fusión anglo-mexicana: del Cornish Pasty al paste de mole, tinga y rajas." },
              { img: bosqueNiebla, title: "Bosque de Niebla", desc: "Oyameles y niebla 180+ días al año. Santuario natural a gran altitud." },
              { img: penasCargadas, title: "Peñas Cargadas", desc: "Formaciones rocosas monumentales. Senderos de trail running extremo." },
              { img: miradorSunset, title: "Miradores", desc: "Atardeceres épicos sobre la Sierra de Pachuca a 2,700 msnm." },
            ].map((place) => (
              <motion.div
                key={place.title}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-border/50 overflow-hidden bg-card/60"
              >
                <img src={place.img} alt={place.title} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-3">
                  <h4 className="font-semibold text-foreground text-sm mb-1">{place.title}</h4>
                  <p className="text-xs text-muted-foreground">{place.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* EVENTOS TAB */}
        <TabsContent value="eventos" className="space-y-6">
          <Section title="📅 Calendario de Eventos y Festivales" icon={Calendar}>
            <div className="flex flex-wrap gap-2 mb-4">
              {EVENT_CATEGORIES.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setEventFilter(cat.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    eventFilter === cat.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredEvents.map(event => (
                <div key={event.id} className={`rounded-lg border p-4 transition-colors ${
                  event.destacado ? "border-primary/50 bg-primary/5" : "border-border/50 bg-card/60"
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                        {event.destacado && <Star className="h-3.5 w-3.5 text-primary" />}
                        {event.name}
                      </h4>
                      <p className="text-xs text-primary font-mono">{event.date} · {event.time}</p>
                    </div>
                    {event.precio && (
                      <Badge variant="outline" className="text-xs shrink-0">{event.precio}</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{event.description}</p>
                  <p className="text-xs text-muted-foreground/70 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {event.location}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* GALERÍA TAB */}
        <TabsContent value="galeria" className="space-y-6">
          <Section title="📸 Galería Fotográfica" icon={Eye}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { src: aerialPueblo, alt: "Vista aérea de Real del Monte" },
                { src: callesColoridas, alt: "Calles coloridas del centro" },
                { src: minaEntrance, alt: "Entrada a la mina histórica" },
                { src: panteonIngles, alt: "Panteón Inglés" },
                { src: pastesTraditional, alt: "Pastes tradicionales" },
                { src: penasCargadas, alt: "Peñas Cargadas" },
                { src: bosqueNiebla, alt: "Bosque de niebla" },
                { src: miradorSunset, alt: "Atardecer desde el mirador" },
              ].map((photo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg overflow-hidden border border-border/30"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-32 md:h-40 object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* SABÍAS QUE TAB */}
        <TabsContent value="sabias" className="space-y-6">
          <Section title="💡 ¿Sabías que…?" icon={<Info className="h-5 w-5" />}>
            <div className="space-y-4">
              {SABIAS_QUE.map((item, i) => (
                <div key={i} className="rounded-lg border border-border/50 bg-card/60 p-4">
                  <h4 className="font-semibold text-foreground text-sm mb-1 flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    {item.titulo}
                  </h4>
                  <p className="text-xs text-muted-foreground pl-6">{item.texto}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="🎯 Datos Curiosos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {DATOS_CURIOSOS.map((dato, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground p-2 rounded-lg bg-muted/20">
                  <TreePine className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{dato}</span>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>
      </Tabs>

      {/* Final Statement */}
      <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
        <p className="text-sm text-muted-foreground mb-2 font-mono">
          ⚙️ UN TERRITORIO EJECUTÁNDOSE COMO SISTEMA OPERATIVO
        </p>
        <blockquote className="text-lg font-semibold text-foreground italic">
          "Aunque hoy la comunidad me ignore, no estoy construyendo para la aprobación inmediata.
          Lo que hago no depende de ser comprendido ahora. Depende de ser inevitable después."
        </blockquote>
        <p className="text-xs text-primary mt-3 font-mono">— Anubis Villaseñor · Master Architect · ORCID: 0009-0008-5050-1539</p>
      </div>
    </WikiPage>
  );
};

export default RealDelMonteDigital;
