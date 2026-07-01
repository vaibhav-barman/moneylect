import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import LearnGrid from "@/components/learn/LearnGrid";

export default function LearnPage() {
  return (
    <>
      <Navbar />

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle
            badge="Learning Hub"
            title="Master Personal Finance Step by Step"
            subtitle="Choose a topic and complete lessons in order."
          />

          <LearnGrid />

        </div>

      </section>

      <Footer />
    </>
  );
}