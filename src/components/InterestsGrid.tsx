"use client";

import {
  Music2,
  Gauge,
  Clapperboard,
  Trophy,
  Music,
  Camera,
  MapPin,
  Swords,
} from "lucide-react";

type InterestItem = {
  icon: React.ElementType;
  label: string;
  accent: string;
};

const interests: InterestItem[] = [
  { icon: Music2,       label: "Kuchipudi",               accent: "#c4a882" },
  { icon: Trophy,       label: "Fencing & softball",      accent: "#8a9e6a" },
  { icon: Gauge,        label: "Formula 1",               accent: "#c47a5a" },
  { icon: Music,        label: "Carnatic vocals & guitar", accent: "#9a7ab8" },
  { icon: Clapperboard, label: "Cinema",                  accent: "#7a9ab8" },
  { icon: Camera,       label: "Photography",             accent: "#b8987a" },
  { icon: MapPin,       label: "Travel",                  accent: "#7ab898" },
  { icon: Swords,       label: "Board games",             accent: "#b8a07a" },
];

export default function InterestsGrid() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {interests.map((item) => {
        const Icon = item.icon;
        return (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 border border-[#ddd0bc] bg-[var(--beige-50)] px-3.5 py-2 font-body text-[13px] font-light text-[#5e4c3e] whitespace-nowrap hover:border-[#b59f84] transition-colors duration-200 cursor-default"
          >
            <Icon
              size={13}
              strokeWidth={1.5}
              style={{ stroke: item.accent, fill: "none" }}
              className="shrink-0"
            />
            {item.label}
          </span>
        );
      })}
    </div>
  );
}
