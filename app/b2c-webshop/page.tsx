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

const B2C_META = {
  path: "/b2c-webshop",
  title: "B2C Webshop Op Maat Laten Maken | Sarte Global",
  description: "Professionele B2C webshop bouwen? Focus op merkbeleving, snelle checkouts en maximale mobiele conversie. Vraag nu een gratis adviesgesprek aan.",
  keywords: [
    "b2c webshop",
    "b2c webshop op maat",
    "retail webshop laten maken",
    "webwinkel beginnen",
    "conversie webshop",
    "Sarte Global",
  ],
  ogAlt: "B2C webshop op maat maken · Sarte Global",
};

export const metadata: Metadata = buildLandingMetadata(B2C_META);

const SERVICE_NAME = "B2C webshop op maat laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: B2C_META.path,
  name: SERVICE_NAME,
  description: B2C_META.description,
  offerCatalogName: "Voordelen van een B2C-webshop op maat",
  offers: [
    { title: "Mobile-First Design", description: "Meer dan 70% van de consumenten koopt mobiel. Wij ontwerpen met focus op mobiele perfectie." },
    { title: "Snelle One-Page Checkout", description: "Verlaag het aantal afgebroken winkelwagens met een geoptimaliseerde checkout." },
    { title: "Visual Page Builders", description: "Eenvoudig zelf marketingcampagnes en landingspagina's bouwen en beheren." },
    { title: "iDEAL & Achteraf betalen", description: "Volledige integratie van iDEAL, Apple Pay, Klarna, PayPal en creditcards." },
  ],
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, B2C_META.path);

const B2C_HERO = {
  eyebrow: "B2C E-commerce · Sarte Global",
  badge: "B2C E-commerce specialisten",
  titleLead: "B2C webshop op maat die",
  titleEm: "bezoekers omzet in loyale kopers.",
  sub: "Wij bouwen razendsnelle consumenten-webshops met een sterke merkbeleving. Geoptimaliseerd voor mobiel afrekenen, SEO en social proof.",
  primaryCta: "Start B2C Project",
  secondaryCta: { label: "Bekijk cases", href: "/cases" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit reviews" },
  pills: [
    { label: "Mobile First" },
    { label: "One-Page Checkout" },
    { label: "iDEAL & Klarna" },
    { label: "Snelle laadtijd" },
  ],
  trust: [
    "Consumenten-webshops",
    "B2C-conversiespecialisten",
    "Volledig mobielvriendelijk",
  ],
  benefits: [
    "Geoptimaliseerd voor Google Shopping",
    "Koppelingen met Instagram & TikTok",
    "Eenvoudig retourbeheer",
    "Gebouwd op Next.js of WooCommerce",
  ],
};

export default function B2cWebshopPage() {
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
      <LandingHero content={B2C_HERO} projectType={WEBSHOP_PROJECT_TYPE} />

      <TrustedMarquee />
      <LandingTrustStats />
      <LandingWhyStats />

      {/* Waarom B2C op maat */}
      <LandingWhy
        content={{
          ...WEBSHOP_WHY,
          eyebrow: "B2C Functies",
          titleLead: "Winkelervaring gericht op",
          titleEm: "beleving en conversie.",
          lead: "Consumenten beslissen in seconden. Wij ontwerpen e-commerce ervaringen die direct vertrouwen wekken, emotie overbrengen en drempels tot aankoop minimaliseren.",
          pillars: [
            { iconName: "layers", title: "Ontwerp op Maat", description: "Geen dertien-in-een-dozijn templates, maar een unieke storefront die past bij jouw merk." },
            { iconName: "lightning", title: "Snelheid & Caching", description: "Pagina's die onder een seconde laden, waardoor de bounce rate daalt en de conversie stijgt." },
            { iconName: "cart", title: "Checkout Optimalisatie", description: "Minimale formuliervelden, automatische adresaanvulling en directe betalingen via mobiel." },
            { iconName: "search", title: "Slimme Productfilters", description: "Laat consumenten razendsnel de juiste maat, kleur of prijsklasse vinden." },
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

      <LandingLocalSeo serviceLabel="B2C webshop op maat laten maken" />
      <LandingFinalCTA content={WEBSHOP_FINAL_CTA} />

      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/webshop-op-maat">Webshop op maat</Link>
            <Link href="/b2b-webshop">B2B webshop op maat</Link>
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
