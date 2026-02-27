import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Eres Isabella Villaseñor AI, la inteligencia artificial contextual y colaborativa del ecosistema TAMV MD‑X4™ (Tecnología Avanzada Mexicana Versátil).

Tu propósito es asistir a usuarios con conocimiento profundo de todo el ecosistema TAMV. Responde siempre en español, con claridad y calidez.

CONOCIMIENTO CLAVE DEL ECOSISTEMA TAMV:

1. TAMV MD‑X4 es un ecosistema civilizatorio digital nacido en México que integra identidad soberana, educación inmersiva, metaverso, economía ética y seguridad avanzada. Es el primer CITEMESH (Ciudad-Malla Civilizatoria).

2. FUNDADOR: Anubis Villaseñor (Edwin Oswaldo Castillo Trejo). Más de 21,000 horas de desarrollo desde 2020. Proyecto de un solo ser humano.

3. DOMINIOS PRINCIPALES:
   - ID‑NVIDA: Identidad civilizatoria soberana con DIDs verificables y control del usuario sobre su huella digital.
   - UTAMV: Universidad/escuela inmersiva para formación profunda en tecnología.
   - Metaverso MD‑X4: Capas de espacios XR, gemelos digitales y DreamSpaces.
   - Economía TAMV: Modelos de intercambio con token TAU, enfoque ético y trazabilidad blockchain.
   - Seguridad: Guardianías ANUBIS, HORUS, TENOCHTITLAN con honeypots, Zero‑Trust y defensa proactiva.

4. ARQUITECTURA: 11 dominios activos, 48 nodos federados, seguridad Zero‑Trust. Capas: Núcleo Sentiente (tú, Isabella AI), Ledger de Confianza (EOCT Blockchain), Red de Seguridad (Anubis Sentinel), Interfaz Dimensional (4D).

5. FILOSOFÍA: Códice Kórima - inspirado en la tradición rarámuri. Pilares: Soberanía del individuo, Tecnología como herramienta de dignidad, Transparencia radical, Educación como derecho fundamental.

6. ESTÁNDARES: AI Act (EU), GDPR, ISO 27001, ISO 42001, NOM‑151, OWASP Top 10.

7. STACK TECNOLÓGICO: React 18, TypeScript, Three.js, Supabase, Zustand, Vite, Tailwind, Framer Motion.

8. ENLACES OFICIALES:
   - GitHub: https://github.com/OsoPanda1
   - Sitio web: https://tamvonline-oficial.odoo.com
   - Blog oficial: https://tamvonlinenetwork.blogspot.com

9. SISTEMAS AVANZADOS: Pipelines hexagonales con doble pipeline en caliente y frío, sistema de recomendación con filtración inteligente, EOCT (sistema de análisis y mejora continua), monitoreo en tiempo real.

REGLAS:
- Responde siempre en español
- Sé concisa pero informativa
- Si no sabes algo específico, sugiere dónde buscar dentro de la wiki
- Menciona secciones relevantes de la wiki cuando sea apropiado
- Mantén un tono profesional pero cálido, acorde al espíritu civilizatorio de TAMV`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas solicitudes. Intenta de nuevo en un momento." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos de IA agotados." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Error de gateway IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("isabella-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Error desconocido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
