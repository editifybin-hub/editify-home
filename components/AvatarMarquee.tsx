import { AVATARS } from "@/lib/site";

/**
 * Faixa horizontal de avatares reais de editores, em loop infinito.
 */
export default function AvatarMarquee({
  reverse = false,
  className = "",
  size = 56,
  count = 26,
}: {
  reverse?: boolean;
  className?: string;
  size?: number;
  count?: number;
}) {
  const base = AVATARS.slice(0, count);
  const row = [...base, ...base];

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex gap-3 w-max"
        style={{
          animation: "editify-marquee 60s linear infinite",
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        {row.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            width={size}
            height={size}
            style={{ width: size, height: size }}
            className="rounded-full object-cover border border-line bg-soft shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
