import Image from "next/image";
import { pageMetadata } from "@/app/lib/seo";
import { ButtonLink, CheckList, Container, CtaBand, Eyebrow, SectionTitle } from "@/app/components/marketing";
import { site } from "@/app/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Alchemify Space is a registered Flutter + AI app studio in Pakistan, founded by Javeed Ishaq. You work directly with the developer who writes the code.",
  path: "/about/",
});

const facts = [
  { label: "Legal name", value: site.legalName },
  { label: "SECP CUIN", value: site.secpCuin },
  { label: "NTN", value: site.ntn },
  { label: "D-U-N-S", value: site.duns },
  { label: "Google Play", value: "Verified organisation developer: Alchemify Space" },
  { label: "Registered office", value: `${site.address[0]}, ${site.address[1]}` },
];

const principles = [
  "Specialise: Flutter, Supabase, Firebase, Next.js and AI APIs, done well.",
  "Honest scope: we say no to work we are not the right fit for.",
  "Ship and show: Glamio, our own booking app, shows the quality of our work.",
  "Write it down: weekly updates, setup docs and clean handover.",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-indigo text-white">
        <Container className="py-20 md:py-24 flex flex-wrap items-center gap-14">
          <div className="flex-[1_1_520px] min-w-0">
            <Eyebrow onDark>About Alchemify Space</Eyebrow>
            <h1 className="mb-6 font-heading text-4xl md:text-[52px] leading-[1.05] font-bold">
              A small studio that ships Flutter apps with AI built in.
            </h1>
            <p className="max-w-[580px] text-lg leading-relaxed text-slate-200">
              We work for agencies that need a reliable mobile developer, for businesses adding AI to
              their apps, and on our own booking products.
            </p>
          </div>
          <div className="relative flex-[0_1_380px] aspect-square overflow-hidden rounded-[20px]">
            <Image
              src={site.founder.studioPhoto}
              alt="Javeed Ishaq, founder of Alchemify Space, at his studio desk"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 380px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-24 grid gap-16 md:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-5">
              <Image
                src={site.founder.headshot}
                alt="Javeed Ishaq"
                width={96}
                height={96}
                className="h-24 w-24 flex-none rounded-full object-cover ring-4 ring-brand-tint"
              />
              <div>
                <Eyebrow>Founder</Eyebrow>
                <SectionTitle className="-mt-2">Javeed Ishaq</SectionTitle>
                <p className="mt-1 font-medium text-slate-600">Founder and lead developer</p>
              </div>
            </div>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              Javeed builds Flutter apps, Supabase backends and AI features, and shares how on the
              Alchemify Space YouTube channel.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-slate-700">
              You talk to the person who writes the code. No account managers, no hand-offs.
            </p>
            <ButtonLink href={site.youtube} variant="outline">
              Watch us build on YouTube
            </ButtonLink>
          </div>
          <div>
            <SectionTitle className="mb-6 md:text-4xl">How we work</SectionTitle>
            <CheckList items={principles} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-mist">
        <Container className="py-20 md:py-24">
          <SectionTitle className="mb-8">Company details</SectionTitle>
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-slate-200 bg-white p-6">
                <dt className="mb-1 text-[13px] font-semibold text-slate-600">{f.label}</dt>
                <dd className="font-medium text-brand-indigo">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand title="Want to see if we are the right fit?" buttonLabel="Book a 20-minute call" />
    </>
  );
}
