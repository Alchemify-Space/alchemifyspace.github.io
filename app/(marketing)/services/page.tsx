import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Globe, 
  Cloud, 
  Zap, 
  ArrowRight,
  Check
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive range of digital services including mobile app development, web development, and cloud solutions.",
};

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built with React Native and Flutter. From concept to App Store deployment.",
    features: ["iOS & Android Apps", "React Native", "Flutter", "App Store Publishing"],
    href: "/services/mobile-app-development/",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications using React, Next.js, and Node.js. SEO-friendly and performance-optimized.",
    features: ["React & Next.js", "Node.js Backend", "E-commerce", "Progressive Web Apps"],
    href: "/services/web-development/",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure on AWS, Azure, and Google Cloud. Serverless architecture and DevOps automation.",
    features: ["AWS & Azure", "Serverless", "CI/CD Pipelines", "Cloud Migration"],
    href: "/services/cloud-solutions/",
  },
  {
    icon: Zap,
    title: "UI/UX Design",
    description: "User-centered design that delights. Wireframing, prototyping, and high-fidelity designs for web and mobile.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    href: "/services/ui-ux-design/",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/inner/our-services-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <Link href="/" className="hover:text-[#ed8936]">Home</Link>
            <span>/</span>
            <span className="text-[#ed8936]">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#ed8936] font-medium mb-2 uppercase tracking-wider">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d]">
              Digital Solutions Tailored<br />to Your Needs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#ed8936]/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#ed8936]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-[#ed8936]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                  <Button variant="outline" className="border-[#ed8936] text-[#ed8936] hover:bg-[#ed8936] hover:text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and create a tailored solution.
          </p>
          <Link href="/contact/">
            <Button size="lg" className="bg-[#ed8936] hover:bg-[#ed8936]/90 text-white">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
