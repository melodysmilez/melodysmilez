import Link from "next/link";
import { Sparkles } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Learning", "/learning"],
  ["Music", "/music"],
  ["My World", "/my-world"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fffaf6]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-full bg-[#251f28] text-white">
            <Sparkles size={17} />
          </span>
          MelodySmilez
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-[#f7d5df]">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/#contact" className="rounded-full bg-[#251f28] px-4 py-2 text-sm font-bold text-white transition hover:scale-105">
          Say hello
        </Link>
      </div>
    </header>
  );
}
