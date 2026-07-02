"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

type Props = {
  investment: number;
  years: number;
  rate: number;
};

export default function GrowthChart({
  investment,
  years,
  rate,
}: Props) {

  const data = [];

  let balance = 0;

  for (let year = 1; year <= years; year++) {

    balance += investment;

    balance *= 1 + rate / 100;

    data.push({
      year,
      value: Math.round(balance),
    });

  }

  return (

    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        PPF Growth
      </h2>

      <div className="mt-8 h-80">

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="year"/>

            <Tooltip
              formatter={(value)=>[
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Balance",
              ]}
            />

            <Line
              dataKey="value"
              stroke="#10b981"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}