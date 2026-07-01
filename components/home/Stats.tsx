const stats = [
  {
    number: "100+",
    title: "Finance Guides",
    subtitle: "Easy to understand",
  },
  {
    number: "100%",
    title: "Free Learning",
    subtitle: "No paywall",
  },
  {
    number: "🇮🇳",
    title: "Built for India",
    subtitle: "Students & Freshers",
  },
];

export default function Stats() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-3">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="text-center"
        >
          <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
            {stat.number}
          </h3>

          <p className="mt-3 font-semibold text-gray-900">
            {stat.title}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {stat.subtitle}
          </p>
        </div>
      ))}

    </div>
  );
}