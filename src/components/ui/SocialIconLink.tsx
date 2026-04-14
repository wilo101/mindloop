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
      className="flex h-9 w-9 items-center justify-center rounded-lg text-[#242424] shadow-cal-soft transition-opacity hover:opacity-70"
    >
      <Icon className="h-4 w-4" aria-hidden />
    </motion.a>
  );
}
