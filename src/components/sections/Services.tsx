import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";
import { services } from "@/lib/site-data";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Reveal } from "@/components/Reveal";

export function Services({ locale }: { locale: Locale }) {
  const copy = t(locale);

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
          {copy.services.title}
        </h2>
        <p className="mt-3 text-cobalto-stone">{copy.services.subtitle}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 80}>
            <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cobalto-amber/10 text-cobalto-amber">
                <ServiceIcon icon={service.icon} className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-medium">
                {service.title[locale]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cobalto-stone">
                {service.description[locale]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
