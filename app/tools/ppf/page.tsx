import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PpfCalculator from "@/components/tools/PpfCalculator";

import FAQ from "@/components/tools/ppf/FAQ";
import Formula from "@/components/tools/ppf/Formula";
import LearnMore from "@/components/tools/ppf/LearnMore";

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
              PPF Calculator
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Calculate your Public Provident Fund maturity amount instantly.
            </p>

          </div>

          <div className="mt-20">

            <PpfCalculator />

            <div className="mt-24 rounded-[32px] bg-gradient-to-r from-emerald-600 to-emerald-700 p-12 text-white">

            <h2 className="text-4xl font-black">

            Why use our FD Calculator?

            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-100">

            Estimate your maturity amount instantly, compare investment durations, understand compound interest and plan your savings more effectively.

            </p>

            </div>

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