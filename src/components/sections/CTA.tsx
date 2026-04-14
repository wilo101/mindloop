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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-t border-[rgba(240,240,250,0.12)]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-black/50" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
        <motion.h2 {...fadeUp(0.1)} className="text-display-hero mb-8 max-w-4xl">
          START YOUR JOURNEY
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-caption mb-12 max-w-2xl text-[rgba(240,240,250,0.75)]">
          A full-bleed closing band: stream-backed imagery, spectral type, and ghost CTAs — a visual study, not a live
          product funnel.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex w-full max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" className="btn-ghost w-full sm:w-auto">
            SUBSCRIBE NOW
          </motion.button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" className="btn-ghost w-full sm:w-auto">
            START WRITING
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
