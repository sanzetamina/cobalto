import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";
import { siteSettings } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function About({ locale }: { locale: Locale }) {
  const copy = t(locale);

  return (
    <section id="nosotros" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
            {copy.about.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cobalto-stone">
            {siteSettings.aboutText[locale]}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cobalto-amber">
            {copy.about.valuesTitle}
          </h3>
          <ul className="mt-6 space-y-5">
            {copy.about.values.map((value, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cobalto-amber/10 text-sm font-semibold text-cobalto-amber">
                  {i + 1}
                </span>
                <span className="text-cobalto-ink-soft leading-relaxed">{value}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
