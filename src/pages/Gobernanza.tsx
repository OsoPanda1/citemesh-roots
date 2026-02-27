import { WikiPage } from "@/components/WikiPage";
import { Section, InfoCard } from "@/components/WikiElements";
import { Shield, Users, FileCheck, RefreshCw, BookOpen, Scale, Eye, GitBranch, Globe } from "lucide-react";

const Gobernanza = () => (
  <WikiPage
    title="Gobernanza y Políticas"
    subtitle="Reglas de contribución, roles y principios del ecosistema TAMV"
  >
    <Section title="Principios de gobernanza">
      <p className="text-muted-foreground leading-relaxed">
        TAMV opera bajo un modelo de gobernanza abierta progresiva, donde la transparencia, el respeto
        y el enfoque civilizatorio son pilares fundamentales. El{" "}
        <strong className="text-primary">Códice Maestro</strong> establece los lineamientos éticos y
        técnicos que rigen toda contribución al ecosistema.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <InfoCard icon={Scale} title="Claridad y respeto" description="Toda comunicación y contribución debe ser clara, respetuosa y con enfoque civilizatorio." variant="gold" />
        <InfoCard icon={Eye} title="Transparencia" description="Decisiones documentadas públicamente. No duplicar contenido: enlazar antes de copiar." variant="cyan" />
        <InfoCard icon={BookOpen} title="Coherencia terminológica" description="Usar siempre los nombres oficiales de módulos, guardianías y protocolos." variant="gold" />
        <InfoCard icon={GitBranch} title="No duplicar" description="Antes de crear contenido nuevo, verificar si ya existe algo similar y enlazarlo." variant="cyan" />
      </div>
    </Section>

    <Section title="Roles del ecosistema">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          icon={Shield}
          title="Fundador / Guardián Supremo"
          description="Anubis Villaseñor (Edwin Oswaldo Castillo Trejo). Visión, arquitectura y decisiones finales del ecosistema."
          variant="gold"
        />
        <InfoCard
          icon={Users}
          title="Colaboradores de Alta Confianza"
          description="Fase inicial: solo el fundador y colaboradores directos validan y editan contenido crítico."
          variant="cyan"
        />
        <InfoCard
          icon={FileCheck}
          title="Contribuidores Moderados"
          description="Fase posterior: contribuciones abiertas moderadas mediante pull requests y sugerencias revisadas."
          variant="gold"
        />
        <InfoCard
          icon={Eye}
          title="Dueños de Sección"
          description="Cada página o sección tiene un responsable que garantiza la precisión y vigencia del contenido."
          variant="cyan"
        />
      </div>
    </Section>

    <Section title="Proceso de contribución">
      <div className="space-y-3">
        {[
          { step: "1", text: "Buscar si ya existe contenido similar antes de crear una página nueva." },
          { step: "2", text: "Usar siempre las plantillas definidas: Artículo General, Módulo, Especificación Técnica o Guía/Tutorial." },
          { step: "3", text: "Proponer cambios grandes mediante issue/ticket con discusión previa." },
          { step: "4", text: "Seguir el estilo de escritura: voz clara, en presente, sin marketing. 1 frase de resumen antes del detalle." },
          { step: "5", text: "Secciones con títulos descriptivos, listas para pasos o elementos, citar fuentes internas." },
          { step: "6", text: "Revisión por el dueño de sección antes de publicar cambios." },
        ].map((s) => (
          <div key={s.step} className="flex gap-3 items-start p-3 rounded-lg bg-muted/30 border border-border/50">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary text-sm font-bold shrink-0">
              {s.step}
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Plantillas de edición">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-border/50 bg-card/60">
          <h4 className="font-semibold text-foreground mb-2">📄 Artículo General</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Resumen (1–3 líneas)</li>
            <li>• Definición y contexto en TAMV</li>
            <li>• Componentes clave</li>
            <li>• Casos de uso y riesgos</li>
            <li>• Relación con otros módulos</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg border border-border/50 bg-card/60">
          <h4 className="font-semibold text-foreground mb-2">🧩 Módulo del Ecosistema</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Tipo: Dominio / Guardianía / Servicio</li>
            <li>• Propósito y funciones clave</li>
            <li>• Entradas, salidas e integraciones</li>
            <li>• Estado actual del módulo</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg border border-border/50 bg-card/60">
          <h4 className="font-semibold text-foreground mb-2">⚙️ Especificación Técnica</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Arquitectura y modelos de datos</li>
            <li>• Flujos principales y APIs</li>
            <li>• Seguridad y cumplimiento</li>
            <li>• Testing y métricas</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg border border-border/50 bg-card/60">
          <h4 className="font-semibold text-foreground mb-2">📘 Guía / Tutorial</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Objetivo y requisitos previos</li>
            <li>• Pasos detallados numerados</li>
            <li>• Ejemplos de uso</li>
            <li>• Errores comunes y soluciones</li>
          </ul>
        </div>
      </div>
    </Section>

    <Section title="Revisión y mantenimiento">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard icon={RefreshCw} title="Revisiones periódicas" description="Cada 3–6 meses se revisan las secciones críticas: Arquitectura, Seguridad y APIs." variant="gold" />
        <InfoCard icon={FileCheck} title="Contenido archivado" description="El contenido obsoleto se marca como 'Archivado' o 'Histórico', nunca se borra si tiene valor documental." variant="cyan" />
      </div>
    </Section>

    <Section title="Compliance y estándares">
      <p className="text-muted-foreground leading-relaxed">
        Toda contribución al ecosistema TAMV debe alinearse con los estándares internacionales y nacionales
        adoptados por el proyecto:
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {["AI Act (EU)", "GDPR", "ISO 27001", "ISO 42001", "NOM‑151", "Zero‑Trust", "OWASP Top 10"].map((std) => (
          <span key={std} className="px-3 py-1.5 rounded-md border border-border/50 bg-muted/30 text-sm text-foreground">
            {std}
          </span>
        ))}
      </div>
    </Section>

    <Section title="Enlaces oficiales">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <a href="https://github.com/OsoPanda1" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card/60 hover:border-primary/50 transition-colors">
          <GitBranch className="h-4 w-4 text-primary" />
          <span className="text-sm text-foreground">GitHub — OsoPanda1</span>
        </a>
        <a href="https://tamvonline-oficial.odoo.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card/60 hover:border-primary/50 transition-colors">
          <Globe className="h-4 w-4 text-secondary" />
          <span className="text-sm text-foreground">Sitio Oficial — Odoo</span>
        </a>
        <a href="https://tamvonlinenetwork.blogspot.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card/60 hover:border-primary/50 transition-colors">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm text-foreground">Blog Oficial — Blogspot</span>
        </a>
      </div>
    </Section>
  </WikiPage>
);

export default Gobernanza;
