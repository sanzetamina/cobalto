import Image from "next/image";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";
import { siteSettings } from "@/lib/site-data";

export function Footer({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-cobalto-ink text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src="/cobalto-logo.png"
              alt="Cobalto"
              width={140}
              height={39}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteSettings.tagline[locale]}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a href={`mailto:${siteSettings.email}`} className="hover:text-cobalto-amber">
              {siteSettings.email}
            </a>
            <a href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`} className="hover:text-cobalto-amber">
              {siteSettings.phone}
            </a>
            <a
              href={siteSettings.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cobalto-amber"
            >
              {siteSettings.address}
            </a>
            <div className="mt-2 flex gap-4">
              <a
                href={siteSettings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cobalto-amber"
              >
                Instagram
              </a>
              <a
                href={siteSettings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cobalto-amber"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>
            © {year} {siteSettings.companyName}. {copy.footer.rights}
          </p>
          <p>{copy.footer.demoNotice}</p>
        </div>
      </div>
    </footer>
  );
}
