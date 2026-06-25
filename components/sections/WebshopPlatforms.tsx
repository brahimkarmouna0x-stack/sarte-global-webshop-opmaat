import { WEBSHOP_PLATFORMS_SECTION } from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

export function WebshopPlatforms() {
  return (
    <section className="nws" aria-labelledby="webshop-platforms-h">
      <Container>
        <Reveal as="div" className="nws__block" ariaLabelledby="webshop-platforms-h">
          <header className="nws__head">
            <span className="eyebrow">{WEBSHOP_PLATFORMS_SECTION.eyebrow}</span>
            <h2 className="h2 nws__title" id="webshop-platforms-h">
              {WEBSHOP_PLATFORMS_SECTION.titleLead} <em>{WEBSHOP_PLATFORMS_SECTION.titleEm}</em>
            </h2>
            <p className="sub nws__intro">{WEBSHOP_PLATFORMS_SECTION.sub}</p>
          </header>

          <ul className="nws__advantages" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {WEBSHOP_PLATFORMS_SECTION.platforms.map((platform) => (
              <li key={platform.title} className="nws__advantage">
                <div style={{ marginBottom: "1rem", color: "var(--accent)", width: "32px", height: "32px" }}>
                  <ServiceIcon name={platform.iconName} />
                </div>
                <h3 className="nws__advantage-title">{platform.title}</h3>
                
                <ul className="proj-stack" aria-label="Kenmerken" style={{ margin: "0.5rem 0 1rem 0" }}>
                  {platform.tags.map((tag) => (
                    <li key={tag} className="proj-chip" style={{ fontSize: "12px", padding: "4px 8px" }}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <p className="nws__advantage-desc">{platform.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
