export default function Formula() {
  return (
    <section className="mt-24 rounded-[28px] border border-gray-200 bg-white p-10 shadow-sm">

      <h2 className="text-4xl font-black">
        PPF Formula
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        The Public Provident Fund (PPF) grows using compound interest. Every
        year's contribution earns interest until maturity.
      </p>

      <div className="mt-10 rounded-2xl bg-gray-100 p-8">

        <h3 className="text-center text-3xl font-bold">
          A = P × (1 + r)<sup>t</sup>
        </h3>

      </div>

      <div className="mt-10 space-y-4 text-lg text-gray-600">

        <p><strong>A</strong> = Maturity Amount</p>

        <p><strong>P</strong> = Total Investment</p>

        <p><strong>r</strong> = Annual Interest Rate</p>

        <p><strong>t</strong> = Investment Period</p>

      </div>

    </section>
  );
}