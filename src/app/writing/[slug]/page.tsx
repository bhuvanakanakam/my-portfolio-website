import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} — KBT` : "Post Not Found",
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postIndex = posts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) notFound();

  const post = posts[postIndex];
  const nextPost = posts[postIndex + 1] ?? null;

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <div className="max-w-2xl mx-auto px-6 pt-24 pb-32">

        {/* ── Top nav ─────────────────────────────────────────────── */}
        <div className="flex items-center justify-between mb-16">
          <Link
            href="/writing"
            className="font-body text-xs tracking-[0.28em] uppercase text-[#9e8468] hover:text-[#7d6550] transition-colors duration-200"
          >
            ← Writing
          </Link>
          <Link
            href="/"
            className="font-body text-xs tracking-[0.28em] uppercase text-[#9e8468] hover:text-[#7d6550] transition-colors duration-200"
          >
            KBT
          </Link>
        </div>

        {/* ── Post header ─────────────────────────────────────────── */}
        <div className="mb-12">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-[9px] tracking-widest uppercase text-[#9e8468] border border-[#ddd0bc] px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="font-body text-xs text-[#9e8468] tracking-wide mb-4">
            {post.date}
            <span className="mx-2 text-[#ddd0bc]">·</span>
            {post.readTime} read
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-[#2a2118] leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="font-display italic text-lg font-light text-[#6b5744] leading-relaxed mt-5">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* ── Post body / coming soon ─────────────────────────────── */}
        {post.content ? (
          <div className="space-y-6 mt-12">
            {post.content.map((para, i) => (
              <p key={i} className="font-body text-base font-light text-[#4a3b2e] leading-[1.85]">
                {para}
              </p>
            ))}
          </div>
        ) : (
          <div className="bg-[#f5f0e8] rounded-lg px-8 py-10 mt-12">
            <style>{`
              @keyframes typing-pulse {
                0%, 100% { opacity: 0.25; }
                50%       { opacity: 1; }
              }
              .typing-dot { animation: typing-pulse 1.2s ease-in-out infinite; }
              .typing-dot:nth-child(2) { animation-delay: 0.3s; }
              .typing-dot:nth-child(3) { animation-delay: 0.6s; }
            `}</style>
            <div className="flex gap-1.5 items-center justify-center mb-6">
              <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#c4a882] block" />
              <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#c4a882] block" />
              <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#c4a882] block" />
            </div>
            <p className="font-display text-xl font-light text-[#2a2118] mb-2 text-center">
              Still being written.
            </p>
            <p className="font-body text-sm font-light text-[#9e8468] leading-relaxed mb-7 text-center">
              This one isn&apos;t ready yet. Come back soon — or if you want to talk about it now, reach out.
            </p>
            <div className="flex gap-5 justify-center">
              <a
                href="mailto:bkanakam03@gmail.com"
                className="font-body text-xs tracking-wide text-[#7d6550] hover:text-[#2a2118] underline underline-offset-4 transition-colors duration-200"
              >
                bkanakam03@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/bhuvana-kanakam"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-wide text-[#7d6550] hover:text-[#2a2118] underline underline-offset-4 transition-colors duration-200"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        )}

        {/* ── Next post nav ────────────────────────────────────────── */}
        {nextPost && (
          <div className="mt-16 pt-8 border-t border-[#ede4d4]">
            <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#b59f84] block mb-2">
              Up next
            </span>
            <Link
              href={`/writing/${nextPost.slug}`}
              className="group inline-flex items-baseline gap-2 max-w-sm"
            >
              <span className="font-body text-sm text-[#6b5744] leading-snug group-hover:text-[#2a2118] transition-colors duration-200">
                {nextPost.title}
              </span>
              <span className="text-[#c4a882] text-xs shrink-0 group-hover:text-[#7d6550] transition-colors duration-200">→</span>
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}
