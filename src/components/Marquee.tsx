"use client";

interface MarqueeProps {
  items: string[];
  dark?: boolean;
  reverse?: boolean;
  fast?: boolean;
  separator?: string;
}

export default function Marquee({
  items,
  dark = false,
  reverse = false,
  fast = false,
  separator = "  ✦  ",
}: MarqueeProps) {
  const text = items.join(separator) + separator;
  const repeated = text.repeat(4);

  const animClass = fast
    ? "animate-marquee-fast"
    : reverse
      ? "animate-marquee-reverse"
      : "animate-marquee";

  return (
    <div
      className={`overflow-hidden border-y select-none ${
        dark
          ? "bg-[#2a2118] border-[#3d3028]/60 text-[#c4a882]"
          : "bg-[#f5f0e8] border-[#ddd0bc] text-[#9e8468]"
      }`}
    >
      <div className={`flex whitespace-nowrap py-3.5 ${animClass}`}>
        <span className="font-body text-[10px] tracking-[0.32em] uppercase flex-shrink-0">
          {repeated}
        </span>
        <span
          className="font-body text-[10px] tracking-[0.32em] uppercase flex-shrink-0"
          aria-hidden
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
