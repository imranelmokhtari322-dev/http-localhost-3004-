export default function ChannelSearch() {
  const channelLogos = [
    { name: "F1 TV",       logo: "/assets/channels/f1.png"          },
    { name: "ESPN",        logo: "/assets/channels/espn.png"         },
    { name: "Viaplay",     logo: "/assets/channels/viaplay.png"      },
    { name: "Ziggo Sport", logo: "/assets/channels/ziggo-sport.png"  },
    { name: "Eurosport",   logo: "/assets/channels/eurosport.png"    },
    { name: "Sky Sport",   logo: "/assets/channels/sky-sports.png"   },
    { name: "DAZN",        logo: "/assets/channels/dazn.png"         },
  ];

  const doubled = [...channelLogos, ...channelLogos];

  const bigNames = ["CHAMPIONS LEAGUE","FORMULE 1","NPO","RTL","SBS","NETFLIX","ZIGGO SPORT","ESPN","VIAPLAY","EUROSPORT","HBO MAX","DISNEY+","VIDEOLAND","SKY SPORTS","DAZN"];
  const doubledNames = [...bigNames, ...bigNames];

  const accentWords = new Set(["CHAMPIONS LEAGUE","FORMULE 1","NETFLIX","ZIGGO SPORT","VIAPLAY","HBO MAX"]);

  return (
    <section className="relative bg-dark-bg text-white py-14 border-b border-white/5 overflow-hidden" id="channels-section">

      {/* Big scrolling names */}
      <div className="w-full overflow-hidden relative mb-12">
        <div className="animate-scroll whitespace-nowrap flex gap-16 py-3">
          {doubledNames.map((name, i) => (
            <span key={i} className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight select-none flex-shrink-0 ${accentWords.has(name) ? "text-gradient-blue opacity-100" : "text-white opacity-30"}`}>
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-sm text-gradient-blue tracking-widest block mb-1 uppercase" style={{ fontFamily: "'Modak', cursive" }}>LIVE TV</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">Al je favoriete <span className="text-gradient-blue">zenders</span></h2>
          </div>
          <span className="text-xs text-white/30 font-mono hidden sm:block">80.000+ kanalen</span>
        </div>

        {/* Auto-scrolling logos */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="animate-scroll-slow">
            <div className="flex gap-5 px-2">
              {doubled.map((ch, i) => (
                <div key={i} className="bg-white rounded-2xl flex items-center justify-center w-[140px] h-[90px] sm:w-[160px] sm:h-[100px] hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer flex-shrink-0 border border-white/10">
                  <img
                    src={ch.logo}
                    alt={ch.name}
                    className="w-[75%] h-[75%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
