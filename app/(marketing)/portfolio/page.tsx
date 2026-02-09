import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful projects in mobile app development, web applications, and cloud solutions.",
};

const projects = [
  {
    title: "E-Commerce Mobile App",
    category: "Mobile Development",
    image: "/images/home-1/blog-1.png",
    description: "A full-featured e-commerce application with payment integration and real-time inventory.",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "SaaS Dashboard Platform",
    category: "Web Development",
    image: "/images/home-1/blog-2.png",
    description: "Analytics dashboard for enterprise clients with real-time data visualization.",
    technologies: ["Next.js", "TypeScript", "AWS"],
  },
  {
    title: "Healthcare Management System",
    category: "Web Development",
    image: "/images/home-1/blog-3.png",
    description: "Patient management and appointment scheduling system for clinics.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Cloud Infrastructure Migration",
    category: "Cloud Solutions",
    image: "/images/home-1/blog-1.png",
    description: "Complete cloud migration and optimization for a growing startup.",
    technologies: ["AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Social Media App",
    category: "Mobile Development",
    image: "/images/home-1/blog-2.png",
    description: "Feature-rich social platform with real-time messaging and content sharing.",
    technologies: ["Flutter", "Firebase", "GraphQL"],
  },
  {
    title: "Corporate Website Redesign",
    category: "Web Development",
    image: "/images/home-1/blog-3.png",
    description: "Modern, responsive corporate website with CMS integration.",
    technologies: ["Next.js", "Tailwind CSS", "Sanity"],
  },
];

export default function PortfolioPage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/inner/portfolio-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <Link href="/" className="hover:text-[#ed8936]">Home</Link>
            <span>/</span>
            <span className="text-[#ed8936]">Portfolio</span>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#ed8936] font-medium mb-2 uppercase tracking-wider">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d]">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#1a365d]/0 group-hover:bg-[#1a365d]/60 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#ed8936] font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-[#1a365d] mt-2 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-[#1a365d]/10 text-[#1a365d] text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Your next big idea could be our next featured project.
          </p>
          <Link href="/contact/">
            <Button size="lg" className="bg-[#ed8936] hover:bg-[#ed8936]/90 text-white">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
