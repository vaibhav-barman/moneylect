"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Props = {
  invested: number;
  returns: number;
};

export default function DoughnutChart({
  invested,
  returns,
}: Props) {
  const data = [
    {
      name: "Invested",
      value: invested,
    },
    {
      name: "Returns",
      value: returns,
    },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Wealth Distribution
      </h2>

      <div className="mt-8 h-72">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
            >

              <Cell fill="#2563eb" />

              <Cell fill="#10b981" />

            </Pie>

            <text
              x="50%"
              y="48%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-500 text-sm"
            >
              Wealth
            </text>

            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-900 text-xl font-bold"
            >
              ₹
              {((invested + returns) / 100000).toFixed(1)}L
            </text>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}