import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// Article typography for blog posts. The project has no @tailwindcss/typography
// plugin, so `prose` classes do nothing: every Markdown element is styled here.
//
// Illustrations: put the file in public/images/blog/ and write
//   ![Alt text](/images/blog/file.svg "Caption shown under the image")
// on its own line in the Markdown.
const components: Components = {
  // The page hero already holds the one <h1>, so a Markdown "# Title" becomes the article's subtitle.
  h1: ({ children }) => (
    <h2 className="mb-6 font-heading text-2xl md:text-[32px] leading-tight font-bold text-brand-indigo">{children}</h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 font-heading text-[22px] md:text-[26px] leading-snug font-bold text-brand-indigo">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 font-heading text-xl font-semibold text-brand-indigo">{children}</h3>
  ),
  p: ({ node, children }) => {
    // An image on its own line renders as a <figure>, which may not sit inside a <p>.
    const only = node?.children.length === 1 ? node.children[0] : undefined;
    if (only && only.type === "element" && only.tagName === "img") return <>{children}</>;
    return <p className="mb-5 text-[17px] md:text-lg leading-[1.75] text-slate-700">{children}</p>;
  },
  ul: ({ children }) => (
    <ul className="mb-6 list-disc space-y-2.5 pl-6 text-[17px] md:text-lg leading-[1.7] text-slate-700 marker:text-brand-purple">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 list-decimal space-y-2.5 pl-6 text-[17px] md:text-lg leading-[1.7] text-slate-700 marker:font-semibold marker:text-brand-purple">
      {children}
    </ol>
  ),
  strong: ({ children }) => <strong className="font-semibold text-brand-indigo">{children}</strong>,
  a: ({ href, children }) => (
    <a href={href} className="font-medium text-brand-purple underline underline-offset-2 hover:text-brand-purple-dark">
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-brand-gold bg-brand-mist py-4 pl-5 pr-4 [&>p]:mb-0 [&>p]:text-brand-indigo">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-brand-tint px-1.5 py-0.5 font-[ui-monospace,SFMono-Regular,Menlo,monospace] text-[0.88em] text-brand-purple-dark">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-6 overflow-x-auto rounded-xl bg-brand-ink p-5 text-sm leading-relaxed text-slate-100 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-10 border-slate-200" />,
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[520px] border-collapse text-left text-[15px] md:text-base">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-brand-indigo text-white">{children}</thead>,
  th: ({ children }) => <th className="px-4 py-3 font-heading font-semibold">{children}</th>,
  tr: ({ children }) => <tr className="border-t border-slate-200 first:border-t-0 even:bg-brand-mist">{children}</tr>,
  td: ({ children }) => <td className="px-4 py-3 align-top leading-relaxed text-slate-700">{children}</td>,
  img: ({ src, alt, title }) => (
    <figure className="my-10">
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        {/* Plain <img>: these are static SVG diagrams and the site is a static export. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={typeof src === "string" ? src : undefined}
          alt={alt ?? ""}
          loading="lazy"
          className="block h-auto w-full min-w-[480px]"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm leading-relaxed text-slate-500">
        {title}
        {/* Below 480px the diagram keeps a readable size and scrolls sideways. */}
        <span className="block text-xs text-slate-400 min-[520px]:hidden">Swipe sideways to see the whole diagram.</span>
      </figcaption>
    </figure>
  ),
};

export function PostBody({ content }: { content: string }) {
  return (
    <article>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
