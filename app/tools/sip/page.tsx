import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import SipCalculator from "@/components/tools/SipCalculator";
import FAQ from "@/components/tools/sip/FAQ";
import InfoCards from "@/components/tools/sip/InfoCards";

import Formula from "@/components/tools/sip/Formula";
import LearnMore from "@/components/tools/sip/LearnMore";

import Benefits from "@/components/tools/sip/Benefits";
import Example from "@/components/tools/sip/Example";
import Comparison from "@/components/tools/sip/Comparison";

import RelatedCalculators from "@/components/tools/shared/RelatedCalculators";
import RelatedArticles from "@/components/tools/shared/RelatedArticles";

export default function SipCalculatorPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-gray-50 to-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
              Moneylect Tool
            </span>

            <h1 className="mt-8 text-5xl font-black tracking-tight text-gray-900 lg:text-6xl">
              SIP Calculator
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Estimate how much wealth you can build through monthly SIP
              investments using the power of compounding.
            </p>

          </div>

          <div className="mt-20">

            <SipCalculator />

          </div>

          <InfoCards />

          <FAQ />
          
          <Formula />

          <Benefits />

          <Example />

          <Comparison />

          <LearnMore />

          <RelatedCalculators />

          <RelatedArticles />

        </div>

      </main>

      <Footer />
    </>
  );
}