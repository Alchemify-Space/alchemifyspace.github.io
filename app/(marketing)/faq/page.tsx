import Link from "next/link";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our services, process, and pricing.",
};

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern web and mobile technologies including React, Next.js, React Native, Flutter, Node.js, TypeScript, AWS, and various cloud platforms. I stay current with industry trends to deliver cutting-edge solutions.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex mobile app could take 3-6 months. During our initial consultation, I'll provide a detailed timeline based on your specific requirements.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes! I offer maintenance packages that include bug fixes, security updates, performance optimization, and feature enhancements. Your digital product needs continuous care to stay competitive and secure.",
  },
  {
    question: "What is your pricing structure?",
    answer: "I offer both project-based fixed pricing and hourly rates depending on your needs. After understanding your requirements, I provide a transparent quote with no hidden fees. Payment terms are typically milestone-based for larger projects.",
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Absolutely! I have extensive experience working with existing projects, whether it's refactoring legacy code, adding new features, or modernizing outdated applications. I'll assess your current setup and recommend the best approach.",
  },
  {
    question: "Do you offer design services?",
    answer: "Yes, I provide UI/UX design services including wireframing, prototyping, and high-fidelity designs. I follow user-centered design principles to create intuitive and visually appealing interfaces.",
  },
  {
    question: "How do we get started?",
    answer: "Simply reach out through the contact form or email me directly. We'll schedule a free consultation to discuss your project, goals, and requirements. From there, I'll provide a proposal outlining scope, timeline, and pricing.",
  },
  {
    question: "What industries do you work with?",
    answer: "I've worked across various industries including e-commerce, healthcare, education, finance, and startups. My diverse experience allows me to bring best practices and innovative solutions to any sector.",
  },
];

export default function FAQPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQ</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <Link href="/" className="hover:text-[#ed8936]">Home</Link>
            <span>/</span>
            <span className="text-[#ed8936]">FAQ</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#ed8936] font-medium mb-2 uppercase tracking-wider">Have Questions?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d]">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-[#1a365d]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
