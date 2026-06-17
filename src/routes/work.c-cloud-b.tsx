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
      { title: "Complyia · Compliance Cloud — Case Study · Mounika Murugonda" },
      {
        name: "description",
        content:
          "A case study on Complyia (Compliance Cloud): designing a tax & transfer-pricing platform with a six-step data validation pipeline for senior tax professionals.",
      },
      { property: "og:title", content: "Complyia · Compliance Cloud — Case Study" },
      {
        property: "og:description",
        content:
          "Designing a six-step data validation pipeline for an enterprise tax compliance platform.",
      },
      { property: "og:image", content: coverImg },
      { name: "twitter:image", content: coverImg },
    ],
  }),
  component: CaseStudy,
});

const META = [
  { label: "Product", value: "Complyia · Compliance Cloud" },
  { label: "Role", value: "Lead UI/UX & Frontend" },
  { label: "Domain", value: "Tax & Transfer Pricing" },
  { label: "Year", value: "2026" },
  { label: "Stack", value: "Figma · React · Framer Motion" },
];

const VALIDATION_STEPS = [
  {
    n: "01",
    name: "Upload & Classify",
    time: "≈ 2s",
    note: "Schema detection · file-type sniffing · category inference (GL, entity, task).",
  },
  {
    n: "02",
    name: "Transform & Standardise",
    time: "≈ 2s",
    note: "Completeness checks, balance checks, sanity rules applied to every row.",
  },
  {
    n: "03",
    name: "Column Mapping",
    time: "≈ 5s",
    note: "Upload → Complyia standard model → System COA → Local accounts.",
  },
  {
    n: "04",
    name: "Row Mapping",
    time: "≈ 7s",
    note: "Transaction-level alignment with auto-suggest and human override.",
  },
  {
    n: "05",
    name: "Validation & Inference",
    time: "≈ 5s",
    note: "Completeness pass, validation checks, inference of missing values.",
  },
  {
    n: "06",
    name: "Review & Publish",
    time: "≈ 7s",
    note: "Approve exceptions, lock the dataset, publish for downstream filings.",
  },
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
              Case study / 01 — Enterprise B2B SaaS
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl">
              Complyia
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[62ch] text-balance text-xl leading-relaxed text-zinc-600 md:text-2xl">
              Designing a compliance cloud for senior tax professionals — where a single
              wrong row can become a regulatory event. The product hinges on a six-step
              data validation pipeline that turns messy ledgers into filing-ready truth.
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
            <img src={coverImg} alt="Complyia compliance cloud dashboard" className="h-full w-full object-cover" />
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
        title="Where a wrong row becomes a regulatory event."
      >
        <Prose>
          Complyia is a B2B compliance cloud built for tax professionals, controllers,
          and transfer-pricing analysts with 6–7+ years in the seat. The platform spans
          seven modules — Home, Entities, Tasks, Documents, Data Foundation,
          Diagnostics, and Quick Links — but the centre of gravity is data integrity.
          Filings depend on it; audits punish the absence of it.
        </Prose>
        <ImagePlate
          src={sketchesImg}
          alt="Module map sketches"
          caption="01.1 — Mapping seven modules around a single source of truth: the Data Foundation."
        />
        <Prose>
          Discovery framed the real job: senior users are not learning the tool, they
          are accountable for what it outputs. The interface had to behave like an
          instrument — quiet, dense, predictable — and surface confidence with every
          interaction.
        </Prose>
      </Chapter>

      <Chapter
        number="Chapter 02"
        marker={"Research &\nUser Flows"}
        title="Eight tax professionals. One recurring fear."
      >
        <Prose>
          Across eight interviews the same anxiety surfaced: "I don't know what the
          system silently fixed." Power users wanted automation, but only if every
          inference was visible, reversible, and attributable. That insight shaped the
          entire validation flow.
        </Prose>
        <ImagePlate
          src={userflowImg}
          alt="Data Foundation user flow"
          aspect="aspect-[16/9]"
          caption="02.1 — From file drop to publish: a six-step pipeline with human-in-the-loop checkpoints."
        />
        <Prose>
          The dashboard answers <em>what is the state of compliance today?</em> Data
          Foundation answers <em>can I trust the numbers behind that state?</em> Both
          questions had to be answerable in under a minute.
        </Prose>
      </Chapter>

      <Chapter
        number="Chapter 03"
        marker={"Dashboard\n& IA"}
        title="A modular grid for a moving target."
      >
        <Prose>
          The Home dashboard composes seven independent cards — Filing Status, My
          Entities, Federal Calendar, Controversy, Open Due Dates, Estimated Payments,
          and Transfer Pricing — each readable in isolation and meaningful in
          aggregate. Color is reserved for semantic urgency: amber for medium, red for
          high, blue for informational.
        </Prose>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ImagePlate
            src={wireframe1}
            alt="Dashboard wireframe"
            aspect="aspect-[4/5]"
            caption="03.1 — Home dashboard: card grid with status pills, donut, and stacked timelines."
          />
          <ImagePlate
            src={wireframe2}
            alt="Data Foundation wireframe"
            aspect="aspect-[4/5]"
            caption="03.2 — Data Foundation: import register with grouping, search, and exception flags."
          />
        </div>
      </Chapter>

      {/* Focus chapter — Data Validation */}
      <Chapter
        number="Chapter 04"
        marker={"Data\nValidation"}
        title="The six-step pipeline that earns user trust."
      >
        <Prose>
          Data Foundation is where the product is won or lost. Senior users arrive with
          QuickBooks exports, hand-edited spreadsheets, and partner JSON dumps. The
          wizard's job is to absorb the mess, narrate every transformation, and never
          ship a silent change.
        </Prose>

        <div className="my-12 border border-zinc-200/70 bg-paper">
          <div className="grid grid-cols-12 border-b border-zinc-200/70 px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
            <div className="col-span-1">#</div>
            <div className="col-span-4">Step</div>
            <div className="col-span-2">Runtime</div>
            <div className="col-span-5">What it guarantees</div>
          </div>
          {VALIDATION_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <div className="grid grid-cols-12 items-baseline border-b border-zinc-200/60 px-6 py-5 last:border-b-0">
                <div className="col-span-1 font-serif text-2xl text-zinc-400">{s.n}</div>
                <div className="col-span-4 font-serif text-xl">{s.name}</div>
                <div className="col-span-2 text-sm text-lead">{s.time}</div>
                <div className="col-span-5 text-sm leading-relaxed text-zinc-700">
                  {s.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Prose>
          Three design principles hold the pipeline together. <strong>Narrate everything:</strong> a
          live activity log timestamps each check, so a controller can later trace why a
          row was flagged. <strong>Defer to humans on ambiguity:</strong> mapping
          suggestions are pre-filled but never auto-applied without a visible accept
          state. <strong>Make exceptions first-class:</strong> the Review & Publish
          screen leads with what the system could not resolve, not with what succeeded.
        </Prose>

        <ImagePlate
          src={final1}
          alt="Upload & Classify step with live activity log"
          aspect="aspect-[16/10]"
          caption="04.1 — Step 01 · Upload & Classify. Schema detection runs live; rows, warnings, and mapped-columns counters animate as the file is parsed."
        />

        <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              h: "Completeness",
              b: "Every required column is present and every required cell is populated before the wizard advances.",
            },
            {
              h: "Balance",
              b: "Debits equal credits at the trial-balance level; subtotals reconcile to parents within tolerance.",
            },
            {
              h: "Sanity",
              b: "Domain rules — date ranges inside the scenario, entity IDs in the registry, FX rates within bounds.",
            },
          ].map((c) => (
            <div key={c.h} className="border border-zinc-200/70 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-lead">
                Validation class
              </p>
              <p className="mt-3 font-serif text-2xl">{c.h}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{c.b}</p>
            </div>
          ))}
        </div>

        <Prose>
          The Diagnostics column on every Entity row is the long tail of this work.
          Numeric badges (9, 10, 21…) link directly back into the validation report so a
          user can move from a dashboard anomaly to the originating ledger cell in two
          clicks.
        </Prose>
      </Chapter>

      <Chapter
        number="Chapter 05"
        marker={"Visual\nSystem"}
        title="A quiet system for long working sessions."
      >
        <Prose>
          The visual system is tuned for eight-hour days inside dense tables. One accent
          carries semantic weight; everything else is neutral. Type sits on a 4-point
          baseline. Spacing collapses to a five-step scale. Status badges, priority
          pills, and progress bars share a single vocabulary across all seven modules.
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
        number="Chapter 06"
        marker={"Final\nInterface"}
        title="Shipping the system."
      >
        <Prose>
          The final product organises around three surfaces — <em>overview</em>,{" "}
          <em>inspect</em>, and <em>act</em>. The dashboard surfaces state; Data
          Foundation and Diagnostics let users inspect; Tasks and Documents are where
          they act. Density controls and component vocabulary carry across all three.
        </Prose>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ImagePlate
            src={final2}
            alt="Entities module list"
            aspect="aspect-[3/4]"
            caption="06.1 — Entities list with inline diagnostics badges."
          />
          <ImagePlate
            src={final3}
            alt="Review & Publish step"
            aspect="aspect-[3/4]"
            caption="06.2 — Review & Publish leads with exceptions, not successes."
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
              Faster filings. Fewer silent fixes. A pipeline users actually trust.
            </h3>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { n: "−63%", l: "Time spent on data prep per filing cycle" },
              { n: "100%", l: "Inferences attributed in the activity log" },
              { n: "6", l: "Validation steps · one trusted pipeline" },
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
              "For senior tax users, trust isn't built by automation — it's built by
              showing the work. Every inference the system makes has to be visible,
              reversible, and signed."
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
