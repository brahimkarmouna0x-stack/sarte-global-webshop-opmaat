import { WEBSHOP_BENEFITS_SECTION } from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

export function WebshopBenefits() {
  return (
    <section className="nws" aria-labelledby="webshop-benefits-h">
      <Container>
        <Reveal as="div" className="nws__block" ariaLabelledby="webshop-benefits-h">
          <header className="nws__head">
            <span className="eyebrow">{WEBSHOP_BENEFITS_SECTION.eyebrow}</span>
            <h2 className="h2 nws__title" id="webshop-benefits-h">
              {WEBSHOP_BENEFITS_SECTION.titleLead} <em>{WEBSHOP_BENEFITS_SECTION.titleEm}</em>
            </h2>
            <p className="sub nws__intro">{WEBSHOP_BENEFITS_SECTION.sub}</p>
          </header>

          <ul className="nws__advantages">
            {WEBSHOP_BENEFITS_SECTION.benefits.map((benefit) => (
              <li key={benefit.title} className="nws__advantage">
                <div style={{ marginBottom: "1rem", color: "var(--accent)", width: "32px", height: "32px" }}>
                  <ServiceIcon name={benefit.iconName} />
                </div>
                <h3 className="nws__advantage-title">{benefit.title}</h3>
                <p className="nws__advantage-desc">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
