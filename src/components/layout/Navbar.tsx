import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { SocialIconLink } from "../ui/SocialIconLink";

export function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Philosophy", path: "/philosophy" },
    { name: "Use Cases", path: "/use-cases" },
  ];

  return (
    <nav
      className="fixed top-0 z-50 w-full px-8 md:px-28 py-4 bg-transparent flex items-center justify-between"
      aria-label="Primary"
    >
      <Link to="/" className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60">
          <div className="w-3 h-3 rounded-full border border-foreground/60" />
        </div>
        <span className="font-bold text-lg tracking-tight">Mindloop</span>
      </Link>

      <div className="hidden md:flex items-center gap-6 text-sm">
        {links.map((item, i, arr) => (
          <div key={item.name} className="flex items-center gap-6">
            <Link
              to={item.path}
              className={cn(
                "transition-colors",
                pathname === item.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.name}
            </Link>
            {i < arr.length - 1 && <span className="text-muted-foreground/40">•</span>}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <SocialIconLink href="#" label="Instagram" icon={Instagram} />
        <SocialIconLink href="#" label="LinkedIn" icon={Linkedin} />
        <SocialIconLink href="#" label="Twitter" icon={Twitter} />
      </div>
    </nav>
  );
}
