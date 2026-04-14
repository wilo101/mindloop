import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";
import { CTA } from "../components";

export function UseCases() {
  const cases = [
    {
      title: "FOR WRITERS",
      desc: "BUILD AN AUDIENCE THAT ACTUALLY READS YOUR WORK. NO SEO HACKING, NO CLICKBAIT TITLES. JUST YOUR IDEAS AND THE PEOPLE WHO VALUE THEM.",
    },
    {
      title: "FOR RESEARCHERS",
      desc: "CURATE HIGH-SIGNAL FEEDS OF PAPERS, ANALYSIS, AND EXPERT COMMENTARY WITHOUT THE DISTRACTION OF SOCIAL MEDIA.",
    },
    {
      title: "FOR TEAMS",
      desc: "SHARE INTERNAL NEWSLETTERS, UPDATES, AND STRATEGIC THINKING IN A DEDICATED, DISTRACTION-FREE ENVIRONMENT.",
    },
  ];

  return (
    <>
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 pb-32 pt-44">
        <motion.h1 {...fadeUp(0.1)} className="text-display-hero mb-8 text-center">
          BUILT FOR DEPTH
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-caption mx-auto mb-24 max-w-2xl text-center text-[rgba(240,240,250,0.75)]">
          Whether you&apos;re creating or consuming, Mindloop adapts to your intellectual workflow.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(0.3 + i * 0.1)}
              className="border border-[rgba(240,240,250,0.2)] bg-[rgba(240,240,250,0.04)] px-8 py-10"
            >
              <h2 className="text-nav-bold mb-4 text-[#f0f0fa]">{c.title}</h2>
              <p className="text-micro leading-relaxed text-[rgba(240,240,250,0.55)]">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
