/**
 * RDM Digital – Mock Data V1
 * Comprehensive data for all sections of Real del Monte Digital
 */

// ─── TIMELINE HISTORIA ────────────────────────────────
export interface TimelineEvent {
  id: string;
  period: string;
  yearRange: string;
  title: string;
  description: string;
  mapLocation?: string;
}

export const TIMELINE_HISTORIA: TimelineEvent[] = [
  { id: "TL-01", period: "virreinal", yearRange: "1552 – 1780", title: "Época Virreinal", description: "Las vetas de plata de Real del Monte fueron descubiertas en 1552, convirtiendo la zona en uno de los centros mineros más ricos de la Nueva España. La Corona Española financió obras de desagüe y extracción que atrajeron a miles de trabajadores indígenas y mestizos." },
  { id: "TL-02", period: "auge", yearRange: "1780 – 1850", title: "Auge Minero y Huelga de 1766", description: "En 1766, los mineros de Real del Monte protagonizaron la primera huelga laboral de América. El auge de la plata financió la Independencia de México y posicionó al distrito como uno de los más productivos del mundo." },
  { id: "TL-03", period: "inglesa", yearRange: "1824 – 1900", title: "Influencia Inglesa", description: "En 1824 llegaron ingenieros y mineros de Cornualles, Inglaterra, trayendo la primera máquina de vapor de América Latina (1827), el fútbol (primer partido documentado en México en 1900) y el paste, que se convirtió en ícono gastronómico." },
  { id: "TL-04", period: "moderna", yearRange: "1900 – actualidad", title: "Época Moderna", description: "Real del Monte fue declarado Pueblo Mágico en 2004. Hoy combina su herencia minera con turismo cultural, gastronomía y proyectos digitales como RDM‑TOS, buscando convertirse en el primer pueblo digitalmente soberano de México." },
];

// ─── TRADICIONES ───────────────────────────────────────
export interface Tradicion {
  id: string;
  nombre: string;
  fecha: string;
  descripcion: string;
  ubicacion: string;
  tipo: "religiosa" | "cívica" | "gastronómica" | "minera" | "comunitaria";
}

export const TRADICIONES: Tradicion[] = [
  { id: "TR-01", nombre: "Festival Internacional del Paste", fecha: "Octubre", descripcion: "Más de 50 variedades de pastes, concursos culinarios, música y el horneo del paste más grande del mundo.", ubicacion: "Plaza Principal", tipo: "gastronómica" },
  { id: "TR-02", nombre: "Día de Muertos Anglo-Mexicano", fecha: "1-2 de noviembre", descripcion: "Fusión de tradiciones mexicanas con costumbres anglicanas en el Panteón Inglés.", ubicacion: "Panteón Inglés y Centro", tipo: "comunitaria" },
  { id: "TR-03", nombre: "Feria de la Asunción", fecha: "10-16 de agosto", descripcion: "Fiesta religiosa con procesiones, pirotecnia, feria popular y antojitos.", ubicacion: "Parroquia y Plaza", tipo: "religiosa" },
  { id: "TR-04", nombre: "Conmemoración del Primer Partido de Fútbol", fecha: "Mayo", descripcion: "Torneo recreativo con uniformes de época, conferencias sobre la historia del deporte en México.", ubicacion: "Campo deportivo", tipo: "cívica" },
  { id: "TR-05", nombre: "Noche de Leyendas Mineras", fecha: "Sábados selectos", descripcion: "Recorrido nocturno teatralizado por callejones con leyendas del minero fantasma y el tesoro cornish.", ubicacion: "Centro Histórico", tipo: "minera" },
  { id: "TR-06", nombre: "Festival de la Niebla", fecha: "Julio-Agosto", descripcion: "Celebración del fenómeno natural más icónico: fotografía, meditación y caminatas al amanecer.", ubicacion: "Miradores y bosques", tipo: "comunitaria" },
];

