import { Channel, SportEvent, MediaItem, Testimonial, FAQItem, PricingSetup } from "./types";

export const CHANNELS_DATA: Channel[] = [
  // Dutch channels (NL)
  { id: "npo-1", name: "NPO 1 UHD", category: "NL", playingNow: "NOS Journaal - Live", quality: "4K", logoColor: "bg-red-600" },
  { id: "npo-2", name: "NPO 2 HD", category: "NL", playingNow: "Tegenlicht", quality: "FHD", logoColor: "bg-orange-500" },
  { id: "npo-3", name: "NPO 3 HD", category: "NL", playingNow: "Keuringsdienst van Waarde", quality: "FHD", logoColor: "bg-green-600" },
  { id: "rtl-4", name: "RTL 4 UHD", category: "NL", playingNow: "B&B Vol Liefde", quality: "4K", logoColor: "bg-blue-600" },
  { id: "rtl-5", name: "RTL 5 HD", category: "NL", playingNow: "112 Vandaag", quality: "FHD", logoColor: "bg-indigo-600" },
  { id: "rtl-7", name: "RTL 7 HD", category: "NL", playingNow: "Darts World Championship Live", quality: "FHD", logoColor: "bg-yellow-600" },
  { id: "rtl-8", name: "RTL 8 HD", category: "NL", playingNow: "Hart van Nederland", quality: "FHD", logoColor: "bg-pink-600" },
  { id: "sbs-6", name: "SBS 6 UHD", category: "NL", playingNow: "Vandaag Inside Live", quality: "4K", logoColor: "bg-red-500" },
  { id: "veronica", name: "Veronica HD", category: "NL", playingNow: "The Big Bang Theory", quality: "FHD", logoColor: "bg-purple-600" },
  
  // Flemish / Belgium (BE)
  { id: "vtm", name: "VTM HD", category: "BE", playingNow: "The Voice van Vlaanderen", quality: "FHD", logoColor: "bg-orange-600" },
  { id: "een", name: "VRT 1 HD", category: "BE", playingNow: "Thuis", quality: "FHD", logoColor: "bg-rose-600" },
  { id: "canvas", name: "VRT Canvas", category: "BE", playingNow: "De Afspraak", quality: "FHD", logoColor: "bg-teal-700" },
  { id: "play4", name: "Play 4 HD", category: "BE", playingNow: "De Slimste Mens ter Wereld", quality: "FHD", logoColor: "bg-blue-700" },

  // Sports Channels (SPORT)
  { id: "ziggo-sport", name: "Ziggo Sport UHD", category: "SPORT", playingNow: "Formule 1: Vrije Training Live", quality: "4K", logoColor: "bg-sky-600", sourceIcon: "/assets/channels/ziggo-sport.png" },
  { id: "ziggo-sport-select", name: "Ziggo Select HD", category: "SPORT", playingNow: "Rondom de F1", quality: "FHD", logoColor: "bg-cyan-600", sourceIcon: "/assets/channels/ziggo-sport.png" },
  { id: "espn-1", name: "ESPN 1 UHD", category: "SPORT", playingNow: "Eredivisie: Feyenoord - Ajax Live", quality: "4K", logoColor: "bg-red-700", sourceIcon: "/assets/channels/espn.png" },
  { id: "espn-2", name: "ESPN 2 HD", category: "SPORT", playingNow: "Keuken Kampioen Divisie", quality: "FHD", logoColor: "bg-red-800", sourceIcon: "/assets/channels/espn.png" },
  { id: "espn-3", name: "ESPN 3 HD", category: "SPORT", playingNow: "Studio Voetbal", quality: "FHD", logoColor: "bg-red-700", sourceIcon: "/assets/channels/espn.png" },
  { id: "viaplay-1", name: "Viaplay F1 Ultra", category: "SPORT", playingNow: "Formule 1: Race - Circuit de Monaco Live", quality: "4K", logoColor: "bg-yellow-500", sourceIcon: "/assets/channels/viaplay.png" },
  { id: "f1tv-pro", name: "F1 TV Pro HD", category: "SPORT", playingNow: "Pit Lane Channel Live", quality: "FHD", logoColor: "bg-red-600", sourceIcon: "/assets/channels/f1.png" },
  { id: "eurosport-1", name: "Eurosport 1 4K", category: "SPORT", playingNow: "Giro d'Italia - Etappe 12 Live", quality: "4K", logoColor: "bg-teal-600", sourceIcon: "/assets/channels/eurosport.png" },
  { id: "sky-sports-f1", name: "Sky Sports F1 HD", category: "SPORT", playingNow: "Ted's Notebook", quality: "FHD", logoColor: "bg-red-900", sourceIcon: "/assets/channels/sky-sports.png" },
  { id: "dazn", name: "DAZN Sports 4K", category: "SPORT", playingNow: "Serie A Match Live", quality: "4K", logoColor: "bg-blue-900", sourceIcon: "/assets/channels/dazn.png" },

  // Movies / Streaming VoD (MOVIES)
  { id: "netflix-uhd", name: "Netflix UHD Hub", category: "MOVIES", playingNow: "Stranger Things S5 (VoD)", quality: "4K", logoColor: "bg-neutral-800" },
  { id: "hbo-max", name: "HBO Max Cine 4K", category: "MOVIES", playingNow: "House of the Dragon - Ep 8 (VoD)", quality: "4K", logoColor: "bg-violet-900" },
  { id: "disney-plus", name: "Disney+ 4K Hub", category: "MOVIES", playingNow: "The Mandalorian (VoD)", quality: "4K", logoColor: "bg-blue-900" },
  { id: "videoland-cine", name: "Videoland Movies", category: "MOVIES", playingNow: "Mocro Maffia: Tatta", quality: "FHD", logoColor: "bg-rose-500" },
];

