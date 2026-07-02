"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

type Props = {
  principal: number;
  interest: number;
};

export default function DoughnutChart({
  principal,
  interest,
}: Props) {

  const data = [
    {
      name: "Investment",
      value: principal,
    },
    {
      name: "Interest",
      value: interest,
    },
  ];

  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Maturity Breakdown
      </h2>

      <div className="mt-8 h-80">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
              label
            >

              <Cell fill="#10b981" />

              <Cell fill="#4f46e5" />

            </Pie>

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}