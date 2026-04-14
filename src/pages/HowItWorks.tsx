import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";
import { CTA } from "../components";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "CURATE YOUR FEED",
      desc: "SELECT THE TOPICS, WRITERS, AND NICHES THAT MATTER TO YOU. OUR SYSTEM LEARNS WHAT YOU VALUE, NOT WHAT KEEPS YOU SCROLLING.",
    },
    {
      num: "02",
      title: "CONSUME DEEPLY",
      desc: "READ WITHOUT DISTRACTIONS. A MINIMAL INTERFACE STRIPS AWAY NOISE AND LEAVES ONLY THE CONTENT.",
    },
    {
      num: "03",
      title: "ENGAGE & DISCUSS",
      desc: "JOIN HIGH-SIGNAL DISCUSSIONS AND CONNECT WITH AUTHORS AND READERS WHO SHARE YOUR CURIOSITY.",
    },
  ];

  return (
    <>
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 pb-32 pt-44">
        <motion.h1 {...fadeUp(0.1)} className="text-display-hero mb-8">
          THE MECHANICS OF MEANING
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-caption mb-24 max-w-2xl text-[rgba(240,240,250,0.75)]">
          We designed Mindloop to get out of your way. Here is how you go from noise to signal in three steps.
        </motion.p>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...fadeUp(0.3 + i * 0.1)}
              className="flex flex-col items-start gap-6 border-t border-[rgba(240,240,250,0.15)] pt-8 md:flex-row md:gap-12"
            >
              <span className="text-micro text-[rgba(240,240,250,0.45)]">{step.num}</span>
              <div>
                <h2 className="text-nav-bold mb-4 text-[#f0f0fa]">{step.title}</h2>
                <p className="text-micro leading-relaxed text-[rgba(240,240,250,0.55)]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
