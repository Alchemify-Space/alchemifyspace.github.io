import { pageMetadata } from "@/app/lib/seo";
import { Container } from "@/app/components/marketing";
import Link from 'next/link';

const CONTACT_EMAIL = 'support@alchemifyspace.com';
const COMPANY = 'ALCHEMIFYSPACE (SMC-PRIVATE) LIMITED';
const ADDRESS =
  'Chak No. 60-61 GD, Tehsil and District Sahiwal, Sahiwal 57000, Punjab, Pakistan';
const EFFECTIVE_DATE = 'November 13, 2026';

export const metadata = pageMetadata({
  title: 'WarrantIQ Privacy Policy',
  description:
    'How WarrantIQ collects, uses, stores and protects your personal information.',
  path: '/apps/warrantiq/privacy/',
});

function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-2xl font-bold text-brand-indigo">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <section>
      <Container className="max-w-[820px] py-16 md:py-20">
      <Link href="/apps/warrantiq/" className="text-sm text-brand-purple hover:underline">
        ← WarrantIQ
      </Link>

      <h1 className="mt-6 font-heading text-4xl font-bold text-brand-indigo md:text-5xl">
        Privacy policy
      </h1>
      <p className="mt-2 text-sm text-slate-700">
        Effective date: {EFFECTIVE_DATE}
      </p>

      <div className="mt-8 space-y-3 leading-relaxed text-slate-700">
        <p>
          This Privacy Policy describes how <strong className="text-brand-indigo">{COMPANY}</strong>,
          trading as Alchemify Space (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares
          information when you use the <strong className="text-brand-indigo">WarrantIQ</strong>{' '}
          mobile application, our website at{' '}
          <a
            href="https://www.alchemifyspace.com/apps/warrantiq/"
            className="text-brand-purple hover:underline"
          >
            alchemifyspace.com/apps/warrantiq
          </a>
          , and related services (collectively, the &quot;Service&quot;).
        </p>
        <p>
          By creating an account or using the Service, you agree to this Privacy
          Policy. If you do not agree, please do not use the Service. Our{' '}
          <Link href="/apps/warrantiq/terms/" className="text-brand-purple hover:underline">
            Terms of use
          </Link>{' '}
          also apply.
        </p>
      </div>

      <Section title="1. Who we are">
        <p>
          WarrantIQ is a warranty-tracking product operated by {COMPANY}, a
          company registered in Pakistan (SECP no. 0357394), with its registered
          office at {ADDRESS}. We are the &quot;controller&quot; of your personal
          data. For privacy questions or requests, contact us at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand-purple hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>

      <Section title="2. Information we collect">
        <p>
          <strong className="text-brand-indigo">Account information.</strong> When
          you register, we collect your email address, your name if you give it,
          and your sign-in credentials. Passwords are handled by our
          authentication provider and are not stored in plain text by us. If you
          choose to sign in with Google, we receive the basic profile details
          Google shares with us (your name and email address).
        </p>
        <p>
          <strong className="text-brand-indigo">Warranty and asset data.</strong>{' '}
          Information you enter or generate in the app, such as product names,
          brands, categories, purchase dates, warranty end dates, serial numbers,
          and notes.
        </p>
        <p>
          <strong className="text-brand-indigo">Photos and documents.</strong>{' '}
          Images and PDFs you capture, choose, or share into WarrantIQ from
          another app (for example a receipt sent from WhatsApp, an appliance
          label, or a warranty card). They are stored in your private receipt
          vault, and photos can be used for optional AI-assisted field
          extraction.
        </p>
        <p>
          <strong className="text-brand-indigo">Subscription and purchase data.</strong>{' '}
          If you subscribe to WarrantIQ Premium, payment is processed by Google
          Play. We receive subscription status and entitlement information
          through our billing partner (RevenueCat) so we can unlock Premium
          features. We do not receive or store your full payment card number.
        </p>
        <p>
          <strong className="text-brand-indigo">Device and app information.</strong>{' '}
          To send notifications and keep the app working, we store a push
          notification token, a device identifier, your device model and
          operating system, the app version, and the date you last used the app.
        </p>
        <p>
          <strong className="text-brand-indigo">Usage and diagnostics.</strong>{' '}
          We collect product analytics (such as which features are used) through
          Mixpanel and, in production builds, crash and error reports through
          Sentry, to improve reliability and performance.
        </p>
        <p>
          <strong className="text-brand-indigo">Device permissions.</strong> With
          your permission, the app may use your camera (to scan receipts, labels
          and barcodes), your photos or files (to attach documents), and
          notifications (to remind you before warranties expire). You can turn
          each one off in your device settings.
        </p>
        <p>
          <strong className="text-brand-indigo">Website.</strong> This marketing
          site is static and does not use advertising cookies or account login. Our
          hosting provider may process standard server logs (such as IP address and
          browser type) for security and delivery.
        </p>
      </Section>

      <Section title="3. What stays on your device">
        <p>Some features work on your phone and do not send data to us:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-brand-indigo">Reminders.</strong> Expiry
            reminders (30, 7 and 1 day before cover ends) are scheduled on your
            phone from the dates you saved.
          </li>
          <li>
            <strong className="text-brand-indigo">Barcode scanning.</strong>{' '}
            Barcodes are read on your device. The camera picture is not sent to
            us.
          </li>
          <li>
            <strong className="text-brand-indigo">Home-screen widget.</strong>{' '}
            The widget shows the name and expiry date of your next warranty on
            your home screen. Anyone who can see your phone screen can see it.
            You can remove the widget at any time.
          </li>
          <li>
            <strong className="text-brand-indigo">Claim messages and support contacts.</strong>{' '}
            When you make a claim, the app writes a message from your warranty
            details and opens WhatsApp, your email app, or your phone app for you
            to send it. A support contact you type for a brand is saved only on
            your phone.
          </li>
          <li>
            <strong className="text-brand-indigo">Proof-of-purchase PDFs and backup files.</strong>{' '}
            These files are created on your device. You decide whether to share
            or save them, and where. We do not receive them. A backup file
            contains your warranty details but not your receipts and documents.
          </li>
        </ul>
      </Section>

      <Section title="4. How we use your information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide, maintain, and improve the Service</li>
          <li>Store your assets, documents, and reminders securely</li>
          <li>
            Extract warranty-related fields from images when you use AI scan
            features
          </li>
          <li>Show reminders and send notifications before warranty expiry</li>
          <li>Process subscriptions and enforce free-plan limits</li>
          <li>Understand usage patterns and fix bugs</li>
          <li>Respond to support requests and meet legal obligations</li>
        </ul>
        <p>We do not sell your personal information. We do not use it for
          advertising, and we do not make decisions about you by automated
          means that have legal or similarly significant effects.</p>
        <p>
          <strong className="text-brand-indigo">Why we may process it (legal bases).</strong>{' '}
          Where laws such as the GDPR apply: to run your account, store your
          data, and provide Premium we rely on performing our contract with you;
          to keep the Service secure, fix bugs, and understand usage we rely on
          our legitimate interests; to send notifications and use your camera or
          files we rely on your permission, which you can withdraw in your
          device settings; and to keep records or answer legal requests we rely
          on a legal obligation.
        </p>
      </Section>

      <Section title="5. AI processing">
        <p>
          When you use AI scan, the receipt or label image is sent to a
          third-party AI provider (through OpenRouter) to suggest the product
          name, dates, warranty term, and serial number. You can review and edit
          every field before saving. Results can be wrong, so please check them.
          Do not scan images that contain information you do not want processed
          for this purpose.
        </p>
      </Section>

      <Section title="6. How we share information">
        <p>
          We share information only with service providers that help us operate
          the Service, under terms that require them to protect your data. These
          include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-brand-indigo">Supabase</strong> — sign-in,
            database, and private file storage
          </li>
          <li>
            <strong className="text-brand-indigo">OpenRouter</strong> — AI vision
            processing for scan features
          </li>
          <li>
            <strong className="text-brand-indigo">Google Play &amp; RevenueCat</strong>{' '}
            — in-app purchases and subscription status
          </li>
          <li>
            <strong className="text-brand-indigo">Google</strong> — optional
            sign-in with Google
          </li>
          <li>
            <strong className="text-brand-indigo">Google Firebase</strong> — push
            notifications and remote configuration
          </li>
          <li>
            <strong className="text-brand-indigo">Mixpanel</strong> — product
            analytics
          </li>
          <li>
            <strong className="text-brand-indigo">Sentry</strong> — crash and
            error reports
          </li>
        </ul>
        <p>
          When you send a claim message, a PDF, or a backup file to another app
          (such as WhatsApp or your email), that app handles it under its own
          privacy policy. We do not receive it.
        </p>
        <p>
          We may also disclose information if required by law, to protect our
          rights or users, or in connection with a merger or sale of the business
          (with notice where applicable).
        </p>
      </Section>

      <Section title="7. Data retention">
        <p>
          We keep your account data, assets, and uploaded documents while your
          account is active. When you delete your account, we delete your
          account, warranties, and uploaded files from our systems, normally
          within 30 days, and from backups within a further 30 days. We may keep
          limited information longer only where the law requires it or to
          resolve disputes and prevent fraud (for example purchase records).
          Analytics and crash data are kept in a form that is not used to
          identify you for as long as needed to improve the app. You can delete
          single warranties or documents at any time in the app.
        </p>
      </Section>

      <Section title="8. Security">
        <p>
          We use industry-standard measures to protect your data, including
          encrypted connections (HTTPS/TLS), access controls, and row-level
          security so each person can reach only their own records. No method of
          transmission or storage is 100% secure, so we cannot guarantee absolute
          security.
        </p>
      </Section>

      <Section title="9. Your choices and rights">
        <p>Depending on where you live, you may have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access, correct, or delete personal data we hold about you</li>
          <li>Export your data</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Ask for a copy of your data in a portable format</li>
        </ul>
        <p>
          We answer requests within one month (or the time your law sets). If
          you are in the EU, EEA, or UK, you may also complain to your local
          data protection authority. If you live in a US state with a privacy
          law, you may have the rights above and the right not to be treated
          unfairly for using them. We do not sell or share personal data for
          advertising.
        </p>
        <p>
          You can edit or delete individual warranties and documents in the app.
          To delete your whole account, open WarrantIQ, go to Account, and tap
          &quot;I want to delete my account&quot;, or follow the steps on our{' '}
          <Link href="/apps/warrantiq/delete-account/" className="text-brand-purple hover:underline">
            account deletion
          </Link>{' '}
          page, or email{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand-purple hover:underline"
          >
            {CONTACT_EMAIL}
          </a>{' '}
          from the address linked to your account. We may need to verify your
          identity before we act on a request.
        </p>
        <p>
          You can turn notifications off in the app&apos;s settings or in your
          device settings. You can manage a Premium subscription in Google Play
          subscription settings.
        </p>
      </Section>

      <Section title="10. Children&apos;s privacy">
        <p>
          The Service is not directed to children under 13 (or the minimum age
          required in your country). We do not knowingly collect personal
          information from children. If you believe a child has given us personal
          data, contact us and we will delete it.
        </p>
      </Section>

      <Section title="11. International transfers">
        <p>
          We and our service providers may process data in countries other than
          where you live, including Pakistan, the United States, and the
          European Union. Where required, we rely on safeguards such as the
          standard contractual clauses or our providers&apos; data-protection
          commitments for cross-border transfers.
        </p>
      </Section>

      <Section title="12. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the
          revised policy on this page and update the effective date. Material
          changes may also be shown in the app or sent by email where
          appropriate. Continued use after changes take effect means you accept
          the updated policy.
        </p>
      </Section>

      <Section title="13. Contact us">
        <p>
          Questions about this Privacy Policy or our data practices:
        </p>
        <p>
          <strong className="text-brand-indigo">Email:</strong>{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand-purple hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>
          <strong className="text-brand-indigo">Controller:</strong> {COMPANY},
          {' '}{ADDRESS}
        </p>
        <p>
          <strong className="text-brand-indigo">Website:</strong>{' '}
          <a
            href="https://www.alchemifyspace.com/apps/warrantiq/"
            className="text-brand-purple hover:underline"
          >
            https://www.alchemifyspace.com/apps/warrantiq/
          </a>
        </p>
      </Section>

      <p className="mt-12 border-t border-slate-200 pt-6 text-xs leading-5 text-slate-700">
        This policy is provided for transparency about our practices. It does not
        constitute legal advice. You may wish to consult a lawyer for jurisdiction-specific
        requirements.
      </p>
    </Container>
    </section>
  );
}
