import Image from "next/image";
import { pageMetadata } from "@/app/lib/seo";
import { site } from "@/app/lib/site";
import { ButtonLink, Card, CheckList, Container, Eyebrow, PageHero, SectionTitle } from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "Bijli Unit Tracker: Stay Under 200 Units",
  description:
    "Track your electricity meter units and stay under 200 a month. Add your bill, see units left every day, and get a reminder before you go over. Free, offline, no account.",
  path: "/apps/bijli-unit-tracker/",
  image: "/images/apps/bijli-unit-tracker/share.png",
});

// Set these when the production listing and the promo video are live.
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=space.alchemify.bijliunittracker";
const YOUTUBE_VIDEO_ID = "";

const IMG = "/images/apps/bijli-unit-tracker";

const features = [
  { title: "Units left, at a glance", text: "One big number, one bar, and a plain sentence: are you doing well, or should you slow down?" },
  { title: "Add your bill", text: "Open the bill PDF from WhatsApp or Files. The app reads your meter, readings and 12-month history on your phone." },
  { title: "A daily goal", text: "See how many units you can use each day to stay under your limit until the next bill." },
  { title: "Gentle reminders", text: "Get a notice when you are close to the limit, using too fast, or have not added a reading for a few days." },
  { title: "More than one meter", text: "Home, parents, a shop. Every meter has its own limit." },
  { title: "English and Urdu", text: "Big numbers and simple words, in English and in اردو." },
];

const shots = [
  { file: "screenshot-01.jpg", alt: "Home screen showing units left and a slow down message" },
  { file: "screenshot-02.jpg", alt: "Is this your bill? The numbers read from an electricity bill" },
  { file: "screenshot-03.jpg", alt: "Type the number from your meter and see what it means right away" },
  { file: "screenshot-04.jpg", alt: "A reminder: almost at your limit" },
  { file: "screenshot-05.jpg", alt: "All your meters in one list" },
  { file: "screenshot-06.jpg", alt: "The app in Urdu" },
  { file: "screenshot-07.jpg", alt: "No account, no ads, works without internet" },
];

export default function BijliUnitTrackerPage() {
  return (
    <>
      <PageHero
        eyebrow="Bijli Unit Tracker"
        title="Stay under 200 units. Every month."
        aside={
          <div className="relative hidden h-[440px] min-w-[260px] flex-[0_1_420px] md:block" aria-hidden="true">
            <Image
              src={`${IMG}/screenshot-01.jpg`}
              alt=""
              width={540}
              height={960}
              className="absolute left-0 top-0 h-auto w-[250px] -rotate-3 rounded-3xl shadow-2xl"
              priority
            />
            <Image
              src={`${IMG}/screenshot-02.jpg`}
              alt=""
              width={540}
              height={960}
              className="absolute left-[170px] top-10 h-auto w-[250px] rotate-3 rounded-3xl shadow-2xl"
              priority
            />
          </div>
        }
      >
        <div className="mb-6 flex items-center gap-4">
          <Image src={`${IMG}/icon-192.png`} alt="Bijli Unit Tracker app icon" width={72} height={72} className="rounded-2xl" />
          <span className="font-heading text-2xl font-bold">Bijli Unit Tracker</span>
        </div>
        <p className="mb-8 max-w-[560px] text-lg leading-relaxed text-slate-200">
          Going over 200 units can turn a small electricity bill into a big one. See how many units you
          have left every day, and get a reminder before it costs you. Free. Works offline. No account.
        </p>
        {PLAY_STORE_URL ? (
          <ButtonLink href={PLAY_STORE_URL}>Get it on Google Play</ButtonLink>
        ) : (
          <p className="font-semibold text-brand-gold">Coming soon to Google Play</p>
        )}
      </PageHero>

      <section>
        <Container className="py-16 md:py-20">
          <Eyebrow>See it in action</Eyebrow>
          <SectionTitle className="mb-10">Simple enough for everyone at home</SectionTitle>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {shots.map((s) => (
              <Image
                key={s.file}
                src={`${IMG}/${s.file}`}
                alt={s.alt}
                width={540}
                height={960}
                className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              />
            ))}
          </div>
        </Container>
      </section>

      {YOUTUBE_VIDEO_ID ? (
        <section className="border-t border-slate-200 bg-brand-mist">
          <Container className="py-16 md:py-20">
            <Eyebrow>Watch</Eyebrow>
            <SectionTitle className="mb-8">Bijli Unit Tracker in 40 seconds</SectionTitle>
            <div className="aspect-video w-full max-w-[960px] overflow-hidden rounded-2xl border border-slate-200 bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="Bijli Unit Tracker promo video"
                allow="accelerometer; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-slate-200">
        <Container className="py-16 md:py-20">
          <Eyebrow>What it does</Eyebrow>
          <SectionTitle className="mb-10">Everything to keep your units in check</SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <h3 className="font-heading text-xl font-bold text-brand-indigo">{f.title}</h3>
                <p className="leading-relaxed text-slate-600">{f.text}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 max-w-[760px] text-sm leading-relaxed text-slate-500">
            Bijli Unit Tracker is an independent app. It is not made by or connected to MEPCO, PITC, WAPDA,
            NEPRA or the Government of Pakistan. The figures are estimates: your bill and your meter are
            the official source.
          </p>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-brand-mist">
        <Container className="py-16 md:py-20">
          <Eyebrow>Privacy</Eyebrow>
          <SectionTitle className="mb-8">Your meters stay on your phone</SectionTitle>
          <CheckList
            items={[
              "No account, no email and no phone number.",
              "No ads and no tracking of our own.",
              "Bills are read on your phone. Name and address are never saved.",
              "Works without an internet connection.",
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/apps/bijli-unit-tracker/privacy/" variant="outline">
              Read the privacy policy
            </ButtonLink>
            <ButtonLink href="/apps/bijli-unit-tracker/terms/" variant="outline">
              Terms of use
            </ButtonLink>
            <ButtonLink href={`mailto:${site.supportEmail}`} variant="outline">
              Contact support
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
