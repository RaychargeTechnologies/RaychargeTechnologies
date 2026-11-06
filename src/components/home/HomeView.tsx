import Link from "next/link";
import { CtaGroup } from "@/components/site/CtaGroup";
import { closing, faq, hero, introduction, process, projects, services } from "@/data/home";

export function HomeView() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(25,180,219,0.18),transparent_42%),linear-gradient(180deg,#faf9ff_0%,#eef4ff_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="font-display-hero text-4xl leading-tight tracking-tight text-[#0A1A5C] md:text-display-hero">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-xl font-body-md text-lg text-on-surface-variant">{hero.supporting}</p>
            <CtaGroup className="mt-8" />
          </div>
          <div className="rounded-[28px] bg-[#ebf0f3] p-3 shadow-[0_24px_48px_-12px_rgba(10,26,92,0.18)]">
            <img alt={hero.image.alt} className="w-full rounded-[22px] object-cover" src={hero.image.src} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
        <div className="order-2 flex min-h-72 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#0A1A5C] via-[#0B63C5] to-[#19B4DB] p-10 lg:order-1">
          <img alt={introduction.image.alt} className="w-full max-w-md rounded-2xl bg-white px-6 py-5" src={introduction.image.src} />
        </div>
        <div className="order-1 lg:order-2">
          <p className="font-body-md text-xl leading-relaxed text-on-surface md:text-2xl">{introduction.body}</p>
        </div>
      </section>

      <section className="bg-[#f4f7fc]" id="services">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
          <h2 className="max-w-3xl font-headline-lg text-headline-lg text-[#0A1A5C] md:text-4xl">{services.intro}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.items.map((item, index) => (
              <article className="rounded-3xl bg-white p-6 shadow-[0_12px_32px_-16px_rgba(10,26,92,0.2)]" key={item.title}>
                <span className="font-label-md text-label-md font-semibold text-primary-container">0{index + 1}</span>
                <h3 className="mt-4 font-title-md text-title-md text-[#0A1A5C]">{item.title}</h3>
                <p className="mt-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24" id="projects">
        <h2 className="font-headline-lg text-headline-lg text-[#0A1A5C] md:text-4xl">{projects.intro}</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.items.map((item) => (
            <Link
              className="group flex h-full flex-col rounded-3xl border border-[rgba(15,27,51,0.06)] bg-white p-6 shadow-[0_12px_32px_-18px_rgba(10,26,92,0.25)] transition-transform duration-200 hover:-translate-y-1"
              href={item.href}
              key={item.name}
            >
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
                {item.industry} · {item.status}
              </p>
              <h3 className="mt-3 font-title-md text-title-md text-[#0A1A5C]">{item.name}</h3>
              <p className="mt-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{item.summary}</p>
              <span className="mt-6 font-label-md text-label-md font-semibold text-primary-container">View project</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#0A1A5C] text-white" id="process">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
          <h2 className="max-w-4xl font-headline-lg text-2xl leading-snug text-white md:text-4xl">{process.intro}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {process.steps.map((step, index) => (
              <article className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm" key={step.title}>
                <span className="font-label-md text-label-md font-semibold text-[#19B4DB]">0{index + 1}</span>
                <h3 className="mt-3 font-title-md text-title-md text-white">{step.title}</h3>
                <p className="mt-3 font-body-sm text-body-sm leading-relaxed text-white/75">{step.body}</p>
              </article>
            ))}
          </div>
          <CtaGroup className="mt-10" tone="onDark" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 lg:py-24" id="faq">
        <h2 className="font-headline-lg text-headline-lg text-[#0A1A5C] md:text-4xl">{faq.title}</h2>
        <div className="mt-8 divide-y divide-[rgba(15,27,51,0.08)]">
          {faq.items.map((item) => (
            <details className="group py-4" key={item.question}>
              <summary className="cursor-pointer list-none font-title-md text-title-md text-[#0A1A5C] [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span className="material-symbols-outlined text-primary-container transition-transform group-open:rotate-45">add</span>
                </span>
              </summary>
              <p className="mt-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-[#0A1A5C] via-[#0B63C5] to-[#19B4DB] px-6 py-14 text-white md:px-12">
          <h2 className="max-w-2xl font-headline-lg text-3xl text-white md:text-4xl">{closing.intro}</h2>
          <CtaGroup className="mt-8" tone="onDark" />
        </div>
      </section>
    </main>
  );
}