// ─── PATRIMONIO MINERO ─────────────────────────────────
export interface PatrimonioMinero {
  id: string;
  nombre: string;
  tipo: "mina" | "hacienda" | "museo" | "túnel";
  descripcion: string;
  horario?: string;
  coords: { lat: number; lng: number };
}

export const PATRIMONIO_MINERO: PatrimonioMinero[] = [
  { id: "PM-01", nombre: "Mina de Acosta", tipo: "mina", descripcion: "Una de las minas más profundas y antiguas del distrito. Se puede descender 400 metros para recorrer sus túneles originales con guía.", horario: "9:00-17:00", coords: { lat: 20.1330, lng: -98.6720 } },
  { id: "PM-02", nombre: "Mina La Dificultad", tipo: "mina", descripcion: "Mina histórica donde se instaló la primera máquina de vapor de América Latina en 1827.", coords: { lat: 20.1345, lng: -98.6690 } },
  { id: "PM-03", nombre: "Museo de Medicina Laboral", tipo: "museo", descripcion: "Antiguo hospital de mineros convertido en museo. Exhibe instrumentos médicos, historia de enfermedades laborales y la vida cotidiana de los mineros.", horario: "10:00-17:00", coords: { lat: 20.1320, lng: -98.6740 } },
  { id: "PM-04", nombre: "Hacienda de San Miguel Regla", tipo: "hacienda", descripcion: "Majestuosa hacienda de beneficio del siglo XVIII rodeada de prismas basálticos y cascadas.", horario: "9:00-18:00", coords: { lat: 20.1800, lng: -98.6100 } },
  { id: "PM-05", nombre: "Túneles del Centro", tipo: "túnel", descripcion: "Red de túneles bajo el pueblo que conectaban minas con haciendas. Más de 500 km de galerías subterráneas.", coords: { lat: 20.1335, lng: -98.6735 } },
];

// ─── GASTRONOMÍA ───────────────────────────────────────
export interface PlatilloTipico {
  id: string;
  nombre: string;
  categoria: "platillo" | "dulce" | "bebida";
  descripcion: string;
  origen: string;
  comerciosRecomendados: string[];
}

export const PLATILLOS: PlatilloTipico[] = [
  { id: "GA-01", nombre: "Paste Tradicional", categoria: "platillo", descripcion: "Empanada horneada de origen cornish rellena de papa con carne, sazonada con perejil y pimienta. El alimento que los mineros ingleses llevaban a las profundidades.", origen: "Cornualles, Inglaterra – adaptado en Real del Monte desde 1824", comerciosRecomendados: ["COM-01", "COM-02"] },
  { id: "GA-02", nombre: "Paste de Mole", categoria: "platillo", descripcion: "Variante mexicana del paste con relleno de mole poblano, pollo y ajonjolí. Fusión perfecta entre lo inglés y lo mexicano.", origen: "Real del Monte, fusión siglo XX", comerciosRecomendados: ["COM-01"] },
  { id: "GA-03", nombre: "Barbacoa de Hoyo", categoria: "platillo", descripcion: "Carne de borrego cocida en horno de tierra durante toda la noche, servida con consomé, tortillas y salsas.", origen: "Tradición prehispánica del Valle del Mezquital", comerciosRecomendados: ["COM-03"] },
  { id: "GA-04", nombre: "Escamoles", categoria: "platillo", descripcion: "Larvas de hormiga consideradas el 'caviar mexicano'. Se preparan en mantequilla con epazote y chile.", origen: "Tradición otomí prehispánica", comerciosRecomendados: ["COM-03"] },
  { id: "GA-05", nombre: "Dulces de Leche Quemada", categoria: "dulce", descripcion: "Dulces artesanales hechos con leche, azúcar y nuez, cocidos lentamente hasta lograr textura y color ámbar.", origen: "Tradición repostera hidalguense", comerciosRecomendados: ["COM-04"] },
  { id: "GA-06", nombre: "Pan de Pulque", categoria: "dulce", descripcion: "Pan fermentado con pulque que le da un sabor único y esponjoso. Tradición de panaderías centenarias.", origen: "Herencia pulquera del altiplano", comerciosRecomendados: ["COM-04"] },
  { id: "GA-07", nombre: "Pulque Curado", categoria: "bebida", descripcion: "Bebida fermentada del maguey, curada con frutas como guayaba, avena o nuez. Bebida ancestral del altiplano.", origen: "Tradición prehispánica mesoamericana", comerciosRecomendados: ["COM-05"] },
  { id: "GA-08", nombre: "Chocolate Caliente de Metate", categoria: "bebida", descripcion: "Chocolate artesanal molido en metate con canela y piloncillo. Perfecto para el frío de la montaña.", origen: "Tradición colonial mexicana", comerciosRecomendados: ["COM-04", "COM-05"] },
];

