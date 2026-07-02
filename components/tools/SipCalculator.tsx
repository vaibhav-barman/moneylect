"use client";

import { useState } from "react";

import { calculateSIP } from "@/lib/calculators/sip";

import CalculatorForm from "./sip/CalculatorForm";
import CalculatorResult from "./sip/CalculatorResult";
import GrowthChart from "./sip/GrowthChart";
import DoughnutChart from "./sip/DoughnutChart";
import InvestmentTable from "./sip/InvestmentTable";
import QuickAmounts from "./sip/QuickAmounts";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(12);

  const result = calculateSIP(
    monthlyInvestment,
    years,
    rate
  );

  return (
    <div className="space-y-10">

      <div className="grid gap-8 lg:grid-cols-[420px_1fr]">

        {/* LEFT */}

        <div>

          <CalculatorForm
            monthlyInvestment={monthlyInvestment}
            years={years}
            rate={rate}
            setMonthlyInvestment={setMonthlyInvestment}
            setYears={setYears}
            setRate={setRate}
          />

          <QuickAmounts
            onSelect={setMonthlyInvestment}
          />

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <CalculatorResult
            invested={result.invested}
            returns={result.returns}
            total={result.total}
          />

          <DoughnutChart
            invested={result.invested}
            returns={result.returns}
          />

        </div>

      </div>

      <GrowthChart
        monthlyInvestment={monthlyInvestment}
        years={years}
      />

      <InvestmentTable
        monthlyInvestment={monthlyInvestment}
        years={years}
      />

    </div>
  );
}