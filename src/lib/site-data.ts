import type { Project, Service, SiteSettings } from "./types";

/**
 * Fallback content, seeded from Cobalto's public site/social presence
 * (cobaltomx.com, Instagram, Facebook, LinkedIn) as of Aug 2026.
 * Shaped to match the Sanity schemas in cobalto-sanity/schemas so this
 * can be swapped for a live CMS query later without touching components.
 */

export const siteSettings: SiteSettings = {
  companyName: "Cobalto, Arquitectura y Construcción",
  tagline: {
    es: "Construcción y arquitectura que enamora, de la cimentación a las llaves.",
    en: "Construction and architecture that delights, from foundation to keys.",
  },
  phone: "+52 999 527 0053",
  whatsapp: "529995270053",
  email: "cobaltogrupo@gmail.com",
  address: "Calle 60 #356, Mérida Centro, Yucatán, México",
  mapsUrl: "https://maps.app.goo.gl/ENctaXXXMQ8GX9Rn7",
  instagramUrl: "https://www.instagram.com/cobaltoarquitectura/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61553161851768",
  aboutText: {
    es: "Fundada en Mérida en 2022 por dos socios que unieron su experiencia para construir un México más moderno y accesible. Creemos en una forma de hacer negocio que va más allá de lo económico: construcción de alta calidad y arquitectura que cuida el bienestar de las personas y del entorno.",
    en: "Founded in Mérida in 2022 by two partners who combined their experience to help build a more modern and accessible Mexico. We believe in a way of doing business that goes beyond the purely economic: high-quality construction and architecture that cares for people and the environment.",
  },
};

export const services: Service[] = [
  {
    slug: "construccion",
    icon: "construction",
    title: { es: "Construcción integral", en: "Full-scope construction" },
    description: {
      es: "Proyectos completos de construcción, de la cimentación a la entrega de llaves, con seguimiento cercano en cada etapa.",
      en: "Complete construction projects, from foundation to key handover, with close follow-up at every stage.",
    },
  },
  {
    slug: "remodelacion",
    icon: "renovation",
    title: { es: "Remodelación y restauración", en: "Renovation & restoration" },
    description: {
      es: "Reforma de casas antiguas, incluidas propiedades con más de 100 años, respetando su carácter mientras las llevamos al presente.",
      en: "Renovation of older homes, including properties over 100 years old, respecting their character while bringing them into the present.",
    },
  },
  {
    slug: "diseno-bim",
    icon: "design",
    title: { es: "Diseño arquitectónico + BIM", en: "Architectural design + BIM" },
    description: {
      es: "Proyectos a medida — residencias, edificios departamentales y planificación urbana — con metodología BIM y renders fotorrealistas.",
      en: "Custom projects — residences, multi-unit buildings and urban planning — using BIM methodology and photorealistic rendering.",
    },
  },
  {
    slug: "mantenimiento",
    icon: "maintenance",
    title: { es: "Mantenimiento", en: "Maintenance" },
    description: {
      es: "Mantenimiento preventivo y correctivo, discreto y sin interrupciones, para conservar la operatividad y la imagen de tu propiedad.",
      en: "Preventive and corrective maintenance, discreet and non-disruptive, to keep your property running and looking its best.",
    },
  },
];