// ─── DICHOS MINEROS ────────────────────────────────────
export interface DichoMinero {
  id: string;
  dicho: string;
  significado: string;
  contexto: string;
  anecdota: string;
  letraInicial: string;
}

export const DICHOS_MINEROS: DichoMinero[] = [
  { id: "DM-01", dicho: "Más vale paso que dure y no trote que canse", significado: "Es mejor avanzar con firmeza y constancia que con prisa y riesgo.", contexto: "Dicho para quien quería apurar el trabajo en la mina y arriesgaba la seguridad.", anecdota: "Los barreteros más experimentados repetían esta frase a los nuevos que querían impresionar al capataz.", letraInicial: "M" },
  { id: "DM-02", dicho: "El que no conoce la mina, no sabe lo que es oscuro", significado: "Solo quien ha experimentado la dificultad real entiende su profundidad.", contexto: "Se usa cuando alguien opina sobre algo que no ha vivido.", anecdota: "Un dicho favorito de los viejos mineros al escuchar quejas de gente de la superficie.", letraInicial: "E" },
  { id: "DM-03", dicho: "A mina nueva, barretero viejo", significado: "Para enfrentar algo desconocido, conviene tener experiencia.", contexto: "Se dice cuando se asigna a un veterano a un proyecto difícil.", anecdota: "Cuando abrieron la veta de San Cayetano, mandaron a los más experimentados primero.", letraInicial: "A" },
  { id: "DM-04", dicho: "Al buen minero no le falta veta", significado: "Una persona habilidosa siempre encuentra oportunidades.", contexto: "Para elogiar a quien siempre sale adelante en cualquier circunstancia.", anecdota: "Se cuenta que Don Blas encontraba plata hasta donde otros habían dado por agotada una galería.", letraInicial: "A" },
  { id: "DM-05", dicho: "La plata se encuentra, pero la salud no se compra", significado: "La riqueza material no vale si pierdes la salud.", contexto: "Dicho de los mineros que veían a compañeros enfermar por el polvo y los gases.", anecdota: "Las viudas de mineros solían repetirlo cuando otros hombres querían bajar a los tiros más peligrosos.", letraInicial: "L" },
  { id: "DM-06", dicho: "Por la boca de la mina sale la verdad", significado: "La realidad siempre sale a la luz.", contexto: "Se usa cuando se descubre algo que estaba oculto.", anecdota: "Cuando hubo un derrumbe en 1812, la investigación reveló que el capataz había ignorado advertencias.", letraInicial: "P" },
  { id: "DM-07", dicho: "El tiro es profundo, pero la ambición más", significado: "La codicia humana no tiene límites.", contexto: "Cuando alguien arriesga demasiado por obtener más.", anecdota: "Se decía de los dueños que ordenaban profundizar los tiros sin reforzar los ademes.", letraInicial: "E" },
  { id: "DM-08", dicho: "De la mina al cielo, solo Dios sabe el camino", significado: "La vida del minero está llena de incertidumbre.", contexto: "Se rezaba antes de cada turno como invocación de protección.", anecdota: "Los mineros dejaban ofrendas a la Virgen en capillas subterráneas antes de cada jornada.", letraInicial: "D" },
];

