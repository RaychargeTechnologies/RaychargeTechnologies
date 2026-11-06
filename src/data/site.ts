export type NavLink = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export const site = {
  name: "RayCharge",
  legalName: "RayCharge",
  logo: "/assets/images/raycharge-logo.png",
  logoAlt: "RayCharge Technologies",
  email: "raychargetechnologies@gmail.com",
  year: 2026,
};

export const primaryActions: Cta[] = [
  { label: "Explore our services", href: "/services", variant: "secondary" },
  { label: "Discuss your project", href: "/contact", variant: "primary" },
];

export const navigation = {
  links: [
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Products", href: "/products" },
    { label: "Industry", href: "/industry" },
  ] satisfies NavLink[],
};

export const footer = {
  columns: [
    {
      title: "Services",
      links: [
        { label: "AI Automation", href: "/services" },
        { label: "Custom Software", href: "/services" },
        { label: "AI Agents & Chatbots", href: "/services" },
        { label: "Web Development", href: "/services" },
        { label: "API Integrations", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Process", href: "/#process" },
        { label: "Case Studies", href: "/#projects" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Insights", href: "/insights" },
        { label: "FAQs", href: "/#faq" },
        { label: "Documentation", href: "/documentation" },
        { label: "Help Center", href: "/help" },
      ],
    },
  ],
  connect: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "X / Twitter", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Email Us", href: "mailto:raychargetechnologies@gmail.com" },
  ] satisfies NavLink[],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ] satisfies NavLink[],
  copyright: `© ${site.year} RayCharge. All rights reserved.`,
};
