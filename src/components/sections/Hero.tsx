import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
      />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-32 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-8">
          <div className="flex -space-x-2">
            <img
              src="https://picsum.photos/seed/avatar1/100/100"
              alt="Decorative avatar stack, first"
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
            <img
              src="https://picsum.photos/seed/avatar2/100/100"
              alt="Decorative avatar stack, second"
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
            <img
              src="https://picsum.photos/seed/avatar3/100/100"
              alt="Decorative avatar stack, third"
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
          </div>
          <span className="text-muted-foreground text-sm">Newsletter signup — UI concept (no live list)</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6">
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-lg text-hero-subtitle max-w-2xl mb-12">
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="w-full max-w-lg">
          <form className="liquid-glass rounded-full p-2 flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none px-6 text-foreground placeholder:text-muted-foreground"
              required
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="bg-foreground text-background rounded-full px-8 py-3 font-medium text-sm"
            >
              SUBSCRIBE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
