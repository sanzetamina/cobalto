import type { ServiceIcon as ServiceIconType } from "@/lib/types";

const paths: Record<ServiceIconType, React.ReactNode> = {
  construction: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  renovation: (
    <>
      <path d="m14 6 4 4" />
      <path d="M4.5 19.5 3 21l1.5-4.5L15 6l4 4-10.5 10.5Z" />
      <path d="m17 3 4 4" />
    </>
  ),
  design: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </>
  ),
  maintenance: (
    <>
      <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4l-6 6a2 2 0 0 0 2.8 2.8l6-6a4 4 0 0 1 5.4-5.4l-3 3-2-2 3-3Z" />
    </>
  ),
};

export function ServiceIcon({ icon, className }: { icon: ServiceIconType; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[icon]}
    </svg>
  );
}
