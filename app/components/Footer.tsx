import Link from "next/link";
import { site } from "@/app/lib/site";
import { CopyEmail } from "@/app/components/CopyEmail";

const workLinks = [
  { name: "For Agencies", href: "/agencies/" },
  { name: "AI Features", href: "/ai-features/" },
  { name: "Products", href: "/products/" },
  { name: "FAQ", href: "/faq/" },
];

const companyLinks = [
  { name: "About", href: "/about/" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact", href: "/contact/" },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink text-sm text-slate-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-14 pb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold text-white">{site.name}</p>
          <p className="mb-3 text-brand-gold">{site.tagline}</p>
          <p className="leading-relaxed">
            {site.legalName}
            <br />
            {site.address[0]}
            <br />
            {site.address[1]}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-1 font-semibold text-white">Work with us</p>
          {workLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-1 font-semibold text-white">Company</p>
          {companyLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-1 font-semibold text-white">Contact</p>
          <CopyEmail
            linkClassName="hover:text-white"
            buttonClassName="text-slate-400 hover:bg-white/10 hover:text-white"
          />
          <a href={site.whatsappHref} className="hover:text-white">
            WhatsApp {site.phoneDisplay}
          </a>
          <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            YouTube
          </a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 border-t border-brand-line flex flex-wrap justify-between gap-2 text-[13px] text-slate-400">
        <span>
          SECP CUIN {site.secpCuin} · NTN {site.ntn} · D-U-N-S {site.duns}
        </span>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
