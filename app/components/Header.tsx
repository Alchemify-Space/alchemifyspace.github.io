"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Mail, Youtube, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Portfolio", href: "/portfolio/" },
  { name: "About Me", href: "/about/" },
  { name: "Contact", href: "/contact/" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1a365d] shadow-md`}
    >
      {/* Top Bar */}
      <div
        className={`border-b border-white/10 transition-colors duration-300 bg-[#152c4d]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <a
              href="mailto:alchemifyspace@gmail.com"
              className="flex items-center gap-2 text-white hover:text-[#ed8936] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>alchemifyspace@gmail.com</span>
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://youtube.com/@AlchemifySpace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ed8936] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ed8936] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ed8936] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Alchemify<span className="text-[#ed8936]">.</span>Space
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-white transition-colors hover:text-[#ed8936]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/contact/" className="hidden md:block">
              <Button className="bg-[#ed8936] hover:bg-[#ed8936]/90 text-white">
                Hire Me
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col gap-8 mt-8">
                  <Link href="/" className="text-2xl font-bold text-[#1a365d]">
                    Alchemify<span className="text-[#ed8936]">.</span>Space
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className="text-lg font-medium text-[#1a365d] hover:text-[#ed8936] transition-colors py-2 border-b border-gray-100"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <SheetClose asChild>
                    <Link href="/contact/">
                      <Button className="w-full bg-[#ed8936] hover:bg-[#ed8936]/90 text-white">
                        Hire Me
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
