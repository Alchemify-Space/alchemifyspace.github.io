import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/app/lib/seo";
import { getAllPosts } from "@/app/lib/posts";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Guides on Flutter, Supabase and adding AI to mobile apps, from the Alchemify Space studio.",
  path: "/blog/",
});

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
      <section className="bg-brand-indigo text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-brand-cyan">Blog</span>
          </nav>
          <h1 className="mb-4 font-heading text-4xl md:text-[52px] leading-[1.05] font-bold">Blog</h1>
          <p className="max-w-[620px] text-lg leading-relaxed text-slate-200">
            Notes on Flutter, Supabase and adding AI to mobile apps, from building client projects and
            our own products.
          </p>
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
                    <span className="px-3 py-1 bg-[#f5b942] text-[#1e1b4b] text-xs font-medium rounded-full">
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
                  <h2 className="text-xl font-bold text-[#1e1b4b] mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-2 text-[#6d28d9] font-medium hover:gap-3 transition-all"
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
