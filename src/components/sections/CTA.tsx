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
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden border-t border-[rgba(34,42,53,0.08)] bg-[#f5f5f5] py-24">
      <div className="shadow-cal-card relative z-10 mx-6 mb-10 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-[#111]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <motion.h2 {...fadeUp(0.1)} className="text-section-title mb-6">
          Start your journey
        </motion.h2>
        <motion.p {...fadeUp(0.15)} className="text-body-muted mb-10">
          A full-bleed closing band with stream-backed imagery and monochrome CTAs — a visual study, not a live product
          funnel.
        </motion.p>
        <motion.div {...fadeUp(0.2)} className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" className="btn-cal-primary shrink-0 px-8">
            Subscribe now
          </motion.button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" className="btn-cal-secondary shrink-0 px-8">
            Start writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
