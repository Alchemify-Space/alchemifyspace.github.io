import { pageMetadata } from "@/app/lib/seo";
import { Redirect } from "@/app/components/Redirect";

export const metadata = pageMetadata({
  title: "Portfolio",
  description: "Our work has moved to the Products page.",
  path: "/products/",
  noIndex: true,
});

export default function PortfolioPage() {
  return <Redirect to="/products/" label="Products" />;
}
