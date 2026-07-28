"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, posts } from "@/lib/content";

export function FilterablePosts() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <>
      <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button key={category} onClick={() => setActive(category)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition ${active === category ? "border-[#251f28] bg-[#251f28] text-white" : "border-black/10 bg-white/70 hover:bg-[#f7d5df]"}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((post) => (
          <Link href={`/learning/${post.slug}`} key={post.slug} className="card lift group overflow-hidden rounded-[2rem] bg-white">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={post.hero} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[.18em] text-black/50">
                <span>{post.category}</span><ArrowUpRight size={17} />
              </div>
              <h2 className="serif text-3xl font-bold leading-tight">{post.title}</h2>
              <p className="mt-3 leading-7 text-black/60">{post.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-black/45">{post.date} · {post.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
