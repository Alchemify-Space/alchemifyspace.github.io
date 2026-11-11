import { pageMetadata } from "@/app/lib/seo";
import { JsonLd } from "@/app/components/JsonLd";
import { Container, CtaBand, Eyebrow, SectionTitle } from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "White-label terms, code ownership, payments, time zone, AI packages and Glamio: answers to the questions agencies and clients ask.",
  path: "/faq/",
});

const groups = [
  {
    title: "Working with agencies",
    items: [
      {
        q: "Will our client know you exist?",
        a: "Only if you want them to. We sign your NDA, work under your brand and never contact your client directly.",
      },
      { q: "Who owns the code?", a: "You do, once paid. It lives in your repository from day one." },
      {
        q: "Can we start small?",
        a: "Yes. Most agencies send one real ticket as a paid trial task, judge the code, then move to a project or retainer.",
      },
      {
        q: "Can you work on an existing codebase?",
        a: "Yes. We read it first, follow its conventions and ship changes as reviewed pull requests.",
      },
    ],
  },
  {
    title: "Payments and practicalities",
    items: [
      {
        q: "How do payments work?",
        a: "Milestone payments for projects, monthly for retainers. We invoice as a registered company in Pakistan.",
      },
      {
        q: "What time zone do you work in?",
        a: "Pakistan (UTC+5). We keep at least 4 hours of overlap with your working day; US calls by arrangement.",
      },
      {
        q: "What happens after launch?",
        a: "A support period is agreed in the quote. After that, maintenance runs on a small monthly retainer or per task.",
      },
    ],
  },
  {
    title: "AI features",
    items: [
      {
        q: "Do we need to rebuild our app to add AI?",
        a: "No. The packages add one feature to the app you already have, with a fixed scope and price.",
      },
      {
        q: "What does the AI cost to run each month?",
        a: "It depends on usage. We estimate the monthly provider cost during the audit, before you commit.",
      },
      {
        q: "What happens to our data?",
        a: "It stays in your backend. API keys live on the server, and we use provider settings that keep data out of model training where offered.",
      },
    ],
  },
  {
    title: "Glamio and ready-made apps",
    items: [
      {
        q: "When can I buy Glamio?",
        a: "It is planned for CodeCanyon in January 2027. Contact us to be notified or to get early demo access.",
      },
      {
        q: "Do I need my own server?",
        a: "No. Glamio runs on Supabase, so there is no PHP server or shared hosting to manage.",
      },
      {
        q: "Can you set it up and brand it for me?",
        a: "Yes. Branded setup with store publishing starts from $1,500.",
      },
    ],
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) =>
      g.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      }))
    ),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="border-b border-slate-200 bg-brand-mist">
        <Container className="pt-20 pb-14">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="font-heading text-4xl md:text-[52px] font-bold text-brand-indigo">
            Questions, answered plainly
          </h1>
        </Container>
      </section>
      <section>
        <Container className="max-w-[880px] py-16 md:py-20 flex flex-col gap-14">
          {groups.map((g) => (
            <div key={g.title}>
              <SectionTitle className="mb-4 md:text-3xl">{g.title}</SectionTitle>
              {g.items.map((f, i) => (
                <details
                  key={f.q}
                  className={`border-t border-slate-200 py-5 ${i === g.items.length - 1 ? "border-b" : ""}`}
                >
                  <summary className="cursor-pointer text-lg font-semibold text-brand-indigo">{f.q}</summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          ))}
        </Container>
      </section>
      <CtaBand title="Didn't find your answer?" buttonLabel="Ask us directly" href="/contact/" />
    </>
  );
}
