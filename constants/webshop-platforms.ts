import type { ServiceIconName } from "@/types";

export interface WebshopPlatform {
  readonly title: string;
  readonly tags: readonly string[];
  readonly description: string;
  readonly iconName: ServiceIconName;
}

export const WEBSHOP_PLATFORMS_SECTION = {
  eyebrow: "Platform Keuze",
  titleLead: "Niet één systeem,",
  titleEm: "maar de beste keuze.",
  sub: "Een succesvolle webshop begint bij de juiste techniek. We kijken naar jouw assortiment, ambities en budget om het ideale platform te selecteren.",
  platforms: [
    {
      title: "Shopify",
      tags: ["Snel live", "Cloud-hosted", "App ecosysteem"],
      description:
        "De marktleider voor wie zich wil focussen op marketing. Zonder technische zorgen direct verkopen via een geoptimaliseerde checkout en een enorm aanbod aan koppelingen.",
      iconName: "rocket",
    },
    {
      title: "WooCommerce",
      tags: ["100% Eigendom", "Flexibel", "WordPress"],
      description:
        "Volledige controle over je data en design. Ideaal voor complexe productstructuren, B2B functionaliteiten of webshops die naadloos geïntegreerd moeten worden in een WordPress website.",
      iconName: "layers",
    },
    {
      title: "Maatwerk & Headless",
      description:
        "Voor ondernemers die de ultieme digitale ervaring zoeken. Razendsnelle laadtijden dankzij Next.js en een volledig unieke frontend, gekoppeld aan de API van jouw e-commerce backend.",
      tags: ["Next.js", "Razendsnel", "Unieke UX"],
      iconName: "code",
    },
  ] satisfies readonly WebshopPlatform[],
} as const;
