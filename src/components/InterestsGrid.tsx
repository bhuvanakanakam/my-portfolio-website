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
} from "lucide-react";

type InterestItem = {
  icon: React.ElementType;
  label: string;
  tag: string;
  wide?: boolean;
  sports?: string[];
};

// Grid layout (4-col):
// Row 1: Dance(2) + F1(1) + Cinema & TV(1)       = 4
// Row 2: Athletics(2) + Music(1) + Photography(1) = 4
// Row 3: Travel(2) + Reading(2)                   = 4
const interests: InterestItem[] = [
  {
    icon: Music2,
    label: "Dance",
    tag: "Kuchipudi · Guinness World Record",
    wide: true,
    sports: ["Kuchipudi", "Hip Hop", "Bollywood", "Pop", "Contemporary"],
  },
  {
    icon: Gauge,
    label: "Formula 1",
    tag: "Sector times, tire deg, lap telemetry",
  },
  {
    icon: Clapperboard,
    label: "Cinema & TV",
    tag: "Movies, rereleases, anime, strong opinions",
  },
  {
    icon: Trophy,
    label: "Athletics",
    tag: "National · AP State · Modern Pentathlon",
    wide: true,
    sports: ["Fencing", "Swimming", "Running", "Horse Riding", "Rifle Shooting", "Basketball", "Badminton"],
  },
  {
    icon: Music,
    label: "Music",
    tag: "Carnatic vocals · guitar",
  },
  {
    icon: Camera,
    label: "Photography",
    tag: "Events, travel, candid",
  },
  {
    icon: MapPin,
    label: "Travel",
    tag: "Always planning the next one",
    wide: true,
  },
  {
    icon: BookOpen,
    label: "Reading",
    tag: "Wide taste, dog-ears everything",
    wide: true,
  },
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

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {interests.map((item, i) => {
          const Icon = item.icon;
          const isAthletics = !!item.sports;

          return (
            <div
              key={i}
              className={`group relative rounded-xl border border-[var(--beige-200)] bg-[var(--beige-50)] p-4 cursor-default overflow-hidden transition-colors duration-200 hover:bg-[var(--beige-100)] hover:border-[var(--beige-300)]${item.wide ? " col-span-2" : ""}`}
            >
              {/* Icon */}
              <div className="mb-3">
                <Icon
                  size={22}
                  style={{ stroke: `url(#${GRAD_ID})`, fill: "none" }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Label */}
              <p className="font-body text-sm font-medium text-[var(--text-primary)] leading-snug">
                {item.label}
              </p>

              {isAthletics ? (
                /* Athletics — sport chips appear in place of tag on hover */
                <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-12 transition-all duration-300 mt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {item.sports!.map((sport) => (
                      <span
                        key={sport}
                        className="font-body text-[10px] px-2 py-0.5 rounded-full border border-[var(--beige-400)] text-[var(--text-secondary)] bg-[var(--beige-200)] whitespace-nowrap"
                      >
                        {sport}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                /* Standard — tag fades in */
                <p className="font-body text-[11px] text-[var(--text-secondary)] leading-snug mt-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                  {item.tag}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
