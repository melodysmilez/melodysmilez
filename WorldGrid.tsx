"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { worldCategories, worldItems } from "@/lib/content";

export function WorldGrid() {
  const [active, setActive] = useState<(typeof worldCategories)[number]>("All");
  const visible = active === "All" ? worldItems : worldItems.filter((item) => item.category === active);

  return (
    <>
      <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
        {worldCategories.map((category) => (
          <button key={category} onClick={() => setActive(category)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition ${active === category ? "border-[#251f28] bg-[#251f28] text-white" : "border-black/10 bg-white/70 hover:bg-[#e5ddff]"}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="masonry">
        {visible.map((item) => {
          const content = (
            <article className="card lift group overflow-hidden rounded-[1.75rem] bg-white">
              <div className="overflow-hidden">
                <img src={item.image} alt={item.title} className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[.15em] text-black/45">
                  <span>{item.category}</span>{item.link && <ExternalLink size={15} />}
                </div>
                <h2 className="serif text-2xl font-bold">{item.title}</h2>
                <p className="mt-2 leading-6 text-black/60">{item.description}</p>
              </div>
            </article>
          );
          return item.link ? <a key={item.title} href={item.link} target="_blank" rel="noreferrer">{content}</a> : <div key={item.title}>{content}</div>;
        })}
      </div>
    </>
  );
}
