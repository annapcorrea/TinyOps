"use client";

import { Tiny } from "@/components/tiny";
import { TINY_MOODS, useTinyMood } from "@/components/tiny-mood";

export function TinyMoodLabel() {
  const { mood } = useTinyMood();
  return <p className="mt-2 font-display text-[11px] leading-tight sm:text-sm">{mood}</p>;
}

export function MoodDial() {
  const { mood, setMood } = useTinyMood();

  return (
    <div className="w-full max-w-sm rotate-2 border-4 border-ink bg-pop p-3 text-ink shadow-[8px_8px_0_#d6ff4a] sm:p-4">
      <Tiny pixel={16} />
      <p className="mt-3 text-center font-display text-lg">{mood}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {TINY_MOODS.map((name) => {
          const selected = name === mood;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={selected}
              onClick={() => setMood(name)}
              className={`border-4 border-ink px-2 py-1 font-display text-xs sm:text-sm ${
                selected ? "bg-zest text-ink shadow-[3px_3px_0_#140018]" : "bg-cream text-ink"
              }`}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
