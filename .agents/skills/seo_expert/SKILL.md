---
name: SEO Expert
description: Expert guidelines, tools, checklists, and methodologies for Search Engine Optimization (SEO) including technical SEO, metadata optimization, structured data (JSON-LD), performance/Core Web Vitals tuning, sitemaps, robots.txt, and semantic HTML structure.
---

# SEO Expert Custom Skill

Use this skill when designing, auditing, implementing, or optimizing SEO components, metadata, structured data, web vitals, or HTML structure across the codebase.

---

## 1. Technical SEO Core Rules

### Canonical URLs
- **Rule**: Every indexable page must contain a single `<link rel="canonical" href="[absolute_url]" />` to prevent duplicate content issues.
- **E-commerce Handling**: Avoid generating canonical tags that include search queries, sort parameters, or filters (e.g., `?sort=price_desc`). Canonicalize back to the clean category/product base URL.
- **Example (Next.js App Router)**:
  ```typescript
  import { Metadata } from 'next';
  
  export const metadata: Metadata = {
    alternates: {
      canonical: 'https://www.sarteglobal.com/products/example-item',
    },
  };
  ```

### Sitemap & Robots.txt
- **Sitemap**: Keep sitemaps updated. Next.js dynamic sitemap creation using `app/sitemap.ts` is preferred for dynamic E-commerce inventory.
- **Robots.txt**: Ensure `robots.txt` points directly to the sitemap(s) and explicitly disallows search query pages, user account areas, cart/checkout paths, and admin routes.
  ```text
  User-agent: *
  Allow: /
  Disallow: /search?
  Disallow: /cart
  Disallow: /checkout
  Disallow: /account
  Disallow: /api/
  
  Sitemap: https://www.sarteglobal.com/sitemap.xml
  ```

### Internationalization (hreflang)
- If the site supports multiple regions/languages, add `hreflang` tags pointing to all language/locale variants of the page, plus a `x-default` fallback.
  ```typescript
  alternates: {
    canonical: 'https://www.sarteglobal.com/products/example',
    languages: {
      'nl-NL': 'https://www.sarteglobal.com/nl/products/example',
      'en-US': 'https://www.sarteglobal.com/en/products/example',
    },
  }
  ```

---

## 2. Next.js Metadata API Best Practices

Use the native Next.js Metadata API (`metadata` export or `generateMetadata`) to define tags. Do NOT manually inject meta tags in `<head>` unless using a legacy Pages Router setup.

### Title & Description Guidelines
- **Title Tag**: Limit to **50–60 characters**. Format: `Primary Keyword - Secondary Keyword | Brand Name` or `Product Name | Category | Brand Name`.
- **Meta Description**: Limit to **120–155 characters**. Include a clear call to action (CTA), product availability, or unique selling point (USP).

### Open Graph (OG) & Twitter Cards
Always provide rich metadata for social sharing:
```typescript
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.id);
  const title = `${product.title} - Sarte Global`;
  const description = product.description.slice(0, 155);
  const imageUrl = product.images[0]?.url || 'https://www.sarteglobal.com/og-default.jpg';

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.sarteglobal.com/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.sarteglobal.com/products/${product.slug}`,
      siteName: 'Sarte Global',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      locale: 'nl_NL',
      type: 'og:product',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@SarteGlobal',
    },
  };
}
```

---

## 3. Structured Data (JSON-LD) Templates

Structured data helps search engines understand the content and enables rich snippets (reviews, pricing, availability).

### A. Product Schema (E-commerce Critical)
Place this on all Product Details Pages (PDP):
```tsx
import { Product } from '@/types';

export function ProductSchema({ product }: { product: Product }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'image': product.images.map((img) => img.url),
    'description': product.description,
    'sku': product.sku,
    'mpn': product.mpn || product.sku,
    'brand': {
      '@type': 'Brand',
      'name': product.brandName || 'Sarte Global',
    },
    'offers': {
      '@type': 'Offer',
      'url': `https://www.sarteglobal.com/products/${product.slug}`,
      'priceCurrency': product.currencyCode || 'EUR',
      'price': product.price.toString(),
      'priceValidUntil': new Date(Date.now() + 31536000000).toISOString().split('T')[0], // 1 year from now
      'itemCondition': 'https://schema.org/NewCondition',
      'availability': product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      'shippingDetails': {
        '@type': 'OfferShippingDetails',
        'shippingDestination': {
          '@type': 'DefinedRegion',
          'addressCountry': 'NL',
        },
        'deliveryTime': {
          '@type': 'ShippingDeliveryTime',
          'handlingTime': {
            '@type': 'QuantitativeValue',
            'minValue': 0,
            'maxValue': 1,
            'unitCode': 'DAY',
          },
          'transitTime': {
            '@type': 'QuantitativeValue',
            'minValue': 1,
            'maxValue': 3,
            'unitCode': 'DAY',
          },
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

### B. Breadcrumb Schema
Place this on category and product pages to show search hierarchy:
```tsx
export function BreadcrumbsSchema({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

---

## 4. Semantic HTML & On-Page SEO Checklist

- [ ] **Single H1 Tag**: Exactly one `<h1>` per page. Ensure it aligns with the main search intent.
- [ ] **Heading Order**: Never skip heading levels (e.g., `<h2` should follow `<h1>`, not `<h4>`).
- [ ] **Image Alt Attributes**: Every image must have a descriptive `alt` attribute. If it's purely decorative, use `alt=""` and `role="presentation"`.
- [ ] **Link Anchor Text**: Avoid generic links like "Read More" or "Click Here". Use descriptive, keyword-rich link texts (e.g., "Bekijk onze stalen deuren collectie").
- [ ] **Internal Linking**: Maintain a strong internal linking structure, especially linking from high-authority pages (homepage, main categories) to newly created products or blogs.
- [ ] **Table Structure**: Use proper `<thead>`, `<tbody>`, `<th>`, and `<td>` for structured data tables.

---

## 5. Web Vitals & Performance Optimization

Speed and visual stability are ranking factors (Core Web Vitals).

- **Largest Contentful Paint (LCP)**:
  - Optimize the LCP element (usually the hero image or main product image).
  - Use `next/image` with the `priority` property for the primary above-the-fold image: `<Image src="..." alt="..." priority />`.
- **Cumulative Layout Shift (CLS)**:
  - Ensure all images and video tags have explicit `width` and `height` aspect ratios.
  - Reserve vertical height for dynamically loaded contents (ads, banners, sliders) using CSS skeletons or min-height placeholders.
- **Interaction to Next Paint (INP)**:
  - Keep JavaScript tasks short. Break up long tasks using `requestIdleCallback` or yield patterns.
  - Optimize dynamic filter actions on collection pages to run smoothly without locking UI rendering.

---

## 6. Audit & Validation Commands
When checking code or layout adjustments, run SEO compliance audits if applicable:
- Use developer tooling to inspect rendered output for `<meta>` structures.
- Validate JSON-LD outputs using external schema markup testing tools or local linters.
