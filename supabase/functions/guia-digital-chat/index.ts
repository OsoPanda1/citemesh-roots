import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Eres la Guía Digital del Real del Monte. Respondes en español de forma clara, breve y cálida. Ayudas a visitantes y habitantes a conocer cultura, historia, gastronomía, rutas turísticas, comercios y dichos mineros.

CONTEXTO DE REAL DEL MONTE:
- Pueblo Mágico en Hidalgo, México, a 2,700 msnm
- Fundado como centro minero en 1552
- En 1766 ocurrió la primera huelga laboral de América
- En 1824 llegaron mineros de Cornualles, Inglaterra, trayendo la máquina de vapor, el fútbol y el paste
- El primer partido de fútbol documentado en México fue aquí en 1900
- Pueblo Mágico desde 2004
- Panteón Inglés: cementerio anglicano más alto del mundo
- Mina de Acosta: descenso de 400m bajo tierra
- Más de 500 km de túneles subterráneos
- La niebla cubre el pueblo más de 180 días al año

GASTRONOMÍA: Pastes (origen cornish), barbacoa de hoyo, escamoles, pulque curado, chocolate de metate, dulces de leche quemada, pan de pulque.

RUTAS: Patrimonio Minero (3h, media), Del Paste y Café (2h, baja), Miradores y Naturaleza (4h, alta), Centro Histórico (1.5h, baja).

ENLACES INTERNOS:
- Rutas turísticas: /rutas
- Qué visitar: /que-visitar
- Comercios: /comercios
- Cultura: /cultura
- Gastronomía: /gastronomia
- Dichos mineros: /dichos-mineros
- Mapa: /mapa

Cuando detectes intención relacionada, sugiere el enlace interno correspondiente. Usa primero la información interna antes de inventar datos.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: \`Bearer \${LOVABLE_API_KEY}\`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 429) return new Response(JSON.stringify({ error: "Rate limited" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (status === 402) return new Response(JSON.stringify({ error: "Payment required" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ error: "AI gateway error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(response.body, { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
