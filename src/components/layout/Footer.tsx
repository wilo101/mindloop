export function Footer() {
  return (
    <footer className="py-12 px-8 md:px-28 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border/10">
      <div className="text-muted-foreground text-sm">
        © 2026 Mindloop. All rights reserved.
      </div>
      <nav className="flex items-center gap-6 text-sm" aria-label="Footer">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Privacy
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Terms
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </a>
      </nav>
    </footer>
  );
}
