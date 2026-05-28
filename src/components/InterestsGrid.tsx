"use client";

import {
  Music2,
  Gauge,
  Clapperboard,
  Trophy,
  Music,
  Camera,
  MapPin,
  BookOpen,
  Users,
  Swords,
} from "lucide-react";

type InterestItem = {
  icon: React.ElementType;
  label: string;
  tag: string;
  accent?: string;
};

const interests: InterestItem[] = [
  { icon: Music2,       label: "Dance",        tag: "Kuchipudi · Guinness World Record",         accent: "#c4a882" },
  { icon: Trophy,       label: "Athletics",    tag: "Fencing · Modern Pentathlon · 3× AP Gold",  accent: "#8a9e6a" },
  { icon: Gauge,        label: "Formula 1",    tag: "Data nerd, race weekend addict",             accent: "#c47a5a" },
  { icon: Music,        label: "Music",        tag: "Carnatic vocals · guitar",                  accent: "#9a7ab8" },
  { icon: Clapperboard, label: "Cinema & TV",  tag: "Movies, anime, strong opinions",            accent: "#7a9ab8" },
  { icon: Camera,       label: "Photography",  tag: "Events, travel, candid",                    accent: "#b8987a" },
  { icon: MapPin,       label: "Travel",       tag: "Café hopping to out-of-town adventures",    accent: "#7ab898" },
  { icon: BookOpen,     label: "Reading",      tag: "Wide taste, dog-ears everything",           accent: "#b87a8a" },
  { icon: Users,        label: "Community",    tag: "Fundraising & outreach causes",             accent: "#8a7ab8" },
  { icon: Swords,       label: "Board Games",  tag: "Strangers welcome, strategy preferred",     accent: "#b8a07a" },
];

const GRAD_ID = "kbt-grad";

function GradientDef() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id={GRAD_ID} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4a882" />
          <stop offset="100%" stopColor="#7d6550" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function InterestsGrid() {
  return (
    <>
      <GradientDef />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {interests.map((item, i) => {
          const Icon = item.icon;
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              className={[
                "group flex items-start gap-3 py-3.5 px-3",
                "border-b border-[#e8dcc8]",
                "hover:bg-[var(--beige-50)] transition-colors duration-150 cursor-default",
                isLeft ? "sm:pr-6 sm:border-r" : "sm:pl-6",
                i >= interests.length - 2 ? "last:border-b-0" : "",
              ].join(" ")}
            >
              <div className="mt-0.5 shrink-0 w-7 h-7 rounded-md bg-[var(--beige-100)] border border-[var(--beige-200)] flex items-center justify-center">
                <Icon
                  size={14}
                  style={{ stroke: item.accent || "#c4a882", fill: "none" }}
                  strokeWidth={1.5}
                />
              </div>
              <div className="min-w-0">
                <p className="font-body text-sm font-medium text-[var(--text-primary)] leading-snug">
                  {item.label}
                </p>
                <p className="font-body text-[11px] text-[var(--text-secondary)] leading-snug mt-0.5">
                  {item.tag}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
