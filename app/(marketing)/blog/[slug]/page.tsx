import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/app/lib/posts";
import { PostBody } from "@/app/components/PostBody";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `/blog/${post.slug}/` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            url: `/blog/${post.slug}/`,
            siteName: "Alchemify Space",
            images: [{ url: post.image || "/images/og-image.png", alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image || "/images/og-image.png"],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-brand-indigo text-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20">
                    <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                        <Link href="/" className="hover:text-white">
                            Home
                        </Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/blog/" className="hover:text-white">
                            Blog
                        </Link>
                        <span aria-hidden="true">/</span>
                        <span className="text-brand-cyan">{post.category}</span>
                    </nav>
                    <h1 className="mb-5 font-heading text-3xl md:text-[44px] leading-[1.1] font-bold">
                        {post.title}
                    </h1>
                    <p className="mb-6 text-lg leading-relaxed text-slate-200">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300">
                        <span className="flex items-center gap-1.5">
                            <User className="w-4 h-4" aria-hidden="true" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" aria-hidden="true" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-white py-12 md:py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <PostBody content={post.content} />

                    <Link
                        href="/blog/"
                        className="mt-10 inline-flex items-center gap-2 border-t border-slate-200 pt-8 font-medium text-brand-purple hover:text-brand-purple-dark"
                    >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        Back to all articles
                    </Link>
                </div>
            </section>
        </div>
    );
}
