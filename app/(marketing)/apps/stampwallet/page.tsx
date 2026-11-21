import Image from "next/image";
import { pageMetadata } from "@/app/lib/seo";
import { site } from "@/app/lib/site";
import { ButtonLink, Card, CheckList, Container, Eyebrow, PageHero, SectionTitle } from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "StampWallet: Loyalty Stamp Card Tracker",
  description:
    "Digitize paper stamp cards, track rewards and expiry dates, and never lose a loyalty card again. No account, no ads, works offline.",
  path: "/apps/stampwallet/",
  image: "/images/apps/stampwallet/share.png",
});

// Set these when the production listing and the promo video are live.
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=space.alchemify.stampwallet";
const YOUTUBE_VIDEO_ID = "";

const IMG = "/images/apps/stampwallet";

const features = [
  { title: "Track stamps", text: "Tap to add a stamp. See how close you are to the reward." },
  { title: "Expiry reminders", text: "Get a reminder before a voucher or card runs out." },
  { title: "Scan barcodes and QR codes", text: "Save a membership code and show it at the till." },
  { title: "Import from a photo", text: "Take a photo of a card and StampWallet reads the details for you." },
  { title: "Front and back photos", text: "Keep a picture of the paper card as a backup." },
  { title: "Backup and restore", text: "Save all your cards and photos to a file, and restore them on a new phone." },
];

const shots = [
  { file: "screenshot-01.jpg", alt: "StampWallet home screen with all your stamp cards" },
  { file: "screenshot-02.jpg", alt: "Tap to add a stamp to a card" },
  { file: "screenshot-03.jpg", alt: "A reward ready to redeem, with an expiry reminder" },
  { file: "screenshot-04.jpg", alt: "Add a card by scanning a barcode or from a photo" },
  { file: "screenshot-05.jpg", alt: "A QR code shown full screen at the checkout" },
  { file: "screenshot-06.jpg", alt: "StampWallet in dark mode" },
  { file: "screenshot-07.jpg", alt: "No account, no ads, works offline" },
  { file: "screenshot-08.jpg", alt: "Back up and restore your cards, or import from Catima" },
];

export default function StampWalletPage() {
  return (
    <>
      <PageHero
        eyebrow="StampWallet"
        title="Never lose a stamp card again."
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
          <Image src={`${IMG}/icon-192.png`} alt="StampWallet app icon" width={72} height={72} className="rounded-2xl" />
          <span className="font-heading text-2xl font-bold">StampWallet</span>
        </div>
        <p className="mb-8 max-w-[560px] text-lg leading-relaxed text-slate-200">
          Coffee cards, salon cards, car wash cards. Keep them all in one place on your phone.
          No account. No phone number. Works offline.
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
          <SectionTitle className="mb-10">One calm place for every card</SectionTitle>
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
            <SectionTitle className="mb-8">StampWallet in 40 seconds</SectionTitle>
            <div className="aspect-video w-full max-w-[960px] overflow-hidden rounded-2xl border border-slate-200 bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="StampWallet promo video"
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
          <SectionTitle className="mb-10">Everything for your stamp cards</SectionTitle>
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
          <Eyebrow>Privacy</Eyebrow>
          <SectionTitle className="mb-8">Your cards stay on your phone</SectionTitle>
          <CheckList
            items={[
              "No account and no phone number.",
              "No ads and no tracking of our own.",
              "Cards and photos are saved only on your device.",
              "Works without an internet connection.",
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/apps/stampwallet/privacy/" variant="outline">
              Read the privacy policy
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
