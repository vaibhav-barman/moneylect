import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SipCalculator from "@/components/tools/SipCalculator";
import FAQ from "@/components/tools/sip/FAQ";

export default function SipCalculatorPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
              Moneylect Tool
            </span>

            <h1 className="mt-8 text-6xl font-extrabold text-gray-900">
              SIP Calculator
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
              Estimate how much wealth you can build through monthly
              SIP investments using the power of compounding.
            </p>

          </div>

          <div className="mt-20">

            <SipCalculator />

          </div>

          <FAQ />

        </div>

      </main>

      <Footer />
    </>
  );
}