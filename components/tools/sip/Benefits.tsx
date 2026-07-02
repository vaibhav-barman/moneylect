const benefits = [
  {
    title: "Power of Compounding",
    description:
      "Your returns generate additional returns over time, helping your investments grow exponentially.",
  },
  {
    title: "Affordable Investing",
    description:
      "Start investing with small monthly amounts instead of waiting to accumulate a large lump sum.",
  },
  {
    title: "Disciplined Habit",
    description:
      "Automatic monthly investments help build long-term financial discipline.",
  },
  {
    title: "Rupee Cost Averaging",
    description:
      "Regular investments buy more units when prices are low and fewer when prices are high.",
  },
];

export default function Benefits() {
  return (
    <section className="mt-24">

      <h2 className="text-center text-5xl font-black">
        Why Invest Through SIP?
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
        SIP investing isn't just convenient—it helps build wealth through
        consistency and the power of compounding.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">

        {benefits.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}