import Link from "next/link";

const calculators = [
  {
    title: "SIP Calculator",
    href: "/tools/sip",
  },
  {
    title: "EMI Calculator",
    href: "/tools/emi",
  },
  {
    title: "FD Calculator",
    href: "/tools/fd",
  },
  {
    title: "PPF Calculator",
    href: "/tools/ppf",
  },
  {
    title: "Lumpsum Calculator",
    href: "/tools/lumpsum",
  },
];

export default function CalculatorSidebar() {
  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        More Calculators
      </h2>

      <div className="mt-8 space-y-4">
        {calculators.map((calc) => (
          <Link
            key={calc.title}
            href={calc.href}
            className="block rounded-xl border border-gray-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50"
          >
            {calc.title}
          </Link>
        ))}
      </div>
    </div>
  );
}