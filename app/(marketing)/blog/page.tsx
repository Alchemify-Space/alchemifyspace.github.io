import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { getAllPosts } from "@/app/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and updates from Alchemify.Space on mobile development, web technologies, and cloud solutions.",
  openGraph: {
    title: "Blog | Alchemify.Space",
    description:
      "Insights, tutorials, and updates from Alchemify.Space on mobile development, web technologies, and cloud solutions.",
    url: "https://alchemify.space/blog",
    images: [
      {
        url: "/images/alchemify-hero-bg-v2.png",
        width: 1200,
        height: 630,
        alt: "Alchemify.Space Blog",
      },
    ],
  },
};

// Map categories to images
const categoryImages: Record<string, string> = {
  "Mobile Development": "/images/home-1/blog-1.png",
  "Cloud Solutions": "/images/home-1/blog-2.png",
  "Web Development": "/images/home-1/blog-3.png",
  Design: "/images/home-1/blog-1.png",
  Security: "/images/home-1/blog-2.png",
  DevOps: "/images/home-1/blog-3.png",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <Link href="/" className="hover:text-[#ed8936]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#ed8936]">Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative">
                  <Image
                    src={
                      post.image ||
                      categoryImages[post.category] ||
                      "/images/home-1/blog-1.png"
                    }
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#ed8936] text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#1a365d] mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#ed8936] font-medium hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
