import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

export function Solution() {
  const features = [
    {
      title: "Curated feed",
      desc: "Discover content that matters, tailored to your interests without the noise.",
    },
    {
      title: "Writer tools",
      desc: "Everything you need to craft, edit, and publish beautiful newsletters.",
    },
    {
      title: "Community",
      desc: "Engage with readers and other writers in a space designed for meaningful discussion.",
    },
    {
      title: "Distribution",
      desc: "Reach the right audience automatically through our intelligent recommendation engine.",
    },
  ];

  return (
    <section className="border-t border-[rgba(34,42,53,0.08)] bg-white px-6 py-24 md:py-28">
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <motion.p {...fadeUp(0.1)} className="text-caption-cal mb-4">
          Solution
        </motion.p>
        <motion.h2 {...fadeUp(0.12)} className="text-section-title mx-auto max-w-4xl">
          The platform for meaningful content
        </motion.h2>
      </div>

      <motion.div {...fadeUp(0.18)} className="relative mx-auto mb-16 max-w-6xl">
        <div className="shadow-cal-card aspect-[3/1] overflow-hidden rounded-2xl bg-[#f5f5f5]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
          />
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4 md:gap-8">
        {features.map((feature, i) => (
          <motion.div key={feature.title} {...fadeUp(0.22 + i * 0.06)}>
            <h3 className="font-display mb-2 text-base font-semibold text-[#242424]">{feature.title}</h3>
            <p className="text-sm font-light leading-relaxed text-[#898989]">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
