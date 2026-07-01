"use client";

import { useState } from "react";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(20);
  const [returnRate, setReturnRate] = useState(12);

  return (
    <div className="grid gap-10 lg:grid-cols-2">

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

        <h2 className="text-3xl font-bold">
          Investment Details
        </h2>

        <div className="mt-10 space-y-8">

          <div>
            <label className="font-semibold">
              Monthly Investment
            </label>

            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="mt-3 w-full rounded-xl border border-gray-300 p-4"
            />
          </div>

          <div>
            <label className="font-semibold">
              Investment Period (Years)
            </label>

            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="mt-3 w-full rounded-xl border border-gray-300 p-4"
            />
          </div>

          <div>
            <label className="font-semibold">
              Expected Return (%)
            </label>

            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="mt-3 w-full rounded-xl border border-gray-300 p-4"
            />
          </div>

        </div>

      </div>

      <div className="rounded-3xl bg-emerald-600 p-8 text-white">

        <h2 className="text-3xl font-bold">
          Estimated Value
        </h2>

        <p className="mt-8 text-lg">
          Calculator logic coming next...
        </p>

      </div>

    </div>
  );
}