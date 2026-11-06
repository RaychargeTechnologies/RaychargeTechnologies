import type { Metadata } from "next";
import { CtaGroup } from "@/components/site/CtaGroup";
import { getResourcePage, type resourcePages } from "@/data/pages";

export function contentMetadata(slug: keyof typeof resourcePages): Metadata {
  const page = getResourcePage(slug);
  return { title: page.title, description: page.summary };
}

export function ContentPage({ slug }: { slug: keyof typeof resourcePages }) {
  const page = getResourcePage(slug);
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="font-label-md text-label-md font-semibold uppercase tracking-wider text-primary-container">{page.eyebrow}</p>
      <h1 className="mt-3 font-headline-lg text-4xl text-[#0A1A5C]">{page.title}</h1>
      <p className="mt-5 font-body-md text-lg leading-relaxed text-on-surface-variant">{page.summary}</p>
      <CtaGroup className="mt-8" />
    </main>
  );
}
