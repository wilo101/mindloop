import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";
import { CTA } from "../components";

export function UseCases() {
  const cases = [
    {
      title: "For writers",
      desc: "Build an audience that actually reads your work. No SEO hacking, no clickbait titles. Just your ideas and the people who value them.",
    },
    {
      title: "For researchers",
      desc: "Curate high-signal feeds of academic papers, industry analysis, and expert commentary without the distraction of social media.",
    },
    {
      title: "For teams",
      desc: "Share internal newsletters, industry updates, and strategic thinking in a dedicated, distraction-free environment.",
    },
  ];

  return (
    <>
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center bg-white px-6 pb-24 pt-28">
        <motion.h1 {...fadeUp(0.1)} className="text-section-title mb-8 text-center">
          Built for depth
        </motion.h1>
        <motion.p {...fadeUp(0.12)} className="text-body-muted mx-auto mb-20 max-w-2xl text-center">
          Whether you&apos;re creating or consuming, Mindloop adapts to your intellectual workflow.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(0.15 + i * 0.08)}
              className="rounded-2xl bg-white p-8 shadow-cal-card"
            >
              <h2 className="font-display mb-4 text-xl font-semibold text-[#242424]">{c.title}</h2>
              <p className="text-sm font-light leading-relaxed text-[#898989]">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
