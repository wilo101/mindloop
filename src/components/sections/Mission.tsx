import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Fragment, useRef, type ReactNode } from "react";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight?: boolean;
}

function Word({ children, progress, range, highlight }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.25em] font-display uppercase ${highlight ? "text-[#f0f0fa] font-bold" : "text-[rgba(240,240,250,0.55)]"}`}
    >
      {children}
    </motion.span>
  );
}

export function Mission() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 20%"],
  });

  const p1 =
    "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
  const p2 =
    "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

  const words1 = p1.split(" ");
  const words2 = p2.split(" ");

  const totalWords = words1.length + words2.length;

  const wordLine = (words: string[], offset: number): ReactNode[] =>
    words.map((word, i) => {
      const start = (offset + i) / totalWords;
      const end = start + 1 / totalWords;
      const isHighlight = ["curiosity", "meets", "clarity"].includes(word.replace(/[—,.]/g, ""));
      return (
        <Fragment key={`${offset}-${i}`}>
          <Word progress={scrollYProgress} range={[start, end]} highlight={isHighlight}>
            {word}
          </Word>
        </Fragment>
      );
    });

  return (
    <section ref={container} className="flex flex-col items-center px-6 pb-32 pt-0 md:pb-44 max-w-6xl mx-auto">
      <div className="relative mb-24 aspect-square w-full max-w-[800px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl text-center font-display">
        <p className="flex flex-wrap justify-center text-xl font-bold uppercase leading-tight tracking-[0.06em] md:text-3xl lg:text-4xl">
          {wordLine(words1, 0)}
        </p>
        <p className="mt-10 flex flex-wrap justify-center text-lg font-bold uppercase leading-relaxed tracking-[0.06em] md:text-xl lg:text-2xl">
          {wordLine(words2, words1.length)}
        </p>
      </div>
    </section>
  );
}
