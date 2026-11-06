import Link from "next/link";
import { CtaGroup } from "@/components/site/CtaGroup";
import { navigation, site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(15,27,51,0.06)] bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-3 md:px-8">
        <Link className="rc-brand mr-auto shrink-0" href="/">
          <img alt={site.logoAlt} className="rc-logo" src={site.logo} />
        </Link>
        <nav className="order-3 flex w-full flex-wrap items-center gap-1 md:order-none md:w-auto" aria-label="Primary">
          {navigation.links.map((link) => (
            <Link
              className="rounded-full px-3 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <CtaGroup layout="row" />
      </div>
    </header>
  );
}
