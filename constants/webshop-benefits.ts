import type { ServiceIconName } from "@/types";

export interface WebshopBenefit {
  readonly title: string;
  readonly description: string;
  readonly iconName: ServiceIconName;
}

export const WEBSHOP_BENEFITS_SECTION = {
  eyebrow: "Webshop laten maken",
  titleLead: "Vier redenen om voor",
  titleEm: "ons te kiezen.",
  sub: "Een professionele webshop is meer dan een online catalogus. Wij bouwen webshops die direct bijdragen aan de groei van jouw onderneming.",
  benefits: [
    {
      title: "Conversiegericht Ontwerp",
      description:
        "Een webshop moet verkopen. Wij bouwen geoptimaliseerde checkouts en productpagina's die bezoekers moeiteloos omzetten in betalende klanten.",
      iconName: "cart",
    },
    {
      title: "Naadloze Betalingen",
      description:
        "Directe integratie met iDEAL, creditcards, Apple Pay en achteraf betalen (zoals Klarna), zodat klanten altijd op hun voorkeursmanier kunnen afrekenen.",
      iconName: "lightning",
    },
    {
      title: "Supersnelle Performance & SEO",
      description:
        "Een trage webshop kost omzet. Wij bouwen razendsnelle, technisch perfecte webshops die direct hoog scoren in Google en je concurrentie voorblijven.",
      iconName: "search",
    },
    {
      title: "Schaalbaar Beheer",
      description:
        "Of je nu 10 of 10.000 producten hebt, voorraadbeheer is eenvoudig via WooCommerce of Shopify. Plus, je krijgt altijd directe ondersteuning vanuit Nederland.",
      iconName: "layers",
    },
  ] satisfies readonly WebshopBenefit[],
} as const;
