import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, X, Shield, MoreHorizontal } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  onScrollTo: (selector: string) => void;
  onOpenReseller: () => void;
}

export default function Header({ onScrollTo, onOpenReseller }: HeaderProps) {
  const [showPromo, setShowPromo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems: [string, string][] = [
    ["Kanalen",   "#channels-section"],
    ["Voordelen", "#advantages-section"],
    ["Prijzen",   "#pricing-section"],
    ["FAQ",       "#faq-section"],
  ];

  return (
    <>
      <AnimatePresence>
        {showPromo && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
            className="relative bg-black text-white py-3 px-4 text-center text-xs sm:text-sm font-medium z-50 flex items-center justify-center gap-1.5">
            <span>🔥 3 MAANDEN GRATIS bij elk 12-maanden abonnement!</span>
            <button onClick={() => setShowPromo(false)} className="absolute right-4 p-1 text-white/60 hover:text-white"><X className="w-3.5 h-3.5" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-40 bg-dark-bg/90 backdrop-blur-md border-b border-white/5 shadow-lg" id="main-app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <div onClick={() => onScrollTo("#hero-section")} className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all">
              <Logo size={28} />
            </div>
            <span className="text-3xl text-white" style={{ fontFamily: "'Lilita One', cursive" }}>SwivTV</span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a href="https://wa.me/31600000000" target="_blank" rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white hover:bg-white/20 transition-all">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <Phone className="w-3.5 h-3.5" /> WhatsApp 24/7
            </a>

            <button onClick={() => onScrollTo("#pricing-section")}
              className="px-5 py-2 rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 font-bold text-xs tracking-wide transition-all hover:scale-[1.02] cursor-pointer shadow-md shadow-blue-500/20">
              Bekijk prijzen
            </button>

            {/* 3-dot menu */}
            <div className="relative" ref={menuRef}>
              <button onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all cursor-pointer">
                <MoreHorizontal className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 bg-dark-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                  >
                    {navItems.map(([label, id]) => (
                      <button key={id}
                        onClick={() => { setMenuOpen(false); onScrollTo(id); }}
                        className="w-full px-4 py-3 text-left text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium border-b border-white/5 last:border-0">
                        {label}
                      </button>
                    ))}
                    <button
                      onClick={() => { setMenuOpen(false); onOpenReseller(); }}
                      className="w-full px-4 py-3 text-left text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5" /> Reseller
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
