"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { Locale } from "@/lib/types";
import { whatsappLink } from "@/lib/whatsapp";
import { trackLead } from "@/lib/analytics";

type Props = {
  locale: Locale;
  message?: string;
  source: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">;

export function WhatsAppLink({ locale, message, source, children, ...rest }: Props) {
  return (
    <a
      href={whatsappLink(locale, message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead({ method: "whatsapp", source, locale })}
      {...rest}
    >
      {children}
    </a>
  );
}
