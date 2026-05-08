export type Post = {
  title: string;
  date: string;
  readTime: string;
  tags?: string[];
  excerpt?: string;
  slug: string;
  content?: string[];
};

export const posts: Post[] = [
  {
    title: "Leaving college made me realize what home really is",
    date: "December 2024",
    readTime: "4 min",
    tags: [],
    excerpt:
      "Home isn't a location, exactly. It's a density of shared history. You can build it anywhere, but it takes time, and it starts with the unremarkable Tuesdays.",
    slug: "leaving-college-and-home",
    content: [
      "For four years, home was a campus. A particular dining hall, a particular study spot, a particular walk I took when I needed to think. The people who were always around, not because they'd chosen to be, but because circumstance had arranged us into proximity and we'd made something of it.",
      "I didn't know how to value any of this while I was in it. That's probably unavoidable.",
      "When I graduated and left, I expected to miss the friendships. I did. What I didn't anticipate was missing the place itself : the physical geography of four years, which had absorbed so much of who I was becoming that leaving it felt like leaving part of myself behind.",
      "Home, I think, is where you've been sufficiently known. Where the environment has recorded you in some way. The campus had recorded me, be it in the people who knew what I was working on, in the spaces where I'd figured things out, in the accumulated context of years.",
      "Building a new home after college is slower than I expected. It requires returning to places enough times that they start to hold you. Letting people accumulate context about you over time. It's not something you can accelerate.",
      "What college made me understand is that home isn't a location, exactly. It's a density of shared history. You can build it anywhere, but it takes time, and it requires showing up for the ordinary moments ; the unremarkable Tuesdays, the meals that aren't special occasions ; because those are what homes are actually made of.",
      "I'm building one now. It doesn't feel like college yet. But I know what I'm working toward.",
    ],
  },
  {
    title: "Routine changed my life (but not in a robotic way)",
    date: "September 2025",
    readTime: "3 min",
    tags: [],
    excerpt:
      "I used to think routine was the enemy of spontaneity. I've completely reversed on this. Routine doesn't consume your energy, it conserves it.",
    slug: "routine-changed-my-life",
    content: [
      "I used to think routine was the enemy of spontaneity. That having a set schedule meant you'd turned yourself into a machine, optimised but hollow. I've completely reversed on this.",
      "The insight that changed my mind: routine doesn't consume your energy, it conserves it. Every decision you automate is a decision you don't have to make. When I know what I'm doing in the morning before I look at my phone, I arrive at work with more capacity than when I'd spent the first hour figuring out how to start.",
      "But here's what nobody talks about.",
      "The specific routine matters less than the fact of having one. I've tried versions that were too rigid and they broke under any schedule disruption. What actually works for me is a light structure: a few fixed anchors with flexible space in between. The anchors create shape. The flexibility keeps it human.",
      "The place I notice this most is in creative work. I always assumed creative energy was unpredictable, that you had to catch it when it appeared. That's partly true. But I've found that showing up to the same conditions repeatedly trains the brain to show up too. I do my best thinking at the same time of day, in the same environment, almost every time. Not because I'm rigid but because I've created conditions my mind associates with doing good work.",
      "The other thing routine gave me that I didn't expect: it made rest actually restful. When work has a clear end, rest isn't guilty. When I know I'll show up again tomorrow, I can actually stop for the evening. The absence of routine made rest feel like procrastination. Routine made it feel like it was supposed to be there.",
    ],
  },
  {
    title: "Why I started doing more things alone",
    date: "March 2026",
    readTime: "4 min",
    tags: [],
    excerpt:
      "I wanted to see a film. Nobody was available. I went anyway. That sounds small, but it was the first time I'd arrived at my own read on something, uncontaminated.",
    slug: "doing-things-alone",
    content: [
      "This started practically. I wanted to see a film. Nobody was available. I went anyway.",
      "That sounds small, but it was the first time I'd done something social-coded entirely alone, and I was braced for it to feel weird. It didn't. It felt unusually clear. I watched the film without negotiating anyone else's reaction to it. I thought about it on the way home without talking it through first. I arrived at my own read on it, uncontaminated.",
      "I started noticing how much of my experience of things was mediated by other people's presence. Not in a bad way, shared experiences are genuinely richer in many ways. But there's a specific quality to experiencing something alone that you lose when you're always with someone. You have to hold the full weight of it yourself. That turns out to be good for you.",
      "I travel alone sometimes now. It's the strongest version of this. When you travel with someone, logistics get shared, decisions get negotiated, and the experience takes the shape of the group. When you travel alone, everything is yours, both the good and the uncomfortable. I've gotten lost more traveling alone, but I've also been more present. You can't check out when there's no one else to hold the map.",
      "I want to be clear that I'm not advocating for solitude as a lifestyle. I'm close to people and those relationships matter enormously to me. But I think there's a version of dependence on social context that can quietly hollow out your capacity to know your own mind. Doing things alone is a corrective. It reminds you that you're capable of showing up for yourself.",
      "The film, by the way, was excellent. I still have a clear opinion about it.",
    ],
  },
];