export const SPORTS_EVENTS: SportEvent[] = [
  {
    id: "sp-1",
    title: "Formule 1: Grand Prix van Monaco",
    category: "Formule 1",
    time: "Zondag om 15:00 Live",
    channel: "Viaplay 1 / Ziggo Sport UHD",
    image: "/assets/sports/formule1.jpg"
  },
  {
    id: "sp-2",
    title: "Eredivisie: Feyenoord vs Ajax (De Klassieker)",
    category: "Voetbal",
    time: "Zondag om 14:30 Live",
    channel: "ESPN 1 UHD",
    image: "/assets/sports/voetbal.jpg"
  },
  {
    id: "sp-3",
    title: "Giro d'Italia - Koninginnenrit door de Alpen",
    category: "Wielrennen",
    time: "Zaterdag vanaf 12:30 Live",
    channel: "Eurosport 1 4K",
    image: "/assets/sports/wielrennen.jpg"
  },
  {
    id: "sp-4",
    title: "Champions League Finale Live",
    category: "Voetbal",
    time: "Volgende week zaterdag 21:00 Live",
    channel: "RTL 7 UHD / SBS 6 UHD",
    image: "/assets/sports/voetbal.jpg"
  },
  {
    id: "sp-5",
    title: "Roland Garros - Heren Finale",
    category: "Tennis",
    time: "Zondag om 16:00 Live",
    channel: "Eurosport 1 & Eurosport 2",
    image: "/assets/sports/tennis.jpg"
  }
];

export const TOP_MOVIES: MediaItem[] = [
  { id: "mov-1",  title: "Joker: Folie à Deux",    type: "movie", image: "/assets/posters/joker-folie-a-deux.jpg",    genre: "Drama / Thriller",      rating: "4.8" },
  { id: "mov-2",  title: "Beetlejuice Beetlejuice", type: "movie", image: "/assets/posters/beetlejuice-2.jpg",         genre: "Komedie / Fantasy",     rating: "4.5" },
  { id: "mov-3",  title: "Alien: Romulus",           type: "movie", image: "/assets/posters/alien-romulus.jpg",         genre: "Sci-Fi / Horror",       rating: "4.9" },
  { id: "mov-4",  title: "Despicable Me 4",           type: "movie", image: "/assets/posters/despicable-me-4.jpg",      genre: "Animatie / Familie",    rating: "4.7" },
  { id: "mov-5",  title: "Conclave",                  type: "movie", image: "/assets/posters/conclave.jpg",             genre: "Thriller / Mysterie",   rating: "4.6" },
  { id: "mov-6",  title: "Heretic",                   type: "movie", image: "/assets/posters/heretic.jpg",              genre: "Griezel / Drama",       rating: "4.4" },
  { id: "mov-7",  title: "Deadpool & Wolverine",      type: "movie", image: "/assets/posters/deadpool-wolverine.jpg",   genre: "Actie / Komedie",       rating: "4.9" },
  { id: "mov-8",  title: "Dune: Part Two",            type: "movie", image: "/assets/posters/dune-2.jpg",               genre: "Sci-Fi / Avontuur",     rating: "4.8" },
  { id: "mov-9",  title: "F1 (2025)",                 type: "movie", image: "/assets/posters/f1.jpg",                   genre: "Actie / Sport",         rating: "4.7" },
  { id: "mov-10", title: "Gladiator II",              type: "movie", image: "/assets/posters/gladiator-2.jpg",          genre: "Actie / Drama",         rating: "4.6" },
  { id: "mov-11", title: "Inside Out 2",              type: "movie", image: "/assets/posters/inside-out-2.jpg",         genre: "Animatie / Familie",    rating: "4.8" },
  { id: "mov-12", title: "Moana 2",                   type: "movie", image: "/assets/posters/moana-2.jpg",              genre: "Animatie / Familie",    rating: "4.5" },
  { id: "mov-13", title: "Red One",                   type: "movie", image: "/assets/posters/red-one.jpg",              genre: "Actie / Komedie",       rating: "4.3" },
  { id: "mov-14", title: "The Substance",             type: "movie", image: "/assets/posters/the-substance.jpg",        genre: "Horror / Drama",        rating: "4.7" },
  { id: "mov-15", title: "Wicked",                    type: "movie", image: "/assets/posters/wicked.jpg",               genre: "Musical / Fantasy",     rating: "4.6" },
];

