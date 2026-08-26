import type { Locale } from "./types";

export const dictionary = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      about: "Nosotros",
      townhouses: "Townhouses",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Arquitectura y construcción · Mérida, Yucatán",
      cta: "Hablar por WhatsApp",
      ctaSecondary: "Ver proyectos",
    },
    services: {
      title: "Servicios",
      subtitle: "De la primera línea del plano a la entrega de llaves.",
    },
    projects: {
      title: "Proyectos destacados",
      subtitle: "Una muestra de nuestro trabajo.",
      viewProject: "Ver proyecto",
      back: "Volver a proyectos",
      location: "Ubicación",
      year: "Año",
      category: "Categoría",
      aboutProject: "Sobre este proyecto",
      servicesUsed: "Servicios utilizados",
      gallery: "Galería",
    },
    projectCategories: {
      construccion: "Construcción",
      remodelacion: "Remodelación",
      townhouse: "Townhouse",
    },
    about: {
      title: "Nosotros",
      valuesTitle: "Lo que nos mueve",
      values: [
        "Calidad en cada detalle, de la estructura al acabado.",
        "Compromiso con el bienestar de las personas y del entorno.",
        "Tecnología BIM y renderizado fotorrealista en cada proyecto.",
      ],
    },
    townhouses: {
      title: "Townhouses en Chicxulub Puerto",
      subtitle:
        "A pocos metros de la playa. 3 recámaras, piscina, rooftop y jacuzzi — ideales como segunda residencia o inversión para rentas vacacionales.",
      cta: "Preguntar disponibilidad",
      comingSoon: "Fotos del desarrollo — disponibles próximamente",
    },
    contact: {
      title: "Hablemos de tu proyecto",
      subtitle: "Cuéntanos qué tienes en mente y te respondemos por WhatsApp.",
      whatsapp: "Escribir por WhatsApp",
      phone: "Teléfono",
      email: "Correo",
      address: "Dirección",
      mapLink: "Ver en Google Maps",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      demoNotice:
        "Sitio de demostración creado para presentar una propuesta de rediseño — no es el sitio oficial de Cobalto.",
    },
    languageSwitch: "English",
  },
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      about: "About",
      townhouses: "Townhouses",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Architecture & Construction · Mérida, Yucatán",
      cta: "Chat on WhatsApp",
      ctaSecondary: "See projects",
    },
    services: {
      title: "Services",
      subtitle: "From the first line on the plan to the keys in your hand.",
    },
    projects: {
      title: "Featured projects",
      subtitle: "A sample of our work.",
      viewProject: "View project",
      back: "Back to projects",
      location: "Location",
      year: "Year",
      category: "Category",
      aboutProject: "About this project",
      servicesUsed: "Services used",
      gallery: "Gallery",
    },
    projectCategories: {
      construccion: "Construction",
      remodelacion: "Renovation",
      townhouse: "Townhouse",
    },
    about: {
      title: "About us",
      valuesTitle: "What drives us",
      values: [
        "Quality in every detail, from structure to finish.",
        "A commitment to people's wellbeing and the environment.",
        "BIM technology and photorealistic rendering on every project.",
      ],
    },
    townhouses: {
      title: "Townhouses in Chicxulub Puerto",
      subtitle:
        "Steps from the beach. 3 bedrooms, pool, rooftop and jacuzzi — ideal as a second home or vacation-rental investment.",
      cta: "Ask about availability",
      comingSoon: "Development photos — coming soon",
    },
    contact: {
      title: "Let's talk about your project",
      subtitle: "Tell us what you have in mind and we'll reply on WhatsApp.",
      whatsapp: "Message on WhatsApp",
      phone: "Phone",
      email: "Email",
      address: "Address",
      mapLink: "View on Google Maps",
    },
    footer: {
      rights: "All rights reserved.",
      demoNotice:
        "Demo site created to present a redesign proposal — not Cobalto's official website.",
    },
    languageSwitch: "Español",
  },
} satisfies Record<Locale, unknown>;

export function t(locale: Locale) {
  return dictionary[locale];
}
