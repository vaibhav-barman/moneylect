type Props = {
  principal: number;
  years: number;
  rate: number;
};

export default function InvestmentTable({
  principal,
  years,
  rate,
}: Props) {

  const rows = [];

  for (let year = 1; year <= years; year++) {

    const maturity =
      principal *
      Math.pow(
        1 + rate / 100,
        year
      );

    rows.push({
      year,
      value: Math.round(maturity),
    });

  }

  return (

    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Year-wise Growth
      </h2>

      <div className="mt-8 overflow-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-4 text-left">
                Year
              </th>

              <th className="py-4 text-right">
                Value
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

                <td className="py-4 text-right font-semibold">
                  ₹{row.value.toLocaleString("en-IN")}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}