export const TOP_SHOWS: MediaItem[] = [
  { id: "show-1", title: "Mocro Maffia: Seizoen 6",   type: "show", image: "/assets/tvshows/mocro-maffia.jpg",          genre: "Crime / Drama (NL)",     rating: "4.9" },
  { id: "show-2", title: "Gooische Vrouwen (Nieuw)",  type: "show", image: "/assets/tvshows/gooische-vrouwen.jpg",      genre: "Drama / Komedie (NL)",   rating: "4.7" },
  { id: "show-3", title: "LOL: Last One Laughing",    type: "show", image: "/assets/tvshows/lol-last-one-laughing.jpg", genre: "Komedie / Game (NL)",    rating: "4.6" },
  { id: "show-4", title: "Vandaag Inside Live",       type: "show", image: "/assets/tvshows/vandaag-inside.jpg",        genre: "Talkshow / Actueel (NL)",rating: "4.8" },
  { id: "show-5", title: "Sprekend Nederland",        type: "show", image: "/assets/tvshows/sprekend-nederland.jpg",    genre: "Docuserie / Cultuur",    rating: "4.5" },
  { id: "show-6", title: "Pandora",                   type: "show", image: "/assets/tvshows/pandora.jpg",               genre: "Thriller / Drama (NL)",  rating: "4.6" },
  { id: "show-7", title: "Winter vol Liefde",         type: "show", image: "/assets/tvshows/winter-vol-liefde.jpg",     genre: "Reality / Romance (NL)", rating: "4.4" },
];

export const TOP_SHOWS_INTL: MediaItem[] = [
  { id: "intl-1", title: "House of the Dragon",  type: "show", image: "/assets/tvshows-intl/house-of-the-dragon.jpg", genre: "Fantasy / Drama",    rating: "4.9" },
  { id: "intl-2", title: "The Bear",             type: "show", image: "/assets/tvshows-intl/the-bear.jpg",            genre: "Drama / Komedie",    rating: "4.8" },
  { id: "intl-3", title: "Severance",            type: "show", image: "/assets/tvshows-intl/severance.jpg",           genre: "Sci-Fi / Thriller",  rating: "4.9" },
  { id: "intl-4", title: "Shogun",               type: "show", image: "/assets/tvshows-intl/shogun.jpg",              genre: "Historisch / Drama", rating: "4.9" },
  { id: "intl-5", title: "Reacher",              type: "show", image: "/assets/tvshows-intl/reacher.jpg",             genre: "Actie / Thriller",   rating: "4.7" },
  { id: "intl-6", title: "Squid Game",           type: "show", image: "/assets/tvshows-intl/squid-game.jpg",          genre: "Thriller / Drama",   rating: "4.8" },
  { id: "intl-7", title: "Stranger Things",      type: "show", image: "/assets/tvshows-intl/stranger-things.jpg",     genre: "Sci-Fi / Horror",    rating: "4.9" },
  { id: "intl-8", title: "The Last of Us",       type: "show", image: "/assets/tvshows-intl/the-last-of-us.jpg",      genre: "Drama / Horror",     rating: "4.9" },
  { id: "intl-9", title: "Wednesday",            type: "show", image: "/assets/tvshows-intl/wednesday.jpg",           genre: "Fantasy / Komedie",  rating: "4.7" },
  { id: "intl-10",title: "Breaking Bad",         type: "show", image: "/assets/tvshows-intl/breaking-bad.jpg",        genre: "Crime / Drama",      rating: "5.0" },
];

