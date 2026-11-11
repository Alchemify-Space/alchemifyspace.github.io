import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/app/lib/seo";
import { ArrowRight, Check } from "lucide-react";
import {
  ButtonLink,
  Card,
  Container,
  CtaBand,
  Eyebrow,
  SectionTitle,
} from "@/app/components/marketing";
import { site } from "@/app/lib/site";
import { JsonLd } from "@/app/components/JsonLd";
import { OwnerScreen, StaffScreen } from "@/app/components/GlamioScreens";

export const metadata = pageMetadata({
  title: "Alchemify Space | Flutter + AI App Studio for Agencies",
  absoluteTitle: true,
  description:
    "White-label Flutter development for agencies, AI features for existing apps, and ready-made booking apps. A registered software company in Pakistan.",
  path: "/",
});

// Fill these in as real projects and quotes come in. Empty lists hide their section.
const shippedApps: { name: string; summary: string; href: string; linkLabel: string }[] = [];
const testimonials: { quote: string; name: string; role: string }[] = [];

const trustFacts = [
  `SECP-registered company · CUIN ${site.secpCuin}`,
  `D-U-N-S ${site.duns}`,
  "Verified Google Play developer",
  "NDA and white-label friendly",
  "4+ hours overlap with UK and EU",
];

const offers = [
  {
    eyebrow: "For agencies",
    title: "Your Flutter team, under your brand",
    points: [
      "New apps and feature work on existing ones",
      "NDA, your repo, your client stays yours",
      "Start with a small paid trial task",
    ],
    href: "/agencies/",
    link: "How white-label works",
  },
  {
    eyebrow: "AI for your app",
    title: "Add AI to the app you already have",
    points: [
      "Support assistant trained on your own content",
      "Natural-language search and booking",
      "Fixed-scope packages, fixed prices",
    ],
    href: "/ai-features/",
    link: "See the AI packages",
  },
  {
    eyebrow: "Ready-made apps",
    title: "Launch a booking app in weeks",
    points: [
      "Full source: Flutter app and web admin",
      "Runs on Supabase, no PHP server",
      "Buy as-is or have us brand it for you",
    ],
    href: "/products/",
    link: "Browse products",
  },
];

const glamioFeatures = [
  "Live free-time booking, no double bookings",
  "Staff schedules that update live",
  "Walk-in and phone bookings",
  "Push reminders 24 h and 1 h before",
  "Owner dashboard and calendar",
  "Set up in minutes on Supabase",
];

const steps = [
  { title: "20-minute call", text: "You tell us the goal. We tell you honestly if we are the right fit." },
  { title: "Fixed quote", text: "Scope, milestones and price in writing. Small trial task first if you prefer." },
  { title: "Build in the open", text: "Code in your repo, a written update every week, test builds as we go." },
  { title: "Launch and support", text: "Store release, handover docs, and a support period agreed up front." },
];

const stack = [
  "Flutter and Dart",
  "Supabase",
  "Firebase",
  "Next.js admin panels",
  "Claude and OpenAI APIs",
  "On-device ML",
  "App Store and Google Play release",
];

const faqs = [
  {
    q: "Will our client know you exist?",
    a: "Only if you want them to. We sign your NDA, work under your brand and never contact your client directly.",
  },
  { q: "Who owns the code?", a: "You do, once paid. It lives in your repository from day one." },
  {
    q: "How do payments work?",
    a: "Milestone payments for projects, monthly for retainers. We invoice as a registered company.",
  },
  {
    q: "What time zone do you work in?",
    a: "Pakistan (UTC+5). We keep at least 4 hours of overlap with your working day.",
  },
];