// ─── COMERCIOS ─────────────────────────────────────────
export interface Comercio {
  id: string;
  nombre: string;
  categoria: "restaurante" | "café" | "hospedaje" | "artesanías" | "servicios";
  descripcion: string;
  direccion: string;
  horario: string;
  telefono: string;
  zona: "centro" | "barrio" | "carretera";
  precio: "económico" | "medio" | "alto";
  especialidades: string[];
  servicios: string[];
  coords: { lat: number; lng: number };
}

export const COMERCIOS: Comercio[] = [
  { id: "COM-01", nombre: "El Portal del Paste", categoria: "restaurante", descripcion: "La pastería más tradicional de Real del Monte, con recetas heredadas de familias cornish. Más de 30 variedades de pastes artesanales horneados en horno de piedra.", direccion: "Av. Hidalgo 12, Centro", horario: "8:00 – 20:00", telefono: "771-234-5601", zona: "centro", precio: "económico", especialidades: ["Pastes tradicionales", "Pastes de mole", "Pastes dulces"], servicios: ["Para llevar", "Mesas", "Estacionamiento cercano"], coords: { lat: 20.1332, lng: -98.6738 } },
  { id: "COM-02", nombre: "Pastes Kikos", categoria: "restaurante", descripcion: "Famosa pastería con décadas de tradición. Sus pastes de papa son considerados los más auténticos del pueblo.", direccion: "Calle Morelos 8, Centro", horario: "9:00 – 19:00", telefono: "771-234-5602", zona: "centro", precio: "económico", especialidades: ["Paste de papa", "Paste de frijol", "Paste de arroz con leche"], servicios: ["Para llevar", "Mesas"], coords: { lat: 20.1328, lng: -98.6742 } },
  { id: "COM-03", nombre: "Fonda Doña Lupita", categoria: "restaurante", descripcion: "Cocina tradicional hidalguense con recetas de tres generaciones. Barbacoa los fines de semana y escamoles en temporada.", direccion: "Callejón del Carmen 5", horario: "8:00 – 17:00", telefono: "771-234-5603", zona: "centro", precio: "medio", especialidades: ["Barbacoa de hoyo", "Escamoles", "Mixiotes"], servicios: ["Mesas", "Grupos", "Reservaciones"], coords: { lat: 20.1325, lng: -98.6745 } },
  { id: "COM-04", nombre: "Café del Real", categoria: "café", descripcion: "Cafetería artesanal en una casona del siglo XIX con chimenea. Café de altura de Veracruz y repostería tradicional.", direccion: "Plaza Principal 3", horario: "8:00 – 21:00", telefono: "771-234-5604", zona: "centro", precio: "medio", especialidades: ["Café de olla", "Pan de pulque", "Chocolate caliente"], servicios: ["Wi-Fi", "Chimenea", "Terraza", "Eventos privados"], coords: { lat: 20.1330, lng: -98.6740 } },
  { id: "COM-05", nombre: "La Tinacalera", categoria: "restaurante", descripcion: "Bar de pulques curados y cocina de autor basada en recetas mineras. Ambiente bohemio con música en vivo los viernes.", direccion: "Calle Allende 15", horario: "13:00 – 23:00", telefono: "771-234-5605", zona: "centro", precio: "medio", especialidades: ["Pulque curado", "Tlacoyos", "Tacos mineros"], servicios: ["Música en vivo", "Terraza", "Reservaciones"], coords: { lat: 20.1335, lng: -98.6730 } },
  { id: "COM-06", nombre: "Hotel Posada del Real", categoria: "hospedaje", descripcion: "Posada colonial restaurada con habitaciones con chimenea y vista a la montaña. Incluye desayuno con pastes.", direccion: "Av. Juárez 22", horario: "Check-in 14:00 / Check-out 12:00", telefono: "771-234-5606", zona: "centro", precio: "alto", especialidades: ["Habitaciones con chimenea", "Suite nupcial", "Desayuno incluido"], servicios: ["Wi-Fi", "Estacionamiento", "Mascotas", "Eventos"], coords: { lat: 20.1340, lng: -98.6725 } },
  { id: "COM-07", nombre: "Artesanías La Plata Real", categoria: "artesanías", descripcion: "Taller y tienda de platería artesanal con diseños inspirados en la minería y cultura cornish.", direccion: "Portal del Comercio 7", horario: "10:00 – 19:00", telefono: "771-234-5607", zona: "centro", precio: "medio", especialidades: ["Joyería de plata", "Figuras de mineros", "Recuerdos Pueblo Mágico"], servicios: ["Talleres de platería", "Envíos", "Regalos personalizados"], coords: { lat: 20.1333, lng: -98.6736 } },
  { id: "COM-08", nombre: "Tours Real del Monte", categoria: "servicios", descripcion: "Servicio de guías certificados para recorridos históricos, mineros, gastronómicos y de leyendas nocturnas.", direccion: "Oficina en Plaza Principal", horario: "8:00 – 18:00", telefono: "771-234-5608", zona: "centro", precio: "medio", especialidades: ["Tours históricos", "Descenso a minas", "Leyendas nocturnas", "Rutas gastronómicas"], servicios: ["Guías bilingües", "Grupos", "Transporte", "Reservaciones online"], coords: { lat: 20.1331, lng: -98.6739 } },
];

