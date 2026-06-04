import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ChevronRight, Menu, X, Shield } from "lucide-react";

interface HeaderProps {
  onScrollTo: (selector: string) => void;
  onOpenReseller: () => void;
}

export default function Header({ onScrollTo, onOpenReseller }: HeaderProps) {
  const [showPromo, setShowPromo] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {showPromo && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
            className="relative bg-black text-white py-3 px-4 text-center text-xs sm:text-sm font-medium z-50 flex items-center justify-center gap-1.5">
            <span className="inline-flex items-center gap-1">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              🎉 <strong>TIJDELIJKE ACTIE:</strong> 3 MAANDEN GRATIS bij elk 12-maanden abonnement!
            </span>
            <button onClick={() => onScrollTo("#pricing-section")} className="underline hover:text-gray-300 ml-1.5 inline-flex items-center font-bold transition-colors">
              Bekijk aanbod <ChevronRight className="w-3.5 h-3.5 inline" />
            </button>
            <button onClick={() => setShowPromo(false)} className="absolute right-4 p-1 text-white/60 hover:text-white"><X className="w-3.5 h-3.5" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-40 bg-dark-bg/90 backdrop-blur-md border-b border-white/5 shadow-lg" id="main-app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div onClick={() => onScrollTo("#hero-section")} className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all">
              <div className="w-4 h-4 rotate-45 border-2 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <span className="text-xl font-bold font-display tracking-tight text-white">SwivTV</span>
              <span className="text-[9px] text-white/40 font-mono tracking-widest block -mt-1 leading-none uppercase">Premium IPTV</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/60">
            {[["Kanalen","#channels-section"],["Voordelen","#advantages-section"],["Prijzen","#pricing-section"],["FAQ","#faq-section"]].map(([label, id]) => (
              <button key={id} onClick={() => onScrollTo(id)} className="hover:text-white transition-colors cursor-pointer py-1">{label}</button>
            ))}
            <button onClick={onOpenReseller} className="hover:text-white transition-colors cursor-pointer py-1 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Reseller
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/31600000000" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white hover:bg-white/20 transition-all">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <Phone className="w-3.5 h-3.5" /> WhatsApp Support 24/7
            </a>
            <button onClick={() => onScrollTo("#pricing-section")} className="px-5 py-2 rounded-xl text-black bg-white hover:bg-gray-100 font-bold text-xs tracking-wide transition-all hover:scale-[1.02] cursor-pointer">
              Bekijk prijzen
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a href="https://wa.me/31600000000" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 border border-white/20 text-white">
              <Phone className="w-4 h-4" />
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/5 bg-dark-bg/95 px-4 py-6 flex flex-col gap-4 text-center shadow-2xl">
              {[["Kanalen","#channels-section"],["Voordelen","#advantages-section"],["Prijzen","#pricing-section"],["FAQ","#faq-section"]].map(([label, id]) => (
                <button key={id} onClick={() => { setMobileMenuOpen(false); onScrollTo(id); }} className="text-white/70 hover:text-white font-medium py-2 border-b border-white/5">{label}</button>
              ))}
              <button onClick={() => { setMobileMenuOpen(false); onOpenReseller(); }} className="text-white/70 font-medium py-2 border-b border-white/5 flex items-center justify-center gap-1.5">
                <Shield className="w-4 h-4" /> Wordt Reseller
              </button>
              <button onClick={() => { setMobileMenuOpen(false); onScrollTo("#pricing-section"); }} className="w-full mt-2 py-3 rounded-xl bg-white text-black font-bold">Bekijk Prijzen</button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
