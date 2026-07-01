export default function TrustSection() {
  const stats = [
    {
      number: "100+",
      label: "Finance Articles",
    },
    {
      number: "10+",
      label: "Learning Modules",
    },
    {
      number: "100%",
      label: "Free to Learn",
    },
    {
      number: "Made for",
      label: "Indian Students",
    },
  ];

  return (
    <section className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

          {stats.map((item) => (
            <div key={item.label}>

              <h3 className="text-4xl font-extrabold text-emerald-600">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}