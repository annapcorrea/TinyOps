"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// Moods are a preview prop for now. Task completion will drive them later.
export const TINY_MOODS = ["drowsy", "uneasy", "calm", "smiling", "delighted"] as const;

export type TinyMood = (typeof TINY_MOODS)[number];

type TinyMoodContextValue = {
  mood: TinyMood;
  setMood: (mood: TinyMood) => void;
};

const TinyMoodContext = createContext<TinyMoodContextValue | null>(null);

export function TinyMoodProvider({ children }: { children: ReactNode }) {
  const [mood, setMood] = useState<TinyMood>("calm");

  return <TinyMoodContext.Provider value={{ mood, setMood }}>{children}</TinyMoodContext.Provider>;
}

export function useTinyMood() {
  const value = useContext(TinyMoodContext);
  if (!value) {
    throw new Error("useTinyMood must be used inside TinyMoodProvider");
  }
  return value;
}
