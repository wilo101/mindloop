import type { ReactNode } from "react";

export interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#242424] selection:bg-[#242424] selection:text-white">
      {children}
    </main>
  );
}
