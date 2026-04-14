export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-[rgba(34,42,53,0.08)] bg-white px-6 py-14 md:flex-row md:px-24">
      <div className="text-caption-cal text-[#898989]">© 2026 Mindloop. All rights reserved.</div>
      <nav className="flex items-center gap-8 text-sm font-medium text-[#111111]" aria-label="Footer">
        <a href="#" className="transition-opacity hover:opacity-70">
          Privacy
        </a>
        <a href="#" className="transition-opacity hover:opacity-70">
          Terms
        </a>
        <a href="#" className="transition-opacity hover:opacity-70">
          Contact
        </a>
      </nav>
    </footer>
  );
}
