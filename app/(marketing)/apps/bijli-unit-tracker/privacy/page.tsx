import { pageMetadata } from "@/app/lib/seo";
import { site } from "@/app/lib/site";
import { Container, Eyebrow } from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "Bijli Unit Tracker Privacy Policy",
  description:
    "Bijli Unit Tracker has no account, no ads and no tracking. Your meters, readings and bills stay on your phone.",
  path: "/apps/bijli-unit-tracker/privacy/",
});

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "What the app stores on your phone",
    body: (
      <p>
        When you add a meter or a bill, Bijli Unit Tracker saves it on your device: the meter name you
        choose, the meter readings you type or scan, the dates, the unit limit, and the figures read from
        your bill (reference number, meter number, units, amounts and the 12-month history). Your reminder
        and language settings are saved there too. We do not receive this data. It never goes to our
        servers, because we do not run any servers for the app.
      </p>
    ),
  },
  {
    title: "What we do not store",
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Your name, father&apos;s name and address on the bill. The app does not save them.</li>
        <li>The bill PDF itself and the meter photos. They are read on your phone and then discarded.</li>
        <li>Your location.</li>
      </ul>
    ),
  },
  {
    title: "What we do not do",
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>We do not ask you to create an account or give an email address or phone number.</li>
        <li>We do not show ads.</li>
        <li>We do not use analytics or tracking tools of our own.</li>
        <li>We do not sell your data or share it with anyone.</li>
      </ul>
    ),
  },
  {
    title: "Reading your bill",
    body: (
      <p>
        When you choose a bill PDF, or open one from WhatsApp or Files, the app reads the text inside it on
        your phone and fills in your meter, readings and history. This is done with ordinary text rules, not
        with an online service. The file is not uploaded anywhere. While it is being read, Android may hold
        a temporary copy in the private storage of the app, which the app removes afterwards.
      </p>
    ),
  },
  {
    title: "Photos of your meter",
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>The photo is taken with your phone&apos;s own camera app, or you choose one with the system picker.</li>
        <li>
          This is a beta feature. The number is read on your phone using Google ML Kit text recognition. The
          picture and the text are not sent to us or to anyone else.
        </li>
        <li>
          Like other apps that use ML Kit, the ML Kit library may send small technical reports to Google, such
          as device model, app version and error or performance information. These reports do not contain
          your photo, your meter or your bill. See Google&apos;s ML Kit terms and data disclosure for details.
        </li>
        <li>The app deletes its copy of the photo after reading it. Only the number you confirm is saved.</li>
      </ul>
    ),
  },
  {
    title: "Notifications",
    body: (
      <p>
        If you allow notifications, Bijli Unit Tracker shows reminders that are created on your phone, for
        example when you are close to your unit limit or when it is time to add a reading. No server is
        involved. You can turn each reminder off in the app or in Android settings.
      </p>
    ),
  },
  {
    title: "Android backup",
    body: (
      <p>
        If Google backup is turned on for your phone, Android may include the data of this app in your
        Google account backup, and restore it when you set up a new phone. This is controlled by your phone
        and your Google account, not by us, and we never receive it.
      </p>
    ),
  },
  {
    title: "Deleting your data",
    body: (
      <p>
        Uninstall the app, or open Android Settings, then Apps, then Bijli Unit Tracker, then Storage, and
        choose &quot;Clear data&quot;. Either way your meters, readings and bills are removed from your phone.
      </p>
    ),
  },
  {
    title: "Children",
    body: (
      <p>
        Bijli Unit Tracker is not directed to children under 13, and we do not knowingly collect data from
        anyone.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        If we ever add accounts, ads, analytics or cloud features, we will update this policy before the
        update is released.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        Questions about privacy:{" "}
        <a className="text-brand-purple underline" href={`mailto:${site.supportEmail}`}>
          {site.supportEmail}
        </a>
      </p>
    ),
  },
];

export default function BijliUnitTrackerPrivacyPage() {
  return (
    <section>
      <Container className="max-w-[820px] py-16 md:py-20">
        <Eyebrow>Bijli Unit Tracker</Eyebrow>
        <h1 className="mb-3 font-heading text-4xl md:text-5xl font-bold text-brand-indigo">Privacy Policy</h1>
        <p className="mb-2 text-slate-600">Effective date: 14 November 2026</p>
        <p className="mb-10 leading-relaxed text-slate-700">
          Bijli Unit Tracker is made by {site.name} ({site.legalName}), Sahiwal, Punjab, Pakistan.{" "}
          <strong>No account, no ads, no tracking. Your meters, readings and bills stay on your phone.</strong>
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
