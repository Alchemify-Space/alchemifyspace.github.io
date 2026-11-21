import { pageMetadata } from "@/app/lib/seo";
import { site } from "@/app/lib/site";
import { Container, Eyebrow } from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "Bijli Unit Tracker Terms of Use",
  description:
    "The terms for using Bijli Unit Tracker. The figures are estimates, the app is free, and it is not connected to any power company.",
  path: "/apps/bijli-unit-tracker/terms/",
});

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Using the app",
    body: (
      <p>
        By installing or using Bijli Unit Tracker you agree to these terms. If you do not agree, please do
        not use the app. The app is free for personal, non-commercial use.
      </p>
    ),
  },
  {
    title: "What the app does",
    body: (
      <p>
        Bijli Unit Tracker helps you keep an eye on the electricity units shown by your meter, and reminds
        you before you pass a limit you set, for example 200 units in a billing period. It works from the
        numbers you type, scan or import from your bill.
      </p>
    ),
  },
  {
    title: "The figures are estimates",
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Units left, daily goals, projections and status messages are <strong>estimates</strong> based on
          the numbers you give the app and on a simple calculation.
        </li>
        <li>
          Your electricity bill and your meter are always the official source. Check them before you make a
          decision.
        </li>
        <li>
          Tariffs, protected and unprotected rules and billing dates are set by your power company and the
          regulator, and they can change. The app does not know your exact meter reading date unless you
          tell it.
        </li>
        <li>A number read from a photo or a PDF can be wrong. Always check it before you save it.</li>
      </ul>
    ),
  },
  {
    title: "Not connected to any power company",
    body: (
      <p>
        Bijli Unit Tracker is an independent app by {site.name}. It is not made by, approved by or connected
        to MEPCO, PITC, WAPDA, NEPRA, the Government of Pakistan or any other power company or authority.
        Their names are used only to describe the bills the app can read.
      </p>
    ),
  },
  {
    title: "Your responsibilities",
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Enter and confirm your meter numbers carefully.</li>
        <li>Keep your phone safe. The app stores your data on your phone only.</li>
        <li>Pay your bills on time. A reminder from the app does not replace the due date on your bill.</li>
      </ul>
    ),
  },
  {
    title: "No warranty",
    body: (
      <p>
        The app is provided &quot;as is&quot;, without any promise that it will be error-free, always
        available, or that reminders will always arrive on time. Phone settings such as battery savers can
        delay or block notifications.
      </p>
    ),
  },
  {
    title: "Limit of liability",
    body: (
      <p>
        To the extent the law allows, {site.name} is not responsible for any loss, extra electricity charges,
        lost subsidy or protected status, or other damage that comes from using the app or relying on its
        figures or reminders.
      </p>
    ),
  },
  {
    title: "Ownership",
    body: (
      <p>
        The app, its name, logo and design belong to {site.name}. You may not copy, sell or repackage the app.
        The meter and bill data you enter belongs to you.
      </p>
    ),
  },
  {
    title: "Changes",
    body: (
      <p>
        We may update the app and these terms. The date at the top shows the latest version. If you keep using
        the app after a change, you accept the new terms.
      </p>
    ),
  },
  {
    title: "Governing law",
    body: <p>These terms are governed by the laws of Pakistan.</p>,
  },
  {
    title: "Contact",
    body: (
      <p>
        Questions about these terms:{" "}
        <a className="text-brand-purple underline" href={`mailto:${site.supportEmail}`}>
          {site.supportEmail}
        </a>
      </p>
    ),
  },
];

export default function BijliUnitTrackerTermsPage() {
  return (
    <section>
      <Container className="max-w-[820px] py-16 md:py-20">
        <Eyebrow>Bijli Unit Tracker</Eyebrow>
        <h1 className="mb-3 font-heading text-4xl md:text-5xl font-bold text-brand-indigo">Terms of Use</h1>
        <p className="mb-2 text-slate-600">Effective date: 14 November 2026</p>
        <p className="mb-10 leading-relaxed text-slate-700">
          Bijli Unit Tracker is made by {site.name} ({site.legalName}), Sahiwal, Punjab, Pakistan.{" "}
          <strong>The figures are estimates. Your bill and your meter are the official source.</strong>
        </p>
        <div className="space-y-9">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 font-heading text-2xl font-bold text-brand-indigo">{s.title}</h2>
              <div className="leading-relaxed text-slate-700">{s.body}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
