import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

export function Solution() {
  const features = [
    {
      title: "CURATED FEED",
      desc: "DISCOVER CONTENT THAT MATTERS, TAILORED TO YOUR INTERESTS WITHOUT THE NOISE.",
    },
    {
      title: "WRITER TOOLS",
      desc: "EVERYTHING YOU NEED TO CRAFT, EDIT, AND PUBLISH BEAUTIFUL NEWSLETTERS.",
    },
    {
      title: "COMMUNITY",
      desc: "ENGAGE WITH READERS AND OTHER WRITERS IN A SPACE DESIGNED FOR MEANINGFUL DISCUSSION.",
    },
    {
      title: "DISTRIBUTION",
      desc: "REACH THE RIGHT AUDIENCE AUTOMATICALLY THROUGH OUR INTELLIGENT RECOMMENDATION ENGINE.",
    },
  ];

  return (
    <section className="min-h-screen border-t border-[rgba(240,240,250,0.12)] px-6 py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-6xl text-center">
        <motion.p {...fadeUp(0.1)} className="text-micro mb-6 text-[rgba(240,240,250,0.55)]">
          SOLUTION
        </motion.p>
        <motion.h2 {...fadeUp(0.2)} className="text-display-hero mb-4 max-w-5xl mx-auto">
          THE PLATFORM FOR MEANINGFUL CONTENT
        </motion.h2>
      </div>

      <motion.div {...fadeUp(0.3)} className="relative mx-auto mb-20 w-full max-w-6xl">
        <div className="aspect-[3/1] w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4 md:gap-8">
        {features.map((feature, i) => (
          <motion.div key={feature.title} {...fadeUp(0.4 + i * 0.08)}>
            <h3 className="text-nav-bold mb-3 text-[#f0f0fa]">{feature.title}</h3>
            <p className="text-micro text-[rgba(240,240,250,0.55)] leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
