import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { SocialIconLink } from "../ui/SocialIconLink";

const LINKS = [
  { label: "HOME", path: "/" },
  { label: "HOW IT WORKS", path: "/how-it-works" },
  { label: "PHILOSOPHY", path: "/philosophy" },
  { label: "USE CASES", path: "/use-cases" },
] as const;

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="fixed top-0 z-50 w-full px-6 md:px-16 lg:px-24 py-5 flex items-center justify-between bg-transparent"
      aria-label="Primary"
    >
      <Link to="/" className="text-nav-bold text-[#f0f0fa] tracking-[1.17px] hover:text-white transition-colors">
        MINDLOOP
      </Link>

      <div className="hidden lg:flex items-center gap-10">
        {LINKS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "text-nav-bold transition-colors",
              pathname === item.path ? "text-[#f0f0fa]" : "text-[rgba(240,240,250,0.55)] hover:text-[#f0f0fa]",
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
