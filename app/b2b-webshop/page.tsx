import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingPayments } from "@/components/landing/LandingPayments";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { ProjectsSection } from "@/components/projects/projects-section";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import {
  WEBSHOP_FAQ,
  WEBSHOP_FEATURES,
  WEBSHOP_FINAL_CTA,
  WEBSHOP_PAYMENTS,
  WEBSHOP_PROJECT_TYPE,
  WEBSHOP_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

const B2B_META = {
  path: "/b2b-webshop",
  title: "B2B Webshop Op Maat Laten Maken | Sarte Global",
  description: "Zakelijke B2B webshop op maat laten maken? Individuele prijsafspraken, offerte-modules en ERP-integratie. Verhoog uw zakelijke e-commerce omzet.",
  keywords: [
    "b2b webshop",
    "b2b webshop op maat",
    "zakelijke webshop laten maken",
    "b2b ecommerce platform",
    "erp koppeling webshop",
    "Sarte Global",
  ],
  ogAlt: "B2B webshop op maat maken · Sarte Global",
};

export const metadata: Metadata = buildLandingMetadata(B2B_META);

const SERVICE_NAME = "B2B webshop op maat laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: B2B_META.path,
  name: SERVICE_NAME,
  description: B2B_META.description,
  offerCatalogName: "Voordelen van een B2B-webshop op maat",
  offers: [
    { title: "Klant specifieke prijslijsten", description: "Toon verschillende prijzen en kortingen per ingelogde klantgroep." },
    { title: "ERP & CRM Integraties", description: "Naadloze synchronisatie met SAP, Exact, AFAS of Microsoft Dynamics." },
    { title: "Offerte-aanvraag Modules", description: "Laat zakelijke afnemers eenvoudig offertes aanvragen in plaats van direct afrekenen." },
    { title: "Snelle Bulkbestellingen", description: "B2B-bestelmatrixen waarmee klanten snel grote aantallen kunnen toevoegen." },
  ],
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, B2B_META.path);

const B2B_HERO = {
  eyebrow: "B2B E-commerce · Sarte Global",
  badge: "B2B Webshop specialisten",
  titleLead: "B2B webshop op maat die",
  titleEm: "uw zakelijke verkoop digitaliseert.",
  sub: "Sarte Global bouwt krachtige B2B webshops die aansluiten op uw bestaande systemen. Klantspecifieke tarieven, bulkbestellingen en snelle checkouts.",
  primaryCta: "Vraag B2B demo aan",
  secondaryCta: { label: "Bekijk werkwijze", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit reviews" },
  pills: [
    { label: "ERP Koppelingen" },
    { label: "Klantspecifieke prijzen" },
    { label: "Offerte modules" },
    { label: "B2B Checkout" },
  ],
  trust: [
    "ERP-geïntegreerde webshops",
    "B2B-specialisten",
    "Conversiegericht B2B-ontwerp",
  ],
  benefits: [
    "Volledig geautomatiseerde ordersync",
    "Btw-verlegging & Kvk controle",
    "Factuur & iDEAL betalingen",
    "Gebouwd op Next.js of WooCommerce",
  ],
};

export default function B2bWebshopPage() {
  return (
    <main className="wlm" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <PricingSchema serviceSlug="ecommerce" emitFaq={false} />

      {/* Hero */}
      <LandingHero content={B2B_HERO} projectType={WEBSHOP_PROJECT_TYPE} />

      <TrustedMarquee />
      <LandingTrustStats />
      <LandingWhyStats />

      {/* Waarom B2B op maat */}
      <LandingWhy
        content={{
          ...WEBSHOP_WHY,
          eyebrow: "B2B Functies",
          titleLead: "E-commerce gebouwd voor",
          titleEm: "complexe zakelijke workflows.",
          lead: "Zakelijke kopers verwachten hetzelfde gemak als consumenten, maar de achterliggende processen zijn complexer. Wij bouwen B2B e-commerce oplossingen die beide werelden combineren.",
          pillars: [
            { iconName: "layers", title: "Klantprofielen & Prijzen", description: "Bied gepersonaliseerde catalogi en klantspecifieke prijsafspraken op basis van inloggegevens." },
            { iconName: "cpu", title: "Naadloze Systeemkoppelingen", description: "Koppel met ERP-, PIM- en WMS-systemen voor realtime voorraad- en prijsinformatie." },
            { iconName: "cart", title: "B2B Betalingen", description: "Ondersteun kopen op factuur, automatische incasso, kredietlimieten en traditionele betaalmethoden." },
            { iconName: "search", title: "Snelle Orderinvoer", description: "Laat inkopers snel bestellen via SKU-invoer of csv-upload voor herhalingsaankopen." },
          ],
        }}
      />

      <LandingProcess />
      <LandingFeaturesSlider content={WEBSHOP_FEATURES} />
      <LandingPayments content={WEBSHOP_PAYMENTS} />

      <LandingCases />
      <ProjectsSection />

      <PricingSection defaultServiceSlug="ecommerce" />
      <Testimonials />
      <FAQAccordion items={WEBSHOP_FAQ} />

      <LandingLocalSeo serviceLabel="B2B webshop op maat laten maken" />
      <LandingFinalCTA content={WEBSHOP_FINAL_CTA} />

      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/webshop-op-maat">Webshop op maat</Link>
            <Link href="/b2c-webshop">B2C webshop op maat</Link>
            <Link href="/shopify-webshop-op-maat">Shopify webshop op maat</Link>
            <Link href="/woocommerce-webshop-op-maat">WooCommerce webshop op maat</Link>
            <Link href="/cases">Cases</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
