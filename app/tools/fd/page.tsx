import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FdCalculator from "@/components/tools/FdCalculator";

import FAQ from "@/components/tools/fd/FAQ";
import Formula from "@/components/tools/fd/Formula";
import LearnMore from "@/components/tools/fd/LearnMore";

import RelatedCalculators from "@/components/tools/shared/RelatedCalculators";
import RelatedArticles from "@/components/tools/shared/RelatedArticles";

export default function FDPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-gray-50 to-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Moneylect Tool
            </span>

            <h1 className="mt-8 text-5xl font-black lg:text-6xl">
              FD Calculator
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Calculate your Fixed Deposit maturity amount and total interest earned instantly.
            </p>

          </div>

          <div className="mt-20">

            <FdCalculator />

          </div>

          <Formula />

          <FAQ />

          <LearnMore />

          <RelatedCalculators />

          <RelatedArticles />

        </div>

      </main>

      <Footer />

    </>
  );
}