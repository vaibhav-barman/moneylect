export default function Formula() {
  return (
    <div className="mt-20 rounded-[32px] bg-emerald-50 p-10">

      <h2 className="text-3xl font-bold">
        How is SIP calculated?
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-700">
        Future Value =
      </p>

      <div className="mt-5 rounded-xl bg-white p-6 text-center text-3xl font-bold">

        P ×
        (
        ((1+r)^n−1)
        /
        r
        )
        ×
        (1+r)

      </div>

      <p className="mt-8 leading-8 text-gray-700">

        Where

      </p>

      <ul className="mt-4 space-y-3 leading-8">

        <li>
          <b>P</b> = Monthly Investment
        </li>

        <li>
          <b>r</b> = Monthly Interest Rate
        </li>

        <li>
          <b>n</b> = Total Months
        </li>

      </ul>

    </div>
  );
}