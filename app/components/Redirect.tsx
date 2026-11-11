"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Static export has no server redirects, so old URLs forward on the client.
export function Redirect({ to, label }: { to: string; label: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-24 text-center">
      <p className="text-lg text-slate-600">
        This page has moved to{" "}
        <Link href={to} className="font-semibold text-brand-purple">
          {label}
        </Link>
        .
      </p>
    </div>
  );
}
