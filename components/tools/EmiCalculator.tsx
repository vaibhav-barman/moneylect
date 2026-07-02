"use client";

import { useState } from "react";

import CalculatorForm from "./emi/CalculatorForm";
import CalculatorResult from "./emi/CalculatorResult";
import DoughnutChart from "./emi/DoughnutChart";

import { calculateEMI } from "@/lib/calculators/emi";

export default function EmiCalculator() {

  const [loanAmount, setLoanAmount] = useState(1000000);

  const [rate, setRate] = useState(8.5);

  const [years, setYears] = useState(20);

  const result = calculateEMI(
    loanAmount,
    rate,
    years
  );

  return (

    <div className="grid gap-8 lg:grid-cols-[420px_1fr]">

      <CalculatorForm
        loanAmount={loanAmount}
        rate={rate}
        years={years}
        setLoanAmount={setLoanAmount}
        setRate={setRate}
        setYears={setYears}
      />

      <div className="space-y-8">

        <CalculatorResult
          emi={result.emi}
          interest={result.interest}
          total={result.total}
        />

        <DoughnutChart
          principal={loanAmount}
          interest={result.interest}
        />

      </div>

    </div>

  );

}