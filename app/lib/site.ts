// Single source for company facts and contact details used across the site.

export const site = {
  name: "Alchemify Space",
  legalName: "ALCHEMIFYSPACE (SMC-PRIVATE) LIMITED",
  url: "https://alchemify.space",
  // All three are Namecheap forwarding aliases that land in alchemifyspace@gmail.com.
  email: "hello@alchemify.space", // public address: site, signature, LinkedIn, Clutch
  supportEmail: "support@alchemify.space", // Glamio / CodeCanyon buyers
  founderEmail: "javeed@alchemify.space", // personal outreach to agencies (not shown on the site)
  phoneDisplay: "+92 310 1556061",
  phoneHref: "tel:+923101556061",
  whatsappHref: "https://wa.me/923101556061",
  youtube: "https://youtube.com/@AlchemifySpace",
  address: ["Chak No. 60-61 GD, Sahiwal 57000", "Punjab, Pakistan"],
  founder: {
    name: "Javeed Ishaq",
    role: "Founder and lead developer",
    headshot: "/images/team/javeed-headshot.jpg", // face only: avatars, contact card
    studioPhoto: "/images/team/javeed-studio.jpg", // at the desk: hero and about sections
  },
  secpCuin: "0357394",
  ntn: "K025400",
  duns: "31-156-4311",
  // Set NEXT_PUBLIC_BOOKING_URL (Cal.com / Calendly) to send "Book a call" straight to a scheduler.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "/contact/",
} as const;

export const mainNav = [
  { name: "For Agencies", href: "/agencies/" },
  { name: "AI Features", href: "/ai-features/" },
  { name: "Products", href: "/products/" },
  { name: "About", href: "/about/" },
  { name: "Blog", href: "/blog/" },
] as const;
