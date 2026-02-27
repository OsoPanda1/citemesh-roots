import { WikiPage } from "@/components/WikiPage";
import { Section } from "@/components/WikiElements";

const Introduccion = () => (
  <WikiPage
    title="Introducción"
    subtitle="¿Qué es TAMV y por qué existe?"
  >
    <Section title="¿Qué es TAMV?">
      <p className="text-muted-foreground leading-relaxed">
        <strong className="text-foreground">TAMV MD‑X4</strong> es un ecosistema civilizatorio digital nacido en México
        que integra identidad soberana, educación inmersiva, metaverso, economía ética y seguridad avanzada en una sola
        infraestructura auditable. Se plantea como el primer <strong className="text-primary">CITEMESH</strong>: un metaverso
        civilizatorio diseñado para servir a las personas y no a la publicidad ni a la vigilancia masiva.
      </p>
    </Section>

    <Section title="Origen e historia">
      <p className="text-muted-foreground leading-relaxed">
        TAMV no nace en un laboratorio corporativo, sino desde la experiencia personal de su fundador
        (<strong className="text-foreground">Anubis Villaseñor / Edwin Oswaldo Castillo Trejo</strong>) tras miles
        de horas de autoestudio, rechazo laboral y frustración con la educación tecnológica superficial.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Entre 2020 y 2026 se documentan más de <strong className="text-primary">21,000 horas</strong> de trabajo
        dedicadas a conceptualizar, diseñar, programar y narrar el ecosistema, sosteniéndolo prácticamente como
        "proyecto de un solo ser humano".
      </p>
    </Section>

    <Section title="Propósito civilizatorio">
      <p className="text-muted-foreground leading-relaxed">
        El objetivo de TAMV es encender una infraestructura digital que permita a personas, organizaciones y ciudades
        construir futuro con dignidad, transparencia y control ciudadano sobre los datos. Más que ser "otra red social",
        busca operar como un <strong className="text-secondary">sistema operativo civilizatorio latinoamericano</strong>,
        documentado públicamente y diseñado como obra digital ligada a la evolución de la región.
      </p>
    </Section>

    <Section title="Tecnología y estándares">
      <div className="rounded-lg border border-border bg-card/50 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-4 py-2.5 text-foreground font-medium">Capa</th>
              <th className="text-left px-4 py-2.5 text-foreground font-medium">Tecnologías</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5 font-medium text-foreground">Frontend</td>
              <td className="px-4 py-2.5">React 18, TypeScript, Vite, Tailwind CSS, Framer Motion</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5 font-medium text-foreground">3D/XR</td>
              <td className="px-4 py-2.5">Three.js, React Three Fiber, Drei</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5 font-medium text-foreground">Backend</td>
              <td className="px-4 py-2.5">Supabase (PostgreSQL, Auth, Edge Functions, Storage)</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 font-medium text-foreground">Alineación</td>
              <td className="px-4 py-2.5">Web 4.0/5.0, AI Act, GDPR, ISO, NOM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  </WikiPage>
);

export default Introduccion;