export const projects: Project[] = [
  {
    slug: "casa-santiago",
    title: "Casa Santiago",
    category: "construccion",
    location: "Yucatán, México",
    year: 2024,
    coverImage: "/projects/casa-santiago-1.jpg",
    gallery: ["/projects/casa-santiago-1.jpg", "/projects/casa-santiago-2.jpg"],
    description: {
      es: "Residencia de nueva construcción con cocina de líneas cálidas y una terraza de arcos de piedra pensada para vivir puertas afuera todo el año. Proyecto de Cobalto.",
      en: "A newly built residence with a warm, natural-material kitchen and a stone-arched terrace designed for year-round outdoor living. A project by Cobalto.",
    },
    story: {
      es: "Cada espacio se pensó para maximizar la luz natural y la conexión con el exterior, desde la cocina hasta la terraza de arcos. En Cobalto acompañamos el proceso completo — cimentación, diseño arquitectónico con metodología BIM y acabados — para entregar una vivienda lista para habitarse.",
      en: "Every space was designed to maximize natural light and a connection to the outdoors, from the kitchen to the arched terrace. At Cobalto we managed the full process — foundation, BIM-based architectural design, and finishes — to deliver a move-in-ready home.",
    },
    seoTitle: {
      es: "Casa Santiago — Construcción residencial en Yucatán | Cobalto",
      en: "Casa Santiago — New Residential Construction in Yucatán | Cobalto",
    },
    serviceSlugs: ["construccion", "diseno-bim"],
    featured: true,
  },
  {
    slug: "villas-chable",
    title: "Villas Chablé",
    category: "townhouse",
    location: "Yucatán, México",
    year: 2024,
    coverImage: "/projects/villas-chable-1.jpg",
    gallery: ["/projects/villas-chable-1.jpg", "/projects/villas-chable-2.jpg"],
    description: {
      es: "Conjunto de villas de renta vacacional con alberca compartida, fachadas de color y acabados pensados para huéspedes exigentes. Proyecto de Cobalto en Yucatán.",
      en: "A vacation-rental villa complex with a shared pool, colorful façades, and finishes built for discerning guests. A project by Cobalto in Yucatán, Mexico.",
    },
    story: {
      es: "El conjunto combina varias unidades independientes con alberca y áreas comunes compartidas, pensadas para maximizar la ocupación en temporada alta. Cobalto se encargó de la construcción y sigue dando mantenimiento preventivo, cuidando tanto la imagen del desarrollo como su operación día a día.",
      en: "The complex combines several independent units with a shared pool and common areas, designed to maximize occupancy during peak season. Cobalto handled the construction and continues to provide preventive maintenance, looking after both the property's image and its day-to-day operation.",
    },
    seoTitle: {
      es: "Villas Chablé — Townhouses en renta vacacional, Yucatán | Cobalto",
      en: "Villas Chablé — Vacation-Rental Townhouses in Yucatán | Cobalto",
    },
    serviceSlugs: ["construccion", "mantenimiento"],
    featured: true,
  },
  {
    slug: "villa-boha",
    title: "Villa Bohá",
    category: "remodelacion",
    location: "Yucatán, México",
    year: 2024,
    coverImage: "/projects/villa-boha-1.jpg",
    gallery: ["/projects/villa-boha-1.jpg", "/projects/villa-boha-2.jpg"],
    description: {
      es: "Remodelación de estilo bohemio con techos de vigas expuestas, luz natural y baños integrados en un lenguaje cálido y minimalista. Restauración de Cobalto.",
      en: "A bohemian-style renovation with exposed-beam ceilings, natural light, and en-suite bathrooms in a warm, minimalist language. A renovation by Cobalto.",
    },
    story: {
      es: "La intervención respetó la estructura original de la casa, abriendo los espacios interiores hacia el jardín y sustituyendo acabados desgastados por materiales cálidos y duraderos. El resultado es una vivienda que conserva su carácter mientras responde a las necesidades de vida actuales.",
      en: "The renovation respected the home's original structure, opening the interior spaces toward the garden and replacing worn finishes with warm, durable materials. The result is a home that keeps its character while meeting present-day living needs.",
    },
    seoTitle: {
      es: "Villa Bohá — Remodelación de estilo bohemio en Yucatán | Cobalto",
      en: "Villa Bohá — Bohemian-Style Renovation in Yucatán | Cobalto",
    },
    serviceSlugs: ["remodelacion"],
    featured: true,
  },
  {
    slug: "casa-rosa",
    title: "Casa Rosa",
    category: "remodelacion",
    location: "Yucatán, México",
    year: 2023,
    coverImage: "/projects/casa-rosa-1.jpg",
    gallery: ["/projects/casa-rosa-1.jpg", "/projects/casa-rosa-2.jpg"],
    description: {
      es: "Restauración de una propiedad de época, con tina de baño independiente y una recámara de dosel que conserva todo su carácter original. Remodelación de Cobalto.",
      en: "The restoration of a period property, with a freestanding soaking tub and a canopy-bed suite that keeps all of its original character. A renovation by Cobalto.",
    },
    story: {
      es: "Como en gran parte de nuestro trabajo de restauración, el reto principal fue conservar los elementos originales de la propiedad — muros, alturas, proporciones — mientras se actualizaban instalaciones y acabados para el confort actual, sin perder el carácter que hace especiales a estas casas de época.",
      en: "As with much of our restoration work, the main challenge was preserving the property's original elements — walls, ceiling heights, proportions — while updating fixtures and finishes for present-day comfort, without losing the character that makes these period homes special.",
    },
    seoTitle: {
      es: "Casa Rosa — Restauración de una propiedad de época | Cobalto",
      en: "Casa Rosa — Restoration of a Historic Property | Cobalto",
    },
    serviceSlugs: ["remodelacion"],
    featured: true,
  },
  {
    slug: "shanti-holbox",
    title: "Shanti, Isla de Holbox",
    category: "townhouse",
    location: "Isla Holbox, Quintana Roo",
    year: 2025,
    coverImage: "/projects/shanti-holbox-1.jpg",
    gallery: ["/projects/shanti-holbox-1.jpg"],
    description: {
      es: "Nuevo desarrollo en Isla Holbox: cabañas de inspiración maya pensadas para el mercado de renta vacacional frente al Caribe. Proyecto de Cobalto en Quintana Roo.",
      en: "A new development on Isla Holbox: Maya-inspired cabins built for the vacation-rental market on the Caribbean coast. A project by Cobalto in Quintana Roo.",
    },
    story: {
      es: "Isla Holbox impone condiciones particulares de construcción, desde la logística de materiales hasta el clima costero. El desarrollo se diseñó pensando en huéspedes de renta vacacional, con cabañas de inspiración maya que buscan integrarse al paisaje de la isla en lugar de competir con él.",
      en: "Isla Holbox comes with particular construction conditions, from materials logistics to the coastal climate. The development was designed with vacation-rental guests in mind, with Maya-inspired cabins meant to blend into the island's landscape rather than compete with it.",
    },
    seoTitle: {
      es: "Shanti, Isla de Holbox — Desarrollo en Quintana Roo | Cobalto",
      en: "Shanti, Isla de Holbox — Development in Quintana Roo | Cobalto",
    },
    serviceSlugs: ["construccion"],
    featured: false,
  },
];

export const townhousesInfo = {
  price: "$5,900,000 MXN",
  priceNote: { es: "Precio en preventa", en: "Presale price" },
  units: 6,
  areaM2: 222,
  distanceToBeach: { es: "200 metros de la playa", en: "200 meters from the beach" },
  image: "/townhouses-1.png",
  features: {
    es: [
      "3 recámaras, 3 baños completos + medio baño",
      "Jardín con piscina privada",
      "Balcones con vistas al mar y laguna",
      "Rooftop con jacuzzi privado",
      "Acabados en chukum y materiales de la región",
      "Estacionamiento para dos coches",
      "Pet friendly",
    ],
    en: [
      "3 bedrooms, 3 full baths + half bath",
      "Garden with private pool",
      "Balconies with sea and lagoon views",
      "Rooftop with private jacuzzi",
      "Chukum finishes and regional materials",
      "Parking for two cars",
      "Pet friendly",
    ],
  },
};

export const showcaseVideo = {
  youtubeId: "2ym5O9ZvXho",
  title: {
    es: "Casa Residencial — proyecto de lujo en privada",
    en: "Residential House — private luxury project",
  },
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