export const WHATSAPP_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Kees van der Velde",
    avatar: "👨‍💻",
    date: "Gisteren",
    message: "Hoi SwivTV support, ik wilde even laten weten dat de instelling op mijn LG TV binnen 3 minuten gelukt was. De F1 stream is zéér scherp zonder buffering! 🏎️💨",
    replyTime: "12:31",
    isVerified: true
  },
  {
    id: "t-2",
    name: "Anouk de Bruijn",
    avatar: "👩‍🦰",
    date: "Vandaag",
    message: "Super bedankt voor het snelle antwoord gisteravond op WhatsApp. Mijn man is superblij met alle ESPN zenders en ik kijk lekker Videoland films. Zeker een aanrader!",
    replyTime: "10:14",
    isVerified: true
  },
  {
    id: "t-3",
    name: "Jeroen & Lieke",
    avatar: "💑",
    date: "2 dagen geleden",
    message: "Beste IPTV die ik tot nu toe gehad heb. Geen haperingen tijdens de Champions League gisteravond. En de app op de Firestick werkt razendsnel.",
    replyTime: "18:45",
    isVerified: true
  },
  {
    id: "t-4",
    name: "Sander Verstappen",
    avatar: "👱‍♂️",
    date: "Vorige week",
    message: "Echt bizar hoeveel 4K kanalen jullie hebben. Zelfs alle Britse Sky Sports zenders draaien zonder vertraging. Nooit meer Ziggo voor mij te duur.",
    replyTime: "14:20",
    isVerified: true
  },
  {
    id: "t-5",
    name: "Mohamed El Kadi",
    avatar: "🧔",
    date: "3 dagen geleden",
    message: "Pakket besteld en letterlijk binnen 2 minuten had ik de inloggegevens via mail ontvangen. Super geregeld, support reageert ook meteen.",
    replyTime: "09:05",
    isVerified: true
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Wat is SwivTV IPTV en hoe werkt het precies?",
    answer: "SwivTV is een premium IPTV provider die televisie via het internet streamt. Je hebt geen schotel of coax-kabels meer nodig. Met ons abonnement krijg je via een handige app op je Smart TV, telefoon, tablet of computer direct toegang tot meer dan 20.000+ live zenders, waaronder alle Nederlandse zenders, sportkanalen (ESPN, Ziggo, Viaplay) en een enorme bibliotheek aan films en series (VOD)."
  },
  {
    id: "faq-2",
    question: "Is de installatie ingewikkeld en welke apparaten worden ondersteund?",
    answer: "Nee, de installatie is heel eenvoudig en binnen 5 minuten gepiept! SwivTV werkt op vrijwel elk apparaat: Smart TV's (Samsung, LG, Sony met apps zoals IPTV Smarters, Flix IPTV of IBOTV), Amazon Fire TV Stick, Android TV boxen, Apple TV, smartphones (iOS/Android), tablets, Chromecast en PC. Na bestelling sturen we je een heldere, stap-voor-stap handleiding per e-mail toe, en onze support helpt je direct via WhatsApp als je er niet uitkomt."
  },
  {
    id: "faq-3",
    question: "Zit ik vast aan een langdurig contract of abonnement?",
    answer: "Absoluut niet. Bij SwivTV hanteren we uitsluitend flexibele pre-paid pakketten. Je kiest zelf of je 1, 3, 6 of 12 maanden wilt kijken. Na deze periode stopt het abonnement automatisch, tenzij je er zelf voor kiest om te verlengen. Geen automatische incasso's en geen stilzwijgende verlengingen. Je zit dus nergens aan vast!"
  },
  {
    id: "faq-4",
    question: "Hoe snel wordt mijn IPTV account geactiveerd?",
    answer: "Wij leveren extreem snel! Onze systemen activeren je account direct na ontvangst van de betaling. De inloggegevens (M3U playlist link en Xtream Codes API serverdetails) worden automatisch binnen 3 tot 5 minuten naar je e-mailadres verzonden. Mocht je binnen 10 minuten niks hebben ontvangen, controleer dan je spambox of stuur ons direct een berichtje via WhatsApp!"
  },
  {
    id: "faq-5",
    question: "Heb ik speciale internet-snelheden nodig voor buffer-vrij 4K/UHD streamen?",
    answer: "Om soepel in 4K/UHD te streamen raden we een stabiele internetverbinding aan van ten minste 25 Mbps. Voor HD/FHD streams is 15 Mbps al ruim voldoende. Onze innovatieve servers gebruiken geavanceerde compressietechnologie en H.265 codecs, waardoor de streams stabiel blijven en buffering nagenoeg verleden tijd is."
  },
  {
    id: "faq-6",
    question: "Kan ik het SwivTV abonnement op meerdere apparaten tegelijkertijd gebruiken?",
    answer: "Standaard is ons abonnement geschikt voor 1 apparaat tegelijk (1 actieve stream). Mocht je op meerdere TV's of apparaten tegelijk in huis willen kijken, dan kun je in onze prijsconfigurator eenvoudig upgraden naar 2, 3 of 4 schermen voor je gehele huishouden tegen een flinke korting."
  },
  {
    id: "faq-7",
    question: "Welke betaalmethoden ondersteunen jullie?",
    answer: "Omdat we ons richten op de Nederlandse en Belgische markt bieden we extreem veilige en vertrouwde nationale betaalmethoden aan. Je kunt probleemloos betalen via iDEAL (met alle Nederlandse banken zoals ING, Rabobank, ABN, etc.), Bancontact (voor onze Belgische klanten), PayPal en Creditcard (Visa/Mastercard)."
  }
];

