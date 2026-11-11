import { pageMetadata } from "@/app/lib/seo";
import { JsonLd } from "@/app/components/JsonLd";
import { site } from "@/app/lib/site";
import {
  Badge,
  ButtonLink,
  Card,
  CheckList,
  Container,
  CtaBand,
  PageHero,
  SectionTitle,
} from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "Add AI Features to Your Mobile App",
  description:
    "AI support assistant, smart search and booking, or AI content tools for the app you already have. Fixed scope and price, from a $400 audit.",
  path: "/ai-features/",
});

const packages = [
  {
    title: "AI Audit + Prototype",
    price: "from $400",
    time: "1 week",
    text: "We review your app and data, pick the AI feature with the best return, and build a working prototype of it.",
    highlight: true,
  },
  {
    title: "AI Support Assistant",
    price: "from $1,500",
    time: "2–3 weeks",
    text: "In-app chat that answers from your FAQ, services and policies, and hands over to a person when it should.",
    highlight: false,
  },
  {
    title: "Smart Search and Booking",
    price: "from $2,000",
    time: "2–4 weeks",
    text: "Customers type what they want in their own words and get matching results or open slots.",
    highlight: false,
  },
  {
    title: "AI Content Tools",
    price: "from $800",
    time: "1–2 weeks",
    text: "Drafts of product descriptions, review replies and push messages inside your admin panel.",
    highlight: false,
  },
];

const fits = [
  { title: "Salons and barbers", text: "Booking by chat, rebooking reminders written for each client." },
  { title: "Clinics", text: "Answer opening-hours and appointment questions before they reach reception." },
  { title: "Restaurants and delivery", text: "“Something spicy under $15” turns into a real menu search." },
  { title: "Gyms and studios", text: "Class finder and member questions answered any time of day." },
];

const steps = [
  { title: "Audit.", text: "We look at your app, your data and where users get stuck." },
  { title: "Prototype.", text: "One feature working on your real data, in a test build." },
  { title: "Build.", text: "Production version with limits, fallbacks and cost controls." },
  { title: "Measure.", text: "Usage and answer quality tracked, so you see what it is worth." },
];

const dataCare = [
  "Your data stays in your own backend.",
  "API keys live on the server, never in the app.",
  "We choose provider settings that keep your data out of model training where offered.",
  "Monthly AI cost estimated before you commit.",
];

function ChatExample() {
  return (
    <div className="flex-[1_1_400px] min-w-0 rounded-[20px] bg-white p-6 text-slate-900 flex flex-col gap-3.5">
      <p className="text-[13px] font-semibold text-slate-600">Example: AI booking assistant in a salon app</p>
      <div className="self-end max-w-[80%] rounded-[16px_16px_4px_16px] bg-brand-indigo px-4 py-3 text-[15px] leading-normal text-white">
        Do you have a fade on Saturday afternoon?
      </div>
      <div className="self-start max-w-[85%] rounded-[16px_16px_16px_4px] border border-slate-200 bg-brand-mist px-4 py-3 text-[15px] leading-normal">
        Yes. Ali is free at 14:30 and 16:00 on Saturday. A skin fade takes 45 minutes. Shall I book 14:30?
      </div>
      <div className="flex flex-wrap gap-2" aria-hidden="true">
        <span className="rounded-full border-[1.5px] border-brand-gold px-3.5 py-2 text-sm font-semibold text-brand-purple-dark">
          Book 14:30
        </span>
        <span className="rounded-full border border-slate-300 px-3.5 py-2 text-sm text-slate-700">
          Show other times
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-600">
        Answers come from the salon&apos;s own services, staff and live availability.
      </p>
    </div>
  );
}

export default function AiFeaturesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "AI feature integration for mobile apps",
          provider: { "@type": "Organization", name: site.name, url: site.url },
          offers: packages.map((p) => ({
            "@type": "Offer",
            name: p.title,
            description: p.text,
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: Number(p.price.replace(/[^0-9]/g, "")),
              priceCurrency: "USD",
            },
          })),
        }}
      />
      <PageHero eyebrow="AI for existing apps" title="Add AI to the app you already have." aside={<ChatExample />}>
        <p className="mb-9 max-w-[560px] text-lg md:text-[19px] leading-relaxed text-slate-200">
          No rebuild. We add one useful AI feature to your current Flutter or native app, with a fixed
          scope and a fixed price.
        </p>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact/">Book an AI audit</ButtonLink>
          <ButtonLink href="#packages" variant="outline-light">
            See the packages
          </ButtonLink>
        </div>
      </PageHero>

      <section id="packages" className="scroll-mt-20">
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-3">Fixed-scope AI packages</SectionTitle>
          <p className="mb-10 max-w-[680px] text-lg text-slate-600">
            Starting prices. The audit fee is credited if you go ahead with a full package.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((p) => (
              <Card key={p.title} highlight={p.highlight}>
                {p.highlight && <Badge>Start here</Badge>}
                <h3 className="font-heading text-[22px] font-bold text-brand-indigo">{p.title}</h3>
                <p className="text-[28px] font-bold">{p.price}</p>
                <p className="text-sm text-slate-600">{p.time}</p>
                <p className="leading-relaxed text-slate-700">{p.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-mist">
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-10">Good fits</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fits.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="mb-2 font-semibold text-brand-indigo">{f.title}</p>
                <p className="leading-relaxed text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-24 grid gap-16 md:grid-cols-2">
          <div>
            <SectionTitle className="mb-6 md:text-4xl">How a package runs</SectionTitle>
            <ol className="flex list-decimal flex-col gap-4 pl-6 text-[17px] leading-relaxed text-slate-700">
              {steps.map((s) => (
                <li key={s.title}>
                  <strong className="text-brand-indigo">{s.title}</strong> {s.text}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionTitle className="mb-6 md:text-4xl">Your data, handled carefully</SectionTitle>
            <CheckList items={dataCare} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="One week to find out what AI can do for your app."
        buttonLabel="Book an AI audit"
        href="/contact/"
      />
    </>
  );
}
