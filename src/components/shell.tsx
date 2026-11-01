import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-6 sm:px-8 sm:py-10">
      <header className="flex items-start justify-between gap-3 sm:items-end">
        <div className="-rotate-2">
          <p className="font-display text-5xl leading-none text-cream [text-shadow:4px_4px_0_#ff2bd6] sm:text-7xl">
            tiny<span className="text-zest">ops</span>
          </p>
          <p className="mt-3 inline-block rotate-1 bg-pop px-2 py-1 font-display text-sm text-ink sm:text-base">
            pocket task desk
          </p>
        </div>
        <div
          aria-label="Slot for Tiny"
          className="w-24 shrink-0 rotate-6 border-4 border-ink bg-cream px-2 py-2 text-center text-ink shadow-[6px_6px_0_#d6ff4a] sm:w-32 sm:px-3 sm:py-3"
        >
          <div className="mx-auto mb-2 h-12 w-12 rounded-full border-4 border-dashed border-ink bg-[#e9d5ff] sm:h-16 sm:w-16" />
          <p className="font-display text-[11px] leading-tight sm:text-sm">tiny sits here</p>
        </div>
      </header>
      <main className="flex flex-1 items-start py-10 sm:py-16">{children}</main>
    </div>
  );
}
