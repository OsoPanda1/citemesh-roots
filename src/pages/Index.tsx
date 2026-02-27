import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, GraduationCap, Globe, Coins, Brain, Layers, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const domains = [
  { title: "ID‑NVIDA", desc: "Identidad civilizatoria soberana", icon: Shield, url: "/dominios/id-nvida", variant: "gold" as const },
  { title: "UTAMV", desc: "Universidad inmersiva", icon: GraduationCap, url: "/dominios/utamv", variant: "cyan" as const },
  { title: "Metaverso MD‑X4", desc: "Espacios XR y gemelos digitales", icon: Globe, url: "/dominios/metaverso", variant: "gold" as const },
  { title: "Economía TAMV", desc: "Intercambio ético y trazable", icon: Coins, url: "/dominios/economia", variant: "cyan" as const },
  { title: "Seguridad", desc: "ANUBIS, HORUS, TENOCHTITLAN", icon: Shield, url: "/dominios/seguridad", variant: "gold" as const },
  { title: "Isabella AI", desc: "IA contextual y colaborativa", icon: Brain, url: "/ia-agentes", variant: "cyan" as const },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="TAMV Digital Nexus"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-6">
            <Layers className="h-3.5 w-3.5" />
            Ecosistema Civilizatorio Digital
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-gold">TAMV</span>{" "}
            <span className="text-foreground">MD‑X4™</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tecnología Avanzada Mexicana Versátil — El primer CITEMESH: un metaverso civilizatorio
            diseñado para servir a las personas con dignidad, transparencia y soberanía digital.
          </p>
          <div className="flex gap-3 justify-center mt-8">
            <Link
              to="/introduccion"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Explorar Wiki <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/arquitectura"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            >
              Arquitectura
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Domains Grid */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">Dominios del Ecosistema</h2>
        <p className="text-muted-foreground mb-8">
          Red de módulos y guardianías que conforman la infraestructura TAMV.
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {domains.map((d) => (
            <motion.div key={d.title} variants={item}>
              <Link
                to={d.url}
                className={`block rounded-lg border p-5 bg-card/60 backdrop-blur-sm transition-all hover:-translate-y-1 ${
                  d.variant === "gold" ? "border-glow-gold" : "border-glow-cyan"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-md ${
                    d.variant === "gold" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                  }`}>
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{d.title}</h3>
                    <p className="text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 border-t border-border/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Horas de desarrollo", value: "21,000+" },
            { label: "Nodos federados", value: "48" },
            { label: "Dominios activos", value: "11" },
            { label: "Desde", value: "2020" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
