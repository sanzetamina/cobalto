import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-data";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { es: siteUrl, en: `${siteUrl}/en` } },
    },
    {
      url: `${siteUrl}/en`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { es: siteUrl, en: `${siteUrl}/en` } },
    },
  ];

  for (const project of projects) {
    const es = `${siteUrl}/proyectos/${project.slug}`;
    const en = `${siteUrl}/en/projects/${project.slug}`;
    entries.push(
      { url: es, changeFrequency: "yearly", priority: 0.7, alternates: { languages: { es, en } } },
      { url: en, changeFrequency: "yearly", priority: 0.7, alternates: { languages: { es, en } } },
    );
  }

  return entries;
}
