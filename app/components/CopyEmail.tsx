"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/app/lib/site";

// A mailto link does nothing when the visitor has no email app set up (common on desktop),
// so the address is shown with a one-click copy button next to it.
export function CopyEmail({
  email = site.email,
  linkClassName = "",
  buttonClassName = "",
}: {
  email?: string;
  linkClassName?: string;
  buttonClassName?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Older browsers or blocked clipboard: fall back to a hidden textarea.
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className="inline-flex items-center gap-2">
      <a href={`mailto:${email}`} className={linkClassName}>
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email address copied" : `Copy ${email}`}
        title={copied ? "Copied" : "Copy email address"}
        className={`inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${buttonClassName}`}
      >
        {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </span>
  );
}
