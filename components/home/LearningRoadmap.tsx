const roadmap = [
  {
    step: "01",
    title: "Money Basics",
    description: "Understand how money works before earning your first salary.",
  },
  {
    step: "02",
    title: "Budgeting",
    description: "Create a budget that helps you spend intentionally.",
  },
  {
    step: "03",
    title: "Saving",
    description: "Build your emergency fund and develop saving habits.",
  },
  {
    step: "04",
    title: "Investing",
    description: "Start investing through SIPs, mutual funds and index funds.",
  },
  {
    step: "05",
    title: "Insurance",
    description: "Learn how to protect yourself financially.",
  },
  {
    step: "06",
    title: "Financial Freedom",
    description: "Build wealth and create long-term financial independence.",
  },
];

export default function LearningRoadmap() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-5xl font-bold text-gray-900">
          Your Financial Journey
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-600">
          Learn personal finance in the right order instead of guessing what to
          study next.
        </p>

        <div className="mt-20 space-y-8">
          {roadmap.map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-6 rounded-3xl border border-gray-200 p-8 transition hover:border-emerald-500 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
                {item.step}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}