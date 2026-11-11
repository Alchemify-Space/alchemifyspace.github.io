import type { Metadata } from "next";
import { site } from "@/app/lib/site";

// Per-page metadata with a correct canonical, og:url and social cards.
// Uses the default share card (public/images/og-image.png) unless `image` is given.
const DEFAULT_OG_IMAGE = "/images/og-image.png";
export function pageMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle = false,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const images = [{ url: image ?? DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: fullTitle }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((i) => i.url),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
