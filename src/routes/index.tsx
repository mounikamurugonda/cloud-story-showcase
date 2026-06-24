import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticLink";
import coverImg from "@/assets/case-study/dashboard-cover.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mounika Murugonda — Frontend & UI/UX Developer" },
      {
        name: "description",
        content:
          "Selected work and writing by Mounika Murugonda — a frontend developer and UI/UX designer building paper-minimal, system-driven products.",
      },
      { property: "og:title", content: "Mounika Murugonda — Frontend & UI/UX Developer" },
      {
        property: "og:description",
        content:
          "Selected work and writing by Mounika Murugonda — a frontend developer and UI/UX designer.",
      },
    ],
  }),
  component: Index,
});

const HERO_WORDS = "Designing digital systems with a craft-first mindset.".split(" ");

function Index() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <div className="fixed inset-0 z-50 paper-grain" />

      <header className="border-b border-zinc-200/60">
        <Nav />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 dot-grid md:pt-24 md:pb-32">
          <div className="relative">
            <span className="absolute -left-12 top-2 hidden text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 [writing-mode:vertical-lr] rotate-180 md:block">
              01 / Portfolio · 2026
            </span>
            <h1 className="text-balance font-serif text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:max-w-4xl">
              {HERO_WORDS.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.08 * i,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <Reveal delay={0.4}>
                <p className="max-w-[56ch] text-base leading-relaxed text-lead sm:text-lg">
                  Mounika Murugonda is a frontend developer and UI/UX designer.
                  Currently exploring the intersection of modular design systems
                  and tactile, interface-led product work.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <MagneticLink>
                  <Link
                    to="/work/c-cloud-b"
                    className="group inline-flex h-11 items-center gap-2 bg-ink px-4 text-sm text-paper transition-transform active:scale-[0.98]"
                  >
                    <svg className="size-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.25" />
                    </svg>
                    View selected work
                  </Link>
                </MagneticLink>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="border-b border-zinc-200/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-12">
          <div className="col-span-1 border-b border-zinc-200/60 p-6 md:col-span-4 md:border-b-0 md:border-r">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lead">
              02 — About
            </span>
            <h2 className="mt-6 font-serif text-2xl font-medium">Approach</h2>
          </div>
          <div className="col-span-1 p-6 md:col-span-8 md:p-12 lg:p-20">
            <Reveal>
              <p className="max-w-[52ch] text-pretty text-lg leading-relaxed text-zinc-700 sm:text-xl">
                Every project is treated as a study in balance. I combine the rigor of
                frontend engineering with a sensitivity to typographic rhythm and grid
                structure. No shortcuts — only intentional, considered choices that age
                well.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-zinc-200/60 pt-12">
              <Reveal>
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                  Capabilities
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-lead">
                  <li>Interface design</li>
                  <li>Design systems</li>
                  <li>Prototyping</li>
                  <li>Frontend engineering</li>
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                  Tools
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-lead">
                  <li>Figma & Framer</li>
                  <li>React / TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100/30 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-10 flex items-baseline gap-4">
              <span className="font-serif text-5xl text-zinc-300">01.</span>
              <h2 className="font-serif text-4xl font-medium tracking-tight">Complyia</h2>
            </div>
          </Reveal>

          <Link to="/work/c-cloud-b" className="group block">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative w-full p-6 md:p-10"
              style={{
                backgroundColor: "#f4f5f7",
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            >
              <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-[#0d99ff]">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <rect x="1" y="1" width="10" height="10" stroke="currentColor" strokeWidth="1.25" />
                </svg>
                <span>Complyia / Dashboard — Desktop</span>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-white ring-1 ring-[#0d99ff]/60 shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_40px_-20px_rgba(13,153,255,0.25)]">
                <img
                  src={coverImg}
                  alt="Complyia compliance dashboard"
                  className="h-full w-full object-contain transition-transform duration-[1200ms] group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-4 right-4 rounded-sm bg-black/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  View case study →
                </span>
              </div>
              {["top","right","bottom","left"].map((_, i) => {
                const positions = [
                  "top-[18px] left-[18px] md:top-[34px] md:left-[34px]",
                  "top-[18px] right-[18px] md:top-[34px] md:right-[34px]",
                  "bottom-[18px] left-[18px] md:bottom-[34px] md:left-[34px]",
                  "bottom-[18px] right-[18px] md:bottom-[34px] md:right-[34px]",
                ];
                return (
                  <span
                    key={i}
                    className={`pointer-events-none absolute ${positions[i]} block h-2 w-2 border border-[#0d99ff] bg-white`}
                  />
                );
              })}
            </motion.div>
          </Link>

          <div className="mt-12 grid w-full grid-cols-1 gap-12 border-t border-zinc-200/60 pt-12 md:grid-cols-3">
            {[
              { label: "Client", value: "Complyia" },
              { label: "Role", value: "UI/UX & frontend" },
              { label: "Timeline", value: "4 weeks · 2024" },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                  {m.label}
                </p>
                <p className="mt-2 font-medium">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
