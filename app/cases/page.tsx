import type { Metadata } from "next";

import { PageHero } from "@/components/page/PageHero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { CallToAction } from "@/components/sections/CallToAction";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Testimonials } from "@/components/sections/Testimonials";

const PAGE_TITLE = "E-commerce Cases & Portfolio | Sarte Global";
const PAGE_DESC =
  "Bekijk ons portfolio van succesvolle webshops op maat. Ontdek hoe wij conversies en omzet verhogen voor onze Nederlandse klanten.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/cases" },
  keywords: [
    "portfolio",
    "cases",
    "webshop voorbeelden",
    "webdesign portfolio",
    "e-commerce cases",
    "Sarte Global cases",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/cases",
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 800, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

const HERO = {
  icon: "layers" as const,
  eyebrow: "Werk · Cases",
  titleLead: "Geselecteerde cases",
  titleEm: "waar we trots op zijn.",
  intro:
    "Een verzorgde selectie recente e-commerce projecten en webshops op maat. Filter op categorie om de resultaten te bekijken.",
  align: "center" as const,
};

export default function CasesPage() {
  return (
    <main className="work-page" id="top">
      <PageHero content={HERO} id="work-h" />
      <ProjectsSection />
      <ImpactStats />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
