import Image from "next/image";
import { pageMetadata } from "@/app/lib/seo";
import { ButtonLink, Container } from "@/app/components/marketing";
import { ContactForm } from "@/app/components/ContactForm";
import { site } from "@/app/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell us about your project or book a 20-minute call. White-label Flutter work, AI features and ready-made booking apps.",
  path: "/contact/",
});

export default function ContactPage() {
  const hasScheduler = site.bookingUrl.startsWith("http");

  return (
    <section>
      <Container className="pt-20 pb-24">
        <h1 className="mb-3 font-heading text-4xl md:text-[52px] font-bold text-brand-indigo">
          Let&apos;s talk about your project
        </h1>
        <p className="mb-12 max-w-[620px] text-lg md:text-[19px] text-slate-600">
          Tell us what you need, or book a call straight away. We reply within one working day.
        </p>
        <div className="flex flex-wrap items-start gap-12">
          <div className="flex-[999_1_560px] min-w-0 rounded-[20px] border border-slate-200 p-6 sm:p-9">
            <ContactForm />
          </div>

          <aside className="flex-[1_1_320px] min-w-0 flex flex-col gap-5">
            <div className="rounded-[20px] bg-brand-indigo p-7 text-white">
              <div className="mb-5 flex items-center gap-4">
                <Image
                  src={site.founder.headshot}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 flex-none rounded-full object-cover ring-2 ring-brand-gold"
                />
                <p className="text-sm leading-snug text-slate-200">
                  You&apos;ll talk to <span className="font-semibold text-white">{site.founder.name}</span>,
                  <br />
                  {site.founder.role.toLowerCase()}
                </p>
              </div>
              <h2 className="mb-2 font-heading text-2xl font-bold">Prefer to talk?</h2>
              <p className="mb-5 leading-relaxed text-slate-200">
                {hasScheduler
                  ? "Pick a 20-minute slot. No preparation needed."
                  : "Message us on WhatsApp and we will set up a 20-minute call."}
              </p>
              <ButtonLink href={hasScheduler ? site.bookingUrl : site.whatsappHref} className="w-full">
                {hasScheduler ? "Book a call" : "Chat on WhatsApp"}
              </ButtonLink>
            </div>
            <div className="flex flex-col gap-4.5 rounded-[20px] border border-slate-200 p-7">
              <div>
                <p className="mb-1 text-[13px] font-semibold text-slate-600">Email</p>
                <a href={`mailto:${site.email}`} className="font-semibold text-brand-purple hover:text-brand-purple-dark">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="mb-1 text-[13px] font-semibold text-slate-600">WhatsApp and phone</p>
                <a href={site.whatsappHref} className="font-semibold text-brand-purple hover:text-brand-purple-dark">
                  {site.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="mb-1 text-[13px] font-semibold text-slate-600">Registered office</p>
                <p className="leading-relaxed text-slate-700">
                  {site.legalName}
                  <br />
                  {site.address[0]}
                  <br />
                  {site.address[1]}
                </p>
              </div>
              <div>
                <p className="mb-1 text-[13px] font-semibold text-slate-600">Hours</p>
                <p className="leading-relaxed text-slate-700">
                  Mon–Fri, Pakistan time (UTC+5), with at least 4 hours of overlap with UK and EU.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
