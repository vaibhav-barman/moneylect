"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

type Props = {
  monthlyInvestment: number;
  years: number;
};

export default function GrowthChart({
  monthlyInvestment,
  years,
}: Props) {

  const data = [];

  for (let year = 1; year <= years; year++) {

    data.push({
      year,

      invested: monthlyInvestment * 12 * year,
    });

  }

  return (

    <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

      <h2 className="text-2xl font-bold">
        Investment Growth
      </h2>

      <div className="mt-8 h-[420px]">

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="year" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="invested"
              stroke="#10b981"
              strokeWidth={4}
              dot={false}
              activeDot={{
                r: 7,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}