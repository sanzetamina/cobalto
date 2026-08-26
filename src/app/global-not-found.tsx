import Link from "next/link";
import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — Cobalto",
  description: "Página no encontrada / Page not found",
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center gap-4 bg-cobalto-cream px-6 text-center text-cobalto-ink">
        <p className="text-sm font-semibold uppercase tracking-wider text-cobalto-amber">404</p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
          Página no encontrada / Page not found
        </h1>
        <div className="mt-2 flex gap-6 text-sm font-medium">
          <Link href="/" className="text-cobalto-amber-dark hover:underline">
            Ir al inicio
          </Link>
          <Link href="/en" className="text-cobalto-amber-dark hover:underline">
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
