import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Cobalto — Arquitectura y Construcción | Mérida, Yucatán",
  description:
    "Cobalto, Arquitectura y Construcción — proyectos de construcción, remodelación, diseño arquitectónico y mantenimiento en Mérida, Yucatán.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cobalto-cream text-cobalto-ink">
        {children}
      </body>
    </html>
  );
}
