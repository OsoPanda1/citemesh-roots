export type RdmAxis = {
  title: string;
  description: string;
};

export type RdmNarrativeProfile = {
  id: string;
  trigger: string;
  sequence: string[];
  narrative: string;
};

export const RDM_TOS_META = {
  system: "RDM-TOS (Real del Monte – Tourism Operating System)",
  nature: "Infraestructura narrativa + dataset semántico + base cognitiva para IA territorial",
  status: "Listo para producción, entrenamiento de modelos y despliegue en plataforma inteligente",
  identity:
    "Mineral del Monte es la denominación oficial; Real del Monte es la forma viva y simbólica que se experimenta en el turismo.",
  insight:
    "No se consume turismo, se consumen atmósfera, historia y significado.",
};

export const RDM_STRUCTURAL_AXES: RdmAxis[] = [
  {
    title: "Nodo histórico",
    description: "Epicentro minero colonial y escenario de la huelga de 1766, uno de los hitos laborales tempranos de América Latina.",
  },
  {
    title: "Nodo cultural",
    description: "Contacto entre herencias novohispanas y transferencia británica (Cornualles) en prácticas y símbolos urbanos.",
  },
  {
    title: "Nodo gastronómico",
    description: "Origen y evolución del paste como tecnología alimentaria adaptada al contexto minero de altura.",
  },
  {
    title: "Nodo experiencial",
    description: "Territorio de niebla, memoria industrial, verticalidad urbana y narrativa nocturna de callejones.",
  },
];

export const RDM_FOUNDATIONAL_LAYERS = [
  "Territorio originario (indígena)",
  "Sistema colonial (novohispano)",
  "Economía extractiva (minera)",
  "Transferencia industrial (británica)",
  "Reconfiguración turística (moderna)",
];

export const RDM_SYMBOLIC_SYSTEM = [
  { symbol: "Niebla", meaning: "Incertidumbre e introspección" },
  { symbol: "Mina", meaning: "Profundidad, riesgo y riqueza" },
  { symbol: "Montaña", meaning: "Aislamiento y resistencia" },
  { symbol: "Cementerio", meaning: "Memoria y extranjería" },
];

export const RDM_CORE_NODES = [
  "Mina de Acosta",
  "Mina La Dificultad",
  "Panteón Inglés",
  "Bosque del Hiloche",
  "Peñas Cargadas",
  "Centro histórico y callejones",
];

export const RDM_NARRATIVE_PROFILES: RdmNarrativeProfile[] = [
  {
    id: "historia",
    trigger: "historia",
    sequence: ["Mina de Acosta", "Mina La Dificultad", "Centro histórico"],
    narrative:
      "Comienza bajo tierra en la memoria minera, cruza por la evolución tecnológica británica y termina en calles donde la huelga de 1766 todavía se siente.",
  },
  {
    id: "romance",
    trigger: "romance",
    sequence: ["Callejones del centro", "Panteón Inglés", "Café con paste"],
    narrative:
      "La niebla baja entre techos inclinados, el silencio del panteón marca el ritmo y el cierre llega con café caliente y paste recién horneado.",
  },
  {
    id: "aventura",
    trigger: "aventura",
    sequence: ["Bosque del Hiloche", "Peñas Cargadas", "Mirador de montaña"],
    narrative:
      "Respira bosque templado, eleva pulsaciones en peñas y termina con perspectiva total del corredor montañoso de la Sierra de Pachuca.",
  },
  {
    id: "gastronomia",
    trigger: "gastronomía",
    sequence: ["Museo del Paste", "Ruta de pasterías", "Mercado local"],
    narrative:
      "Vive la historia logística del paste, prueba su evolución mexicana y conecta el plato con su red agrícola y comunitaria.",
  },
];

export const RDM_API_BLUEPRINT = {
  stack: ["Node.js + NestJS", "Prisma ORM", "PostgreSQL + pgvector", "Redis cache"],
  endpoints: {
    places: ["GET /places", "GET /places/:id", "GET /places/near?lat=..&lng=.."],
    routes: ["GET /routes/recommend", "POST /routes/generate"],
    events: ["GET /events", "GET /events/active"],
    ai: ["POST /ai/recommend", "POST /ai/chat", "POST /ai/plan-trip"],
  },
  recommendationFormula:
    "final_score = (semantic * 0.5) + (distance * 0.2) + (narrative_intensity * 0.3)",
};

export const RDM_LOVABLE_EXPORT = {
  slug: "rdm_turismo_content_v2_5",
  locale: "es-MX",
  mode: "production_ready",
  contentVersion: "2.5",
  modules: [
    "metacapa",
    "historia_profunda",
    "ontologia_cultural",
    "gastronomia",
    "territorio_experiencia",
    "motor_ia",
    "arquitectura",
  ],
};
