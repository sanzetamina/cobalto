import Image from "next/image";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";
import { siteSettings } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const base = locale === "es" ? "" : "/en";

  return (
    <section className="relative overflow-hidden bg-cobalto-ink text-white">
      <div className="absolute inset-0">
        <Image
          src="/projects/villas-chable-1.jpg"
          alt=""
          fill
          priority
          className="animate-kenburns object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cobalto-ink via-cobalto-ink/80 to-cobalto-ink/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 py-28 sm:py-36">
        <span className="animate-fade-up mb-6 inline-flex items-center rounded-full border border-cobalto-amber/40 bg-cobalto-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cobalto-amber">
          {copy.hero.eyebrow}
        </span>

        <h1
          className="animate-fade-up max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[1.1] font-medium sm:text-5xl md:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          {siteSettings.tagline[locale]}
        </h1>

        <div
          className="animate-fade-up mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href={whatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cobalto-amber px-7 py-3.5 text-sm font-semibold text-cobalto-ink transition-colors hover:bg-cobalto-amber-dark"
          >
            {copy.hero.cta}
          </a>
          <a
            href={`${base}/#proyectos`}
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            {copy.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
