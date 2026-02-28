import { WikiPage } from "@/components/WikiPage";
import { Section } from "@/components/WikiElements";
import { Crown, MapPin, Code, Eye, Flame, Palette } from "lucide-react";

const BiografiaCEO = () => (
  <WikiPage
    title="Edwin Oswaldo Castillo Trejo"
    subtitle="Anubis Villaseñor — CEO Fundador del TAMV Online Network 4D™"
  >
    <div className="space-y-8">
      <Section title="Origen y formación">
        <div className="flex items-start gap-4">
          <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
          <div className="space-y-3">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nacido en <strong className="text-primary">Real del Monte, Hidalgo, México</strong>, con fuerte arraigo
              comunitario y un sentido profundo de identidad latinoamericana.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Autodidacta con dominio equivalente a un doctorado en arquitectura de sistemas digitales,
              validado por proyectos de gran escala que integran tecnología, narrativa cultural y visión civilizatoria.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Trayectoria profesional">
        <div className="space-y-4">
          {[
            {
              icon: Crown,
              title: "Fundador del TAMV Online Network 4D™",
              desc: "Primer ecosistema civilizatorio federado antifrágil. Una infraestructura modular que integra identidad soberana, educación inmersiva, metaverso, economía ética y seguridad cuántico-resiliente.",
            },
            {
              icon: Palette,
              title: "Creador de Artesanías El Rosario",
              desc: "Bonsáis de alambre artesanales que financian el proyecto y simbolizan la resiliencia. Cada pieza es un acto de inscripción cultural que conecta lo artesanal con lo digital.",
            },
            {
              icon: Code,
              title: "Autor de manuales técnicos superiores",
              desc: "Documentación avanzada para integración multisensorial: sonido, cámara, video y experiencias XR. Guías que reducen la curva de aprendizaje del ecosistema.",
            },
            {
              icon: Flame,
              title: "Estratega en comunicación y marketing moderno",
              desc: "Rechaza métodos obsoletos de marketing. Posiciona TAMV como infraestructura para metaversos soberanos, no solo como un metaverso. Narrativa comercial con raíz cultural.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border/50 bg-card/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">{item.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Visión y legado">
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
          <div className="flex items-start gap-3 mb-4">
            <Eye className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "Demostrar que un autodidacta puede construir un sistema civilizatorio global.
              Reescribir el legado para que sus descendientes hereden una imagen de triunfo y soberanía."
            </p>
          </div>
          <div className="space-y-2 pl-8">
            {[
              "Cada documento y artefacto es un acto de inscripción histórica y reparación pública.",
              "Integra lo técnico, lo narrativo y lo artesanal en un legado unificado.",
              "La tecnología como herramienta de soberanía, no de dependencia.",
              "Un ecosistema que trasciende al fundador: diseñado para ser federado y autónomo.",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Estilo y carácter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { trait: "Ceremonial y épico", desc: "Cada decisión se trata con la gravedad de un acto fundacional." },
            { trait: "Resiliente", desc: "Transforma adversidad en arquitectura. Los obstáculos son material de construcción." },
            { trait: "Culturalmente enraizado", desc: "Orgulloso de su identidad latinoamericana. Lo local es la base de lo global." },
          ].map((t) => (
            <div key={t.trait} className="rounded-lg border border-border/50 bg-card/50 p-4 text-center">
              <h4 className="font-semibold text-primary text-sm mb-1">{t.trait}</h4>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  </WikiPage>
);

export default BiografiaCEO;
