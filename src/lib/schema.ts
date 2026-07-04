import { BRAND, APP, type Project } from "./projects";
import {
  APP_NAME,
  RESUME_BUILDER_YOUTUBE_SHORT,
  SITE_URL,
  IMAGES,
  SUPPORT_EMAIL,
  TRUST,
} from "./constants";

export function getSoftwareApplicationSchemaForProject(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.fullName,
    operatingSystem: "Android",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    downloadUrl: project.playStoreUrl,
    url: SITE_URL,
    image: `${SITE_URL}${project.icon}`,
    description: project.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: TRUST.rating,
      ratingCount: TRUST.ratingCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function getSoftwareApplicationSchema() {
  return getSoftwareApplicationSchemaForProject(APP);
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logo}`,
    email: SUPPORT_EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      email: SUPPORT_EMAIL,
      contactType: "customer support",
      availableLanguage: "English",
    },
    sameAs: [APP.playStoreUrl],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: SITE_URL,
    description: BRAND.description,
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${BRAND.logo}`,
      },
    },
  };
}

export function getBlogPostingSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: BRAND.name,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${BRAND.logo}`,
      },
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function getResumeBuilderVideoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: RESUME_BUILDER_YOUTUBE_SHORT.title,
    description: RESUME_BUILDER_YOUTUBE_SHORT.description,
    thumbnailUrl: RESUME_BUILDER_YOUTUBE_SHORT.thumbnailUrl,
    embedUrl: RESUME_BUILDER_YOUTUBE_SHORT.embedUrl,
    contentUrl: RESUME_BUILDER_YOUTUBE_SHORT.watchUrl,
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${BRAND.logo}`,
      },
    },
    potentialAction: {
      "@type": "WatchAction",
      target: RESUME_BUILDER_YOUTUBE_SHORT.watchUrl,
    },
  };
}

export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
