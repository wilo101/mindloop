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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      aria-label={label}
      className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-foreground/80 transition-colors"
    >
      <Icon className="w-4 h-4" aria-hidden />
    </motion.a>
  );
}
