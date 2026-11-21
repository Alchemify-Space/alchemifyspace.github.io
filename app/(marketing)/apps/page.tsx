import Link from "next/link";
import { pageMetadata } from "@/app/lib/seo";
import { Badge, Container, Eyebrow } from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "Apps by Alchemify Space",
  description:
    "Simple, private mobile apps from Alchemify Space. No accounts, no ads, no tracking. StampWallet tracks stamp cards. Bijli Unit Tracker keeps your electricity units under 200.",
  path: "/apps/",
});

const apps = [
  {
    slug: "stampwallet",
    name: "StampWallet",
    tagline: "Track paper stamp cards, rewards and expiry dates. No account needed.",
    status: "Android",
  },
  {
    slug: "bijli-unit-tracker",
    name: "Bijli Unit Tracker",
    tagline: "Keep your electricity units under 200 and get a reminder before you go over. Free and offline.",
    status: "Android",
  },
];

export default function AppsPage() {
  return (
    <section className="border-b border-slate-200 bg-brand-mist">
      <Container className="pt-20 pb-20">
        <Eyebrow>Apps</Eyebrow>
        <h1 className="mb-4 max-w-[760px] font-heading text-4xl md:text-[52px] leading-[1.05] font-bold text-brand-indigo">
          Small apps that respect your privacy.
        </h1>
        <p className="mb-12 max-w-[640px] text-lg md:text-[19px] leading-relaxed text-slate-600">
          Made by Alchemify Space. No accounts, no ads, no tracking. Your data stays on your phone.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}/`}
              className="flex flex-col gap-2.5 rounded-2xl border-2 border-brand-gold bg-white p-7 transition-shadow hover:shadow-md"
            >
              <Badge>{app.status}</Badge>
              <span className="font-heading text-2xl font-bold text-brand-indigo">{app.name}</span>
              <span className="leading-relaxed text-slate-600">{app.tagline}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
