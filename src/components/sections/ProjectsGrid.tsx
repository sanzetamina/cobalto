import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";
import { projects } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function ProjectsGrid({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const projectsBase = locale === "es" ? "/proyectos" : "/en/projects";

  return (
    <section id="proyectos" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
            {copy.projects.title}
          </h2>
          <p className="mt-3 text-cobalto-stone">{copy.projects.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 100}>
              <Link
                href={`${projectsBase}/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-black/5 bg-cobalto-cream shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cobalto-ink">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cobalto-ink to-cobalto-ink-soft px-6 text-center text-sm text-white/50">
                      {copy.townhouses.comingSoon}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-cobalto-amber">
                    {copy.projectCategories[project.category]}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-medium">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-cobalto-stone">{project.location}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
