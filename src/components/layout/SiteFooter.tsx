import Link from "next/link";
import { footer, site } from "@/data/site";

function FooterLink({ href, label }: { href: string; label: string }) {
  const className = "font-body-sm text-body-sm text-white/75 transition-colors hover:text-white";
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={className} href={href} rel="noopener noreferrer" target={href.startsWith("http") ? "_blank" : undefined}>
        {label}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#0A1A5C] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Link className="rc-brand" href="/">
            <img alt={site.logoAlt} className="rc-logo rc-logo--on-dark" src={site.logo} />
          </Link>
        </div>
        {footer.columns.map((column) => (
          <div key={column.title}>
            <h2 className="mb-4 font-label-md text-label-md font-semibold uppercase tracking-wider text-white/55">{column.title}</h2>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="mb-4 font-label-md text-label-md font-semibold uppercase tracking-wider text-white/55">Connect</h2>
          <ul className="flex flex-col gap-3">
            {footer.connect.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-white/70 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-body-sm text-body-sm">{footer.copyright}</p>
          <p className="font-body-sm text-body-sm">
            {footer.legal.map((link, index) => (
              <span key={link.href}>
                {index > 0 ? " · " : null}
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
