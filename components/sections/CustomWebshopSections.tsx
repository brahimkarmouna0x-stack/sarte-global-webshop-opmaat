"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Wat is het grootste voordeel van een webshop op maat?",
    answer: "Een webshop op maat biedt 100% vrijheid in design en functionaliteit, betere prestaties (laadsnelheid), en schaalbaarheid zonder platform-lock-in of verplichte maandelijkse omzetafdrachten zoals bij gehoste SaaS-oplossingen.",
  },
  {
    question: "Hoe lang duurt het traject van een maatwerk webshop?",
    answer: "Gemiddeld staat een professionele maatwerk webshop binnen 3 tot 5 weken online. Dit hangt af van de complexiteit van de gewenste koppelingen (zoals ERP of WMS) en het aantal unieke paginasjablonen.",
  },
  {
    question: "Wordt mijn custom webshop geoptimaliseerd voor Google?",
    answer: "Ja, technische SEO is de kern van onze ontwikkeling. Wij implementeren gestructureerde data (JSON-LD), optimaliseren de Core Web Vitals (LCP, CLS, INP) en zorgen voor een schone HTML-hiërarchie voor maximale vindbaarheid.",
  },
  {
    question: "Koppelen jullie de webshop aan mijn boekhouding en logistiek?",
    answer: "Zeker. We integreren naadloos koppelingen met betaalproviders (Mollie, Stripe), verzenddiensten (PostNL, DHL) en boekhoudpakketten (Exact, Moneybird, e-Boekhouden) zodat je orderverwerking volledig geautomatiseerd verloopt.",
  },
];

