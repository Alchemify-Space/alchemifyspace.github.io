import { getAllPosts } from "@/app/lib/posts";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.alchemifyspace.com";

const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/agencies/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ai-features/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/products/glamio/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/products/glamio/demo/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/products/glamio/docs/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/products/glamio/changelog/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/products/support/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/apps/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/apps/warrantiq/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/apps/warrantiq/privacy/", priority: 0.4, changeFrequency: "monthly" },
  { path: "/apps/warrantiq/terms/", priority: 0.4, changeFrequency: "monthly" },
  { path: "/apps/warrantiq/delete-account/", priority: 0.4, changeFrequency: "monthly" },
  { path: "/apps/stampwallet/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/apps/stampwallet/privacy/", priority: 0.4, changeFrequency: "monthly" },
  { path: "/apps/bijli-unit-tracker/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/apps/bijli-unit-tracker/privacy/", priority: 0.4, changeFrequency: "monthly" },
  { path: "/apps/bijli-unit-tracker/terms/", priority: 0.4, changeFrequency: "monthly" },
  { path: "/kids/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/urdu/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog/", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...pages.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...blogPosts,
  ];
}
