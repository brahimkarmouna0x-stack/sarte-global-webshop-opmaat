import { WEBSHOP_GROWTH_SECTION } from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

export function WebshopGrowth() {
  return (
    <section className="nws" aria-labelledby="webshop-growth-h">
      <Container>
        <Reveal as="div" className="nws__block" ariaLabelledby="webshop-growth-h">
          <header className="nws__head">
            <span className="eyebrow">{WEBSHOP_GROWTH_SECTION.eyebrow}</span>
            <h2 className="h2 nws__title" id="webshop-growth-h">
              {WEBSHOP_GROWTH_SECTION.titleLead} <em>{WEBSHOP_GROWTH_SECTION.titleEm}</em>
            </h2>
            <p className="sub nws__intro">{WEBSHOP_GROWTH_SECTION.sub}</p>
          </header>

          <ul className="nws__advantages">
            {WEBSHOP_GROWTH_SECTION.features.map((feature) => (
              <li key={feature.title} className="nws__advantage">
                <div style={{ marginBottom: "1rem", color: "var(--accent)", width: "32px", height: "32px" }}>
                  <ServiceIcon name={feature.iconName} />
                </div>
                <h3 className="nws__advantage-title">{feature.title}</h3>
                <p className="nws__advantage-desc">{feature.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
