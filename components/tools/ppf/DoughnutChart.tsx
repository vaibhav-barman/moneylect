"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
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
      name: "Investment",
      value: invested,
    },
    {
      name: "Returns",
      value: returns,
    },
  ];

  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Maturity Breakdown
      </h2>

      <div className="mt-8 h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={110}
            >

              <Cell fill="#10b981" />
              <Cell fill="#4f46e5" />

            </Pie>

            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "",
              ]}
            />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}