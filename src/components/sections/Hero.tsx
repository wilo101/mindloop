import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

export function Hero() {
  return (
    <section className="bg-white pb-20 pt-8 md:pb-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.p {...fadeUp(0.05)} className="mb-4 text-caption-cal">
          Newsletter · UI concept (no live list)
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} className="text-display-hero mb-6 max-w-3xl">
          Get inspired with us
        </motion.h1>
        <motion.p {...fadeUp(0.15)} className="text-body-muted mb-12 max-w-xl">
          Join our feed for meaningful updates, news around technology, and a shared journey toward depth and direction.
        </motion.p>
      </div>

      <motion.div {...fadeUp(0.2)} className="mx-auto mb-12 max-w-5xl px-6">
        <div className="shadow-cal-card aspect-video overflow-hidden rounded-2xl bg-[#f5f5f5]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
          />
        </div>
      </motion.div>

      <motion.div {...fadeUp(0.25)} className="mx-auto flex max-w-lg flex-col gap-3 px-6 sm:flex-row sm:items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="input-cal min-w-0 flex-1"
          required
        />
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="button"
          className="btn-cal-primary shrink-0 px-8"
        >
          Subscribe
        </motion.button>
      </motion.div>
    </section>
  );
}