export function CustomWebshopSections() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1: Waarom Een Webshop Op Maat? */}
      <section className="about-company relative overflow-hidden py-24" id="waarom-maatwerk">
        <div className="about-company__grid" aria-hidden="true" />
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <span className="eyebrow">Waarom Kiezen</span>
              <h2 className="h2 mt-2 mb-6">
                Waarom een <em>Webshop Op Maat</em> de slimste investering is.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Standaard templates beperken je groei en laten conversie liggen. Een professionele <strong>webshop op maat</strong> wordt ontworpen rondom jouw merkidentiteit en de specifieke behoeften van je doelgroep. Geen overbodige ballast, maar pure snelheid en conversiekracht.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Bij Sarte Global combineren we geavanceerde e-commerce technologieën zoals <Link href="/woocommerce-webshop-op-maat" className="text-white underline hover:text-gray-300">WooCommerce op maat</Link> en <Link href="/shopify-webshop-op-maat" className="text-white underline hover:text-gray-300">Shopify op maat</Link> om een naadloze shopping-ervaring te creëren die bezoekers direct omzet in betalende klanten.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton label="Vraag voorstel aan" variant="primary" projectType="Webshop op maat voorstel" />
                <Link href="/ecommerce-oplossingen" className="btn btn-ghost">
                  Bekijk oplossingen <span className="arr">→</span>
                </Link>
              </div>
            </Reveal>

            <Reveal className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold">1</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Volledig Eigenaarschap</h3>
                    <p className="text-gray-400">Jouw data, klanten en platform zijn 100% van jou. Geen platform lock-in of onverwachte kosten.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold">2</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Maximale Snelheid (LCP)</h3>
                    <p className="text-gray-400">Schone code en geoptimaliseerde assets zorgen voor razendsnelle laadtijden en hogere posities in Google.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold">3</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Naadloze ERP & API Koppelingen</h3>
                    <p className="text-gray-400">Automatiseer voorraad, logistiek en administratie met foutloze API-integraties op maat.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Ons Ontwikkelingsproces */}
      <section className="py-24 border-y border-white/10 relative" id="proces">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow">Onze Werkwijze</span>
            <h2 className="h2 mt-2">
              Het <em>ontwikkelingsproces</em> van jouw maatwerk webshop.
            </h2>
            <p className="text-gray-400 mt-4">
              Van strategie tot lancering: een gestructureerd proces gericht op resultaat, conversie-optimalisatie en betrouwbare techniek.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Strategie & SEO Audit", desc: "We analyseren je markt, zoekintentie en doelen om het fundament te leggen." },
              { num: "02", title: "Uniek UX/UI Design", desc: "We ontwerpen een converterende storefront die perfect matcht met je merk." },
              { num: "03", title: "Maatwerk Ontwikkeling", desc: "We bouwen je shop met Next.js, Shopify of WooCommerce — snel en SEO-proof." },
              { num: "04", title: "Lancering & Groei", desc: "Na grondig testen gaat de webshop live en starten we de marketing-groeimotor." },
            ].map((step, index) => (
              <Reveal key={index} className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <span className="text-4xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors block mb-4">{step.num}</span>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <CTAButton label="Plan een adviesgesprek" variant="outline" projectType="Adviesgesprek proces" />
          </Reveal>
        </Container>
      </section>

      {/* SECTION 3: Waarom Bedrijven Voor Sarte Global Kiezen */}
      <section className="py-24 relative overflow-hidden" id="waarom-sarte-global">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white font-bold text-lg">E-commerce Bureau Nederland</span>
                <span className="text-gray-400 text-sm">Actief door heel het land: Amsterdam, Rotterdam, Utrecht en Eindhoven.</span>
              </div>
            </Reveal>

            <Reveal>
              <span className="eyebrow">Jouw E-commerce Partner</span>
              <h2 className="h2 mt-2 mb-6">
                Waarom ambitieuze merken voor <em>Sarte Global</em> kiezen.
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Senior Specialisten</h3>
                  <p className="text-gray-400">Jouw project wordt uitsluitend gebouwd en begeleid door senior developers en strategen met jarenlange ervaring in e-commerce.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Geïntegreerde Aanpak</h3>
                  <p className="text-gray-400">Design, code en SEO worden onder één dak ontwikkeld. Dit voorkomt miscommunicatie en resulteert in een perfect kloppend product.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Focus op ROI & CRO</h3>
                  <p className="text-gray-400">We bouwen niet alleen mooie plaatjes. We ontwerpen funnels die converteren en meetbaar bijdragen aan je bedrijfsresultaat.</p>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <CTAButton label="Vraag Direct Offerte Aan" variant="primary" projectType="Offerte via waarom-kiezen" />
                <Link href="/cases" className="btn btn-ghost">
                  Bekijk Cases <span className="arr">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SECTION 4: Veelgestelde Vragen Over Webshops Op Maat */}
      <section className="py-24 border-t border-white/10 relative" id="veelgestelde-vragen">
        <Container className="max-w-4xl">
          <Reveal className="text-center mb-16">
            <span className="eyebrow">FAQ</span>
            <h2 className="h2 mt-2">
              Veelgestelde vragen over <em>Webshops Op Maat</em>.
            </h2>
            <p className="text-gray-400 mt-4">
              Heb je een vraag over het laten maken van een professionele webshop? Vind direct antwoord op de meest gestelde vragen.
            </p>
          </Reveal>

          <Reveal className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl bg-white/[0.01] overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  className="w-full text-left p-6 flex justify-between items-center text-white hover:bg-white/[0.02] transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="font-semibold pr-4">{item.question}</span>
                  <span className={`text-xl transform transition-transform duration-300 ${openFaqIndex === index ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? "max-h-[300px] border-t border-white/5 opacity-100 p-6" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed text-sm">{item.answer}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="text-center mt-12 p-8 rounded-2xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto">
            <h3 className="text-white font-semibold text-lg mb-2">Staat je vraag er niet tussen?</h3>
            <p className="text-gray-400 text-sm mb-6">Neem gerust direct contact met ons op via WhatsApp of e-mail. We beantwoorden al je vragen graag.</p>
            <div className="flex justify-center gap-4">
              <CTAButton label="Neem contact op" variant="primary" projectType="Contact via FAQ" />
              <Link href="/contact" className="btn btn-ghost text-sm">
                Contactpagina
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
