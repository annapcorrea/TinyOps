import { MoodDial } from "@/components/mood-dial";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
      <section className="max-w-xl -rotate-1 border-4 border-ink bg-cream p-5 text-ink shadow-[8px_8px_0_#ff2bd6] sm:-rotate-2 sm:p-8 sm:shadow-[12px_12px_0_#ff2bd6]">
        <h1 className="font-display text-3xl leading-tight sm:text-5xl">
          Tasks live in the server&apos;s pocket. Tiny gets goofier when you finish them.
        </h1>
      </section>
      <MoodDial />
      <p className="absolute -bottom-6 right-2 rotate-3 border-4 border-ink bg-zest px-3 py-1 font-display text-sm text-ink shadow-[4px_4px_0_#140018] sm:right-10 sm:text-base">
        0 tasks. full volume.
      </p>
    </div>
  );
}
