import type { ServiceIconName } from "@/types";

export interface WebshopGrowthFeature {
  readonly title: string;
  readonly description: string;
  readonly iconName: ServiceIconName;
}

export const WEBSHOP_GROWTH_SECTION = {
  eyebrow: "Marketing & Groei",
  titleLead: "Klaar voor de start,",
  titleEm: "gebouwd om te schalen.",
  sub: "Een webshop live zetten is slechts stap één. Wij leveren elke webshop marketing-klaar af, zodat je direct data kunt verzamelen en verkopen kunt stimuleren.",
  features: [
    {
      title: "Google Analytics 4 & Tag Manager",
      description:
        "Meet exact waar je bezoekers vandaan komen, welke pagina's ze bekijken en waar ze afhaken in de checkout. Volledig ingesteld volgens privacyrichtlijnen.",
      iconName: "chart",
    },
    {
      title: "Meta & TikTok Pixel Integratie",
      description:
        "Direct klaar om te adverteren op social media. Retarget bezoekers die hun winkelwagen hebben achtergelaten en verhoog je conversieratio aanzienlijk.",
      iconName: "search",
    },
    {
      title: "E-mailmarketing Automations",
      description:
        "Koppel je webshop moeiteloos aan systemen zoals Klaviyo of Mailchimp. Haal verlaten winkelwagens terug en beloon loyale klanten automatisch.",
      iconName: "lightning",
    },
    {
      title: "A/B Testing Klaar",
      description:
        "Een sterke basis om te experimenteren met koppen, knoppen en layouts om zo stap voor stap het maximale uit elke bezoeker te halen.",
      iconName: "gauge",
    },
  ] satisfies readonly WebshopGrowthFeature[],
} as const;
