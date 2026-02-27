import { WikiPage } from "@/components/WikiPage";
import { Section } from "@/components/WikiElements";
import { useParams } from "react-router-dom";

const domainData: Record<string, { title: string; tipo: string; proposito: string; funciones: string[]; integraciones: string[] }> = {
  "id-nvida": {
    title: "ID‑NVIDA",
    tipo: "Dominio de Identidad",
    proposito: "Identidad civilizatoria soberana con control total del usuario sobre su huella digital.",
    funciones: [
      "Gestión de identidad descentralizada (DID)",
      "Control de datos personales por el usuario",
      "Verificación sin exposición (Zero‑Knowledge Proofs)",
      "Onboarding sensorial seguro",
    ],
    integraciones: ["ANUBIS (seguridad)", "Economía TAMV (trazabilidad)", "Isabella AI (contextualización)"],
  },
  utamv: {
    title: "UTAMV",
    tipo: "Dominio Educativo",
    proposito: "Universidad/escuela inmersiva para formación profunda en tecnología y competencias clave.",
    funciones: [
      "Cursos inmersivos en entornos XR",
      "Evaluación adaptativa con IA",
      "Certificaciones trazables en blockchain",
      "Laboratorios virtuales y gemelos digitales",
    ],
    integraciones: ["Metaverso MD‑X4 (entornos)", "Isabella AI (tutorización)", "ID‑NVIDA (certificación)"],
  },
  metaverso: {
    title: "Metaverso MD‑X4",
    tipo: "Dominio de Experiencias",
    proposito: "Capas de espacios XR, gemelos digitales y experiencias AV inmersivas conscientes.",
    funciones: [
      "DreamSpaces: entornos sensoriales inmersivos",
      "Gemelos digitales de infraestructura",
      "Interacción 4D con realidad aumentada",
      "Espacios colaborativos multiusuario",
    ],
    integraciones: ["UTAMV (educación)", "Economía TAMV (intercambio)", "ANUBIS (seguridad perimetral)"],
  },
  economia: {
    title: "Economía TAMV",
    tipo: "Dominio Económico",
    proposito: "Modelos de intercambio y valor con enfoque ético, trazabilidad y reciprocidad.",
    funciones: [
      "Tokens de valor ético (TAU/TCEP)",
      "Trazabilidad de transacciones",
      "Modelos de reciprocidad Kórima",
      "Compliance multinorma integrado",
    ],
    integraciones: ["EOCT Blockchain (ledger)", "ID‑NVIDA (identidad)", "Isabella AI (análisis)"],
  },
  seguridad: {
    title: "Seguridad — Guardianías",
    tipo: "Guardianía",
    proposito: "Protección integral mediante ANUBIS, HORUS, TENOCHTITLAN y módulos Zero‑Trust.",
    funciones: [
      "ANUBIS: honeypots y defensa proactiva",
      "HORUS: monitoreo multi-sensorial",
      "TENOCHTITLAN: resiliencia de infraestructura",
      "Zero‑Trust cultural integrado al código",
    ],
    integraciones: ["Todos los dominios (protección transversal)", "Isabella AI (detección de amenazas)"],
  },
};

const DomainPage = () => {
  const { slug } = useParams();
  const data = domainData[slug || ""];

  if (!data) {
    return (
      <WikiPage title="Dominio no encontrado">
        <p className="text-muted-foreground">Este dominio aún no está documentado.</p>
      </WikiPage>
    );
  }

  return (
    <WikiPage title={data.title} subtitle={data.tipo}>
      <Section title="Propósito">
        <p className="text-muted-foreground leading-relaxed">{data.proposito}</p>
      </Section>

      <Section title="Funciones clave">
        <ul className="space-y-2">
          {data.funciones.map((f) => (
            <li key={f} className="flex gap-3 items-start">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-muted-foreground">{f}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Integraciones">
        <div className="flex flex-wrap gap-2">
          {data.integraciones.map((i) => (
            <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted/30 text-muted-foreground">
              {i}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Estado">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm text-primary font-medium">En desarrollo activo</span>
        </div>
      </Section>
    </WikiPage>
  );
};

export default DomainPage;
