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
  title: "White-label Flutter Developer for Agencies",
  description:
    "Add a reliable Flutter and AI developer to your agency. NDA, your repo, your brand, 4+ hours overlap with UK and EU. Start with a small paid trial task.",
  path: "/agencies/",
});

const workTypes = [
  { title: "New Flutter apps", text: "From your designs to App Store and Google Play release, iOS and Android from one codebase." },
  { title: "Features on existing apps", text: "We read the codebase first, follow its conventions, and ship in reviewed pull requests." },
  { title: "AI features", text: "Chat assistants, smart search and content tools built on Claude, OpenAI or on-device models." },
  { title: "Supabase and Firebase backends", text: "Auth, database with row-level security, storage, push notifications and server functions." },
  { title: "Admin panels", text: "Next.js dashboards for your client's team to run the app day to day." },
  { title: "Rescue and maintenance", text: "Flutter upgrades, failing builds, store rejections and the bugs nobody has time for." },
];

const models = [
  {
    title: "Trial task",
    price: "Fixed",
    unit: " price, agreed up front",
    text: "One real ticket from your backlog, delivered within a week. You judge the code before committing to more.",
    cta: "Send a task",
    highlight: false,
  },
  {
    title: "Monthly retainer",
    price: "40–80 h",
    unit: " a month",
    text: "Reserved capacity every month at an agreed hourly rate. Use it across any of your client projects.",
    cta: "Reserve capacity",
    highlight: true,
  },
  {
    title: "Fixed-price project",
    price: "Quoted",
    unit: " per scope",
    text: "A whole app or module with a written scope, milestones and a fixed price.",
    cta: "Request a quote",
    highlight: false,
  },
];

const promise = [
  "We sign your NDA before we see anything.",
  "We never contact your client unless you ask us to.",
  "Code lives in your repository from the first commit.",
  "No Alchemify branding in the app, builds or docs.",
  "You own all the code once the work is paid.",
];

const quality = [
  "One pull request per feature, with a short description and screenshots.",
  "Static analysis clean and tests on the business logic.",
  "Row-level security on every database table.",
  "Setup steps written down and tested on a clean machine.",
  "Latest stable Flutter, no abandoned packages.",
];

const fit = [
  { title: "Your tools", text: "GitHub or GitLab, Jira, Linear or Trello, Slack or WhatsApp. We join yours." },
  { title: "Your hours", text: "At least 4 hours of overlap with UK and EU days. US calls by arrangement." },
  { title: "Weekly update", text: "What shipped, what is next, any risk. Short enough to forward to your client." },
  { title: "Clean handover", text: "Docs, credentials list and a walkthrough call, so your team can carry on without us." },
];

export default function AgenciesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "White-label Flutter app development",
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: ["GB", "EU", "US", "AE", "AU"],
          description: "Flutter, Supabase and AI development for agencies, delivered under the agency's brand.",
        }}
      />
      <PageHero eyebrow="White-label Flutter development" title="Your Flutter team, under your brand.">
        <p className="mb-9 max-w-[640px] text-lg md:text-[19px] leading-relaxed text-slate-200">
          Take on more mobile and AI work without hiring. We build inside your process, in your
          repository, and your client only ever sees your agency.
        </p>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact/">Start with a trial task</ButtonLink>
          <ButtonLink href="/products/" variant="outline-light">
            See our code in Glamio
          </ButtonLink>
        </div>
      </PageHero>

      <section>
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-10">Work you can hand us</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workTypes.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-200 p-7">
                <h3 className="mb-2 text-xl font-semibold text-brand-indigo">{w.title}</h3>
                <p className="leading-relaxed text-slate-600">{w.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-mist">
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-3">Three ways to engage</SectionTitle>
          <p className="mb-10 max-w-[640px] text-lg text-slate-600">
            Most agencies start with a trial task, then move to a retainer once they trust the work.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {models.map((m) => (
              <Card key={m.title} highlight={m.highlight}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading text-2xl font-bold text-brand-indigo">{m.title}</h3>
                  {m.highlight && <Badge>Most chosen</Badge>}
                </div>
                <p className="text-3xl font-bold text-slate-900">
                  {m.price}
                  <span className="text-base font-medium text-slate-600">{m.unit}</span>
                </p>
                <p className="leading-relaxed text-slate-600">{m.text}</p>
                <ButtonLink href="/contact/" variant={m.highlight ? "gold" : "outline"} className="mt-auto">
                  {m.cta}
                </ButtonLink>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-24 grid gap-16 md:grid-cols-2">
          <div>
            <SectionTitle className="mb-6 md:text-4xl">Our white-label promise</SectionTitle>
            <CheckList items={promise} />
          </div>
          <div>
            <SectionTitle className="mb-6 md:text-4xl">Quality you can check</SectionTitle>
            <CheckList items={quality} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-mist">
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-10">How we fit into your team</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fit.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="mb-2 font-semibold text-brand-indigo">{f.title}</p>
                <p className="leading-relaxed text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Send us one ticket. Judge the code. Then decide."
        buttonLabel="Start a trial task"
        href="/contact/"
      />
    </>
  );
}
