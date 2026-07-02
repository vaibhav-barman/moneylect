export default function Example() {
  return (
    <section className="mt-24 rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm">

      <h2 className="text-4xl font-black">
        Example
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-600">
        Imagine you invest ₹5,000 every month for 20 years at an expected annual
        return of 12%.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div>
          <p className="text-gray-500">
            Total Investment
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            ₹12,00,000
          </h3>
        </div>

        <div>
          <p className="text-gray-500">
            Estimated Returns
          </p>

          <h3 className="mt-2 text-3xl font-bold text-emerald-600">
            ₹37,95,000+
          </h3>
        </div>

        <div>
          <p className="text-gray-500">
            Total Wealth
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            ₹49,95,000+
          </h3>
        </div>

      </div>

    </section>
  );
}