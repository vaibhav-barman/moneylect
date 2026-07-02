export default function LearnMore() {
  return (
    <section className="mt-24">

      <h2 className="text-center text-5xl font-black">
        Learn About Fixed Deposits
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold">
            Benefits
          </h3>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ Guaranteed Returns</li>
            <li>✔ Low Risk Investment</li>
            <li>✔ Flexible Tenure</li>
            <li>✔ Suitable for Conservative Investors</li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold">
            Things to Know
          </h3>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ Interest is Taxable</li>
            <li>✔ Premature Withdrawal may attract penalty</li>
            <li>✔ Higher tenure usually gives better returns</li>
            <li>✔ Compare bank interest rates before investing</li>
          </ul>
        </div>

      </div>

    </section>
  );
}