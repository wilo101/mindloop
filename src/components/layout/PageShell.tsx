import type { ReactNode } from "react";

export interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden">
      {children}
    </main>
  );
}
