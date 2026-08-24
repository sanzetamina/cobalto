import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function Header({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const base = locale === "es" ? "" : "/en";
  const otherLocaleHref = locale === "es" ? "/en" : "/";

  const links = [
    { href: `${base}/#servicios`, label: copy.nav.services },
    { href: `${base}/#proyectos`, label: copy.nav.projects },
    { href: `${base}/#nosotros`, label: copy.nav.about },
    { href: `${base}/#townhouses`, label: copy.nav.townhouses },
    { href: `${base}/#contacto`, label: copy.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cobalto-ink/95 backdrop-blur supports-backdrop-blur:bg-cobalto-ink/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href={base || "/"} className="flex items-center gap-2 shrink-0">
          <Image
            src="/cobalto-logo.png"
            alt="Cobalto"
            width={140}
            height={39}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-cobalto-amber">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={otherLocaleHref}
            className="text-sm font-medium text-white/70 transition-colors hover:text-cobalto-amber"
          >
            {copy.languageSwitch}
          </Link>
          <a
            href={whatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-cobalto-amber px-4 py-2 text-sm font-semibold text-cobalto-ink transition-colors hover:bg-cobalto-amber-dark sm:inline-block"
          >
            {copy.hero.cta}
          </a>

          <details className="group relative md:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 text-white/80 [&::-webkit-details-marker]:hidden">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-4.5 w-4.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav className="absolute right-0 top-12 flex w-52 flex-col gap-1 rounded-2xl border border-white/10 bg-cobalto-ink p-3 text-sm font-medium text-white/80 shadow-xl">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-cobalto-amber"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