function PhoneMockup() {
  return (
    <div className="hidden sm:flex flex-[0_1_320px] justify-center" aria-hidden="true">
      <div className="w-[300px] rounded-[44px] bg-brand-ink p-3">
        <div className="flex flex-col gap-3.5 rounded-[34px] bg-white px-5 py-7 text-slate-900">
          <p className="text-xs text-slate-600">Book at</p>
          <p className="-mt-2.5 font-heading text-[22px] font-bold text-brand-indigo">Studio Nine</p>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between rounded-xl border-[1.5px] border-brand-gold bg-brand-tint p-3">
              <span className="font-semibold">Skin fade</span>
              <span className="text-slate-600">45 min</span>
            </div>
            <div className="flex justify-between rounded-xl border border-slate-200 p-3">
              <span className="font-semibold">Beard trim</span>
              <span className="text-slate-600">20 min</span>
            </div>
          </div>
          <p className="mt-1.5 text-[13px] font-semibold">Saturday, 14 Nov</p>
          <div className="grid grid-cols-3 gap-2 text-center text-[13px]">
            <span className="rounded-lg border border-slate-200 py-2">10:00</span>
            <span className="rounded-lg bg-brand-indigo py-2 text-white">14:30</span>
            <span className="rounded-lg border border-slate-200 py-2">16:00</span>
          </div>
          <div className="mt-1.5 rounded-xl bg-brand-mist p-3 text-[13px] leading-normal">
            <p className="mb-1 font-semibold text-brand-indigo">AI assistant</p>
            <p className="text-slate-700">&ldquo;Ali is free at 14:30 for a skin fade. Book it?&rdquo;</p>
          </div>
          <div className="mt-2 rounded-xl bg-brand-gold p-3.5 text-center text-[15px] font-semibold text-brand-indigo">
            Confirm booking
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
        }}
      />
      {/* Hero */}
      <section className="bg-brand-indigo text-white">
        <Container className="py-20 md:py-24 flex flex-wrap items-center gap-16">
          <div className="flex-[1_1_520px] min-w-0">
            <Eyebrow onDark>Flutter + AI studio</Eyebrow>
            <h1 className="font-heading text-4xl md:text-[56px] leading-[1.05] font-bold mb-6">
              Flutter apps with AI built in, delivered for agencies and growing businesses.
            </h1>
            <p className="mb-9 max-w-[560px] text-lg md:text-[19px] leading-relaxed text-slate-200">
              White-label mobile development, AI features for apps you already run, and ready-made
              booking apps you can launch in weeks.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={site.bookingUrl}>Book a 20-minute call</ButtonLink>
              <ButtonLink href="/products/" variant="outline-light">
                Explore Glamio
              </ButtonLink>
            </div>
          </div>
          <PhoneMockup />
        </Container>
      </section>

      {/* Trust strip */}
      <section aria-label="Company facts" className="border-b border-slate-200 bg-brand-mist">
        <Container className="py-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-5 text-sm font-medium text-slate-700">
          {trustFacts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </Container>
      </section>

      {/* Three ways */}
      <section>
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-3">Three ways to work with us</SectionTitle>
          <p className="mb-12 max-w-[640px] text-lg text-slate-600">
            Pick the one that matches where you are. Each starts with a short call and a fixed quote.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {offers.map((o) => (
              <Card key={o.href}>
                <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-brand-purple">
                  {o.eyebrow}
                </p>
                <h3 className="font-heading text-2xl font-bold text-brand-indigo">{o.title}</h3>
                <ul className="list-disc pl-5 leading-loose text-slate-700">
                  {o.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link
                  href={o.href}
                  className="mt-auto inline-flex items-center gap-1.5 font-semibold text-brand-purple hover:text-brand-purple-dark"
                >
                  {o.link} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Glamio */}
      <section id="work" className="bg-brand-mist">
        <Container className="py-20 md:py-24 flex flex-wrap items-center gap-14">
          <div className="flex-[1_1_480px] min-w-0">
            <Eyebrow>Our product · launching January 2027</Eyebrow>
            <SectionTitle className="mb-4">Glamio: salon and barber booking</SectionTitle>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              A complete booking system we built and run ourselves: customer app, staff app and owner
              admin. It is the same engine we use for client projects.
            </p>
            <ul className="mb-8 grid gap-x-6 gap-y-3 text-slate-700 sm:grid-cols-2">
              {glamioFeatures.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-brand-purple" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/products/" variant="indigo">
                View Glamio
              </ButtonLink>
              <ButtonLink href="/contact/" variant="outline">
                Need it customised?
              </ButtonLink>
            </div>
          </div>
          <div className="flex-[1_1_400px] min-w-0 grid grid-cols-2 gap-6 text-slate-600" aria-hidden="true">
            <StaffScreen className="w-full max-w-[230px] justify-self-end" />
            <OwnerScreen className="mt-12 w-full max-w-[230px]" />
          </div>
        </Container>

        {shippedApps.length > 0 && (
          <Container className="pb-20 md:pb-24">
            <h3 className="mb-6 font-heading text-2xl font-bold text-brand-indigo">Apps we have shipped</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shippedApps.map((app) => (
                <div key={app.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="mb-2 font-semibold text-brand-indigo">{app.name}</p>
                  <p className="mb-4 leading-normal text-slate-600">{app.summary}</p>
                  <a href={app.href} className="text-sm font-semibold text-brand-purple hover:text-brand-purple-dark">
                    {app.linkLabel} →
                  </a>
                </div>
              ))}
            </div>
          </Container>
        )}
      </section>

      {/* Process */}
      <section>
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-12">How a project runs</SectionTitle>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-[3px] border-brand-gold pt-5">
                <p className="mb-2 font-heading text-[15px] font-semibold text-brand-purple">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-xl font-semibold text-brand-indigo">{s.title}</h3>
                <p className="leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Stack */}
      <section className="bg-brand-indigo text-white">
        <Container className="py-16 md:py-[72px] flex flex-wrap items-center justify-between gap-8">
          <div className="flex-[1_1_480px] min-w-0">
            <h2 className="mb-3 font-heading text-3xl font-bold">The stack we specialise in</h2>
            <p className="leading-relaxed text-slate-200">
              We go deep on a few tools instead of claiming all of them.
            </p>
          </div>
          <div className="flex-[1_1_480px] flex flex-wrap gap-2.5">
            {stack.map((s) => (
              <span key={s} className="rounded-full border border-brand-chip px-4 py-2 text-[15px]">
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about">
        <Container className="py-20 md:py-24 flex flex-wrap items-center gap-14">
          <div className="relative flex-[0_1_380px] aspect-square overflow-hidden rounded-[20px]">
            <Image
              src={site.founder.studioPhoto}
              alt="Javeed Ishaq, founder of Alchemify Space, at his studio desk"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              className="object-cover"
            />
          </div>
          <div className="flex-[1_1_480px] min-w-0">
            <Eyebrow>Who you work with</Eyebrow>
            <SectionTitle className="mb-4">Javeed Ishaq, founder and lead developer</SectionTitle>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              Javeed builds Flutter apps, Supabase backends and AI features, and shares how on the
              Alchemify Space YouTube channel.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-slate-700">
              You talk to the person who writes the code. No account managers, no hand-offs.
            </p>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-purple hover:text-brand-purple-dark"
            >
              Watch us build on YouTube <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>

      {testimonials.length > 0 && (
        <section className="bg-brand-mist">
          <Container className="py-20 md:py-24">
            <SectionTitle className="mb-10">What clients say</SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-7">
                  <blockquote className="mb-5 text-[17px] leading-relaxed text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm text-slate-600">
                    {t.name}, {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className={testimonials.length > 0 ? "" : "bg-brand-mist"}>
        <Container className="max-w-[880px] py-20 md:py-24">
          <SectionTitle className="mb-8">Questions agencies ask</SectionTitle>
          <div>
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className={`border-t border-slate-200 py-5 ${i === faqs.length - 1 ? "border-b" : ""}`}
              >
                <summary className="cursor-pointer text-lg font-semibold text-brand-indigo">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
          <Link href="/faq/" className="mt-6 inline-block font-semibold text-brand-purple hover:text-brand-purple-dark">
            More questions →
          </Link>
        </Container>
      </section>

      <CtaBand title="Have a project or an overflow problem? Let's talk." buttonLabel="Book a 20-minute call" />
    </>
  );
}
