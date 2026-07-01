import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SipCalculator from "@/components/tools/SipCalculator";

export default function SipCalculatorPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen py-24">

        <div className="mx-auto max-w-6xl px-6">

          <h1 className="text-center text-5xl font-bold">
            SIP Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
            Estimate how your monthly investments can grow over time using the power of compounding.
          </p>

          <div className="mt-20">
            <SipCalculator />
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}