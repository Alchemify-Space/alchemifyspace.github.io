"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Cloud,
  Zap,
  Check,
  ArrowRight,
  Play,
  Quote,
  Calendar,
  User,
  ChevronRight
} from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* YouTube Video Section */}
      <YouTubeSection />

      {/* Work Process Section */}
      <WorkProcessSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <CTASection />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/alchemify-hero-bg-v2.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/80 to-[#1a365d]/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
        <motion.p
          variants={fadeInUp}
          className="text-[#ed8936] font-medium text-lg mb-4 tracking-wider uppercase"
        >
          Cosmic Alchemy for Digital Products
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Transforming Ideas<br />into Reality.
        </motion.h1>

        {/* Feature Items */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12"
        >
          {[
            { icon: Smartphone, label: "Mobile Apps" },
            { icon: Globe, label: "Web Apps" },
            { icon: Cloud, label: "Cloud Solutions" },
            { icon: Zap, label: "Rapid Prototyping" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <item.icon className="w-8 h-8 text-[#ed8936]" />
              <span className="font-semibold text-lg">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/home-1/about.png"
                alt="Javeed Ishaq - Founder & Alchemist"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
              Crafting Digital<br />Experiences That Matter
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Welcome to Alchemify.Space, where abstract ideas transform into concrete digital realities.
              I specialize in building high-quality mobile apps, web applications, and cloud solutions that
              bring your vision to life. From concept to deployment, I apply cosmic alchemy to every line of code.
            </p>

            {/* Feature Points */}
            <div className="space-y-3 mb-8">
              {[
                "Full-stack Development",
                "Cloud Architecture",
                "UI/UX Design",
                "Innovative Solutions",
                "Dedicated Support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#ed8936]" />
                  <span className="text-[#1a365d] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Author Info */}
            <div className="mb-8">
              <p className="text-[#1a365d] font-bold text-xl">Javeed Ishaq</p>
              <p className="text-gray-500">Founder & Alchemist</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/services/">
                <Button className="bg-[#1a365d] hover:bg-[#1a365d]/90 text-white">
                  View Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact/">
                <Button variant="outline" className="border-[#ed8936] text-[#ed8936] hover:bg-[#ed8936] hover:text-white">
                  Hire Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function YouTubeSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="text-[#ed8936] font-medium mb-2 uppercase tracking-wider">Latest Content</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d]">Watch My Latest Videos</h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PL7Rh-8_0-4aD3J-K4yL-5P4l7_9-2K_1_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your vision, requirements, and goals to create a comprehensive project roadmap.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating intuitive UI/UX designs and interactive prototypes for your approval.",
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution with clean, scalable code using modern technologies.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Deploying your product and providing ongoing maintenance and support.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-[#ed8936] font-medium mb-2 uppercase tracking-wider">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d]">
            Let Us Take The Stress<br />Out Of Your Project
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative"
            >
              <div className="text-6xl font-bold text-gray-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React, React Native, Node.js, TypeScript, AWS, and various modern web and mobile technologies. I stay current with industry trends to deliver cutting-edge solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex mobile app could take 3-6 months. I provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "Yes! I offer maintenance packages that include bug fixes, updates, and feature enhancements. Your digital product needs continuous care to stay competitive.",
    },
    {
      question: "What is your pricing structure?",
      answer: "I offer both project-based and hourly pricing depending on your needs. After understanding your requirements, I provide a transparent quote with no hidden fees.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8">
              Frequently Asked<br />Questions
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about working with me? Here are some common inquiries from clients.
            </p>
            <Link href="/faq/">
              <Button className="bg-[#ed8936] hover:bg-[#ed8936]/90 text-white">
                View All FAQs
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[#1a365d] mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Javeed transformed our vague idea into a fully functional mobile app. His technical expertise and attention to detail exceeded our expectations.",
      author: "Ahmed Khan",
      role: "Startup Founder",
    },
    {
      quote: "Working with Alchemify.Space was a game-changer for our business. The web application they built streamlined our operations significantly.",
      author: "Sarah Johnson",
      role: "Business Owner",
    },
    {
      quote: "Professional, responsive, and incredibly skilled. The cloud infrastructure solution has saved us thousands in operational costs.",
      author: "Muhammad Ali",
      role: "CTO, TechCorp",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-[#ed8936] font-medium mb-2 uppercase tracking-wider">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d]">What Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 rounded-xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-[#ed8936] mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-[#1a365d]">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const posts = [
    {
      title: "The Future of Mobile App Development in 2025",
      excerpt: "Exploring emerging trends and technologies shaping the mobile landscape.",
      date: "Jan 15, 2025",
      author: "Javeed Ishaq",
      image: "/images/home-1/blog-1.png",
    },
    {
      title: "Building Scalable Cloud Architecture",
      excerpt: "Best practices for designing cloud infrastructure that grows with your business.",
      date: "Jan 10, 2025",
      author: "Javeed Ishaq",
      image: "/images/home-1/blog-2.png",
    },
    {
      title: "React vs Vue: Choosing the Right Framework",
      excerpt: "A comprehensive comparison to help you make the right decision for your project.",
      date: "Jan 5, 2025",
      author: "Javeed Ishaq",
      image: "/images/home-1/blog-3.png",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[#ed8936] font-medium mb-2 uppercase tracking-wider">Our Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d]">Latest Articles</h2>
          </div>
          <Link href="/blog/" className="hidden md:flex items-center gap-2 text-[#ed8936] hover:text-[#ed8936]/80 font-medium">
            View All Posts
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                <h3 className="font-bold text-[#1a365d] mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog/">
            <Button variant="outline" className="border-[#ed8936] text-[#ed8936]">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-[#1a365d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. Whether it's a mobile app, web application,
            or cloud solution, I'm here to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/">
              <Button size="lg" className="bg-[#ed8936] hover:bg-[#ed8936]/90 text-white">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a365d]">
                <Play className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
