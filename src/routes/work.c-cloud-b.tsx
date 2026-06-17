import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlate } from "@/components/site/ImagePlate";
import { Chapter, Prose } from "@/components/case-study/Chapter";
import coverImg from "@/assets/case-study/cover.jpg";
import sketchesImg from "@/assets/case-study/sketches.jpg";
import userflowImg from "@/assets/case-study/userflow.jpg";
import wireframe1 from "@/assets/case-study/wireframe-1.jpg";
import wireframe2 from "@/assets/case-study/wireframe-2.jpg";
import final1 from "@/assets/case-study/final-1.jpg";
import final2 from "@/assets/case-study/final-2.jpg";
import final3 from "@/assets/case-study/final-3.jpg";

export const Route = createFileRoute("/work/c-cloud-b")({
  head: () => ({
    meta: [
      { title: "C-Cloud_B — Case Study · Mounika Murugonda" },
      {
        name: "description",
        content:
          "A 12-week case study on C-Cloud_B: redesigning a multi-tenant cloud infrastructure dashboard through modular components, spatial hierarchy, and progressive disclosure.",
      },
      { property: "og:title", content: "C-Cloud_B — Case Study" },
      {
        property: "og:description",
        content:
          "Redesigning a multi-tenant cloud infrastructure dashboard with modular components and progressive disclosure.",
      },
      { property: "og:image", content: coverImg },
      { name: "twitter:image", content: coverImg },
    ],
  }),
  component: CaseStudy,
});

const META = [
  { label: "Client", value: "CloudBase Systems" },
  { label: "Role", value: "Lead UI/UX & Frontend" },
  { label: "Timeline", value: "12 weeks" },
  { label: "Year", value: "2024" },
  { label: "Tools", value: "Figma · React · Tailwind" },
];

