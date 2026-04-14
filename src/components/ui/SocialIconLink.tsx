import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface SocialIconLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

export function SocialIconLink({ href, label, icon: Icon }: SocialIconLinkProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-[32px] border border-[rgba(240,240,250,0.35)] bg-[rgba(240,240,250,0.1)] text-[#f0f0fa] transition-colors hover:bg-[rgba(240,240,250,0.18)] hover:text-white"
    >
      <Icon className="h-4 w-4" aria-hidden />
    </motion.a>
  );
}
