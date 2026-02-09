import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[120px]">{children}</main>
      <Footer />
    </div>
  );
}
