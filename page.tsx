import type { Metadata } from "next";
import { FilterablePosts } from "@/components/FilterablePosts";

export const metadata: Metadata = { title: "Learning" };

export default function LearningPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <header className="mb-14 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
        <h1 className="serif text-6xl font-bold leading-[.9] tracking-[-.045em] sm:text-8xl">A notebook for<br/><span className="italic text-black/35">becoming.</span></h1>
        <p className="max-w-xl text-lg leading-8 text-black/60">Essays, questions, field notes, and unfinished thoughts about the subjects that keep pulling me back.</p>
      </header>
      <FilterablePosts />
    </div>
  );
}
