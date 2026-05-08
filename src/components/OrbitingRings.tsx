// ARCHIVED — replaced by SkillsGraph.tsx in Resume section.
// Keep this file for reference; it is no longer imported anywhere.
//
// "use client";
//
// Rendered client-side only (imported via next/dynamic ssr:false in Resume.tsx).
//
// Carrier-arm approach:
//   • The dashed ring border is a static, non-rotating div.
//   • Each skill gets a zero-height "arm" div anchored at the ring centre
//     (top: 50%, left: 50%, transformOrigin: "0 0") that rotates around
//     that point.  Negative animationDelay sets the initial phase angle.
//   • A span at the far end of each arm counter-rotates with the same
//     duration + delay so the label always reads upright.

type RingDef = {
  radius: number;
  skills: string[];
  duration: number;
  clockwise: boolean;
  borderColor: string;
  textClass: string;
};

const rings: RingDef[] = [
  {
    radius: 100,
    skills: ["C#", "Python", "TypeScript", "ASP.NET Core", ".NET 8"],
    duration: 60,
    clockwise: true,
    borderColor: "#c4a882",
    textClass: "font-body text-sm font-medium text-[#2a2118]",
  },
  {
    radius: 180,
    skills: ["PyTorch", "React.js", "scikit-learn", "FastAPI", "Node.js", "XLM-RoBERTa", "Transformers"],
    duration: 90,
    clockwise: false,
    borderColor: "#b59f84",
    textClass: "font-body text-xs text-[#6b5744]",
  },
  {
    radius: 260,
    skills: ["NumPy", "Azure", "SQL Server", "MongoDB", "AWS", "Git", "CI/CD", "NLP", "Computer Vision", "Microsoft Graph API"],
    duration: 120,
    clockwise: true,
    borderColor: "#ddd0bc",
    textClass: "font-body text-[10px] text-[#9e8468]",
  },
];

export default function OrbitingRings() {
  return (
    <div className="relative w-full h-[320px] md:h-[580px] overflow-hidden">
      {/* scale wrapper — shrinks the whole rig on small screens */}
      <div className="absolute inset-0 scale-[0.55] md:scale-100 origin-center">
        {rings.map((ring) => {
          const size = ring.radius * 2;
          const orbAnim    = ring.clockwise ? "orbit-cw"  : "orbit-ccw";
          const counterAnim = ring.clockwise ? "orbit-ccw" : "orbit-cw";

          return (
            <div key={ring.radius} className="absolute inset-0">

              {/* ── Static dashed border ring ───────────────────── */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width:  size,
                  height: size,
                  top:  "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: `1px dashed ${ring.borderColor}`,
                }}
              />

              {/* ── One carrier arm per skill ────────────────────── */}
              {ring.skills.map((skill, i) => {
                const angleDeg = (i / ring.skills.length) * 360;
                // negative delay = start mid-animation at the desired phase
                const delay = `${-(angleDeg / 360) * ring.duration}s`;

                return (
                  <div
                    key={skill}
                    className="absolute"
                    style={{
                      top:  "50%",
                      left: "50%",
                      width:  ring.radius,
                      height: 0,
                      transformOrigin: "0 0",
                      animation: `${orbAnim} ${ring.duration}s linear infinite`,
                      animationDelay: delay,
                    }}
                  >
                    {/* Label — counter-rotates so it always reads upright */}
                    <span
                      className={`absolute whitespace-nowrap select-none ${ring.textClass}`}
                      style={{
                        left:      ring.radius,
                        top:       0,
                        transform: "translate(-50%, -50%)",
                        animation: `${counterAnim} ${ring.duration}s linear infinite`,
                        animationDelay: delay,
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Centre monogram */}
        <div
          className="absolute rounded-full bg-[#ede4d4] flex items-center justify-center"
          style={{
            width:  48,
            height: 48,
            top:  "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="font-display text-xs font-light text-[#9e8468] tracking-widest">
            KBT
          </span>
        </div>
      </div>
    </div>
  );
}
