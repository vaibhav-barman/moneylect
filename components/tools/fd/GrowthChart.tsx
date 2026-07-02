"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

type Props = {
  principal: number;
  years: number;
  rate: number;
};

export default function GrowthChart({
  principal,
  years,
  rate,
}: Props) {

  const data = [];

  for (let year = 1; year <= years; year++) {

    const wealth =
      principal *
      Math.pow(
        1 + rate / 100,
        year
      );

    data.push({
      year,
      wealth: Math.round(wealth),
    });

  }

  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        FD Growth
      </h2>

      <div className="mt-8 h-80">

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="year" />

            <Tooltip />

            <Line
              dataKey="wealth"
              stroke="#10b981"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}