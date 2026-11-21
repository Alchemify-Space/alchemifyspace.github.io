import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/app/lib/seo";
import { site } from "@/app/lib/site";
import { ButtonLink, Card, CheckList, Container, Eyebrow, PageHero, SectionTitle } from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "WarrantIQ: Warranty and Receipt Tracker",
  description:
    "Keep every warranty, receipt and manual in one place, and get a reminder before cover ends. Scan receipts with AI, make claims and share proof of purchase.",
  path: "/apps/warrantiq/",
});

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=space.alchemify.warrantiq";

const IMG = "/images/apps/warrantiq";

const features = [
  { title: "Scan a receipt", text: "AI reads the product, date and serial. You check it, then save." },
  { title: "Reminders that work", text: "Alerts 30, 7 and 1 day before cover ends. Free, and they run on your phone." },
  { title: "Make a claim", text: "A ready message with your serial and dates. Send it by WhatsApp, email or call." },
  { title: "Proof of purchase", text: "Share a one-page PDF with your receipt in one tap." },
  { title: "Receipt vault", text: "Keep receipts, labels and manuals together with each item." },
  { title: "Home-screen widget", text: "See which warranty ends next without opening the app." },
];

const shots = [
  { file: "app-home.jpg", alt: "Home screen with the warranty that ends next" },
  { file: "app-detail.jpg", alt: "Warranty detail with key dates, claim and share-proof buttons" },
  { file: "app-scan.jpg", alt: "Scan screen ready to read a receipt" },
  { file: "app-reminders.jpg", alt: "Reminders screen with the next reminder" },
  { file: "app-claim.jpg", alt: "Make a claim screen with a ready-written message" },
  { file: "app-vault.jpg", alt: "Document vault with a saved receipt" },
  { file: "app-dark.jpg", alt: "Home screen in dark mode" },
];

const freePlan = [
  "Up to 3 warranties",
  "3 files per warranty",
  "3 AI receipt scans",
  "All reminders on your phone",
  "Claim messages and proof PDFs",
];

const premiumPlan = [
  "Unlimited warranties",
  "Unlimited files in the vault",
  "Unlimited AI receipt scans",
  "Backup and restore",
  "Everything in Free",
];

export default function WarrantIQPage() {
  return (
    <>
      <PageHero
        eyebrow="WarrantIQ"
        title="Never miss a warranty expiry again."
        aside={
          <div className="relative hidden h-[440px] min-w-[260px] flex-[0_1_420px] md:block" aria-hidden="true">
            <Image
              src={`${IMG}/app-home.jpg`}
              alt=""
              width={720}
              height={1496}
              className="absolute left-0 top-0 h-auto w-[210px] -rotate-3 rounded-3xl shadow-2xl"
              priority
            />
            <Image
              src={`${IMG}/app-detail.jpg`}
              alt=""
              width={720}
              height={1496}
              className="absolute left-[170px] top-10 h-auto w-[210px] rotate-3 rounded-3xl shadow-2xl"
              priority
            />
          </div>
        }
      >
        <div className="mb-6 flex items-center gap-4">
          <Image src={`${IMG}/icon.png`} alt="WarrantIQ app icon" width={72} height={72} className="rounded-2xl" />
          <span className="font-heading text-2xl font-bold">WarrantIQ</span>
        </div>
        <p className="mb-8 max-w-[560px] text-lg leading-relaxed text-slate-200">
          Keep every warranty, receipt and manual in one place. WarrantIQ reminds you before cover ends,
          so you are ready to claim.
        </p>
        <ButtonLink href={PLAY_STORE_URL}>Get it on Google Play</ButtonLink>
      </PageHero>

      <section>
        <Container className="py-16 md:py-20">
          <Eyebrow>See it in action</Eyebrow>
          <SectionTitle className="mb-10">Everything about your warranties, in one app</SectionTitle>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {shots.map((s) => (
              <Image
                key={s.file}
                src={`${IMG}/${s.file}`}
                alt={s.alt}
                width={720}
                height={1496}
                className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200">
        <Container className="py-16 md:py-20">
          <Eyebrow>What it does</Eyebrow>
          <SectionTitle className="mb-10">From receipt to claim</SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <h3 className="font-heading text-xl font-bold text-brand-indigo">{f.title}</h3>
                <p className="leading-relaxed text-slate-600">{f.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-brand-mist">
        <Container className="py-16 md:py-20">
          <Eyebrow>Free and Premium</Eyebrow>
          <SectionTitle className="mb-10">Start free. Upgrade when you need more.</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-heading text-xl font-bold text-brand-indigo">Free</h3>
              <CheckList items={freePlan} />
            </Card>
            <Card>
              <h3 className="font-heading text-xl font-bold text-brand-indigo">Premium</h3>
              <CheckList items={premiumPlan} />
            </Card>
          </div>
          <p className="mt-6 max-w-[720px] leading-relaxed text-slate-600">
            Premium is a subscription billed through Google Play. It renews automatically until you cancel.
            Cancel any time in Google Play &gt; Payments and subscriptions. See the{" "}
            <Link href="/apps/warrantiq/terms/" className="text-brand-purple underline">
              terms of use
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-t border-slate-200">
        <Container className="py-16 md:py-20">
          <Eyebrow>Privacy</Eyebrow>
          <SectionTitle className="mb-8">Private by design</SectionTitle>
          <CheckList
            items={[
              "Your warranties and receipts are stored privately in your own account.",
              "No ads, and we do not sell your data.",
              "Reminders and barcode scanning work on your phone.",
              "AI scan sends a photo to our AI provider only when you choose to scan.",
              "Delete your account and data any time, in the app or online.",
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/apps/warrantiq/privacy/" variant="outline">
              Privacy policy
            </ButtonLink>
            <ButtonLink href="/apps/warrantiq/terms/" variant="outline">
              Terms of use
            </ButtonLink>
            <ButtonLink href="/apps/warrantiq/delete-account/" variant="outline">
              Delete your account
            </ButtonLink>
            <ButtonLink href={`mailto:${site.supportEmail}`} variant="outline">
              Contact support
            </ButtonLink>
          </div>
          <p className="mt-8 max-w-[720px] text-sm leading-relaxed text-slate-500">
            WarrantIQ is not affiliated with any brand or store. It does not make claims for you or guarantee
            that a claim will be accepted.
          </p>
        </Container>
      </section>
    </>
  );
}
