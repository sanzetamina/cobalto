declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLead(params: { method: "whatsapp"; source: string; locale: string }) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "generate_lead", {
    method: params.method,
    source: params.source,
    locale: params.locale,
  });
}
