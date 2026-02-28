import { WikiPage } from "@/components/WikiPage";
import { Section } from "@/components/WikiElements";
import { Target, Users, Rocket, Shield, Award, TrendingUp } from "lucide-react";

const Estrategia = () => (
  <WikiPage
    title="Estrategia Comercial"
    subtitle="Posicionamiento, segmentos y narrativa para TAMV MD‑X4 como plantilla replicable"
  >
    <div className="space-y-8">
      <Section title="Posicionamiento">
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
          <div className="flex items-start gap-3">
            <Target className="h-6 w-6 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-foreground font-semibold text-lg leading-snug mb-2">
                "TAMV MD‑X4 es la infraestructura modular para crear metaversos soberanos con identidad cultural y seguridad avanzada."
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No es un metaverso. Es <strong className="text-primary">la infraestructura para crearlos</strong>.
                Una plantilla certificada, federada y antifrágil que cualquier organización puede desplegar
                para construir su propio ecosistema digital soberano.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Segmentos de público">
        <div className="space-y-4">
          {[
            {
              icon: Shield,
              segment: "Gobiernos y comunidades",
              need: "Soberanía digital",
              offer: "Identidad ciudadana, servicios descentralizados, transparencia con EOCT.",
              hook: "¿Tu gobierno depende de infraestructura extranjera para servicios digitales críticos?",
            },
            {
              icon: Users,
              segment: "Universidades y centros educativos",
              need: "Experiencias inmersivas",
              offer: "Campus virtual con UTAMV, certificaciones blockchain, tutora IA personalizada.",
              hook: "¿Tus estudiantes merecen más que un PDF y un Zoom?",
            },
            {
              icon: Rocket,
              segment: "Empresas éticas y B-Corps",
              need: "Ecosistemas antifrágiles",
              offer: "Gobernanza ética, compliance integrado, seguridad cuántico-resiliente.",
              hook: "¿Tu empresa habla de ética digital o la implementa desde la arquitectura?",
            },
          ].map((s) => (
            <div key={s.segment} className="rounded-lg border border-border/50 bg-card/50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <s.icon className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-foreground">{s.segment}</h4>
              </div>
              <div className="space-y-2 pl-7">
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Necesidad:</strong> {s.need}</p>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Oferta:</strong> {s.offer}</p>
                <p className="text-sm italic text-primary">"{s.hook}"</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Propuesta de valor">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Rocket,
              title: "Plantilla modular",
              points: ["Documentación técnica completa", "Narrativa cultural integrada", "Despliegue en < 72 horas", "Personalización por dominio"],
            },
            {
              icon: Award,
              title: "Certificación federada",
              points: ["Validación oficial de réplica", "Auditoría de seguridad incluida", "Compliance GDPR + AI Act", "Renovación anual automatizada"],
            },
            {
              icon: TrendingUp,
              title: "Ecosistema integrado",
              points: ["Isabella AI como asistente", "Economía ética con token TAU", "Identidad soberana ID-NVIDA", "Monitoreo Grafana/Terraform"],
            },
          ].map((prop) => (
            <div key={prop.title} className="rounded-lg border border-border/50 bg-card/50 p-4">
              <div className="flex items-center gap-2 mb-3">
                <prop.icon className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">{prop.title}</h4>
              </div>
              <ul className="space-y-1.5">
                {prop.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Modelo de negocio">
        <div className="space-y-3">
          {[
            { tier: "Community (Gratis)", desc: "Código open source, documentación completa, soporte comunitario. Ideal para evaluación y proyectos personales." },
            { tier: "Professional", desc: "Certificación federada, soporte prioritario, actualizaciones de seguridad aceleradas, acceso a módulos premium." },
            { tier: "Enterprise", desc: "Despliegue asistido, SLA 99.9%, consultoría de arquitectura, personalización de módulos, formación on-site." },
            { tier: "Sovereign", desc: "Infraestructura dedicada, auditoría de seguridad trimestral, línea directa con equipo core, co-desarrollo de features." },
          ].map((t) => (
            <div key={t.tier} className="rounded-lg border border-border/50 bg-card/50 p-4 flex items-start gap-3">
              <Award className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-sm">{t.tier}</h4>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Narrativa de marca">
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            TAMV MD‑X4 nace de la convicción de que la <strong className="text-primary">soberanía digital es un derecho</strong>,
            no un privilegio. Desde Real del Monte, Hidalgo, un autodidacta demuestra que la tecnología puede ser
            culturalmente enraizada, éticamente rigurosa y técnicamente avanzada al mismo tiempo.
            Cada línea de código, cada documento, cada artesanía de alambre es un acto de inscripción histórica
            que construye el legado de una civilización digital latinoamericana.
          </p>
        </div>
      </Section>
    </div>
  </WikiPage>
);

export default Estrategia;
