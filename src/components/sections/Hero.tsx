import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
      />
      <div className="overlay-scrim absolute inset-0 z-[1]" />
      <div className="absolute inset-0 z-[2] bg-black/20" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-28 text-center md:pt-32">
        <motion.p {...fadeUp(0.1)} className="text-micro mb-8 text-[rgba(240,240,250,0.65)]">
          NEWSLETTER · UI CONCEPT (NO LIVE LIST)
        </motion.p>

        <motion.h1 {...fadeUp(0.2)} className="text-display-hero mb-8 max-w-4xl">
          GET INSPIRED WITH US
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-caption mb-12 max-w-2xl text-[rgba(240,240,250,0.85)]">
          Join our feed for meaningful updates, news around technology, and a shared journey toward depth and direction.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex w-full max-w-lg flex-col overflow-hidden rounded-[32px] border border-[rgba(240,240,250,0.35)] bg-[rgba(240,240,250,0.06)] sm:flex-row"
        >
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="min-w-0 flex-1 border-none bg-transparent px-5 py-4 text-caption text-[#f0f0fa] outline-none placeholder:text-[rgba(240,240,250,0.45)]"
            required
          />
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="button"
            className="text-nav-bold border-t border-[rgba(240,240,250,0.35)] bg-[rgba(240,240,250,0.1)] px-8 py-4 text-[#f0f0fa] transition-colors hover:bg-[rgba(240,240,250,0.18)] hover:text-white sm:border-l sm:border-t-0"
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
