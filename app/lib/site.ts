// Single source for company facts and contact details used across the site.

export const site = {
  name: "Alchemify Space",
  legalName: "ALCHEMIFYSPACE (SMC-PRIVATE) LIMITED",
  url: "https://www.alchemifyspace.com",
  tagline: "Mobile apps. Full-stack AI. Built to ship.",
  // All three are Cloudflare Email Routing aliases that land in alchemifyspace@gmail.com.
  email: "hello@alchemifyspace.com", // public address: site, signature, LinkedIn, Clutch
  supportEmail: "support@alchemifyspace.com", // Glamio / CodeCanyon buyers
  founderEmail: "javeed@alchemifyspace.com", // personal outreach to agencies (not shown on the site)
  phoneDisplay: "+92 310 1556061",
  phoneHref: "tel:+923101556061",
  whatsappHref: "https://wa.me/923101556061",
  youtube: "https://youtube.com/@AlchemifySpace",
  // Registered office exactly as on SECP / D&B records (Apple and Google match it).
  address: [
    "Chak No. 60-61 GD, Post Office Chak No. 66 GD",
    "Tehsil and District Sahiwal, Sahiwal, Punjab 57000, Pakistan",
  ],
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