// ─── RUTAS TURÍSTICAS ──────────────────────────────────
export interface RutaTuristica {
  id: string;
  nombre: string;
  duracion: string;
  dificultad: "baja" | "media" | "alta";
  tipo: "histórica" | "gastronómica" | "natural" | "mixta";
  puntosInteres: number;
  descripcion: string;
  itinerario: { punto: string; hora: string; descripcion: string }[];
}

export const RUTAS: RutaTuristica[] = [
  { id: "RT-01", nombre: "Ruta del Patrimonio Minero", duracion: "3 horas", dificultad: "media", tipo: "histórica", puntosInteres: 6, descripcion: "Recorre los sitios clave de la historia minera: desde la Mina de Acosta hasta el Panteón Inglés, pasando por el Museo de Medicina Laboral.", itinerario: [
    { punto: "Plaza Principal", hora: "10:00", descripcion: "Punto de encuentro. Breve introducción a la historia minera." },
    { punto: "Mina de Acosta", hora: "10:20", descripcion: "Descenso a 400m bajo tierra. Recorrido por galerías originales." },
    { punto: "Museo de Medicina Laboral", hora: "11:30", descripcion: "Historia de la salud y vida cotidiana de los mineros." },
    { punto: "Mina La Dificultad", hora: "12:15", descripcion: "Sitio de la primera máquina de vapor en América." },
    { punto: "Panteón Inglés", hora: "12:45", descripcion: "El cementerio anglicano más alto del mundo a 2,700 msnm." },
    { punto: "Plaza Principal", hora: "13:00", descripcion: "Regreso y recomendación de paste para cerrar la ruta." },
  ]},
  { id: "RT-02", nombre: "Ruta del Paste y el Café", duracion: "2 horas", dificultad: "baja", tipo: "gastronómica", puntosInteres: 5, descripcion: "Un recorrido por las mejores pasterías y cafeterías del pueblo, degustando variedades y conociendo la historia detrás de cada bocado.", itinerario: [
    { punto: "El Portal del Paste", hora: "10:00", descripcion: "Degustación de pastes clásicos: papa, mole y tinga." },
    { punto: "Pastes Kikos", hora: "10:30", descripcion: "Los pastes más auténticos. Prueba el de papa con perejil." },
    { punto: "Café del Real", hora: "11:00", descripcion: "Café de olla y pan de pulque junto a la chimenea." },
    { punto: "Dulces artesanales", hora: "11:30", descripcion: "Parada para comprar dulces de leche quemada." },
    { punto: "La Tinacalera", hora: "12:00", descripcion: "Cierre con un pulque curado y tlacoyos." },
  ]},
  { id: "RT-03", nombre: "Ruta de Miradores y Naturaleza", duracion: "4 horas", dificultad: "alta", tipo: "natural", puntosInteres: 4, descripcion: "Caminata por senderos de bosque de oyamel, peñas cargadas y miradores con vistas espectaculares del valle y la sierra.", itinerario: [
    { punto: "Bosque El Hiloche", hora: "07:00", descripcion: "Inicio del sendero. Bosque de oyamel y encino." },
    { punto: "Peñas Cargadas", hora: "08:30", descripcion: "Formaciones rocosas emblemáticas. Punto fotográfico." },
    { punto: "Mirador del Valle", hora: "09:30", descripcion: "Vista panorámica del pueblo y las montañas circundantes." },
    { punto: "Regreso por el bosque", hora: "10:30", descripcion: "Descenso por camino alterno entre la niebla." },
  ]},
  { id: "RT-04", nombre: "Ruta del Centro Histórico", duracion: "1.5 horas", dificultad: "baja", tipo: "mixta", puntosInteres: 7, descripcion: "Paseo por los callejones, plazas y edificios coloniales del centro de Real del Monte, combinando historia, arquitectura y vida cotidiana.", itinerario: [
    { punto: "Plaza Principal", hora: "10:00", descripcion: "Punto de partida. Kiosko y entorno colonial." },
    { punto: "Parroquia de la Asunción", hora: "10:15", descripcion: "Templo del siglo XVIII, centro de la vida religiosa." },
    { punto: "Callejón del Carmen", hora: "10:30", descripcion: "Uno de los callejones más pintorescos y empinados." },
    { punto: "Casas inglesas", hora: "10:45", descripcion: "Arquitectura cornish adaptada a la montaña mexicana." },
    { punto: "Portal del Comercio", hora: "11:00", descripcion: "Artesanías, platería y recuerdos del Pueblo Mágico." },
    { punto: "Mirador urbano", hora: "11:15", descripcion: "Vista del pueblo y los techos de teja roja." },
    { punto: "Plaza Principal", hora: "11:30", descripcion: "Regreso. Pausa para un chocolate caliente." },
  ]},
];

