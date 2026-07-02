export default function Comparison() {
  return (
    <section className="mt-24">

      <h2 className="text-center text-5xl font-black">
        SIP vs Fixed Deposit
      </h2>

      <div className="mt-16 overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-5 text-left">
                Feature
              </th>

              <th className="p-5 text-left">
                SIP
              </th>

              <th className="p-5 text-left">
                Fixed Deposit
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t">
              <td className="p-5 font-medium">Returns</td>
              <td className="p-5">Market Linked</td>
              <td className="p-5">Fixed</td>
            </tr>

            <tr className="border-t">
              <td className="p-5 font-medium">Risk</td>
              <td className="p-5">Medium</td>
              <td className="p-5">Low</td>
            </tr>

            <tr className="border-t">
              <td className="p-5 font-medium">Liquidity</td>
              <td className="p-5">High</td>
              <td className="p-5">Medium</td>
            </tr>

            <tr className="border-t">
              <td className="p-5 font-medium">Best For</td>
              <td className="p-5">Long-term Wealth</td>
              <td className="p-5">Capital Protection</td>
            </tr>

          </tbody>

        </table>

      </div>

    </section>
  );
}