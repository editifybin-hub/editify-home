// Ícones de redes sociais em SVG inline.
// lucide-react removeu os ícones de marca (Instagram, YouTube, etc) nas
// versões recentes, então mantemos os nossos aqui.

type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 7.2a3 3 0 0 0-2.1-2.13C19.5 4.55 12 4.55 12 4.55s-7.5 0-9.4.52A3 3 0 0 0 .5 7.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.13c1.9.52 9.4.52 9.4.52s7.5 0 9.4-.52a3 3 0 0 0 2.1-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-4.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.4a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12V9.6a5.8 5.8 0 0 0-.78-.05A5.8 5.8 0 1 0 15.34 15.4V9.01a7.4 7.4 0 0 0 4.32 1.38V7.2a4.28 4.28 0 0 1-3.06-1.38z" />
    </svg>
  );
}

import { ArrowUpRight } from "lucide-react";

export function socialIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("insta")) return InstagramIcon;
  if (l.includes("you")) return YoutubeIcon;
  if (l.includes("tik")) return TikTokIcon;
  return ArrowUpRight;
}
