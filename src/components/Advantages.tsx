import { Star, Calendar, Monitor } from "lucide-react";
import { motion } from "motion/react";

export default function Advantages() {
  const cards = [
    {
      icon: <Star className="w-6 h-6 text-white" />,
      gradient: "from-blue-500/30 to-blue-600/10",
      border: "border-blue-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
      title: "Prime Kwaliteit",
      description: "Premium 4K streamingkwaliteit, wanneer je maar wilt op al je favoriete zenders."
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      gradient: "from-violet-500/30 to-violet-600/10",
      border: "border-violet-500/20",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-700",
      title: "Flexibel",
      description: "Kies 3, 6 of 12 maanden. Volledig flexibel en aanpasbaar aan jouw wensen."
    },
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500/30 to-indigo-600/10",
      border: "border-indigo-500/20",
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-700",
      title: "Alle Apparaten",
      description: "Werkt op Smart TV, Fire Stick, telefoon, tablet, PC en vrijwel elke box."
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-16 border-b border-white/5" id="advantages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-glow p-6 rounded-2xl border ${card.border} bg-gradient-to-br ${card.gradient} bg-dark-card flex flex-col gap-4`}
            >
              <div className={`w-12 h-12 rounded-2xl ${card.iconBg} shadow-lg flex items-center justify-center`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-extrabold text-white">{card.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <span className="text-sm text-gradient-blue tracking-widest bg-white/5 border border-blue-400/20 px-3 py-1 rounded-full mb-6 inline-block uppercase" style={{ fontFamily: "'Modak', cursive" }}>
            23000+ TEVREDEN KLANTEN
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
            #1 IPTV in Nederland<br />
            <span className="text-gradient-blue">volgens onze klanten</span>
          </h2>
        </div>

      </div>
    </section>
  );
}
