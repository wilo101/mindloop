import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { SocialIconLink } from "../ui/SocialIconLink";

const LINKS = [
  { label: "Home", path: "/" },
  { label: "How it works", path: "/how-it-works" },
  { label: "Philosophy", path: "/philosophy" },
  { label: "Use cases", path: "/use-cases" },
] as const;

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-transparent bg-white/95 px-6 py-4 shadow-nav backdrop-blur-sm md:px-12 lg:px-24"
      aria-label="Primary"
    >
      <Link to="/" className="font-display text-lg font-semibold tracking-tight text-[#111111]">
        Mindloop
      </Link>

      <div className="hidden items-center gap-10 lg:flex">
        {LINKS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "text-nav-link transition-opacity",
              pathname === item.path ? "text-[#111111] opacity-100" : "text-[#111111]/70 hover:opacity-100",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <SocialIconLink href="#" label="Instagram" icon={Instagram} />
        <SocialIconLink href="#" label="LinkedIn" icon={Linkedin} />
        <SocialIconLink href="#" label="Twitter" icon={Twitter} />
      </div>
    </nav>
  );
}
