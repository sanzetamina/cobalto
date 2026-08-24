export type Locale = "es" | "en";

export type LocaleString = Record<Locale, string>;

export type ServiceIcon = "construction" | "renovation" | "design" | "maintenance";

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: LocaleString;
  description: LocaleString;
}

export type ProjectCategory = "construccion" | "remodelacion" | "townhouse";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  coverImage: string | null;
  gallery: string[];
  description: LocaleString;
  serviceSlugs: string[];
  featured: boolean;
}

export interface SiteSettings {
  companyName: string;
  tagline: LocaleString;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapsUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  aboutText: LocaleString;
}
