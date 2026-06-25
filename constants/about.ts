import type { AboutCompanyContent } from "@/types";

export const ABOUT_COMPANY = {
  eyebrow: "Over Sarte Global",
  brand: "Sarte Global",
  titleLead: "is het bureau achter",
  titleEm: "webshops",
  titleTail: "die écht resultaat opleveren.",
  mediaImage: "/images/company-img.webp",
  mediaAlt:
    "Binnen bij Sarte Global — onze werkplek waar professionele, moderne webshops worden gebouwd voor ondernemers en bedrijven in Nederland.",
  mediaCaption: "Sarte Global · Nederland",
  lead:
    "Sarte Global is het bureau achter webshop-opmaat.nl. We bouwen professionele, moderne en responsive webshops voor ondernemers en bedrijven in Nederland, met een focus op sterke SEO, snelle oplevering en meetbare resultaten.",
  paragraphs: [
    "Sarte Global is opgericht met één duidelijk doel: elke Nederlandse ondernemer een nieuwe, professionele webshop geven die past bij de ambities van vandaag. Onze ervaren designers en developers werken vanaf dag één samen — geen overdrachten, geen verborgen kosten, alleen werk dat live gaat.",
    "Naast webshops bouwt Sarte Global websites, landingspagina's en complete digitale groeitrajecten — denk aan SEO, online marketing, AI-oplossingen en hosting. Eén partner voor jouw digitale aanwezigheid, gegroeid mee met jouw bedrijf.",
  ],
  pillars: [
    {
      title: "Alleen senior specialisten",
      description:
        "Elk project bij Sarte Global wordt geleid door ervaren designers, developers en strategen — niet door juniors die op jouw kosten leren.",
    },
    {
      title: "Eén team voor alles",
      description:
        "Bij Sarte Global zitten strategie, design en development in hetzelfde team. Sneller schakelen, minder verlies tussen disciplines.",
    },
    {
      title: "Resultaat boven uren",
      description:
        "We sturen op omzet, conversie en groei — niet op opgeleverde uren of bestanden.",
    },
    {
      title: "Modern, snel & vindbaar",
      description:
        "Elke webshop wordt gebouwd op een snelle, moderne basis met sterke technische SEO — klaar om gevonden te worden in Google.",
    },
  ],
  metrics: [
    { value: "150+", label: "Projecten opgeleverd" },
    { value: "98%", label: "Tevreden klanten" },
    { value: "2 wk", label: "Gemiddelde oplevertijd" },
    { value: "NL", label: "Werkzaam in heel Nederland" },
  ],
  badge: "SARTE GLOBAL · WEBSHOP LATEN MAKEN · NEDERLAND",
  ctaLabel: "Plan kennismaking",
  ctaHref: "#cta",
  secondaryLabel: "Lees ons verhaal",
  secondaryHref: "/over-ons",
} as const satisfies AboutCompanyContent;
