export interface Channel {
  id: string;
  name: string;
  category: "NL" | "BE" | "SPORT" | "MOVIES" | "INT";
  sourceIcon?: string;
  playingNow: string;
  quality: "4K" | "FHD" | "HD";
  logoColor: string;
}

export interface SportEvent {
  id: string;
  title: string;
  category: "Voetbal" | "Formule 1" | "Tennis" | "Wielrennen" | "Snelheid" | "Overig";
  time: string;
  channel: string;
  image: string;
}

export interface MediaItem {
  id: string;
  title: string;
  type: "movie" | "show";
  image: string;
  genre: string;
  rating: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  date: string;
  message: string;
  replyTime: string;
  isVerified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type BillingPeriod = "3_months" | "6_months" | "12_months" | "12_plus_3_months";

export interface PricingSetup {
  months: number;
  bonusMonths: number;
  pricePerMonth: number;
  originalPricePerMonth: number;
  hasDiscountTag: boolean;
  discountTagText?: string;
  features: string[];
}
