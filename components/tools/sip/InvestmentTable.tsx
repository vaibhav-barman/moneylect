type Props = {
  monthlyInvestment: number;
  years: number;
};

export default function InvestmentTable({
  monthlyInvestment,
  years,
}: Props) {

  const rows = [];

  let invested = 0;

  const visibleYears = [
    1,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    ].filter((y) => y <= years);

    for (const year of visibleYears) {

    invested += monthlyInvestment * 12;

    const wealth = Math.round(
      invested *
      Math.pow(1.12, year)
    );

    rows.push({
      year,
      invested,
      wealth,
    });

  }

  return (

    <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-2xl font-bold">
        Year-wise Growth
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="pb-4 text-left">
              Year
            </th>

            <th className="pb-4 text-right">
              Invested
            </th>

            <th className="pb-4 text-right">
              Wealth
            </th>

          </tr>

        </thead>

        <tbody>

          {rows.map((row) => (

            <tr
              key={row.year}
              className="
                border-b
                transition-colors
                hover:bg-emerald-50
              "
            >

              <td className="py-4">
                {row.year}
              </td>

              <td className="py-4 text-right">

                ₹{row.invested.toLocaleString()}

              </td>

              <td className="py-4 text-right font-semibold text-emerald-600">

                ₹{row.wealth.toLocaleString()}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}