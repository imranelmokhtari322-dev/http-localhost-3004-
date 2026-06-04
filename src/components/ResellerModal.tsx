import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Send, TrendingUp, Key, Users, Sparkles } from "lucide-react";

interface ResellerModalProps { isOpen: boolean; onClose: () => void; }

export default function ResellerModal({ isOpen, onClose }: ResellerModalProps) {
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [phone, setPhone] = useState("");
  const [desiredCredits, setDesiredCredits] = useState("50_credits"); const [isSubmitting, setIsSubmitting] = useState(false); const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); if (!name||!email||!phone){alert("Vul alle velden in!");return;} setIsSubmitting(true); setTimeout(()=>{setIsSubmitting(false);setIsSuccess(true);},2000); };
  const usps = [
    {icon:<TrendingUp className="w-4 h-4 text-white"/>,title:"Hoge Winstmarges",desc:"Koop credits vanaf €2,50/maand per lijn en verkoop voor €10-€15+."},
    {icon:<Key className="w-4 h-4 text-white"/>,title:"Volledig Beheerpaneel",desc:"Zelf playlists genereren, accounts aanpassen en trials aanmaken."},
    {icon:<Users className="w-4 h-4 text-white"/>,title:"100% White Label",desc:"Je verkoopt onder je eigen merknaam. Klanten zien SwivTV nooit."},
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.95}}
            className="relative w-full max-w-2xl bg-dark-card border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 text-white max-h-[92vh] overflow-y-auto">
            <button onClick={onClose} className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-white/5 text-white/50 hover:text-white text-xs font-bold">Sluiten</button>
            <div className="text-left mb-6">
              <span className="text-[10px] uppercase font-mono text-white/40 font-bold tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-3 inline-block">PARTNER PROGRAMMA</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">Start je eigen IPTV Onderneming</h2>
              <p className="text-xs text-white/50 mt-1">Word IPTV reseller van SwivTV en verdien maandelijks een stabiel passief inkomen.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-5 flex flex-col gap-4 text-left">
                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest font-mono border-b border-white/5 pb-2">Waarom SwivTV Reseller?</h3>
                {usps.map((u,i)=>(
                  <div key={i} className="flex gap-3 text-xs">
                    <div className="p-2 h-fit rounded-lg bg-white/5 border border-white/10 shrink-0 mt-0.5">{u.icon}</div>
                    <div><h4 className="font-bold text-white mb-0.5">{u.title}</h4><p className="text-white/40 leading-relaxed text-[11px]">{u.desc}</p></div>
                  </div>
                ))}
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[10px] text-white/50 mt-2">
                  <span className="font-bold text-white">Start vanaf €250</span> — direct omgezet in credits op je dashboard.
                </div>
              </div>
              <div className="md:col-span-7 bg-dark-bg/60 border border-white/5 rounded-2xl p-5">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
                      <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5 font-mono"><Sparkles className="w-4 h-4"/>Vrijblijvende Aanvraag</h4>
                      {[{label:"Naam:",val:name,set:setName,type:"text",ph:"bijv. Sander de Groot"},{label:"E-mail:",val:email,set:setEmail,type:"email",ph:"sander@gmail.com"},{label:"WhatsApp:",val:phone,set:setPhone,type:"tel",ph:"+31 6 12345678"}].map(f=>(
                        <div key={f.label}>
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1 font-mono">{f.label}</label>
                          <input type={f.type} required value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.ph}
                            className="w-full bg-dark-bg border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/30"/>
                        </div>
                      ))}
                      <div>
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1 font-mono">Credits:</label>
                        <select value={desiredCredits} onChange={e=>setDesiredCredits(e.target.value)} className="w-full bg-dark-bg border border-white/10 rounded-lg py-2 px-3 text-xs text-white focus:outline-none">
                          <option value="test_only">Gratis testpaneel aanvragen</option>
                          <option value="50_credits">Brons (50 credits)</option>
                          <option value="200_credits">Zilver (200 credits)</option>
                          <option value="500_credits">Goud (500 credits)</option>
                        </select>
                      </div>
                      <button type="submit" disabled={isSubmitting}
                        className="w-full mt-3 py-3 rounded-xl bg-white text-black hover:bg-gray-100 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 disabled:opacity-50 transition-all cursor-pointer">
                        {isSubmitting?"Versturen...":<><Send className="w-3.5 h-3.5"/><span>Aanvraag versturen</span></>}
                      </button>
                    </form>
                  ):(
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="py-10 text-center flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center mb-1"><Check className="w-6 h-6 stroke-[3]"/></div>
                      <h4 className="text-base font-bold text-white">Aanvraag Ontvangen!</h4>
                      <p className="text-xs text-white/50 max-w-xs mx-auto">Bedankt <strong className="text-white">{name}</strong>. We nemen binnen 30 minuten contact op via <strong className="text-white">{phone}</strong>.</p>
                      <button onClick={()=>{setIsSuccess(false);setName("");setEmail("");setPhone("");onClose();}}
                        className="mt-4 px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs hover:bg-white/10 font-medium transition-colors">Sluiten</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
