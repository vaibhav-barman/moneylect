import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import ToolCard from "@/components/tools/ToolCard";

import { tools } from "@/data/tools/tools";

export default function ToolsPage() {
  return (
    <>
      <Navbar />

      <main className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle
            badge="Moneylect Tools"
            title="Free Finance Calculators"
            subtitle="Powerful calculators to help you make smarter financial decisions."
          />

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {tools.map((tool) => (
              <ToolCard
                key={tool.title}
                title={tool.title}
                description={tool.description}
                href={tool.href}
                icon={tool.icon}
                status={tool.status}
              />
            ))}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}