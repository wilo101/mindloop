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
    <section className="pt-52 md:pt-64 pb-6 md:pb-9 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-24">
        <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6">
          Search has <span className="font-serif italic font-normal">changed.</span> Have you?
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The way people find information is evolving. We help you stay ahead of the curve by delivering insights
          directly to your audience.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {platforms.map((platform, i) => (
          <motion.div key={platform.name} {...fadeUp(0.3 + i * 0.1)} className="flex flex-col items-center text-center">
            <div className="w-[200px] h-[200px] mb-6 rounded-2xl overflow-hidden liquid-glass p-1">
              <img
                src={platform.icon}
                alt={`${platform.name} — decorative tile`}
                className="w-full h-full object-cover rounded-xl grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <h3 className="font-semibold text-base mb-2">{platform.name}</h3>
            <p className="text-muted-foreground text-sm">{platform.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.6)} className="text-muted-foreground text-sm text-center">
        If you don't answer the questions, someone else will.
      </motion.p>
    </section>
  );
}
