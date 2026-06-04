const sports = [
  { name: "Voetbal",    sub: "EREDIVISIE, CHAMPIONS LEAGUE", img: "/assets/sports/voetbal.jpg"    },
  { name: "Hockey",     sub: "HOOFDKLASSE",                  img: "/assets/sports/hockey.jpg"     },
  { name: "Schaatsen",  sub: "WORLD CUP, NK",                img: "/assets/sports/schaatsen.jpg"  },
  { name: "Wielrennen", sub: "TOUR, GIRO, VUELTA",           img: "/assets/sports/wielrennen.jpg" },
  { name: "Tennis",     sub: "GRAND SLAMS",                  img: "/assets/sports/tennis.jpg"     },
  { name: "Padel",      sub: "PADEL PREMIUM",                img: "/assets/sports/padel.jpg"      },
  { name: "Formule 1",  sub: "F1, F2, F3",                   img: "/assets/sports/formule1.jpg"   },
  { name: "Volleybal",  sub: "EREDIVISIE, EK",               img: "/assets/sports/volleybal.jpg"  },
  { name: "Golf",       sub: "PGA TOUR, MASTERS",            img: "/assets/sports/golf.jpg"       },
  { name: "Zwemmen",    sub: "WK, EK, NK",                   img: "/assets/sports/zwemmen.jpg"    },
];

export default function SportCategories() {
  return (
    <section className="py-16 border-b border-white/5 overflow-hidden bg-dark-bg" id="sport-categories-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase font-mono text-white/50 font-bold tracking-widest block mb-2">VAN EREDIVISIE TOT FORMULE 1</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white">Alle Sporten Live in 4K</h2>
        </div>
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="animate-scroll">
            <div className="flex gap-4 px-2">
              {[...sports, ...sports].map((sport, i) => (
                <div key={i} className="group relative flex-shrink-0 w-[160px] sm:w-[180px] h-[260px] sm:h-[290px] rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                  <img src={sport.img} alt={sport.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-extrabold text-base leading-tight">{sport.name}</h3>
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-0.5 font-mono">{sport.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
