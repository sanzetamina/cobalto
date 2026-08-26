import type { Locale } from "./types";
import { siteSettings } from "./site-data";

const prefilledMessage: Record<Locale, string> = {
  es: "Hola, vi su sitio y me interesa saber más sobre sus proyectos.",
  en: "Hi, I saw your site and I'd like to know more about your projects.",
};

export function whatsappLink(locale: Locale, message?: string) {
  const text = encodeURIComponent(message ?? prefilledMessage[locale]);
  return `https://wa.me/${siteSettings.whatsapp}?text=${text}`;
}

export function projectInterestMessage(locale: Locale, projectTitle: string) {
  return locale === "es"
    ? `Hola, vi el proyecto "${projectTitle}" en su sitio web y me interesa saber más.`
    : `Hi, I saw the "${projectTitle}" project on your website and I'd like to know more.`;
}
