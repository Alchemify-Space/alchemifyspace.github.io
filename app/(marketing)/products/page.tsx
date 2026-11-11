import Link from "next/link";
import { pageMetadata } from "@/app/lib/seo";
import { site } from "@/app/lib/site";
import { ServicesScreen, StaffScreen, TimeScreen } from "@/app/components/GlamioScreens";
import { Badge, ButtonLink, Card, Container, Eyebrow, SectionTitle } from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "Glamio: Flutter Salon and Barber Booking App",
  description:
    "Flutter + Supabase salon and barber booking app with customer app, staff app and owner web admin. No PHP server. Buy the source or have us brand it.",
  path: "/products/",
});

// Set these when the demo and CodeCanyon listing go live.
const GLAMIO_DEMO_URL = "";
const GLAMIO_CODECANYON_URL = "";

const roles = [
  {
    title: "Customer app",
    items: [
      "Browse services without signing in",
      "Book one or more services with any stylist",
      "Live free times, no double bookings",
      "Reschedule and cancel within your rules",
      "Reminders 24 h and 1 h before",
    ],
  },
  {
    title: "Staff app",
    items: [
      "Day and week schedule that updates live",
      "Customer details with tap to call",
      "Mark completed or no-show",
      "Add walk-in bookings",
      "Push alerts for new and moved bookings",
    ],
  },
  {
    title: "Owner web admin",
    items: [
      "Dashboard: bookings, revenue, no-show rate",
      "Calendar with a column per staff member",
      "Services, categories, staff and hours",
      "Time off and holiday closures",
      "Phone and walk-in bookings for guests",
    ],
  },
];