// ─── QUÉ VISITAR ───────────────────────────────────────
export interface PuntoInteres {
  id: string;
  nombre: string;
  categoria: "imprescindible" | "mirador" | "museo" | "experiencia_minera";
  descripcion: string;
  tiempoRecomendado: string;
  mejorHorario: "mañana" | "tarde" | "noche" | "cualquiera";
  coords: { lat: number; lng: number };
}

export const PUNTOS_INTERES: PuntoInteres[] = [
  { id: "PI-01", nombre: "Panteón Inglés", categoria: "imprescindible", descripcion: "El cementerio anglicano más alto del mundo. Tumbas de mineros cornish con historias grabadas en piedra, rodeado de bosque de niebla.", tiempoRecomendado: "45 min", mejorHorario: "mañana", coords: { lat: 20.1360, lng: -98.6700 } },
  { id: "PI-02", nombre: "Mina de Acosta", categoria: "experiencia_minera", descripcion: "Desciende 400 metros bajo tierra y recorre galerías mineras del siglo XVIII con guía especializado.", tiempoRecomendado: "1.5 horas", mejorHorario: "mañana", coords: { lat: 20.1330, lng: -98.6720 } },
  { id: "PI-03", nombre: "Peñas Cargadas", categoria: "mirador", descripcion: "Formaciones rocosas naturales que parecen sostenerse en equilibrio imposible. Vistas espectaculares de la sierra.", tiempoRecomendado: "1 hora", mejorHorario: "mañana", coords: { lat: 20.1400, lng: -98.6650 } },
  { id: "PI-04", nombre: "Museo de Medicina Laboral", categoria: "museo", descripcion: "Antiguo hospital minero con exhibiciones sobre la vida y salud de los trabajadores de las minas.", tiempoRecomendado: "1 hora", mejorHorario: "cualquiera", coords: { lat: 20.1320, lng: -98.6740 } },
  { id: "PI-05", nombre: "Callejones del Centro", categoria: "imprescindible", descripcion: "Red de callejones empinados con fachadas coloridas, puertas de madera centenarias y rincones fotogénicos.", tiempoRecomendado: "1 hora", mejorHorario: "tarde", coords: { lat: 20.1332, lng: -98.6738 } },
  { id: "PI-06", nombre: "Mirador del Valle", categoria: "mirador", descripcion: "Punto panorámico con vista de 360° del pueblo, la sierra y el bosque de niebla.", tiempoRecomendado: "30 min", mejorHorario: "mañana", coords: { lat: 20.1380, lng: -98.6680 } },
  { id: "PI-07", nombre: "Museo del Paste", categoria: "museo", descripcion: "Historia del paste desde Cornualles hasta Real del Monte. Incluye taller de elaboración.", tiempoRecomendado: "1 hora", mejorHorario: "cualquiera", coords: { lat: 20.1335, lng: -98.6732 } },
  { id: "PI-08", nombre: "Socavón del Rey", categoria: "experiencia_minera", descripcion: "Túnel histórico que conectaba distintas minas. Recorrido guiado con iluminación dramática.", tiempoRecomendado: "45 min", mejorHorario: "cualquiera", coords: { lat: 20.1340, lng: -98.6715 } },
];

