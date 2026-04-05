import React from "react";
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.trivexon.in";
const DEFAULT_IMAGE = `${BASE_URL}/images/hero.png`;

/**
 * Reusable SEO Head Component
 * Props:
 *  - title: string (page-specific title, ~50-60 chars)
 *  - description: string (~150-160 chars, keyword-rich)
 *  - canonical: string (relative path, e.g. "/about")
 *  - image: string (absolute URL for OG image)
 *  - type: "website" | "article" (OG type)
 *  - schema: object | null (JSON-LD structured data for page-level schema)
 *  - keywords: string (comma-separated keywords for this page)
 */
export default function SEOHead({
  title,
  description,
  canonical = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  schema = null,
  keywords = "",
}) {
  const fullTitle = title
    ? `${title} | Trivexon`
    : "Trivexon — Web Design & AI Automation Agency in Mumbai";

  const canonicalUrl = `${BASE_URL}${canonical}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Trivexon" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD Schema (page-specific) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

/* ─── Pre-built Schema Helpers ───────────────────────────────── */

/** Generates a Service schema for service pages */
export function buildServiceSchema({ name, description, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `${BASE_URL}${url}`,
    "image": image ? `${BASE_URL}${image}` : DEFAULT_IMAGE,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Trivexon",
      "url": BASE_URL,
      "telephone": "+91-8655685272",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": name
  };
}

/** Generates a BreadcrumbList schema */
export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${BASE_URL}${item.path}`
    }))
  };
}

/** Generates a FAQPage schema */
export function buildFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a
      }
    }))
  };
}
