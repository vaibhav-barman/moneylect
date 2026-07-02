"use client";

import { useState } from "react";

import { calculatePPF } from "@/lib/calculators/ppf";

import CalculatorForm from "./ppf/CalculatorForm";
import CalculatorResult from "./ppf/CalculatorResult";
import DoughnutChart from "./ppf/DoughnutChart";
import GrowthChart from "./ppf/GrowthChart";
import InvestmentTable from "./ppf/InvestmentTable";

export default function PpfCalculator() {

  const [investment, setInvestment] = useState(150000);

  const [years, setYears] = useState(15);

  const [rate, setRate] = useState(7.1);

  const result = calculatePPF(
    investment,
    years,
    rate
  );

  return (

    <div className="space-y-10">

      <div className="grid gap-8 lg:grid-cols-[420px_1fr]">

        <CalculatorForm
          investment={investment}
          years={years}
          rate={rate}
          setInvestment={setInvestment}
          setYears={setYears}
          setRate={setRate}
        />

        <div className="space-y-6">

          <CalculatorResult
            invested={result.invested}
            returns={result.returns}
            maturity={result.maturity}
          />

          <DoughnutChart
            invested={result.invested}
            returns={result.returns}
          />

        </div>

      </div>

      <GrowthChart
        investment={investment}
        years={years}
        rate={rate}
      />

      <InvestmentTable
        investment={investment}
        years={years}
        rate={rate}
      />

    </div>

  );

}