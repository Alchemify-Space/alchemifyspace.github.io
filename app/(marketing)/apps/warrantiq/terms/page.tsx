import { pageMetadata } from "@/app/lib/seo";
import { Container } from "@/app/components/marketing";
import Link from 'next/link';

const CONTACT_EMAIL = 'support@alchemifyspace.com';
const COMPANY = 'ALCHEMIFYSPACE (SMC-PRIVATE) LIMITED';
const ADDRESS =
  'Chak No. 60-61 GD, Tehsil and District Sahiwal, Sahiwal 57000, Punjab, Pakistan';
const EFFECTIVE_DATE = 'November 13, 2026';

export const metadata = pageMetadata({
  title: 'WarrantIQ Terms of Use',
  description:
    'The terms for using WarrantIQ: your account, free and Premium plans, reminders, AI scans and more.',
  path: '/apps/warrantiq/terms/',
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

export default function TermsPage() {
  return (
    <section>
      <Container className="max-w-[820px] py-16 md:py-20">
      <Link href="/apps/warrantiq/" className="text-sm text-brand-purple hover:underline">
        ← WarrantIQ
      </Link>

      <h1 className="mt-6 font-heading text-4xl font-bold text-brand-indigo md:text-5xl">
        Terms of use
      </h1>
      <p className="mt-2 text-sm text-slate-700">
        Effective date: {EFFECTIVE_DATE}
      </p>

      <div className="mt-8 space-y-3 leading-relaxed text-slate-700">
        <p>
          These terms are between you and{' '}
          <strong className="text-brand-indigo">{COMPANY}</strong>,
          a company registered in Pakistan, trading as Alchemify Space
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and cover your use of
          the <strong className="text-brand-indigo">WarrantIQ</strong>{' '}
          mobile app and
          our website (the &quot;Service&quot;). By creating an account or using the
          Service, you agree to them. If you do not agree, please do not use the
          Service. You must be at least 13 years old, or the minimum age in your
          country.
        </p>
      </div>

      <Section title="1. What WarrantIQ does">
        <p>
          WarrantIQ helps you record warranties, keep receipts and documents,
          and get reminded before cover ends. It also helps you write a claim
          message and create a proof-of-purchase PDF.
        </p>
        <p>
          WarrantIQ is not legal advice, not a manufacturer or retailer, and not
          a claim service. We are not connected to the brands whose products you
          add. We do not make claims for you, and we cannot guarantee that a
          claim will be accepted.
        </p>
      </Section>

      <Section title="2. Your account">
        <p>
          Give us accurate information and keep your sign-in details safe. You
          are responsible for what happens under your account. You can delete
          your account at any time (see{' '}
          <Link href="/apps/warrantiq/delete-account/" className="text-brand-purple hover:underline">
            account deletion
          </Link>
          ).
        </p>
      </Section>

      <Section title="3. Your content">
        <p>
          You own the warranty details, photos, and documents you add. You give
          us permission to store and process them only as needed to run the
          Service for you, including sending images to our AI provider when you
          choose to scan.
        </p>
        <p>
          You are responsible for the accuracy of the dates and documents you
          store. Only add content you are allowed to use, and do not upload
          anything unlawful or anything that belongs to someone else without
          their permission.
        </p>
      </Section>

      <Section title="4. Free plan and Premium">
        <p>
          The free plan includes up to 3 warranties, up to 3 files per warranty,
          and 3 lifetime AI scans. Expiry reminders on your phone are free.
        </p>
        <p>
          WarrantIQ Premium removes these limits and includes backup and
          restore. Premium is a paid subscription sold through Google Play. The
          price, billing period (monthly or yearly), and any free trial are
          shown in the app before you buy. Prices include or exclude local taxes
          as shown by Google Play.
        </p>
        <p>
          <strong className="text-brand-indigo">Automatic renewal.</strong> A
          subscription renews automatically for the same period at the then
          current price, and your Google Play account is charged, until you
          cancel. If you start a free trial and do not cancel before it ends,
          you will be charged for the first period.
        </p>
        <p>
          <strong className="text-brand-indigo">How to cancel.</strong> Open
          Google Play, tap your profile, then Payments and subscriptions, then
          Subscriptions, choose WarrantIQ, and tap Cancel. You can also cancel
          from our app by tapping Manage subscription. Cancel at least one day
          before the renewal date. Cancelling stops future charges; you keep
          Premium until the end of the period you already paid for. Uninstalling
          the app or deleting your WarrantIQ account does not cancel it.
        </p>
        <p>
          <strong className="text-brand-indigo">Refunds and your right to
          withdraw.</strong> Payments and refunds are handled by Google Play
          under its own policies. Where the law of your country gives you a
          right to cancel a digital purchase (for example a 14-day right in the
          EU and UK), that right applies as the law and Google Play describe.
          Nothing here limits your statutory rights. To ask about a charge, email
          us and we will help you through Google Play.
        </p>
        <p>
          <strong className="text-brand-indigo">Price changes.</strong> We may
          change Premium prices. We will tell you in advance, and where the law
          or Google Play requires it, the new price applies only after you have
          agreed or when a new period starts without you cancelling. If you do
          not accept a new price, cancel before it takes effect.
        </p>
        <p>
          If Premium ends, your data stays safe. You keep access to your
          warranties, but the free-plan limits apply to adding new items.
        </p>
      </Section>

      <Section title="5. Reminders">
        <p>
          Reminders are there to help you, but they depend on your phone. They
          can be late or missed if notifications are off, if battery saving or
          do-not-disturb settings block them, or if the phone&apos;s date or time
          is wrong. Please also check your warranty dates yourself and do not
          rely only on a reminder.
        </p>
      </Section>

      <Section title="6. AI scan">
        <p>
          AI scan suggests details from a photo of a receipt or label. The
          suggestions can be wrong or incomplete. Always review them before you
          save. Do not scan anything you do not want sent to our AI provider.
        </p>
      </Section>

      <Section title="7. Claim messages, proof PDFs and backups">
        <p>
          The claim helper only prepares a message. You send it yourself with
          WhatsApp, email, or phone. Proof-of-purchase PDFs are a summary of what
          you saved and are not an official document from a store or maker.
          Backup files contain your warranty details but not your receipts or
          documents. You are responsible for keeping any file you export in a
          safe place.
        </p>
      </Section>

      <Section title="8. Acceptable use">
        <p>Please do not:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the Service for anything unlawful or harmful</li>
          <li>Try to break, overload, or get around the limits of the Service</li>
          <li>Reverse engineer the app or copy it to build a competing service</li>
          <li>Use the Service to store or share other people&apos;s private data without permission</li>
        </ul>
      </Section>

      <Section title="9. Changes to the Service and these terms">
        <p>
          We may change, add, or remove features, limits, or prices, and we may
          update these terms. We will post the new terms here and change the
          effective date. If a change is important, we may also tell you in the
          app. Continued use after an update means you accept the new terms. If
          you do not, you can stop using the Service and delete your account.
        </p>
      </Section>

      <Section title="10. Ending your use">
        <p>
          You can stop using WarrantIQ at any time. We may suspend or end access
          if you break these terms or misuse the Service. When an account is
          closed, we handle your data as described in our{' '}
          <Link href="/apps/warrantiq/privacy/" className="text-brand-purple hover:underline">
            Privacy policy
          </Link>
          .
        </p>
      </Section>

      <Section title="11. Disclaimers and liability">
        <p>
          We work to keep WarrantIQ reliable, but it is provided &quot;as is&quot;
          and &quot;as available&quot;. To the extent the law allows, we are not
          responsible for a missed reminder, a rejected or late claim, wrong
          AI suggestions, or indirect or consequential losses, and our total
          liability to you is limited to the amount you paid us in the 12 months
          before the issue.
        </p>
        <p>
          Nothing in these terms limits any right you have under mandatory
          consumer-protection law where you live, or any liability that cannot be
          excluded by law.
        </p>
      </Section>

      <Section title="12. Our rights in the app">
        <p>
          WarrantIQ, its design, name, and code belong to us or our licensors.
          We give you a personal, non-exclusive, non-transferable licence to
          use the app on your own devices under these terms. If you send us
          feedback or ideas, we may use them without owing you anything.
        </p>
      </Section>

      <Section title="13. Governing law and disputes">
        <p>
          These terms are governed by the laws of Pakistan, and the courts of
          Sahiwal, Punjab, can hear disputes, except that nothing removes the
          mandatory consumer-protection rights or the right to go to court in
          the country where you live, if the law there gives you that right.
          Please contact us first at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-purple hover:underline">
            {CONTACT_EMAIL}
          </a>{' '}
          and we will try to fix the problem.
        </p>
      </Section>

      <Section title="14. General">
        <p>
          If part of these terms is found invalid, the rest stays in force. If
          we do not enforce a term, that does not mean we give it up. You may
          not transfer your account or these terms to someone else without our
          consent; we may transfer them as part of a sale of our business.
          These terms, with the Privacy policy, are the whole agreement between
          you and us about the Service.
        </p>
      </Section>

      <Section title="15. Privacy">
        <p>
          How we handle your information is explained in our{' '}
          <Link href="/apps/warrantiq/privacy/" className="text-brand-purple hover:underline">
            Privacy policy
          </Link>
          .
        </p>
      </Section>

      <Section title="16. Contact us">
        <p>
          Questions about these terms:{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand-purple hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>
          <strong className="text-brand-indigo">Provider:</strong> {COMPANY},
          {' '}{ADDRESS}
        </p>
      </Section>

      <p className="mt-12 border-t border-slate-200 pt-6 text-xs leading-5 text-slate-700">
        These terms are provided for transparency. They do not constitute legal
        advice. You may wish to consult a lawyer for requirements that apply to
        you.
      </p>
    </Container>
    </section>
  );
}
