import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

export function Solution() {
  const features = [
    {
      title: "Curated Feed",
      desc: "Discover content that matters, tailored to your interests without the noise.",
    },
    {
      title: "Writer Tools",
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
    <section className="py-32 md:py-44 border-t border-border/30 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.p {...fadeUp(0.1)} className="text-xs tracking-[3px] uppercase text-muted-foreground mb-6">
          SOLUTION
        </motion.p>
        <motion.h2 {...fadeUp(0.2)} className="text-4xl md:text-6xl font-medium tracking-[-1px]">
          The platform for <span className="font-serif italic font-normal">meaningful</span> content
        </motion.h2>
      </div>

      <motion.div {...fadeUp(0.3)} className="w-full aspect-[3/1] rounded-2xl overflow-hidden liquid-glass p-1 mb-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
        />
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div key={feature.title} {...fadeUp(0.4 + i * 0.1)}>
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
