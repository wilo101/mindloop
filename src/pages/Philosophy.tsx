import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";
import { CTA } from "../components";

export function Philosophy() {
  return (
    <>
      <section className="pt-44 pb-32 px-6 max-w-4xl mx-auto min-h-[70vh] flex flex-col justify-center text-center">
        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-16">
          Against the <span className="font-serif italic font-normal">Algorithm</span>
        </motion.h1>
        <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed text-left">
          <motion.p {...fadeUp(0.2)}>
            The modern internet is a machine designed to harvest attention. It prioritizes outrage over nuance, speed
            over depth, and engagement over truth.
          </motion.p>
          <motion.p {...fadeUp(0.3)}>
            We believe there is a better way. Mindloop was built on a simple premise: your attention is your most valuable
            asset. It should be invested, not spent.
          </motion.p>
          <motion.div {...fadeUp(0.4)} className="py-8 my-12 border-l-2 border-foreground pl-8">
            <p className="text-foreground font-medium text-2xl md:text-3xl font-serif italic">
              "We are what we repeatedly consume. Excellence, then, is not an act, but a habit of the mind."
            </p>
          </motion.div>
          <motion.p {...fadeUp(0.5)}>
            By stripping away the metrics, the infinite scrolls, and the algorithmic manipulation, we return the power of
            choice to you. Read deeply. Think clearly.
          </motion.p>
        </div>
      </section>
      <CTA />
    </>
  );
}
