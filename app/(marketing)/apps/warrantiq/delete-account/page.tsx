import { pageMetadata } from "@/app/lib/seo";
import { Container } from "@/app/components/marketing";
import Link from 'next/link';

const CONTACT_EMAIL = 'support@alchemifyspace.com';

export const metadata = pageMetadata({
  title: 'Delete Your WarrantIQ Account',
  description:
    'How to delete a WarrantIQ account and what data Alchemify Space removes or keeps.',
  path: '/apps/warrantiq/delete-account/',
});

export default function DeleteAccountPage() {
  return (
    <section>
      <Container className="max-w-[820px] py-16 md:py-20">
      <Link href="/apps/warrantiq/" className="text-sm text-brand-purple hover:underline">
        ← WarrantIQ
      </Link>

      <h1 className="mt-6 font-heading text-4xl font-bold text-brand-indigo md:text-5xl">
        Delete your WarrantIQ account
      </h1>
      <p className="mt-2 text-sm text-slate-700">
        Developer: Alchemify Space. Product: WarrantIQ.
      </p>

      <section className="mt-10 space-y-3 leading-relaxed text-slate-700">
        <h2 className="font-heading text-2xl font-bold text-brand-indigo">
          How to request deletion
        </h2>
        <p>
          <strong className="text-brand-indigo">In the app (fastest):</strong>{' '}
          open WarrantIQ → Account → I want to delete my account → confirm. This signs you
          out and starts deletion of your account data.
        </p>
        <p>
          <strong className="text-brand-indigo">By email:</strong> send a
          request from the email address on your WarrantIQ account to{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=WarrantIQ%20account%20deletion`}
            className="text-brand-purple hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          . Include the subject “WarrantIQ account deletion”. We may ask you to
          confirm ownership of the account. We complete email requests within
          30 days.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-slate-700">
        <h2 className="font-heading text-2xl font-bold text-brand-indigo">
          What we delete
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Your login (email / OAuth identity) and profile</li>
          <li>Assets, serial numbers, warranty dates, and notes</li>
          <li>Uploaded receipts, labels, and other vault documents</li>
          <li>Reminder settings stored with your account</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-slate-700">
        <h2 className="font-heading text-2xl font-bold text-brand-indigo">
          What we may keep
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Google Play purchase / subscription records (managed by Google).
            Deleting your account does not cancel a Premium subscription, so
            please cancel it in Google Play subscriptions first
          </li>
          <li>
            Data we must keep for legal, security, fraud-prevention, or backup
            purposes, for a limited time
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-slate-700">
        <h2 className="font-heading text-2xl font-bold text-brand-indigo">
          Delete some data without closing the account
        </h2>
        <p>
          You can delete individual assets and documents in the app without
          deleting your account.
        </p>
      </section>

      <p className="mt-10 text-sm text-slate-700">
        More detail:{' '}
        <Link href="/apps/warrantiq/privacy/" className="text-brand-purple hover:underline">
          Privacy policy
        </Link>
        .
      </p>
    </Container>
    </section>
  );
}
