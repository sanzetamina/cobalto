"use client";

import Image from "next/image";
import { useState } from "react";

export function LiteYouTube({
  youtubeId,
  title,
  className = "",
}: {
  youtubeId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative aspect-video overflow-hidden rounded-2xl bg-black ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={title}
      className={`group relative block aspect-video w-full overflow-hidden rounded-2xl bg-black ${className}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-95"
        sizes="(min-width: 1024px) 60vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cobalto-amber text-cobalto-ink shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7 sm:h-8 sm:w-8">
            <path d="M8 5v14l11-7Z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-medium text-white/90 sm:text-base">
        {title}
      </span>
    </button>
  );
}
