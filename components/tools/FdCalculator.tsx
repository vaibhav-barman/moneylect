"use client";

import { useState } from "react";

import { calculateFD } from "@/lib/calculators/fd";

import CalculatorForm from "@/components/tools/fd/CalculatorForm";
import CalculatorResult from "@/components/tools/fd/CalculatorResult";
import DoughnutChart from "@/components/tools/fd/DoughnutChart";
import GrowthChart from "@/components/tools/fd/GrowthChart";

export default function FdCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(7);

  const result = calculateFD(
    principal,
    rate,
    years
  );

  return (
    <div className="space-y-10">

      <div className="grid gap-8 lg:grid-cols-[420px_1fr]">

        <CalculatorForm
          principal={principal}
          years={years}
          rate={rate}
          setPrincipal={setPrincipal}
          setYears={setYears}
          setRate={setRate}
        />

        <div className="space-y-6">

          <CalculatorResult
            principal={result.principal}
            interest={result.interest}
            maturity={result.maturity}
          />

          <DoughnutChart
            principal={result.principal}
            interest={result.interest}
          />

        </div>

      </div>

      <GrowthChart
        principal={principal}
        years={years}
        rate={rate}
      />

    </div>
  );
}