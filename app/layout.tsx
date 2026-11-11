import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/app/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/images/logo/alchemify-logo-round.png`,
  email: site.email,
  telephone: "+923101556061",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chak No. 60-61 GD",
    addressLocality: "Sahiwal",
    postalCode: "57000",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  sameAs: [site.youtube],
  founder: {
    "@type": "Person",
    name: site.founder.name,
    jobTitle: site.founder.role,
    image: `${site.url}${site.founder.headshot}`,
  },
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alchemify.space"),
  title: {
    template: "%s | Alchemify Space",
    default: "Alchemify Space | Flutter + AI App Studio",
  },
  description:
    "White-label Flutter development for agencies, AI features for existing apps, and ready-made booking apps from a registered software company in Pakistan.",
  keywords: [
    "Flutter development",
    "white-label app development",
    "AI features for mobile apps",
    "Supabase",
    "salon booking app",
    "Alchemify Space",
  ],
  authors: [{ name: "Alchemify Space" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alchemify Space",
    title: "Alchemify Space | Flutter + AI App Studio",
    description:
      "White-label Flutter development for agencies, AI features for existing apps, and ready-made booking apps from a registered software company in Pakistan.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Alchemify Space" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alchemify Space | Flutter + AI App Studio",
    description:
      "White-label Flutter development for agencies, AI features for existing apps, and ready-made booking apps from a registered software company in Pakistan.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
