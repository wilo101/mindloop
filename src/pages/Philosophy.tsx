import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";
import { CTA } from "../components";

export function Philosophy() {
  return (
    <>
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 pb-32 pt-44 text-center">
        <motion.h1 {...fadeUp(0.1)} className="text-display-hero mb-16">
          AGAINST THE ALGORITHM
        </motion.h1>
        <div className="space-y-8 text-left text-caption text-[rgba(240,240,250,0.75)]">
          <motion.p {...fadeUp(0.2)}>
            The modern internet is a machine designed to harvest attention. It prioritizes outrage over nuance, speed
            over depth, and engagement over truth.
          </motion.p>
          <motion.p {...fadeUp(0.3)}>
            We believe there is a better way. Mindloop was built on a simple premise: your attention is your most
            valuable asset. It should be invested, not spent.
          </motion.p>
          <motion.div {...fadeUp(0.4)} className="my-12 border-l-2 border-[rgba(240,240,250,0.35)] py-3 pl-8">
            <p className="text-nav-bold text-[#f0f0fa]">
              &ldquo;WE ARE WHAT WE REPEATEDLY CONSUME. EXCELLENCE, THEN, IS NOT AN ACT, BUT A HABIT OF THE MIND.&rdquo;
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
