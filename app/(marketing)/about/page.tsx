import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Code, Rocket } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Javeed Ishaq, founder of Alchemify.Space. Transforming ideas into digital reality through expert mobile, web, and cloud development services.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero/Breadcrumb Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/inner/portfolio-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Company</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <Link href="/" className="hover:text-[#ed8936]">Home</Link>
            <span>/</span>
            <span className="text-[#ed8936]">About</span>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/home-1/about.png"
                  alt="Javeed Ishaq - Founder & Digital Alchemist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
                Hello, I&apos;m Javeed Ishaq<br />
                Founder & Digital Alchemist
              </h2>

              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Welcome to Alchemify.Space, where abstract ideas transform into concrete digital realities. With over
                a decade of experience in software development, I specialize in building high-quality mobile apps,
                web applications, and cloud solutions that bring visions to life.
              </p>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                My approach combines technical expertise with creative problem-solving, applying what I call
                "cosmic alchemy" to every line of code. From concept to deployment, I'm passionate about
                creating digital products that not only meet requirements but exceed expectations.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Code className="w-8 h-8 text-[#ed8936]" />
                  <span className="font-bold text-[#1a365d]">Clean Code</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-8 h-8 text-[#ed8936]" />
                  <span className="font-bold text-[#1a365d]">Fast Delivery</span>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3 mb-8">
                {[
                  "Full-stack development: Mobile, Web, and Cloud",
                  "Modern tech stack: React, Node.js, AWS, Flutter",
                  "From MVP to enterprise-scale solutions",
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses and individuals by transforming their innovative ideas into robust, 
                scalable digital solutions that drive growth and create meaningful impact in the world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become a leading force in digital transformation, known for our commitment to excellence, 
                innovation, and the success of our clients' ventures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
