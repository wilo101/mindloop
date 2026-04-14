import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

export function SearchChanged() {
  const platforms = [
    {
      name: "CHATGPT",
      desc: "INSTANT ANSWERS, ZERO CONTEXT.",
      icon: "https://picsum.photos/seed/chatgpt/200/200",
    },
    {
      name: "PERPLEXITY",
      desc: "RESEARCH AT THE SPEED OF THOUGHT.",
      icon: "https://picsum.photos/seed/perplexity/200/200",
    },
    {
      name: "GOOGLE AI",
      desc: "THE WORLD'S INFORMATION, SYNTHESIZED.",
      icon: "https://picsum.photos/seed/googleai/200/200",
    },
  ];

  return (
    <section className="pt-52 md:pt-64 pb-12 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2 {...fadeUp(0.1)} className="text-display-hero mb-6 max-w-5xl mx-auto">
          SEARCH HAS CHANGED. HAVE YOU?
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="text-caption max-w-2xl mx-auto text-[rgba(240,240,250,0.75)]">
          The way people find information is evolving. We help you stay ahead of the curve by delivering insights
          directly to your audience.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
        {platforms.map((platform, i) => (
          <motion.div key={platform.name} {...fadeUp(0.3 + i * 0.1)} className="flex flex-col items-center text-center">
            <div className="w-[200px] h-[200px] mb-6 overflow-hidden border border-[rgba(240,240,250,0.2)]">
              <img
                src={platform.icon}
                alt=""
                className="h-full w-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <h3 className="text-nav-bold mb-2 text-[#f0f0fa]">{platform.name}</h3>
            <p className="text-micro text-[rgba(240,240,250,0.55)]">{platform.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.6)} className="text-micro text-center text-[rgba(240,240,250,0.45)]">
        IF YOU DON&apos;T ANSWER THE QUESTIONS, SOMEONE ELSE WILL.
      </motion.p>
    </section>
  );
}
