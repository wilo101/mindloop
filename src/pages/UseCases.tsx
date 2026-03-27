import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";
import { CTA } from "../components";

export function UseCases() {
  const cases = [
    {
      title: "For Writers",
      desc: "Build an audience that actually reads your work. No SEO hacking, no clickbait titles. Just your ideas and the people who value them.",
    },
    {
      title: "For Researchers",
      desc: "Curate high-signal feeds of academic papers, industry analysis, and expert commentary without the distraction of social media.",
    },
    {
      title: "For Teams",
      desc: "Share internal newsletters, industry updates, and strategic thinking in a dedicated, distraction-free environment.",
    },
  ];

  return (
    <>
      <section className="pt-44 pb-32 px-6 max-w-6xl mx-auto min-h-[70vh] flex flex-col justify-center">
        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-8 text-center">
          Built for <span className="font-serif italic font-normal">Depth</span>
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-xl text-muted-foreground mb-24 text-center max-w-2xl mx-auto">
          Whether you're creating or consuming, Mindloop adapts to your intellectual workflow.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div key={c.title} {...fadeUp(0.3 + i * 0.1)} className="liquid-glass p-8 rounded-2xl">
              <h2 className="text-3xl font-serif italic mb-4 text-foreground">{c.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
