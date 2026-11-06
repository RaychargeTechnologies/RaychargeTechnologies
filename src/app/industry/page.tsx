import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/home";

export const metadata: Metadata = {
  title: "Industry",
  description: "Software for the industries RayCharge already builds in.",
};

export default function IndustryPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <p className="font-label-md text-label-md font-semibold uppercase tracking-wider text-primary-container">Industry</p>
      <h1 className="mt-3 max-w-3xl font-headline-lg text-4xl text-[#0A1A5C]">Software for the work your industry already does.</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.items.map((item) => (
          <Link className="rounded-3xl bg-white p-6 shadow-[0_12px_32px_-16px_rgba(10,26,92,0.2)]" href={item.href} key={item.industry}>
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">{item.status}</p>
            <h2 className="mt-3 font-title-md text-title-md text-[#0A1A5C]">{item.industry}</h2>
            <p className="mt-2 font-label-md text-label-md text-on-surface">{item.name}</p>
            <p className="mt-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{item.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
