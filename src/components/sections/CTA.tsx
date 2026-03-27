import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Hls from "hls.js";
import { fadeUp } from "../../lib/animations";

export function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        <motion.div
          {...fadeUp(0.1)}
          className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/60 mb-8"
        >
          <div className="w-5 h-5 rounded-full border border-foreground/60" />
        </motion.div>

        <motion.h2 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-medium tracking-[-2px] mb-6">
          Start Your <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>

        <motion.p {...fadeUp(0.3)} className="text-muted-foreground text-lg mb-10">
          A full-bleed closing band: picture-in-copy over stream, glass buttons, and the same typographic scale as the
          hero—built as a visual study, not a live product funnel.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="bg-foreground text-background rounded-lg px-8 py-3.5 font-medium text-sm w-full sm:w-auto"
          >
            Subscribe Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="liquid-glass rounded-lg px-8 py-3.5 font-medium text-sm w-full sm:w-auto"
          >
            Start Writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