export const PRICING_MAPPING = {
  "3_months": {
    months: 3,
    bonusMonths: 0,
    pricePerMonth: 11.99,
    originalPricePerMonth: 14.99,
    hasDiscountTag: false,
    features: [
      "23.000+ Kanalen (NL/BE/Int Live)",
      "80.000+ Films & Series (VOD)",
      "4K/UHD & Ultra HDR Beeldkwaliteit",
      "Stabiele Servers (99.9% Uptime)",
      "24/7 WhatsApp Premium Support",
      "M3U playlist & Xtream Codes ondersteund"
    ]
  },
  "6_months": {
    months: 6,
    bonusMonths: 0,
    pricePerMonth: 9.99,
    originalPricePerMonth: 14.99,
    hasDiscountTag: true,
    discountTagText: "POPULAIR -33%",
    features: [
      "23.000+ Kanalen (NL/BE/Int Live)",
      "80.000+ Films & Series (VOD)",
      "4K/UHD & Ultra HDR Beeldkwaliteit",
      "Stabiele Servers (99.9% Uptime)",
      "24/7 WhatsApp Premium Support",
      "M3U playlist & Xtream Codes ondersteund",
      "Gratis EPG (TV-Gids)"
    ]
  },
  "12_months": {
    months: 12,
    bonusMonths: 0,
    pricePerMonth: 7.50,
    originalPricePerMonth: 14.99,
    hasDiscountTag: true,
    discountTagText: "GROTE BESPARING -50%",
    features: [
      "23.000+ Kanalen (NL/BE/Int Live)",
      "80.000+ Films & Series (VOD)",
      "4K/UHD & Ultra HDR Beeldkwaliteit",
      "Stabiele Servers (99.9% Uptime)",
      "24/7 WhatsApp Premium Support",
      "M3U playlist & Xtream Codes ondersteund",
      "Gratis EPG (TV-Gids)",
      "Catch-up (Uitzending Gemist)"
    ]
  },
  "12_plus_3_months": {
    months: 12,
    bonusMonths: 3,
    pricePerMonth: 5.20,
    originalPricePerMonth: 14.99,
    hasDiscountTag: true,
    discountTagText: "TIJDELIJKE ACTIE: 12+3 MAANDEN GRATIS",
    features: [
      "15 MAANDEN TOTAAL (12 kopen, 3 gratis)",
      "23.000+ Kanalen (NL/BE/Int Live)",
      "80.000+ Films & Series (VOD)",
      "4K/UHD & Ultra HDR Beeldkwaliteit",
      "Stabiele Servers (99.9% Uptime)",
      "24/7 WhatsApp Premium Support",
      "M3U playlist & Xtream Codes",
      "Gratis EPG (TV-Gids)",
      "Full Catch-up & Live Pause"
    ]
  }
};
