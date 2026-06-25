import type { Metadata } from "next";
import Link from "next/link";

import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingPayments } from "@/components/landing/LandingPayments";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { ProjectsSection } from "@/components/projects/projects-section";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { CustomWebshopSections } from "@/components/sections/CustomWebshopSections";
import { Container } from "@/components/ui/Container";
import {
  WEBSHOP_FAQ,
  WEBSHOP_FEATURES,
  WEBSHOP_FINAL_CTA,
  WEBSHOP_HERO,
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

const OP_MAAT_META = {
  path: "/webshop-op-maat",
  title: "Webshop Op Maat Laten Maken | Sarte Global",
  description: "Professionele webshop op maat laten maken? Sarte Global ontwerpt en bouwt snelle, conversiegerichte e-commerce oplossingen. Ontvang direct een vrijblijvend voorstel!",
  keywords: [
    "webshop op maat",
    "webshop op maat laten maken",
    "professionele webshop",
    "maatwerk webshop",
    "e-commerce oplossingen",
    "webshop ontwikkeling",
    "Sarte Global",
  ],
  ogAlt: "Webshop op maat laten maken · Sarte Global",
};

export const metadata: Metadata = buildLandingMetadata(OP_MAAT_META);

const SERVICE_NAME = "Webshop op maat laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: OP_MAAT_META.path,
  name: SERVICE_NAME,
  description: OP_MAAT_META.description,
  offerCatalogName: "Voordelen van een webshop op maat",
  offers: WEBSHOP_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, OP_MAAT_META.path);

export default function WebshopOpMaatPage() {
  const customHero = {
    ...WEBSHOP_HERO,
    eyebrow: "Webshop op maat · Sarte Global",
    titleLead: "Webshop op maat laten maken die",
    titleEm: "uw omzet maximaliseert.",
    sub: "Wij bouwen snelle, conversiegerichte e-commerce platforms op maat. Volledige controle, iDEAL & alle betaalmethoden, uitstekende SEO en perfecte Core Web Vitals.",
  };

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

      {/* 01 — Hero */}
      <LandingHero content={customHero} projectType={WEBSHOP_PROJECT_TYPE} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* NEW — 4 Conversion-focused Sections */}
      <CustomWebshopSections />

      {/* 03 — Waarom E-commerce op maat */}
      <LandingWhy content={WEBSHOP_WHY} />

      {/* 04 — Conversiegerichte features */}
      <LandingFeaturesSlider content={WEBSHOP_FEATURES} />

      {/* 05 — Betaalmethoden & koppelingen */}
      <LandingPayments content={WEBSHOP_PAYMENTS} />

      {/* 06 — Portfolio */}
      <LandingCases />
      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="ecommerce" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Webshop op maat laten maken" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA content={WEBSHOP_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/woocommerce-webshop-op-maat">WooCommerce webshop op maat</Link>
            <Link href="/shopify-webshop-op-maat">Shopify webshop op maat</Link>
            <Link href="/ecommerce-oplossingen">E-commerce oplossingen</Link>
            <Link href="/b2b-webshop">B2B webshop op maat</Link>
            <Link href="/b2c-webshop">B2C webshop op maat</Link>
            <Link href="/cases">Cases</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