// ─── MURO DE PUBLICACIONES ─────────────────────────────
export interface PostMuro {
  id: string;
  autor: string;
  rol: "turista" | "comerciante" | "ayuntamiento" | "guía" | "comunidad";
  texto: string;
  imagen?: string;
  etiquetas: string[];
  fecha: string;
}

export const POSTS_MURO: PostMuro[] = [
  { id: "POST-01", autor: "María López", rol: "turista", texto: "¡Acabo de descender a la Mina de Acosta! Experiencia inolvidable. El guía nos contó historias de los mineros cornish que te ponen los pelos de punta. Totalmente recomendado.", etiquetas: ["#experiencia", "#minas", "#recomendación"], fecha: "2026-03-30" },
  { id: "POST-02", autor: "El Portal del Paste", rol: "comerciante", texto: "🎉 Promoción especial: 2x1 en pastes de mole todos los martes de marzo. ¡Ven a probar la fusión perfecta entre Cornualles y México!", etiquetas: ["#promoción", "#pastes", "#gastronomía"], fecha: "2026-03-29" },
  { id: "POST-03", autor: "Ayuntamiento RDM", rol: "ayuntamiento", texto: "📢 Convocatoria: Se buscan voluntarios para la restauración del Callejón del Carmen. Jornada comunitaria el próximo sábado. ¡Participa y cuida nuestro patrimonio!", etiquetas: ["#evento", "#comunidad", "#patrimonio"], fecha: "2026-03-28" },
  { id: "POST-04", autor: "Carlos Hernández", rol: "guía", texto: "Hoy tuvimos un amanecer espectacular desde Peñas Cargadas. La niebla subía lentamente y el sol pintaba todo de dorado. Así se vive la magia del Real. 🌄", imagen: "rdm-penas-cargadas", etiquetas: ["#foto", "#naturaleza", "#miradores"], fecha: "2026-03-28" },
  { id: "POST-05", autor: "Vecinos del Barrio Alto", rol: "comunidad", texto: "Gracias a todos los que participaron en la limpieza del sendero al Mirador del Valle. Quedó como nuevo. ¡Real del Monte se cuida entre todos! 💪", etiquetas: ["#comunidad", "#voluntariado"], fecha: "2026-03-27" },
  { id: "POST-06", autor: "Café del Real", rol: "comerciante", texto: "Nuevo en la carta: chocolate caliente con chile ancho y un toque de mezcal. Perfecto para las tardes frías del Real. ☕🌶️", etiquetas: ["#promoción", "#gastronomía", "#nuevo"], fecha: "2026-03-26" },
  { id: "POST-07", autor: "Ana Torres", rol: "turista", texto: "No puedo creer que el paste tenga su origen en Cornualles. La historia de Real del Monte es fascinante. Vinimos por un fin de semana y nos quedamos tres días.", etiquetas: ["#experiencia", "#historia", "#relato"], fecha: "2026-03-25" },
  { id: "POST-08", autor: "Tours Real del Monte", rol: "guía", texto: "📅 Este viernes: Noche de Leyendas Mineras. Recorrido teatralizado por los callejones del pueblo. Cupo limitado, reserva tu lugar.", etiquetas: ["#evento", "#leyendas", "#tours"], fecha: "2026-03-24" },
];

