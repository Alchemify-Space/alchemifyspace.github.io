# alchemify.space: launch to-dos

Updated 11 Nov 2026. The redesigned site builds and runs; these are the things only you can supply or do. Work top to bottom: section 1 blocks the launch.

## 1. Before you deploy (blocks launch)

- [x] **Create the 3 email aliases** in Namecheap → alchemify.space → Manage → Redirect Email, each forwarding to alchemifyspace@gmail.com. The site already shows hello@ and support@, so do this before deploying.
    - [x] `hello` (website, email signature, LinkedIn, Clutch)
    - [x] `javeed` (cold outreach to agencies)
    - [x] `support` (Glamio and CodeCanyon buyers)
- [x] **Send a test email to each alias** from another account and check that all three arrive in Gmail.
- [x] **Gmail "Send mail as"** for hello@, javeed@ and support@ (done 11 Nov 2026): hello@ is the default, and replies go out from the address the message was sent to. Tested: replies arrive in the recipient's inbox, shown as "via gmail.com".
- [ ] **Gmail filter:** messages to support@alchemify.space get the label "Glamio support".
- [x] **DNS:** DMARC TXT `_dmarc` added. SPF is locked by Namecheap email forwarding, which is fine (Gmail send-as is checked against gmail.com anyway).
- [ ] **Email signature** in Gmail for hello@ and javeed@: name, "Alchemify Space · Flutter + AI app studio", alchemify.space, WhatsApp number.
- [ ] **Before cold outreach in volume:** move to Zoho Mail Lite (~$1/user/month) or Google Workspace (~$7/user/month) so mail is DKIM-signed by alchemify.space and recipients stop seeing "via gmail.com".

- [x] **Turn on real form delivery.** Web3Forms key added to `.env.local` (11 Nov 2026). `.env*` is gitignored, so always build and deploy from this machine, or copy `.env.local` to any other machine you build on.
- [ ] **Send yourself a test message** from `/contact/` after deploying, and check it arrives.
- [ ] **Create a booking link** (Cal.com or Calendly, 20-minute "Intro call"). Add `NEXT_PUBLIC_BOOKING_URL=<link>` to `.env.local`. Every "Book a call" button switches to it; until then they go to `/contact/` and WhatsApp.
- [ ] **Run it locally and click through every page** on desktop and phone width: `npm run dev`.
- [x] **Check the Google Play claim.** Confirmed 11 Nov 2026: the organisation account is verified, so "Verified Google Play developer" stays.
- [ ] **Deploy:** `npm run deploy`, then open https://alchemify.space and check the new pages are live.

## 2. Content to fill in (first two weeks)

- [ ] **Apps you have shipped.** Add 2–3 entries to `shippedApps` in `app/(marketing)/page.tsx` (name, one line, Play Store link). The section stays hidden while the list is empty.
- [ ] **Glamio screenshots.** Replace the grey placeholders on Home and Products with real screens (save in `public/images/glamio/`).
- [ ] **Founder bio.** Expand the two sentences on Home and About: years of experience, kinds of apps, one result you are proud of.
- [ ] **Agency trial-task price and hourly rate.** Decide them; the Agencies page currently says "Fixed" and "agreed hourly rate".
- [x] **Favicon** made from the flask logo (11 Nov 2026): `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`.
- [ ] **Logo files.** Get a high-resolution PNG (at least 512 px) or SVG of the round logo and replace `public/images/logo/alchemify-logo-round.png`; then ask Claude to regenerate the favicons from it for sharper icons.
- [ ] **Share image.** Optional: replace `public/images/og-image.png` (1200 × 630) with a designed version that uses the real logo.

## 3. When Glamio launches (January 2027)

- [ ] Set `GLAMIO_DEMO_URL` and `GLAMIO_CODECANYON_URL` at the top of `app/(marketing)/products/page.tsx`. The buttons switch from "Ask for early demo access" / "Get notified" automatically.
- [ ] Change the badge "Launching January 2027" to "Available now" on Products and Home.
- [ ] Add a YouTube demo video to the Products page.

## 4. SEO and visibility

- [ ] **Google Search Console:** add the alchemify.space property, verify it, and submit `https://alchemify.space/sitemap.xml`.
- [ ] **Bing Webmaster Tools:** import the site from Search Console.
- [ ] **Google Business Profile:** optional, for the registered company in Sahiwal.
- [ ] **Clutch and GoodFirms profiles** for Alchemify Space, linking to the site. Ask every client for a review there.
- [ ] **LinkedIn company page**, then add it (and any X/Twitter account) to `sameAs` in `app/layout.tsx` and the footer.
- [ ] **Replace the 6 generic blog posts.** They target topics you no longer sell (React vs Vue, DevOps). Write for buyer searches instead, one a fortnight:
    - [ ] "How to add an AI chat assistant to a Flutter app"
    - [ ] "Flutter + Supabase booking app: architecture we use"
    - [ ] "White-label Flutter development: how agencies work with us"
    - [ ] "Salon booking app source code: what to check before you buy"
- [ ] **Unpublish or redirect old posts** you delete: remove the `.md` file; the sitemap updates itself.
- [ ] After 4 weeks, check Search Console for the queries that bring impressions and write more on those.

## 5. Trust and social proof

- [ ] Ask the first agency or client for a testimonial (name, role, company). Add it to `testimonials` in `app/(marketing)/page.tsx`; the section appears automatically.
- [ ] Write one short case study once you have a project you may name.

## Where things live

| What | File |
| --- | --- |
| Email, phone, address, company numbers, booking link | `app/lib/site.ts` |
| Page titles, descriptions, share cards | `app/lib/seo.ts` + each page's `pageMetadata` |
| Brand colours | `app/globals.css` (`--color-brand-*`) |
| Shared buttons, cards, sections | `app/components/marketing.tsx` |
| Contact form | `app/components/ContactForm.tsx` |
