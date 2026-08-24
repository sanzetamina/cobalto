import type { Locale } from "@/lib/types";
import { showcaseVideo } from "@/lib/site-data";
import { LiteYouTube } from "@/components/LiteYouTube";
import { Reveal } from "@/components/Reveal";

const copy = {
  es: {
    eyebrow: "Video",
    title: "Un recorrido por nuestro trabajo",
    subtitle: "Grabado en uno de nuestros proyectos residenciales en Yucatán.",
  },
  en: {
    eyebrow: "Video",
    title: "A walk through our work",
    subtitle: "Filmed at one of our residential projects in Yucatán.",
  },
};

export function VideoShowcase({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-cobalto-amber">
            {t.eyebrow}
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-cobalto-stone">{t.subtitle}</p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <LiteYouTube youtubeId={showcaseVideo.youtubeId} title={showcaseVideo.title[locale]} />
        </Reveal>
      </div>
    </section>
  );
}
