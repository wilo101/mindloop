export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-[rgba(240,240,250,0.15)] px-6 py-12 md:flex-row md:px-24">
      <div className="text-micro text-[rgba(240,240,250,0.55)]">© 2026 MINDLOOP · ALL RIGHTS RESERVED</div>
      <nav className="flex items-center gap-8 text-micro" aria-label="Footer">
        <a href="#" className="text-[rgba(240,240,250,0.55)] transition-colors hover:text-[#f0f0fa]">
          PRIVACY
        </a>
        <a href="#" className="text-[rgba(240,240,250,0.55)] transition-colors hover:text-[#f0f0fa]">
          TERMS
        </a>
        <a href="#" className="text-[rgba(240,240,250,0.55)] transition-colors hover:text-[#f0f0fa]">
          CONTACT
        </a>
      </nav>
    </footer>
  );
}
