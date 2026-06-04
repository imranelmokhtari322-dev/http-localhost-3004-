import { MessageSquare } from "lucide-react";

const ROW1 = Array.from({ length: 7 }, (_, i) => `/assets/reviews/chat-${i + 1}.png`);
const ROW2 = Array.from({ length: 6 }, (_, i) => `/assets/reviews/chat-${i + 8}.png`);

function PhoneFrame({ src, index }: { src: string; index: number }) {
  const rotations = [-3, 2, -2, 3, -1, 2, -3, 1, -2, 3, -1, 2, -3];
  const rot = rotations[index % rotations.length];
  return (
    <div style={{
      flexShrink: 0,
      position: "relative",
      padding: "20px 12px",
      transform: `rotate(${rot}deg)`,
    }}>
      <div style={{
        width: 165,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow:
          "0 8px 16px rgba(0,0,0,0.4), 0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(20,184,166,0.08)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}>
        <img
          src={src}
          alt="Klant review"
          style={{ width: "100%", height: "auto", display: "block" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}

function MarqueeRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const doubled = [...images, ...images];
  return (
    <div style={{ overflowX: "hidden", overflowY: "visible", width: "100%", padding: "16px 0" }}>
      <div className={reverse ? "animate-scroll-right" : "animate-scroll"} style={{ display: "flex", gap: 20, alignItems: "flex-end" }}>
        {doubled.map((src, i) => (
          <PhoneFrame key={i} src={src} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function WhatsAppReviews() {
  return (
    <section className="bg-dark-bg text-white py-16 border-b border-white/5" style={{ overflowX: "hidden" }} id="reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-mono text-white/40 font-bold tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-3 inline-block">23.000+ TEVREDEN KLANTEN</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">#1 IPTV in Nederland volgens onze klanten</h2>
          <p className="text-white/50 text-sm sm:text-base">We laten onze WhatsApp supportberichten spreken. Hier zijn echte onbewerkte reacties van klanten.</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%" }}>
        <MarqueeRow images={ROW1} />
        <MarqueeRow images={ROW2} reverse />
      </div>

      <div className="mt-10 text-center">
        <p className="text-xs text-white/40 mb-4 inline-flex items-center gap-1.5 justify-center">
          <MessageSquare className="w-4 h-4" /> Heb je zelf een vraag en wil je live met support praten?
        </p><br />
        <a href="https://wa.me/31600000000" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black hover:bg-gray-100 font-bold text-xs tracking-wide transition-all uppercase shadow-lg">
          Start WhatsApp Chat &rarr;
        </a>
      </div>
    </section>
  );
}