const reasons = [
  { title: "No server to host", text: "Supabase only. No PHP install wizard, no shared-hosting errors." },
  { title: "No licence lock", text: "No purchase-code check that breaks your app when a server goes down." },
  { title: "Kept up to date", text: "Latest stable Flutter on every release, with a public changelog." },
  { title: "Replies within 24 hours", text: "Support from the developer who wrote the code." },
];

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-brand-mist">
        <Container className="pt-20 pb-16">
          <Eyebrow>Products</Eyebrow>
          <h1 className="mb-4 max-w-[760px] font-heading text-4xl md:text-[52px] leading-[1.05] font-bold text-brand-indigo">
            Ready-made apps you can launch in weeks.
          </h1>
          <p className="mb-12 max-w-[640px] text-lg md:text-[19px] leading-relaxed text-slate-600">
            Full source code for booking apps on one tested engine. Buy the code, or have us brand and
            launch it for you.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="#glamio"
              className="flex flex-col gap-2.5 rounded-2xl border-2 border-brand-gold bg-white p-7 transition-shadow hover:shadow-md"
            >
              <Badge>Launching January 2027</Badge>
              <span className="font-heading text-2xl font-bold text-brand-indigo">Glamio</span>
              <span className="leading-relaxed text-slate-600">
                Salon and barber booking: customer app, staff app, owner admin.
              </span>
              <span className="mt-2 font-semibold text-brand-purple">View details →</span>
            </Link>
            {[
              { name: "Clinic booking", text: "Appointments for clinics and doctors, on the same engine." },
              { name: "Gym and studio", text: "Classes, trainers and member bookings." },
            ].map((p) => (
              <div key={p.name} className="flex flex-col gap-2.5 rounded-2xl border border-slate-200 bg-white p-7">
                <Badge tone="muted">Planned</Badge>
                <span className="font-heading text-2xl font-bold text-brand-indigo">{p.name}</span>
                <span className="leading-relaxed text-slate-600">{p.text}</span>
                <Link href="/contact/" className="mt-2 font-semibold text-brand-purple hover:text-brand-purple-dark">
                  Get notified →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="glamio" className="scroll-mt-20 bg-brand-indigo text-white">
        <Container className="py-20 md:py-[88px] flex flex-wrap items-center gap-14">
          <div className="flex-[1_1_520px] min-w-0">
            <Eyebrow onDark>Glamio · Flutter + Supabase</Eyebrow>
            <h2 className="mb-5 font-heading text-3xl md:text-5xl leading-[1.1] font-bold">
              The salon booking app with no PHP server to babysit.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-200">
              Android and iOS apps for customers and staff, a web admin for the owner, all running on
              Supabase. Set up in minutes, not days.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={GLAMIO_DEMO_URL || "/contact/"}>
                {GLAMIO_DEMO_URL ? "Try the live demo" : "Ask for early demo access"}
              </ButtonLink>
              <ButtonLink href="/contact/" variant="outline-light">
                Need it customised?
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-slate-300">
              {GLAMIO_DEMO_URL
                ? "The demo has one-tap logins for customer, staff and owner. Demo data resets every night."
                : "The live demo opens at launch, with one-tap logins for customer, staff and owner."}
            </p>
          </div>
          <div className="flex-[1_1_420px] min-w-0 grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-200" aria-hidden="true">
            <ServicesScreen />
            <TimeScreen className="mt-8" />
            <StaffScreen className="hidden sm:block" />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-10">Everything a salon runs on</SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {roles.map((r) => (
              <div key={r.title} className="rounded-2xl border border-slate-200 p-7">
                <h3 className="mb-4 font-heading text-[22px] font-bold text-brand-indigo">{r.title}</h3>
                <ul className="list-disc pl-5 leading-loose text-slate-700">
                  {r.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-mist">
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-10">Why buyers pick Glamio</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="mb-2 font-semibold text-brand-indigo">{r.title}</p>
                <p className="leading-relaxed text-slate-600">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-3">Ways to get Glamio</SectionTitle>
          <p className="mb-10 text-lg text-slate-600">Same code in every option. You choose how much we do.</p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="font-heading text-[22px] font-bold text-brand-indigo">Source code</h3>
              <p className="text-3xl font-bold">{GLAMIO_CODECANYON_URL ? "On CodeCanyon" : "January 2027"}</p>
              <p className="leading-relaxed text-slate-600">
                Regular licence on CodeCanyon. Full source, docs, setup video and 6 months of support.
              </p>
              <ButtonLink href={GLAMIO_CODECANYON_URL || "/contact/"} variant="outline" className="mt-auto">
                {GLAMIO_CODECANYON_URL ? "Buy on CodeCanyon" : "Get notified at launch"}
              </ButtonLink>
            </Card>
            <Card highlight>
              <h3 className="font-heading text-[22px] font-bold text-brand-indigo">Branded for you</h3>
              <p className="text-3xl font-bold">from $1,500</p>
              <p className="leading-relaxed text-slate-600">
                Your name, logo, colours and services set up, then published to Google Play and the App
                Store.
              </p>
              <ButtonLink href="/contact/" className="mt-auto">
                Get a quote
              </ButtonLink>
            </Card>
            <Card>
              <h3 className="font-heading text-[22px] font-bold text-brand-indigo">Custom features</h3>
              <p className="text-3xl font-bold">Quoted</p>
              <p className="leading-relaxed text-slate-600">
                Online payments, multi-location, loyalty or an AI booking assistant, added to your copy.
              </p>
              <ButtonLink href="/contact/" variant="outline" className="mt-auto">
                Describe what you need
              </ButtonLink>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-brand-indigo text-white">
        <Container className="py-16 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="mb-2 text-lg font-semibold">Built with</p>
            <p className="leading-relaxed text-slate-200">
              Flutter · Riverpod · go_router · Supabase (Auth, Postgres with row-level security, Edge
              Functions, Realtime) · Firebase Cloud Messaging · Next.js admin
            </p>
          </div>
          <div>
            <p className="mb-2 text-lg font-semibold">Product support</p>
            <p className="mb-2 leading-relaxed text-slate-200">Bought Glamio? Write to us, we reply within 24 hours.</p>
            <a href={`mailto:${site.supportEmail}`} className="font-semibold text-brand-cyan hover:text-white">
              {site.supportEmail}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
