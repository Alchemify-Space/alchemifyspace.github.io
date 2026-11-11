import { pageMetadata } from "@/app/lib/seo";
import { Redirect } from "@/app/components/Redirect";

export const metadata = pageMetadata({
  title: "Services",
  description: "Our services have moved to the For Agencies page.",
  path: "/agencies/",
  noIndex: true,
});

export default function ServicesPage() {
  return <Redirect to="/agencies/" label="For Agencies" />;
}
