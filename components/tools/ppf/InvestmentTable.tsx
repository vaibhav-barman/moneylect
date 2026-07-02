type Props = {
  investment: number;
  years: number;
  rate: number;
};

export default function InvestmentTable({
  investment,
  years,
  rate,
}: Props) {
  const rows = [];

  let balance = 0;

  for (let year = 1; year <= years; year++) {
    balance += investment;
    balance *= 1 + rate / 100;

    rows.push({
      year,
      balance: Math.round(balance),
    });
  }

  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Year-wise Growth
      </h2>

      <div className="mt-8 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-4 text-left">
                Year
              </th>

              <th className="py-4 text-right">
                Balance
              </th>

            </tr>

          </thead>

          <tbody>

            {rows.map((row) => (

              <tr
                key={row.year}
                className="border-b"
              >

                <td className="py-4">
                  {row.year}
                </td>

                <td className="py-4 text-right font-semibold text-emerald-600">
                  ₹{row.balance.toLocaleString("en-IN")}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}