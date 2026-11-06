export type ResourcePage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
};

export const resourcePages = {
  insights: {
    slug: "insights",
    title: "Insights",
    eyebrow: "Notes",
    summary:
      "Practical notes on operations and software will be published here. If you want to talk through a problem now, start with a discovery call.",
  },
  careers: {
    slug: "careers",
    title: "Careers",
    eyebrow: "Company",
    summary:
      "We work with people who like practical software and clear communication. Write to the engineering desk if you want to build with the Abuja team.",
  },
  documentation: {
    slug: "documentation",
    title: "Documentation",
    eyebrow: "Resources",
    summary:
      "Client documentation is shared as part of delivery. If you need access to a system we already run with you, contact the engineering desk and name the product.",
  },
  help: {
    slug: "help",
    title: "Help Center",
    eyebrow: "Resources",
    summary:
      "For a live system, email the engineering desk with the product name and what stopped working. We reply during Abuja business hours.",
  },
  privacy: {
    slug: "privacy",
    title: "Privacy",
    eyebrow: "Legal",
    summary:
      "Questions about how RayCharge handles project information can be sent to the engineering desk. A full privacy notice will be published here.",
  },
  terms: {
    slug: "terms",
    title: "Terms",
    eyebrow: "Legal",
    summary:
      "Project terms are agreed in writing before work starts. If you need the current terms for an engagement, contact the engineering desk.",
  },
} satisfies Record<string, ResourcePage>;

export function getResourcePage(slug: keyof typeof resourcePages) {
  return resourcePages[slug];
}
