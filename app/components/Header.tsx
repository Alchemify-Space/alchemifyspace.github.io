"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { mainNav, site } from "@/app/lib/site";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-brand-indigo">
      <Image
        src="/images/logo/alchemify-logo-round.png"
        alt=""
        width={40}
        height={40}
        className="rounded-full"
        priority
      />
      <span className="font-heading text-xl font-bold">Alchemify Space</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7 text-[15px] font-medium">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`py-2.5 transition-colors hover:text-brand-purple ${
                isActive(item.href) ? "text-brand-purple font-semibold" : "text-brand-indigo"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={site.bookingUrl}
            className="rounded-lg bg-brand-gold px-5 py-3 font-semibold text-brand-indigo transition-colors hover:bg-brand-gold/90"
          >
            Book a call
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-indigo hover:bg-brand-tint"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white p-6">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mt-6 flex flex-col gap-6">
              <Logo />
              <nav aria-label="Mobile" className="flex flex-col">
                {mainNav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="border-b border-slate-100 py-3 text-lg font-medium text-brand-indigo hover:text-brand-purple"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/contact/"
                    className="border-b border-slate-100 py-3 text-lg font-medium text-brand-indigo hover:text-brand-purple"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </nav>
              <SheetClose asChild>
                <Link
                  href={site.bookingUrl}
                  className="rounded-lg bg-brand-gold px-5 py-3 text-center font-semibold text-brand-indigo"
                >
                  Book a call
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
