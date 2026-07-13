type SchemaInput = {
  baseUrl: string;
  siteName: string;
  facultyName: string;
  facultyRole: string;
  phone: string;
  address: {
    addressCountry: string;
    addressRegion: string;
    postalCode?: string;
    streetAddress?: string;
    locality?: string;
  };
  courses: Array<{
    name: string;
    description: string;
    url: string;
  }>;
  breadcrumbs: Array<{ name: string; item: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  reviews?: Array<{
    author: string;
    ratingValue: number;
    text: string;
  }>;
  imageUrls?: string[];
};

export function buildJsonLd(input: SchemaInput) {
  const {
    baseUrl,
    siteName,
    facultyName,
    facultyRole,
    phone,
    address,
    courses,
    breadcrumbs,
    faqs = [],
    reviews = [],
    imageUrls = [],
  } = input;

  const organization = {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: siteName,
    url: baseUrl,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
  };

  const eduOrg = {
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#educational-organization`,
    name: siteName,
    url: baseUrl,
    description:
      "Offline mathematics coaching for Class 11, Class 12, JEE Main & JEE Advanced.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        ...address,
      },
    },
    foundingDate: "2009",
    parentOrganization: {
      "@id": `${baseUrl}/#organization`,
    },
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#local-business`,
    name: siteName,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    telephone: phone,
    url: baseUrl,
  };

  const person = {
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: facultyName,
    jobTitle: facultyRole,
  };

  const courseObjects = courses.map((c) => ({
    "@type": "Course",
    name: c.name,
    description: c.description,
    provider: { "@id": `${baseUrl}/#educational-organization` },
    url: c.url,
  }));

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };

  const webSite = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: siteName,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: siteName,
    isPartOf: { "@id": `${baseUrl}/#website` },
  };

  const imageObjects = imageUrls.map((u) => ({
    "@type": "ImageObject",
    url: u,
  }));

  const faqPage =
    faqs.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  const reviewObjects = reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.ratingValue,
      bestRating: "5",
    },
    reviewBody: r.text,
  }));

  const aggregateRating =
    reviews.length > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: (
            reviews.reduce((a, b) => a + b.ratingValue, 0) / reviews.length
          ).toFixed(1),
          reviewCount: reviews.length,
        }
      : null;

  const schema = [
    organization,
    eduOrg,
    localBusiness,
    person,
    ...courseObjects,
    breadcrumbList,
    webSite,
    webPage,
    ...imageObjects,
    ...reviewObjects,
    ...(aggregateRating
      ? [{ "@type": "AggregateRating", ...aggregateRating }]
      : []),
    ...(faqPage ? [faqPage] : []),
  ].filter(Boolean);

  return schema;
}
