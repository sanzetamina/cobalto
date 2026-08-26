import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import type { Locale, Project } from "@/lib/types";
import { t } from "@/lib/i18n";
import { getServiceBySlug } from "@/lib/site-data";
import { projectInterestMessage } from "@/lib/whatsapp";

export function ProjectDetailPage({ locale, project }: { locale: Locale; project: Project }) {
  const copy = t(locale);
  const homeBase = locale === "es" ? "" : "/en";
  const gallery = project.gallery.length > 0 ? project.gallery : project.coverImage ? [project.coverImage] : [];

  return (
    <>
      <Header locale={locale} />
      <main>
        <section className="relative overflow-hidden bg-cobalto-ink text-white">
          {project.coverImage && (
            <div className="absolute inset-0">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                className="object-cover opacity-35"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cobalto-ink via-cobalto-ink/70 to-cobalto-ink/50" />
            </div>
          )}

          <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <Link
              href={`${homeBase}/#proyectos`}
              className="text-sm font-medium text-white/60 transition-colors hover:text-cobalto-amber"
            >
              ← {copy.projects.back}
            </Link>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-cobalto-amber">
              {copy.projectCategories[project.category]}
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium sm:text-5xl">
              {project.title}
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-medium">
                {copy.projects.aboutProject}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-cobalto-ink-soft">
                {project.description[locale]}
              </p>
              <p className="mt-4 leading-relaxed text-cobalto-stone">{project.story[locale]}</p>

              {project.serviceSlugs.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-cobalto-stone">
                    {copy.projects.servicesUsed}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.serviceSlugs.map((slug) => {
                      const service = getServiceBySlug(slug);
                      if (!service) return null;
                      return (
                        <span
                          key={slug}
                          className="rounded-full bg-cobalto-amber/10 px-4 py-1.5 text-sm font-medium text-cobalto-amber-dark"
                        >
                          {service.title[locale]}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 h-fit">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-cobalto-stone">
                {copy.projects.details}
              </h3>
              <dl className="mt-4 space-y-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-cobalto-stone">
                    {copy.projects.location}
                  </dt>
                  <dd className="mt-1 font-medium">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-cobalto-stone">
                    {copy.projects.year}
                  </dt>
                  <dd className="mt-1 font-medium">{project.year}</dd>
                </div>
              </dl>
              <WhatsAppLink
                locale={locale}
                source={`project-page:${project.slug}`}
                message={projectInterestMessage(locale, project.title)}
                className="mt-5 block rounded-full bg-cobalto-amber px-5 py-2.5 text-center text-sm font-semibold text-cobalto-ink transition-colors hover:bg-cobalto-amber-dark"
              >
                {copy.contact.whatsapp}
              </WhatsAppLink>
            </div>
          </div>

          {gallery.length > 1 && (
            <div className="mt-16">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-medium">
                {copy.projects.gallery}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {gallery.map((src, i) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={src}
                      alt={`${project.title} — ${locale === "es" ? "foto" : "photo"} ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-3xl bg-cobalto-ink px-8 py-12 text-center text-white sm:px-16">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium sm:text-3xl">
              {copy.projects.ctaTitle}
            </h2>
            <p className="mt-3 text-white/70">{copy.projects.ctaSubtitle}</p>
            <WhatsAppLink
              locale={locale}
              source={`project-page-cta:${project.slug}`}
              message={projectInterestMessage(locale, project.title)}
              className="mt-6 inline-block rounded-full bg-cobalto-amber px-7 py-3 text-sm font-semibold text-cobalto-ink transition-colors hover:bg-cobalto-amber-dark"
            >
              {copy.contact.whatsapp}
            </WhatsAppLink>
          </div>

          <Link
            href={`${homeBase}/#proyectos`}
            className="mt-8 inline-block text-sm font-medium text-cobalto-amber-dark hover:underline"
          >
            ← {copy.projects.back}
          </Link>
        </section>
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton locale={locale} project={{ slug: project.slug, title: project.title }} />
    </>
  );
}
