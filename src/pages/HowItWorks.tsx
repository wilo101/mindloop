import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";
import { CTA } from "../components";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Curate Your Feed",
      desc: "Select the topics, writers, and niches that matter to you. Our algorithm learns what you value, not what keeps you scrolling.",
    },
    {
      num: "02",
      title: "Consume Deeply",
      desc: "Read without distractions. Our liquid-glass interface strips away the noise, leaving only the content.",
    },
    {
      num: "03",
      title: "Engage & Discuss",
      desc: "Join private, high-signal comment sections. Connect with authors and readers who share your intellectual curiosity.",
    },
  ];

  return (
    <>
      <section className="pt-44 pb-32 px-6 max-w-4xl mx-auto min-h-[70vh] flex flex-col justify-center">
        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-8">
          The <span className="font-serif italic font-normal">Mechanics</span> of Meaning
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-xl text-muted-foreground mb-24">
          We designed Mindloop to get out of your way. Here is how you go from noise to signal in three simple steps.
        </motion.p>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...fadeUp(0.3 + i * 0.1)}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-t border-border/30 pt-8"
            >
              <span className="text-4xl font-serif italic text-muted-foreground">{step.num}</span>
              <div>
                <h2 className="text-2xl font-medium mb-4">{step.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
