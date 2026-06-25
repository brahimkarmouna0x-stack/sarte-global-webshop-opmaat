import type { Metadata } from "next";
import { ContactPageBody } from "@/components/contact/ContactPageBody";
import { PageHero } from "@/components/page/PageHero";

const PAGE_TITLE = "Vrijblijvende Offerte Webshop Op Maat | Sarte Global";
const PAGE_DESC =
  "Direct een offerte aanvragen voor uw maatwerk webshop. Binnen 1 werkdag een helder en transparant prijsvoorstel op maat.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/offerte-aanvragen" },
  keywords: [
    "offerte webshop",
    "webshop offerte aanvragen",
    "kosten webshop op maat",
    "prijsopgave e-commerce website",
    "Sarte Global offerte",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/offerte-aanvragen",
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
  icon: "spark" as const,
  eyebrow: "Offerte · Aanvraag",
  titleLead: "Vraag een vrijblijvend",
  titleEm: "voorstel aan.",
  intro:
    "Binnen 1 werkdag een helder prijsvoorstel op maat voor uw nieuwe webshop. Vul het formulier hieronder in en start uw digitale groeitraject.",
  align: "center" as const,
};

export default function OfferteAanvragenPage() {
  return (
    <main className="contact-page" id="top">
      <PageHero content={HERO} id="offerte-h" />
      <ContactPageBody />
    </main>
  );
}
