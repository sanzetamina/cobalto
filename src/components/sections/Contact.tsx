import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";
import { siteSettings } from "@/lib/site-data";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Reveal } from "@/components/Reveal";

export function Contact({ locale }: { locale: Locale }) {
  const copy = t(locale);

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="rounded-3xl bg-cobalto-ink px-8 py-16 text-white sm:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
            {copy.contact.title}
          </h2>
          <p className="mt-4 text-white/70">{copy.contact.subtitle}</p>

          <WhatsAppLink
            locale={locale}
            source="contact-section"
            className="mt-8 inline-block rounded-full bg-cobalto-amber px-8 py-4 text-sm font-semibold text-cobalto-ink transition-colors hover:bg-cobalto-amber-dark"
          >
            {copy.contact.whatsapp}
          </WhatsAppLink>

          <dl className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-6 text-left sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/40">
                {copy.contact.phone}
              </dt>
              <dd className="mt-1 text-white/90">{siteSettings.phone}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/40">
                {copy.contact.email}
              </dt>
              <dd className="mt-1 text-white/90">{siteSettings.email}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/40">
                {copy.contact.address}
              </dt>
              <dd className="mt-1 text-white/90">
                {siteSettings.address}
                {" · "}
                <a
                  href={siteSettings.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cobalto-amber hover:underline"
                >
                  {copy.contact.mapLink}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
