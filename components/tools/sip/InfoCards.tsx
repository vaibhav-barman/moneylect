export default function InfoCards() {
  return (
    <section className="mt-20">

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

          <h3 className="text-2xl font-bold text-gray-900">
            💹 Power of Compounding
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Even small monthly SIPs can grow significantly over time because your returns begin earning returns.
          </p>

        </div>

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">

          <h3 className="text-2xl font-bold text-gray-900">
            📈 Invest Consistently
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Investing every month helps reduce market timing risk through rupee cost averaging.
          </p>

        </div>

        <div className="rounded-3xl border border-purple-100 bg-purple-50 p-8">

          <h3 className="text-2xl font-bold text-gray-900">
            🚀 Start Early
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            The earlier you start investing, the longer compounding has to work for you.
          </p>

        </div>

      </div>

    </section>
  );
}