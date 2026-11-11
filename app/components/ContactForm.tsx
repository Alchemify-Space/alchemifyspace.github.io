"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { site } from "@/app/lib/site";

// With NEXT_PUBLIC_WEB3FORMS_KEY set (free key from web3forms.com, delivered to the
// alchemifyspace@gmail.com inbox), messages are sent directly. Without it the form opens
// the visitor's email app with the message filled in, so no enquiry is ever lost.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const needs = [
  { value: "White-label work for my agency", label: "White-label work for my agency" },
  { value: "AI features for my app", label: "AI features for my app" },
  { value: "Glamio or another ready-made app", label: "Glamio or another ready-made app" },
  { value: "Something else", label: "Something else" },
];

const budgets = ["Not sure yet", "Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "Over $15,000"];

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const inputClass =
  "min-h-12 rounded-[10px] border border-slate-400 px-3.5 py-3 font-normal text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    (document.activeElement as HTMLElement | null)?.blur();

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const need = String(data.get("need") ?? "");
    const budget = String(data.get("budget") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Website enquiry: ${need} — ${name}`;

    if (!WEB3FORMS_KEY) {
      const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nNeed: ${need}\nBudget: ${budget}\n\n${message}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: "alchemify.space",
          replyto: email,
          name,
          email,
          company,
          need,
          budget,
          message,
        }),
      });
      const json = await res.json();
      setStatus(res.ok && json.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "mailto") {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center" role="status">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-tint">
          <Check className="h-7 w-7 text-brand-purple" aria-hidden="true" />
        </div>
        <h2 className="font-heading text-[28px] font-bold text-brand-indigo">
          {status === "sent" ? "Message received" : "Almost there"}
        </h2>
        <p className="max-w-[420px] leading-relaxed text-slate-600">
          {status === "sent" ? (
            "Thanks. We will reply within one working day."
          ) : (
            <>
              Your email app should have opened with the message filled in. Press send there, or email
              us directly at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-purple">
                {site.email}
              </a>
              .
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-brand-indigo">
          Your name
          <input name="name" type="text" required autoComplete="name" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-brand-indigo">
          Work email
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-semibold text-brand-indigo">
        Company or agency
        <input name="company" type="text" autoComplete="organization" className={inputClass} />
      </label>
      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-2.5 text-sm font-semibold text-brand-indigo">What do you need?</legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {needs.map((n, i) => (
            <label
              key={n.value}
              className="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-[10px] border border-slate-300 px-3.5 py-3 has-[:checked]:border-brand-purple has-[:checked]:bg-brand-tint"
            >
              <input type="radio" name="need" value={n.value} defaultChecked={i === 0} className="accent-brand-purple" />
              {n.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex flex-col gap-2 text-sm font-semibold text-brand-indigo">
        Budget
        <select name="budget" className={`${inputClass} bg-white`} defaultValue={budgets[0]}>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-brand-indigo">
        Tell us about the project
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What are you building, and by when?"
          className={`${inputClass} resize-y`}
        />
      </label>
      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-800" role="alert">
          The message could not be sent. Please email us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 self-start rounded-[10px] bg-brand-indigo px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-indigo/90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