function CaseStudy() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <div className="fixed inset-0 z-50 paper-grain" />

      <header className="border-b border-zinc-200/60">
        <Nav />
      </header>

      <section className="border-b border-zinc-200/60">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-lead">
              Case study / 01
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl">
              C-Cloud_B
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[58ch] text-balance text-xl leading-relaxed text-zinc-600 md:text-2xl">
              Refining complexity through a modular visual language — a redesign of a
              multi-tenant cloud infrastructure dashboard for engineering teams who need
              clarity at speed.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[16/9] w-full overflow-hidden bg-zinc-100 outline outline-1 -outline-offset-1 outline-black/5"
          >
            <img src={coverImg} alt="C-Cloud_B interface" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-zinc-200/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-5">
          {META.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                {m.label}
              </p>
              <p className="mt-2 text-sm font-medium">{m.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Chapter
        number="Chapter 01"
        marker={"Context &\nDiscovery"}
        title="Refining complexity through a modular visual language."
      >
        <Prose>
          The primary challenge for C-Cloud_B was the sheer density of information.
          Engineers were navigating three legacy platforms to manage a single cloud
          instance — switching tabs to correlate alerts, logs, and billing. Our goal was
          consolidation without the cognitive load.
        </Prose>
        <ImagePlate
          src={sketchesImg}
          alt="Early pencil sketches mapping screens"
          caption="01.1 — Mapping the initial user flow across disparate data sources."
        />
        <Prose>
          We began with a fundamental audit of the existing hierarchy. By stripping the
          UI back to its atomic elements, we identified the recurring patterns that
          could be unified into a cohesive component library — alerts, status chips,
          node cards, and tabular density modes.
        </Prose>
      </Chapter>

      <Chapter
        number="Chapter 02"
        marker={"Research &\nUser Flows"}
        title="Listening before drawing. Eight interviews, one map."
      >
        <Prose>
          Conversations with eight DevOps engineers surfaced a consistent pattern: 40%
          of their time was spent identifying relationships between services rather than
          fixing the underlying issue. The interface was answering the wrong question.
        </Prose>
        <ImagePlate
          src={userflowImg}
          alt="User flow diagram"
          aspect="aspect-[16/9]"
          caption="02.1 — The path from infrastructure alert to resolution, charted in three primary moves."
        />
      </Chapter>

      <Chapter
        number="Chapter 03"
        marker={"Wireframes &\nIA"}
        title="Low-fidelity, high-conviction."
      >
        <Prose>
          We deliberately kept the early frames grayscale and rough. The intent was to
          debate hierarchy, density, and information sequence — not pixels. Sticky
          filters, persistent breadcrumbs, and a single command bar emerged as the
          structural primitives.
        </Prose>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ImagePlate
            src={wireframe1}
            alt="Wireframe of dashboard"
            aspect="aspect-[4/5]"
            caption="03.1 — Primary dashboard layout."
          />
          <ImagePlate
            src={wireframe2}
            alt="Wireframe of settings panel"
            aspect="aspect-[4/5]"
            caption="03.2 — Settings & secondary navigation."
          />
        </div>
      </Chapter>

      <Chapter
        number="Chapter 04"
        marker={"Visual\nSystem"}
        title="A quiet system that gets out of the way."
      >
        <Prose>
          The visual system was tuned for long working sessions. A single accent carries
          semantic meaning; everything else is neutral. Type sits on a 4-point baseline.
          Spacing is reduced to a five-step scale. The result favors recognition over
          decoration.
        </Prose>
        <div className="grid grid-cols-2 gap-4 border border-zinc-200/60 p-6 md:grid-cols-4 md:gap-6 md:p-10">
          {[
            { k: "Type", v: "Inter / Newsreader" },
            { k: "Grid", v: "12-col · 8px base" },
            { k: "Radius", v: "2 / 4 / 8" },
            { k: "Accent", v: "Signal Amber" },
          ].map((t) => (
            <div key={t.k}>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                {t.k}
              </p>
              <p className="mt-2 font-serif text-lg">{t.v}</p>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter
        number="Chapter 05"
        marker={"Final\nInterface"}
        title="Shipping the system."
      >
        <Prose>
          The final product organizes itself around three surfaces — overview, inspect,
          and act. Each surface uses the same density controls and the same component
          vocabulary, so muscle memory carries across the entire product.
        </Prose>
        <ImagePlate
          src={final1}
          alt="Final dashboard screen"
          aspect="aspect-[16/10]"
          caption="05.1 — Overview surface."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ImagePlate
            src={final2}
            alt="Mobile companion app"
            aspect="aspect-[3/4]"
            caption="05.2 — On-call mobile companion."
          />
          <ImagePlate
            src={final3}
            alt="Node graph view"
            aspect="aspect-[3/4]"
            caption="05.3 — Spatial inspect view."
          />
        </div>
      </Chapter>

      <section className="border-y border-zinc-200/60 bg-zinc-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-lead">
              Outcomes
            </p>
            <h3 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-tight md:text-5xl">
              Less noise. Faster resolution. A team that actually likes its tools.
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { n: "−42%", l: "Mean time to resolution" },
              { n: "+92%", l: "Internal satisfaction (NPS)" },
              { n: "3 → 1", l: "Platforms consolidated" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <p className="font-serif text-6xl font-medium tracking-tight md:text-7xl">
                  {s.n}
                </p>
                <p className="mt-3 text-sm text-lead">{s.l}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <blockquote className="mt-20 max-w-3xl border-l-2 border-ink pl-6 font-serif text-2xl italic leading-snug text-zinc-700 md:text-3xl">
              "This project taught me the importance of visual hierarchy in data-heavy
              environments. From here on, progressive disclosure isn't a feature — it's
              a default."
              <footer className="mt-4 font-sans text-[11px] not-italic uppercase tracking-[0.2em] text-lead">
                — Mounika, on reflection
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-lead">
            Return
          </p>
          <Link to="/" className="group inline-block">
            <h2 className="font-serif text-5xl font-medium tracking-tight transition-all group-hover:italic md:text-6xl">
              Back to index
            </h2>
            <div className="mx-auto mt-6 h-px w-12 bg-zinc-300 transition-all group-hover:w-24 group-hover:bg-ink" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
