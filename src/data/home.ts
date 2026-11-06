export type Service = {
  title: string;
  body: string;
};

export type Project = {
  name: string;
  industry: string;
  status: string;
  summary: string;
  href: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const hero = {
  headline: "Your Business, Built To Run Smarter.",
  supporting:
    "Automate your business, eliminate repetitive tasks and scale with confidence.",
  image: {
    src: "/assets/product-design.png",
    alt: "A product interface for tracking operations, reports, and design decisions",
  },
};

export const introduction = {
  body: "RayCharge helps businesses design and build practical software solutions that simplify their operations, connect their workflows and help them run efficiently.",
  image: {
    src: "/assets/images/raycharge-logo.png",
    alt: "RayCharge Technologies",
  },
};

export const services = {
  intro: "Designed for brands ready to grow. Technology that works the way your business does.",
  items: [
    {
      title: "Custom Software Development",
      body: "Software built around your workflow, your staff and your goals, not a foreign template you have to bend yourself around.",
    },
    {
      title: "Business Process Automation",
      body: "The copying, chasing and weekly reports your team does by hand can run on their own, so everyday operations flow better.",
    },
    {
      title: "Systems Integration",
      body: "Help the spreadsheets and tools you already use share information, so you stop entering the same figure twice.",
    },
  ] satisfies Service[],
};

export const projects = {
  intro: "Ideas turned into working solutions",
  items: [
    {
      name: "AgroPulse",
      industry: "Agriculture",
      status: "Prototype",
      summary: "Track production cycles, feed and mortality in one place instead of exercise books.",
      href: "/products/agropulse",
    },
    {
      name: "WealthTrack",
      industry: "Finance",
      status: "Beta",
      summary: "See where your money goes and build financial discipline that lasts past the first week.",
      href: "/products#wealthtrack",
    },
    {
      name: "InsightPlus",
      industry: "Education",
      status: "Prototype",
      summary: "Turn tutoring session data into clear student reports, reviewed by a person before they’re sent.",
      href: "/products#insightplus",
    },
  ] satisfies Project[],
};

export const process = {
  intro:
    "We understand first before building. Every business works differently. That's why we take the time to understand your operations, define the right approach and build solutions that work for your business.",
  steps: [
    {
      title: "Understand before we build",
      body: "We start by learning about your business, how your team works and the challenge you are facing.",
    },
    {
      title: "Find the right solution",
      body: "We examine existing workflows, identify inefficiencies and assess where technology can make a meaningful difference.",
    },
    {
      title: "We plan the way forward",
      body: "We map out the user experience, system architecture, project milestones and implementation. You review and approve before development begins.",
    },
    {
      title: "Build with purpose",
      body: "We implement your project and we share progress with you.",
    },
    {
      title: "Ready for the real world",
      body: "We test functionality, validate requirements and prepare solutions for use.",
    },
  ] satisfies ProcessStep[],
};

export const faq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "What services does your company offer?",
      answer:
        "We provide AI automation, custom software development, workflow optimization, and system integrations. Our solutions are designed to help businesses save time, improve efficiency, and scale with confidence.",
    },
    {
      question: "How can AI automation benefit my business?",
      answer:
        "AI automation can reduce repetitive tasks, minimize human error, improve response times, and streamline daily operations. We identify opportunities where automation can deliver meaningful results for your business.",
    },
    {
      question: "Can you build software tailored to my business needs?",
      answer:
        "Absolutely! We develop custom software based on your specific goals, workflows, and challenges. Whether you need a web application, internal management system, or a more complex platform, we build solutions around your requirements.",
    },
    {
      question: "How much does it cost to develop a custom solution?",
      answer:
        "The cost depends on the project's complexity, required features, integrations, and development timeline. After understanding your needs, we provide a tailored proposal with a clear scope and estimated cost.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on the scope and complexity. Smaller automation projects may take a few days or weeks, while larger software applications may require several months. We establish a realistic timeline before development begins.",
    },
    {
      question: "Do you provide support and maintenance after launch?",
      answer:
        "Yes! We can provide ongoing support, troubleshooting, updates, and maintenance to help ensure your solution continues to perform effectively as your business evolves. Support arrangements depend on the agreed project package.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is simple. Contact us or book a discovery call to discuss your goals, challenges, and ideas. We'll assess your needs and recommend a practical solution tailored to your business.",
    },
  ] satisfies FaqItem[],
};

export const closing = {
  intro: "Improve your business the RayCharge way.",
};
