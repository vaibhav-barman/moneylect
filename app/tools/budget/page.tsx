import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BudgetPlannerPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Budget Planner
          </h1>

          <p className="mt-6 text-gray-600">
            Coming in the next sprint.
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}