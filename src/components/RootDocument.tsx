import Script from "next/script";
import type { ReactNode } from "react";
import { fraunces, inter } from "@/lib/fonts";
import { localBusinessJsonLd } from "@/lib/seo";
import type { Locale } from "@/lib/types";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export function RootDocument({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html
      lang={lang}
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cobalto-cream text-cobalto-ink">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd(lang)) }}
        />
      </body>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}
