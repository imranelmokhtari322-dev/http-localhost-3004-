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
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">#1 IPTV in Nederland <span className="text-gradient-blue">volgens onze klanten</span></h2>
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
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-bold text-xs tracking-wide transition-all uppercase shadow-lg shadow-blue-500/25">
          Start WhatsApp Chat &rarr;
        </a>
      </div>

      {/* Payment methods */}
      <div className="max-w-3xl mx-auto px-4 mt-14">
        <p className="text-center text-[10px] uppercase font-mono tracking-widest text-white/30 font-bold mb-5">Veilig betalen via</p>
        <div className="flex flex-wrap items-center justify-center gap-3">

          {/* PayPal */}
          <div className="flex items-center gap-2 bg-blue-400/20 border border-blue-400/30 px-4 py-2.5 rounded-xl">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
            </svg>
            <span className="text-white text-xs font-bold">PayPal</span>
          </div>

          {/* Visa */}
          <div className="flex items-center gap-2 bg-blue-400/20 border border-blue-400/30 px-4 py-2.5 rounded-xl">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.05-.217h3.235c.412 0 .783.274.876.75l.8 4.248 1.976-4.998h2.175zm8.433 4.932c.008-1.938-2.678-2.045-2.66-2.91.006-.263.257-.543.806-.614.272-.035 1.023-.063 1.873.328l.334-1.557a5.108 5.108 0 0 0-1.776-.325c-1.876 0-3.196 .997-3.207 2.427-.012 1.057.943 1.645 1.663 1.995.74.358 .988.588.985.908-.005.49-.59.707-1.137.716-.955.015-1.51-.258-1.951-.464l-.344 1.609c.443.203 1.261.38 2.108.388 1.99 0 3.292-.983 3.306-2.501zm4.955 2.564H24.5l-1.59-7.496h-1.756c-.395 0-.729.23-.877.583l-3.088 7.5h2.16l.429-1.186h2.64l.082.599zm-2.298-2.813l1.083-2.986.623 2.986h-1.706zM11.37 8.262l-1.7 7.496H7.591l1.7-7.496h2.078z"/>
            </svg>
            <span className="text-white text-xs font-bold">Visa</span>
          </div>

          {/* Mastercard */}
          <div className="flex items-center gap-2 bg-blue-400/20 border border-blue-400/30 px-4 py-2.5 rounded-xl">
            <div className="relative flex items-center">
              <div className="w-5 h-5 rounded-full bg-[#eb001b]" />
              <div className="w-5 h-5 rounded-full bg-[#f79e1b] -ml-2.5 opacity-90" />
            </div>
            <span className="text-white text-xs font-bold">Mastercard</span>
          </div>

          {/* iDEAL */}
          <div className="flex items-center gap-2 bg-blue-400/20 border border-blue-400/30 px-4 py-2.5 rounded-xl">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3h8.5C16.09 3 19 6.13 19 10.5S16.09 18 11.5 18H3V3zm2 2v11h6.5c3.31 0 5.5-2.46 5.5-5.5S14.81 5 11.5 5H5zm2 2h4.5c1.93 0 3.5 1.57 3.5 3.5S13.43 14 11.5 14H7V9z"/>
            </svg>
            <span className="text-white text-xs font-bold">iDEAL</span>
          </div>

          {/* Bankoverschrijving */}
          <div className="flex items-center gap-2 bg-blue-400/20 border border-blue-400/30 px-4 py-2.5 rounded-xl">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zm-8 9h19v-3H2v3zm14-9v7h3v-7h-3zM11.5 1L2 6v2h19V6l-9.5-5z"/>
            </svg>
            <span className="text-white text-xs font-bold">Bankoverschrijving</span>
          </div>

          {/* Klarna */}
          <div className="flex items-center gap-2 bg-blue-400/20 border border-blue-400/30 px-4 py-2.5 rounded-xl">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14H9V8h2v8zm4 0h-2v-4.5c0-.828-.672-1.5-1.5-1.5H11V8h.5C13.985 8 15 9.015 15 11.5V16z"/>
            </svg>
            <span className="text-white text-xs font-bold">Klarna</span>
          </div>

        </div>
      </div>
    </section>
  );
}
