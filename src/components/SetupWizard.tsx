import { useState } from "react";
import { Tv, Cpu, Tablet, BookOpen, Smartphone, Laptop } from "lucide-react";

export default function SetupWizard() {
  const [selectedDevice, setSelectedDevice] = useState<"smart_tv"|"firestick"|"android"|"apple"|"pc">("smart_tv");
  const devices = [
    { id: "smart_tv",  label: "Smart TV (Samsung/LG)", icon: <Tv className="w-4 h-4" /> },
    { id: "firestick", label: "Amazon Fire Stick",     icon: <Cpu className="w-4 h-4" /> },
    { id: "android",   label: "Android TV / Box",      icon: <Tablet className="w-4 h-4" /> },
    { id: "apple",     label: "Apple TV / iOS",         icon: <Smartphone className="w-4 h-4" /> },
    { id: "pc",        label: "PC / Mac (Laptop)",      icon: <Laptop className="w-4 h-4" /> },
  ] as const;
  const instructions: Record<string, {step:string;text:string}[]> = {
    smart_tv:  [{step:"1",text:"Open de App Store op je Samsung of LG Smart TV."},{step:"2",text:"Zoek 'IPTV Smarters Pro', 'Flix IPTV' of 'IBO Player' en installeer."},{step:"3",text:"Selecteer 'Login met Xtream Codes API' of 'Load M3U playlist'."},{step:"4",text:"Vul je inloggegevens in die je per mail hebt ontvangen."}],
    firestick: [{step:"1",text:"Ga naar Settings → My Fire TV → Developer Options → Install unknown apps: AAN."},{step:"2",text:"Zoek en installeer 'Downloader' uit de Amazon Appstore."},{step:"3",text:"Open Downloader en download IPTV Smarters Pro of TiviMate."},{step:"4",text:"Voer je Xtream Codes gegevens in en begin met streamen!"}],
    android:   [{step:"1",text:"Open de Google Play Store op je Android TV of Shield."},{step:"2",text:"Zoek 'TiviMate IPTV Player' of 'IPTV Smarters Pro' en installeer."},{step:"3",text:"Selecteer 'Nieuwe afspeellijst toevoegen' → Xtream Codes login."},{step:"4",text:"Voer je SwivTV gegevens in. Zenderlijst wordt automatisch geladen."}],
    apple:     [{step:"1",text:"Open de App Store op je Apple TV, iPad of iPhone."},{step:"2",text:"Zoek en download 'GSE Smart IPTV', 'IPTV Smarters' of 'Aptv'."},{step:"3",text:"Ga naar 'Remote Playlists' of 'Xtream Codes API' en klik op '+'."},{step:"4",text:"Kopieer de M3U link uit je mail. Direct gesynchroniseerd!"}],
    pc:        [{step:"1",text:"Download 'VLC Media Player' of 'IPTV Smarters voor Windows'."},{step:"2",text:"Klik op 'Media' → 'Netwerkstream openen'."},{step:"3",text:"Plak de M3U playlist URL uit je SwivTV e-mail."},{step:"4",text:"Klik op 'Afspelen' en schakel tussen alle 23.500+ live zenders."}],
  };
  return (
    <section className="bg-dark-bg text-white py-16 border-b border-white/5" id="setup-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-mono text-white/40 font-bold tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-3 inline-block">STAP-VOOR-STAP INSTALLATIE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">Eenvoudige installatie op elk apparaat</h2>
          <p className="text-white/50 text-sm sm:text-base">Selecteer je apparaat en volg de simpele 4-stappen handleiding.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {devices.map((dev) => (
            <button key={dev.id} onClick={() => setSelectedDevice(dev.id)}
              className={`px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition-all gap-2 flex items-center cursor-pointer ${selectedDevice === dev.id ? "bg-white text-black shadow-md scale-[1.02]" : "bg-white/5 border border-white/10 text-white/60 hover:text-white"}`}>
              {dev.icon}<span>{dev.label}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            {instructions[selectedDevice].map((inst) => (
              <div key={inst.step} className="p-5 rounded-2xl border border-white/5 bg-dark-card flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono">{inst.step}</div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 uppercase font-mono tracking-wider">Stap {inst.step}</h4>
                  <p className="text-xs text-white/50 leading-relaxed">{inst.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl border border-white/5 bg-dark-card text-left">
            <div>
              <div className="flex items-center gap-2 text-white font-bold mb-4 font-mono text-xs tracking-wider uppercase">
                <BookOpen className="w-5 h-5" /><span>Support Garantie</span>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-3">Hulp nodig bij installatie?</h3>
              <p className="text-xs text-white/50 leading-relaxed mb-4">Kom je er niet helemaal uit? Onze helpdesk staat 24/7 voor je klaar via WhatsApp.</p>
              <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white/60 mb-2.5">
                <span className="font-bold text-white">Tip:</span> Installeer <strong className="text-white">IPTV Smarters Pro</strong> — de meest stabiele speler.
              </div>
            </div>
            <a href="https://wa.me/31600000000" target="_blank" rel="noreferrer"
              className="mt-6 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-black font-bold text-xs tracking-wide text-center uppercase shadow-lg block transition-colors">
              Vraag hulp gratis aan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
