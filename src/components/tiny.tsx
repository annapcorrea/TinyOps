"use client";

import { useTinyMood, type TinyMood } from "@/components/tiny-mood";

// Original blob. Same round body every mood; only the face (and a hop) changes.
const COLORS: Record<string, string> = {
  o: "#140018",
  b: "#c026d3",
  h: "#f9a8d4",
  w: "#fff4c8",
  k: "#140018",
  m: "#140018",
  s: "#fff4c8",
  z: "#d6ff4a",
  c: "#d6ff4a",
};

const FRAMES: Record<TinyMood, string[]> = {
  drowsy: [
    "....oooo.z..",
    "..oobbbboo..",
    ".oobhhhhboo.",
    "oobbkkkkbboo",
    "oobbkkkkbboo",
    "oobbhhhhbboo",
    "oobbhhkkbboo",
    "..oobbbboo..",
    "....oooo....",
  ],
  uneasy: [
    "....oooo....",
    "..oobbbboo..",
    ".oobhhhhboo.",
    "oobwwbbwwboo",
    "ookkbbbbkkoo",
    "oobbhhhhbboo",
    "oobmmmmmmboo",
    "..oobbbboo..",
    "....oooo....",
  ],
  calm: [
    "....oooo....",
    "..oobbbboo..",
    ".oobhhhhboo.",
    "oobwwbbwwboo",
    "oobwkbbwkbbo",
    "oobbhhhhbboo",
    "oobbhkkhbboo",
    "..oobbbboo..",
    "....oooo....",
  ],
  smiling: [
    "....oooo....",
    "..oobbbboo..",
    ".oobhhhhboo.",
    "oobkkbbkkboo",
    "oobwwbbwwboo",
    "oobbhhhhbboo",
    "oommhhhhmmmo",
    "..oommmmmoo.",
    "....oooo....",
  ],
  delighted: [
    "....oooo....",
    "..oobbbboo..",
    ".oocbhhhbcoo",
    "oobwwbbwwboo",
    "oobkkbbkkboo",
    "oocbhhhhbcoo",
    "obbmmssmmbbo",
    "..oobbbboo..",
    "....oooo....",
  ],
};

export function Tiny({ pixel = 4 }: { pixel?: number }) {
  const { mood } = useTinyMood();
  const frame = FRAMES[mood];
  const cols = frame[0].length;

  return (
    <div
      role="img"
      aria-label={`Tiny, feeling ${mood}`}
      className={`mx-auto ${mood === "delighted" ? "tiny-hop" : ""}`}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${pixel}px)`,
          width: cols * pixel,
          height: frame.length * pixel,
        }}
      >
        {frame.map((row, y) =>
          row.split("").map((cell, x) => (
            <span
              key={`${y}-${x}`}
              style={{
                width: pixel,
                height: pixel,
                background: COLORS[cell] ?? "transparent",
              }}
            />
          )),
        )}
      </div>
    </div>
  );
}
