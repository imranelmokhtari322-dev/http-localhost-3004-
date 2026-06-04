import React, { ReactNode } from "react";
import { TOP_MOVIES, TOP_SHOWS, TOP_SHOWS_INTL } from "../data";
import { Play } from "lucide-react";
import { MediaItem } from "../types";

const PosterCard: React.FC<{ item: MediaItem }> = ({ item }) => (
  <div className="group relative flex-shrink-0 w-[150px] sm:w-[170px] h-[230px] sm:h-[260px] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.04] transition-transform duration-300 shadow-xl">
    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
      <div className="p-3 rounded-full bg-white text-black scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
        <Play className="w-5 h-5 fill-black" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-3">
      <h4 className="text-white font-extrabold text-sm leading-tight line-clamp-1">{item.title}</h4>
      <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-0.5 font-mono line-clamp-1">{item.genre}</p>
    </div>
  </div>
);

function CarouselRow({ items, speed = "animate-scroll" }: { items: MediaItem[]; speed?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
      <div className={speed}>
        <div className="flex gap-4 px-2">
          {doubled.map((item, i) => <PosterCard key={`${item.id}-${i}`} item={item} />)}
        </div>
      </div>
    </div>
  );
}

const SectionRow: React.FC<{ label: string; title: string; badge: string; children: ReactNode }> = ({ label, title, badge, children }) => (
  <div className="mb-12">
    <div className="flex items-center justify-between mb-5">
      <div>
        <span className="text-[10px] uppercase font-mono text-white/40 font-bold tracking-widest block mb-1">{label}</span>
        <h2 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-white">{title}</h2>
      </div>
      <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest hidden sm:block">{badge}</span>
    </div>
    {children}
  </div>
);

export default function SportsAndEntertainment() {
  return (
    <section className="bg-dark-bg text-white py-14 border-b border-white/5 overflow-hidden" id="sports-entertainment-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionRow label="NU TRENDING" title="Top Films in Nederland" badge="DIRECT BESCHIKBAAR IN 4K">
          <CarouselRow items={TOP_MOVIES} speed="animate-scroll" />
        </SectionRow>

        <SectionRow label="NEDERLANDSE SERIES" title="Top TV Shows in Nederland" badge="EXCLUSIEVE CONTENT">
          <CarouselRow items={TOP_SHOWS} speed="animate-scroll-fast" />
        </SectionRow>

        <SectionRow label="INTERNATIONAAL TRENDING" title="Top Internationale Series" badge="WERELDWIJD POPULAIR">
          <CarouselRow items={TOP_SHOWS_INTL} speed="animate-scroll-fast" />
        </SectionRow>

      </div>
    </section>
  );
}
