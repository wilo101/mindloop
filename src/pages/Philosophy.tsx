import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";
import { CTA } from "../components";

export function Philosophy() {
  return (
    <>
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center bg-white px-6 pb-24 pt-28 text-center">
        <motion.h1 {...fadeUp(0.1)} className="text-section-title mb-16">
          Against the algorithm
        </motion.h1>
        <div className="space-y-8 text-left text-base font-light leading-relaxed text-[#898989]">
          <motion.p {...fadeUp(0.12)}>
            The modern internet is a machine designed to harvest attention. It prioritizes outrage over nuance, speed
            over depth, and engagement over truth.
          </motion.p>
          <motion.p {...fadeUp(0.15)}>
            We believe there is a better way. Mindloop was built on a simple premise: your attention is your most
            valuable asset. It should be invested, not spent.
          </motion.p>
          <motion.div {...fadeUp(0.18)} className="my-10 border-l-2 border-[#242424] py-2 pl-8">
            <p className="font-display text-xl font-semibold leading-snug text-[#242424] md:text-2xl">
              &ldquo;We are what we repeatedly consume. Excellence, then, is not an act, but a habit of the mind.&rdquo;
            </p>
          </motion.div>
          <motion.p {...fadeUp(0.22)}>
            By stripping away the metrics, the infinite scrolls, and the algorithmic manipulation, we return the power of
            choice to you. Read deeply. Think clearly.
          </motion.p>
        </div>
      </section>
      <CTA />
    </>
  );
}
