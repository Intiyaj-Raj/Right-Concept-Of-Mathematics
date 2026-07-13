export type SeoConfig = {
  seoTitle: string;
  metaDescription: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    type: "website";
  };
  twitter: {
    title: string;
    description: string;
  };
};

const baseUrl = "https://rightconceptofmathematics.com";

export const seoByRoute: Record<string, SeoConfig> = {
  "/": {
    seoTitle: "Best Maths Coaching in Motihari | RCM",
    metaDescription:
      "Best Maths Coaching in Motihari by N. M. Sir. Offline classroom coaching for Class 11, Class 12, JEE Main & JEE Advanced. Join today.",
    canonical: `${baseUrl}/`,
    openGraph: {
      title: "Best Maths Coaching in Motihari | Right Concept of Mathematics",
      description:
        "Offline Maths Coaching in Motihari by N. M. Sir for Class 11, Class 12, JEE Main & JEE Advanced.",
      type: "website",
    },
    twitter: {
      title: "Best Maths Coaching in Motihari | RCM",
      description:
        "Maths Coaching in Motihari (Offline) by N. M. Sir. Class 11, Class 12, JEE Main & JEE Advanced.",
    },
  },

  "/about": {
    seoTitle: "About Right Concept of Mathematics | N. M. Sir",
    metaDescription:
      "Learn why students choose Maths Coaching in Motihari with N. M. Sir. Offline, concept-first classroom learning for JEE & boards.",
    canonical: `${baseUrl}/about`,
    openGraph: {
      title: "About Right Concept of Mathematics | Motihari",
      description:
        "Experience concept-first offline Maths Coaching in Motihari by N. M. Sir for Class 11/12 and JEE.",
      type: "website",
    },
    twitter: {
      title: "About Right Concept of Mathematics | Motihari",
      description:
        "Offline Maths Coaching in Motihari by N. M. Sir. Concept-first teaching for JEE Main/Advanced.",
    },
  },

  "/courses": {
    seoTitle: "Maths Coaching Courses in Motihari | RCM",
    metaDescription:
      "Choose Maths Coaching in Motihari for Class 11 Maths, Class 12 Maths, JEE Main Maths & JEE Advanced Maths. Offline classes by N. M. Sir.",
    canonical: `${baseUrl}/courses`,
    openGraph: {
      title: "Maths Coaching Courses in Motihari | RCM",
      description:
        "Best Maths Coaching in Motihari with offline classroom training for Class 11/12 and JEE by N. M. Sir.",
      type: "website",
    },
    twitter: {
      title: "Maths Coaching Courses in Motihari | RCM",
      description:
        "Offline Maths Coaching in Motihari for Class 11, Class 12, JEE Main & JEE Advanced.",
    },
  },

  "/faculty": {
    seoTitle: "Meet N. M. Sir | Faculty | Motihari Maths Coaching",
    metaDescription:
      "N. M. Sir leads Best Maths Coaching in Motihari with offline classroom teaching. Concept-first methods for Class 11/12 and JEE.",
    canonical: `${baseUrl}/faculty`,
    openGraph: {
      title: "Meet N. M. Sir | Motihari Maths Coaching",
      description:
        "Maths Coaching in Motihari led by N. M. Sir. Offline concept-first classes for JEE and board exams.",
      type: "website",
    },
    twitter: {
      title: "Meet N. M. Sir | Faculty | Motihari",
      description:
        "Offline Maths Coaching in Motihari by N. M. Sir for Class 11/12 and JEE Main/Advanced.",
    },
  },

  "/results": {
    seoTitle: "Motihari Maths Coaching Results | RCM Success Stories",
    metaDescription:
      "See the results of Best Maths Coaching in Motihari. Offline coaching by N. M. Sir for Class 11/12 and JEE Main & Advanced.",
    canonical: `${baseUrl}/results`,
    openGraph: {
      title: "Motihari Maths Coaching Results | RCM",
      description:
        "Maths Coaching in Motihari offline by N. M. Sir. JEE selections, rankers, and student success stories.",
      type: "website",
    },
    twitter: {
      title: "Motihari Maths Coaching Results | RCM",
      description:
        "Best Maths Coaching in Motihari results by N. M. Sir: JEE selections, top ranks, success rate.",
    },
  },

  "/gallery": {
    seoTitle: "RCM Gallery | Offline Maths Coaching in Motihari",
    metaDescription:
      "Explore the gallery of Best Maths Coaching in Motihari. Offline classroom sessions and student achievements by N. M. Sir.",
    canonical: `${baseUrl}/gallery`,
    openGraph: {
      title: "RCM Gallery | Motihari Maths Coaching",
      description:
        "Gallery of offline Maths Coaching in Motihari by N. M. Sir—classrooms, events, and student success.",
      type: "website",
    },
    twitter: {
      title: "RCM Gallery | Motihari Maths Coaching",
      description:
        "Maths Coaching in Motihari offline: classrooms, events, and achievements by N. M. Sir.",
    },
  },

  "/blog": {
    seoTitle: "Maths Coaching Blog | Motihari | RCM Study Tips",
    metaDescription:
      "Read study tips and expert guidance for Best Maths Coaching in Motihari. Concepts, JEE strategy, and board exam practice by N. M. Sir.",
    canonical: `${baseUrl}/blog`,
    openGraph: {
      title: "Maths Coaching Blog | Motihari | RCM",
      description:
        "Maths Coaching in Motihari blog: JEE Main/Advanced tips, concept learning, and study strategy.",
      type: "website",
    },
    twitter: {
      title: "Maths Coaching Blog | Motihari | RCM",
      description:
        "Offline Maths Coaching in Motihari study tips for Class 11/12 and JEE by N. M. Sir.",
    },
  },

  "/contact": {
    seoTitle: "Contact N. M. Sir | Motihari Maths Coaching",
    metaDescription:
      "Contact Right Concept of Mathematics for Best Maths Coaching in Motihari. Offline classroom coaching by N. M. Sir. Call or WhatsApp now.",
    canonical: `${baseUrl}/contact`,
    openGraph: {
      title: "Contact N. M. Sir | Motihari Maths Coaching",
      description:
        "Maths Coaching in Motihari contact page. Reach out for admissions, courses, and free demo classes.",
      type: "website",
    },
    twitter: {
      title: "Contact | Motihari Maths Coaching",
      description:
        "Best Maths Coaching in Motihari by N. M. Sir. WhatsApp or call for admissions and demo class.",
    },
  },
};

export function getSeoConfig(route: string): SeoConfig {
  return seoByRoute[route] ?? seoByRoute["/"];
}
