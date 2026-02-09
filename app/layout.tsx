import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

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
    template: "%s | Alchemify.Space",
    default: "Alchemify.Space - Transforming Ideas into Reality",
  },
  description:
    "Cosmic Alchemy for Digital Products. We transform ideas into reality through mobile app development, web solutions, and cloud services.",
  keywords: [
    "mobile app development",
    "web development",
    "cloud solutions",
    "digital products",
    "Alchemify",
  ],
  authors: [{ name: "Alchemify.Space" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alchemify.space",
    siteName: "Alchemify.Space",
    title: "Alchemify.Space - Transforming Ideas into Reality",
    description:
      "Cosmic Alchemy for Digital Products. We transform ideas into reality through mobile app development, web solutions, and cloud services.",
    images: [
      {
        url: "/images/alchemify-hero-bg-v2.png",
        width: 1200,
        height: 630,
        alt: "Alchemify.Space Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alchemify.Space - Transforming Ideas into Reality",
    description:
      "Cosmic Alchemy for Digital Products. We transform ideas into reality through mobile app development, web solutions, and cloud services.",
    images: ["/images/alchemify-hero-bg-v2.png"],
    creator: "@alchemifyspace",
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
        {children}
      </body>
    </html>
  );
}
