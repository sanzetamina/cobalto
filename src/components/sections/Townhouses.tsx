import Image from "next/image";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";
import { townhousesInfo } from "@/lib/site-data";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Reveal } from "@/components/Reveal";

export function Townhouses({ locale }: { locale: Locale }) {
  const copy = t(locale);

  return (
    <section id="townhouses" className="relative overflow-hidden bg-cobalto-ink text-white">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-cobalto-amber">
            Chicxulub Puerto
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
            {copy.townhouses.title}
          </h2>
          <p className="mt-5 leading-relaxed text-white/70">{copy.townhouses.subtitle}</p>

          <div className="mt-6 inline-flex items-baseline gap-2 rounded-xl border border-cobalto-amber/30 bg-cobalto-amber/10 px-4 py-2">
            <span className="font-[family-name:var(--font-display)] text-2xl font-medium text-cobalto-amber">
              {townhousesInfo.price}
            </span>
            <span className="text-xs text-white/60">{townhousesInfo.priceNote[locale]}</span>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {townhousesInfo.features[locale].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalto-amber" />
                {feature}
              </li>
            ))}
          </ul>

          <WhatsAppLink
            locale={locale}
            source="townhouses"
            message={
              locale === "es"
                ? "Hola, vi las townhouses en Chicxulub Puerto en su sitio web y me interesan."
                : "Hi, I saw the Chicxulub Puerto townhouses on your website and I'm interested."
            }
            className="mt-10 inline-block rounded-full bg-cobalto-amber px-7 py-3.5 text-sm font-semibold text-cobalto-ink transition-colors hover:bg-cobalto-amber-dark"
          >
            {copy.townhouses.cta}
          </WhatsAppLink>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src={townhousesInfo.image}
              alt="Townhouses Chicxulub Puerto"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
