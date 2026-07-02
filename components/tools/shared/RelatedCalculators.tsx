import Link from "next/link";

const calculators = [
  {
    title: "EMI Calculator",
    href: "/tools/emi",
    description: "Calculate your monthly home, car or personal loan EMI.",
  },
  {
    title: "FD Calculator",
    href: "/tools/fd",
    description: "Estimate your fixed deposit maturity amount.",
  },
  {
    title: "PPF Calculator",
    href: "/tools/ppf",
    description: "Calculate long-term PPF returns.",
  },
  {
    title: "Lumpsum Calculator",
    href: "/tools/lumpsum",
    description: "Estimate future value of one-time investments.",
  },
];

export default function RelatedCalculators() {
  return (
    <section className="mt-28">

      <h2 className="text-center text-5xl font-black">
        Explore More Calculators
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-gray-600">
        Continue learning with our other free finance calculators.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {calculators.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              {item.description}
            </p>

            <p className="mt-6 font-semibold text-emerald-600">
              Open →
            </p>

          </Link>
        ))}

      </div>

    </section>
  );
}