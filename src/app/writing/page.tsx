import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Writing — Bhuvana Teja Kanakam",
  description: "On engineering, learning, and things I keep thinking about.",
};

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-32">

        {/* ── Page header ─────────────────────────────────────────── */}
        <div className="flex items-start justify-between mb-2">
          <p className="font-body text-[10px] tracking-[0.28em] uppercase text-[#9e8468]">
            All Writing
          </p>
          <Link
            href="/"
            className="font-body text-xs tracking-[0.28em] uppercase text-[#9e8468] hover:text-[#7d6550] transition-colors duration-200"
          >
            ← Home
          </Link>
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-light text-[#2a2118] leading-none mt-4">
          Writing.
        </h1>
        <p className="font-body text-sm font-light text-[#9e8468] mt-3 mb-12">
          On engineering, learning, and things I keep thinking about.
        </p>

        {/* ── Post count ──────────────────────────────────────────── */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#9e8468] mt-4 mb-8">
          {posts.length} {posts.length === 1 ? "essay" : "essays"}
        </p>

        {/* ── Posts list ──────────────────────────────────────────── */}
        <div className="pb-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group flex items-baseline justify-between gap-6 py-8 border-b border-[#ede4d4] hover:bg-[#f5f0e8] transition-colors duration-150 -mx-4 px-4"
            >
              {/* Left: title + meta */}
              <div className="min-w-0">
                <p className="font-display text-xl font-light text-[#2a2118] leading-snug group-hover:text-[#7d6550] transition-colors duration-150">
                  {post.title}
                </p>
                <p className="font-body text-xs text-[#9e8468] mt-1">
                  {post.date}
                  <span className="mx-2 text-[#ddd0bc]">·</span>
                  {post.readTime} read
                </p>
              </div>

              {/* Right: tags or hover arrow */}
              <div className="shrink-0">
                {post.tags && post.tags.length > 0 ? (
                  <div className="flex gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[9px] tracking-widest uppercase text-[#9e8468] border border-[#ddd0bc] px-1.5 py-0.5 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-[#c4a882] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    →
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* ── Closing line ────────────────────────────────────────── */}
        <p className="font-body text-xs tracking-widest uppercase text-[#c4a882] text-center mt-16 mb-8">
          More coming soon.
        </p>

      </div>
    </main>
  );
}
