import { pageMetadata } from "@/app/lib/seo";
import { site } from "@/app/lib/site";
import { Container, Eyebrow } from "@/app/components/marketing";

export const metadata = pageMetadata({
  title: "StampWallet Privacy Policy",
  description:
    "StampWallet has no account, no ads and no tracking of its own. Your cards and photos stay on your phone.",
  path: "/apps/stampwallet/privacy/",
});

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "What the app stores on your phone",
    body: (
      <p>
        When you add a card, StampWallet saves it on your device: the store name, stamp count, reward,
        expiry date, notes, membership number, barcode or QR value, and any front or back photo. Your
        reminder settings are saved there too. We do not receive this data. It never goes to our servers,
        because we do not run any servers for the app.
      </p>
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
    title: "Camera and photos",
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Camera: used only when you choose to scan a barcode or QR code, or take a photo of a card.</li>
        <li>Gallery: used only when you choose a photo. You pick it yourself with the system picker.</li>
        <li>The photos you choose are copied into the private storage of the app.</li>
      </ul>
    ),
  },
  {
    title: "Barcode scanning and text reading from photos",
    body: (
      <p>
        These features run on your phone and use Google ML Kit. The image and the text it reads are not sent
        anywhere. Like other apps that use ML Kit, the ML Kit library may send small technical reports to
        Google, such as device model, app version and error or performance information. These reports do
        not contain your cards, photos or text. See Google&apos;s ML Kit terms and data disclosure for details.
      </p>
    ),
  },
  {
    title: "Notifications",
    body: (
      <p>
        If you turn on expiry reminders or the daily reminder, StampWallet shows notifications created on
        your phone. No server is involved.
      </p>
    ),
  },
  {
    title: "Backups",
    body: (
      <p>
        The &quot;Back up my cards&quot; feature creates a file with your cards and photos. You choose where
        it goes, for example Google Drive, email or your files. We never receive it. The file is not
        encrypted, so keep it somewhere safe.
      </p>
    ),
  },
  {
    title: "Deleting your data",
    body: (
      <p>
        Open Settings and choose &quot;Clear all data&quot;, or uninstall the app. Both remove your cards and
        photos from your phone. Backup files you made are not deleted, because they are yours.
      </p>
    ),
  },
  {
    title: "Children",
    body: (
      <p>
        StampWallet is not directed to children under 13, and we do not knowingly collect data from anyone.
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

export default function StampWalletPrivacyPage() {
  return (
    <section>
      <Container className="max-w-[820px] py-16 md:py-20">
        <Eyebrow>StampWallet</Eyebrow>
        <h1 className="mb-3 font-heading text-4xl md:text-5xl font-bold text-brand-indigo">Privacy Policy</h1>
        <p className="mb-2 text-slate-600">Effective date: 13 November 2026</p>
        <p className="mb-10 leading-relaxed text-slate-700">
          StampWallet is made by {site.name} ({site.legalName}), Sahiwal, Punjab, Pakistan.{" "}
          <strong>No account, no phone number, no ads. Your cards and photos stay on your phone.</strong>
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
