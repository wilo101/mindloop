import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

export function SearchChanged() {
  const platforms = [
    {
      name: "ChatGPT",
      desc: "Instant answers, zero context.",
      icon: "https://picsum.photos/seed/chatgpt/200/200",
    },
    {
      name: "Perplexity",
      desc: "Research at the speed of thought.",
      icon: "https://picsum.photos/seed/perplexity/200/200",
    },
    {
      name: "Google AI",
      desc: "The world's information, synthesized.",
      icon: "https://picsum.photos/seed/googleai/200/200",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] px-6 py-24 md:py-28">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <motion.h2 {...fadeUp(0.1)} className="text-section-title mb-6">
          Search has changed. Have you?
        </motion.h2>
        <motion.p {...fadeUp(0.15)} className="text-body-muted mx-auto max-w-2xl">
          The way people find information is evolving. We help you stay ahead of the curve by delivering insights
          directly to your audience.
        </motion.p>
      </div>

      <div className="mx-auto mb-12 grid max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.2 + i * 0.08)}
            className="flex flex-col items-center text-center"
          >
            <div className="shadow-cal-card mb-6 w-[200px] overflow-hidden rounded-xl bg-white">
              <img src={platform.icon} alt="" className="h-[200px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <h3 className="font-display mb-2 text-base font-semibold text-[#242424]">{platform.name}</h3>
            <p className="text-sm font-light leading-relaxed text-[#898989]">{platform.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.45)} className="text-center text-sm font-medium text-[#898989]">
        If you don&apos;t answer the questions, someone else will.
      </motion.p>
    </section>
  );
}
