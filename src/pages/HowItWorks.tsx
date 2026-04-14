import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";
import { CTA } from "../components";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Curate your feed",
      desc: "Select the topics, writers, and niches that matter to you. Our algorithm learns what you value, not what keeps you scrolling.",
    },
    {
      num: "02",
      title: "Consume deeply",
      desc: "Read without distractions. A minimal interface strips away the noise, leaving only the content.",
    },
    {
      num: "03",
      title: "Engage & discuss",
      desc: "Join high-signal discussions and connect with authors and readers who share your curiosity.",
    },
  ];

  return (
    <>
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center bg-white px-6 pb-24 pt-28">
        <motion.h1 {...fadeUp(0.1)} className="text-section-title mb-8">
          The mechanics of meaning
        </motion.h1>
        <motion.p {...fadeUp(0.12)} className="text-body-muted mb-20 max-w-2xl">
          We designed Mindloop to get out of your way. Here is how you go from noise to signal in three steps.
        </motion.p>

        <div className="space-y-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...fadeUp(0.15 + i * 0.08)}
              className="flex flex-col gap-4 border-t border-[rgba(34,42,53,0.08)] pt-8 md:flex-row md:gap-12"
            >
              <span className="font-display text-sm font-semibold text-[#898989]">{step.num}</span>
              <div>
                <h2 className="font-display mb-3 text-xl font-semibold text-[#242424]">{step.title}</h2>
                <p className="text-base font-light leading-relaxed text-[#898989]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
