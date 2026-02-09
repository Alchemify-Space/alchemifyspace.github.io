import Link from "next/link";
import { Mail, MapPin, Youtube, Linkedin, Twitter, Facebook, Github, ArrowUpRight } from "lucide-react";

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about/" },
  { name: "Contact", href: "/contact/" },
];

const serviceLinks = [
  { name: "All Services", href: "/services/" },
  { name: "Portfolio", href: "/portfolio/" },
  { name: "Hire Me", href: "/contact/" },
];

const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@AlchemifySpace", icon: Youtube },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/alchemifyspace/", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "https://www.facebook.com/AlchemifySpace", icon: Facebook },
  { name: "GitHub", href: "https://github.com/Alchemify-Space", icon: Github },
];

export function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              Alchemify<span className="text-[#ed8936]">.</span>Space
            </Link>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Transforming abstract ideas into concrete digital products. We bring your vision to life through innovative technology solutions.
            </p>
            <div className="mt-6 flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4 text-[#ed8936]" />
              <span className="text-sm">Sahiwal, Pakistan</span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ed8936] transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ed8936] transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:alchemify.space@gmail.com"
                  className="text-gray-300 hover:text-[#ed8936] transition-colors flex items-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4 text-[#ed8936]" />
                  alchemify.space@gmail.com
                </a>
              </li>
              <li className="text-gray-300 text-sm">
                <span className="block">Primary:</span>
                <span>Chak 6061/GD, Tehsil and District Sahiwal, Pakistan</span>
              </li>
              <li className="text-gray-300 text-sm">
                <span className="block">Secondary:</span>
                <span>Chak 89/6-R, Sahiwal, Pakistan</span>
              </li>
              <li className="text-gray-300 text-sm">
                <span>Phone: +92 310 1556061</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 <span className="text-[#ed8936]">Alchemify.Space</span>. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ed8936] transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-gray-400 hover:text-[#ed8936] transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#ed8936] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
