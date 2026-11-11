import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs } from "@/app/lib/posts";

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
            <section className="relative py-32 bg-[#1e1b4b]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-white/80">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                        <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-white mt-4">
                        <Link href="/" className="hover:text-brand-cyan">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-brand-cyan">
                            Blog
                        </Link>
                        <span>/</span>
                        <span className="text-brand-cyan">{post.category}</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/blog/"
                        className="inline-flex items-center gap-2 text-[#6d28d9] font-medium mb-8 hover:gap-3 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <article className="prose prose-lg max-w-none prose-headings:text-[#1e1b4b] prose-a:text-[#6d28d9] prose-strong:text-[#1e1b4b]">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </article>
                </div>
            </section>
        </div>
    );
}