// ─── MAPA – Todos los puntos ───────────────────────────
export interface MapMarker {
  id: string;
  nombre: string;
  tipo: "punto_interes" | "comercio" | "patrimonio" | "ruta_inicio";
  categoria: string;
  coords: { lat: number; lng: number };
  enlace: string;
}

export function getAllMapMarkers(): MapMarker[] {
  const markers: MapMarker[] = [];
  PUNTOS_INTERES.forEach(p => markers.push({ id: p.id, nombre: p.nombre, tipo: "punto_interes", categoria: p.categoria, coords: p.coords, enlace: `/que-visitar` }));
  COMERCIOS.forEach(c => markers.push({ id: c.id, nombre: c.nombre, tipo: "comercio", categoria: c.categoria, coords: c.coords, enlace: `/comercios/${c.id}` }));
  PATRIMONIO_MINERO.forEach(p => markers.push({ id: p.id, nombre: p.nombre, tipo: "patrimonio", categoria: p.tipo, coords: p.coords, enlace: `/cultura` }));
  return markers;
}

// ─── RUTAS GASTRONÓMICAS ───────────────────────────────
export const RUTAS_GASTRONOMICAS: RutaTuristica[] = [
  { id: "RG-01", nombre: "Ruta del Paste", duracion: "2 horas", dificultad: "baja", tipo: "gastronómica", puntosInteres: 4, descripcion: "Degusta las mejores variedades de paste en las pasterías más emblemáticas del pueblo.", itinerario: [
    { punto: "El Portal del Paste", hora: "10:00", descripcion: "Pastes clásicos y de mole." },
    { punto: "Pastes Kikos", hora: "10:40", descripcion: "El paste de papa más auténtico." },
    { punto: "Mercado local", hora: "11:10", descripcion: "Pastes caseros y variaciones regionales." },
    { punto: "Café del Real", hora: "11:40", descripcion: "Paste dulce con chocolate caliente." },
  ]},
  { id: "RG-02", nombre: "Ruta del Centro Histórico y Café", duracion: "1.5 horas", dificultad: "baja", tipo: "gastronómica", puntosInteres: 3, descripcion: "Combina la belleza del centro con las mejores bebidas calientes y repostería artesanal.", itinerario: [
    { punto: "Café del Real", hora: "09:00", descripcion: "Café de olla y pan de pulque." },
    { punto: "Dulcería artesanal", hora: "09:40", descripcion: "Dulces de leche quemada y jamoncillo." },
    { punto: "La Tinacalera", hora: "10:15", descripcion: "Pulque curado de guayaba para cerrar." },
  ]},
];
