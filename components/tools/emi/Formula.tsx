export default function Formula() {
  return (
    <section className="mt-20 rounded-[28px] border border-gray-200 bg-white p-10 shadow-sm">
      <h2 className="text-3xl font-bold">
        EMI Formula
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        EMI is calculated using the standard loan amortization formula.
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-gray-100 p-6">
        <code className="text-lg font-semibold">
          EMI = P × R × (1 + R)^N / ((1 + R)^N − 1)
        </code>
      </div>

      <div className="mt-8 space-y-3 text-gray-600">
        <p><strong>P</strong> = Loan Amount</p>
        <p><strong>R</strong> = Monthly Interest Rate</p>
        <p><strong>N</strong> = Total Number of Monthly Installments</p>
      </div>
    </section>
  );
}