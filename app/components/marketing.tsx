import Link from "next/link";
import { Check } from "lucide-react";
import { site } from "@/app/lib/site";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1200px] mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`mb-4 text-sm font-semibold uppercase tracking-[0.08em] ${
        onDark ? "text-brand-cyan" : "text-brand-purple"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-heading text-3xl md:text-[40px] leading-tight font-bold text-brand-indigo ${className}`}
    >
      {children}
    </h2>
  );
}

type ButtonVariant = "gold" | "indigo" | "outline" | "outline-light";

const buttonStyles: Record<ButtonVariant, string> = {
  gold: "bg-brand-gold text-brand-indigo hover:bg-brand-gold/90",
  indigo: "bg-brand-indigo text-white hover:bg-brand-indigo/90",
  outline:
    "border-[1.5px] border-brand-indigo text-brand-indigo hover:bg-brand-indigo hover:text-white",
  "outline-light":
    "border-[1.5px] border-slate-300 text-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center min-h-12 px-7 py-3.5 rounded-[10px] font-semibold text-base transition-colors ${buttonStyles[variant]} ${className}`;
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4 text-[17px] leading-relaxed text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check className="mt-1 h-5 w-5 flex-none text-brand-purple" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Badge({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: "accent" | "muted";
}) {
  return (
    <span
      className={`self-start rounded-full px-2.5 py-1 text-xs font-semibold ${
        tone === "accent"
          ? "bg-brand-tint text-brand-purple-dark"
          : "bg-slate-100 text-slate-700"
      }`}
    >
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
  aside,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="bg-brand-indigo text-white">
      <Container className="py-20 md:py-24 flex flex-wrap items-center gap-14">
        <div className="flex-[1_1_520px] min-w-0">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-[56px] leading-[1.05] font-bold mb-6">
            {title}
          </h1>
          {children}
        </div>
        {aside}
      </Container>
    </section>
  );
}

export function CtaBand({
  title,
  buttonLabel,
  href = site.bookingUrl,
}: {
  title: string;
  buttonLabel: string;
  href?: string;
}) {
  return (
    <section className="bg-brand-gold">
      <Container className="py-16 md:py-[72px] flex flex-wrap items-center justify-between gap-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-indigo flex-[1_1_480px]">
          {title}
        </h2>
        <ButtonLink href={href} variant="indigo">
          {buttonLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}

export function Card({
  children,
  highlight = false,
  className = "",
}: {
  children: React.ReactNode;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-7 md:p-8 flex flex-col gap-4 ${
        highlight ? "border-2 border-brand-gold" : "border border-slate-200"
      } ${className}`}
    >
      {children}
    </div>
  );
}
